---
name: I_CREDITMEMOREQUESTTP
description: Creditmemorequesttp
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTTP

**Creditmemorequesttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key CreditMemoRequest.CreditMemoRequest` | `CreditMemoRequest.CreditMemoRequest` |
| `CreditMemoRequest.CreditMemoRequestType` | `CreditMemoRequest.CreditMemoRequestType` |
| `CreditMemoRequest.CreditMemoRequestDate` | `CreditMemoRequest.CreditMemoRequestDate` |
| `CreditMemoRequest.ControllingArea` | `CreditMemoRequest.ControllingArea` |
| `CreditMemoRequest.SoldToParty` | `CreditMemoRequest.SoldToParty` |
| `CreditMemoRequest.CustomerName` | `CreditMemoRequest.CustomerName` |
| `CreditMemoRequest.SalesOrganization` | `CreditMemoRequest.SalesOrganization` |
| `CreditMemoRequest.DistributionChannel` | `CreditMemoRequest.DistributionChannel` |
| `CreditMemoRequest.OrganizationDivision` | `CreditMemoRequest.OrganizationDivision` |
| `CreditMemoRequest.ReferenceDistributionChannel` | `CreditMemoRequest.ReferenceDistributionChannel` |
| `CreditMemoRequest.SalesOffice` | `CreditMemoRequest.SalesOffice` |
| `CreditMemoRequest.SalesGroup` | `CreditMemoRequest.SalesGroup` |
| `CreditMemoRequest.SalesDistrict` | `CreditMemoRequest.SalesDistrict` |
| `CreditMemoRequest.PurchaseOrderByCustomer` | `CreditMemoRequest.PurchaseOrderByCustomer` |
| `CreditMemoRequest.CustomerPurchaseOrderType` | `CreditMemoRequest.CustomerPurchaseOrderType` |
| `CreditMemoRequest.CustomerPurchaseOrderDate` | `CreditMemoRequest.CustomerPurchaseOrderDate` |
| `CreditMemoRequest.CustomerGroup` | `CreditMemoRequest.CustomerGroup` |
| `CreditMemoRequest.SDDocumentReason` | `CreditMemoRequest.SDDocumentReason` |
| `CreditMemoRequest.PricingDate` | `CreditMemoRequest.PricingDate` |
| `CreditMemoRequest.TotalNetAmount` | `CreditMemoRequest.TotalNetAmount` |
| `CreditMemoRequest.TransactionCurrency` | `CreditMemoRequest.TransactionCurrency` |
| `CreditMemoRequest.HeaderBillingBlockReason` | `CreditMemoRequest.HeaderBillingBlockReason` |
| `CreditMemoRequest.SDPricingProcedure` | `CreditMemoRequest.SDPricingProcedure` |
| `CreditMemoRequest.IncotermsClassification` | `CreditMemoRequest.IncotermsClassification` |
| `CreditMemoRequest.IncotermsVersion` | `CreditMemoRequest.IncotermsVersion` |
| `CreditMemoRequest.IncotermsLocation1` | `CreditMemoRequest.IncotermsLocation1` |
| `CreditMemoRequest.IncotermsLocation2` | `CreditMemoRequest.IncotermsLocation2` |
| `CreditMemoRequest.CustomerPaymentTerms` | `CreditMemoRequest.CustomerPaymentTerms` |
| `CreditMemoRequest.BillingCompanyCode` | `CreditMemoRequest.BillingCompanyCode` |
| `CreditMemoRequest.PaymentMethod` | `CreditMemoRequest.PaymentMethod` |
| `CreditMemoRequest.BillingDocumentDate` | `CreditMemoRequest.BillingDocumentDate` |
| `CreditMemoRequest.ServicesRenderedDate` | `CreditMemoRequest.ServicesRenderedDate` |
| `CreditMemoRequest.ReferenceSDDocument` | `CreditMemoRequest.ReferenceSDDocument` |
| `CreditMemoRequest.ReferenceSDDocumentCategory` | `CreditMemoRequest.ReferenceSDDocumentCategory` |
| `CreditMemoRequest.CreatedByUser` | `CreditMemoRequest.CreatedByUser` |
| `CreditMemoRequest.CreationDate` | `CreditMemoRequest.CreationDate` |
| `CreditMemoRequest.CreationTime` | `CreditMemoRequest.CreationTime` |
| `CreditMemoRequest.SalesDocumentCreationDateTime` | `CreditMemoRequest.SalesDocumentCreationDateTime` |
| `CreditMemoRequest.LastChangedByUser` | `CreditMemoRequest.LastChangedByUser` |
| `CreditMemoRequest.LastChangeDateTime` | `CreditMemoRequest.LastChangeDateTime` |
| `CreditMemoRequest.CreditMemoReqApprovalReason` | `CreditMemoRequest.CreditMemoReqApprovalReason` |
| `CreditMemoRequest.SalesDocApprovalStatus` | `CreditMemoRequest.SalesDocApprovalStatus` |
| `CreditMemoRequest.OverallBillingBlockStatus` | `CreditMemoRequest.OverallBillingBlockStatus` |
| `CreditMemoRequest.OverallSDProcessStatus` | `CreditMemoRequest.OverallSDProcessStatus` |
| `CreditMemoRequest.OverallSDDocumentRejectionSts` | `CreditMemoRequest.OverallSDDocumentRejectionSts` |
| `CreditMemoRequest.OverallOrdReltdBillgStatus` | `CreditMemoRequest.OverallOrdReltdBillgStatus` |
| `CreditMemoRequest.TotalBlockStatus` | `CreditMemoRequest.TotalBlockStatus` |
| `CreditMemoRequest.HdrGeneralIncompletionStatus` | `CreditMemoRequest.HdrGeneralIncompletionStatus` |
| `CreditMemoRequest.OvrlItmGeneralIncompletionSts` | `CreditMemoRequest.OvrlItmGeneralIncompletionSts` |
| `CreditMemoRequest.OverallSDDocReferenceStatus` | `CreditMemoRequest.OverallSDDocReferenceStatus` |
| `_Item    : redirected to composition child        I_CreditMemoRequestItemTP` | *Association* |
| `_Partner    : redirected to composition child     I_CreditMemoRequestPartnerTP` | *Association* |
| `_Text    : redirected to composition child        I_CreditMemoRequestTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_CrdtMemoReqPrcgElmntTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType:{
        name: 'CreditMemoRequest'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CreditMemoRequest']
 }
 
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['CreditMemoRequest'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_CreditMemoRequestTP
  provider contract transactional_interface
  as projection on R_CreditMemoRequestTP as CreditMemoRequest
{
  key CreditMemoRequest.CreditMemoRequest,  
  
      CreditMemoRequest.CreditMemoRequestType,
      CreditMemoRequest.CreditMemoRequestDate,
      CreditMemoRequest.ControllingArea,
      CreditMemoRequest.SoldToParty,
      CreditMemoRequest.CustomerName,
      CreditMemoRequest.SalesOrganization,
      CreditMemoRequest.DistributionChannel,
      CreditMemoRequest.OrganizationDivision,
      CreditMemoRequest.ReferenceDistributionChannel,
      CreditMemoRequest.SalesOffice,
      CreditMemoRequest.SalesGroup,
      CreditMemoRequest.SalesDistrict,
      
      CreditMemoRequest.PurchaseOrderByCustomer,
      CreditMemoRequest.CustomerPurchaseOrderType,
      CreditMemoRequest.CustomerPurchaseOrderDate,
      CreditMemoRequest.CustomerGroup,
      CreditMemoRequest.SDDocumentReason,
      CreditMemoRequest.PricingDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequest.TotalNetAmount,
      CreditMemoRequest.TransactionCurrency,
      CreditMemoRequest.HeaderBillingBlockReason,
      CreditMemoRequest.SDPricingProcedure,
      CreditMemoRequest.IncotermsClassification,
      CreditMemoRequest.IncotermsVersion,
      CreditMemoRequest.IncotermsLocation1,
      CreditMemoRequest.IncotermsLocation2,
      CreditMemoRequest.CustomerPaymentTerms,
      CreditMemoRequest.BillingCompanyCode,
      CreditMemoRequest.PaymentMethod,
      CreditMemoRequest.BillingDocumentDate,
      CreditMemoRequest.ServicesRenderedDate,
      CreditMemoRequest.ReferenceSDDocument,
      CreditMemoRequest.ReferenceSDDocumentCategory,
      
      CreditMemoRequest.CreatedByUser,
      @Consumption.hidden: true
      CreditMemoRequest.CreationDate,
      CreditMemoRequest.CreationTime,
      CreditMemoRequest.SalesDocumentCreationDateTime,
      CreditMemoRequest.LastChangedByUser,
      @Consumption.hidden: true
      CreditMemoRequest.LastChangeDateTime,
      CreditMemoRequest.CreditMemoReqApprovalReason,
      
      //Status
      CreditMemoRequest.SalesDocApprovalStatus,
      CreditMemoRequest.OverallBillingBlockStatus,
      CreditMemoRequest.OverallSDProcessStatus,
      CreditMemoRequest.OverallSDDocumentRejectionSts,
      CreditMemoRequest.OverallOrdReltdBillgStatus,
      CreditMemoRequest.TotalBlockStatus,
      CreditMemoRequest.HdrGeneralIncompletionStatus,
      CreditMemoRequest.OvrlItmGeneralIncompletionSts,
      CreditMemoRequest.OverallSDDocReferenceStatus,
      
      //Compositions
      _Item    : redirected to composition child        I_CreditMemoRequestItemTP,
      _Partner    : redirected to composition child     I_CreditMemoRequestPartnerTP,
      _Text    : redirected to composition child        I_CreditMemoRequestTextTP,
      _PricingElement : redirected to composition child I_CrdtMemoReqPrcgElmntTP 
  
}
```
