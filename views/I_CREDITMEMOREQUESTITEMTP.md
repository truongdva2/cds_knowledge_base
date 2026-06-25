---
name: I_CREDITMEMOREQUESTITEMTP
description: Creditmemorequestitemtp
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
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTITEMTP

**Creditmemorequestitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key CreditMemoRequestItem.CreditMemoRequest` | `CreditMemoRequestItem.CreditMemoRequest` |
| `key CreditMemoRequestItem.CreditMemoRequestItem` | `CreditMemoRequestItem.CreditMemoRequestItem` |
| `CreditMemoRequestItem.HigherLevelItem` | `CreditMemoRequestItem.HigherLevelItem` |
| `CreditMemoRequestItem.CreditMemoRequestItemCategory` | `CreditMemoRequestItem.CreditMemoRequestItemCategory` |
| `CreditMemoRequestItem.CreditMemoRequestItemText` | `CreditMemoRequestItem.CreditMemoRequestItemText` |
| `CreditMemoRequestItem.PurchaseOrderByCustomer` | `CreditMemoRequestItem.PurchaseOrderByCustomer` |
| `CreditMemoRequestItem.Product` | `CreditMemoRequestItem.Product` |
| `CreditMemoRequestItem.MaterialByCustomer` | `CreditMemoRequestItem.MaterialByCustomer` |
| `CreditMemoRequestItem.ProductGroup` | `CreditMemoRequestItem.ProductGroup` |
| `CreditMemoRequestItem.MaterialPricingGroup` | `CreditMemoRequestItem.MaterialPricingGroup` |
| `CreditMemoRequestItem.Batch` | `CreditMemoRequestItem.Batch` |
| `CreditMemoRequestItem.PricingDate` | `CreditMemoRequestItem.PricingDate` |
| `CreditMemoRequestItem.RequestedQuantity` | `CreditMemoRequestItem.RequestedQuantity` |
| `CreditMemoRequestItem.RequestedQuantityUnit` | `CreditMemoRequestItem.RequestedQuantityUnit` |
| `CreditMemoRequestItem.NetAmount` | `CreditMemoRequestItem.NetAmount` |
| `CreditMemoRequestItem.TransactionCurrency` | `CreditMemoRequestItem.TransactionCurrency` |
| `CreditMemoRequestItem.ItemBillingBlockReason` | `CreditMemoRequestItem.ItemBillingBlockReason` |
| `CreditMemoRequestItem.Plant` | `CreditMemoRequestItem.Plant` |
| `CreditMemoRequestItem.TargetQuantity` | `CreditMemoRequestItem.TargetQuantity` |
| `CreditMemoRequestItem.TargetQuantityUnit` | `CreditMemoRequestItem.TargetQuantityUnit` |
| `CreditMemoRequestItem.ItemGrossWeight` | `CreditMemoRequestItem.ItemGrossWeight` |
| `CreditMemoRequestItem.ItemNetWeight` | `CreditMemoRequestItem.ItemNetWeight` |
| `CreditMemoRequestItem.ItemWeightUnit` | `CreditMemoRequestItem.ItemWeightUnit` |
| `CreditMemoRequestItem.ItemVolume` | `CreditMemoRequestItem.ItemVolume` |
| `CreditMemoRequestItem.ItemVolumeUnit` | `CreditMemoRequestItem.ItemVolumeUnit` |
| `CreditMemoRequestItem.ServicesRenderedDate` | `CreditMemoRequestItem.ServicesRenderedDate` |
| `CreditMemoRequestItem.SalesDocumentRjcnReason` | `CreditMemoRequestItem.SalesDocumentRjcnReason` |
| `CreditMemoRequestItem.TaxAmount` | `CreditMemoRequestItem.TaxAmount` |
| `CreditMemoRequestItem.IncotermsClassification` | `CreditMemoRequestItem.IncotermsClassification` |
| `CreditMemoRequestItem.IncotermsLocation1` | `CreditMemoRequestItem.IncotermsLocation1` |
| `CreditMemoRequestItem.IncotermsLocation2` | `CreditMemoRequestItem.IncotermsLocation2` |
| `CreditMemoRequestItem.IncotermsVersion` | `CreditMemoRequestItem.IncotermsVersion` |
| `CreditMemoRequestItem.BillingDocumentDate` | `CreditMemoRequestItem.BillingDocumentDate` |
| `CreditMemoRequestItem.CustomerPaymentTerms` | `CreditMemoRequestItem.CustomerPaymentTerms` |
| `CreditMemoRequestItem.ProfitCenter` | `CreditMemoRequestItem.ProfitCenter` |
| `CreditMemoRequestItem.ReferenceSDDocument` | `CreditMemoRequestItem.ReferenceSDDocument` |
| `CreditMemoRequestItem.ReferenceSDDocumentItem` | `CreditMemoRequestItem.ReferenceSDDocumentItem` |
| `CreditMemoRequestItem.SDProcessStatus` | `CreditMemoRequestItem.SDProcessStatus` |
| `CreditMemoRequestItem.OrderRelatedBillingStatus` | `CreditMemoRequestItem.OrderRelatedBillingStatus` |
| `CreditMemoRequestItem.BillingBlockStatus` | `CreditMemoRequestItem.BillingBlockStatus` |
| `CreditMemoRequestItem.ItemGeneralIncompletionStatus` | `CreditMemoRequestItem.ItemGeneralIncompletionStatus` |
| `CreditMemoRequestItem.SDDocumentRejectionStatus` | `CreditMemoRequestItem.SDDocumentRejectionStatus` |
| `CreditMemoRequestItem.TotalSDDocReferenceStatus` | `CreditMemoRequestItem.TotalSDDocReferenceStatus` |
| `CreditMemoRequestItem.CreditMemoRequestType` | `CreditMemoRequestItem.CreditMemoRequestType` |
| `CreditMemoRequestItem.OrganizationDivision` | `CreditMemoRequestItem.OrganizationDivision` |
| `CreditMemoRequestItem.SalesOrganization` | `CreditMemoRequestItem.SalesOrganization` |
| `CreditMemoRequestItem.DistributionChannel` | `CreditMemoRequestItem.DistributionChannel` |
| `_CreditMemoRequest  : redirected to parent I_CreditMemoRequestTP` | *Association* |
| `_ItemPartner        : redirected to composition child I_CreditMemoReqItemPartnerTP` | *Association* |
| `_ItemText           : redirected to composition child I_CreditMemoRequestItemTextTP` | *Association* |
| `_ItemPricingElement : redirected to composition child I_CrdtMemoReqItmPrcgElmntTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item - TP'
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

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
    semanticKey:           ['CreditMemoRequest', 'CreditMemoRequestItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['CreditMemoRequestItem'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CreditMemoRequestItemTP
  as projection on R_CreditMemoRequestItemTP as CreditMemoRequestItem
{
  key CreditMemoRequestItem.CreditMemoRequest,
  key CreditMemoRequestItem.CreditMemoRequestItem,
  
      CreditMemoRequestItem.HigherLevelItem,
      CreditMemoRequestItem.CreditMemoRequestItemCategory,
      @Semantics.text: true
      CreditMemoRequestItem.CreditMemoRequestItemText,
      CreditMemoRequestItem.PurchaseOrderByCustomer,
      CreditMemoRequestItem.Product,
      CreditMemoRequestItem.MaterialByCustomer,
      CreditMemoRequestItem.ProductGroup,
      CreditMemoRequestItem.MaterialPricingGroup,
      CreditMemoRequestItem.Batch,
      CreditMemoRequestItem.PricingDate,
      
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      CreditMemoRequestItem.RequestedQuantity,
      CreditMemoRequestItem.RequestedQuantityUnit,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequestItem.NetAmount,
      CreditMemoRequestItem.TransactionCurrency,
      
      CreditMemoRequestItem.ItemBillingBlockReason,
      CreditMemoRequestItem.Plant,
      
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      CreditMemoRequestItem.TargetQuantity,
      CreditMemoRequestItem.TargetQuantityUnit,
      
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CreditMemoRequestItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CreditMemoRequestItem.ItemNetWeight,
      CreditMemoRequestItem.ItemWeightUnit,
      
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      CreditMemoRequestItem.ItemVolume,
      CreditMemoRequestItem.ItemVolumeUnit,
      
      CreditMemoRequestItem.ServicesRenderedDate,
      CreditMemoRequestItem.SalesDocumentRjcnReason,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequestItem.TaxAmount,
      CreditMemoRequestItem.IncotermsClassification,
      CreditMemoRequestItem.IncotermsLocation1,
      CreditMemoRequestItem.IncotermsLocation2,
      CreditMemoRequestItem.IncotermsVersion,
      CreditMemoRequestItem.BillingDocumentDate,
      CreditMemoRequestItem.CustomerPaymentTerms,
      CreditMemoRequestItem.ProfitCenter,
      CreditMemoRequestItem.ReferenceSDDocument,
      CreditMemoRequestItem.ReferenceSDDocumentItem,
      CreditMemoRequestItem.SDProcessStatus,
      CreditMemoRequestItem.OrderRelatedBillingStatus,
      CreditMemoRequestItem.BillingBlockStatus,
      CreditMemoRequestItem.ItemGeneralIncompletionStatus,
      CreditMemoRequestItem.SDDocumentRejectionStatus,
      CreditMemoRequestItem.TotalSDDocReferenceStatus,
      
      // For Access control
      @Consumption.hidden: true
      CreditMemoRequestItem.CreditMemoRequestType,
      @Consumption.hidden: true
      CreditMemoRequestItem.OrganizationDivision,
      @Consumption.hidden: true
      CreditMemoRequestItem.SalesOrganization,
      @Consumption.hidden: true
      CreditMemoRequestItem.DistributionChannel,
      
      //Compositions
      _CreditMemoRequest  : redirected to parent I_CreditMemoRequestTP,
      _ItemPartner        : redirected to composition child I_CreditMemoReqItemPartnerTP,
      _ItemText           : redirected to composition child I_CreditMemoRequestItemTextTP,
      _ItemPricingElement : redirected to composition child I_CrdtMemoReqItmPrcgElmntTP
}
```
