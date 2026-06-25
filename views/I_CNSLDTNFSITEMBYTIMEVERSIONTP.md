---
name: I_CNSLDTNFSITEMBYTIMEVERSIONTP
description: Cnsldtnfsitembytimeversiontp
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMBYTIMEVERSIONTP

**Cnsldtnfsitembytimeversiontp**

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
| `key _Source.ConsolidationVersion` | `_Source.ConsolidationVersion` |
| `key _Source.FromFiscalYearPeriod` | `_Source.FromFiscalYearPeriod` |
| `_Source.ToFiscalYearPeriod` | *Association* |
| `_Source.CnsldtnFSItemRole` | *Association* |
| `_Source.CnsldtnFSItemDataCollection` | *Association* |
| `_Source.CnsldtnFSItemCrcyTranslation` | *Association* |
| `_Source.CnsldtnFSItemElimination` | *Association* |
| `_Source.CnsldtnFSItemCashFlow` | *Association* |
| `_Source.CnsldtnFSItemScope` | *Association* |
| `_Source.CnsldtnFSItemCustomerSpecific` | *Association* |
| `_Source.CnsldtnEliminationTargetFSItem` | *Association* |
| `_Source.CnsldtnNCITargetFSItem` | *Association* |
| `_Source.CnsldtnPlanningTargetFSItem` | *Association* |
| `_Source.CnsldtnOffsettingTargetFSItem` | *Association* |
| `/* associations for transactional processing */` | `/* associations for transactional processing */` |
| `_CnsldtnFSItem : redirected to parent I_CnsldtnFSItemTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: [
    'ConsolidationChartOfAccounts',
    'CnsldtnFinancialStatementItem',
    'ConsolidationVersion'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Search.searchable: true
@EndUserText.label: 'Cnsldtn FS Item By Time and Version - TP'
define view entity I_CnsldtnFSItemByTimeVersionTP
  as projection on R_CnsldtnFSItemByTimeVersionTP as _Source

{

  key _Source.ConsolidationChartOfAccounts,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _Source.CnsldtnFinancialStatementItem,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _Source.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.ToFiscalYearPeriod,

      _Source.CnsldtnFSItemRole,

      _Source.CnsldtnFSItemDataCollection,

      _Source.CnsldtnFSItemCrcyTranslation,

      _Source.CnsldtnFSItemElimination,

      _Source.CnsldtnFSItemCashFlow,

      _Source.CnsldtnFSItemScope,

      _Source.CnsldtnFSItemCustomerSpecific,

      _Source.CnsldtnEliminationTargetFSItem,

      _Source.CnsldtnNCITargetFSItem,

      _Source.CnsldtnPlanningTargetFSItem,

      _Source.CnsldtnOffsettingTargetFSItem,


      /* associations for transactional processing */
      _CnsldtnFSItem : redirected to parent I_CnsldtnFSItemTP

}
```
