---
name: I_DSD_SETTLEMENTQUANTITYDIFF
description: Dsd Settlementquantitydiff
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLEMENTQUANTITYDIFF

**Dsd Settlementquantitydiff**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `unitOfMeasure: 'UnitOfMeasure' } }` | `unitOfMeasure: 'UnitOfMeasure' } }` |
| `SettlmtCheckOutCheckInQuantity` | `quan_final` |
| `FinalDifferenceWithinTolerance` | `final_diff_eval` |
| `SettlementToleranceGroup` | `tolgrp_id` |
| `_Plant` | *Association* |
| `_Product` | *Association* |
| `_Batch` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Currency` | *Association* |
| `_ControlParameter` | *Association* |
| `_ToleranceGroup` | *Association* |
| `_CheckOutEvaluation` | *Association* |
| `_CheckInEvaluation` | *Association* |
| `_ConfirmationEvaluation` | *Association* |
| `_FinalEvaluation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CheckOutEvaluation` | `I_DSD_DifferenceEvaluation` | [0..1] |
| `_CheckInEvaluation` | `I_DSD_DifferenceEvaluation` | [0..1] |
| `_ConfirmationEvaluation` | `I_DSD_DifferenceEvaluation` | [0..1] |
| `_FinalEvaluation` | `I_DSD_DifferenceEvaluation` | [0..1] |
| `_ControlParameter` | `I_DSD_TourControlParameter` | [0..1] |
| `_ToleranceGroup` | `I_DSD_SettlementToleranceGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Quantity Differences'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementQuantityDiff
  as select from /dsd/sl_sld_qbal as _QuantityDifferences

  association [0..1] to I_Plant                        as _Plant                  on  $projection.Plant    = _Plant.Plant
  association [0..1] to I_Product                      as _Product                on  $projection.Material = _Product.Product
  association [0..1] to I_Batch                        as _Batch                  on  $projection.Plant    = _Batch.Plant
                                                                                  and $projection.Material = _Batch.Material
                                                                                  and $projection.Batch    = _Batch.Batch

  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure          on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_Currency                     as _Currency               on  $projection.Currency      = _Currency.Currency

  association [0..1] to I_DSD_DifferenceEvaluation     as _CheckOutEvaluation     on  $projection.CheckOutDiffWithinTolerance    = _CheckOutEvaluation.DifferenceEvaluation
  association [0..1] to I_DSD_DifferenceEvaluation     as _CheckInEvaluation      on  $projection.CheckInDiffWithinTolerance     = _CheckInEvaluation.DifferenceEvaluation
  association [0..1] to I_DSD_DifferenceEvaluation     as _ConfirmationEvaluation on  $projection.LoadgConfDiffWithinTolerance   = _ConfirmationEvaluation.DifferenceEvaluation
  association [0..1] to I_DSD_DifferenceEvaluation     as _FinalEvaluation        on  $projection.FinalDifferenceWithinTolerance = _FinalEvaluation.DifferenceEvaluation

  association [0..1] to I_DSD_TourControlParameter     as _ControlParameter       on  $projection.CtrlParamForQuantityDifference = _ControlParameter.CtrlParamForQuantityDifference
  association [0..1] to I_DSD_SettlementToleranceGroup as _ToleranceGroup         on  $projection.SettlementToleranceGroup       = _ToleranceGroup.SettlementToleranceGroup
{

  key sld_doc_id       as DSD_SettlementDocument,
  key matnr            as Material,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_planned     as TargetQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_checkout    as SettlementCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_diff        as SettlmtCheckOutDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_delivered   as SettlementDeliveryQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_return      as SettlementReturnedQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_checkin     as SettlementCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_final_diff  as SettlementFinalDiffQuantity,
      uom_for_quan     as UnitOfMeasure,
      @Semantics: { amount: { currencyCode: 'Currency' } }
      value_fin_diff   as QuantityDifferenceAmount,
      currency_fin_dif as Currency,
      plant            as Plant,
      charg            as Batch,
      bwtar            as ValuationType,
      spec_return      as CtrlParamForQuantityDifference,
      co_diff_eval     as CheckOutDiffWithinTolerance,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_checkin_pln as SettlmtPlannedCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_checkin_dif as SettlementCheckInDiffQuantity,
      ci_diff_eval     as CheckInDiffWithinTolerance,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_lc_init     as SettlementLoadingConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_lc_init_dif as SettlmtLoadgConfDiffQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_plan    as SettlmtPlannedReloadQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_ci      as SettlmtReloadCheckInQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_lc      as SettlmtRldLoadingConfQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_lc_diff as SettlmtRldLoadgConfDiffQty,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_co      as SettlmtReloadCheckOutQuantity,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_rld_co_diff as SettlmtRldCheckOutDiffQuantity,
      lc_diff_eval     as LoadgConfDiffWithinTolerance,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_final_plan  as SettlmtPlndCheckOutCheckInQty,
      @Semantics:{ quantity: { unitOfMeasure: 'UnitOfMeasure' } }
      quan_final       as SettlmtCheckOutCheckInQuantity,
      final_diff_eval  as FinalDifferenceWithinTolerance,
      tolgrp_id        as SettlementToleranceGroup,

      _Plant,
      _Product,
      _Batch,
      _UnitOfMeasure,
      _Currency,
      _ControlParameter,
      _ToleranceGroup,
      _CheckOutEvaluation,
      _CheckInEvaluation,
      _ConfirmationEvaluation,
      _FinalEvaluation
      
}
```
