---
name: I_SALESORDERPARTNERTP
description: Sales OrderPARTNERTP
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
  - partner
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERPARTNERTP

**Sales OrderPARTNERTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesOrderPartner.SalesOrder` | `SalesOrderPartner.SalesOrder` |
| `key SalesOrderPartner.PartnerFunction` | `SalesOrderPartner.PartnerFunction` |
| `SalesOrderPartner.PartnerFunctionForEdit` | `SalesOrderPartner.PartnerFunctionForEdit` |
| `SalesOrderPartner.Customer` | `SalesOrderPartner.Customer` |
| `SalesOrderPartner.Supplier` | `SalesOrderPartner.Supplier` |
| `SalesOrderPartner.Personnel` | `SalesOrderPartner.Personnel` |
| `SalesOrderPartner.ContactPerson` | `SalesOrderPartner.ContactPerson` |
| `SalesOrderPartner.ReferenceBusinessPartner` | `SalesOrderPartner.ReferenceBusinessPartner` |
| `SalesOrderPartner.Partner` | `SalesOrderPartner.Partner` |
| `SalesOrderPartner.SalesOrderType` | `SalesOrderPartner.SalesOrderType` |
| `SalesOrderPartner.SalesOrganization` | `SalesOrderPartner.SalesOrganization` |
| `SalesOrderPartner.DistributionChannel` | `SalesOrderPartner.DistributionChannel` |
| `SalesOrderPartner.OrganizationDivision` | `SalesOrderPartner.OrganizationDivision` |
| `_SalesOrder : redirected to parent I_SalesOrderTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Order Partner - TP'

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
   semanticKey: ['SalesOrder', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderPartnerTP
  as projection on R_SalesOrderPartnerTP as SalesOrderPartner  
{
  key SalesOrderPartner.SalesOrder,
  key SalesOrderPartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesOrderPartner.PartnerFunctionForEdit,
      SalesOrderPartner.Customer,
      SalesOrderPartner.Supplier,
      SalesOrderPartner.Personnel,
      SalesOrderPartner.ContactPerson,
      SalesOrderPartner.ReferenceBusinessPartner,
      SalesOrderPartner.Partner,     
            
      //    DCL
      @Consumption.hidden: true
      SalesOrderPartner.SalesOrderType,
      @Consumption.hidden: true
      SalesOrderPartner.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderPartner.DistributionChannel,
      @Consumption.hidden: true
     SalesOrderPartner.OrganizationDivision,  
      
      //Composition
      _SalesOrder : redirected to parent I_SalesOrderTP      
}
```
