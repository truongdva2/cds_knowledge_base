---
name: I_CNSLDTNUNITBYTIMEVERSIONTP
description: Cnsldtnunitbytimeversiontp
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITBYTIMEVERSIONTP

**Cnsldtnunitbytimeversiontp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }` | `defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }` |
| `fincs_consolidationversion preserving type )` | `cast ( _Source.ConsolidationVersion` |
| `key _Source.FromFiscalYearPeriod` | `_Source.FromFiscalYearPeriod` |
| `_Source.ToFiscalYearPeriod` | *Association* |
| `fincs_unitispartneronly preserving type )` | `cast ( _Source.ConsolidationUnitIsPartnerOnly` |
| `_Source.CnsldtnCrcyTranslationMethod` | *Association* |
| `fincs_taxrate preserving type )` | `cast ( _Source.TaxRate` |
| `_Source.FiscalYearVariant` | *Association* |
| `fincs_univjournalintegtype preserving type )` | `cast ( _Source.CnsldtnDataTransferMethod` |
| `fincs_groupcrcyisleadingcrcy preserving type )` | `cast ( _Source.DocumentEntryIsInGroupCurrency` |
| `fincs_unitlocalcrcysource preserving type )` | `cast ( _Source.CnsldtnUnitLocalCrcySource` |
| `fincs_unitgroupcrcysource preserving type )` | `cast ( _Source.CnsldtnUnitGroupCrcySource` |
| `_Source.CnsldtnUploadMethod` | *Association* |
| `_Source.CnsldtnUnitDataCollection` | *Association* |
| `_Source.ConsolidationUnitPartner` | *Association* |
| `_Source.ConsolidationUnitPostingRule` | *Association* |
| `_Source.ConsolidationUnitValidation` | *Association* |
| `/* associations for transactional processing */` | `/* associations for transactional processing */` |
| `_CnsldtnUnit                                                                                    as _CnsldtnUnit : redirected to parent I_CnsldtnUnitTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: [
    'ConsolidationUnit',
    'ConsolidationVersion'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Search.searchable: true
@EndUserText.label: 'Cnsldtn Unit by Time and Version - TP'
define view entity I_CnsldtnUnitByTimeVersionTP
  as projection on R_CnsldtnUnitByTimeVersionTP as _Source

{

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type )                   as ConsolidationUnit,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast ( _Source.ConsolidationVersion as fincs_consolidationversion preserving type )             as ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.ToFiscalYearPeriod,

      cast ( _Source.ConsolidationUnitIsPartnerOnly as fincs_unitispartneronly preserving type )      as ConsolidationUnitIsPartnerOnly,

      _Source.CnsldtnCrcyTranslationMethod,

      cast ( _Source.TaxRate as fincs_taxrate preserving type )                                       as CnsldtnTaxRate, //renaming to comply with updated field names

      _Source.FiscalYearVariant,

      cast ( _Source.CnsldtnDataTransferMethod as fincs_univjournalintegtype preserving type )        as CnsldtnUnivJournalIntegType, //renaming to comply with updated field names

      cast ( _Source.DocumentEntryIsInGroupCurrency as fincs_groupcrcyisleadingcrcy preserving type ) as CnsldtnGroupCrcyIsLeadingCrcy, //renaming to comply with updated field names

      cast ( _Source.CnsldtnUnitLocalCrcySource as fincs_unitlocalcrcysource preserving type )        as CnsldtnUnitLocalCrcySource,

      cast ( _Source.CnsldtnUnitGroupCrcySource as fincs_unitgroupcrcysource preserving type )        as CnsldtnUnitGroupCrcySource,

      _Source.CnsldtnUploadMethod,

      _Source.CnsldtnUnitDataCollection,

      _Source.ConsolidationUnitPartner,

      _Source.ConsolidationUnitPostingRule,

      _Source.ConsolidationUnitValidation,


      /* associations for transactional processing */
      _CnsldtnUnit                                                                                    as _CnsldtnUnit : redirected to parent I_CnsldtnUnitTP
}
```
