---
name: I_RECONTRACTOBJECTASSGMT
description: Recontractobjectassgmt
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - contract
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRACTOBJECTASSGMT

**Recontractobjectassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
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
| `_REContract` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Object Assignments'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REStatusObjectSource',
  semanticKey: ['REStatusObjectSource', 'REObjectAssignmentType', 'REStatusObjectTarget', 'ValidityStartDate' ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractObject'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@VDM.viewType: #COMPOSITE
define view entity I_REContractObjectAssgmt
  as select from I_REObjectAssgmt as _REObjectAssgmt
  association [0..1] to I_REContract     as _REContract             on  $projection.REStatusObjectSource = _REContract.REStatusObject
{
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
      _REContract
}
where
  REStatusObjectSource like 'IS%'
```
