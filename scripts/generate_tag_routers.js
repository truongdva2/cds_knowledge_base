const fs = require('fs/promises');
const path = require('path');
const YAML = require('yaml');

const VIEWS_DIR = path.join(__dirname, '..', 'views');
const ROUTERS_DIR = path.join(__dirname, '..', 'routers');
const METADATA_FILE = path.join(__dirname, 'tag_metadata.json');

// These are generic tags that map to thousands of views and break AI context
const IGNORED_TAGS_IN_MASTER = [
    'interface-view', 'interface_view',
    'text-view', 'text_view', 'text',
    'item_level', 'item-level',
    'transactional_processing', 'transactional-processing',
    'consumption_view', 'consumption-view',
    'value_help', 'value-help',
    'standard_value_help', 'standard-value-help',
    'analytical', 'analytical_cube', 'analytical_query',
    'document', 'status', 'partner'
];

async function main() {
    let tagMetadata = {};
    try {
        const metaContent = await fs.readFile(METADATA_FILE, 'utf-8');
        tagMetadata = JSON.parse(metaContent);
        console.log(`Loaded metadata for ${Object.keys(tagMetadata).length} tags.`);
    } catch (e) {
        console.log('No tag_metadata.json found or failed to parse. Proceeding without metadata.');
    }

    console.log("Reading all views to build tag index...");
    const files = await fs.readdir(VIEWS_DIR);
    
    const tagMap = {};
    
    for (const file of files) {
        if (!file.endsWith('.md')) continue;
        
        const filePath = path.join(VIEWS_DIR, file);
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            if (!content.startsWith('---\n')) continue;
            
            const endOfYaml = content.indexOf('\n---', 4);
            if (endOfYaml === -1) continue;
            
            const yamlString = content.substring(4, endOfYaml);
            const frontmatter = YAML.parse(yamlString);
            
            if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
                for (let tag of frontmatter.tags) {
                    tag = tag.toLowerCase().replace('-', '_'); // normalize for comparison
                    if (!tagMap[tag]) tagMap[tag] = [];
                    tagMap[tag].push({
                        name: frontmatter.name || file.replace('.md', ''),
                        description: frontmatter.description || '-',
                        file: file
                    });
                }
            }
        } catch (e) {
            // Ignore parse errors
        }
    }
    
    console.log(`Found ${Object.keys(tagMap).length} unique tags. Generating routers...`);
    
    await fs.mkdir(ROUTERS_DIR, { recursive: true });
    
    // Clean existing routers
    const existingRouters = await fs.readdir(ROUTERS_DIR);
    for (const r of existingRouters) {
        if (r.endsWith('.md')) {
            await fs.unlink(path.join(ROUTERS_DIR, r));
        }
    }
    
    const groupedTags = {
        'component': [],
        'lob': [],
        'bo': [],
        'app': [],
        'custom': [],
        'other': []
    };
    
    for (const tag of Object.keys(tagMap)) {
        tagMap[tag].sort((a, b) => a.name.localeCompare(b.name));
        
        let prefix = 'other';
        const colonIdx = tag.indexOf(':');
        if (colonIdx > -1) {
            const p = tag.substring(0, colonIdx).toLowerCase();
            if (groupedTags[p]) {
                prefix = p;
            }
        }
        
        groupedTags[prefix].push(tag);
        
        const safeTag = tag.replace(/[^a-zA-Z0-9]/g, '_');
        const routerFileName = `tag_${safeTag}.md`;
        
        let content = `# Router: ${tag}\n\n`;
        if (tagMetadata[tag]) {
            content += `**Keywords / Description:** ${tagMetadata[tag]}\n\n`;
        }
        content += `This is a routing index for all CDS views tagged with \`${tag}\`.\n\n`;
        content += `> **Total Views:** ${tagMap[tag].length}\n\n`;
        content += `| View Name | Description |\n`;
        content += `|---|---|\n`;
        
        for (const view of tagMap[tag]) {
            content += `| [${view.name}](../views/${view.file}) | ${view.description} |\n`;
        }
        
        await fs.writeFile(path.join(ROUTERS_DIR, routerFileName), content);
    }
    
    console.log("Generating _MASTER_ROUTER.md...");
    let masterContent = `# Multi-Dimensional Routing System (Tag-Based Routers)\n\n`;
    
    // --- INJECT AI INSTRUCTIONS ---
    masterContent += `> [!IMPORTANT]\n`;
    masterContent += `> **🤖 AI AGENT INSTRUCTIONS: HOW TO USE THIS KNOWLEDGE BASE**\n`;
    masterContent += `> 1. **DO NOT** run global \`grep_search\` or text searches across the \`views/\` directory. It will overflow your context window.\n`;
    masterContent += `> 2. **ALWAYS** start here. Find the most specific tag below (e.g., \`bo:salesorder\` or \`app:...\`).\n`;
    masterContent += `> 3. Follow the link to the tag's router file (e.g., \`./tag_bo_salesorder.md\`).\n`;
    masterContent += `> 4. Inside the router file, read the list of views and choose the specific \`.md\` view file you need to read.\n\n`;
    
    masterContent += `The physical directory structure has been flattened. To look up a CDS View, please select the appropriate Tag group below:\n\n`;
    
    const displayNames = {
        'lob': '1. By Line of Business',
        'bo': '2. By Business Objects',
        'app': '3. By Fiori Apps',
        'component': '4. By Technical Components',
        'custom': '5. Custom Tags',
        'other': '6. Other Tags (Filtered out massive system tags)'
    };
    
    for (const prefix of ['lob', 'bo', 'app', 'component', 'custom', 'other']) {
        let tags = groupedTags[prefix];
        if (tags.length === 0) continue;
        
        // Filter out massive noise tags from MASTER_ROUTER to protect AI context
        tags = tags.filter(t => {
            const rawTag = t.includes(':') ? t.split(':')[1] : t;
            return !IGNORED_TAGS_IN_MASTER.includes(rawTag) && tagMap[t].length <= 2500;
        });
        
        if (tags.length === 0) continue;
        
        tags.sort();
        
        masterContent += `## ${displayNames[prefix]}\n\n`;
        for (const tag of tags) {
            const safeTag = tag.replace(/[^a-zA-Z0-9]/g, '_');
            let metadataStr = "";
            if (tagMetadata[tag]) {
                metadataStr = ` - *Keywords: ${tagMetadata[tag]}*`;
            }
            masterContent += `- [${tag}](./tag_${safeTag}.md) (${tagMap[tag].length} views)${metadataStr}\n`;
        }
        masterContent += `\n`;
    }
    
    await fs.writeFile(path.join(ROUTERS_DIR, '_MASTER_ROUTER.md'), masterContent);
    console.log("Routing generation complete!");
}

main().catch(console.error);
