---
name: I_SLSCONTRITMBILLINGPLANITEMTP
description: Slscontritmbillingplanitemtp
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
  - billing
  - item-level
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SLSCONTRITMBILLINGPLANITEMTP

**Slscontritmbillingplanitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SlsContrItemBillingPlanItem.SalesContract` | `SlsContrItemBillingPlanItem.SalesContract` |
| `key SlsContrItemBillingPlanItem.SalesContractItem` | `SlsContrItemBillingPlanItem.SalesContractItem` |
| `key SlsContrItemBillingPlanItem.BillingPlan` | `SlsContrItemBillingPlanItem.BillingPlan` |
| `key SlsContrItemBillingPlanItem.BillingPlanItem` | `SlsContrItemBillingPlanItem.BillingPlanItem` |
| `SlsContrItemBillingPlanItem.BillingPlanItemForEdit` | `SlsContrItemBillingPlanItem.BillingPlanItemForEdit` |
| `SlsContrItemBillingPlanItem.BillingPlanBillingDate` | `SlsContrItemBillingPlanItem.BillingPlanBillingDate` |
| `SlsContrItemBillingPlanItem.BillingPlanDateCategory` | `SlsContrItemBillingPlanItem.BillingPlanDateCategory` |
| `SlsContrItemBillingPlanItem.BillingPlanDateDescriptionCode` | `SlsContrItemBillingPlanItem.BillingPlanDateDescriptionCode` |
| `SlsContrItemBillingPlanItem.BillingPlanAmountPercent` | `SlsContrItemBillingPlanItem.BillingPlanAmountPercent` |
| `SlsContrItemBillingPlanItem.BillingPlanAmount` | `SlsContrItemBillingPlanItem.BillingPlanAmount` |
| `SlsContrItemBillingPlanItem.BillingBlockReason` | `SlsContrItemBillingPlanItem.BillingBlockReason` |
| `SlsContrItemBillingPlanItem.BillingPlanRelatedBillgStatus` | `SlsContrItemBillingPlanItem.BillingPlanRelatedBillgStatus` |
| `SlsContrItemBillingPlanItem.ProposedBillingDocumentType` | `SlsContrItemBillingPlanItem.ProposedBillingDocumentType` |
| `SlsContrItemBillingPlanItem.BillingPlanType` | `SlsContrItemBillingPlanItem.BillingPlanType` |
| `SlsContrItemBillingPlanItem.BillingPlanBillingRule` | `SlsContrItemBillingPlanItem.BillingPlanBillingRule` |
| `SlsContrItemBillingPlanItem.TransactionCurrency` | `SlsContrItemBillingPlanItem.TransactionCurrency` |
| `SlsContrItemBillingPlanItem.AdoptingBillingDateID` | `SlsContrItemBillingPlanItem.AdoptingBillingDateID` |
| `SlsContrItemBillingPlanItem.CustomerPaymentTerms` | `SlsContrItemBillingPlanItem.CustomerPaymentTerms` |
| `SlsContrItemBillingPlanItem.SalesContractType` | `SlsContrItemBillingPlanItem.SalesContractType` |
| `SlsContrItemBillingPlanItem.SalesOrganization` | `SlsContrItemBillingPlanItem.SalesOrganization` |
| `SlsContrItemBillingPlanItem.DistributionChannel` | `SlsContrItemBillingPlanItem.DistributionChannel` |
| `SlsContrItemBillingPlanItem.OrganizationDivision` | `SlsContrItemBillingPlanItem.OrganizationDivision` |
| `_Item            : redirected to I_SalesContractItemTP` | *Association* |
| `_SalesContract   : redirected to I_SalesContractTP` | *Association* |
| `_ItemBillingPlan : redirected to parent I_SlsContractItemBillingPlanTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Billing Plan Item for Sls Contr Item - TP'

@AccessControl.authorizationCheck: #MANDATORY
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
   semanticKey: ['SalesContract', 'SalesContractItem', 'BillingPlan', 'BillingPlanItem']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsContrItmBillingPlanItemTP
  as projection on R_SlsContrItmBillingPlanItemTP as SlsContrItemBillingPlanItem
{
  key SlsContrItemBillingPlanItem.SalesContract,
  key SlsContrItemBillingPlanItem.SalesContractItem,
  key SlsContrItemBillingPlanItem.BillingPlan,
  key SlsContrItemBillingPlanItem.BillingPlanItem,

      @ObjectModel.editableFieldFor: 'BillingPlanItem'
      SlsContrItemBillingPlanItem.BillingPlanItemForEdit,
      SlsContrItemBillingPlanItem.BillingPlanBillingDate,
      SlsContrItemBillingPlanItem.BillingPlanDateCategory,
      SlsContrItemBillingPlanItem.BillingPlanDateDescriptionCode,
      SlsContrItemBillingPlanItem.BillingPlanAmountPercent,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SlsContrItemBillingPlanItem.BillingPlanAmount,
      SlsContrItemBillingPlanItem.BillingBlockReason,
      SlsContrItemBillingPlanItem.BillingPlanRelatedBillgStatus,
      SlsContrItemBillingPlanItem.ProposedBillingDocumentType,
      SlsContrItemBillingPlanItem.BillingPlanType,
      SlsContrItemBillingPlanItem.BillingPlanBillingRule,
      SlsContrItemBillingPlanItem.TransactionCurrency,
      SlsContrItemBillingPlanItem.AdoptingBillingDateID,
      SlsContrItemBillingPlanItem.CustomerPaymentTerms,

      //for DCL
      @Consumption.hidden: true
      SlsContrItemBillingPlanItem.SalesContractType,
      @Consumption.hidden: true
      SlsContrItemBillingPlanItem.SalesOrganization,
      @Consumption.hidden: true
      SlsContrItemBillingPlanItem.DistributionChannel,
      @Consumption.hidden: true
      SlsContrItemBillingPlanItem.OrganizationDivision,

      //Association
      _Item            : redirected to I_SalesContractItemTP,
      _SalesContract   : redirected to I_SalesContractTP,
      _ItemBillingPlan : redirected to parent I_SlsContractItemBillingPlanTP

}
```
