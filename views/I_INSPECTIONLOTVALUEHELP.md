---
name: I_INSPECTIONLOTVALUEHELP
description: Inspectionlotvaluehelp
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - value-help
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTVALUEHELP

**Inspectionlotvaluehelp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `hidden: true }` | `hidden: true }` |
| `_insplots.IsBusinessPurposeCompleted` | *Association* |
| `I_InspectionOperation.InspectionOperationPlant` | `I_InspectionOperation.InspectionOperationPlant` |
| `I_InspectionOperation.OperationControlProfile` | `I_InspectionOperation.OperationControlProfile` |
| `I_InspectionOperation.OperationText` | `I_InspectionOperation.OperationText` |
| `I_InspectionOperation._WorkCenter.WorkCenter` | `I_InspectionOperation._WorkCenter.WorkCenter` |
| `I_InspectionOperation.OperationConfirmation` | `I_InspectionOperation.OperationConfirmation` |
| `I_InspectionOperation.InspectionSubSystem` | `I_InspectionOperation.InspectionSubSystem` |
| `I_InspectionCharacteristic.InspectionSpecification` | `I_InspectionCharacteristic.InspectionSpecification` |
| `I_InspectionCharacteristic.InspectionSpecificationText` | `I_InspectionCharacteristic.InspectionSpecificationText` |
| `I_InspectionCharacteristic.InspectorQualification` | `I_InspectionCharacteristic.InspectorQualification` |
| `I_InspectionCharacteristic.InspSpecInformationField1` | `I_InspectionCharacteristic.InspSpecInformationField1` |
| `I_InspectionCharacteristic.InspSpecInformationField2` | `I_InspectionCharacteristic.InspSpecInformationField2` |
| `I_InspectionCharacteristic.InspSpecInformationField3` | `I_InspectionCharacteristic.InspSpecInformationField3` |
| `I_InspectionCharacteristic.InspSpecImportanceCode` | `I_InspectionCharacteristic.InspSpecImportanceCode` |
| `I_InspectionCharacteristic.InspectionMethod` | `I_InspectionCharacteristic.InspectionMethod` |
| `I_InspectionCharacteristic.InspectionMethodPlant` | `I_InspectionCharacteristic.InspectionMethodPlant` |
| `I_InspectionCharacteristic.InspectionSpecificationPlant` | `I_InspectionCharacteristic.InspectionSpecificationPlant` |
| `I_InspectionCharacteristic.InspectionCharacteristicStatus` | `I_InspectionCharacteristic.InspectionCharacteristicStatus` |
| `I_InspectionSubset.InspectionSubsetSortKey` | `I_InspectionSubset.InspectionSubsetSortKey` |
| `I_InspectionSubset.Equipment` | `I_InspectionSubset.Equipment` |
| `I_InspectionSubset.FunctionalLocation` | `I_InspectionSubset.FunctionalLocation` |
| `I_InspectionSubset.InspSubsetUsageDcsnValuation` | `I_InspectionSubset.InspSubsetUsageDcsnValuation` |
| `I_InspectionSubset.InspectionSubsetLongCharKey` | `I_InspectionSubset.InspectionSubsetLongCharKey` |
| `I_InspectionSubset.InspectionSubsetShortCharKey` | `I_InspectionSubset.InspectionSubsetShortCharKey` |
| `I_InspectionSubset.InspSubsetLongNumericKey` | `I_InspectionSubset.InspSubsetLongNumericKey` |
| `I_InspectionSubset.InspSubsetShortNumericKey` | `I_InspectionSubset.InspSubsetShortNumericKey` |
| `abap.char( 8 ))` | `cast(I_InspectionSubset.InspectionSubsetDate` |
| `abap.char( 6 ))` | `cast(I_InspectionSubset.InspectionSubsetTime` |
| `I_InspectionSubset.MaterialSample` | `I_InspectionSubset.MaterialSample` |
| `I_InspectionSubset.InspSubsetUsageDcsnCodeGroup` | `I_InspectionSubset.InspSubsetUsageDcsnCodeGroup` |
| `I_InspectionSubset.InspSubsetUsageDcsnCode` | `I_InspectionSubset.InspSubsetUsageDcsnCode` |
| `I_MaterialSample.MaterialSampleType` | `I_MaterialSample.MaterialSampleType` |
| `I_MaterialSample.MaterialSampleCategory` | `I_MaterialSample.MaterialSampleCategory` |
| `I_MaterialSample.StorageLocation` | `I_MaterialSample.StorageLocation` |
| `I_MaterialSample.MaterialSampleStorageLocation` | `I_MaterialSample.MaterialSampleStorageLocation` |
| `abap.char( 8 ))` | `cast(I_MaterialSample.MaterialSampleChangedOn` |
| `I_MaterialSample.MaterialSampleDrawingLocation` | `I_MaterialSample.MaterialSampleDrawingLocation` |
| `I_MaterialSample.MatlSmplDrawingLocDescription` | `I_MaterialSample.MatlSmplDrawingLocDescription` |
| `abap.char( 8 ))` | `cast(I_MaterialSample.MaterialSampleDrawingOnDate` |
| `abap.char( 6 ))` | `cast(I_MaterialSample.MaterialSampleDrawingOnTime` |
| `I_MaterialSample.MaterialSampleResponsibleName` | `I_MaterialSample.MaterialSampleResponsibleName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTVALHLP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot'
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #C 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotValueHelp
  as select from   I_InspectionLot _insplots
    inner join     I_InspectionOperation      on _insplots.OrderInternalBillOfOperations = I_InspectionOperation.OrderInternalBillOfOperations
    inner join     I_InspectionCharacteristic on  _insplots.InspectionLot                           = I_InspectionCharacteristic.InspectionLot
                                              and I_InspectionOperation.InspPlanOperationInternalID = I_InspectionCharacteristic.InspPlanOperationInternalID
    left outer join(
                   I_InspectionSubset
        inner join I_MaterialSample           on I_MaterialSample.MaterialSample = I_InspectionSubset.MaterialSample
    )
    on _insplots.InspectionLot = I_InspectionSubset.InspectionLot
{
      key _insplots.InspectionLot,
      key I_InspectionOperation.InspectionOperation,
      key I_InspectionCharacteristic.InspectionCharacteristic,

      //Inspection lot filters
      _insplots.Material,
      _insplots.Batch,
      _insplots.Plant,
      _insplots.InspectionLotOrigin,
      _insplots.ManufacturingOrder,
      _insplots.InspectionLotText,
      _insplots.InspectionLotType,
      @Semantics.quantity.unitOfMeasure: 'InspectionLotQuantityUnit'      
      _insplots.InspectionLotQuantity,
      @Semantics.unitOfMeasure: true
      _insplots.InspectionLotQuantityUnit,
      cast(_insplots.InspLotCreatedOnLocalDate as abap.char( 8 ))          as InspLotCreatedOnLocalDate,
      _insplots._Material._Text[1:Language=$session.system_language].MaterialName,
      _insplots.InspectionLotHasUsageDecision,
      _insplots.InspLotNmbrOpenLongTermCharc,
      _insplots.InspectionLotObjectText,
      _insplots.GoodsReceiptIsMovedToBlkdStock,
      _insplots.InspectionLotHasQuantity,
      _insplots.InspectionLotHasPartialLots,
      _insplots.InspLotIsDocumentationRequired,
      _insplots.InspectionLotApproval,
      _insplots.InspLotDigitalSgntrInUsgeDcsn,
      _insplots.InspectionLotIsSkipped,
      _insplots.InspectionLotIsFullInspection,
      cast(_insplots.InspLotCreatedOnLocalTime as abap.char( 6 ))          as InspLotCreatedOnLocalTime,
      _insplots.InspectionLotCreatedBy,
      cast(_insplots.InspectionLotCreatedOn as abap.char( 8 ))             as InspectionLotCreatedOn,
      cast(_insplots.InspectionLotCreatedOnTime as abap.char( 6 ))         as InspectionLotCreatedOnTime,
      _insplots.InspectionLotChangedBy,
      cast(_insplots.InspectionLotChangeDate as abap.char( 8 ))            as InspectionLotChangeDate,
      cast(_insplots.InspectionLotChangeTime as abap.char( 6 ))            as InspectionLotChangeTime,
      cast(_insplots.InspectionLotStartDate as abap.char( 8 ))             as InspectionLotStartDate,
      cast(_insplots.InspectionLotStartTime as abap.char( 6 ))             as InspectionLotStartTime,
      cast(_insplots.InspectionLotEndDate as abap.char( 8 ))               as InspectionLotEndDate,
      cast(_insplots.InspectionLotEndTime as abap.char( 6 ))               as InspectionLotEndTime,
      _insplots.BillOfOperationsType,
      _insplots.BillOfOperationsGroup,
      _insplots.BillOfOperationsUsage,
      _insplots.BillOfOperationsVariant,
      _insplots.SmplDrawingProcedure,
      _insplots.SmplDrwgProcedIsConfRequired,
      cast(_insplots.InspLotSelectionValidFromDate as abap.char( 8 ))      as InspLotSelectionValidFromDate,
      _insplots.ProductionVersion,
      _insplots.Customer,
      _insplots.Supplier,
      _insplots.Manufacturer,
      _insplots.ManufacturerPartNmbr,
      _insplots.MaterialRevisionLevel,
      _insplots.MaterialIsBatchManaged,
      _insplots.BatchStorageLocation,
      _insplots.MaterialCompIsSpecialStock,
      _insplots.PurchasingOrganization,
      _insplots.PurchasingDocument,
      _insplots.AccountingDocumentType,
      _insplots.MaterialDocumentYear,
      _insplots.MaterialDocument,
      cast(_insplots.MatlDocLatestPostgDate as abap.char( 8 ))             as MatlDocLatestPostgDate,
      _insplots.GoodsMovementType,
      _insplots.InspectionLotPlant,
      _insplots.InspectionLotStorageLocation,
      _insplots.Warehouse,
      _insplots.StorageType,
      _insplots.StorageBin,
      _insplots.SalesOrder,
      _insplots.DeliveryDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'InspectionDeliveryCategory'
      _insplots.DeliveryCategory,
      _insplots.InspectionDeliveryCategory,
      _insplots.Route,
      _insplots.BillToPartyCountry,
      _insplots.SoldToParty,
      _insplots.SalesOrganization,
      _insplots.MaterialByCustomer,
      _insplots.InspLotNmbrAddlRecordedCharc,
      _insplots.InspLotNmbrOpenShortTermCharc,
      _insplots.InspectionDynamicStage,
      _insplots.InspectionSeverity,
      _insplots.QualityCostCollector,
      _insplots.CostCenter,
      _insplots.SalesOrdStockWBSElement,
      _insplots.ProfitCenter,
      _insplots.BusinessArea,
      _insplots.GLAccount,
      _insplots.ControllingArea,
      _insplots.CompanyCode,
      _insplots.SerialNumberProfile,
      _insplots.NumberOfSerialNumbers,
      _insplots.InspLotIsSerialNmbrPossible,
      _insplots.BatchBySupplier,
      _insplots.InspLotIsAutomUsgeDcsnPossible,
      _insplots.InspLotHasConfignSpecification,
      _insplots.InspLotIsTaskListRequired,
      _insplots.InspLotHasManualSampleSize,
      _insplots.InspLotHasMaterialSpec,
      _insplots.InspLotDigitalSgntrResultsRecg,
      _insplots.InspLotIsBatchRequired,
      _insplots.InspLotIsStockPostingCompleted,
      _insplots.MatlQualityAuthorizationGroup,
      @Consumption: { hidden: true }
      _insplots.IsBusinessPurposeCompleted,

      //Operation filters
      I_InspectionOperation.InspectionOperationPlant,
      I_InspectionOperation.OperationControlProfile,
      I_InspectionOperation.OperationText,
      I_InspectionOperation._WorkCenter.WorkCenter,
      I_InspectionOperation.OperationConfirmation,
      I_InspectionOperation.InspectionSubSystem,

      //Charac. specification filters
      I_InspectionCharacteristic.InspectionSpecification,
      I_InspectionCharacteristic.InspectionSpecificationText,
      I_InspectionCharacteristic.InspectorQualification,
      I_InspectionCharacteristic.InspSpecInformationField1,
      I_InspectionCharacteristic.InspSpecInformationField2,
      I_InspectionCharacteristic.InspSpecInformationField3,
      I_InspectionCharacteristic.InspSpecImportanceCode,
      I_InspectionCharacteristic.InspectionMethod,
      I_InspectionCharacteristic.InspectionMethodPlant,
      I_InspectionCharacteristic.InspectionSpecificationPlant,
      I_InspectionCharacteristic.InspectionCharacteristicStatus,

      //Physical sample filters
      I_InspectionSubset.InspectionSubsetSortKey,
      I_InspectionSubset.Equipment,
      I_InspectionSubset.FunctionalLocation,
      I_InspectionSubset.InspSubsetUsageDcsnValuation,
      I_InspectionSubset.InspectionSubsetLongCharKey,
      I_InspectionSubset.InspectionSubsetShortCharKey,
      I_InspectionSubset.InspSubsetLongNumericKey,
      I_InspectionSubset.InspSubsetShortNumericKey,
      cast(I_InspectionSubset.InspectionSubsetDate as abap.char( 8 ))      as InspectionSubsetDate,
      cast(I_InspectionSubset.InspectionSubsetTime as abap.char( 6 ))      as InspectionSubsetTime,
      I_InspectionSubset.MaterialSample,
      I_InspectionSubset.InspSubsetUsageDcsnCodeGroup,
      I_InspectionSubset.InspSubsetUsageDcsnCode,

      //Physical sample filters
      I_MaterialSample.MaterialSampleType,
      I_MaterialSample.MaterialSampleCategory,
      I_MaterialSample.StorageLocation,
      I_MaterialSample.MaterialSampleStorageLocation,
      cast(I_MaterialSample.MaterialSampleChangedOn as abap.char( 8 ))     as MaterialSampleChangedOn,
      I_MaterialSample.MaterialSampleDrawingLocation,
      I_MaterialSample.MatlSmplDrawingLocDescription,
      cast(I_MaterialSample.MaterialSampleDrawingOnDate as abap.char( 8 )) as MaterialSampleDrawingOnDate,
      cast(I_MaterialSample.MaterialSampleDrawingOnTime as abap.char( 6 )) as MaterialSampleDrawingOnTime,
      I_MaterialSample.MaterialSampleResponsibleName
}
```
