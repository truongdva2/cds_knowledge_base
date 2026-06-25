---
name: I_INSPPLANOPERATIONVERSION_2
description: Inspplanoperationversion 2
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANOPERATIONVERSION_2

**Inspplanoperationversion 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InspectionPlanGroup` | `_BillOfOperationsOpBasic.BillOfOperationsGroup` |
| `key      _BillOfOperationsOpBasic.BOOOperationInternalID` | `_BillOfOperationsOpBasic.BOOOperationInternalID` |
| `key      _BillOfOperationsOpBasic.BOOOpInternalVersionCounter` | `_BillOfOperationsOpBasic.BOOOpInternalVersionCounter` |
| `key      _BillOfOperationsOpBasic.BillOfOperationsType` | `_BillOfOperationsOpBasic.BillOfOperationsType` |
| `_InspPlanOpAssgmt.InspectionPlan` | *Association* |
| `_BillOfOperationsOpBasic.WorkCenterInternalID` | *Association* |
| `_BillOfOperationsOpBasic.WorkCenterTypeCode` | *Association* |
| `cast(` | `cast(` |
| `case` | `case` |
| `when _BillOfOperationsOpBasic.IsDeleted = 'X' then 'X'` | `when _BillOfOperationsOpBasic.IsDeleted = 'X' then 'X'` |
| `when _InspPlanOpAssgmt.IsDeleted = 'X' then 'X'` | `when _InspPlanOpAssgmt.IsDeleted = 'X' then 'X'` |
| `else ' '` | `else ' '` |
| `lkenz preserving type )` | `end` |
| `_BillOfOperationsOpBasic.IsImplicitlyDeleted` | *Association* |
| `_BillOfOperationsOpBasic.OperationExternalID` | *Association* |
| `_BillOfOperationsOpBasic.Operation_2 as Operation` | *Association* |
| `_BillOfOperationsOpBasic.OperationText` | *Association* |
| `_BillOfOperationsOpBasic.Plant` | *Association* |
| `_BillOfOperationsOpBasic.OperationControlProfile` | *Association* |
| `_BillOfOperationsOpBasic.OperationStandardTextCode` | *Association* |
| `_BillOfOperationsOpBasic.BillOfOperationsRefType` | *Association* |
| `_BillOfOperationsOpBasic.BillOfOperationsRefGroup` | *Association* |
| `_BillOfOperationsOpBasic.BillOfOperationsRefVariant` | *Association* |
| `_BillOfOperationsOpBasic.BOORefOperationIncrementValue` | *Association* |
| `_BillOfOperationsOpBasic.InspSbstCompletionConfirmation` | *Association* |
| `_BillOfOperationsOpBasic.InspSbstHasNoTimeOrQuantity` | *Association* |
| `_BillOfOperationsOpBasic.OperationReferenceQuantity` | *Association* |
| `_BillOfOperationsOpBasic.OperationUnit` | *Association* |
| `_BillOfOperationsOpBasic.OpQtyToBaseQtyDnmntr` | *Association* |
| `_BillOfOperationsOpBasic.OpQtyToBaseQtyNmrtr` | *Association* |
| `_BillOfOperationsOpBasic.CreationDate` | *Association* |
| `_BillOfOperationsOpBasic.CreatedByUser` | *Association* |
| `_BillOfOperationsOpBasic.LastChangeDate` | *Association* |
| `_BillOfOperationsOpBasic.LastChangedByUser` | *Association* |
| `_BillOfOperationsOpBasic.ChangeNumber` | *Association* |
| `_BillOfOperationsOpBasic.ValidityStartDate` | *Association* |
| `_BillOfOperationsOpBasic.ValidityEndDate` | *Association* |
| `_InspectionPlanVersion` | *Association* |
| `_BillOfOperationsType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionPlanVersion` | `I_InspectionPlanVersion` | [1..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Version of Inspection Plan Operation'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_InspPlanOperationVersion_2 
  as select from I_BillOfOperationsOpBasic as _BillOfOperationsOpBasic
    inner join   I_InspPlanOpAssgmtVersion as _InspPlanOpAssgmt on  _BillOfOperationsOpBasic.BillOfOperationsGroup  =  _InspPlanOpAssgmt.InspectionPlanGroup
                                                                and _BillOfOperationsOpBasic.BOOOperationInternalID =  _InspPlanOpAssgmt.BOOOperationInternalID
                                                                and _BillOfOperationsOpBasic.BillOfOperationsType   =  _InspPlanOpAssgmt.BillOfOperationsType
                                                                and _BillOfOperationsOpBasic.ValidityStartDate      >= _InspPlanOpAssgmt.ValidityStartDate
                                                                and _BillOfOperationsOpBasic.ValidityStartDate      <= _InspPlanOpAssgmt.ValidityEndDate
  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspectionPlanVersion as _InspectionPlanVersion on  $projection.InspectionPlanGroup =  _InspectionPlanVersion.InspectionPlanGroup
                                                                          and $projection.InspectionPlan      =  _InspectionPlanVersion.InspectionPlan
                                                                          and $projection.ValidityStartDate   >= _InspectionPlanVersion.ValidityStartDate
                                                                          and $projection.ValidityStartDate   <= _InspectionPlanVersion.ValidityEndDate

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType

{
//           @ObjectModel.foreignKey.association: '_InspPlanOperation'
  key      _BillOfOperationsOpBasic.BillOfOperationsGroup as InspectionPlanGroup,
//           @ObjectModel.foreignKey.association: '_InspPlanOperation'
  key      _BillOfOperationsOpBasic.BOOOperationInternalID,
  key      _BillOfOperationsOpBasic.BOOOpInternalVersionCounter,
           @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key      _BillOfOperationsOpBasic.BillOfOperationsType,
           _InspPlanOpAssgmt.InspectionPlan,

           _BillOfOperationsOpBasic.WorkCenterInternalID,
           _BillOfOperationsOpBasic.WorkCenterTypeCode,

           cast( 
             case 
             when _BillOfOperationsOpBasic.IsDeleted = 'X' then 'X'
             when _InspPlanOpAssgmt.IsDeleted = 'X' then 'X'
             else ' '
           end as lkenz preserving type ) as IsDeleted,
           _BillOfOperationsOpBasic.IsImplicitlyDeleted,
           _BillOfOperationsOpBasic.OperationExternalID,
           _BillOfOperationsOpBasic.Operation_2 as Operation,


           _BillOfOperationsOpBasic.OperationText,
           _BillOfOperationsOpBasic.Plant,
           _BillOfOperationsOpBasic.OperationControlProfile,
           _BillOfOperationsOpBasic.OperationStandardTextCode,

           -- Origin
           _BillOfOperationsOpBasic.BillOfOperationsRefType,
           _BillOfOperationsOpBasic.BillOfOperationsRefGroup,
           _BillOfOperationsOpBasic.BillOfOperationsRefVariant,
           _BillOfOperationsOpBasic.BOORefOperationIncrementValue,

           -- Quality management: inspection points
           _BillOfOperationsOpBasic.InspSbstCompletionConfirmation,
           @Semantics.booleanIndicator 
           _BillOfOperationsOpBasic.InspSbstHasNoTimeOrQuantity,

           --Standard Values
           @Semantics.quantity.unitOfMeasure: 'OperationUnit'
           _BillOfOperationsOpBasic.OperationReferenceQuantity,
           _BillOfOperationsOpBasic.OperationUnit,
           _BillOfOperationsOpBasic.OpQtyToBaseQtyDnmntr,
           _BillOfOperationsOpBasic.OpQtyToBaseQtyNmrtr,

           // *************************** Administration ****************************
           _BillOfOperationsOpBasic.CreationDate,
           _BillOfOperationsOpBasic.CreatedByUser,
           _BillOfOperationsOpBasic.LastChangeDate,
           _BillOfOperationsOpBasic.LastChangedByUser,
           _BillOfOperationsOpBasic.ChangeNumber,
           _BillOfOperationsOpBasic.ValidityStartDate,
           _BillOfOperationsOpBasic.ValidityEndDate,


           // **************************** Associations *****************************
           _InspectionPlanVersion,
           _BillOfOperationsType
}
where _BillOfOperationsOpBasic.BillOfOperationsType = 'Q'
```
