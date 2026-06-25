---
name: I_INSPPLANOPCHARCVERSION_2
description: Inspplanopcharcversion 2
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
# I_INSPPLANOPCHARCVERSION_2

**Inspplanopcharcversion 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InspectionPlanGroup` | `_BOOCharacteristicVersion.BillOfOperationsGroup` |
| `key          _BOOCharacteristicVersion.BOOOperationInternalID` | `_BOOCharacteristicVersion.BOOOperationInternalID` |
| `key          _BOOCharacteristicVersion.BOOCharacteristic` | `_BOOCharacteristicVersion.BOOCharacteristic` |
| `key          _BOOCharacteristicVersion.BOOCharacteristicVersion, // MIC vs Char` | `_BOOCharacteristicVersion.BOOCharacteristicVersion, // MIC vs Char` |
| `key          _InspPlanOpAssgmt.InspectionPlan` | `_InspPlanOpAssgmt.InspectionPlan` |
| `key          _BOOCharacteristicVersion.BillOfOperationsType` | `_BOOCharacteristicVersion.BillOfOperationsType` |
| `_BOOCharacteristicVersion.ValidityStartDate` | *Association* |
| `_BOOCharacteristicVersion.ValidityEndDate` | *Association* |
| `_BOOCharacteristicVersion.ChangeNumber` | *Association* |
| `_BOOCharacteristicVersion.IsDeleted` | *Association* |
| `_BOOCharacteristicVersion.BOOOperationPRTInternalID` | *Association* |
| `_BOOCharacteristicVersion.InspectionMethod` | *Association* |
| `_BOOCharacteristicVersion.InspectionMethodVersion` | *Association* |
| `_BOOCharacteristicVersion.InspectionMethodPlant` | *Association* |
| `_BOOCharacteristicVersion.InspSpecImportanceCode` | *Association* |
| `_BOOCharacteristicVersion.InspectorQualification` | *Association* |
| `_BOOCharacteristicVersion.InspectionSpecification` | *Association* |
| `_BOOCharacteristicVersion.InspectionSpecificationVersion` | *Association* |
| `_BOOCharacteristicVersion.InspectionSpecificationPlant` | *Association* |
| `_BOOCharacteristicVersion.BOOCharcHasInspSpecReference` | *Association* |
| `_BOOCharacteristicVersion.InspSpecControlIndicators` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsQuantitative` | *Association* |
| `_BOOCharacteristicVersion.InspSpecCharacteristicType` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsMeasuredValueRqd` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsSelectedSetRequired` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsUpperLimitRequired` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsLowerLimitRequired` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsTargetValueInLimit` | *Association* |
| `_BOOCharacteristicVersion.InspectionScope` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsLongTermInspection` | *Association* |
| `_BOOCharacteristicVersion.InspSpecRecordingType` | *Association* |
| `_BOOCharacteristicVersion.InspResultIsDocumentationRqd` | *Association* |
| `_BOOCharacteristicVersion.InspSpecCharcCategory` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsSampleQtyAdditive` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsDestructive` | *Association* |
| `_BOOCharacteristicVersion.InspSpecResultCalculation` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsSamplingProcedRqd` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsScrapRelevant` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasFixedCtrlIndicators` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsDefectRecordingRqd` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsTestEquipmentRqd` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsDefectsRecgAutomatic` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsChgDocRequired` | *Association* |
| `_BOOCharacteristicVersion.InspSpecIsControlChartUsed` | *Association* |
| `_BOOCharacteristicVersion.InspSpecPrintControl` | *Association* |
| `_BOOCharacteristicVersion.InspToleranceSpecification` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDecimalPlaces` | *Association* |
| `_BOOCharacteristicVersion.InspectionSpecificationUnit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecTargetValue` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasTargetValue` | *Association* |
| `_BOOCharacteristicVersion.InspSpecUpperLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecLowerLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasLowerLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasUpperLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecInputProcedure` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasFormula` | *Association* |
| `_BOOCharacteristicVersion.InspSpecFormula1` | *Association* |
| `_BOOCharacteristicVersion.InspSpecFormula2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecNumberOfClasses` | *Association* |
| `_BOOCharacteristicVersion.InspSpecClassWidthQty` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasClassWidth` | *Association* |
| `_BOOCharacteristicVersion.InspSpecClassMidpointQty` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasClassMidpoint` | *Association* |
| `_BOOCharacteristicVersion.InspSpecFirstUpperSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasFirstUpperSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecFirstLowerSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasFirstLowerSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecSecondUpperSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasSecondUprSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecSecondLowerSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecHasSecondLowrSpecLimit` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeGrpRejection` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeRejection` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnUpper` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeRjcnUpper` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnLower` | *Association* |
| `_BOOCharacteristicVersion.InspSpecDefectCodeRjcnLower` | *Association* |
| `_BOOCharacteristicVersion.SelectedCodeSet` | *Association* |
| `_BOOCharacteristicVersion.SelectedCodeSetPlant` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCatalog2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalSelectedSet2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCodeGroup2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCatalog3` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalSelectedSet3` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCodeGroup3` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant3` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCatalog4` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalSelectedSet4` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCodeGroup4` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant4` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCatalog5` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalSelectedSet5` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAdditionalCodeGroup5` | *Association* |
| `_BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant5` | *Association* |
| `_BOOCharacteristicVersion.SamplingProcedure` | *Association* |
| `_BOOCharacteristicVersion.InspCharacteristicSampleUnit` | *Association* |
| `_BOOCharacteristicVersion.BOOCharcSampleQuantity` | *Association* |
| `_BOOCharacteristicVersion.QltyCtrlChartAggrgnCriterion` | *Association* |
| `_BOOCharacteristicVersion.InspSpecInformationField1` | *Association* |
| `_BOOCharacteristicVersion.InspSpecInformationField2` | *Association* |
| `_BOOCharacteristicVersion.InspSpecInformationField3` | *Association* |
| `_BOOCharacteristicVersion.InspectionSpecificationText` | *Association* |
| `_BOOCharacteristicVersion.InspLotDynamicRule` | *Association* |
| `_BOOCharacteristicVersion.InspCharcDynModifRef` | *Association* |
| `_BOOCharacteristicVersion.MatlIsConsideredForDynModif` | *Association* |
| `_BOOCharacteristicVersion.SuplrIsConsideredForDynModif` | *Association* |
| `_BOOCharacteristicVersion.MfrIsConsideredForDynModif` | *Association* |
| `_BOOCharacteristicVersion.CustIsConsideredForDynModif` | *Association* |
| `_BOOCharacteristicVersion.CreatedByUser` | *Association* |
| `_BOOCharacteristicVersion.CreationDate` | *Association* |
| `_BOOCharacteristicVersion.LastChangedByUser` | *Association* |
| `_BOOCharacteristicVersion.LastChangeDate` | *Association* |
| `_BOOCharacteristicVersion.BillOfOperationsVersion` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_InspPlanVersion` | *Association* |
| `_InspPlanOperationVersion` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_InspPlanOperationVersion` | `I_InspPlanOperationVersion_2` | [1..1] |
| `_InspPlanVersion` | `I_InspectionPlanVersion` | [1..1] |
| `_Extension` | `E_BOOCharacteristic` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Version of Insp Plan Characteristic'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

// This CDS is similar to I_InspPlanOpCharcVersion but C1 released
define view entity I_InspPlanOpCharcVersion_2

  as select from I_BOOCharacteristicVersion as _BOOCharacteristicVersion
    inner join   I_InspPlanOpAssgmt         as _InspPlanOpAssgmt on  _BOOCharacteristicVersion.BillOfOperationsGroup  = _InspPlanOpAssgmt.InspectionPlanGroup
                                                                 and _BOOCharacteristicVersion.BOOOperationInternalID = _InspPlanOpAssgmt.BOOOperationInternalID
                                                                 and _BOOCharacteristicVersion.BillOfOperationsType   = _InspPlanOpAssgmt.BillOfOperationsType

  association [1..1] to I_BillOfOperationsType       as _BillOfOperationsType     on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup      as _BillOfOperationsGroup    on  $projection.BillOfOperationsType = _BillOfOperationsGroup.BillOfOperationsType
                                                                                  and $projection.InspectionPlanGroup  = _BillOfOperationsGroup.BillOfOperationsGroup

  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspPlanOperationVersion_2 as _InspPlanOperationVersion on  $projection.InspectionPlanGroup    =  _InspPlanOperationVersion.InspectionPlanGroup
                                                                                  and $projection.BOOOperationInternalID =  _InspPlanOperationVersion.BOOOperationInternalID
                                                                                  and $projection.BillOfOperationsType   =  _InspPlanOperationVersion.BillOfOperationsType
                                                                                  and $projection.ValidityStartDate      >= _InspPlanOperationVersion.ValidityStartDate
                                                                                  and $projection.ValidityStartDate      <= _InspPlanOperationVersion.ValidityEndDate
  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspectionPlanVersion      as _InspPlanVersion          on  $projection.InspectionPlanGroup  =  _InspPlanVersion.InspectionPlanGroup
                                                                                  and $projection.InspectionPlan       =  _InspPlanVersion.InspectionPlan
                                                                                  and $projection.BillOfOperationsType =  _InspPlanVersion.BillOfOperationsType
                                                                                  and $projection.ValidityStartDate    >= _InspPlanVersion.ValidityStartDate
                                                                                  and $projection.ValidityStartDate    <= _InspPlanVersion.ValidityEndDate

  association [1..1] to E_BOOCharacteristic          as _Extension                on  $projection.BillOfOperationsType     = _Extension.BillOfOperationsType
                                                                                  and $projection.InspectionPlanGroup      = _Extension.BillOfOperationsGroup
                                                                                  and $projection.BOOOperationInternalID   = _Extension.BOOOperationInternalID
                                                                                  and $projection.BOOCharacteristic        = _Extension.BOOCharacteristic
                                                                                  and $projection.BOOCharacteristicVersion = _Extension.BOOCharacteristicVersion

{
               @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key          _BOOCharacteristicVersion.BillOfOperationsGroup as InspectionPlanGroup,
  key          _BOOCharacteristicVersion.BOOOperationInternalID,
  key          _BOOCharacteristicVersion.BOOCharacteristic,
  key          _BOOCharacteristicVersion.BOOCharacteristicVersion, // MIC vs Char
  key          _InspPlanOpAssgmt.InspectionPlan,
               @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key          _BOOCharacteristicVersion.BillOfOperationsType,
               // Validity
               _BOOCharacteristicVersion.ValidityStartDate,
               _BOOCharacteristicVersion.ValidityEndDate,
               // General Data
               _BOOCharacteristicVersion.ChangeNumber,
               _BOOCharacteristicVersion.IsDeleted,
               _BOOCharacteristicVersion.BOOOperationPRTInternalID,
               _BOOCharacteristicVersion.InspectionMethod,
               _BOOCharacteristicVersion.InspectionMethodVersion,
               _BOOCharacteristicVersion.InspectionMethodPlant,
               _BOOCharacteristicVersion.InspSpecImportanceCode,
               _BOOCharacteristicVersion.InspectorQualification,
               //    Reference to Inspection Specification Version (Inspection Characteristic Master, table QPMK)
               _BOOCharacteristicVersion.InspectionSpecification,
               _BOOCharacteristicVersion.InspectionSpecificationVersion,
               _BOOCharacteristicVersion.InspectionSpecificationPlant,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.BOOCharcHasInspSpecReference,
               // Control indicators
               _BOOCharacteristicVersion.InspSpecControlIndicators,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsQuantitative,
               _BOOCharacteristicVersion.InspSpecCharacteristicType,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsMeasuredValueRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSelectedSetRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsUpperLimitRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsLowerLimitRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsTargetValueInLimit,
               _BOOCharacteristicVersion.InspectionScope,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsLongTermInspection,
               _BOOCharacteristicVersion.InspSpecRecordingType,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspResultIsDocumentationRqd,
               _BOOCharacteristicVersion.InspSpecCharcCategory,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSampleQtyAdditive,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDestructive,
               _BOOCharacteristicVersion.InspSpecResultCalculation,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsSamplingProcedRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsScrapRelevant,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFixedCtrlIndicators,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDefectRecordingRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsTestEquipmentRqd,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsDefectsRecgAutomatic,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsChgDocRequired,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecIsControlChartUsed,
               _BOOCharacteristicVersion.InspSpecPrintControl,
               // Quantitative Data/ Tolerances
               _BOOCharacteristicVersion.InspToleranceSpecification,
               _BOOCharacteristicVersion.InspSpecDecimalPlaces,
               _BOOCharacteristicVersion.InspectionSpecificationUnit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecTargetValue,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasTargetValue,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecUpperLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecLowerLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasLowerLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasUpperLimit,
               _BOOCharacteristicVersion.InspSpecInputProcedure,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFormula,
               _BOOCharacteristicVersion.InspSpecFormula1,
               _BOOCharacteristicVersion.InspSpecFormula2,
               _BOOCharacteristicVersion.InspSpecNumberOfClasses,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecClassWidthQty,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasClassWidth,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecClassMidpointQty,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasClassMidpoint,

               // Additional pair of Limits
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecFirstUpperSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFirstUpperSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecFirstLowerSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasFirstLowerSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecSecondUpperSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasSecondUprSpecLimit,
               @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
               _BOOCharacteristicVersion.InspSpecSecondLowerSpecLimit,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.InspSpecHasSecondLowrSpecLimit,
               //  Catalogs
               // Defect codes for rejection
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRejection,
               _BOOCharacteristicVersion.InspSpecDefectCodeRejection,
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnUpper,
               _BOOCharacteristicVersion.InspSpecDefectCodeRjcnUpper,
               _BOOCharacteristicVersion.InspSpecDefectCodeGrpRjcnLower,
               _BOOCharacteristicVersion.InspSpecDefectCodeRjcnLower,
               // In case of referencing a master inspection characteristic these fields
               // are stored in table QPMZ (I_AssgmtInspMethInspSpec)
               _BOOCharacteristicVersion.SelectedCodeSet,
               _BOOCharacteristicVersion.SelectedCodeSetPlant,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog2,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet2,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup2,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant2,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog3,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet3,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup3,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant3,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog4,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet4,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup4,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant4,
               _BOOCharacteristicVersion.InspSpecAdditionalCatalog5,
               _BOOCharacteristicVersion.InspSpecAdditionalSelectedSet5,
               _BOOCharacteristicVersion.InspSpecAdditionalCodeGroup5,
               _BOOCharacteristicVersion.InspSpecAddlSeldCodeSetPlant5,
               // Sample Data
               _BOOCharacteristicVersion.SamplingProcedure,
               _BOOCharacteristicVersion.InspCharacteristicSampleUnit,
               @Semantics.quantity.unitOfMeasure: 'InspCharacteristicSampleUnit'
               _BOOCharacteristicVersion.BOOCharcSampleQuantity,
               _BOOCharacteristicVersion.QltyCtrlChartAggrgnCriterion,
               // Additional Data
               _BOOCharacteristicVersion.InspSpecInformationField1,
               _BOOCharacteristicVersion.InspSpecInformationField2,
               _BOOCharacteristicVersion.InspSpecInformationField3,
               // Texts
               _BOOCharacteristicVersion.InspectionSpecificationText,
               _BOOCharacteristicVersion.InspLotDynamicRule,
               _BOOCharacteristicVersion.InspCharcDynModifRef,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.MatlIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.SuplrIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.MfrIsConsideredForDynModif,
               @Semantics.booleanIndicator: true
               _BOOCharacteristicVersion.CustIsConsideredForDynModif,
               // Administrative Data
               _BOOCharacteristicVersion.CreatedByUser,
               _BOOCharacteristicVersion.CreationDate,
               _BOOCharacteristicVersion.LastChangedByUser,
               _BOOCharacteristicVersion.LastChangeDate,
               // Routing Version
               _BOOCharacteristicVersion.BillOfOperationsVersion,

               // --------------------------------------------------------------------------------------------------------
               // Associations
               // --------------------------------------------------------------------------------------------------------
               _BillOfOperationsType,
               _BillOfOperationsGroup,
               _InspPlanVersion,
               _InspPlanOperationVersion
}
where
  _BOOCharacteristicVersion.BillOfOperationsType = 'Q'
```
