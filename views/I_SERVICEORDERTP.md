---
name: I_SERVICEORDERTP
description: Service OrderTP
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - service
  - service-order
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SERVICEORDERTP

**Service OrderTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `currencyCode: 'TransactionCurrency'} }` | `currencyCode: 'TransactionCurrency'} }` |
| `ServiceDocTaxAmount` | `ServiceDocTaxAmount` |
| `PricingDocument` | `PricingDocument` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `ServiceOrderRejectionReason` | `ServiceOrderRejectionReason` |
| `SrvcOrdExtReference` | `SrvcOrdExtReference` |
| `ReferenceServiceContract` | `ReferenceServiceContract` |
| `RefServiceOrderTemplate` | `RefServiceOrderTemplate` |
| `ReferenceServiceQtan` | `ReferenceServiceQtan` |
| `/* Associations */` | `/* Associations */` |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `FSMServiceCall` | `FSMServiceCall` |
| `_SoldToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_ServiceOrganizationOrgUnit_2` | *Association* |
| `_PaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_Confirmation` | *Association* |
| `/* Compositions */` | `/* Compositions */` |
| `_ServiceOrderItemTP        : redirected to composition child I_ServiceOrderItemTP` | *Association* |
| `_SrvcOrdPartnerTP          : redirected to composition child I_SrvcOrdPartnerTP` | *Association* |
| `_SrvcOrdReferenceObjectTP  : redirected to composition child I_SrvcOrdReferenceObjectTP` | *Association* |
| `_SrvcOrdPriceElementTP     : redirected to composition child I_SrvcOrdPriceElementTP` | *Association* |
| `_SrvcOrdUserStatusTP       : redirected to composition child I_SrvcOrdUserStatusTP` | *Association* |
| `_SrvcOrdAppointmentTP      : redirected to composition child I_SrvcOrdAppointmentTP` | *Association* |
| `_SrvcOrdDurationTP         : redirected to composition child I_SrvcOrdDurationTP` | *Association* |
| `_SrvcOrdFUPSrvcConfTP      : redirected to composition child I_SrvcOrdFUPSrvcConfTP` | *Association* |
| `_SrvcOrdFUPBillgDocTP      : redirected to composition child I_SrvcOrdFUPBillgDocTP` | *Association* |
| `_SrvcOrdFUPPurchaseOrderTP : redirected to composition child I_SrvcOrdFUPPurchaseOrderTP` | *Association* |
| `_SrvcOrdFUPPurReqnTP       : redirected to composition child I_SrvcOrdFUPPurReqnTP` | *Association* |
| `_SrvcOrdFUPSrvcEntrSheetTP : redirected to composition child I_SrvcOrdFUPSrvcEntrSheetTP` | *Association* |
| `_SrvcOrdFUPSuplrInvcTP     : redirected to composition child I_SrvcOrdFUPSuplrInvcTP` | *Association* |
| `_SrvcOrdFUPMaintOrdTP      : redirected to composition child I_SrvcOrdFUPMaintOrdTP` | *Association* |
| `_SrvcOrdLongTextTP         : redirected to composition child I_SrvcOrdLongTextTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@ObjectModel: {
   sapObjectNodeType.name: 'ServiceOrder',
   representativeKey: 'ServiceOrder',
   semanticKey: ['ServiceOrder'],
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ServiceOrderTP
  provider contract transactional_interface
  as projection on R_ServiceOrderTP as _ServiceOrderTP
{

      // Administrative Fields
  key ServiceOrder,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceOrderType,
      ServiceOrderUUID,
      ServiceOrderDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      // Partners
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      SEPAMandate,
      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      SrvcSEPAMandateRelevance,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,

      // Organizational Data
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      //these feilds are only ON PREMISE
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,

      RespyMgmtServiceTeam,
      RespyMgmtGlobalTeamID,

      // Statuses
      ServiceOrderIsNew,
      ServiceOrderIsInProcess,
      ServiceOrderIsReleased,
      ServiceOrderIsCompleted,
      @Semantics.booleanIndicator
      ServiceOrderIsRejected,
      ServiceOrderStatus,
      SrvcOrdReldForBillingStatus,
      SrvcOrdBillingStatus,
      @Semantics.booleanIndicator
      ServiceOrderHasError,
      SrvcDocTransferStatus,
      SrvcOrdExecutionStatus,
      SrvcOrdCreditStatus,

      // Dates and Durations
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      ErlstRequestedDeliveryDateTime,

      // Service Specific Fields
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      // Pricing Fields
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      PricingDocument,

      // Sales Fields
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceOrderRejectionReason,

      // Reference Documents
      SrvcOrdExtReference,
      ReferenceServiceContract,
      RefServiceOrderTemplate,
      ReferenceServiceQtan,
      //      ReferenceInHouseRepair,
      //      ReferenceInHouseRepairItem,

      /* Associations */

      // Administrative
      _ServiceObjType,
      _ServiceDocumentType,

      WBSElementExternalID,
      FSMServiceCall,

      // Partners
      _SoldToParty,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _ContactPerson,
      _RespEmployee,

      // Organizational Data
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,

      _SalesOrganizationOrgUnit_2,
      _SalesOfficeOrgUnit_2,
      _SalesGroupOrgUnit_2,
      _ServiceOrganizationOrgUnit_2,

      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      // Pricing
      _TransactionCurrency,
      // ServiceSpecific fields
      _ServiceDocumentPriority,
      // Status
      _SrvcDocumentRejectionReason,
      // Reference Documents
      _Confirmation,

      /* Compositions */

      _ServiceOrderItemTP        : redirected to composition child I_ServiceOrderItemTP,
      _SrvcOrdPartnerTP          : redirected to composition child I_SrvcOrdPartnerTP,
      _SrvcOrdReferenceObjectTP  : redirected to composition child I_SrvcOrdReferenceObjectTP,
      _SrvcOrdPriceElementTP     : redirected to composition child I_SrvcOrdPriceElementTP,
      _SrvcOrdUserStatusTP       : redirected to composition child I_SrvcOrdUserStatusTP,
      _SrvcOrdAppointmentTP      : redirected to composition child I_SrvcOrdAppointmentTP,
      _SrvcOrdDurationTP         : redirected to composition child I_SrvcOrdDurationTP,
      _SrvcOrdFUPSrvcConfTP      : redirected to composition child I_SrvcOrdFUPSrvcConfTP,
      _SrvcOrdFUPBillgDocTP      : redirected to composition child I_SrvcOrdFUPBillgDocTP,
      _SrvcOrdFUPPurchaseOrderTP : redirected to composition child I_SrvcOrdFUPPurchaseOrderTP,
      _SrvcOrdFUPPurReqnTP       : redirected to composition child I_SrvcOrdFUPPurReqnTP,
      _SrvcOrdFUPSrvcEntrSheetTP : redirected to composition child I_SrvcOrdFUPSrvcEntrSheetTP,
      _SrvcOrdFUPSuplrInvcTP     : redirected to composition child I_SrvcOrdFUPSuplrInvcTP,
      @API.element.releaseState: #DEPRECATED
      _SrvcOrdFUPMaintOrdTP      : redirected to composition child I_SrvcOrdFUPMaintOrdTP,
      _SrvcOrdLongTextTP         : redirected to composition child I_SrvcOrdLongTextTP


}
```
