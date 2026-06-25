---
name: I_MAINTORDEROPERATION_DEX
description: Maintorderoperation (Data Extraction)
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - data-extraction
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPERATION_DEX

**Maintorderoperation (Data Extraction)**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key MaintOrderRoutingNumber` | `MaintOrderRoutingNumber` |
| `operationinternalid preserving type )` | `cast( MaintenanceOrderRoutingNode` |
| `MaintenanceOrder` | `MaintenanceOrder` |
| `BillOfOperationsApplication` | `BillOfOperationsApplication` |
| `_MaintenanceOrder._LocationAccountAssignment.FunctionalLocation            as FunctionalLocation` | *Association* |
| `_MaintenanceOrder.Equipment                                                as Equipment` | *Association* |
| `_MaintenanceOrder.Assembly                                                 as Assembly` | *Association* |
| `_MaintenanceOrder.MaintenanceActivityType                                  as MaintenanceActivityType` | *Association* |
| `_MaintenanceOrder.MaintenancePlannerGroup                                  as MaintenancePlannerGroup` | *Association* |
| `_MaintenanceOrder.MaintenancePlanningPlant                                 as MaintenancePlanningPlant` | *Association* |
| `_MaintenanceOrder.MaintenanceOrderType                                     as MaintenanceOrderType` | *Association* |
| `_MaintenanceOrder.MaintenancePlant                                         as MaintenancePlant` | *Association* |
| `_MaintenanceOrder.MaintObjectLocAcctAssgmtNmbr                             as MaintObjectLocAcctAssgmtNmbr` | *Association* |
| `_MaintenanceOrder._Order.CreationDate` | *Association* |
| `_MaintenanceOrder.LastChangeDateTime` | *Association* |
| `_MaintenanceOrder.MaintOrdProcessPhaseCode                                 as MaintOrdProcessPhaseCode` | *Association* |
| `_MaintenanceOrder.MaintOrdProcessSubPhaseCode                              as MaintOrdProcessSubPhaseCode` | *Association* |
| `_MaintenanceOrder.LatestAcceptableCompletionDate                           as LatestAcceptableCompletionDate` | *Association* |
| `_MaintenanceOrder.PrevLtstAccptblCompletionDate                            as PrevLtstAccptblCompletionDate` | *Association* |
| `_MaintenanceOrder.MaintOrderProcessingContext                              as MaintOrderProcessingContext` | *Association* |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `OperationPersonResponsible` | `OperationPersonResponsible` |
| `OperationControlKey` | `OperationControlKey` |
| `OperationDescription` | `OperationDescription` |
| `_WorkCenter.WorkCenter` | *Association* |
| `_WorkCenter.Plant                                                          as WorkCenterPlant` | *Association* |
| `_OperationPlanningValues.OperationPlannedWork` | *Association* |
| `_OperationPlanningValues.OperationPlannedWorkUnit` | *Association* |
| `_OperationPlanningValues.ConfirmationTotalQuantity` | *Association* |
| `_OperationPlanningValues.OperationQuantity` | *Association* |
| `_OperationPlanningValues.OperationQuantityUnit` | *Association* |
| `OperationAssembly` | `Assembly` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `CostElement` | `CostElement` |
| `MaterialGroup` | `MaterialGroup` |
| `OperationUnloadingPointName` | `OperationUnloadingPointName` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `cast( case when _StatusObjectActiveStatus[ StatusCode = 'I0013' ].StatusCode is not null` | `cast( case when _StatusObjectActiveStatus[ StatusCode = 'I0013' ].StatusCode is not null` |
| `eam_is_deleted preserving type )` | `then 'X' else ' ' end` |
| `MaintOrderConfirmation` | `MaintOrderConfirmation` |
| `MaintOrdOperationStatusObject` | `MaintOrdOperationStatusObject` |
| `SuperiorOperationInternalID` | `SuperiorOperationInternalID` |
| `OperationWorkCenterInternalID` | `OperationWorkCenterInternalID` |
| `OperationWorkCenterTypeCode` | `OperationWorkCenterTypeCode` |
| `MaintOrdOpProcessPhaseCode` | `MaintOrdOpProcessPhaseCode` |
| `MaintOrdOpProcessSubPhaseCode` | `MaintOrdOpProcessSubPhaseCode` |
| `MaintOperationExecStageCode` | `MaintOperationExecStageCode` |
| `Plant` | `Plant` |
| `OperationStandardTextCode` | `OperationStandardTextCode` |
| `Language` | `Language` |
| `NumberOfTimeTickets` | `NumberOfTimeTickets` |
| `OperationPurgInfoRecdSearchTxt` | `OperationPurgInfoRecdSearchTxt` |
| `OperationSupplier` | `OperationSupplier` |
| `OpExternalProcessingPrice` | `OpExternalProcessingPrice` |
| `OpExternalProcessingPriceUnit` | `OpExternalProcessingPriceUnit` |
| `OpExternalProcessingCurrency` | `OpExternalProcessingCurrency` |
| `OperationPurchasingInfoRecord` | `OperationPurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `OpPurchaseOutlineAgreement` | `OpPurchaseOutlineAgreement` |
| `OpPurchaseOutlineAgreementItem` | `OpPurchaseOutlineAgreementItem` |
| `OperationRequisitionerName` | `OperationRequisitionerName` |
| `OperationTrackingNumber` | `OperationTrackingNumber` |
| `NumberOfCapacities` | `NumberOfCapacities` |
| `OperationWorkPercent` | `OperationWorkPercent` |
| `OperationCalculationControl` | `OperationCalculationControl` |
| `ActivityType` | `CostCtrActivityType` |
| `OperationSystemCondition` | `OperationSystemCondition` |
| `OperationGoodsRecipientName` | `OperationGoodsRecipientName` |
| `_OperationPlanningValues.OpPlndDeliveryDurationInDays                      as DeliveryTimeInDays` | *Association* |
| `_OperationPlanningValues.OperationDuration                                 as MaintOrderOperationDuration` | *Association* |
| `_OperationPlanningValues.OperationDurationUnit                             as MaintOrdOperationDurationUnit` | *Association* |
| `_OperationPlanningValues.OpErlstSchedldExecStrtDte                         as OpErlstSchedldExecStrtDte` | *Association* |
| `_OperationPlanningValues.OpErlstSchedldExecStrtTme                         as OpErlstSchedldExecStrtTme` | *Association* |
| `_OperationPlanningValues.OpErlstSchedldExecEndDte                          as OpErlstSchedldExecEndDte` | *Association* |
| `_OperationPlanningValues.OpErlstSchedldExecEndTme                          as OpErlstSchedldExecEndTme` | *Association* |
| `_OperationPlanningValues.OpLtstSchedldExecStrtDte                          as OpLtstSchedldExecStrtDte` | *Association* |
| `_OperationPlanningValues.OpLtstSchedldExecStrtTme                          as OpLtstSchedldExecStrtTme` | *Association* |
| `_OperationPlanningValues.OpLtstSchedldExecEndDte                           as OpLtstSchedldExecEndDte` | *Association* |
| `_OperationPlanningValues.OpLtstSchedldExecEndTme                           as OpLtstSchedldExecEndTme` | *Association* |
| `_OperationPlanningValues.OpActualExecutionStartDate                        as OpActualExecutionStartDate` | *Association* |
| `_OperationPlanningValues.OpActualExecutionStartTime                        as OpActualExecutionStartTime` | *Association* |
| `_OperationPlanningValues.OpActualExecutionEndDate                          as OpActualExecutionEndDate` | *Association* |
| `_OperationPlanningValues.OpActualExecutionEndTime                          as OpActualExecutionEndTime` | *Association* |
| `_OperationPlanningValues.ActyConfFcstdEndDate                              as ActyConfFcstdEndDate` | *Association* |
| `_OperationPlanningValues.ActyConfFcstdEndTime                              as ActyConfFcstdEndTime` | *Association* |
| `_OperationPlanningValues.OpBscStartDateConstraintType                      as OpBscStartDateConstraintType` | *Association* |
| `_OperationPlanningValues.OpBscEndDateConstraintType                        as OpBscEndDateConstraintType` | *Association* |
| `_OperationPlanningValues.OperationPlannedWork                              as MaintOrdOperationWorkDuration` | *Association* |
| `_OperationPlanningValues.OperationPlannedWorkUnit                          as MaintOrdOpWorkDurationUnit` | *Association* |
| `case` | `case` |
| `when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' and` | `when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' and` |
| `_OperationPlanningValues.ConstraintDateForBscStartDate <> '00000000'` | *Association* |
| `then dats_add_days(_OperationPlanningValues.ConstraintDateForBscStartDate,1,'NULL')` | `then dats_add_days(_OperationPlanningValues.ConstraintDateForBscStartDate,1,'NULL')` |
| `else _OperationPlanningValues.ConstraintDateForBscStartDate` | `else _OperationPlanningValues.ConstraintDateForBscStartDate` |
| `ConstraintDateForBscStartDate` | `end` |
| `case` | `case` |
| `when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000'` | `when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000'` |
| `then '000000'` | `then '000000'` |
| `else _OperationPlanningValues.ConstraintTimeForBscStartTime` | `else _OperationPlanningValues.ConstraintTimeForBscStartTime` |
| `ConstraintTimeForBscStartTime` | `end` |
| `case` | `case` |
| `when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' and` | `when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' and` |
| `_OperationPlanningValues.ConstraintDateForBscFinishDate <> '00000000'` | *Association* |
| `then dats_add_days(_OperationPlanningValues.ConstraintDateForBscFinishDate,1,'NULL')` | `then dats_add_days(_OperationPlanningValues.ConstraintDateForBscFinishDate,1,'NULL')` |
| `else _OperationPlanningValues.ConstraintDateForBscFinishDate` | `else _OperationPlanningValues.ConstraintDateForBscFinishDate` |
| `ConstraintDateForBscFinishDate` | `end` |
| `case` | `case` |
| `when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000'` | `when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000'` |
| `then '000000'` | `then '000000'` |
| `else _OperationPlanningValues.ConstraintTimeForBscFinishTime` | `else _OperationPlanningValues.ConstraintTimeForBscFinishTime` |
| `ConstraintTimeForBscFinishTime` | `end` |
| `_OperationPlanningValues.MaintOrdOperationExecutionRate                    as MaintOrdOperationExecutionRate` | *Association* |
| `BusinessArea` | `BusinessArea` |
| `ProfitCenter` | `ProfitCenter` |
| `CostingSheet` | `CostingSheet` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `FunctionalArea` | `FunctionalArea` |
| `MaintControllingObjectClass` | `MaintControllingObjectClass` |
| `WrkCtrIntCapRqmtsDistr` | `WrkCtrIntCapRqmtsDistr` |
| `MaintOrdOperationOverheadCode` | `MaintOrdOperationOverheadCode` |
| `_OperationPlanningValues.OperationQuantity                                 as MaintOrderOperationQuantity` | *Association* |
| `_OperationPlanningValues.OperationQuantityUnit                             as MaintOrdOperationQuantityUnit` | *Association* |
| `MaintOrdOpAssgdWBSElmntInt` | `MaintOrdOpAssgdWBSElmntInt` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `_OperationPlanningValues.ForecastedWorkQty                                 as ForecastWorkQuantity` | *Association* |
| `AllMaintOrdCompCmtdQtsAreKept` | `AllMaintOrdCompCmtdQtsAreKept` |
| `MaintOrderConfCntrValue` | `MaintOrderConfCntrValue` |
| `MaintOrdOpHasNoRemainingWork` | `MaintOrdOpHasNoRemainingWork` |
| `MaintOrdOpHasLeanServices` | `MaintOrdOpHasLeanServices` |
| `TaskListType` | `TaskListType` |
| `_MaintenanceOrder.ControllingArea                                          as ControllingArea` | *Association* |
| `MaintOrdOpDelivDateAdjustment` | `MaintOrdOpDelivDateAdjustment` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `/* Get Execution stage  Exact value*/` | `/* Get Execution stage  Exact value*/` |
| `_MaintOperationExecStageCode.MaintOpExecStageGroupCode` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_OperationPlanningValues._PlannedWorkUnitOfMeasure` | *Association* |
| `_OperationPlanningValues._OperationQtyUnitOfMeasure` | *Association* |
| `_PersonResponsible` | *Association* |
| `_Order` | *Association* |
| `_Equipment` | *Association* |
| `_LocationAccountAssignment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_LogisticsOrder` | [0..1] |
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Operation Data'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IPMORDOPERDEX'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE


@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
            {
                    table: 'AFVC', role: #MAIN,
                    viewElement: ['MaintOrderRoutingNumber','MaintenanceOrderRoutingNode'],
                    tableElement: ['AUFPL','APLZL']
                },{
                    table: 'AFKO', role:  #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: [' MaintenanceOrder'],
                    tableElement: ['AUFNR']}
                    ]

                 }
              }
          }
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name:'MaintenanceOrderOperation'

// A more comprehensive view for order (sub)operation data, created as a replacement for BW extractor 2LIS_17_I3OPER

define view I_MaintOrderOperation_DEX
  as select from I_MaintOrderOpAndSubOp_2
  association [0..1] to I_LogisticsOrder            as _Order                     on _Order.OrderID = $projection.MaintenanceOrder // AUFK (Order master data) and AFKO (Order Header data )
  association [0..1] to I_LocationAccountAssignment as _LocationAccountAssignment on $projection.MaintObjectLocAcctAssgmtNmbr = _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr
  association [0..1] to I_Equipment                 as _Equipment                 on $projection.Equipment = _Equipment.Equipment
  -- Extensions, do not expose as association:
  association [0..1] to E_MaintenanceOrder          as _MaintenanceOrderExtension on $projection.MaintenanceOrder = _MaintenanceOrderExtension.MaintenanceOrder
{
  key MaintOrderRoutingNumber,
  key cast( MaintenanceOrderRoutingNode as operationinternalid preserving type ) as MaintenanceOrderRoutingNode,
      MaintenanceOrder,
      @Consumption.hidden: true
      BillOfOperationsApplication,

      // Order Header:
      _MaintenanceOrder._LocationAccountAssignment.FunctionalLocation            as FunctionalLocation,
      _MaintenanceOrder.Equipment                                                as Equipment,
      _MaintenanceOrder.Assembly                                                 as Assembly,
      _MaintenanceOrder.MaintenanceActivityType                                  as MaintenanceActivityType,
      _MaintenanceOrder.MaintenancePlannerGroup                                  as MaintenancePlannerGroup,
      _MaintenanceOrder.MaintenancePlanningPlant                                 as MaintenancePlanningPlant,
      _MaintenanceOrder.MaintenanceOrderType                                     as MaintenanceOrderType,
      _MaintenanceOrder.MaintenancePlant                                         as MaintenancePlant,
      _MaintenanceOrder.MaintObjectLocAcctAssgmtNmbr                             as MaintObjectLocAcctAssgmtNmbr,

      @Semantics.systemDate.createdAt: true
      _MaintenanceOrder._Order.CreationDate,
      @Semantics.systemDateTime.lastChangedAt: true
      _MaintenanceOrder.LastChangeDateTime,

      _MaintenanceOrder.MaintOrdProcessPhaseCode                                 as MaintOrdProcessPhaseCode,
      _MaintenanceOrder.MaintOrdProcessSubPhaseCode                              as MaintOrdProcessSubPhaseCode,
      _MaintenanceOrder.LatestAcceptableCompletionDate                           as LatestAcceptableCompletionDate,
      _MaintenanceOrder.PrevLtstAccptblCompletionDate                            as PrevLtstAccptblCompletionDate,
      _MaintenanceOrder.MaintOrderProcessingContext                              as MaintOrderProcessingContext,


      // Order Operation (MCVGIH)
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      OperationPersonResponsible,
      OperationControlKey,
      OperationDescription,
      _WorkCenter.WorkCenter,
      _WorkCenter.Plant                                                          as WorkCenterPlant,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.OperationPlannedWork,
      @ObjectModel.foreignKey.association: '_PlannedWorkUnitOfMeasure'
      @Semantics.unitOfMeasure:true
      _OperationPlanningValues.OperationPlannedWorkUnit,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.ConfirmationTotalQuantity,
      @Semantics.quantity.unitOfMeasure: 'OperationQuantityUnit'
      _OperationPlanningValues.OperationQuantity,
      @ObjectModel.foreignKey.association: '_OperationQtyUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      _OperationPlanningValues.OperationQuantityUnit,
      Assembly                                                                   as OperationAssembly,
      CostCtrActivityType,
      CostElement,
      MaterialGroup,
      OperationUnloadingPointName,
      PurchaseRequisition,

      @Semantics.booleanIndicator : true
      cast( case when _StatusObjectActiveStatus[ StatusCode = 'I0013' ].StatusCode is not null
      then 'X' else ' ' end as eam_is_deleted preserving type )                  as IsDeleted,

      MaintOrderConfirmation,
      MaintOrdOperationStatusObject,
      SuperiorOperationInternalID,
      OperationWorkCenterInternalID,
      OperationWorkCenterTypeCode,

      MaintOrdOpProcessPhaseCode,
      MaintOrdOpProcessSubPhaseCode,
      MaintOperationExecStageCode,

      Plant,
      OperationStandardTextCode,
      Language,
      NumberOfTimeTickets,
      OperationPurgInfoRecdSearchTxt,
      OperationSupplier,

      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      OpExternalProcessingPrice,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      OpExternalProcessingPriceUnit,
      OpExternalProcessingCurrency,

      OperationPurchasingInfoRecord,
      PurchasingOrganization,
      PurchasingGroup,

      OpPurchaseOutlineAgreement,
      OpPurchaseOutlineAgreementItem,
      OperationRequisitionerName,
      OperationTrackingNumber,

      NumberOfCapacities,
      OperationWorkPercent,
      OperationCalculationControl,
      CostCtrActivityType                                                        as ActivityType,

      OperationSystemCondition,
      OperationGoodsRecipientName,
      _OperationPlanningValues.OpPlndDeliveryDurationInDays                      as DeliveryTimeInDays,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationDurationUnit'
      _OperationPlanningValues.OperationDuration                                 as MaintOrderOperationDuration,
      _OperationPlanningValues.OperationDurationUnit                             as MaintOrdOperationDurationUnit,
      _OperationPlanningValues.OpErlstSchedldExecStrtDte                         as OpErlstSchedldExecStrtDte,
      _OperationPlanningValues.OpErlstSchedldExecStrtTme                         as OpErlstSchedldExecStrtTme,
      _OperationPlanningValues.OpErlstSchedldExecEndDte                          as OpErlstSchedldExecEndDte,
      _OperationPlanningValues.OpErlstSchedldExecEndTme                          as OpErlstSchedldExecEndTme,
      _OperationPlanningValues.OpLtstSchedldExecStrtDte                          as OpLtstSchedldExecStrtDte,
      _OperationPlanningValues.OpLtstSchedldExecStrtTme                          as OpLtstSchedldExecStrtTme,
      _OperationPlanningValues.OpLtstSchedldExecEndDte                           as OpLtstSchedldExecEndDte,
      _OperationPlanningValues.OpLtstSchedldExecEndTme                           as OpLtstSchedldExecEndTme,
      _OperationPlanningValues.OpActualExecutionStartDate                        as OpActualExecutionStartDate,
      _OperationPlanningValues.OpActualExecutionStartTime                        as OpActualExecutionStartTime,
      _OperationPlanningValues.OpActualExecutionEndDate                          as OpActualExecutionEndDate,
      _OperationPlanningValues.OpActualExecutionEndTime                          as OpActualExecutionEndTime,
      _OperationPlanningValues.ActyConfFcstdEndDate                              as ActyConfFcstdEndDate,
      _OperationPlanningValues.ActyConfFcstdEndTime                              as ActyConfFcstdEndTime,
      _OperationPlanningValues.OpBscStartDateConstraintType                      as OpBscStartDateConstraintType,
      _OperationPlanningValues.OpBscEndDateConstraintType                        as OpBscEndDateConstraintType,
      @Semantics.quantity.unitOfMeasure: 'MaintOrdOpWorkDurationUnit'
      _OperationPlanningValues.OperationPlannedWork                              as MaintOrdOperationWorkDuration,
      _OperationPlanningValues.OperationPlannedWorkUnit                          as MaintOrdOpWorkDurationUnit,
      //      _OperationPlanningValues.ConstraintDateForBscStartDate,
      //      _OperationPlanningValues.ConstraintTimeForBscStartTime,
      //      _OperationPlanningValues.ConstraintDateForBscFinishDate,
      //      _OperationPlanningValues.ConstraintTimeForBscFinishTime,
      //      Constraint Basic Start Date Time
      case
      when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000' and
           _OperationPlanningValues.ConstraintDateForBscStartDate <> '00000000'
      then dats_add_days(_OperationPlanningValues.ConstraintDateForBscStartDate,1,'NULL')
      else _OperationPlanningValues.ConstraintDateForBscStartDate
      end                                                                     as ConstraintDateForBscStartDate,

      case
      when _OperationPlanningValues.ConstraintTimeForBscStartTime = '240000'
      then '000000'
      else _OperationPlanningValues.ConstraintTimeForBscStartTime
      end                                                                        as ConstraintTimeForBscStartTime,

      //      Constraint Basic Finisch Date Time
      case
      when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000' and
           _OperationPlanningValues.ConstraintDateForBscFinishDate <> '00000000'
      then dats_add_days(_OperationPlanningValues.ConstraintDateForBscFinishDate,1,'NULL')
      else _OperationPlanningValues.ConstraintDateForBscFinishDate
      end                                                                  as ConstraintDateForBscFinishDate,

      case
      when _OperationPlanningValues.ConstraintTimeForBscFinishTime = '240000'
      then '000000'
      else _OperationPlanningValues.ConstraintTimeForBscFinishTime
      end                                                                        as ConstraintTimeForBscFinishTime,
      _OperationPlanningValues.MaintOrdOperationExecutionRate                    as MaintOrdOperationExecutionRate,

      BusinessArea,
      ProfitCenter,
      CostingSheet,
      TaxJurisdiction,
      FunctionalArea,
      MaintControllingObjectClass,
      WrkCtrIntCapRqmtsDistr,
      MaintOrdOperationOverheadCode,

      @Semantics.quantity.unitOfMeasure: 'MaintOrdOperationQuantityUnit'
      _OperationPlanningValues.OperationQuantity                                 as MaintOrderOperationQuantity,
      _OperationPlanningValues.OperationQuantityUnit                             as MaintOrdOperationQuantityUnit,
      MaintOrdOpAssgdWBSElmntInt,
      IsMarkedForDeletion,
      PurchaseRequisitionItem,
      @Semantics.quantity.unitOfMeasure: 'OperationPlannedWorkUnit'
      _OperationPlanningValues.ForecastedWorkQty                                 as ForecastWorkQuantity,

      AllMaintOrdCompCmtdQtsAreKept,
      MaintOrderConfCntrValue,
      MaintOrdOpHasNoRemainingWork,
      MaintOrdOpHasLeanServices,
      TaskListType,
      _MaintenanceOrder.ControllingArea                                          as ControllingArea,
      MaintOrdOpDelivDateAdjustment,
      TaskListGroup,
      TaskListGroupCounter,

     /* Get Execution stage  Exact value*/
      _MaintOperationExecStageCode.MaintOpExecStageGroupCode,


      /* Associations */
      //I_MaintOrderOperPlanningValues
      _OperationPlanningValues._PlannedWorkUnitOfMeasure,
      _OperationPlanningValues._OperationQtyUnitOfMeasure,
      


      // For DCL:
      _PersonResponsible,
      _Order,
      _Equipment,
      _LocationAccountAssignment
}
```
