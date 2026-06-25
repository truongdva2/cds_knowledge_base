---
name: I_DEBITMEMOREQUESTTP
description: Debitmemorequesttp
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
# I_DEBITMEMOREQUESTTP

**Debitmemorequesttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key DebitMemoRequest.DebitMemoRequest` | `DebitMemoRequest.DebitMemoRequest` |
| `DebitMemoRequest.DebitMemoRequestType` | `DebitMemoRequest.DebitMemoRequestType` |
| `DebitMemoRequest.DebitMemoRequestDate` | `DebitMemoRequest.DebitMemoRequestDate` |
| `DebitMemoRequest.ControllingArea` | `DebitMemoRequest.ControllingArea` |
| `DebitMemoRequest.SoldToParty` | `DebitMemoRequest.SoldToParty` |
| `DebitMemoRequest.CustomerName` | `DebitMemoRequest.CustomerName` |
| `DebitMemoRequest.SalesOrganization` | `DebitMemoRequest.SalesOrganization` |
| `DebitMemoRequest.DistributionChannel` | `DebitMemoRequest.DistributionChannel` |
| `DebitMemoRequest.OrganizationDivision` | `DebitMemoRequest.OrganizationDivision` |
| `DebitMemoRequest.ReferenceDistributionChannel` | `DebitMemoRequest.ReferenceDistributionChannel` |
| `DebitMemoRequest.SalesOffice` | `DebitMemoRequest.SalesOffice` |
| `DebitMemoRequest.SalesGroup` | `DebitMemoRequest.SalesGroup` |
| `DebitMemoRequest.SalesDistrict` | `DebitMemoRequest.SalesDistrict` |
| `DebitMemoRequest.PurchaseOrderByCustomer` | `DebitMemoRequest.PurchaseOrderByCustomer` |
| `DebitMemoRequest.CustomerPurchaseOrderType` | `DebitMemoRequest.CustomerPurchaseOrderType` |
| `DebitMemoRequest.CustomerPurchaseOrderDate` | `DebitMemoRequest.CustomerPurchaseOrderDate` |
| `DebitMemoRequest.CustomerGroup` | `DebitMemoRequest.CustomerGroup` |
| `DebitMemoRequest.SDDocumentReason` | `DebitMemoRequest.SDDocumentReason` |
| `DebitMemoRequest.PricingDate` | `DebitMemoRequest.PricingDate` |
| `DebitMemoRequest.TotalNetAmount` | `DebitMemoRequest.TotalNetAmount` |
| `DebitMemoRequest.TransactionCurrency` | `DebitMemoRequest.TransactionCurrency` |
| `DebitMemoRequest.HeaderBillingBlockReason` | `DebitMemoRequest.HeaderBillingBlockReason` |
| `DebitMemoRequest.SDPricingProcedure` | `DebitMemoRequest.SDPricingProcedure` |
| `DebitMemoRequest.IncotermsClassification` | `DebitMemoRequest.IncotermsClassification` |
| `DebitMemoRequest.IncotermsVersion` | `DebitMemoRequest.IncotermsVersion` |
| `DebitMemoRequest.IncotermsLocation1` | `DebitMemoRequest.IncotermsLocation1` |
| `DebitMemoRequest.IncotermsLocation2` | `DebitMemoRequest.IncotermsLocation2` |
| `DebitMemoRequest.CustomerPaymentTerms` | `DebitMemoRequest.CustomerPaymentTerms` |
| `DebitMemoRequest.BillingCompanyCode` | `DebitMemoRequest.BillingCompanyCode` |
| `DebitMemoRequest.PaymentMethod` | `DebitMemoRequest.PaymentMethod` |
| `DebitMemoRequest.BillingDocumentDate` | `DebitMemoRequest.BillingDocumentDate` |
| `DebitMemoRequest.ServicesRenderedDate` | `DebitMemoRequest.ServicesRenderedDate` |
| `DebitMemoRequest.ReferenceSDDocument` | `DebitMemoRequest.ReferenceSDDocument` |
| `DebitMemoRequest.ReferenceSDDocumentCategory` | `DebitMemoRequest.ReferenceSDDocumentCategory` |
| `DebitMemoRequest.CreatedByUser` | `DebitMemoRequest.CreatedByUser` |
| `DebitMemoRequest.CreationDate` | `DebitMemoRequest.CreationDate` |
| `DebitMemoRequest.CreationTime` | `DebitMemoRequest.CreationTime` |
| `DebitMemoRequest.SalesDocumentCreationDateTime` | `DebitMemoRequest.SalesDocumentCreationDateTime` |
| `DebitMemoRequest.LastChangedByUser` | `DebitMemoRequest.LastChangedByUser` |
| `DebitMemoRequest.LastChangeDateTime` | `DebitMemoRequest.LastChangeDateTime` |
| `DebitMemoRequest.DebitMemoReqApprovalReason` | `DebitMemoRequest.DebitMemoReqApprovalReason` |
| `DebitMemoRequest.SalesDocApprovalStatus` | `DebitMemoRequest.SalesDocApprovalStatus` |
| `DebitMemoRequest.OverallBillingBlockStatus` | `DebitMemoRequest.OverallBillingBlockStatus` |
| `DebitMemoRequest.OverallSDProcessStatus` | `DebitMemoRequest.OverallSDProcessStatus` |
| `DebitMemoRequest.OverallSDDocumentRejectionSts` | `DebitMemoRequest.OverallSDDocumentRejectionSts` |
| `DebitMemoRequest.OverallOrdReltdBillgStatus` | `DebitMemoRequest.OverallOrdReltdBillgStatus` |
| `DebitMemoRequest.TotalBlockStatus` | `DebitMemoRequest.TotalBlockStatus` |
| `DebitMemoRequest.HdrGeneralIncompletionStatus` | `DebitMemoRequest.HdrGeneralIncompletionStatus` |
| `DebitMemoRequest.OvrlItmGeneralIncompletionSts` | `DebitMemoRequest.OvrlItmGeneralIncompletionSts` |
| `DebitMemoRequest.OverallSDDocReferenceStatus` | `DebitMemoRequest.OverallSDDocReferenceStatus` |
| `_Item           : redirected to composition child I_DebitMemoRequestItemTP` | *Association* |
| `_Partner        : redirected to composition child I_DebitMemoRequestPartnerTP` | *Association* |
| `_Text           : redirected to composition child I_DebitMemoRequestTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_DebitMemoReqPrgElmTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Debit Memo Request - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
        name: 'DebitMemoRequest'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['DebitMemoRequest']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['DebitMemoRequest'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_DebitMemoRequestTP 
  provider contract transactional_interface
  as projection on R_DebitMemoRequestTP as DebitMemoRequest
{
  key DebitMemoRequest.DebitMemoRequest,
  
      DebitMemoRequest.DebitMemoRequestType,
      DebitMemoRequest.DebitMemoRequestDate,
      DebitMemoRequest.ControllingArea,
      DebitMemoRequest.SoldToParty,
      DebitMemoRequest.CustomerName,
      DebitMemoRequest.SalesOrganization,
      DebitMemoRequest.DistributionChannel,
      DebitMemoRequest.OrganizationDivision,
      DebitMemoRequest.ReferenceDistributionChannel,
      DebitMemoRequest.SalesOffice,
      DebitMemoRequest.SalesGroup,
      DebitMemoRequest.SalesDistrict,
      DebitMemoRequest.PurchaseOrderByCustomer,
      DebitMemoRequest.CustomerPurchaseOrderType,
      DebitMemoRequest.CustomerPurchaseOrderDate,
      DebitMemoRequest.CustomerGroup,
      DebitMemoRequest.SDDocumentReason,
      DebitMemoRequest.PricingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequest.TotalNetAmount,
      DebitMemoRequest.TransactionCurrency,
      DebitMemoRequest.HeaderBillingBlockReason,
      DebitMemoRequest.SDPricingProcedure,
      DebitMemoRequest.IncotermsClassification,
      DebitMemoRequest.IncotermsVersion,
      DebitMemoRequest.IncotermsLocation1,
      DebitMemoRequest.IncotermsLocation2,
      DebitMemoRequest.CustomerPaymentTerms,
      DebitMemoRequest.BillingCompanyCode,
      DebitMemoRequest.PaymentMethod,
      DebitMemoRequest.BillingDocumentDate,
      DebitMemoRequest.ServicesRenderedDate,
      DebitMemoRequest.ReferenceSDDocument,
      DebitMemoRequest.ReferenceSDDocumentCategory,
      DebitMemoRequest.CreatedByUser,
      @Consumption.hidden: true
      DebitMemoRequest.CreationDate,
      DebitMemoRequest.CreationTime,
      DebitMemoRequest.SalesDocumentCreationDateTime,
      DebitMemoRequest.LastChangedByUser,
      @Consumption.hidden: true
      DebitMemoRequest.LastChangeDateTime,
      DebitMemoRequest.DebitMemoReqApprovalReason,
      
      //Status
      DebitMemoRequest.SalesDocApprovalStatus,
      DebitMemoRequest.OverallBillingBlockStatus,
      DebitMemoRequest.OverallSDProcessStatus,
      DebitMemoRequest.OverallSDDocumentRejectionSts,
      DebitMemoRequest.OverallOrdReltdBillgStatus,
      DebitMemoRequest.TotalBlockStatus,
      DebitMemoRequest.HdrGeneralIncompletionStatus,
      DebitMemoRequest.OvrlItmGeneralIncompletionSts,
      DebitMemoRequest.OverallSDDocReferenceStatus,
      
      //Compositions
      _Item           : redirected to composition child I_DebitMemoRequestItemTP,
      _Partner        : redirected to composition child I_DebitMemoRequestPartnerTP,
      _Text           : redirected to composition child I_DebitMemoRequestTextTP,
      _PricingElement : redirected to composition child I_DebitMemoReqPrgElmTP 
}
```
