---
name: I_SRVCDOCITEMPRICEELEMENT
description: Srvcdocitempriceelement
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMPRICEELEMENT

**Srvcdocitempriceelement**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key ServiceDocument.ServiceDocument` | `ServiceDocument.ServiceDocument` |
| `crms4_number_int preserving type)` | `cast(PricingElement.PricingDocumentItem` |
| `key PricingElement.PricingProcedureStep` | `PricingElement.PricingProcedureStep` |
| `key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter` | `PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter` |
| `ServiceDocument.ServiceObjectType` | `ServiceDocument.ServiceObjectType` |
| `PricingElement.ConditionApplication, // required for foreign key association of condition type` | `PricingElement.ConditionApplication, // required for foreign key association of condition type` |
| `PricingElement.ConditionType` | `PricingElement.ConditionType` |
| `PricingElement.PriceConditionDeterminationDte` | `PricingElement.PriceConditionDeterminationDte` |
| `PricingElement.ConditionCalculationType` | `PricingElement.ConditionCalculationType` |
| `PricingElement.ConditionBaseValue` | `PricingElement.ConditionBaseValue` |
| `PricingElement.ConditionRateValue` | `PricingElement.ConditionRateValue` |
| `PricingElement.ConditionCurrency` | `PricingElement.ConditionCurrency` |
| `PricingElement.ConditionQuantity` | `PricingElement.ConditionQuantity` |
| `PricingElement.ConditionQuantityUnit` | `PricingElement.ConditionQuantityUnit` |
| `PricingElement.ConditionCategory` | `PricingElement.ConditionCategory` |
| `PricingElement.ConditionIsForStatistics` | `PricingElement.ConditionIsForStatistics` |
| `PricingElement.PricingScaleType` | `PricingElement.PricingScaleType` |
| `PricingElement.IsRelevantForAccrual` | `PricingElement.IsRelevantForAccrual` |
| `PricingElement.CndnIsRelevantForInvoiceList` | `PricingElement.CndnIsRelevantForInvoiceList` |
| `PricingElement.ConditionOrigin` | `PricingElement.ConditionOrigin` |
| `PricingElement.IsGroupCondition` | `PricingElement.IsGroupCondition` |
| `PricingElement.ConditionRecord` | `PricingElement.ConditionRecord` |
| `PricingElement.ConditionSequentialNumber` | `PricingElement.ConditionSequentialNumber` |
| `PricingElement.TaxCode` | `PricingElement.TaxCode` |
| `PricingElement.WithholdingTaxCode` | `PricingElement.WithholdingTaxCode` |
| `PricingElement.CndnRoundingOffDiffAmount` | `PricingElement.CndnRoundingOffDiffAmount` |
| `PricingElement.ConditionAmount` | `PricingElement.ConditionAmount` |
| `PricingElement.TransactionCurrency` | `PricingElement.TransactionCurrency` |
| `PricingElement.ConditionControl` | `PricingElement.ConditionControl` |
| `PricingElement.ConditionInactiveReason` | `PricingElement.ConditionInactiveReason` |
| `PricingElement.ConditionClass` | `PricingElement.ConditionClass` |
| `PricingElement.PrcgProcedureCounterForHeader` | `PricingElement.PrcgProcedureCounterForHeader` |
| `PricingElement.FactorForConditionBasisValue` | `PricingElement.FactorForConditionBasisValue` |
| `PricingElement.StructureCondition` | `PricingElement.StructureCondition` |
| `PricingElement.PeriodFactorForCndnBasisValue` | `PricingElement.PeriodFactorForCndnBasisValue` |
| `PricingElement.PricingScaleBasis` | `PricingElement.PricingScaleBasis` |
| `PricingElement.ConditionScaleBasisValue` | `PricingElement.ConditionScaleBasisValue` |
| `PricingElement.ConditionScaleBasisUnit` | `PricingElement.ConditionScaleBasisUnit` |
| `PricingElement.ConditionScaleBasisCurrency` | `PricingElement.ConditionScaleBasisCurrency` |
| `PricingElement.CndnIsRelevantForIntcoBilling` | `PricingElement.CndnIsRelevantForIntcoBilling` |
| `PricingElement.ConditionIsManuallyChanged` | `PricingElement.ConditionIsManuallyChanged` |
| `PricingElement.ConditionIsForConfiguration` | `PricingElement.ConditionIsForConfiguration` |
| `PricingElement.VariantCondition` | `PricingElement.VariantCondition` |
| `PricingElement.ConditionRateAmount` | `PricingElement.ConditionRateAmount` |
| `PricingElement.ConditionRateRatio` | `PricingElement.ConditionRateRatio` |
| `PricingElement.ConditionRateRatioUnit` | `PricingElement.ConditionRateRatioUnit` |
| `PricingElement.ConditionBaseAmount` | `PricingElement.ConditionBaseAmount` |
| `PricingElement.ConditionBaseQuantity` | `PricingElement.ConditionBaseQuantity` |
| `_ServiceDocument` | *Association* |
| `_ServiceDocumentItem` | *Association* |
| `PricingElement._ConditionApplication` | `PricingElement._ConditionApplication` |
| `PricingElement._PricingConditionType, // naming could be better: _ConditionType` | `PricingElement._PricingConditionType, // naming could be better: _ConditionType` |
| `PricingElement._ConditionCalculationType` | `PricingElement._ConditionCalculationType` |
| `PricingElement._ConditionCurrency` | `PricingElement._ConditionCurrency` |
| `PricingElement._Currency, // naming could be better: _TransactionCurrency` | `PricingElement._Currency, // naming could be better: _TransactionCurrency` |
| `PricingElement._ConditionQuantityUnit` | `PricingElement._ConditionQuantityUnit` |
| `PricingElement._ConditionCategory` | `PricingElement._ConditionCategory` |
| `PricingElement._ConditionOrigin` | `PricingElement._ConditionOrigin` |
| `PricingElement._ConditionControl` | `PricingElement._ConditionControl` |
| `PricingElement._ConditionInactiveReason` | `PricingElement._ConditionInactiveReason` |
| `PricingElement._ConditionClass` | `PricingElement._ConditionClass` |
| `PricingElement._PricingScaleBasis` | `PricingElement._PricingScaleBasis` |
| `PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit` | `PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit` |
| `PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency` | `PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency` |
| `PricingElement._VariantCondition` | `PricingElement._VariantCondition` |
| `PricingElement._StructureCondition` | `PricingElement._StructureCondition` |
| `PricingElement._ConditionRateRatioUnit` | `PricingElement._ConditionRateRatioUnit` |
| `ServiceDocument._ServiceObjType` | `ServiceDocument._ServiceObjType` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Pricing Element'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE, 
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SrvcDocItemPriceElement 
  as select from I_PricingElement   as PricingElement
  inner join     I_ServiceDocument  as ServiceDocument on  PricingElement.PricingDocument        =  ServiceDocument.PricingDocument
                                                       and PricingElement.PricingDocumentItem    != '000000'
      
    association[1..1] to I_ServiceDocument      as _ServiceDocument  on _ServiceDocument.ServiceObjectType = $projection.ServiceObjectType
                                                                    and _ServiceDocument.ServiceDocument   = $projection.ServiceDocument

    association[1..1] to I_ServiceDocumentItem  as _ServiceDocumentItem   on $projection.ServiceObjectType   = _ServiceDocumentItem.ServiceObjectType
                                                                         and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                         and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
{
      @ObjectModel.foreignKey.association: '_ServiceDocument'                                                                                                   
  key ServiceDocument.ServiceDocument,  
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'   
  key cast(PricingElement.PricingDocumentItem as crms4_number_int preserving type) as ServiceDocumentItem,
  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceDocument.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,
      PricingElement.PriceConditionDeterminationDte,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      PricingElement.ConditionCalculationType,
      PricingElement.ConditionBaseValue,
      PricingElement.ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,
      @Aggregation.default: #NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      PricingElement.ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      PricingElement.ConditionCategory,
      PricingElement.ConditionIsForStatistics,
      PricingElement.PricingScaleType,
      PricingElement.IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      PricingElement.CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      PricingElement.ConditionOrigin,
      @Semantics.booleanIndicator: true
      PricingElement.IsGroupCondition,
      PricingElement.ConditionRecord,
      PricingElement.ConditionSequentialNumber,
      PricingElement.TaxCode,
      PricingElement.WithholdingTaxCode,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      PricingElement.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionControl'
      PricingElement.ConditionControl,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      PricingElement.ConditionInactiveReason,
      @ObjectModel.foreignKey.association: '_ConditionClass'
      PricingElement.ConditionClass,
      PricingElement.PrcgProcedureCounterForHeader,
      PricingElement.FactorForConditionBasisValue,
      @ObjectModel.foreignKey.association: '_StructureCondition'
      PricingElement.StructureCondition,
      PricingElement.PeriodFactorForCndnBasisValue,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingElement.PricingScaleBasis,
      PricingElement.ConditionScaleBasisValue,
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      PricingElement.ConditionScaleBasisUnit,
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      PricingElement.ConditionScaleBasisCurrency,
      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition, 
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,
      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      PricingElement.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,

      //Association
      _ServiceDocument,
      _ServiceDocumentItem,
      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,
      PricingElement._StructureCondition,
      PricingElement._ConditionRateRatioUnit,
      ServiceDocument._ServiceObjType
}
```
