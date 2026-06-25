---
name: I_SALESQUOTATIONTP
description: Salesquotationtp
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - transactional-processing
  - sales-quotation
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONTP

**Salesquotationtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesQuotation.SalesQuotation` | `SalesQuotation.SalesQuotation` |
| `SalesQuotation.SalesQuotationType` | `SalesQuotation.SalesQuotationType` |
| `SalesQuotation.SoldToParty` | `SalesQuotation.SoldToParty` |
| `SalesQuotation.SalesOrganization` | `SalesQuotation.SalesOrganization` |
| `SalesQuotation.DistributionChannel` | `SalesQuotation.DistributionChannel` |
| `SalesQuotation.OrganizationDivision` | `SalesQuotation.OrganizationDivision` |
| `SalesQuotation.SalesOffice` | `SalesQuotation.SalesOffice` |
| `SalesQuotation.SalesGroup` | `SalesQuotation.SalesGroup` |
| `SalesQuotation.SalesDistrict` | `SalesQuotation.SalesDistrict` |
| `SalesQuotation.PurchaseOrderByCustomer` | `SalesQuotation.PurchaseOrderByCustomer` |
| `SalesQuotation.SDDocumentReason` | `SalesQuotation.SDDocumentReason` |
| `SalesQuotation.CustomerPurchaseOrderDate` | `SalesQuotation.CustomerPurchaseOrderDate` |
| `SalesQuotation.PricingDate` | `SalesQuotation.PricingDate` |
| `SalesQuotation.CustomerPriceGroup` | `SalesQuotation.CustomerPriceGroup` |
| `SalesQuotation.RequestedDeliveryDate` | `SalesQuotation.RequestedDeliveryDate` |
| `SalesQuotation.ShippingCondition` | `SalesQuotation.ShippingCondition` |
| `SalesQuotation.ShippingType` | `SalesQuotation.ShippingType` |
| `SalesQuotation.IncotermsClassification` | `SalesQuotation.IncotermsClassification` |
| `SalesQuotation.IncotermsVersion` | `SalesQuotation.IncotermsVersion` |
| `SalesQuotation.IncotermsLocation1` | `SalesQuotation.IncotermsLocation1` |
| `SalesQuotation.IncotermsLocation2` | `SalesQuotation.IncotermsLocation2` |
| `SalesQuotation.SalesQuotationApprovalReason` | `SalesQuotation.SalesQuotationApprovalReason` |
| `SalesQuotation.TransactionCurrency` | `SalesQuotation.TransactionCurrency` |
| `SalesQuotation.BindingPeriodValidityStartDate` | `SalesQuotation.BindingPeriodValidityStartDate` |
| `SalesQuotation.BindingPeriodValidityEndDate` | `SalesQuotation.BindingPeriodValidityEndDate` |
| `SalesQuotation.HdrOrderProbabilityInPercent` | `SalesQuotation.HdrOrderProbabilityInPercent` |
| `SalesQuotation.TotalNetAmount` | `SalesQuotation.TotalNetAmount` |
| `SalesQuotation.ReferenceSDDocument` | `SalesQuotation.ReferenceSDDocument` |
| `SalesQuotation.ReferenceSDDocumentCategory` | `SalesQuotation.ReferenceSDDocumentCategory` |
| `SalesQuotation.OverallSDProcessStatus` | `SalesQuotation.OverallSDProcessStatus` |
| `SalesQuotation.HdrGeneralIncompletionStatus` | `SalesQuotation.HdrGeneralIncompletionStatus` |
| `SalesQuotation.OvrlItmGeneralIncompletionSts` | `SalesQuotation.OvrlItmGeneralIncompletionSts` |
| `SalesQuotation.OverallSDDocReferenceStatus` | `SalesQuotation.OverallSDDocReferenceStatus` |
| `SalesQuotation.SalesDocApprovalStatus` | `SalesQuotation.SalesDocApprovalStatus` |
| `SalesQuotation.TotalCreditCheckStatus` | `SalesQuotation.TotalCreditCheckStatus` |
| `SalesQuotation.LastChangeDateTime` | `SalesQuotation.LastChangeDateTime` |
| `SalesQuotation.CreatedByUser` | `SalesQuotation.CreatedByUser` |
| `SalesQuotation.CreationDate` | `SalesQuotation.CreationDate` |
| `SalesQuotation.LastChangedByUser` | `SalesQuotation.LastChangedByUser` |
| `_Item : redirected to composition child I_SalesQuotationItemTP` | *Association* |
| `_Partner : redirected to composition child I_SalesQuotationPartnerTP` | *Association* |
| `_Text : redirected to composition child I_SalesQuotationTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_SlsQuotationPricingElementTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
     name: 'SalesQuotation'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesQuotation']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['SalesQuotation'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesQuotationTP
provider contract transactional_interface
  as projection on R_SalesQuotationTP as SalesQuotation
{
  key SalesQuotation.SalesQuotation,

      SalesQuotation.SalesQuotationType,
      SalesQuotation.SoldToParty,
      SalesQuotation.SalesOrganization,
      SalesQuotation.DistributionChannel,
      SalesQuotation.OrganizationDivision,
      SalesQuotation.SalesOffice,
      SalesQuotation.SalesGroup,

      SalesQuotation.SalesDistrict,
      SalesQuotation.PurchaseOrderByCustomer,
      SalesQuotation.SDDocumentReason,
      SalesQuotation.CustomerPurchaseOrderDate,

      SalesQuotation.PricingDate,
      SalesQuotation.CustomerPriceGroup,
      SalesQuotation.RequestedDeliveryDate,
      SalesQuotation.ShippingCondition,
      SalesQuotation.ShippingType,
      SalesQuotation.IncotermsClassification,
      SalesQuotation.IncotermsVersion,
      SalesQuotation.IncotermsLocation1,
      SalesQuotation.IncotermsLocation2,
      SalesQuotation.SalesQuotationApprovalReason,
      SalesQuotation.TransactionCurrency,

      SalesQuotation.BindingPeriodValidityStartDate,
      SalesQuotation.BindingPeriodValidityEndDate,
      SalesQuotation.HdrOrderProbabilityInPercent,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesQuotation.TotalNetAmount,

      SalesQuotation.ReferenceSDDocument,
      SalesQuotation.ReferenceSDDocumentCategory,
      SalesQuotation.OverallSDProcessStatus,
      SalesQuotation.HdrGeneralIncompletionStatus,
      SalesQuotation.OvrlItmGeneralIncompletionSts,
      SalesQuotation.OverallSDDocReferenceStatus,
      SalesQuotation.SalesDocApprovalStatus,
      SalesQuotation.TotalCreditCheckStatus,
      SalesQuotation.LastChangeDateTime,
      SalesQuotation.CreatedByUser,
      SalesQuotation.CreationDate,
      SalesQuotation.LastChangedByUser,
//      SalesQuotation.ControllingArea,

      //Compositions
      _Item : redirected to composition child I_SalesQuotationItemTP,
      _Partner : redirected to composition child I_SalesQuotationPartnerTP,
      _Text : redirected to composition child I_SalesQuotationTextTP,
      _PricingElement : redirected to composition child I_SlsQuotationPricingElementTP
}
```
