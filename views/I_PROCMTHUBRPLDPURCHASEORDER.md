---
name: I_PROCMTHUBRPLDPURCHASEORDER
description: PROCMTHUBRPLDPurchase Order
app_component: MM-PUR-HUB-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - purchase-order
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PROCMTHUBRPLDPURCHASEORDER

**PROCMTHUBRPLDPurchase Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key Document.PurchaseOrder` | `Document.PurchaseOrder` |
| `key Document.ExtSourceSystem` | `Document.ExtSourceSystem` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `Document.PurchaseOrderType` | `Document.PurchaseOrderType` |
| `Document.PurchaseOrderSubtype` | `Document.PurchaseOrderSubtype` |
| `Document.PurchasingDocumentOrigin` | `Document.PurchasingDocumentOrigin` |
| `Document.CreatedByUser` | `Document.CreatedByUser` |
| `CreatedByUserFullName` | `Document.CreatedByUserName` |
| `Document.CreationDate` | `Document.CreationDate` |
| `Document.PurchaseOrderDate` | `Document.PurchaseOrderDate` |
| `Document.ValidityStartDate` | `Document.ValidityStartDate` |
| `Document.ValidityEndDate` | `Document.ValidityEndDate` |
| `Document.Language` | `Document.Language` |
| `Document.PurchasingDocumentDeletionCode` | `Document.PurchasingDocumentDeletionCode` |
| `Document.ReleaseIsNotCompleted` | `Document.ReleaseIsNotCompleted` |
| `Document.PurchasingProcessingStatus` | `Document.PurchasingProcessingStatus` |
| `Document.PurchasingCompletenessStatus` | `Document.PurchasingCompletenessStatus` |
| `Document.CompanyCode` | `Document.CompanyCode` |
| `Document.CompanyCodeCountry` | `Document.CompanyCodeCountry` |
| `Document.PurchasingOrganization` | `Document.PurchasingOrganization` |
| `Document.PurchasingGroup` | `Document.PurchasingGroup` |
| `Document.Supplier` | `Document.Supplier` |
| `Document.SupplierRespSalesPersonName` | `Document.SupplierRespSalesPersonName` |
| `Document.SupplierPhoneNumber` | `Document.SupplierPhoneNumber` |
| `Document.SupplyingSupplier` | `Document.SupplyingSupplier` |
| `Document.SupplyingPlant` | `Document.SupplyingPlant` |
| `Document.InvoicingParty` | `Document.InvoicingParty` |
| `Document.PaymentTerms` | `Document.PaymentTerms` |
| `Document.CashDiscount1Days` | `Document.CashDiscount1Days` |
| `Document.CashDiscount2Days` | `Document.CashDiscount2Days` |
| `Document.NetPaymentDays` | `Document.NetPaymentDays` |
| `Document.CashDiscount1Percent` | `Document.CashDiscount1Percent` |
| `Document.CashDiscount2Percent` | `Document.CashDiscount2Percent` |
| `Document.IncotermsClassification` | `Document.IncotermsClassification` |
| `Document.IncotermsTransferLocation` | `Document.IncotermsTransferLocation` |
| `Document.IncotermsVersion` | `Document.IncotermsVersion` |
| `Document.IncotermsLocation1` | `Document.IncotermsLocation1` |
| `Document.IncotermsLocation2` | `Document.IncotermsLocation2` |
| `Document.IsIntrastatReportingRelevant` | `Document.IsIntrastatReportingRelevant` |
| `Document.IsIntrastatReportingExcluded` | `Document.IsIntrastatReportingExcluded` |
| `Document.DeliveryDocumentCondition` | `Document.DeliveryDocumentCondition` |
| `Document.PricingProcedure` | `Document.PricingProcedure` |
| `Document.DocumentCurrency` | `Document.DocumentCurrency` |
| `Document.ExchangeRate` | `Document.ExchangeRate` |
| `Document.AbsoluteExchangeRate` | `Document.AbsoluteExchangeRate` |
| `Document.ExchRateIsIndirectQuotation` | `Document.ExchRateIsIndirectQuotation` |
| `Document.EffectiveExchangeRate` | `Document.EffectiveExchangeRate` |
| `Document.ExchangeRateIsFixed` | `Document.ExchangeRateIsFixed` |
| `Document.LastChangeDateTime` | `Document.LastChangeDateTime` |
| `Document.ManualSupplierAddressID` | `Document.ManualSupplierAddressID` |
| `Document.HasNote` | `Document.HasNote` |
| `Document.HasAttachment` | `Document.HasAttachment` |
| `Document.PurchaseOrderNetAmount` | `Document.PurchaseOrderNetAmount` |
| `Document.NumberOfOverduePurOrders` | `Document.NumberOfOverduePurOrders` |
| `Document.NumberOfOverduePurOrdItm` | `Document.NumberOfOverduePurOrdItm` |
| `Document.PurchaseOrderStatus` | `Document.PurchaseOrderStatus` |
| `Document.PurchaseOrderStatusName` | `Document.PurchaseOrderStatusName` |
| `Document.ApproverUser` | `Document.ApproverUser` |
| `Document.ApproverName` | `Document.ApproverName` |
| `Document.ScheduleLineDeliveryDate` | `Document.ScheduleLineDeliveryDate` |
| `Document.PurOrdOutputCtrlType` | `Document.PurOrdOutputCtrlType` |
| `Document.PurchaseOrderOutputStatus` | `Document.PurchaseOrderOutputStatus` |
| `Document.PurchaseOrderOutputStatusName` | `Document.PurchaseOrderOutputStatusName` |
| `Document.PurchaseOrderOutputDateTime` | `Document.PurchaseOrderOutputDateTime` |
| `Document.WeightedRelevance` | `Document.WeightedRelevance` |
| `Document.PurchaseOrderOutputIndCode` | `Document.PurchaseOrderOutputIndCode` |
| `Document.PurchaseOrderOutputIndDesc` | `Document.PurchaseOrderOutputIndDesc` |
| `Document.VATRegistrationCountry` | `Document.VATRegistrationCountry` |
| `Document.CorrespncExternalReference` | `Document.CorrespncExternalReference` |
| `Document.CorrespncInternalReference` | `Document.CorrespncInternalReference` |
| `IsEndOfPurposeBlocked` | `IsEndOfPurposeBlocked` |
| `_DocumentCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_PrmtHbRpldPurchaseOrder` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.sqlViewName: 'IPRMTHBRPLDPO'
//@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extensibility of Purchase Order in Procurement Hub'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.entityChangeStateId: 'LastChangeDateTime'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'PrmtHbRpldPurchaseOrder'
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern : #NONE
@Feature: 'MMPUR_PRMTHB_PO_OPD_PARAM'


define view entity I_ProcmtHubRpldPurchaseOrder
  as select from I_CentralPurchaseOrder as Document

  association [0..1] to E_PrmtHbRpldPurchaseOrder    as _Extension           on  _Extension.PurchaseOrder   = $projection.PurchaseOrder
                                                                             and _Extension.ExtSourceSystem = $projection.ExtSourceSystem

{

  key Document.PurchaseOrder,
  
  key Document.ExtSourceSystem,

      PurchasingDocumentCategory,
      Document.PurchaseOrderType,

      Document.PurchaseOrderSubtype,

      Document.PurchasingDocumentOrigin,

      Document.CreatedByUser,

      @Semantics.text: true
      Document.CreatedByUserName                     as CreatedByUserFullName,

      Document.CreationDate,

      Document.PurchaseOrderDate,

      Document.ValidityStartDate,

      Document.ValidityEndDate,

      @Semantics.language: true
      Document.Language,

      Document.PurchasingDocumentDeletionCode,

      Document.ReleaseIsNotCompleted,

      Document.PurchasingProcessingStatus,

      Document.PurchasingCompletenessStatus,

//      Document.PurchasingDocCompletionStatus,

      Document.CompanyCode,

      Document.CompanyCodeCountry,

      Document.PurchasingOrganization,

      Document.PurchasingGroup,

      Document.Supplier,

      Document.SupplierRespSalesPersonName,

      Document.SupplierPhoneNumber,

      Document.SupplyingSupplier,

      Document.SupplyingPlant,

      Document.InvoicingParty,

      Document.PaymentTerms,

      Document.CashDiscount1Days,

      Document.CashDiscount2Days,

      Document.NetPaymentDays,

      Document.CashDiscount1Percent,

      Document.CashDiscount2Percent,

      Document.IncotermsClassification,

      Document.IncotermsTransferLocation,

      Document.IncotermsVersion,

      Document.IncotermsLocation1,

      Document.IncotermsLocation2,

      Document.IsIntrastatReportingRelevant,

      Document.IsIntrastatReportingExcluded,

      Document.DeliveryDocumentCondition,

      Document.PricingProcedure,

      Document.DocumentCurrency,

      Document.ExchangeRate,

      Document.AbsoluteExchangeRate,

      Document.ExchRateIsIndirectQuotation,

      Document.EffectiveExchangeRate,

      Document.ExchangeRateIsFixed,

      Document.LastChangeDateTime,

      Document.ManualSupplierAddressID,

      Document.HasNote,

      Document.HasAttachment,

      ----------------------------------------------------------------------------------------
      -- Calculated fields                                                                 --
      ----------------------------------------------------------------------------------------
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      Document.PurchaseOrderNetAmount,
      Document.NumberOfOverduePurOrders,
      Document.NumberOfOverduePurOrdItm,
      Document.PurchaseOrderStatus,
      Document.PurchaseOrderStatusName,
      Document.ApproverUser,
      Document.ApproverName,
      Document.ScheduleLineDeliveryDate,
      Document.PurOrdOutputCtrlType,
      Document.PurchaseOrderOutputStatus,
      Document.PurchaseOrderOutputStatusName,
      Document.PurchaseOrderOutputDateTime,
      Document.WeightedRelevance,
      Document.PurchaseOrderOutputIndCode,
      Document.PurchaseOrderOutputIndDesc,
      Document.VATRegistrationCountry,
      Document.CorrespncExternalReference,
      Document.CorrespncInternalReference,

      // Data Privacy and Protection
      @UI.hidden: true
      @Semantics.booleanIndicator
      IsEndOfPurposeBlocked,

      _DocumentCurrency

}
```
