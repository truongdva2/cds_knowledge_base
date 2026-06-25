---
name: I_BILLINGDOCREQPARTNER
description: Billing DocumentREQPARTNER
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - interface-view
  - billing-document
  - billing
  - partner
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCREQPARTNER

**Billing DocumentREQPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `name:    'I_BillingDocumentRequestStdVH'` | `name:    'I_BillingDocumentRequestStdVH'` |
| `element: 'BillingDocumentRequest' }` | `element: 'BillingDocumentRequest' }` |
| `}]` | `}]` |
| `vbeln_bdr preserving type )` | `cast( Partner.BillingDocument` |
| `parvw_unv preserving type )` | `cast(Partner.PartnerFunction` |
| `Partner.Customer` | `Partner.Customer` |
| `Partner.Supplier` | `Partner.Supplier` |
| `Partner.Personnel` | `Partner.Personnel` |
| `Partner.AddressID` | `Partner.AddressID` |
| `Partner.ContactPerson` | `Partner.ContactPerson` |
| `Partner.AddressPersonID` | `Partner.AddressPersonID` |
| `Partner.ReferenceBusinessPartner` | `Partner.ReferenceBusinessPartner` |
| `Partner.SDDocPartnerAddressRefType` | `Partner.SDDocPartnerAddressRefType` |
| `Partner.BPRefAddressIDForDocSpcfcAddr` | `Partner.BPRefAddressIDForDocSpcfcAddr` |
| `_BillingDocumentRequest` | *Association* |
| `Partner._PartnerFunction` | `Partner._PartnerFunction` |
| `Partner._Address` | `Partner._Address` |
| `Partner._BusinessPartnerAddress` | `Partner._BusinessPartnerAddress` |
| `Partner._BPRefAddressForDocSpcfcAddr` | `Partner._BPRefAddressForDocSpcfcAddr` |
| `Partner._DfltAddrRprstn` | `Partner._DfltAddrRprstn` |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Billing Document Request Partner'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),  
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDBDRQPT',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]         
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocReqPartner as select from I_BillingDocumentPartnerBasic as Partner
    
    association[1..1] to I_BillingDocumentRequest     as _BillingDocumentRequest          on  $projection.BillingDocumentRequest          = _BillingDocumentRequest.BillingDocumentRequest
               
{
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_BillingDocumentRequestStdVH',
                   element: 'BillingDocumentRequest' }
      }]                                         
    @ObjectModel.foreignKey.association: '_BillingDocumentRequest'
    key cast( Partner.BillingDocument as vbeln_bdr preserving type ) as BillingDocumentRequest,
                                                                                                   
    @ObjectModel.foreignKey.association: '_PartnerFunction'
    key cast(Partner.PartnerFunction as parvw_unv preserving type ) as PartnerFunction,    
    
    Partner.Customer,
    
    Partner.Supplier,
    
    Partner.Personnel,

    @ObjectModel.foreignKey.association: '_Address'
    Partner.AddressID,
    
    Partner.ContactPerson,
    
    Partner.AddressPersonID,
    Partner.ReferenceBusinessPartner,
    Partner.SDDocPartnerAddressRefType,
    Partner.BPRefAddressIDForDocSpcfcAddr,
    
    //Association
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
    _BillingDocumentRequest,
    Partner._PartnerFunction,
    Partner._Address,
    Partner._BusinessPartnerAddress,
    Partner._BPRefAddressForDocSpcfcAddr,  
    Partner._DfltAddrRprstn    
}
where _BillingDocumentRequest.SDDocumentCategory = 'EBDR'
```
