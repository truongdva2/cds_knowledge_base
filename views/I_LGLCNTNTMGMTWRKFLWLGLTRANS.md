---
name: I_LGLCNTNTMGMTWRKFLWLGLTRANS
description: Lglcntntmgmtwrkflwlgltrans
app_component: CM-TSK-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-TSK
  - interface-view
  - workflow
  - component:CM-TSK-2CL
  - lob:Other
---
# I_LGLCNTNTMGMTWRKFLWLGLTRANS

**Lglcntntmgmtwrkflwlgltrans**

| Property | Value |
|---|---|
| App Component | `CM-TSK-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `lcm_uuid_c32 )` | `cast( LglTransWrkFlwModInstce` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LglTransWrkFlwCreatedByUser` | `LglTransWrkFlwCreatedByUser` |
| `_LegalTransaction.LglCntntMGovLaw               as LglCntntMGovLaw` | *Association* |
| `_LegalTransaction.LglCntntMProfile              as LglCntntMProfile` | *Association* |
| `_LegalTransaction.LglTransAccessLvl             as LglTransAccessLvl` | *Association* |
| `_LegalTransaction.LglCntntMMainOrgCoCode        as LglCntntMMainOrgCoCode` | *Association* |
| `_LegalTransaction.LglCntntMMainOrgSalesOrg      as LglCntntMMainOrgSalesOrg` | *Association* |
| `_LegalTransaction.LglCntntMMainOrgPurOrg        as LglCntntMMainOrgPurOrg` | *Association* |
| `_LegalTransaction` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalTransaction` | `I_LegalTransactionAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMWFLOBJ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  representativeKey: 'LglTransWrkFlwModInstce',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
                                     
@EndUserText.label: 'Leading Object for Legal Tasks'
@Metadata.ignorePropagatedAnnotations: true

define view I_LglCntntMgmtWrkflwLglTrans
  as select from I_LegalTransactionWorkflow
  association [1..1] to I_LegalTransactionAPI01 as _LegalTransaction on $projection.LegalTransactionUUID = _LegalTransaction.LegalTransactionUUID
{
  key  cast( LglTransWrkFlwModInstce as lcm_uuid_c32 ) as LglTransWrkFlwModInstce,
       LegalTransactionUUID,
       LglTransWrkFlwCreatedByUser,
       _LegalTransaction.LglCntntMGovLaw               as LglCntntMGovLaw,
       _LegalTransaction.LglCntntMProfile              as LglCntntMProfile,
       _LegalTransaction.LglTransAccessLvl             as LglTransAccessLvl,
       _LegalTransaction.LglCntntMMainOrgCoCode        as LglCntntMMainOrgCoCode,
       _LegalTransaction.LglCntntMMainOrgSalesOrg      as LglCntntMMainOrgSalesOrg,
       _LegalTransaction.LglCntntMMainOrgPurOrg        as LglCntntMMainOrgPurOrg,
       _LegalTransaction
}
```
