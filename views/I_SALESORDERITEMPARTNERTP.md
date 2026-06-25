---
name: I_SALESORDERITEMPARTNERTP
description: Sales OrderITEMPARTNERTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - item-level
  - partner
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMPARTNERTP

**Sales OrderITEMPARTNERTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesOrderItemPartner.SalesOrder` | `SalesOrderItemPartner.SalesOrder` |
| `key SalesOrderItemPartner.SalesOrderItem` | `SalesOrderItemPartner.SalesOrderItem` |
| `key SalesOrderItemPartner.PartnerFunction` | `SalesOrderItemPartner.PartnerFunction` |
| `SalesOrderItemPartner.PartnerFunctionForEdit` | `SalesOrderItemPartner.PartnerFunctionForEdit` |
| `SalesOrderItemPartner.Customer` | `SalesOrderItemPartner.Customer` |
| `SalesOrderItemPartner.Supplier` | `SalesOrderItemPartner.Supplier` |
| `SalesOrderItemPartner.Personnel` | `SalesOrderItemPartner.Personnel` |
| `SalesOrderItemPartner.ContactPerson` | `SalesOrderItemPartner.ContactPerson` |
| `SalesOrderItemPartner.ReferenceBusinessPartner` | `SalesOrderItemPartner.ReferenceBusinessPartner` |
| `SalesOrderItemPartner.Partner` | `SalesOrderItemPartner.Partner` |
| `SalesOrderItemPartner.PartnerIsSpecificForSDDocItem` | `SalesOrderItemPartner.PartnerIsSpecificForSDDocItem` |
| `SalesOrderItemPartner.SalesOrderType` | `SalesOrderItemPartner.SalesOrderType` |
| `SalesOrderItemPartner.SalesOrganization` | `SalesOrderItemPartner.SalesOrganization` |
| `SalesOrderItemPartner.DistributionChannel` | `SalesOrderItemPartner.DistributionChannel` |
| `SalesOrderItemPartner.OrganizationDivision` | `SalesOrderItemPartner.OrganizationDivision` |
| `_Item       : redirected to parent I_SalesOrderItemTP` | *Association* |
| `_SalesOrder : redirected to I_SalesOrderTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Order Item Partner - TP'

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
   semanticKey: ['SalesOrder', 'SalesOrderItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderItemPartnerTP
  as projection on R_SalesOrderItemPartnerTP as SalesOrderItemPartner
{
  key SalesOrderItemPartner.SalesOrder,
  key SalesOrderItemPartner.SalesOrderItem,
  key SalesOrderItemPartner.PartnerFunction,

      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesOrderItemPartner.PartnerFunctionForEdit,
      SalesOrderItemPartner.Customer,
      SalesOrderItemPartner.Supplier,
      SalesOrderItemPartner.Personnel,
      SalesOrderItemPartner.ContactPerson,
      SalesOrderItemPartner.ReferenceBusinessPartner,
      SalesOrderItemPartner.Partner,
      SalesOrderItemPartner.PartnerIsSpecificForSDDocItem,

      //    DCL
      @Consumption.hidden: true
      SalesOrderItemPartner.SalesOrderType,
      @Consumption.hidden: true
      SalesOrderItemPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderItemPartner.DistributionChannel,
      @Consumption.hidden: true
      SalesOrderItemPartner.OrganizationDivision,

      //Composition
      _Item       : redirected to parent I_SalesOrderItemTP,
      _SalesOrder : redirected to I_SalesOrderTP
}
```
