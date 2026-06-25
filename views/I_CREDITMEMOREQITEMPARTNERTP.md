---
name: I_CREDITMEMOREQITEMPARTNERTP
description: Creditmemoreqitempartnertp
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
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQITEMPARTNERTP

**Creditmemoreqitempartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key CreditMemoReqItemPartner.CreditMemoRequest` | `CreditMemoReqItemPartner.CreditMemoRequest` |
| `key CreditMemoReqItemPartner.CreditMemoRequestItem` | `CreditMemoReqItemPartner.CreditMemoRequestItem` |
| `key CreditMemoReqItemPartner.PartnerFunction` | `CreditMemoReqItemPartner.PartnerFunction` |
| `CreditMemoReqItemPartner.PartnerFunctionForEdit` | `CreditMemoReqItemPartner.PartnerFunctionForEdit` |
| `CreditMemoReqItemPartner.Customer` | `CreditMemoReqItemPartner.Customer` |
| `CreditMemoReqItemPartner.Supplier` | `CreditMemoReqItemPartner.Supplier` |
| `CreditMemoReqItemPartner.Personnel` | `CreditMemoReqItemPartner.Personnel` |
| `CreditMemoReqItemPartner.ContactPerson` | `CreditMemoReqItemPartner.ContactPerson` |
| `CreditMemoReqItemPartner.ReferenceBusinessPartner` | `CreditMemoReqItemPartner.ReferenceBusinessPartner` |
| `CreditMemoReqItemPartner.Partner` | `CreditMemoReqItemPartner.Partner` |
| `CreditMemoReqItemPartner.PartnerIsSpecificForSDDocItem` | `CreditMemoReqItemPartner.PartnerIsSpecificForSDDocItem` |
| `CreditMemoReqItemPartner.CreditMemoRequestType` | `CreditMemoReqItemPartner.CreditMemoRequestType` |
| `CreditMemoReqItemPartner.SalesOrganization` | `CreditMemoReqItemPartner.SalesOrganization` |
| `CreditMemoReqItemPartner.DistributionChannel` | `CreditMemoReqItemPartner.DistributionChannel` |
| `CreditMemoReqItemPartner.OrganizationDivision` | `CreditMemoReqItemPartner.OrganizationDivision` |
| `_Item       : redirected to parent I_CreditMemoRequestItemTP` | *Association* |
| `_CreditMemoRequest : redirected to I_CreditMemoRequestTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item Partner - TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CreditMemoRequest', 'CreditMemoRequestItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CreditMemoReqItemPartnerTP 
  as projection on R_CreditMemoReqItemPartnerTP as  CreditMemoReqItemPartner{
  key CreditMemoReqItemPartner.CreditMemoRequest,
  key CreditMemoReqItemPartner.CreditMemoRequestItem,
  key CreditMemoReqItemPartner.PartnerFunction,

      @ObjectModel.editableFieldFor: 'PartnerFunction'
      CreditMemoReqItemPartner.PartnerFunctionForEdit,
      CreditMemoReqItemPartner.Customer,
      CreditMemoReqItemPartner.Supplier,
      CreditMemoReqItemPartner.Personnel,
      CreditMemoReqItemPartner.ContactPerson,
      CreditMemoReqItemPartner.ReferenceBusinessPartner,
      CreditMemoReqItemPartner.Partner,
      CreditMemoReqItemPartner.PartnerIsSpecificForSDDocItem,

      //    DCL
      @Consumption.hidden: true
      CreditMemoReqItemPartner.CreditMemoRequestType,
      @Consumption.hidden: true
      CreditMemoReqItemPartner.SalesOrganization,
      @Consumption.hidden: true
      CreditMemoReqItemPartner.DistributionChannel,
      @Consumption.hidden: true
      CreditMemoReqItemPartner.OrganizationDivision,

      //Composition
      _Item       : redirected to parent I_CreditMemoRequestItemTP,
      _CreditMemoRequest : redirected to I_CreditMemoRequestTP
      
}
```
