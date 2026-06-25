---
name: I_CUSTOMERRETURNTP
description: Customerreturntp
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
  - customer
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNTP

**Customerreturntp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key CustomerReturn.CustomerReturn` | `CustomerReturn.CustomerReturn` |
| `CustomerReturn.CustomerReturnType` | `CustomerReturn.CustomerReturnType` |
| `CustomerReturn.CustomerReturnDate` | `CustomerReturn.CustomerReturnDate` |
| `CustomerReturn.SoldToParty` | `CustomerReturn.SoldToParty` |
| `CustomerReturn.SalesOrganization` | `CustomerReturn.SalesOrganization` |
| `CustomerReturn.DistributionChannel` | `CustomerReturn.DistributionChannel` |
| `CustomerReturn.OrganizationDivision` | `CustomerReturn.OrganizationDivision` |
| `CustomerReturn.SalesOffice` | `CustomerReturn.SalesOffice` |
| `CustomerReturn.SalesGroup` | `CustomerReturn.SalesGroup` |
| `CustomerReturn.SalesDistrict` | `CustomerReturn.SalesDistrict` |
| `CustomerReturn.CreatedByUser` | `CustomerReturn.CreatedByUser` |
| `CustomerReturn.CreationDate` | `CustomerReturn.CreationDate` |
| `CustomerReturn.LastChangeDate` | `CustomerReturn.LastChangeDate` |
| `CustomerReturn.LastChangeDateTime` | `CustomerReturn.LastChangeDateTime` |
| `CustomerReturn.PurchaseOrderByCustomer` | `CustomerReturn.PurchaseOrderByCustomer` |
| `CustomerReturn.CustomerPurchaseOrderType` | `CustomerReturn.CustomerPurchaseOrderType` |
| `CustomerReturn.CustomerPurchaseOrderDate` | `CustomerReturn.CustomerPurchaseOrderDate` |
| `CustomerReturn.SDDocumentReason` | `CustomerReturn.SDDocumentReason` |
| `CustomerReturn.PricingDate` | `CustomerReturn.PricingDate` |
| `CustomerReturn.RequestedDeliveryDate` | `CustomerReturn.RequestedDeliveryDate` |
| `CustomerReturn.TotalNetAmount` | `CustomerReturn.TotalNetAmount` |
| `CustomerReturn.TransactionCurrency` | `CustomerReturn.TransactionCurrency` |
| `CustomerReturn.HeaderBillingBlockReason` | `CustomerReturn.HeaderBillingBlockReason` |
| `CustomerReturn.DeliveryBlockReason` | `CustomerReturn.DeliveryBlockReason` |
| `CustomerReturn.IncotermsClassification` | `CustomerReturn.IncotermsClassification` |
| `CustomerReturn.IncotermsTransferLocation` | `CustomerReturn.IncotermsTransferLocation` |
| `CustomerReturn.IncotermsLocation1` | `CustomerReturn.IncotermsLocation1` |
| `CustomerReturn.IncotermsLocation2` | `CustomerReturn.IncotermsLocation2` |
| `CustomerReturn.IncotermsVersion` | `CustomerReturn.IncotermsVersion` |
| `CustomerReturn.CustomerPaymentTerms` | `CustomerReturn.CustomerPaymentTerms` |
| `CustomerReturn.PaymentMethod` | `CustomerReturn.PaymentMethod` |
| `CustomerReturn.CustomerReturnApprovalReason` | `CustomerReturn.CustomerReturnApprovalReason` |
| `CustomerReturn.SalesDocApprovalStatus` | `CustomerReturn.SalesDocApprovalStatus` |
| `CustomerReturn.ReferenceSDDocument` | `CustomerReturn.ReferenceSDDocument` |
| `CustomerReturn.ReferenceSDDocumentCategory` | `CustomerReturn.ReferenceSDDocumentCategory` |
| `CustomerReturn.RetsMgmtProcess` | `CustomerReturn.RetsMgmtProcess` |
| `CustomerReturn.RetsMgmtLogProcgStatus` | `CustomerReturn.RetsMgmtLogProcgStatus` |
| `CustomerReturn.RetsMgmtCompnProcgStatus` | `CustomerReturn.RetsMgmtCompnProcgStatus` |
| `CustomerReturn.RetsMgmtProcessingStatus` | `CustomerReturn.RetsMgmtProcessingStatus` |
| `CustomerReturn.OverallSDProcessStatus` | `CustomerReturn.OverallSDProcessStatus` |
| `CustomerReturn.TotalCreditCheckStatus` | `CustomerReturn.TotalCreditCheckStatus` |
| `CustomerReturn.OverallSDDocumentRejectionSts` | `CustomerReturn.OverallSDDocumentRejectionSts` |
| `_Item           : redirected to composition child I_CustomerReturnItemTP` | *Association* |
| `_Partner        : redirected to composition child I_CustomerReturnPartnerTP` | *Association* |
| `_Text           : redirected to composition child I_CustomerReturnTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_CustRetPricingElementTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Returns Order - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
        name: 'CustomerReturn'
   },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CustomerReturn']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH', 
  dataSources: ['CustomerReturn'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_CustomerReturnTP
  provider contract transactional_interface
  as projection on R_CustomerReturnTP as CustomerReturn  
{
  key CustomerReturn.CustomerReturn,

      CustomerReturn.CustomerReturnType,     
      CustomerReturn.CustomerReturnDate,     
      CustomerReturn.SoldToParty,
      CustomerReturn.SalesOrganization,
      CustomerReturn.DistributionChannel,
      CustomerReturn.OrganizationDivision,
      CustomerReturn.SalesOffice,
      CustomerReturn.SalesGroup,
      CustomerReturn.SalesDistrict,

      CustomerReturn.CreatedByUser,
      CustomerReturn.CreationDate,
      CustomerReturn.LastChangeDate,
      CustomerReturn.LastChangeDateTime,
      CustomerReturn.PurchaseOrderByCustomer,
      CustomerReturn.CustomerPurchaseOrderType,
      CustomerReturn.CustomerPurchaseOrderDate,
      CustomerReturn.SDDocumentReason,
      CustomerReturn.PricingDate,
      CustomerReturn.RequestedDeliveryDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustomerReturn.TotalNetAmount,
      CustomerReturn.TransactionCurrency,
      CustomerReturn.HeaderBillingBlockReason,
      CustomerReturn.DeliveryBlockReason,
      CustomerReturn.IncotermsClassification,
      CustomerReturn.IncotermsTransferLocation,
      CustomerReturn.IncotermsLocation1,
      CustomerReturn.IncotermsLocation2,
      CustomerReturn.IncotermsVersion,
      CustomerReturn.CustomerPaymentTerms,
      CustomerReturn.PaymentMethod,
      CustomerReturn.CustomerReturnApprovalReason,
      CustomerReturn.SalesDocApprovalStatus,
      CustomerReturn.ReferenceSDDocument,
      CustomerReturn.ReferenceSDDocumentCategory,
      CustomerReturn.RetsMgmtProcess,
      CustomerReturn.RetsMgmtLogProcgStatus,
      CustomerReturn.RetsMgmtCompnProcgStatus,
      CustomerReturn.RetsMgmtProcessingStatus,
      
      //Status
      CustomerReturn.OverallSDProcessStatus,
      CustomerReturn.TotalCreditCheckStatus,
      CustomerReturn.OverallSDDocumentRejectionSts,

      //Compositions
      _Item           : redirected to composition child I_CustomerReturnItemTP,
      _Partner        : redirected to composition child I_CustomerReturnPartnerTP,
      _Text           : redirected to composition child I_CustomerReturnTextTP,
      _PricingElement : redirected to composition child I_CustRetPricingElementTP  
}
```
