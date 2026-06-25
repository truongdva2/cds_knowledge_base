---
name: I_DEBITMEMOREQUESTITEMTP
description: Debitmemorequestitemtp
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTITEMTP

**Debitmemorequestitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key DebitMemoRequestItem.DebitMemoRequest` | `DebitMemoRequestItem.DebitMemoRequest` |
| `key DebitMemoRequestItem.DebitMemoRequestItem` | `DebitMemoRequestItem.DebitMemoRequestItem` |
| `DebitMemoRequestItem.HigherLevelItem` | `DebitMemoRequestItem.HigherLevelItem` |
| `DebitMemoRequestItem.DebitMemoRequestItemCategory` | `DebitMemoRequestItem.DebitMemoRequestItemCategory` |
| `DebitMemoRequestItem.DebitMemoRequestItemText` | `DebitMemoRequestItem.DebitMemoRequestItemText` |
| `DebitMemoRequestItem.PurchaseOrderByCustomer` | `DebitMemoRequestItem.PurchaseOrderByCustomer` |
| `DebitMemoRequestItem.Product` | `DebitMemoRequestItem.Product` |
| `DebitMemoRequestItem.MaterialByCustomer` | `DebitMemoRequestItem.MaterialByCustomer` |
| `DebitMemoRequestItem.ProductGroup` | `DebitMemoRequestItem.ProductGroup` |
| `DebitMemoRequestItem.MaterialPricingGroup` | `DebitMemoRequestItem.MaterialPricingGroup` |
| `DebitMemoRequestItem.Batch` | `DebitMemoRequestItem.Batch` |
| `DebitMemoRequestItem.PricingDate` | `DebitMemoRequestItem.PricingDate` |
| `DebitMemoRequestItem.RequestedQuantity` | `DebitMemoRequestItem.RequestedQuantity` |
| `DebitMemoRequestItem.RequestedQuantityUnit` | `DebitMemoRequestItem.RequestedQuantityUnit` |
| `DebitMemoRequestItem.NetAmount` | `DebitMemoRequestItem.NetAmount` |
| `DebitMemoRequestItem.TransactionCurrency` | `DebitMemoRequestItem.TransactionCurrency` |
| `DebitMemoRequestItem.ItemBillingBlockReason` | `DebitMemoRequestItem.ItemBillingBlockReason` |
| `DebitMemoRequestItem.Plant` | `DebitMemoRequestItem.Plant` |
| `DebitMemoRequestItem.TargetQuantity` | `DebitMemoRequestItem.TargetQuantity` |
| `DebitMemoRequestItem.TargetQuantityUnit` | `DebitMemoRequestItem.TargetQuantityUnit` |
| `DebitMemoRequestItem.ItemGrossWeight` | `DebitMemoRequestItem.ItemGrossWeight` |
| `DebitMemoRequestItem.ItemNetWeight` | `DebitMemoRequestItem.ItemNetWeight` |
| `DebitMemoRequestItem.ItemWeightUnit` | `DebitMemoRequestItem.ItemWeightUnit` |
| `DebitMemoRequestItem.ItemVolume` | `DebitMemoRequestItem.ItemVolume` |
| `DebitMemoRequestItem.ItemVolumeUnit` | `DebitMemoRequestItem.ItemVolumeUnit` |
| `DebitMemoRequestItem.ServicesRenderedDate` | `DebitMemoRequestItem.ServicesRenderedDate` |
| `DebitMemoRequestItem.SalesDocumentRjcnReason` | `DebitMemoRequestItem.SalesDocumentRjcnReason` |
| `DebitMemoRequestItem.TaxAmount` | `DebitMemoRequestItem.TaxAmount` |
| `DebitMemoRequestItem.IncotermsClassification` | `DebitMemoRequestItem.IncotermsClassification` |
| `DebitMemoRequestItem.IncotermsLocation1` | `DebitMemoRequestItem.IncotermsLocation1` |
| `DebitMemoRequestItem.IncotermsLocation2` | `DebitMemoRequestItem.IncotermsLocation2` |
| `DebitMemoRequestItem.IncotermsVersion` | `DebitMemoRequestItem.IncotermsVersion` |
| `DebitMemoRequestItem.BillingDocumentDate` | `DebitMemoRequestItem.BillingDocumentDate` |
| `DebitMemoRequestItem.CustomerPaymentTerms` | `DebitMemoRequestItem.CustomerPaymentTerms` |
| `DebitMemoRequestItem.ProfitCenter` | `DebitMemoRequestItem.ProfitCenter` |
| `DebitMemoRequestItem.ReferenceSDDocument` | `DebitMemoRequestItem.ReferenceSDDocument` |
| `DebitMemoRequestItem.ReferenceSDDocumentItem` | `DebitMemoRequestItem.ReferenceSDDocumentItem` |
| `DebitMemoRequestItem.SDProcessStatus` | `DebitMemoRequestItem.SDProcessStatus` |
| `DebitMemoRequestItem.OrderRelatedBillingStatus` | `DebitMemoRequestItem.OrderRelatedBillingStatus` |
| `DebitMemoRequestItem.BillingBlockStatus` | `DebitMemoRequestItem.BillingBlockStatus` |
| `DebitMemoRequestItem.ItemGeneralIncompletionStatus` | `DebitMemoRequestItem.ItemGeneralIncompletionStatus` |
| `DebitMemoRequestItem.SDDocumentRejectionStatus` | `DebitMemoRequestItem.SDDocumentRejectionStatus` |
| `DebitMemoRequestItem.TotalSDDocReferenceStatus` | `DebitMemoRequestItem.TotalSDDocReferenceStatus` |
| `DebitMemoRequestItem.DebitMemoRequestType` | `DebitMemoRequestItem.DebitMemoRequestType` |
| `DebitMemoRequestItem.OrganizationDivision` | `DebitMemoRequestItem.OrganizationDivision` |
| `DebitMemoRequestItem.SalesOrganization` | `DebitMemoRequestItem.SalesOrganization` |
| `DebitMemoRequestItem.DistributionChannel` | `DebitMemoRequestItem.DistributionChannel` |
| `_DebitMemoRequest   : redirected to parent I_DebitMemoRequestTP` | *Association* |
| `_ItemPartner        : redirected to composition child I_DebitMemoReqItemPartnerTP` | *Association* |
| `_ItemText           : redirected to composition child I_DebitMemoRequestItemTextTP` | *Association* |
| `_ItemPricingElement : redirected to composition child I_DebitMemoReqItmPrgElmTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@EndUserText.label: 'Debit Memo Request Item - TP'

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['DebitMemoRequest', 'DebitMemoRequestItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['DebitMemoRequestItem'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_DebitMemoRequestItemTP
  as projection on R_DebitMemoRequestItemTP as DebitMemoRequestItem 
{ 
  key DebitMemoRequestItem.DebitMemoRequest,
  key DebitMemoRequestItem.DebitMemoRequestItem,
  
      DebitMemoRequestItem.HigherLevelItem,
      DebitMemoRequestItem.DebitMemoRequestItemCategory,
      @Semantics.text: true
      DebitMemoRequestItem.DebitMemoRequestItemText,
      DebitMemoRequestItem.PurchaseOrderByCustomer,
      DebitMemoRequestItem.Product,
      DebitMemoRequestItem.MaterialByCustomer,
      DebitMemoRequestItem.ProductGroup,
      DebitMemoRequestItem.MaterialPricingGroup,
      DebitMemoRequestItem.Batch,
      DebitMemoRequestItem.PricingDate,
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      DebitMemoRequestItem.RequestedQuantity,
      DebitMemoRequestItem.RequestedQuantityUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequestItem.NetAmount,
      DebitMemoRequestItem.TransactionCurrency,
      DebitMemoRequestItem.ItemBillingBlockReason,
      DebitMemoRequestItem.Plant,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      DebitMemoRequestItem.TargetQuantity,
      DebitMemoRequestItem.TargetQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      DebitMemoRequestItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      DebitMemoRequestItem.ItemNetWeight,
      DebitMemoRequestItem.ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      DebitMemoRequestItem.ItemVolume,
      DebitMemoRequestItem.ItemVolumeUnit,
      DebitMemoRequestItem.ServicesRenderedDate,
      DebitMemoRequestItem.SalesDocumentRjcnReason,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequestItem.TaxAmount,
      DebitMemoRequestItem.IncotermsClassification,
      DebitMemoRequestItem.IncotermsLocation1,
      DebitMemoRequestItem.IncotermsLocation2,
      DebitMemoRequestItem.IncotermsVersion,
      DebitMemoRequestItem.BillingDocumentDate,
      DebitMemoRequestItem.CustomerPaymentTerms,
      DebitMemoRequestItem.ProfitCenter,
      DebitMemoRequestItem.ReferenceSDDocument,
      DebitMemoRequestItem.ReferenceSDDocumentItem,
      
      DebitMemoRequestItem.SDProcessStatus,
      DebitMemoRequestItem.OrderRelatedBillingStatus,
      DebitMemoRequestItem.BillingBlockStatus,
      DebitMemoRequestItem.ItemGeneralIncompletionStatus,
      DebitMemoRequestItem.SDDocumentRejectionStatus,
      DebitMemoRequestItem.TotalSDDocReferenceStatus,
      
      // For Access control
      @Consumption.hidden: true
      DebitMemoRequestItem.DebitMemoRequestType,
      @Consumption.hidden: true
      DebitMemoRequestItem.OrganizationDivision,
      @Consumption.hidden: true
      DebitMemoRequestItem.SalesOrganization,
      @Consumption.hidden: true
      DebitMemoRequestItem.DistributionChannel,
      
      //Compositions
      _DebitMemoRequest   : redirected to parent I_DebitMemoRequestTP,
      _ItemPartner        : redirected to composition child I_DebitMemoReqItemPartnerTP,
      _ItemText           : redirected to composition child I_DebitMemoRequestItemTextTP,
      _ItemPricingElement : redirected to composition child I_DebitMemoReqItmPrgElmTP
}
```
