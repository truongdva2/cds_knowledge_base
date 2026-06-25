---
name: C_REUSBLOBJADDLACCTASSGMTDEX
description: Reusblobjaddlacctassgmtdex
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REUSBLOBJADDLACCTASSGMTDEX

**Reusblobjaddlacctassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RealEstateUsableObjectUUID` | `_REUsableObjectData.RealEstateUsableObjectUUID` |
| `key _REObjectAssgmt.REStatusObjectSource` | `_REObjectAssgmt.REStatusObjectSource` |
| `key _REObjectAssgmt.REObjectAssignmentType` | `_REObjectAssgmt.REObjectAssignmentType` |
| `key _REObjectAssgmt.REStatusObjectTarget` | `_REObjectAssgmt.REStatusObjectTarget` |
| `ValidityStartDate` | `_REObjectAssgmt.ValidityStartDate` |
| `_REObjectAssgmt.ValidityEndDate` | *Association* |
| `_REObjectAssgmt.REOnlyInfoAssgmt` | *Association* |
| `_REObjectAssgmt.REStatusObjectSourceIsArchived` | *Association* |
| `_REObjectAssgmt.REGenerationType` | *Association* |
| `_REObjectAssgmt.REIsMainAsset` | *Association* |
| `_REObjectAssgmt.REAssignmentHasMultiple` | *Association* |
| `_REObjectAssgmt.REObjectPossessionStartDate` | *Association* |
| `_REObjectAssgmt.REObjectPossessionEndDate` | *Association* |
| `_REObjectAssgmt.REIsLeadingObject` | *Association* |
| `reipvdmbusobjtypecn preserving type )` | `cast( left(_REObjectAssgmt.REStatusObjectTarget,2)` |
| `_REObjectAssgmt._CostCenter[1:ValidityStartDate <= $projection.validitystartdate and ValidityEndDate >= $projection.validitystartdate ].CostCenter` | *Association* |
| `_REObjectAssgmt._CostCenter[1:ValidityStartDate <= $projection.validitystartdate and ValidityEndDate >= $projection.validitystartdate ].ControllingArea` | *Association* |
| `_REObjectAssgmt._InternalOrder.InternalOrder` | *Association* |
| `_REObjectAssgmt._WBSElement.WBSElementExternalID` | *Association* |
| `_REObjectAssgmt._CostCenter` | *Association* |
| `_REObjectAssgmt._FixedAsset` | *Association* |
| `_REObjectAssgmt._InternalOrder` | *Association* |
| `_REObjectAssgmt._REContractSubject` | *Association* |
| `_REObjectAssgmt._REGenerationType` | *Association* |
| `_REObjectAssgmt._REObjectGroup` | *Association* |
| `_REObjectAssgmt._REObjectTypeDetails` | *Association* |
| `_REObjectAssgmt._TechnicalObject` | *Association* |
| `_REObjectAssgmt._WBSElement` | *Association* |
| `_REUsableObject` | *Association* |
| `_REObjectTypeTarget` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectTypeTarget` | `I_REObjectType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor RE Usbl Obj Addl Acct Assign'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true
//@ObjectModel.representativeKey: 'RealEstateUsableObjectUUID'
//@ObjectModel.semanticKey: [ 'REStatusObjectSource','REObjectAssignmentType','REStatusObjectTarget','ValidityStartDate' ]
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjAddlAcctAssgmtDEX 
  as select from I_REObjectAssgmt as _REObjectAssgmt
    inner join   I_REUsableObject as _REUsableObjectData on  _REObjectAssgmt.REStatusObjectSource   = _REUsableObjectData.REStatusObject
                                                         and _REObjectAssgmt.REObjectAssignmentType = 'IO'
  association        to I_REUsableObject as _REUsableObject     on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_REObjectType            as _REObjectTypeTarget on $projection.REObjectTypeTarget = _REObjectTypeTarget.RealEstateObjectType

{
  key _REUsableObjectData.RealEstateUsableObjectUUID                                              as RealEstateUsableObjectUUID,
  key _REObjectAssgmt.REStatusObjectSource,
  key _REObjectAssgmt.REObjectAssignmentType,
  key _REObjectAssgmt.REStatusObjectTarget,
  key _REObjectAssgmt.ValidityStartDate                                                           as ValidityStartDate,
      _REObjectAssgmt.ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,
      _REObjectAssgmt.REIsLeadingObject,

      cast( left(_REObjectAssgmt.REStatusObjectTarget,2) as reipvdmbusobjtypecn preserving type ) as REObjectTypeTarget,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $projection.validitystartdate and ValidityEndDate >= $projection.validitystartdate ].CostCenter,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $projection.validitystartdate and ValidityEndDate >= $projection.validitystartdate ].ControllingArea,
      _REObjectAssgmt._InternalOrder.InternalOrder,
      _REObjectAssgmt._WBSElement.WBSElementExternalID,

      _REObjectAssgmt._CostCenter,
      _REObjectAssgmt._FixedAsset,
      _REObjectAssgmt._InternalOrder,
      _REObjectAssgmt._REContractSubject,
      _REObjectAssgmt._REGenerationType,
      _REObjectAssgmt._REObjectGroup,
      _REObjectAssgmt._REObjectTypeDetails,
      _REObjectAssgmt._TechnicalObject,
      _REObjectAssgmt._WBSElement,

      _REUsableObject,
      _REObjectTypeTarget
}
where
  (
       _REObjectAssgmt.REStatusObjectTarget like 'KS%'
    or _REObjectAssgmt.REStatusObjectTarget like 'OR%'
    or _REObjectAssgmt.REStatusObjectTarget like 'PR%'
  )
  and  _REObjectAssgmt.REIsLeadingObject    <>   'X'
```
