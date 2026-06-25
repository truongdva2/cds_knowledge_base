---
name: I_SALESSCHEDULINGAGREEMENTTP
description: Salesschedulingagreementtp
app_component: SD-SLS-OA-SCH-2CL
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
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDULINGAGREEMENTTP

**Salesschedulingagreementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesSchedulingAgreement.SalesSchedulingAgreement` | `SalesSchedulingAgreement.SalesSchedulingAgreement` |
| `SalesSchedulingAgreement.SalesSchedgAgrmtType` | `SalesSchedulingAgreement.SalesSchedgAgrmtType` |
| `SalesSchedulingAgreement.SalesOrganization` | `SalesSchedulingAgreement.SalesOrganization` |
| `SalesSchedulingAgreement.DistributionChannel` | `SalesSchedulingAgreement.DistributionChannel` |
| `SalesSchedulingAgreement.OrganizationDivision` | `SalesSchedulingAgreement.OrganizationDivision` |
| `SalesSchedulingAgreement.SoldToParty` | `SalesSchedulingAgreement.SoldToParty` |
| `SalesSchedulingAgreement.CustomerGroup` | `SalesSchedulingAgreement.CustomerGroup` |
| `SalesSchedulingAgreement.PurchaseOrderByCustomer` | `SalesSchedulingAgreement.PurchaseOrderByCustomer` |
| `SalesSchedulingAgreement.AgrmtValdtyStartDate` | `SalesSchedulingAgreement.AgrmtValdtyStartDate` |
| `SalesSchedulingAgreement.AgrmtValdtyEndDate` | `SalesSchedulingAgreement.AgrmtValdtyEndDate` |
| `SalesSchedulingAgreement.SalesSchedgAgrmtDate` | `SalesSchedulingAgreement.SalesSchedgAgrmtDate` |
| `SalesSchedulingAgreement.SDDocumentReason` | `SalesSchedulingAgreement.SDDocumentReason` |
| `SalesSchedulingAgreement.IncotermsClassification` | `SalesSchedulingAgreement.IncotermsClassification` |
| `SalesSchedulingAgreement.IncotermsTransferLocation` | `SalesSchedulingAgreement.IncotermsTransferLocation` |
| `SalesSchedulingAgreement.IncotermsLocation1` | `SalesSchedulingAgreement.IncotermsLocation1` |
| `SalesSchedulingAgreement.IncotermsLocation2` | `SalesSchedulingAgreement.IncotermsLocation2` |
| `SalesSchedulingAgreement.IncotermsVersion` | `SalesSchedulingAgreement.IncotermsVersion` |
| `SalesSchedulingAgreement.CustomerPaymentTerms` | `SalesSchedulingAgreement.CustomerPaymentTerms` |
| `SalesSchedulingAgreement.PaymentMethod` | `SalesSchedulingAgreement.PaymentMethod` |
| `SalesSchedulingAgreement.PricingDate` | `SalesSchedulingAgreement.PricingDate` |
| `SalesSchedulingAgreement.SalesGroup` | `SalesSchedulingAgreement.SalesGroup` |
| `SalesSchedulingAgreement.SalesOffice` | `SalesSchedulingAgreement.SalesOffice` |
| `SalesSchedulingAgreement.SalesDistrict` | `SalesSchedulingAgreement.SalesDistrict` |
| `SalesSchedulingAgreement.CreatedByUser` | `SalesSchedulingAgreement.CreatedByUser` |
| `SalesSchedulingAgreement.LastChangedByUser` | `SalesSchedulingAgreement.LastChangedByUser` |
| `SalesSchedulingAgreement.SalesDocumentCreationDateTime` | `SalesSchedulingAgreement.SalesDocumentCreationDateTime` |
| `SalesSchedulingAgreement.CreationDate` | `SalesSchedulingAgreement.CreationDate` |
| `SalesSchedulingAgreement.CreationTime` | `SalesSchedulingAgreement.CreationTime` |
| `SalesSchedulingAgreement.LastChangeDate` | `SalesSchedulingAgreement.LastChangeDate` |
| `SalesSchedulingAgreement.LastChangeDateTime` | `SalesSchedulingAgreement.LastChangeDateTime` |
| `SalesSchedulingAgreement.OverallSDDocumentRejectionSts` | `SalesSchedulingAgreement.OverallSDDocumentRejectionSts` |
| `SalesSchedulingAgreement.OverallSDProcessStatus` | `SalesSchedulingAgreement.OverallSDProcessStatus` |
| `SalesSchedulingAgreement.DelivSchedTypeMRPRlvnceCode` | `SalesSchedulingAgreement.DelivSchedTypeMRPRlvnceCode` |
| `SalesSchedulingAgreement.MatlUsageIndicator` | `SalesSchedulingAgreement.MatlUsageIndicator` |
| `SalesSchedulingAgreement.TotalNetAmount` | `SalesSchedulingAgreement.TotalNetAmount` |
| `SalesSchedulingAgreement.TransactionCurrency` | `SalesSchedulingAgreement.TransactionCurrency` |
| `_Item           : redirected to composition child I_SlsSchedulingAgreementItemTP` | *Association* |
| `_Partner        : redirected to composition child I_SlsSchedgAgrmtPartnerTP` | *Association* |
| `_Text           : redirected to composition child I_SlsSchedgAgrmtTextTP` | *Association* |
| `_PricingElement : redirected to composition child I_SlsSchedgAgrmtPrcgElmntTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement - TP' 

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType.name: 'SalesSchedulingAgreement',
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesSchedulingAgreement']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['SalesSchedulingAgreement'],  
  elementSuffix: 'SDH',
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800
  }  
} 

define root view entity I_SalesSchedulingAgreementTP 
provider contract transactional_interface
  as projection on R_SalesSchedgAgrmtTP as SalesSchedulingAgreement 
{
  key SalesSchedulingAgreement.SalesSchedulingAgreement,
      SalesSchedulingAgreement.SalesSchedgAgrmtType,
      SalesSchedulingAgreement.SalesOrganization,
      SalesSchedulingAgreement.DistributionChannel,
      SalesSchedulingAgreement.OrganizationDivision,
      SalesSchedulingAgreement.SoldToParty,
      SalesSchedulingAgreement.CustomerGroup,
      SalesSchedulingAgreement.PurchaseOrderByCustomer,
      SalesSchedulingAgreement.AgrmtValdtyStartDate,
      SalesSchedulingAgreement.AgrmtValdtyEndDate,
      SalesSchedulingAgreement.SalesSchedgAgrmtDate,
      SalesSchedulingAgreement.SDDocumentReason,
      SalesSchedulingAgreement.IncotermsClassification,
      SalesSchedulingAgreement.IncotermsTransferLocation,
      SalesSchedulingAgreement.IncotermsLocation1,
      SalesSchedulingAgreement.IncotermsLocation2,
      SalesSchedulingAgreement.IncotermsVersion,
      SalesSchedulingAgreement.CustomerPaymentTerms,
      SalesSchedulingAgreement.PaymentMethod,
      SalesSchedulingAgreement.PricingDate,
      SalesSchedulingAgreement.SalesGroup,
      SalesSchedulingAgreement.SalesOffice,
      SalesSchedulingAgreement.SalesDistrict,
      SalesSchedulingAgreement.CreatedByUser,
      SalesSchedulingAgreement.LastChangedByUser,
      SalesSchedulingAgreement.SalesDocumentCreationDateTime,
      SalesSchedulingAgreement.CreationDate,
      SalesSchedulingAgreement.CreationTime,
      SalesSchedulingAgreement.LastChangeDate,
      SalesSchedulingAgreement.LastChangeDateTime,
      SalesSchedulingAgreement.OverallSDDocumentRejectionSts,
      SalesSchedulingAgreement.OverallSDProcessStatus,
      SalesSchedulingAgreement.DelivSchedTypeMRPRlvnceCode,
      SalesSchedulingAgreement.MatlUsageIndicator,
       
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesSchedulingAgreement.TotalNetAmount,
      SalesSchedulingAgreement.TransactionCurrency,
    
      //Compositions
      _Item           : redirected to composition child I_SlsSchedulingAgreementItemTP,
      _Partner        : redirected to composition child I_SlsSchedgAgrmtPartnerTP,
      _Text           : redirected to composition child I_SlsSchedgAgrmtTextTP,
      _PricingElement : redirected to composition child I_SlsSchedgAgrmtPrcgElmntTP
}
```
