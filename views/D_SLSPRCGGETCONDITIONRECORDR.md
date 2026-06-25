---
name: D_SLSPRCGGETCONDITIONRECORDR
description: D SLSPRCGGETCondition RecordR
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_SLSPRCGGETCONDITIONRECORDR

**D SLSPRCGGETCondition RecordR**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionRecord              : knumh;` | `ConditionRecord              : knumh;` |
| `ConditionSequentialNumber    : kopos;` | `ConditionSequentialNumber    : kopos;` |
| `ConditionTable               : kotabnr_char;` | `ConditionTable               : kotabnr_char;` |
| `ConditionApplication         : kappl;` | `ConditionApplication         : kappl;` |
| `ConditionType                : kschl;` | `ConditionType                : kschl;` |
| `ConditionValidityEndDate     : datbi;` | `ConditionValidityEndDate     : datbi;` |
| `ConditionValidityStartDate   : datab;` | `ConditionValidityStartDate   : datab;` |
| `CreatedByUser                : ernam;` | `CreatedByUser                : ernam;` |
| `CreationDate                 : erdat;` | `CreationDate                 : erdat;` |
| `ConditionTextID              : knumt;` | `ConditionTextID              : knumt;` |
| `PricingScaleType             : stfkz;` | `PricingScaleType             : stfkz;` |
| `PricingScaleBasis            : kzbzg;` | `PricingScaleBasis            : kzbzg;` |
| `ConditionScaleQuantity       : kstbm;` | `ConditionScaleQuantity       : kstbm;` |
| `ConditionScaleQuantityUnit   : konms;` | `ConditionScaleQuantityUnit   : konms;` |
| `ConditionScaleAmount         : kstbw;` | `ConditionScaleAmount         : kstbw;` |
| `ConditionScaleAmountCurrency : konws;` | `ConditionScaleAmountCurrency : konws;` |
| `ConditionCalculationType     : krech;` | `ConditionCalculationType     : krech;` |
| `ConditionRateValue           : kbetr_kond;` | `ConditionRateValue           : kbetr_kond;` |
| `ConditionRateValueUnit       : konwa;` | `ConditionRateValueUnit       : konwa;` |
| `ConditionRateRatio           : vfprc_element_ratio;` | `ConditionRateRatio           : vfprc_element_ratio;` |
| `ConditionRateRatioUnit       : msehiunit;` | `ConditionRateRatioUnit       : msehiunit;` |
| `ConditionRateAmount          : vfprc_element_amount;` | `ConditionRateAmount          : vfprc_element_amount;` |
| `ConditionCurrency            : konwa;` | `ConditionCurrency            : konwa;` |
| `ConditionQuantity            : kpein;` | `ConditionQuantity            : kpein;` |
| `ConditionQuantityUnit        : kmein;` | `ConditionQuantityUnit        : kmein;` |
| `ConditionToBaseQtyNmrtr      : kumza;` | `ConditionToBaseQtyNmrtr      : kumza;` |
| `ConditionToBaseQtyDnmntr     : kumne;` | `ConditionToBaseQtyDnmntr     : kumne;` |
| `BaseUnit                     : meins;` | `BaseUnit                     : meins;` |
| `ConditionLowerLimit          : mxwrt;` | `ConditionLowerLimit          : mxwrt;` |
| `ConditionUpperLimit          : gkwrt;` | `ConditionUpperLimit          : gkwrt;` |
| `ConditionLowerLimitAmount    : vfprc_element_amount;` | `ConditionLowerLimitAmount    : vfprc_element_amount;` |
| `ConditionLowerLimitRatio     : vfprc_element_ratio;` | `ConditionLowerLimitRatio     : vfprc_element_ratio;` |
| `ConditionUpperLimitAmount    : vfprc_element_amount;` | `ConditionUpperLimitAmount    : vfprc_element_amount;` |
| `ConditionUpperLimitRatio     : vfprc_element_ratio;` | `ConditionUpperLimitRatio     : vfprc_element_ratio;` |
| `ConditionAlternativeCurrency : kwaeh;` | `ConditionAlternativeCurrency : kwaeh;` |
| `ConditionExclusion           : kznep;` | `ConditionExclusion           : kznep;` |
| `ConditionIsDeleted           : loevm_ko;` | `ConditionIsDeleted           : loevm_ko;` |
| `AdditionalValueDays          : valtg;` | `AdditionalValueDays          : valtg;` |
| `FixedValueDate               : valdt;` | `FixedValueDate               : valdt;` |
| `PaymentTerms                 : dzterm;` | `PaymentTerms                 : dzterm;` |
| `CndnMaxNumberOfSalesOrders   : anzauf;` | `CndnMaxNumberOfSalesOrders   : anzauf;` |
| `MinimumConditionBasisValue   : mikbas;` | `MinimumConditionBasisValue   : mikbas;` |
| `MaximumConditionBasisValue   : mxkbas;` | `MaximumConditionBasisValue   : mxkbas;` |
| `MaximumConditionAmount       : komxwrt;` | `MaximumConditionAmount       : komxwrt;` |
| `IncrementalScale             : klf_stg;` | `IncrementalScale             : klf_stg;` |
| `PricingScaleLine             : klf_kal;` | `PricingScaleLine             : klf_kal;` |
| `SalesPriceApprovalRequest    : priceapprovalrequest;` | `SalesPriceApprovalRequest    : priceapprovalrequest;` |
| `PrevApprovedConditionRecord  : knumh_prev_aprvd;` | `PrevApprovedConditionRecord  : knumh_prev_aprvd;` |
| `LastChangeDateTime           : timestampl;` | `LastChangeDateTime           : timestampl;` |
| `_Validity   : composition [1..*] of D_SlsPrcgCndnRecordValidityR;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Condition Record'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define root abstract entity D_SlsPrcgGetConditionRecordR
{
  ConditionRecord              : knumh;
  ConditionSequentialNumber    : kopos;
  ConditionTable               : kotabnr_char;
  ConditionApplication         : kappl;
  ConditionType                : kschl;
  ConditionValidityEndDate     : datbi;
  ConditionValidityStartDate   : datab;
  CreatedByUser                : ernam;
  CreationDate                 : erdat;
  ConditionTextID              : knumt;
  PricingScaleType             : stfkz;
  PricingScaleBasis            : kzbzg;
  @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
  ConditionScaleQuantity       : kstbm;
  ConditionScaleQuantityUnit   : konms;
  @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
  ConditionScaleAmount         : kstbw;
  ConditionScaleAmountCurrency : konws;
  ConditionCalculationType     : krech;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionRateValue           : kbetr_kond;
  ConditionRateValueUnit       : konwa;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionRateRatio           : vfprc_element_ratio;
  ConditionRateRatioUnit       : msehiunit;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionRateAmount          : vfprc_element_amount;
  ConditionCurrency            : konwa;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity            : kpein;
  ConditionQuantityUnit        : kmein;
  ConditionToBaseQtyNmrtr      : kumza;
  ConditionToBaseQtyDnmntr     : kumne;
  BaseUnit                     : meins;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionLowerLimit          : mxwrt;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionUpperLimit          : gkwrt;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionLowerLimitAmount    : vfprc_element_amount;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionLowerLimitRatio     : vfprc_element_ratio;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionUpperLimitAmount    : vfprc_element_amount;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionUpperLimitRatio     : vfprc_element_ratio;
  ConditionAlternativeCurrency : kwaeh;
  ConditionExclusion           : kznep;
  ConditionIsDeleted           : loevm_ko;
  AdditionalValueDays          : valtg;
  FixedValueDate               : valdt;
  PaymentTerms                 : dzterm;
  CndnMaxNumberOfSalesOrders   : anzauf;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  MinimumConditionBasisValue   : mikbas;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  MaximumConditionBasisValue   : mxkbas;
  @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
  MaximumConditionAmount       : komxwrt;
  IncrementalScale             : klf_stg;
  PricingScaleLine             : klf_kal;
//  ConditionReleaseStatus       : kfrst;
  SalesPriceApprovalRequest    : priceapprovalrequest;
//  ConditionChangeReason        : cndn_chgreason;
  PrevApprovedConditionRecord  : knumh_prev_aprvd;
//  ConditionTaxCode             : mwskz;
//  ConditionWithholdingTaxCode  : wt_withcd;
//  TaxExemptionLicense          : licno;
//  LicenseGrantDate             : licdt;
  @Semantics.systemDateTime.lastChangedAt: true
  LastChangeDateTime           : timestampl;

  _Validity   : composition [1..*] of D_SlsPrcgCndnRecordValidityR;

}
```
