---
name: I_DEBITMEMOREQITMPRGELMTP
description: Debitmemoreqitmprgelmtp
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQITMPRGELMTP

**Debitmemoreqitmprgelmtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key DebitMemoReqItemPricingElement.DebitMemoRequest` | `DebitMemoReqItemPricingElement.DebitMemoRequest` |
| `key DebitMemoReqItemPricingElement.DebitMemoRequestItem` | `DebitMemoReqItemPricingElement.DebitMemoRequestItem` |
| `key DebitMemoReqItemPricingElement.PricingProcedureStep` | `DebitMemoReqItemPricingElement.PricingProcedureStep` |
| `key DebitMemoReqItemPricingElement.PricingProcedureCounter` | `DebitMemoReqItemPricingElement.PricingProcedureCounter` |
| `DebitMemoReqItemPricingElement.ConditionApplication` | `DebitMemoReqItemPricingElement.ConditionApplication` |
| `DebitMemoReqItemPricingElement.ConditionType` | `DebitMemoReqItemPricingElement.ConditionType` |
| `DebitMemoReqItemPricingElement.ConditionCalculationType` | `DebitMemoReqItemPricingElement.ConditionCalculationType` |
| `DebitMemoReqItemPricingElement.ConditionRateAmount` | `DebitMemoReqItemPricingElement.ConditionRateAmount` |
| `DebitMemoReqItemPricingElement.ConditionCurrency` | `DebitMemoReqItemPricingElement.ConditionCurrency` |
| `DebitMemoReqItemPricingElement.ConditionRateRatio` | `DebitMemoReqItemPricingElement.ConditionRateRatio` |
| `DebitMemoReqItemPricingElement.ConditionRateRatioUnit` | `DebitMemoReqItemPricingElement.ConditionRateRatioUnit` |
| `DebitMemoReqItemPricingElement.ConditionBaseAmount` | `DebitMemoReqItemPricingElement.ConditionBaseAmount` |
| `DebitMemoReqItemPricingElement.ConditionAmount` | `DebitMemoReqItemPricingElement.ConditionAmount` |
| `DebitMemoReqItemPricingElement.TransactionCurrency` | `DebitMemoReqItemPricingElement.TransactionCurrency` |
| `DebitMemoReqItemPricingElement.ConditionBaseQuantity` | `DebitMemoReqItemPricingElement.ConditionBaseQuantity` |
| `DebitMemoReqItemPricingElement.ConditionQuantity` | `DebitMemoReqItemPricingElement.ConditionQuantity` |
| `DebitMemoReqItemPricingElement.ConditionQuantityUnit` | `DebitMemoReqItemPricingElement.ConditionQuantityUnit` |
| `DebitMemoReqItemPricingElement.ConditionIsForStatistics` | `DebitMemoReqItemPricingElement.ConditionIsForStatistics` |
| `DebitMemoReqItemPricingElement.ConditionIsManuallyChanged` | `DebitMemoReqItemPricingElement.ConditionIsManuallyChanged` |
| `DebitMemoReqItemPricingElement.ConditionInactiveReason` | `DebitMemoReqItemPricingElement.ConditionInactiveReason` |
| `DebitMemoReqItemPricingElement.DebitMemoRequestType` | `DebitMemoReqItemPricingElement.DebitMemoRequestType` |
| `DebitMemoReqItemPricingElement.SalesOrganization` | `DebitMemoReqItemPricingElement.SalesOrganization` |
| `DebitMemoReqItemPricingElement.DistributionChannel` | `DebitMemoReqItemPricingElement.DistributionChannel` |
| `DebitMemoReqItemPricingElement.OrganizationDivision` | `DebitMemoReqItemPricingElement.OrganizationDivision` |
| `_Item             : redirected to parent I_DebitMemoRequestItemTP` | *Association* |
| `_DebitMemoRequest : redirected to I_DebitMemoRequestTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Debit Memo Req Item Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['DebitMemoRequest', 'DebitMemoRequestItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_DebitMemoReqItmPrgElmTP 
  as projection on R_DebitMemoReqItemPrcgElmntTP as DebitMemoReqItemPricingElement
{
  key DebitMemoReqItemPricingElement.DebitMemoRequest,
  key DebitMemoReqItemPricingElement.DebitMemoRequestItem,
  key DebitMemoReqItemPricingElement.PricingProcedureStep,
  key DebitMemoReqItemPricingElement.PricingProcedureCounter,
  
  DebitMemoReqItemPricingElement.ConditionApplication,
  DebitMemoReqItemPricingElement.ConditionType,
  DebitMemoReqItemPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  DebitMemoReqItemPricingElement.ConditionRateAmount,
  DebitMemoReqItemPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  DebitMemoReqItemPricingElement.ConditionRateRatio,
  DebitMemoReqItemPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true
  DebitMemoReqItemPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  DebitMemoReqItemPricingElement.ConditionAmount,
  DebitMemoReqItemPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  DebitMemoReqItemPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  DebitMemoReqItemPricingElement.ConditionQuantity,
  DebitMemoReqItemPricingElement.ConditionQuantityUnit,
  
  DebitMemoReqItemPricingElement.ConditionIsForStatistics,
  DebitMemoReqItemPricingElement.ConditionIsManuallyChanged,
  DebitMemoReqItemPricingElement.ConditionInactiveReason,
  
  //for DCL
  @Consumption.hidden: true
  DebitMemoReqItemPricingElement.DebitMemoRequestType,
  @Consumption.hidden: true
  DebitMemoReqItemPricingElement.SalesOrganization,
  @Consumption.hidden: true
  DebitMemoReqItemPricingElement.DistributionChannel,
  @Consumption.hidden: true
  DebitMemoReqItemPricingElement.OrganizationDivision,
  
  //Association
  _Item             : redirected to parent I_DebitMemoRequestItemTP,
  _DebitMemoRequest : redirected to I_DebitMemoRequestTP  
}
```
