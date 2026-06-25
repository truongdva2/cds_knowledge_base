---
name: I_REUSBLOBJADDLACCTASSGMTOBJ
description: Reusblobjaddlacctassgmtobj
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
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSBLOBJADDLACCTASSGMTOBJ

**Reusblobjaddlacctassgmtobj**

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
| `key _REObjectAssgmt.ValidityStartDate` | `_REObjectAssgmt.ValidityStartDate` |
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
| `_REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].CostCenter` | *Association* |
| `_REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].ControllingArea` | *Association* |
| `_REObjectAssgmt._InternalOrder.InternalOrder` | *Association* |
| `_REObjectAssgmt._WBSElement.WBSElementExternalID` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_REObjectAssgmt._CostCenter` | *Association* |
| `_REObjectAssgmt._FixedAsset` | *Association* |
| `_REObjectAssgmt._InternalOrder` | *Association* |
| `_REObjectAssgmt._REContractSubject` | *Association* |
| `_REObjectAssgmt._REGenerationType` | *Association* |
| `_REObjectAssgmt._REObjectAssignmentType` | *Association* |
| `_REObjectAssgmt._REObjectGroup` | *Association* |
| `_REObjectAssgmt._REObjectTypeDetails` | *Association* |
| `_REObjectAssgmt._TechnicalObject` | *Association* |
| `_REObjectAssgmt._WBSElement` | *Association* |
| `_REUsableObject` | *Association* |
| `_REObjectTypeTarget` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [1..1] |
| `_REObjectTypeTarget` | `I_REObjectType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REStatusObjectSource',
            semanticKey: [ 'REStatusObjectSource','REObjectAssignmentType','REStatusObjectTarget','ValidityStartDate' ],
            sapObjectNodeType.name: 'REUsblObjAddlAcctAssgmtObj',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'RE Usable Object Addl Account Assign'
define view entity I_REUsblObjAddlAcctAssgmtObj 
  as select from I_REObjectAssgmt as _REObjectAssgmt
    inner join   I_REUsableObject as _REUsableObjectData on  _REObjectAssgmt.REStatusObjectSource   = _REUsableObjectData.REStatusObject
                                                         and _REObjectAssgmt.REObjectAssignmentType = 'IO'
  
  association [1..1] to I_REUsableObject  as _REUsableObject     on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_REObjectType    as _REObjectTypeTarget on $projection.REObjectTypeTarget = _REObjectTypeTarget.RealEstateObjectType
{
      @ObjectModel.foreignKey.association: '_REUsableObject'
  key _REUsableObjectData.RealEstateUsableObjectUUID                                              as RealEstateUsableObjectUUID,
  key _REObjectAssgmt.REStatusObjectSource,
      @ObjectModel.foreignKey.association: '_REObjectAssignmentType'
  key _REObjectAssgmt.REObjectAssignmentType,
      @ObjectModel.foreignKey.association: '_REObjectTypeDetails'
  key _REObjectAssgmt.REStatusObjectTarget,
      @Semantics.businessDate.from: true
  key _REObjectAssgmt.ValidityStartDate,
      @Semantics.businessDate.to: true
      _REObjectAssgmt.ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      @ObjectModel.foreignKey.association: '_REGenerationType'
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,
      _REObjectAssgmt.REIsLeadingObject,

      cast( left(_REObjectAssgmt.REStatusObjectTarget,2) as reipvdmbusobjtypecn preserving type ) as REObjectTypeTarget,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].CostCenter,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].ControllingArea,
      _REObjectAssgmt._InternalOrder.InternalOrder,
      _REObjectAssgmt._WBSElement.WBSElementExternalID,

      /* Associations */
      _REObjectAssgmt._CostCenter,
      _REObjectAssgmt._FixedAsset,
      _REObjectAssgmt._InternalOrder,
      _REObjectAssgmt._REContractSubject,
      _REObjectAssgmt._REGenerationType,
      _REObjectAssgmt._REObjectAssignmentType,
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
