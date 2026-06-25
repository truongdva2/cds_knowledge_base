---
name: I_TAXCODETEXT
description: Taxcodetext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXCODETEXT

**Taxcodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `/* start suppress warning shlporigin_not_inherited */` | `/* start suppress warning shlporigin_not_inherited */` |
| `TaxCalculationProcedure` | `kalsm` |
| `/* end suppress warning shlporigin_not_inherited */` | `/* end suppress warning shlporigin_not_inherited */` |
| `fis_mwskz preserving type)` | `cast(mwskz` |
| `/* start suppress warning shlporigin_not_inherited */` | `/* start suppress warning shlporigin_not_inherited */` |
| `Language` | `spras` |
| `/* end suppress warning shlporigin_not_inherited */` | `/* end suppress warning shlporigin_not_inherited */` |
| `fis_mwskz_name preserving type)` | `cast(text1` |
| `_TaxCalculationProcedure` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Tax Code - Text'
@VDM.viewType: #BASIC
 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFITAXCODET'
@Analytics: { dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'TaxCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]

@Search.searchable: true

define view entity I_TaxCodeText
  as select from t007s
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure

{

/* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure' //Inserted by VDM CDS Suite Plugin
  key kalsm                         as TaxCalculationProcedure,
/* end suppress warning shlporigin_not_inherited */

  key cast(mwskz as fis_mwskz preserving type)      as TaxCode,

/* start suppress warning shlporigin_not_inherited */
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                         as Language,
/* end suppress warning shlporigin_not_inherited */

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(text1 as fis_mwskz_name preserving type) as TaxCodeName,
      _TaxCalculationProcedure,
      _Language
};
```
