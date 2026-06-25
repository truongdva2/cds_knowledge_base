---
name: I_CNSLDTNGLOBALPARAMETER
description: Cnsldtnglobalparameter
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLOBALPARAMETER

**Cnsldtnglobalparameter**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `fc_dimen )` | `cast( coalesce(_CnsldtnGlobalParameter.dimen, 'Y1')` |
| `fc_itclg )` | `cast( coalesce(_CnsldtnGlobalParameter.itclg, '')` |
| `fc_rldnr )` | `cast( coalesce(_CnsldtnGlobalParameter.rldnr, 'Y1')` |
| `fc_rvers )` | `cast( coalesce(_CnsldtnGlobalParameter.rvers, '')` |
| `ryear    )` | `cast( coalesce(_CnsldtnGlobalParameter.ryear, '0000')` |
| `poper    )` | `cast( coalesce(_CnsldtnGlobalParameter.perid, '000')` |
| `_CnsldtnGlobalParameter.uname                                                                                                                                                  as UserName` | *Association* |
| `fincs_consolidationgroup )` | `cast( coalesce(_CnsldtnGlobalParameter.congr, '')` |
| `fincs_consolidationunit )` | `cast( coalesce(_CnsldtnGlobalParameter.bunit, '')` |
| `fis_periv)` | `cast( coalesce(_CnsldtnVersion.FiscalYearVariant,'K4')` |
| `ryear    ), cast( coalesce(_CnsldtnGlobalParameter.perid, '000')` | `cast(concat( cast( coalesce(_CnsldtnGlobalParameter.ryear, '0000')` |
| `fincs_congr_hry  )` | `cast( coalesce(_CnsldtnGlobalParameter.cg_hry, '')` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCGLOBALPARAM',
  buffering.status: #NOT_ALLOWED
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling:{
  algorithm: #SESSION_VARIABLE
  }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE
                         ],
  sapObjectNodeType.name: 'ConsolidationGlobalParameter'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Global Parameter'

define view I_CnsldtnGlobalParameter
  as select from           t000             as _t000

    left outer to one join tf004            as _CnsldtnGlobalParameter on _CnsldtnGlobalParameter.uname = $session.user // join on table leads to ATC warning

    left outer to one join I_CnsldtnVersion as _CnsldtnVersion         on _CnsldtnVersion.ConsolidationVersion = _CnsldtnGlobalParameter.rvers
{

  key cast( coalesce(_CnsldtnGlobalParameter.dimen, 'Y1') as fc_dimen )                                                                                                              as ConsolidationDimension,
      cast( coalesce(_CnsldtnGlobalParameter.itclg, '')   as fc_itclg )                                                                                                              as ConsolidationChartOfAccounts,
      cast( coalesce(_CnsldtnGlobalParameter.rldnr, 'Y1') as fc_rldnr )                                                                                                              as ConsolidationLedger,
      cast( coalesce(_CnsldtnGlobalParameter.rvers, '')   as fc_rvers )                                                                                                              as ConsolidationVersion,
      cast( coalesce(_CnsldtnGlobalParameter.ryear, '0000')   as ryear    )                                                                                                          as FiscalYear,
      cast( coalesce(_CnsldtnGlobalParameter.perid, '000')   as poper    )                                                                                                           as FiscalPeriod,
      _CnsldtnGlobalParameter.uname                                                                                                                                                  as UserName,
      cast( coalesce(_CnsldtnGlobalParameter.congr, '')   as fincs_consolidationgroup )                                                                                              as ConsolidationGroup,
      cast( coalesce(_CnsldtnGlobalParameter.bunit, '')   as fincs_consolidationunit )                                                                                               as ConsolidationUnit,
      cast( coalesce(_CnsldtnVersion.FiscalYearVariant,'K4') as  fis_periv)                                                                                                          as FiscalYearVariant, // for analytics query only, to be removed on next deprecation.
      cast(concat( cast( coalesce(_CnsldtnGlobalParameter.ryear, '0000')   as ryear    ), cast( coalesce(_CnsldtnGlobalParameter.perid, '000')   as poper    )) as fins_fyearperiod) as FiscalYearPeriod,
      cast( coalesce(_CnsldtnGlobalParameter.cg_hry, '')   as fincs_congr_hry  )                                                                                                     as ConsolidationGroupHierarchy
}
where
  _t000.mandt = $session.client;
```
