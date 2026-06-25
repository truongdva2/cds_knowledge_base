---
name: I_SALESCONTRACTTP
description: Salescontracttp
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
  - sales-contract
  - contract
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTTP

**Salescontracttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key   SalesContract.SalesContract` | `SalesContract.SalesContract` |
| `SalesContract.SalesContractType` | `SalesContract.SalesContractType` |
| `SalesContract.SoldToParty` | `SalesContract.SoldToParty` |
| `SalesContract.SalesOrganization` | `SalesContract.SalesOrganization` |
| `SalesContract.DistributionChannel` | `SalesContract.DistributionChannel` |
| `SalesContract.OrganizationDivision` | `SalesContract.OrganizationDivision` |
| `SalesContract.SalesOffice` | `SalesContract.SalesOffice` |
| `SalesContract.SalesGroup` | `SalesContract.SalesGroup` |
| `SalesContract.SalesDistrict` | `SalesContract.SalesDistrict` |
| `SalesContract.PurchaseOrderByCustomer` | `SalesContract.PurchaseOrderByCustomer` |
| `SalesContract.CustomerGroup` | `SalesContract.CustomerGroup` |
| `SalesContract.SDDocumentReason` | `SalesContract.SDDocumentReason` |
| `SalesContract.PricingDate` | `SalesContract.PricingDate` |
| `SalesContract.SalesContractValidityStartDate` | `SalesContract.SalesContractValidityStartDate` |
| `SalesContract.SalesContractValidityEndDate` | `SalesContract.SalesContractValidityEndDate` |
| `SalesContract.SalesContractValidityPerdCat` | `SalesContract.SalesContractValidityPerdCat` |
| `SalesContract.IncotermsClassification` | `SalesContract.IncotermsClassification` |
| `SalesContract.IncotermsVersion` | `SalesContract.IncotermsVersion` |
| `SalesContract.IncotermsLocation1` | `SalesContract.IncotermsLocation1` |
| `SalesContract.IncotermsLocation2` | `SalesContract.IncotermsLocation2` |
| `SalesContract.IncotermsTransferLocation` | `SalesContract.IncotermsTransferLocation` |
| `SalesContract.SalesContractApprovalReason` | `SalesContract.SalesContractApprovalReason` |
| `SalesContract.CustomerPaymentTerms` | `SalesContract.CustomerPaymentTerms` |
| `SalesContract.PaymentMethod` | `SalesContract.PaymentMethod` |
| `SalesContract.TransactionCurrency` | `SalesContract.TransactionCurrency` |
| `SalesContract.TotalNetAmount` | `SalesContract.TotalNetAmount` |
| `SalesContract.LastChangeDateTime` | `SalesContract.LastChangeDateTime` |
| `SalesContract.OverallSDProcessStatus` | `SalesContract.OverallSDProcessStatus` |
| `SalesContract.SalesDocApprovalStatus` | `SalesContract.SalesDocApprovalStatus` |
| `SalesContract.SalesContractDate` | `SalesContract.SalesContractDate` |
| `SalesContract.CreatedByUser` | `SalesContract.CreatedByUser` |
| `SalesContract.CreationDate` | `SalesContract.CreationDate` |
| `SalesContract.CreationTime` | `SalesContract.CreationTime` |
| `SalesContract.LastChangedByUser` | `SalesContract.LastChangedByUser` |
| `_Item           : redirected to composition child I_SalesContractItemTP` | *Association* |
| `_Text           : redirected to composition child I_SalesContractTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_SlsContrPricingElementTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Contract - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'SalesContract',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesContract']
 }

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDH',
  dataSources: ['SalesContract'],
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_SalesContractTP
  provider contract transactional_interface
  as projection on R_SalesContractTP as SalesContract
{
  key   SalesContract.SalesContract,

        SalesContract.SalesContractType,
        SalesContract.SoldToParty,
        SalesContract.SalesOrganization,
        SalesContract.DistributionChannel,
        SalesContract.OrganizationDivision,
        SalesContract.SalesOffice,
        SalesContract.SalesGroup,
        SalesContract.SalesDistrict,
        SalesContract.PurchaseOrderByCustomer,
        SalesContract.CustomerGroup,
        SalesContract.SDDocumentReason,
        SalesContract.PricingDate,

        SalesContract.SalesContractValidityStartDate,
        SalesContract.SalesContractValidityEndDate,
        SalesContract.SalesContractValidityPerdCat,

        SalesContract.IncotermsClassification,
        SalesContract.IncotermsVersion,
        SalesContract.IncotermsLocation1,
        SalesContract.IncotermsLocation2,
        SalesContract.IncotermsTransferLocation,

        SalesContract.SalesContractApprovalReason,
        SalesContract.CustomerPaymentTerms,
        SalesContract.PaymentMethod,

        SalesContract.TransactionCurrency,
        @Semantics.amount.currencyCode: 'TransactionCurrency'
        SalesContract.TotalNetAmount,
        SalesContract.LastChangeDateTime,

        SalesContract.OverallSDProcessStatus,
        SalesContract.SalesDocApprovalStatus,

        SalesContract.SalesContractDate,
        SalesContract.CreatedByUser,
        SalesContract.CreationDate,
        SalesContract.CreationTime,
        SalesContract.LastChangedByUser,

        //Compositions
        _Item           : redirected to composition child I_SalesContractItemTP,
        //        _Partner        : redirected to composition child I_SalesContractPartnerTP,
        _Text           : redirected to composition child I_SalesContractTextTP,
        _PricingElement : redirected to composition child I_SlsContrPricingElementTP

}
```
