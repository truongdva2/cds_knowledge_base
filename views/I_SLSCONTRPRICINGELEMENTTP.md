---
name: I_SLSCONTRPRICINGELEMENTTP
description: Slscontrpricingelementtp
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - pricing
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRPRICINGELEMENTTP

**Slscontrpricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesContractPrcgElmnt.SalesContract` | `SalesContractPrcgElmnt.SalesContract` |
| `key SalesContractPrcgElmnt.PricingProcedureStep` | `SalesContractPrcgElmnt.PricingProcedureStep` |
| `key SalesContractPrcgElmnt.PricingProcedureCounter` | `SalesContractPrcgElmnt.PricingProcedureCounter` |
| `SalesContractPrcgElmnt.ConditionApplication` | `SalesContractPrcgElmnt.ConditionApplication` |
| `SalesContractPrcgElmnt.ConditionType` | `SalesContractPrcgElmnt.ConditionType` |
| `SalesContractPrcgElmnt.ConditionCalculationType` | `SalesContractPrcgElmnt.ConditionCalculationType` |
| `SalesContractPrcgElmnt.ConditionRateAmount` | `SalesContractPrcgElmnt.ConditionRateAmount` |
| `SalesContractPrcgElmnt.ConditionCurrency` | `SalesContractPrcgElmnt.ConditionCurrency` |
| `SalesContractPrcgElmnt.ConditionRateRatio` | `SalesContractPrcgElmnt.ConditionRateRatio` |
| `SalesContractPrcgElmnt.ConditionRateRatioUnit` | `SalesContractPrcgElmnt.ConditionRateRatioUnit` |
| `SalesContractPrcgElmnt.ConditionBaseAmount` | `SalesContractPrcgElmnt.ConditionBaseAmount` |
| `SalesContractPrcgElmnt.ConditionAmount` | `SalesContractPrcgElmnt.ConditionAmount` |
| `SalesContractPrcgElmnt.TransactionCurrency` | `SalesContractPrcgElmnt.TransactionCurrency` |
| `SalesContractPrcgElmnt.ConditionBaseQuantity` | `SalesContractPrcgElmnt.ConditionBaseQuantity` |
| `SalesContractPrcgElmnt.ConditionQuantity` | `SalesContractPrcgElmnt.ConditionQuantity` |
| `SalesContractPrcgElmnt.ConditionQuantityUnit` | `SalesContractPrcgElmnt.ConditionQuantityUnit` |
| `SalesContractPrcgElmnt.ConditionIsForStatistics` | `SalesContractPrcgElmnt.ConditionIsForStatistics` |
| `SalesContractPrcgElmnt.ConditionIsManuallyChanged` | `SalesContractPrcgElmnt.ConditionIsManuallyChanged` |
| `SalesContractPrcgElmnt.ConditionInactiveReason` | `SalesContractPrcgElmnt.ConditionInactiveReason` |
| `SalesContractPrcgElmnt.SalesContractType` | `SalesContractPrcgElmnt.SalesContractType` |
| `SalesContractPrcgElmnt.SalesOrganization` | `SalesContractPrcgElmnt.SalesOrganization` |
| `SalesContractPrcgElmnt.DistributionChannel` | `SalesContractPrcgElmnt.DistributionChannel` |
| `SalesContractPrcgElmnt.OrganizationDivision` | `SalesContractPrcgElmnt.OrganizationDivision` |
| `_SalesContract : redirected to parent I_SalesContractTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Contract Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesContract', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsContrPricingElementTP
  as projection on R_SlsContrPricingElementTP as SalesContractPrcgElmnt
{
  key SalesContractPrcgElmnt.SalesContract,
  key SalesContractPrcgElmnt.PricingProcedureStep,
  key SalesContractPrcgElmnt.PricingProcedureCounter,

      SalesContractPrcgElmnt.ConditionApplication,
      SalesContractPrcgElmnt.ConditionType,
      SalesContractPrcgElmnt.ConditionCalculationType,

      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SalesContractPrcgElmnt.ConditionRateAmount,
      SalesContractPrcgElmnt.ConditionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      SalesContractPrcgElmnt.ConditionRateRatio,
      SalesContractPrcgElmnt.ConditionRateRatioUnit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      SalesContractPrcgElmnt.ConditionBaseAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesContractPrcgElmnt.ConditionAmount,
      SalesContractPrcgElmnt.TransactionCurrency,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SalesContractPrcgElmnt.ConditionBaseQuantity,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      SalesContractPrcgElmnt.ConditionQuantity,
      SalesContractPrcgElmnt.ConditionQuantityUnit,

      SalesContractPrcgElmnt.ConditionIsForStatistics,
      SalesContractPrcgElmnt.ConditionIsManuallyChanged,
      SalesContractPrcgElmnt.ConditionInactiveReason,

      //for DCL
      @Consumption.hidden: true
      SalesContractPrcgElmnt.SalesContractType,
      @Consumption.hidden: true
      SalesContractPrcgElmnt.SalesOrganization,
      @Consumption.hidden: true
      SalesContractPrcgElmnt.DistributionChannel,
      @Consumption.hidden: true
      SalesContractPrcgElmnt.OrganizationDivision,

      //Association
      _SalesContract : redirected to parent I_SalesContractTP

}
```
