# SAP CDS Knowledge Base (Offline RAG)

Welcome to the **SAP CDS Knowledge Base**, a massive offline repository containing documentation for **7,355** SAP S/4HANA Cloud (Public Edition) Released CDS Views.

This repository is heavily optimized for **Retrieval-Augmented Generation (RAG)** by AI Agents, ensuring lightning-fast search times without suffering from context overflow.

## 📂 Repository Structure

The physical directory is intentionally flattened, moving away from deep tree hierarchies to a **Tag-based Routing System**.

*   `views/`: Contains 7,355 flattened `.md` files. Each file represents a single SAP Released CDS View (e.g., `I_SalesDocument.md`).
*   `routers/`: Contains dynamically generated Markdown indexes (Routers).
    *   `_MASTER_ROUTER.md`: **The central entry point.** This is where both AI Agents and Human Developers should begin their search.
    *   `tag_*.md`: Individual tag indices grouping views by specific domains (e.g., `tag_sd_bil.md` groups all Billing-related views).
*   `scripts/`: Contains the automation tools to manage the Knowledge Base.
    *   `generate_tag_routers.js`: A Node.js script that scans the `views/` directory and regenerates all routers.
    *   `tag_metadata.json`: The Heuristic Dictionary containing semantic keywords for 852 SAP Technical Components, Modules, and Business Objects.

## 🤖 AI Agent Guidelines

> [!IMPORTANT]
> **CRITICAL RULE FOR AI AGENTS:**
> 1. **DO NOT** run global `grep_search` or text searches across the `views/` directory. Scanning 7,300+ files will immediately cause Context Overflow.
> 2. **ALWAYS** start your search by reading `routers/_MASTER_ROUTER.md`.
> 3. Use the Semantic Keywords (e.g., *Financial Accounting, SD, Billing*) mapped in the Master Router to locate the correct tag.
> 4. Navigate into the specific `tag_*.md` file to find the precise `views/*.md` file you need to read.

## ⚙️ How to Update

If you manually add new CDS View `.md` files to the `views/` folder, you must rebuild the routing indices so AI Agents can discover them:

1.  Open your terminal.
2.  Navigate to the `scripts/` directory: `cd scripts`
3.  Install dependencies (if not already installed): `npm install yaml`
4.  Run the generator: `node generate_tag_routers.js`

This script will automatically enrich the new views with semantic tags and rebuild the `_MASTER_ROUTER.md`.
