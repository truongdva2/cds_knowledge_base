---
name: I_ACCTGSRVCDOCUMENTITEMBASIC
description: Acctgsrvcdocumentitembasic
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
  - document
  - item-level
  - component:CO-PC-OBJ-SRV-2CL
  - lob:Controlling
---
# I_ACCTGSRVCDOCUMENTITEMBASIC

**Acctgsrvcdocumentitembasic**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-SRV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }` | `unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }` |
| `_ServiceDocumentItem.SrvcContrItemExtensionDuration` | *Association* |
| `_ServiceDocumentItem.SrvcContrItemExtnDurationUnit` | *Association* |
| `_ServiceDocumentItem._BillingBlockReason` | *Association* |
| `_ServiceDocumentItem._BillToParty` | *Association* |
| `_ServiceDocumentItem._PayerParty` | *Association* |
| `_ServiceDocumentItem._ServiceDocItemBillingStatus` | *Association* |
| `_ServiceDocumentItem._ServiceDocItemCategory` | *Association* |
| `_ServiceDocumentItem._ServiceDocItemHasError` | *Association* |
| `_ServiceDocumentItem._SrvcDocItmLifecycleStatus` | *Association* |
| `_ServiceDocumentItem._ServiceEmployee` | *Association* |
| `_ServiceDocumentItem._BaseUnit_2` | *Association* |
| `_ServiceDocumentItem._SalesUnit` | *Association* |
| `_ServiceDocumentItem._TransactionCurrency` | *Association* |
| `_ServiceDocumentItem._PaymentTerms` | *Association* |
| `_ServiceDocumentItem._ServiceTeam` | *Association* |
| `_ServiceDocumentItem._SoldToParty` | *Association* |
| `_ServiceDocumentItem._SrvcDocItemIsRelForBillgSts` | *Association* |
| `_ServiceDocumentItem._ServiceDocumentIsOpen` | *Association* |
| `_ServiceDocumentItem._SalesOffice` | *Association* |
| `_ServiceDocumentItem._SalesGroup` | *Association* |
| `_ServiceDocumentItem._ActualServiceDurationUnit` | *Association* |
| `_ServiceDocumentItem._ServiceDurationUnit` | *Association* |
| `_ServiceDocumentItem._SrvcContrItemRnwlDurationUnit` | *Association* |
| `_ServiceDocumentItem._SrvcContrItemExtnDurationUnit` | *Association* |
| `_ServiceDocumentItem._ServiceDocOvertimeCat` | *Association* |
| `_ServiceDocumentItem._Industry` | *Association* |
| `_ServiceDocumentItem._ServiceDocItemRejectionReason` | *Association* |
| `_ServiceDocumentItem._SoldToPartyCountry` | *Association* |
| `_ServiceDocumentItem._SoldToPartyRegion` | *Association* |
| `_ServiceDocumentItem._SalesOrganizationOrgUnit_2` | *Association* |
| `_ServiceDocumentItem._SalesOfficeOrgUnit_2` | *Association* |
| `_ServiceDocumentItem._SalesGroupOrgUnit_2` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocument` | *Association* |
| `_ServiceDocumentItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentType` | `I_AcctgServiceDocumentType` | [1..1] |
| `_ServiceDocument` | `I_AccountingServiceDocument` | [1..1] |
| `_ServiceDocumentItem` | `I_ServiceDocumentItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  sizeCategory: #L,
  serviceQuality: #C,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.representativeKey: 'ServiceDocumentItem'
@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #VALUE_HELP_PROVIDER
  ]
@EndUserText.label: 'Accounting Service Document Item'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_AcctgSrvcDocumentItemBasic 
  as select from I_AcctgServiceDocumentItem as _AcctgServiceDocument
//  as select from P_AcctgServiceDocument as _AcctgServiceDocument
//    left outer to one join I_AcctgServiceDocumentItem as _ServiceObjType on _AcctgServiceDocument.ServiceDocumentType  = _ServiceObjType.ServiceDocumentType
//                                                                         and _AcctgServiceDocument.ServiceDocument     = _ServiceObjType.ServiceDocument
//                                                                         and _AcctgServiceDocument.ServiceDocumentItem = _ServiceObjType.ServiceDocumentItem


  association [1..1] to I_AcctgServiceDocumentType  as _ServiceDocumentType on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  
  association [1..1] to I_AccountingServiceDocument as _ServiceDocument     on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                            and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument
                                                                            
  association [1..1] to I_ServiceDocumentItem       as _ServiceDocumentItem on  $projection.ServiceObjectType = _ServiceDocumentItem.ServiceObjectType
                                                                            and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                            and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
                                                                                                                                                   
{
  @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key _AcctgServiceDocument.ServiceDocumentType,
  @ObjectModel.foreignKey.association: '_ServiceDocument'
  key _AcctgServiceDocument.ServiceDocument,
  @ObjectModel.text.element: ['ServiceDocumentItemDescription']
  key _AcctgServiceDocument.ServiceDocumentItem,
      _AcctgServiceDocument.ControllingObject,
      _AcctgServiceDocument.BusinessSolutionOrder,
      _AcctgServiceDocument.CompanyCode,
      _AcctgServiceDocument.ControllingArea,
      _AcctgServiceDocument.ProfitCenter,
      _AcctgServiceDocument.FunctionalArea,
      _AcctgServiceDocument.SalesOrganization,
      _AcctgServiceDocument.DistributionChannel,
      _AcctgServiceDocument.Division,
      _AcctgServiceDocument.ResultAnalysisInternalID,
      _AcctgServiceDocument.Currency,
      _AcctgServiceDocument.CostingSheet,
      
//      _ServiceObjType.ServiceObjectType as ServiceObjectType,
      _AcctgServiceDocument.ServiceObjectType,
      
      @Semantics.text: true
      cast( case _AcctgServiceDocument.ServiceDocumentItemDescription
              when '' then _ServiceDocumentItem.ServiceDocumentItemDescription 
              else coalesce( _AcctgServiceDocument.ServiceDocumentItemDescription, _ServiceDocumentItem.ServiceDocumentItemDescription  )
            end 
          as fco_srvdoc_item_description preserving type ) as ServiceDocumentItemDescription,
      
      
      _ServiceDocumentItem.ServiceDocumentUUID,
      _ServiceDocumentItem.ServiceDocumentDescription,
      _ServiceDocumentItem.ServiceDocumentItemUUID,
      _ServiceDocumentItem.ServiceDocumentItemObjectType,
      _ServiceDocumentItem.ParentServiceDocumentItemUUID,
      _ServiceDocumentItem.RefBusinessSolutionOrder,
      _ServiceDocumentItem.RefBusinessSolutionOrderItem,

      _ServiceDocumentItem.BillingDateTime,
      _ServiceDocumentItem.BillingDocCreationDateTime,

      _ServiceDocumentItem.PurchaseOrderByCustomer,
      _ServiceDocumentItem.ServiceDocumentItemPriority,
      _ServiceDocumentItem.PostingDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _ServiceDocumentItem.TransactionCurrency,

      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      _ServiceDocumentItem.SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      _ServiceDocumentItem.SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      _ServiceDocumentItem.SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      _ServiceDocumentItem.SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      _ServiceDocumentItem.SoldToPartyRegion,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      _ServiceDocumentItem.SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      _ServiceDocumentItem.ServiceTeam,
//      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( _ServiceDocument.ResponsibleEmployee as resp_empl) as ResponsibleEmployee,
//      _ServiceDocument.ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      _ServiceDocumentItem.ServiceEmployee,
//      @ObjectModel.foreignKey.association: '_ContactPerson'
     cast( _ServiceDocument.ContactPerson as parnr ) as ContactPerson,
//      _ServiceDocument.ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      _ServiceDocumentItem.PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      _ServiceDocumentItem.BillToParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      _ServiceDocumentItem.PaymentTerms,

      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      _ServiceDocumentItem.ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      _ServiceDocumentItem.ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsOpen,

      _ServiceDocumentItem.ServiceOrganization,
      _ServiceDocumentItem.ResponsibleServiceOrganization,

      _ServiceDocumentItem.ServiceDocItemCreationDateTime,
      _ServiceDocumentItem.ServiceDocItemChangedDateTime,

      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( _ServiceDocumentItem.ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,

      _ServiceDocumentItem.ServiceDocItemCreatedByUser,
      _ServiceDocumentItem.ServiceDocItemChangedByUser,
      _ServiceDocumentItem.OriginallyRequestedProduct,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      _ServiceDocumentItem.ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      _ServiceDocumentItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      _ServiceDocumentItem.SrvcDocItemBaseQuantityUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      _ServiceDocumentItem.ServiceDocItemCategory,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocumentItemNetAmount,
      _ServiceDocumentItem.BillableControl,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      _ServiceDocumentItem.BillingBlockReason,
      _ServiceDocumentItem.RequestedServiceStartDateTime,
      _ServiceDocumentItem.RequestedServiceEndDateTime,

      _ServiceDocumentItem.ServiceContrItemStartDateTime,
      _ServiceDocumentItem.ServiceContrItemEndDateTime,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      _ServiceDocumentItem.ServiceDocItemGrossAmount,

      _ServiceDocumentItem.SettlementPeriodRuleUUID,
      _ServiceDocumentItem.BillingPlanBillingDateRuleUUID,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      _ServiceDocumentItem.SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      _ServiceDocumentItem.SalesGroup,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      _ServiceDocumentItem.ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      _ServiceDocumentItem.ServiceDocItemRejectionReason,
      _ServiceDocumentItem.ShipToParty,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator 
      _ServiceDocumentItem.ServiceDocumentItemIsRejected,
      _ServiceDocumentItem.ResponseProfile,
      _ServiceDocumentItem.ServiceProfile,
      _ServiceDocumentItem.Language,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      _ServiceDocumentItem.ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      _ServiceDocumentItem.ActualServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      _ServiceDocumentItem.ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      _ServiceDocumentItem.TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_Industry'
      _ServiceDocumentItem.Industry,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      _ServiceDocumentItem.SrvcContrItemRnwlDurationUnit,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      _ServiceDocumentItem.SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      _ServiceDocumentItem.SrvcContrItemExtnDurationUnit,

//      /* Associations */
//      //I_ServiceDocumentItem
      _ServiceDocumentItem._BillingBlockReason,
//      _ServiceDocumentItem._BillingRequestItem,
      _ServiceDocumentItem._BillToParty,
//      _ServiceDocumentItem._ContactPerson,
      _ServiceDocumentItem._PayerParty,
//      _ServiceDocumentItem._RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemBillingStatus,
      _ServiceDocumentItem._ServiceDocItemCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocItemHasError,
//      _ServiceDocumentItem._ServiceDocItemPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItmLifecycleStatus,
      _ServiceDocumentItem._ServiceEmployee,
//      _ServiceDocument,
//      _ServiceObjType,
      _ServiceDocumentItem._BaseUnit_2,
      _ServiceDocumentItem._SalesUnit,
      _ServiceDocumentItem._TransactionCurrency,
      _ServiceDocumentItem._PaymentTerms,
//      _ServiceProductList,
      _ServiceDocumentItem._ServiceTeam,
      _ServiceDocumentItem._SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentItem._ServiceDocumentIsOpen,
//      _FixedPrice,
//      _StatusObjItemStatus,
//      _SalesOrganization,
      _ServiceDocumentItem._SalesOffice,
      _ServiceDocumentItem._SalesGroup,
      _ServiceDocumentItem._ActualServiceDurationUnit,
      _ServiceDocumentItem._ServiceDurationUnit,
      _ServiceDocumentItem._SrvcContrItemRnwlDurationUnit,
      _ServiceDocumentItem._SrvcContrItemExtnDurationUnit,
      _ServiceDocumentItem._ServiceDocOvertimeCat,
      _ServiceDocumentItem._Industry,
      _ServiceDocumentItem._ServiceDocItemRejectionReason,
      _ServiceDocumentItem._SoldToPartyCountry,
      _ServiceDocumentItem._SoldToPartyRegion,
//
//
      _ServiceDocumentItem._SalesOrganizationOrgUnit_2,
      _ServiceDocumentItem._SalesOfficeOrgUnit_2,
      _ServiceDocumentItem._SalesGroupOrgUnit_2,      
      
      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem
      
}
```
