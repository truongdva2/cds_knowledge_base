---
name: C_MAINTTASKLISTOPERATIONDEX
description: Maintenance Task ListOPERATIONDEX
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - consumption-view
  - data-extraction
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# C_MAINTTASKLISTOPERATIONDEX

**Maintenance Task ListOPERATIONDEX**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `/* start suppress warning shlporigin_not_inherited */` | `/* start suppress warning shlporigin_not_inherited */` |
| `TaskListType` | `TaskListOpBasic.BillOfOperationsType` |
| `TaskListGroup` | `TaskListOpBasic.BillOfOperationsGroup` |
| `TaskListOperationInternalId` | `TaskListOpBasic.BOOOperationInternalID` |
| `BOOOpInternalVersionCounter` | `TaskListOpBasic.BOOOpInternalVersionCounter` |
| `TaskListGroupCounter` | `plas.BillOfOperationsVariant` |
| `TaskListSequence` | `plas.BillOfOperationsSequence` |
| `BOOOperationInternalID` | `plas.BOOOperationInternalID` |
| `TaskListOpBOMItmIntVersCounter` | `plas.BOOSqncOpAssgmtIntVersionCntr` |
| `TaskListOpBasic.SuperiorOperationInternalID` | `TaskListOpBasic.SuperiorOperationInternalID` |
| `plas.CreationDate` | `plas.CreationDate` |
| `plas.LastChangeDate` | `plas.LastChangeDate` |
| `case when superior.Operation_2 is not null` | `case when superior.Operation_2 is not null` |
| `then superior.Operation_2` | `then superior.Operation_2` |
| `else TaskListOpBasic.Operation_2` | `else TaskListOpBasic.Operation_2` |
| `MaintenanceTaskListOperation` | `end` |
| `case when TaskListOpBasic.SuperiorOperationInternalID <> '00000000'` | `case when TaskListOpBasic.SuperiorOperationInternalID <> '00000000'` |
| `then TaskListOpBasic.Operation_2` | `then TaskListOpBasic.Operation_2` |
| `else ''` | `else ''` |
| `MaintTaskListSubOperation` | `end` |
| `TaskListOpBasic.OperationText` | `TaskListOpBasic.OperationText` |
| `TaskListOpBasic.OperationControlProfile` | `TaskListOpBasic.OperationControlProfile` |
| `TaskListOpBasic.WorkCenterInternalID` | `TaskListOpBasic.WorkCenterInternalID` |
| `TaskListOpBasic.WorkCenterTypeCode` | `TaskListOpBasic.WorkCenterTypeCode` |
| `TaskListOpBasic.Plant` | `TaskListOpBasic.Plant` |
| `TaskListOpBasic.OpPlannedWorkQuantity` | `TaskListOpBasic.OpPlannedWorkQuantity` |
| `TaskListOpBasic.OpWorkQuantityUnit` | `TaskListOpBasic.OpWorkQuantityUnit` |
| `TaskListOpBasic.ChangeNumber` | `TaskListOpBasic.ChangeNumber` |
| `cast ( case when plas.IsDeleted = 'X' then plas.ValidityStartDate` | `cast ( case when plas.IsDeleted = 'X' then plas.ValidityStartDate` |
| `else TaskListOpBasic.ValidityStartDate` | `else TaskListOpBasic.ValidityStartDate` |
| `vdm_v_validity_start_date preserving type )` | `end` |
| `cast ( case when plas.ValidityEndDate <= TaskListOpBasic.ValidityEndDate then plas.ValidityEndDate` | `cast ( case when plas.ValidityEndDate <= TaskListOpBasic.ValidityEndDate then plas.ValidityEndDate` |
| `else TaskListOpBasic.ValidityEndDate` | `else TaskListOpBasic.ValidityEndDate` |
| `vdm_v_validity_end_date preserving type )` | `end` |
| `TaskListOpBasic.OperationStandardTextCode` | `TaskListOpBasic.OperationStandardTextCode` |
| `TaskListOpBasic.PurchasingInfoRecdAddlGrpgName` | `TaskListOpBasic.PurchasingInfoRecdAddlGrpgName` |
| `TaskListOpBasic.OpExternalProcessingPrice` | `TaskListOpBasic.OpExternalProcessingPrice` |
| `TaskListOpBasic.NumberOfOperationPriceUnits` | `TaskListOpBasic.NumberOfOperationPriceUnits` |
| `TaskListOpBasic.OpExternalProcessingCurrency` | `TaskListOpBasic.OpExternalProcessingCurrency` |
| `TaskListOpBasic.PurchasingInfoRecord` | `TaskListOpBasic.PurchasingInfoRecord` |
| `TaskListOpBasic.Supplier` | `TaskListOpBasic.Supplier` |
| `TaskListOpBasic.PurchaseContract` | `TaskListOpBasic.PurchaseContract` |
| `TaskListOpBasic.PurchaseContractItem` | `TaskListOpBasic.PurchaseContractItem` |
| `TaskListOpBasic.OperationStandardDuration` | `TaskListOpBasic.OperationStandardDuration` |
| `TaskListOpBasic.OperationStandardDurationUnit` | `TaskListOpBasic.OperationStandardDurationUnit` |
| `TaskListOpBasic.NumberOfCapacities` | `TaskListOpBasic.NumberOfCapacities` |
| `TaskListOpBasic.OperationSystemCondition` | `TaskListOpBasic.OperationSystemCondition` |
| `TaskListOpBasic.CostCtrActivityType` | `TaskListOpBasic.CostCtrActivityType` |
| `TaskListOpBasic.OperationCalculationControl` | `TaskListOpBasic.OperationCalculationControl` |
| `TaskListOpBasic.Assembly` | `TaskListOpBasic.Assembly` |
| `TaskListOpBasic.PurchaseOrderQty` | `TaskListOpBasic.PurchaseOrderQty` |
| `TaskListOpBasic.PurchaseOrderQuantityUnit` | `TaskListOpBasic.PurchaseOrderQuantityUnit` |
| `ps_s4_tplnr preserving type )` | `cast( TaskListOpBasic.FunctionalLocation` |
| `TaskListOpBasic.Equipment` | `TaskListOpBasic.Equipment` |
| `TaskListOpBasic.PurchasingInfoRecordCategory` | `TaskListOpBasic.PurchasingInfoRecordCategory` |
| `TaskListOpBasic.PurchasingOrganization` | `TaskListOpBasic.PurchasingOrganization` |
| `case when plas.IsDeleted = 'X'` | `case when plas.IsDeleted = 'X'` |
| `then plas.IsDeleted` | `then plas.IsDeleted` |
| `else TaskListOpBasic.IsDeleted` | `else TaskListOpBasic.IsDeleted` |
| `end` | `end` |
| `as IsDeleted` | `as IsDeleted` |
| `plas.IsImplicitlyDeleted` | `plas.IsImplicitlyDeleted` |
| `TaskListOpBasic.OperationUnit` | `TaskListOpBasic.OperationUnit` |
| `TaskListOpBasic.OpQtyToBaseQtyDnmntr` | `TaskListOpBasic.OpQtyToBaseQtyDnmntr` |
| `TaskListOpBasic.OpQtyToBaseQtyNmrtr` | `TaskListOpBasic.OpQtyToBaseQtyNmrtr` |
| `TaskListOpBasic.OperationReferenceQuantity` | `TaskListOpBasic.OperationReferenceQuantity` |
| `TaskListOpBasic.PlannedDeliveryDuration` | `TaskListOpBasic.PlannedDeliveryDuration` |
| `TaskListOpBasic.CostElement` | `TaskListOpBasic.CostElement` |
| `TaskListOpBasic.PurchasingGroup` | `TaskListOpBasic.PurchasingGroup` |
| `TaskListOpBasic.MaterialGroup` | `TaskListOpBasic.MaterialGroup` |
| `TaskListOpBasic.OperationCostingRelevancyType` | `TaskListOpBasic.OperationCostingRelevancyType` |
| `TaskListOpBasic.MinimumDuration` | `TaskListOpBasic.MinimumDuration` |
| `TaskListOpBasic.MinimumDurationUnit` | `TaskListOpBasic.MinimumDurationUnit` |
| `TaskListOpBasic.OperationWorkPercent` | `TaskListOpBasic.OperationWorkPercent` |
| `TaskListOpBasic.CapRqmtsDistributionFunction` | `TaskListOpBasic.CapRqmtsDistributionFunction` |
| `TaskListOpBasic.CompanyCode` | `TaskListOpBasic.CompanyCode` |
| `TaskListOpBasic.FactoryCalendar` | `TaskListOpBasic.FactoryCalendar` |
| `TaskListOpBasic.CapacityRequirementDistrKey` | `TaskListOpBasic.CapacityRequirementDistrKey` |
| `TaskListOpBasic.MaintOperationExecStageCode` | `TaskListOpBasic.MaintOperationExecStageCode` |
| `/* end suppress warning shlporigin_not_inherited */` | `/* end suppress warning shlporigin_not_inherited */` |
| `_MaintenanceTaskList` | *Association* |
| `_TaskListType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceTaskList` | `C_MaintenanceTaskListDEX` | [1..1] |
| `_TaskListType` | `I_MaintenanceTaskListType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maintenance Task List Operation'
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #REQUIRED

@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  sapObjectNodeType.name: 'MaintenanceTaskListOperation',
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #L
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern:#ANALYTICAL_FACT
}

@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [
                {
                  table: 'plpo', role: #MAIN,
                  viewElement: [ 'TaskListType', 'TaskListGroup', 'TaskListOperationInternalId', 'BOOOpInternalVersionCounter'  ],
                  tableElement: [ 'plnty', 'plnnr', 'plnkn', 'zaehl' ]
                },
                {
                  table: 'plas', role: #LEFT_OUTER_TO_ONE_JOIN,
                  viewElement: [ 'TaskListType', 'TaskListGroup' ],
                  tableElement: [ 'plnty', 'plnnr' ]
                }
               ]
    }
   }
 }

define view entity C_MaintTaskListOperationDEX
  as select from           I_BillOfOperationsOpBasic     as TaskListOpBasic
    inner join             I_BOOSqncOperationAssgmtChgSt as plas     on  TaskListOpBasic.BillOfOperationsType             = plas.BillOfOperationsType
                                                                     and TaskListOpBasic.BillOfOperationsGroup            = plas.BillOfOperationsGroup
                                                                     and (
                                                                        (   // Operation
                                                                          TaskListOpBasic.BOOOperationInternalID          = plas.BOOOperationInternalID
                                                                          and TaskListOpBasic.SuperiorOperationInternalID = '00000000'
                                                                        )
                                                                        or( // Sub-Operation
                                                                          TaskListOpBasic.SuperiorOperationInternalID     = plas.BOOOperationInternalID
                                                                        )
                                                                      )
                                                                     and plas.IsDeleted                                   = '' // N_3638581
    left outer to one join I_BillOfOperationsOpBasic     as superior on  TaskListOpBasic.BillOfOperationsType        = superior.BillOfOperationsType
                                                                     and TaskListOpBasic.BillOfOperationsGroup       = superior.BillOfOperationsGroup
                                                                     and TaskListOpBasic.SuperiorOperationInternalID = superior.BOOOperationInternalID

  association [1..1] to C_MaintenanceTaskListDEX         as _MaintenanceTaskList on  _MaintenanceTaskList.TaskListType         = $projection.TaskListType
                                                                             and _MaintenanceTaskList.TaskListGroup        = $projection.TaskListGroup
                                                                             and _MaintenanceTaskList.TaskListGroupCounter = $projection.TaskListGroupCounter
                                                                             and _MaintenanceTaskList.TaskListVersionCounter = $projection.BOOOpInternalVersionCounter

  association [0..1] to I_MaintenanceTaskListType    as _TaskListType        on  _TaskListType.TaskListType = $projection.TaskListType
{

      /* start suppress warning shlporigin_not_inherited */
  key TaskListOpBasic.BillOfOperationsType                           as TaskListType,
  key TaskListOpBasic.BillOfOperationsGroup                          as TaskListGroup,
  key TaskListOpBasic.BOOOperationInternalID                         as TaskListOperationInternalId,
  key TaskListOpBasic.BOOOpInternalVersionCounter                    as BOOOpInternalVersionCounter,
      plas.BillOfOperationsVariant                                   as TaskListGroupCounter,
      plas.BillOfOperationsSequence                                  as TaskListSequence,
      plas.BOOOperationInternalID                                    as BOOOperationInternalID,
      @EndUserText.label: 'BOM Item Internal Version Counter'
      plas.BOOSqncOpAssgmtIntVersionCntr                             as TaskListOpBOMItmIntVersCounter,

      TaskListOpBasic.SuperiorOperationInternalID,

      plas.CreationDate,

      @Semantics.systemDate.lastChangedAt: true
      plas.LastChangeDate,

      @EndUserText.label: 'Maintenance Task List Operation'
      case when superior.Operation_2 is not null
        then superior.Operation_2
        else TaskListOpBasic.Operation_2
      end                                                            as MaintenanceTaskListOperation,
      @EndUserText.label: 'Maintenance Task List Suboperation'
      case when TaskListOpBasic.SuperiorOperationInternalID <> '00000000'
        then TaskListOpBasic.Operation_2
        else ''
      end                                                            as MaintTaskListSubOperation,

      @Semantics.text:true
      TaskListOpBasic.OperationText,

      TaskListOpBasic.OperationControlProfile,

      TaskListOpBasic.WorkCenterInternalID,

      TaskListOpBasic.WorkCenterTypeCode,

      TaskListOpBasic.Plant,

      @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit'
      TaskListOpBasic.OpPlannedWorkQuantity,


      TaskListOpBasic.OpWorkQuantityUnit,


      TaskListOpBasic.ChangeNumber,

      @Semantics.businessDate.from: true
      cast ( case when plas.IsDeleted = 'X' then plas.ValidityStartDate
                  else TaskListOpBasic.ValidityStartDate
                  end as vdm_v_validity_start_date preserving type ) as ValidityStartDate,

      @Semantics.businessDate.to: true
      cast ( case when plas.ValidityEndDate <= TaskListOpBasic.ValidityEndDate then plas.ValidityEndDate
                  else TaskListOpBasic.ValidityEndDate
                  end as vdm_v_validity_end_date preserving type )   as ValidityEndDate,

      TaskListOpBasic.OperationStandardTextCode,

      TaskListOpBasic.PurchasingInfoRecdAddlGrpgName,

      @Semantics.amount.currencyCode: 'OpExternalProcessingCurrency'
      TaskListOpBasic.OpExternalProcessingPrice,

      TaskListOpBasic.NumberOfOperationPriceUnits,

      TaskListOpBasic.OpExternalProcessingCurrency,

      TaskListOpBasic.PurchasingInfoRecord,

      TaskListOpBasic.Supplier,

      TaskListOpBasic.PurchaseContract,

      TaskListOpBasic.PurchaseContractItem,

      @Semantics.quantity.unitOfMeasure: 'OperationStandardDurationUnit'
      TaskListOpBasic.OperationStandardDuration,


      TaskListOpBasic.OperationStandardDurationUnit,

      TaskListOpBasic.NumberOfCapacities,

      TaskListOpBasic.OperationSystemCondition,

      TaskListOpBasic.CostCtrActivityType,

      TaskListOpBasic.OperationCalculationControl,

      TaskListOpBasic.Assembly,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      TaskListOpBasic.PurchaseOrderQty,

      TaskListOpBasic.PurchaseOrderQuantityUnit,

      cast( TaskListOpBasic.FunctionalLocation as ps_s4_tplnr preserving type )                           as FunctionalLocation,

      TaskListOpBasic.Equipment,

      TaskListOpBasic.PurchasingInfoRecordCategory,

      TaskListOpBasic.PurchasingOrganization,
      
      @EndUserText.label: 'Is Deleted'
      case when plas.IsDeleted = 'X'
        then plas.IsDeleted
        else TaskListOpBasic.IsDeleted
      end  
                                                                as IsDeleted,
      @EndUserText.label: 'Is Implicitly Deleted'
      plas.IsImplicitlyDeleted,

      TaskListOpBasic.OperationUnit,

      TaskListOpBasic.OpQtyToBaseQtyDnmntr,

      TaskListOpBasic.OpQtyToBaseQtyNmrtr,

      @Semantics.quantity.unitOfMeasure: 'OperationUnit'
      TaskListOpBasic.OperationReferenceQuantity,

      TaskListOpBasic.PlannedDeliveryDuration,

      TaskListOpBasic.CostElement,

      TaskListOpBasic.PurchasingGroup,

      TaskListOpBasic.MaterialGroup,

      TaskListOpBasic.OperationCostingRelevancyType,

      @Semantics.quantity.unitOfMeasure: 'MinimumDurationUnit'
      TaskListOpBasic.MinimumDuration,
      TaskListOpBasic.MinimumDurationUnit,
      TaskListOpBasic.OperationWorkPercent,
      TaskListOpBasic.CapRqmtsDistributionFunction,
      TaskListOpBasic.CompanyCode,
      TaskListOpBasic.FactoryCalendar,

      TaskListOpBasic.CapacityRequirementDistrKey,

      TaskListOpBasic.MaintOperationExecStageCode,


      /* end suppress warning shlporigin_not_inherited */

      _MaintenanceTaskList,
      _TaskListType
}
where
  (
       TaskListOpBasic.BillOfOperationsType = 'E'
    or TaskListOpBasic.BillOfOperationsType = 'A'
    or TaskListOpBasic.BillOfOperationsType = 'T'
  )
```
