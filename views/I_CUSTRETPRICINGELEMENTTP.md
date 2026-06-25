---
name: I_CUSTRETPRICINGELEMENTTP
description: Custretpricingelementtp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - pricing
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# I_CUSTRETPRICINGELEMENTTP

**Custretpricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key CustomerReturnPricingElement.CustomerReturn` | `CustomerReturnPricingElement.CustomerReturn` |
| `key CustomerReturnPricingElement.PricingProcedureStep` | `CustomerReturnPricingElement.PricingProcedureStep` |
| `key CustomerReturnPricingElement.PricingProcedureCounter` | `CustomerReturnPricingElement.PricingProcedureCounter` |
| `CustomerReturnPricingElement.ConditionApplication` | `CustomerReturnPricingElement.ConditionApplication` |
| `CustomerReturnPricingElement.ConditionType` | `CustomerReturnPricingElement.ConditionType` |
| `CustomerReturnPricingElement.ConditionTypeName` | `CustomerReturnPricingElement.ConditionTypeName` |
| `CustomerReturnPricingElement.ConditionCalculationType` | `CustomerReturnPricingElement.ConditionCalculationType` |
| `CustomerReturnPricingElement.ConditionRateAmount` | `CustomerReturnPricingElement.ConditionRateAmount` |
| `CustomerReturnPricingElement.ConditionCurrency` | `CustomerReturnPricingElement.ConditionCurrency` |
| `CustomerReturnPricingElement.ConditionRateRatio` | `CustomerReturnPricingElement.ConditionRateRatio` |
| `CustomerReturnPricingElement.ConditionRateRatioUnit` | `CustomerReturnPricingElement.ConditionRateRatioUnit` |
| `CustomerReturnPricingElement.ConditionBaseAmount` | `CustomerReturnPricingElement.ConditionBaseAmount` |
| `CustomerReturnPricingElement.ConditionAmount` | `CustomerReturnPricingElement.ConditionAmount` |
| `CustomerReturnPricingElement.TransactionCurrency` | `CustomerReturnPricingElement.TransactionCurrency` |
| `CustomerReturnPricingElement.ConditionBaseQuantity` | `CustomerReturnPricingElement.ConditionBaseQuantity` |
| `CustomerReturnPricingElement.ConditionQuantity` | `CustomerReturnPricingElement.ConditionQuantity` |
| `CustomerReturnPricingElement.ConditionQuantityUnit` | `CustomerReturnPricingElement.ConditionQuantityUnit` |
| `CustomerReturnPricingElement.ConditionIsForStatistics` | `CustomerReturnPricingElement.ConditionIsForStatistics` |
| `CustomerReturnPricingElement.ConditionIsManuallyChanged` | `CustomerReturnPricingElement.ConditionIsManuallyChanged` |
| `CustomerReturnPricingElement.ConditionInactiveReason` | `CustomerReturnPricingElement.ConditionInactiveReason` |
| `CustomerReturnPricingElement.ConditionRateValueIsAmount` | `CustomerReturnPricingElement.ConditionRateValueIsAmount` |
| `CustomerReturnPricingElement.ConditionRateValueIsRatio` | `CustomerReturnPricingElement.ConditionRateValueIsRatio` |
| `CustomerReturnPricingElement.ConditionRateValueIsNull` | `CustomerReturnPricingElement.ConditionRateValueIsNull` |
| `CustomerReturnPricingElement.ConditionQuantityIsNull` | `CustomerReturnPricingElement.ConditionQuantityIsNull` |
| `CustomerReturnPricingElement.ConditionAmountIsNull` | `CustomerReturnPricingElement.ConditionAmountIsNull` |
| `CustomerReturnPricingElement.CustomerReturnType` | `CustomerReturnPricingElement.CustomerReturnType` |
| `CustomerReturnPricingElement.SalesOrganization` | `CustomerReturnPricingElement.SalesOrganization` |
| `CustomerReturnPricingElement.DistributionChannel` | `CustomerReturnPricingElement.DistributionChannel` |
| `CustomerReturnPricingElement.OrganizationDivision` | `CustomerReturnPricingElement.OrganizationDivision` |
| `/* Associations */` | `/* Associations */` |
| `_CustomerReturn : redirected to parent I_CustomerReturnTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Returns Order Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CustomerReturn', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustRetPricingElementTP 
  as projection on R_CustomerReturnPrgElmTP as CustomerReturnPricingElement
{
  key CustomerReturnPricingElement.CustomerReturn,
  key CustomerReturnPricingElement.PricingProcedureStep,
  key CustomerReturnPricingElement.PricingProcedureCounter,
  
  CustomerReturnPricingElement.ConditionApplication,
  CustomerReturnPricingElement.ConditionType,
  CustomerReturnPricingElement.ConditionTypeName,
  CustomerReturnPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  CustomerReturnPricingElement.ConditionRateAmount,
  CustomerReturnPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  CustomerReturnPricingElement.ConditionRateRatio,
  CustomerReturnPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true  
  CustomerReturnPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency' 
  CustomerReturnPricingElement.ConditionAmount,
  CustomerReturnPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustomerReturnPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustomerReturnPricingElement.ConditionQuantity,
  CustomerReturnPricingElement.ConditionQuantityUnit,
  
  CustomerReturnPricingElement.ConditionIsForStatistics,
  CustomerReturnPricingElement.ConditionIsManuallyChanged,
  CustomerReturnPricingElement.ConditionInactiveReason,
  CustomerReturnPricingElement.ConditionRateValueIsAmount,
  CustomerReturnPricingElement.ConditionRateValueIsRatio,
  CustomerReturnPricingElement.ConditionRateValueIsNull,
  CustomerReturnPricingElement.ConditionQuantityIsNull,
  CustomerReturnPricingElement.ConditionAmountIsNull,
  
  //for DCL
  @Consumption.hidden: true
  CustomerReturnPricingElement.CustomerReturnType,
  @Consumption.hidden: true
  CustomerReturnPricingElement.SalesOrganization,
  @Consumption.hidden: true
  CustomerReturnPricingElement.DistributionChannel,
  @Consumption.hidden: true
  CustomerReturnPricingElement.OrganizationDivision,
    
  /* Associations */
  _CustomerReturn : redirected to parent I_CustomerReturnTP
}
```
