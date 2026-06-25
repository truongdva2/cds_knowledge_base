---
name: I_CNSLDTNPRFTCTRPAIRELIMASSGMT
description: Cnsldtnprftctrpairelimassgmt
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
# I_CNSLDTNPRFTCTRPAIRELIMASSGMT

**Cnsldtnprftctrpairelimassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `fincs_controllingarea preserving type )` | `cast ( _Source.kokrs` |
| `fincs_hryid_profitcenter )` | `cast ( _Source.hryid` |
| `fincs_validityenddate preserving type )` | `cast ( _Source.hryvalto` |
| `fincs_profitcenter preserving type )` | `cast ( _Source.prctr` |
| `fincs_partnerprofitcenter preserving type )` | `cast ( _Source.pprctr` |
| `fincs_validitystartdate preserving type )` | `cast ( _Source.hryvalfrom` |
| `fincs_prftctrforelim preserving type )` | `cast ( _Source.prctr_eliminated` |

## Associations

> No associations found.

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSPRFTCTRPAIRELIMASSGMT'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL
   },
   modelingPattern: #NONE,
   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #SQL_DATA_SOURCE ],
   sapObjectNodeType.name: 'CnsldtnPrftCtrPairElimAssgmt'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Prft Ctr Pair Elim Assignment'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnPrftCtrPairElimAssgmt

  as select from fincs_prctr_hier as _Source

{

  key cast ( _Source.kokrs as fincs_controllingarea preserving type )           as ControllingArea,

  key cast ( _Source.hryid as fincs_hryid_profitcenter )                        as ConsolidationPrftCtrHierarchy,

      @Semantics.businessDate.to
  key cast ( _Source.hryvalto as fincs_validityenddate preserving type )        as ValidityEndDate,

  key cast ( _Source.prctr as fincs_profitcenter preserving type )              as ProfitCenter,

  key cast ( _Source.pprctr as fincs_partnerprofitcenter preserving type )      as PartnerProfitCenter,

      @Semantics.businessDate.from
      cast ( _Source.hryvalfrom as fincs_validitystartdate preserving type )    as ValidityStartDate,

      cast ( _Source.prctr_eliminated as fincs_prftctrforelim preserving type ) as ConsolidationPrftCtrForElim

}
```
