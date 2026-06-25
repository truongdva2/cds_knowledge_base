---
name: I_INVOICELISTPRCGELMNT
description: Invoicelistprcgelmnt
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTPRCGELMNT

**Invoicelistprcgelmnt**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]` | `name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]` |
| `vbeln_rl preserving type)` | `cast(PricingElement.BillingDocument` |
| `key PricingElement.PricingProcedureStep` | `PricingElement.PricingProcedureStep` |
| `key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter` | `PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter` |
| `PricingElement.ConditionApplication, // required for foreign key association of condition type` | `PricingElement.ConditionApplication, // required for foreign key association of condition type` |
| `PricingElement.ConditionType` | `PricingElement.ConditionType` |
| `PricingElement.PriceConditionDeterminationDte` | `PricingElement.PriceConditionDeterminationDte` |
| `PricingElement.ConditionCalculationType` | `PricingElement.ConditionCalculationType` |
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
| `PricingElement.ConditionScaleBasisUnit` | `PricingElement.ConditionScaleBasisUnit` |
| `PricingElement.ConditionScaleBasisCurrency` | `PricingElement.ConditionScaleBasisCurrency` |
| `PricingElement.CndnIsRelevantForIntcoBilling` | `PricingElement.CndnIsRelevantForIntcoBilling` |
| `PricingElement.ConditionIsManuallyChanged` | `PricingElement.ConditionIsManuallyChanged` |
| `PricingElement.ConditionIsForConfiguration` | `PricingElement.ConditionIsForConfiguration` |
| `PricingElement.VariantCondition` | `PricingElement.VariantCondition` |
| `PricingElement.ConditionRateAmount` | `PricingElement.ConditionRateAmount` |
| `PricingElement.ConditionBaseAmount` | `PricingElement.ConditionBaseAmount` |
| `PricingElement.ConditionBaseQuantity` | `PricingElement.ConditionBaseQuantity` |
| `PricingElement.ConditionRateRatio` | `PricingElement.ConditionRateRatio` |
| `PricingElement.ConditionRateRatioUnit` | `PricingElement.ConditionRateRatioUnit` |
| `PricingElement.ConditionScaleBaseAmount` | `PricingElement.ConditionScaleBaseAmount` |
| `PricingElement.ConditionScaleBaseQuantity` | `PricingElement.ConditionScaleBaseQuantity` |
| `_InvoiceList` | *Association* |
| `PricingElement._ConditionApplication` | `PricingElement._ConditionApplication` |
| `PricingElement._PricingConditionType, // naming could be better: _ConditionType` | `PricingElement._PricingConditionType, // naming could be better: _ConditionType` |
| `PricingElement._ConditionCurrency` | `PricingElement._ConditionCurrency` |
| `PricingElement._Currency, // naming could be better: _TransactionCurrency` | `PricingElement._Currency, // naming could be better: _TransactionCurrency` |
| `PricingElement._ConditionQuantityUnit` | `PricingElement._ConditionQuantityUnit` |
| `PricingElement._ScaleUnitOfMeasure, // naming could be better: _ConditionScaleBasisUnit` | `PricingElement._ScaleUnitOfMeasure, // naming could be better: _ConditionScaleBasisUnit` |
| `PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency` | `PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency` |
| `PricingElement._VariantCondition` | `PricingElement._VariantCondition` |
| `/* start suppress warning calculated_field_check */` | `/* start suppress warning calculated_field_check */` |
| `PricingElement._ConditionCalculationType` | `PricingElement._ConditionCalculationType` |
| `PricingElement._ConditionCategory` | `PricingElement._ConditionCategory` |
| `PricingElement._ConditionOrigin` | `PricingElement._ConditionOrigin` |
| `PricingElement._ConditionControl` | `PricingElement._ConditionControl` |
| `PricingElement._ConditionInactiveReason` | `PricingElement._ConditionInactiveReason` |
| `PricingElement._ConditionClass` | `PricingElement._ConditionClass` |
| `PricingElement._PricingScaleBasis` | `PricingElement._PricingScaleBasis` |
| `PricingElement._StructureCondition` | `PricingElement._StructureCondition` |
| `/* end suppress warning calculated_field_check */` | `/* end suppress warning calculated_field_check */` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Invoice List Pricing Element'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'InvoiceListPricingElement'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.viewType: #BASIC

define view entity I_InvoiceListPrcgElmnt
  as select from I_BillingDocPrcgElmntBasic as PricingElement

  association [1..1] to I_InvoiceList as _InvoiceList on $projection.InvoiceList = _InvoiceList.InvoiceList

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
      @ObjectModel.foreignKey.association: '_InvoiceList'
  key cast(PricingElement.BillingDocument as vbeln_rl preserving type) as InvoiceList,

  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter

      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type

      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,

      PricingElement.PriceConditionDeterminationDte,

      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      PricingElement.ConditionCalculationType,

      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,

      @DefaultAggregation: #NONE
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

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,

      @DefaultAggregation: #NONE
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

      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      PricingElement.ConditionScaleBasisUnit,

      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      PricingElement.ConditionScaleBasisCurrency,

      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      PricingElement.ConditionRateAmount,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionBaseAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,

      PricingElement.ConditionRateRatioUnit,

      @OData.v2.amount.noDecimalShift: true
      @Semantics.amount.currencyCode: 'ConditionScaleBasisCurrency'
      PricingElement.ConditionScaleBaseAmount,

      @Semantics.quantity.unitOfMeasure: 'ConditionScaleBasisUnit'
      PricingElement.ConditionScaleBaseQuantity,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _InvoiceList,

      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: _ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,

      /* start suppress warning calculated_field_check */
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._StructureCondition
      /* end suppress warning calculated_field_check */
}

where _InvoiceList.SDDocumentCategory = '3'
   or _InvoiceList.SDDocumentCategory = '4'
```
