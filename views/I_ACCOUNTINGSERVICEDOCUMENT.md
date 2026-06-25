---
name: I_ACCOUNTINGSERVICEDOCUMENT
description: ACCOUNTINGService DocumentUMENT
app_component: CO-PC-OBJ-SRV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - service
  - document
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCOUNTINGSERVICEDOCUMENT

**ACCOUNTINGService DocumentUMENT**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `currencyCode: 'TransactionCurrency'} }` | `currencyCode: 'TransactionCurrency'} }` |
| `_ServiceDocument.ServiceDocTaxAmount` | *Association* |
| `_ServiceDocument.ServiceDefectSchema` | *Association* |
| `_ServiceDocument.ServiceDefectCategory` | *Association* |
| `_ServiceDocument.ServiceFirstResponseByDateTime` | *Association* |
| `_ServiceDocument.ServiceDueByDateTime` | *Association* |
| `_ServiceDocument.RecommendedServicePriority` | *Association* |
| `_ServiceDocument.ServiceDocumentUrgency` | *Association* |
| `_ServiceDocument.ServiceDocumentImpact` | *Association* |
| `_ServiceDocument.ServiceDocumentProblemCategory` | *Association* |
| `_ServiceDocument.ServiceReasonSchema` | *Association* |
| `_ServiceDocument.ServiceReasonCategory` | *Association* |
| `_ServiceDocument.ServiceConfirmationIsFinal` | *Association* |
| `_ServiceDocument.Region` | *Association* |
| `_ServiceDocument.ServiceRisk` | *Association* |
| `_ServiceDocument` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocument._ActivityCategory` | *Association* |
| `_ServiceDocument._BillingBlockReason` | *Association* |
| `_ServiceDocument._ServiceDocBillingStatus` | *Association* |
| `_ServiceDocument._ServiceDocHasError` | *Association* |
| `_ServiceDocument._ServiceDocumentPriority` | *Association* |
| `_ServiceDocument._ServiceDocumentStatus` | *Association* |
| `_ServiceDocument._SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocument._ServiceEmployee` | *Association* |
| `_ServiceDocument._ServiceObjType` | *Association* |
| `_ServiceDocument._ServiceTeam` | *Association* |
| `_ServiceDocument._SoldToParty` | *Association* |
| `_ServiceDocument._SrvcDocIsRelForBillgSts` | *Association* |
| `_ServiceDocument._TransactionCurrency` | *Association* |
| `_ServiceDocument._ServiceDocumentIsOpen` | *Association* |
| `_ServiceDocument._PaymentTerms` | *Association* |
| `_ServiceDocument._SalesOrganization` | *Association* |
| `_ServiceDocument._SalesOffice` | *Association* |
| `_ServiceDocument._SalesGroup` | *Association* |
| `_ServiceDocument._SalesOrganizationOrgUnit_2` | *Association* |
| `_ServiceDocument._SalesOfficeOrgUnit_2` | *Association* |
| `_ServiceDocument._SalesGroupOrgUnit_2` | *Association* |
| `_ServiceDocument._SoldToPartyCountry` | *Association* |
| `_ServiceDocument._SoldToPartyRegion` | *Association* |
| `_ServiceDocument._Region` | *Association* |
| `_ServiceDocument._ServiceRisk` | *Association* |
| `_ServiceDocument._SrvcDocumentRejectionReason` | *Association* |
| `_ServiceDocument._ServiceDocProblemCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_AcctgServiceDocumentType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Accounting Service Document'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'ServiceDocument'
@ObjectModel.semanticKey: ['ServiceDocument', 'ServiceDocumentType']
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:
  [ #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ]
@VDM.viewType: #COMPOSITE
@Search.searchable: true

define view entity I_AccountingServiceDocument
  as select from P_AcctgServiceDocumentItem
  association [0..1] to I_AcctgServiceDocumentType as _ServiceDocumentType on $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
{
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
      @ObjectModel.text.element: ['ServiceDocumentDescription']
  key ServiceDocument,

      @Semantics.text: true
      ServiceDocumentDescription,

      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      ServiceDocumentTypeName,



      @ObjectModel.foreignKey.association: '_ServiceObjType'
      _ServiceDocument.ServiceObjectType,
      _ServiceDocument.ServiceDocumentUUID,
      _ServiceDocument.PricingDocument,
      _ServiceDocument.PricingProcedure,
      _ServiceDocument.RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      _ServiceDocument.SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      _ServiceDocument.ServiceTeam,
//      @ObjectModel.foreignKey.association: '_ServiceDocument._RespEmployee'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'RespEmployeeBusinessPartnerId'
//      cast( _ServiceDocument.ResponsibleEmployee as resp_empl) as ResponsibleEmployee,
      cast( _ServiceDocument.ResponsibleEmployee as fco_srvdoc_resp_empl_deprec) as ResponsibleEmployee,
      _ServiceDocument.ResponsibleEmployee as RespEmployeeBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      _ServiceDocument.ServiceEmployee,
//      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast( _ServiceDocument.ContactPerson as parnr ) as ContactPerson,
//      _ServiceDocument.ContactPerson,

      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      _ServiceDocument.ServiceDocumentPriority,
      _ServiceDocument.PostingDate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _ServiceDocument.PaymentTerms,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _ServiceDocument.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocGrossAmount,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      _ServiceDocument.SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      _ServiceDocument.SoldToPartyRegion,
      _ServiceDocument.PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      _ServiceDocument.ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      _ServiceDocument.ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsOpen,
      _ServiceDocument.ServiceOrganization,
      _ServiceDocument.ResponsibleServiceOrganization,

      _ServiceDocument.ServiceDocCreationDateTime,
      _ServiceDocument.ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( cast(substring( cast(_ServiceDocument.ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( cast(substring( cast(_ServiceDocument.ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      _ServiceDocument.ServiceDocumentCreatedByUser,
      _ServiceDocument.ServiceDocumentChangedByUser,

      _ServiceDocument.ServiceContractStartDateTime,
      _ServiceDocument.ServiceContractEndDateTime,
      cast( cast(substring( cast(_ServiceDocument.ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      cast( cast(substring( cast(_ServiceDocument.ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractEndDate,

      _ServiceDocument.RequestedServiceStartDateTime,
      _ServiceDocument.RequestedServiceEndDateTime,
      cast( cast(substring( cast(_ServiceDocument.RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      cast( cast(substring( cast(_ServiceDocument.RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,

      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _ServiceDocument.BillingBlockReason,
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      _ServiceDocument.BusinessActivityCategory,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      _ServiceDocument.SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      _ServiceDocument.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _ServiceDocument.SalesGroup,
      //      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      _ServiceDocument.SalesOrganizationOrgUnitID,
      //      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      _ServiceDocument.SalesOfficeOrgUnitID,
      //      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      _ServiceDocument.SalesGroupOrgUnitID,

      _ServiceDocument.Language,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      _ServiceDocument.ServiceDocumentRejectionReason,
      _ServiceDocument.CustomerPurchaseOrderDate,
      _ServiceDocument.DistributionChannel,
      _ServiceDocument.Division,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceDocumentIsRejected,
      _ServiceDocument.ShipToParty,
      _ServiceDocument.BillToParty,
      _ServiceDocument.PayerParty,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocument.ServiceDocTaxAmount,
      _ServiceDocument.ServiceDefectSchema,
      _ServiceDocument.ServiceDefectCategory,
      _ServiceDocument.ServiceFirstResponseByDateTime,
      _ServiceDocument.ServiceDueByDateTime,
      _ServiceDocument.RecommendedServicePriority,
      _ServiceDocument.ServiceDocumentUrgency,
      _ServiceDocument.ServiceDocumentImpact,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      _ServiceDocument.ServiceDocumentProblemCategory,
      _ServiceDocument.ServiceReasonSchema,
      _ServiceDocument.ServiceReasonCategory,
      @Semantics.booleanIndicator 
      _ServiceDocument.ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_Region'
      _ServiceDocument.Region,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      _ServiceDocument.ServiceRisk,

      _ServiceDocument,
      _ServiceDocumentType,
      _ServiceDocument._ActivityCategory,
      _ServiceDocument._BillingBlockReason,
//      _ServiceDocument._ContactPerson,
//      _ServiceDocument._RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocHasError,
      _ServiceDocument._ServiceDocumentPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocument._ServiceDocumentStatus,
      _ServiceDocument._SrvcDocLifecycleStatus,
      _ServiceDocument._ServiceEmployee,
      _ServiceDocument._ServiceObjType,
      _ServiceDocument._ServiceTeam,
      _ServiceDocument._SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._SrvcDocIsRelForBillgSts,
      _ServiceDocument._TransactionCurrency,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocument._ServiceDocumentIsOpen,
      _ServiceDocument._PaymentTerms,
//      _ServiceDocument._FixedPrice,
      _ServiceDocument._SalesOrganization,
      _ServiceDocument._SalesOffice,
      _ServiceDocument._SalesGroup,
      _ServiceDocument._SalesOrganizationOrgUnit_2,
      _ServiceDocument._SalesOfficeOrgUnit_2,
      _ServiceDocument._SalesGroupOrgUnit_2,      
      _ServiceDocument._SoldToPartyCountry,
      _ServiceDocument._SoldToPartyRegion,
      _ServiceDocument._Region,
      _ServiceDocument._ServiceRisk,
      _ServiceDocument._SrvcDocumentRejectionReason,
      _ServiceDocument._ServiceDocProblemCategory     
}
group by
  ServiceDocumentType,
  ServiceDocument,
  ServiceDocumentDescription,
  ServiceDocumentTypeName,
  
  _ServiceDocument.ServiceObjectType,
  _ServiceDocument.ServiceDocumentUUID,
  _ServiceDocument.PricingDocument,
  _ServiceDocument.PricingProcedure,
  _ServiceDocument.RefBusinessSolutionOrder,
  _ServiceDocument.SoldToParty,
  _ServiceDocument.ServiceTeam,
  _ServiceDocument.ResponsibleEmployee,
  _ServiceDocument.ServiceEmployee,
  _ServiceDocument.ContactPerson,
  _ServiceDocument.ServiceDocumentPriority,
  _ServiceDocument.PostingDate,
  _ServiceDocument.PaymentTerms,
  _ServiceDocument.TransactionCurrency,
  _ServiceDocument.ServiceDocNetAmount,
  _ServiceDocument.ServiceDocGrossAmount,
  _ServiceDocument.SoldToPartyCountry,
  _ServiceDocument.SoldToPartyRegion,
  _ServiceDocument.PurchaseOrderByCustomer,
  _ServiceDocument.ServiceDocumentStatus,
  _ServiceDocument.ServiceDocumentHasError,
  _ServiceDocument.ServiceDocBillingStatus,
  _ServiceDocument.ServiceDocIsReleasedForBilling,
  _ServiceDocument.ServiceDocumentIsOpen,
  _ServiceDocument.ServiceOrganization,
  _ServiceDocument.ResponsibleServiceOrganization,
  _ServiceDocument.ServiceDocCreationDateTime,
  _ServiceDocument.ServiceDocChangedDateTime,
  _ServiceDocument.ServiceDocumentCreatedByUser,
  _ServiceDocument.ServiceDocumentChangedByUser,
  _ServiceDocument.ServiceContractStartDateTime,
  _ServiceDocument.ServiceContractEndDateTime,
  _ServiceDocument.RequestedServiceStartDateTime,
  _ServiceDocument.RequestedServiceEndDateTime,
  _ServiceDocument.BillingBlockReason,
  _ServiceDocument.BusinessActivityCategory,
  _ServiceDocument.SalesOrganization,
  _ServiceDocument.SalesOffice,
  _ServiceDocument.SalesGroup,
  _ServiceDocument.SalesOrganizationOrgUnitID,
  _ServiceDocument.SalesOfficeOrgUnitID,
  _ServiceDocument.SalesGroupOrgUnitID,
  _ServiceDocument.Language,
  _ServiceDocument.ServiceDocumentRejectionReason,
  _ServiceDocument.CustomerPurchaseOrderDate,
  _ServiceDocument.DistributionChannel,
  _ServiceDocument.Division,
  _ServiceDocument.ServiceDocumentIsReleased,
  _ServiceDocument.ServiceDocumentIsRejected,
  _ServiceDocument.ShipToParty,
  _ServiceDocument.BillToParty,
  _ServiceDocument.PayerParty,
  _ServiceDocument.ServiceDocTaxAmount,
  _ServiceDocument.ServiceDefectSchema,
  _ServiceDocument.ServiceDefectCategory,
  _ServiceDocument.ServiceFirstResponseByDateTime,
  _ServiceDocument.ServiceDueByDateTime,
  _ServiceDocument.RecommendedServicePriority,
  _ServiceDocument.ServiceDocumentUrgency,
  _ServiceDocument.ServiceDocumentImpact,
  _ServiceDocument.ServiceDocumentProblemCategory,
  _ServiceDocument.ServiceReasonSchema,
  _ServiceDocument.ServiceReasonCategory,
  _ServiceDocument.ServiceConfirmationIsFinal,
  _ServiceDocument.Region,
  _ServiceDocument.ServiceRisk
```
