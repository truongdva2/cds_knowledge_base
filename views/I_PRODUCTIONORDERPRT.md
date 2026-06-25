---
name: I_PRODUCTIONORDERPRT
description: Production OrderPRT
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERPRT

**Production OrderPRT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `name: 'I_PlantStdVH', element: 'Plant' } } ]` | `name: 'I_PlantStdVH', element: 'Plant' } } ]` |
| `pwwrk preserving type)` | `cast(prt.Plant` |
| `prt.BillOfOperationsType` | `prt.BillOfOperationsType` |
| `prt.BillOfOperationsGroup` | `prt.BillOfOperationsGroup` |
| `prt.EarliestSchedldUsageStartDate` | `prt.EarliestSchedldUsageStartDate` |
| `prt.EarliestSchedldUsageStartTime` | `prt.EarliestSchedldUsageStartTime` |
| `prt.EarliestSchedldUsageEndDate` | `prt.EarliestSchedldUsageEndDate` |
| `prt.EarliestSchedldUsageEndTime` | `prt.EarliestSchedldUsageEndTime` |
| `prt.LatestSchedldUsageStartDate` | `prt.LatestSchedldUsageStartDate` |
| `prt.LatestSchedldUsageStartTime` | `prt.LatestSchedldUsageStartTime` |
| `prt.LatestSchedldUsageEndDate` | `prt.LatestSchedldUsageEndDate` |
| `prt.LatestSchedldUsageEndTime` | `prt.LatestSchedldUsageEndTime` |
| `prt.ActualUsageStartDate` | `prt.ActualUsageStartDate` |
| `prt.ActualUsageStartTime` | `prt.ActualUsageStartTime` |
| `prt.ActualUsageEndDate` | `prt.ActualUsageEndDate` |
| `prt.ActualUsageEndTime` | `prt.ActualUsageEndTime` |
| `prt.ProdnRsceToolTotQtyCalcFormula` | `prt.ProdnRsceToolTotQtyCalcFormula` |
| `prt.ProdnRsceToolUsageQtyCalcFmla` | `prt.ProdnRsceToolUsageQtyCalcFmla` |
| `prt.ProdnRsceToolUsageDurnUnit` | `prt.ProdnRsceToolUsageDurnUnit` |
| `prt.ProdnRsceToolUsageDuration` | `prt.ProdnRsceToolUsageDuration` |
| `prt.ProdnRsceToolStdWorkQtyUnit` | `prt.ProdnRsceToolStdWorkQtyUnit` |
| `prt.ProdnRsceToolStandardWorkQty` | `prt.ProdnRsceToolStandardWorkQty` |
| `prt.PlannedProdnRsceToolQtyUnit` | `prt.PlannedProdnRsceToolQtyUnit` |
| `prt.PlannedTotalProdnRsceToolQty` | `prt.PlannedTotalProdnRsceToolQty` |
| `prt.ConfirmedProdnRsceToolQtyUnit` | `prt.ConfirmedProdnRsceToolQtyUnit` |
| `prt.ConfirmedProdnRsceToolQty` | `prt.ConfirmedProdnRsceToolQty` |
| `prt.RemainingProdnRsceToolQtyUnit` | `prt.RemainingProdnRsceToolQtyUnit` |
| `prt.RemainingProdnRsceToolQty` | `prt.RemainingProdnRsceToolQty` |
| `prt.ProdnRsceToolUsageQuantityUnit` | `prt.ProdnRsceToolUsageQuantityUnit` |
| `prt.ProdnRsceToolUsageQuantity` | `prt.ProdnRsceToolUsageQuantity` |
| `prt.PlndProdnRsceToolUsageQtyUnit` | `prt.PlndProdnRsceToolUsageQtyUnit` |
| `prt.PlannedProdnRsceToolUsageQty` | `prt.PlannedProdnRsceToolUsageQty` |
| `prt.ConfdProdnRsceToolUsageQtyUnit` | `prt.ConfdProdnRsceToolUsageQtyUnit` |
| `prt.ConfirmedProdnRsceToolUsageQty` | `prt.ConfirmedProdnRsceToolUsageQty` |
| `prt.RmngProdnRsceToolUsageQtyUnit` | `prt.RmngProdnRsceToolUsageQtyUnit` |
| `prt.RemainingProdnRsceToolUsageQty` | `prt.RemainingProdnRsceToolUsageQty` |
| `_ProductionOrderInternal` | *Association* |
| `_ProductionPlant` | *Association* |
| `_ProductionOrderType` | *Association* |
| `_ProdnRsceToolCategory` | *Association* |
| `_LongTextLanguage` | *Association* |
| `prt._ProdnRsceToolControlProfile` | `prt._ProdnRsceToolControlProfile` |
| `prt._ProductionResourceType` | `prt._ProductionResourceType` |
| `prt._ProdnRsceToolByInternalKey` | `prt._ProdnRsceToolByInternalKey` |
| `prt._ProdnRsceToolMasterData` | `prt._ProdnRsceToolMasterData` |
| `prt._CreatedByUser` | `prt._CreatedByUser` |
| `prt._LastChangedByUser` | `prt._LastChangedByUser` |
| `prt._BillOfOperationsType` | `prt._BillOfOperationsType` |
| `prt._BillOfOperationsGroup` | `prt._BillOfOperationsGroup` |
| `prt._ProdnRsceToolUsageDurnUnit` | `prt._ProdnRsceToolUsageDurnUnit` |
| `prt._ProdnRsceToolStdWorkQtyUnit` | `prt._ProdnRsceToolStdWorkQtyUnit` |
| `prt._PlannedProdnRsceToolQtyUnit` | `prt._PlannedProdnRsceToolQtyUnit` |
| `prt._ConfirmedProdnRsceToolQtyUnit` | `prt._ConfirmedProdnRsceToolQtyUnit` |
| `prt._RemainingProdnRsceToolQtyUnit` | `prt._RemainingProdnRsceToolQtyUnit` |
| `prt._ProdnRsceToolUsageQtyUnit` | `prt._ProdnRsceToolUsageQtyUnit` |
| `prt._PlndProdnRsceToolUsageQtyUnit` | `prt._PlndProdnRsceToolUsageQtyUnit` |
| `prt._ConfdProdnRsceToolUsgeQtyUnit` | `prt._ConfdProdnRsceToolUsgeQtyUnit` |
| `prt._RmngProdnRsceToolUsageQtyUnit` | `prt._RmngProdnRsceToolUsageQtyUnit` |
| `prt._StatusObject` | `prt._StatusObject` |
| `prt._DocumentProdnRsceTool` | `prt._DocumentProdnRsceTool` |
| `prt._EquipmentProdnRsceTool` | `prt._EquipmentProdnRsceTool` |
| `prt._MaterialProdnRsceTool` | `prt._MaterialProdnRsceTool` |
| `prt._MiscProdnRsceTool` | `prt._MiscProdnRsceTool` |
| `_ProductionOrderHeader` | *Association* |
| `_ProductionOrderSequence` | *Association* |
| `_ProductionOrderOperation` | *Association* |
| `_LongText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrderInternal` | `I_ProductionOrderInternalID` | [1..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |
| `_ProdnRsceToolCategory` | `I_ProdnRsceToolCategory_2` | [1..1] |
| `_ProductionPlant` | `I_Plant` | [1..1] |
| `_LongTextLanguage` | `I_Language` | [0..1] |
| `_ProductionOrderHeader` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderSequence` | `I_ProductionOrderSequence` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_StatusObject']
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IPRODNORDERPRT'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderProdnRsceTool'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'PRT of a Production Order'

define view entity I_ProductionOrderPRT
    as select from I_OrderProdnResourceTool as prt
      inner join   I_OrderOperationBasic    as opr on  opr.OrderInternalID          = prt.OrderInternalBillOfOperations
                                                   and opr.OrderOperationInternalID = prt.OrderIntBillOfOperationsItem

  association [1..1] to I_ProductionOrderInternalID  as _ProductionOrderInternal  on  $projection.OrderInternalID = _ProductionOrderInternal.ProductionOrderInternalID
  association [1..1] to I_ProductionOrderType        as _ProductionOrderType      on  $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
  association [1..1] to I_ProdnRsceToolCategory_2    as _ProdnRsceToolCategory    on  $projection.ProdnRsceToolCategory = _ProdnRsceToolCategory.ProdnRsceToolCategory
  association [1..1] to I_Plant                      as _ProductionPlant          on  $projection.ProductionPlant = _ProductionPlant.Plant
  association [0..1] to I_Language                   as _LongTextLanguage         on  $projection.LongTextLanguage = _LongTextLanguage.Language
  -- SOT relations
  association [1..1] to I_ProductionOrder            as _ProductionOrderHeader    on  $projection.ProductionOrder = _ProductionOrderHeader.ProductionOrder
  association [1..1] to I_ProductionOrderSequence    as _ProductionOrderSequence  on  $projection.ProductionOrder         = _ProductionOrderSequence.ProductionOrder
                                                                                  and $projection.ProductionOrderSequence = _ProductionOrderSequence.ProductionOrderSequence
  association to parent I_ProductionOrderOperation_2 as _ProductionOrderOperation on  $projection.OrderInternalID          = _ProductionOrderOperation.OrderInternalID
                                                                                  and $projection.OrderOperationInternalID = _ProductionOrderOperation.OrderOperationInternalID
  composition [0..*] of I_ProductionOrderPRTLongText as _LongText
{
      // Key
      @ObjectModel.foreignKey.association: '_ProductionOrderInternal'
  key prt.OrderInternalBillOfOperations as OrderInternalID,
      @ObjectModel.text.element: ['OrderProdnRsceToolText']
  key prt.OrderProdnRsceToolInternalID,

      // Admin data
      prt.IsDeleted,
      @Semantics.systemDate.createdAt: true
      prt.CreationDate,
      @Semantics.user.createdBy: true
      prt.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      prt.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      prt.LastChangedByUser,

      // Text
      @Semantics.text: true
      prt.OrderProdnRsceToolText,
      @Semantics.booleanIndicator: true
      prt.ProdnRsceToolHasLongText,
      @ObjectModel.foreignKey.association: '_LongTextLanguage'
      prt.Language as LongTextLanguage,

      // PRT data
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
      prt.ProductionResourceType,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolByInternalKey'
      prt.ProductionResourceInternalID,
      cast(prt._ProdnRsceToolByInternalKey.ProductionResourceTool as pph_fhmnr preserving type) as ProductionResourceTool,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'      
      prt._ProdnRsceToolByInternalKey.ProdnRsceToolCategory_2                                   as ProdnRsceToolCategory,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolControlProfile'
      prt.ProdnRsceToolControlProfile,
      @ObjectModel.text.element: ['OrderProdnRsceToolText']
      prt.ProdnRsceToolItemNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      prt.ObjectInternalID,

      // Order and Operation data
      @Consumption.hidden: true
      prt.OrderIntBillOfOperationsItem                                 as OrderOperationInternalID,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      cast(prt.OrderID as vdm_manufacturingorder preserving type)      as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderSequenceVH', element: 'ProductionOrderSequence' } } ]
      cast(opr.Sequence as vdm_prodnordersequence preserving type)     as ProductionOrderSequence,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderOperationVH', element: 'ProductionOrderOperation' } } ]
      cast(opr.Operation_2 as vdm_prodnorderoperation preserving type) as ProductionOrderOperation,
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(prt.OrderType as vdm_prodnordertype preserving type)        as ProductionOrderType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_ProductionPlant'
      cast(prt.Plant as pwwrk preserving type)                         as ProductionPlant,

      // BOO Data
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      prt.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      prt.BillOfOperationsGroup,

      // Dates and Times
      prt.EarliestSchedldUsageStartDate,
      prt.EarliestSchedldUsageStartTime,
      prt.EarliestSchedldUsageEndDate,
      prt.EarliestSchedldUsageEndTime,
      prt.LatestSchedldUsageStartDate,
      prt.LatestSchedldUsageStartTime,
      prt.LatestSchedldUsageEndDate,
      prt.LatestSchedldUsageEndTime,
      prt.ActualUsageStartDate,
      prt.ActualUsageStartTime,
      prt.ActualUsageEndDate,
      prt.ActualUsageEndTime,

      // Formulas
      prt.ProdnRsceToolTotQtyCalcFormula,
      prt.ProdnRsceToolUsageQtyCalcFmla,

      // Duration
      @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageDurnUnit'
      prt.ProdnRsceToolUsageDurnUnit,
      prt.ProdnRsceToolUsageDuration,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_ProdnRsceToolStdWorkQtyUnit'
      prt.ProdnRsceToolStdWorkQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
      @Aggregation.default: #SUM
      prt.ProdnRsceToolStandardWorkQty,

      @ObjectModel.foreignKey.association: '_PlannedProdnRsceToolQtyUnit'
      prt.PlannedProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'PlannedProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.PlannedTotalProdnRsceToolQty,

      @ObjectModel.foreignKey.association: '_ConfirmedProdnRsceToolQtyUnit'
      prt.ConfirmedProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfirmedProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.ConfirmedProdnRsceToolQty,

      @ObjectModel.foreignKey.association: '_RemainingProdnRsceToolQtyUnit'
      prt.RemainingProdnRsceToolQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'RemainingProdnRsceToolQtyUnit'
      @Aggregation.default: #SUM
      prt.RemainingProdnRsceToolQty,

      // Usage Quantities and UoMs
      @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageQtyUnit'
      prt.ProdnRsceToolUsageQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolUsageQuantityUnit'
      @Aggregation.default: #SUM
      prt.ProdnRsceToolUsageQuantity,

      @ObjectModel.foreignKey.association: '_PlndProdnRsceToolUsageQtyUnit'
      prt.PlndProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'PlndProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.PlannedProdnRsceToolUsageQty,

      @ObjectModel.foreignKey.association: '_ConfdProdnRsceToolUsgeQtyUnit'
      prt.ConfdProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'ConfdProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.ConfirmedProdnRsceToolUsageQty,

      @ObjectModel.foreignKey.association: '_RmngProdnRsceToolUsageQtyUnit'
      prt.RmngProdnRsceToolUsageQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'RmngProdnRsceToolUsageQtyUnit'
      @Aggregation.default: #SUM
      prt.RemainingProdnRsceToolUsageQty,

      // Associations
      _ProductionOrderInternal,
      _ProductionPlant,
      _ProductionOrderType,
      _ProdnRsceToolCategory,
      _LongTextLanguage,
      prt._ProdnRsceToolControlProfile,
      prt._ProductionResourceType,
      prt._ProdnRsceToolByInternalKey,
      prt._ProdnRsceToolMasterData,
      prt._CreatedByUser,
      prt._LastChangedByUser,
      prt._BillOfOperationsType,
      prt._BillOfOperationsGroup,
      prt._ProdnRsceToolUsageDurnUnit,
      prt._ProdnRsceToolStdWorkQtyUnit,
      prt._PlannedProdnRsceToolQtyUnit,
      prt._ConfirmedProdnRsceToolQtyUnit,
      prt._RemainingProdnRsceToolQtyUnit,
      prt._ProdnRsceToolUsageQtyUnit,
      prt._PlndProdnRsceToolUsageQtyUnit,
      prt._ConfdProdnRsceToolUsgeQtyUnit,
      prt._RmngProdnRsceToolUsageQtyUnit,
      prt._StatusObject,
      prt._DocumentProdnRsceTool,
      prt._EquipmentProdnRsceTool,
      prt._MaterialProdnRsceTool,
      prt._MiscProdnRsceTool,
      -- SOT relations
      _ProductionOrderHeader,
      _ProductionOrderSequence,
      _ProductionOrderOperation,
      _LongText  
}
where
  prt.OrderCategory = '10'; // Production orders only
```
