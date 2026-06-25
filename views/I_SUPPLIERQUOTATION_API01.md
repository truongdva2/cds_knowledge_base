---
name: I_SUPPLIERQUOTATION_API01
description: Supplierquotation Api 01
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - supplier
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATION_API01

**Supplierquotation Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key I_SupplierQuotation.SupplierQuotation` | `I_SupplierQuotation.SupplierQuotation` |
| `I_SupplierQuotation.CompanyCode` | `I_SupplierQuotation.CompanyCode` |
| `I_SupplierQuotation.PurchasingDocumentCategory` | `I_SupplierQuotation.PurchasingDocumentCategory` |
| `I_SupplierQuotation.PurchasingDocumentType` | `I_SupplierQuotation.PurchasingDocumentType` |
| `I_SupplierQuotation.Supplier` | `I_SupplierQuotation.Supplier` |
| `I_SupplierQuotation.CreatedByUser` | `I_SupplierQuotation.CreatedByUser` |
| `I_SupplierQuotation.CreationDate` | `I_SupplierQuotation.CreationDate` |
| `I_SupplierQuotation.LastChangeDateTime` | `I_SupplierQuotation.LastChangeDateTime` |
| `I_SupplierQuotation.Language` | `I_SupplierQuotation.Language` |
| `I_SupplierQuotation.DocumentCurrency` | `I_SupplierQuotation.DocumentCurrency` |
| `I_SupplierQuotation.IncotermsClassification` | `I_SupplierQuotation.IncotermsClassification` |
| `I_SupplierQuotation.IncotermsTransferLocation` | `I_SupplierQuotation.IncotermsTransferLocation` |
| `I_SupplierQuotation.IncotermsVersion` | `I_SupplierQuotation.IncotermsVersion` |
| `I_SupplierQuotation.IncotermsLocation1` | `I_SupplierQuotation.IncotermsLocation1` |
| `I_SupplierQuotation.IncotermsLocation2` | `I_SupplierQuotation.IncotermsLocation2` |
| `I_SupplierQuotation.PaymentTerms` | `I_SupplierQuotation.PaymentTerms` |
| `I_SupplierQuotation.CashDiscount1Days` | `I_SupplierQuotation.CashDiscount1Days` |
| `I_SupplierQuotation.CashDiscount2Days` | `I_SupplierQuotation.CashDiscount2Days` |
| `I_SupplierQuotation.CashDiscount1Percent` | `I_SupplierQuotation.CashDiscount1Percent` |
| `I_SupplierQuotation.CashDiscount2Percent` | `I_SupplierQuotation.CashDiscount2Percent` |
| `I_SupplierQuotation.NetPaymentDays` | `I_SupplierQuotation.NetPaymentDays` |
| `I_SupplierQuotation.PricingProcedure` | `I_SupplierQuotation.PricingProcedure` |
| `I_SupplierQuotation.PurchasingDocumentCondition` | `I_SupplierQuotation.PurchasingDocumentCondition` |
| `I_SupplierQuotation.PurchasingOrganization` | `I_SupplierQuotation.PurchasingOrganization` |
| `I_SupplierQuotation.PurchasingGroup` | `I_SupplierQuotation.PurchasingGroup` |
| `I_SupplierQuotation.PurchasingDocumentOrderDate` | `I_SupplierQuotation.PurchasingDocumentOrderDate` |
| `I_SupplierQuotation.RequestForQuotation` | `I_SupplierQuotation.RequestForQuotation` |
| `I_SupplierQuotation.SupplierQuotationExternalID` | `I_SupplierQuotation.SupplierQuotationExternalID` |
| `I_SupplierQuotation.QuotationSubmissionDate` | `I_SupplierQuotation.QuotationSubmissionDate` |
| `I_SupplierQuotation.QuotationLatestSubmissionDate` | `I_SupplierQuotation.QuotationLatestSubmissionDate` |
| `I_SupplierQuotation.BindingPeriodValidityEndDate` | `I_SupplierQuotation.BindingPeriodValidityEndDate` |
| `I_SupplierQuotation.ExchangeRate` | `I_SupplierQuotation.ExchangeRate` |
| `I_SupplierQuotation.ExchangeRateIsFixed` | `I_SupplierQuotation.ExchangeRateIsFixed` |
| `QTNLifecycleStatus` | `I_SupplierQuotation.QtnLifecycleStatus` |
| `I_SupplierQuotation.FollowOnDocumentCategory` | `I_SupplierQuotation.FollowOnDocumentCategory` |
| `I_SupplierQuotation.FollowOnDocumentType` | `I_SupplierQuotation.FollowOnDocumentType` |
| `I_SupplierQuotation.IsEndOfPurposeBlocked` | `I_SupplierQuotation.IsEndOfPurposeBlocked` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotationExtension` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMQTNAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@EndUserText.label: 'Supplier Quotation'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE

define view I_SupplierQuotation_Api01 as select from I_SupplierQuotation 

 ----Extension Association
  association [1..1] to E_PurchasingDocument          as _SupplierQuotationExtension on  $projection.SupplierQuotation = _SupplierQuotationExtension.PurchasingDocument
 
{
  key I_SupplierQuotation.SupplierQuotation,
      I_SupplierQuotation.CompanyCode,
      I_SupplierQuotation.PurchasingDocumentCategory,
      I_SupplierQuotation.PurchasingDocumentType,
      I_SupplierQuotation.Supplier,
      I_SupplierQuotation.CreatedByUser,
      I_SupplierQuotation.CreationDate,
      I_SupplierQuotation.LastChangeDateTime,
      I_SupplierQuotation.Language,
      I_SupplierQuotation.DocumentCurrency,
      I_SupplierQuotation.IncotermsClassification,
      I_SupplierQuotation.IncotermsTransferLocation,
      I_SupplierQuotation.IncotermsVersion,
      I_SupplierQuotation.IncotermsLocation1,
      I_SupplierQuotation.IncotermsLocation2,
      I_SupplierQuotation.PaymentTerms,
      I_SupplierQuotation.CashDiscount1Days,
      I_SupplierQuotation.CashDiscount2Days,
      I_SupplierQuotation.CashDiscount1Percent,
      I_SupplierQuotation.CashDiscount2Percent,
      I_SupplierQuotation.NetPaymentDays,
      I_SupplierQuotation.PricingProcedure,
      I_SupplierQuotation.PurchasingDocumentCondition,
      I_SupplierQuotation.PurchasingOrganization,
      I_SupplierQuotation.PurchasingGroup,
      I_SupplierQuotation.PurchasingDocumentOrderDate,
      I_SupplierQuotation.RequestForQuotation,
      I_SupplierQuotation.SupplierQuotationExternalID,
      I_SupplierQuotation.QuotationSubmissionDate,
      I_SupplierQuotation.QuotationLatestSubmissionDate,
      I_SupplierQuotation.BindingPeriodValidityEndDate,
      I_SupplierQuotation.ExchangeRate,
      I_SupplierQuotation.ExchangeRateIsFixed,
      I_SupplierQuotation.QtnLifecycleStatus as QTNLifecycleStatus,
      I_SupplierQuotation.FollowOnDocumentCategory,
      I_SupplierQuotation.FollowOnDocumentType,
      I_SupplierQuotation.IsEndOfPurposeBlocked
}
```
