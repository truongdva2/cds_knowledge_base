---
name: C_BILLGDOCITMPRCGELMNTBSCDEX_1
description: Billgdocitmprcgelmntbscdex 1
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - consumption-view
  - data-extraction
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# C_BILLGDOCITMPRCGELMNTBSCDEX_1

**Billgdocitmprcgelmntbscdex 1**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key PrcgElmnt.PricingDocument` | `PrcgElmnt.PricingDocument` |
| `key PrcgElmnt.PricingDocumentItem` | `PrcgElmnt.PricingDocumentItem` |
| `key PricingProcedureStep` | `PricingProcedureStep` |
| `key PricingProcedureCounter` | `PricingProcedureCounter` |
| `BItm.BillingDocument` | `BItm.BillingDocument` |
| `BItm.BillingDocumentItem` | `BItm.BillingDocumentItem` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionCategory` | `ConditionCategory` |
| `ConditionClass` | `ConditionClass` |
| `BItm.BillingDocumentCategory` | `BItm.BillingDocumentCategory` |
| `BItm.BillingDocumentType` | `BItm.BillingDocumentType` |
| `BItm.SDDocumentCategory` | `BItm.SDDocumentCategory` |
| `BItm.SalesDocumentItemCategory` | `BItm.SalesDocumentItemCategory` |
| `BItm.SalesDocumentItemType` | `BItm.SalesDocumentItemType` |
| `BItm.ReturnItemProcessingType` | `BItm.ReturnItemProcessingType` |
| `_BDoc.LastChangeDate` | *Association* |
| `BItm.CreationDate` | `BItm.CreationDate` |
| `BItm.CreationTime` | `BItm.CreationTime` |
| `BItm.SalesOrganization` | `BItm.SalesOrganization` |
| `BItm.DistributionChannel` | `BItm.DistributionChannel` |
| `BItm.OrganizationDivision` | `BItm.OrganizationDivision` |
| `BItm.SalesOffice` | `BItm.SalesOffice` |
| `BItm.SalesGroup` | `BItm.SalesGroup` |
| `BItm.SoldToParty` | `BItm.SoldToParty` |
| `BItm.PayerParty` | `BItm.PayerParty` |
| `BItm.BillToParty` | `BItm.BillToParty` |
| `BItm.ShipToParty` | `BItm.ShipToParty` |
| `BItm.SalesEmployee` | `BItm.SalesEmployee` |
| `BItm.ResponsibleEmployee` | `BItm.ResponsibleEmployee` |
| `BItm.Material` | `BItm.Material` |
| `BItm.Product` | `BItm.Product` |
| `BItm.Division` | `BItm.Division` |
| `BItm.InternationalArticleNumber` | `BItm.InternationalArticleNumber` |
| `BItm.OriginallyRequestedMaterial` | `BItm.OriginallyRequestedMaterial` |
| `BItm.MaterialGroup` | `BItm.MaterialGroup` |
| `BItm.ProductGroup` | `BItm.ProductGroup` |
| `BItm.AdditionalMaterialGroup1` | `BItm.AdditionalMaterialGroup1` |
| `BItm.AdditionalMaterialGroup2` | `BItm.AdditionalMaterialGroup2` |
| `BItm.AdditionalMaterialGroup3` | `BItm.AdditionalMaterialGroup3` |
| `BItm.AdditionalMaterialGroup4` | `BItm.AdditionalMaterialGroup4` |
| `BItm.AdditionalMaterialGroup5` | `BItm.AdditionalMaterialGroup5` |
| `BItm.MaterialCommissionGroup` | `BItm.MaterialCommissionGroup` |
| `ConditionIsForStatistics` | `ConditionIsForStatistics` |
| `ConditionOrigin` | `ConditionOrigin` |
| `ConditionAmount` | `ConditionAmount` |
| `PrcgElmnt.TransactionCurrency` | `PrcgElmnt.TransactionCurrency` |
| `ConditionInactiveReason` | `ConditionInactiveReason` |
| `ConditionIsForConfiguration` | `ConditionIsForConfiguration` |
| `VariantCondition` | `VariantCondition` |
| `_BDoc.ExchangeRateType` | *Association* |
| `BItm.PricingDate` | `BItm.PricingDate` |
| `BItm.PriceDetnExchangeRate` | `BItm.PriceDetnExchangeRate` |
| `BItm.PriceDetnExchangeRateDate` | `BItm.PriceDetnExchangeRateDate` |
| `BItm.StatisticalValueControl` | `BItm.StatisticalValueControl` |
| `BItm.BillingDocumentDate` | `BItm.BillingDocumentDate` |
| `_BDoc.BillingDocumentIsCancelled` | *Association* |
| `BItm.BillingDocumentIsTemporary` | `BItm.BillingDocumentIsTemporary` |
| `BItm.BillingQuantityUnit` | `BItm.BillingQuantityUnit` |
| `BItm.BillingQuantity` | `BItm.BillingQuantity` |
| `BItm.ServicesRenderedDate` | `BItm.ServicesRenderedDate` |
| `BItm.BillingPlanRule` | `BItm.BillingPlanRule` |
| `BItm.CompanyCode` | `BItm.CompanyCode` |
| `_BDoc.AccountingExchangeRate` | *Association* |
| `_BDoc.StatisticsCurrency` | *Association* |
| `_BDoc.FiscalYear` | *Association* |
| `_BDoc.FiscalPeriod` | *Association* |
| `_BDoc._CompanyCode.Currency` | *Association* |
| `_BDoc._CompanyCode.FiscalYearVariant` | *Association* |
| `BItm.ControllingArea` | `BItm.ControllingArea` |
| `BItm.CostCenter` | `BItm.CostCenter` |
| `BItm.StatisticsExchangeRate` | `BItm.StatisticsExchangeRate` |
| `BItm.CustomerGroup` | `BItm.CustomerGroup` |
| `BItm.SalesDistrict` | `BItm.SalesDistrict` |
| `BItm.AdditionalCustomerGroup1` | `BItm.AdditionalCustomerGroup1` |
| `BItm.AdditionalCustomerGroup2` | `BItm.AdditionalCustomerGroup2` |
| `BItm.AdditionalCustomerGroup3` | `BItm.AdditionalCustomerGroup3` |
| `BItm.AdditionalCustomerGroup4` | `BItm.AdditionalCustomerGroup4` |
| `BItm.AdditionalCustomerGroup5` | `BItm.AdditionalCustomerGroup5` |
| `BItm.OverallBillingStatus` | `BItm.OverallBillingStatus` |
| `BItm.ReferenceSDDocument` | `BItm.ReferenceSDDocument` |
| `BItm.ReferenceSDDocumentItem` | `BItm.ReferenceSDDocumentItem` |
| `BItm.ReferenceSDDocumentCategory` | `BItm.ReferenceSDDocumentCategory` |
| `BItm.SalesDocument` | `BItm.SalesDocument` |
| `BItm.SalesDocumentItem` | `BItm.SalesDocumentItem` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BDoc` | `I_BillingDocumentBasic` | [0..1] |
| `_ExtensionItem` | `E_BillingDocumentItem` | [0..1] |
| `_ExtensionHeader` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'CSDBDOCITMPECDX1'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'prcd_elements',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'PricingDocument',
                                                                                 'PricingDocumentItem',
                                                                                 'PricingProcedureStep',
                                                                                 'PricingProcedureCounter' ],
                                                                  tableElement: [ 'knumv', 'kposn', 'stunr', 'zaehk' ] },
                                                                { table: 'vbrk',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'BillingDocument' ],
                                                                  tableElement: [ 'vbeln' ] },
                                                                { table: 'vbrp',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'BillingDocument',
                                                                                 'BillingDocumentItem' ],
                                                                  tableElement: [ 'vbeln', 'posnr' ] } ] }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Data Extraction for Billing Doc Item Pricing Element Basic'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #XL }

@VDM.viewType: #CONSUMPTION

define view C_BillgDocItmPrcgElmntBscDEX_1
  as select from I_PricingElement           as PrcgElmnt

//    inner join I_BillingDocumentBasic    as BDoc     on PrcgElmnt.PricingDocument      =  BDoc.PricingDocument
//                                                    and PrcgElmnt.PricingDocumentItem != '000000'
//
//    inner join I_BillingDocExtdItemBasic as BItm     on      BDoc.BillingDocument      =  BItm.BillingDocument
//                                                    and PrcgElmnt.PricingDocumentItem  =  BItm.BillingDocumentItem

    inner join   I_BillingDocumentItemBasic as BItm
      on  PrcgElmnt.PricingDocument     = BItm.PricingDocument
      and PrcgElmnt.PricingDocumentItem = BItm.BillingDocumentItem

  association [0..1] to I_BillingDocumentBasic as _BDoc
    on PrcgElmnt.PricingDocument = _BDoc.PricingDocument

  // Extensibility
  association [0..1] to E_BillingDocumentItem  as  _ExtensionItem
    on  $projection.BillingDocument     = _ExtensionItem.BillingDocument
    and $projection.BillingDocumentItem = _ExtensionItem.BillingDocumentItem

  association [0..1] to E_BillingDocument      as  _ExtensionHeader
    on $projection.BillingDocument = _ExtensionHeader.BillingDocument

{
      // Key
  key PrcgElmnt.PricingDocument,
  key PrcgElmnt.PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,

      // Billing Document/Item
      BItm.BillingDocument,
      BItm.BillingDocumentItem,

      // Category
      ConditionApplication,
      ConditionType,
      ConditionCategory,
      ConditionClass,
      BItm.BillingDocumentCategory,
      BItm.BillingDocumentType,
      BItm.SDDocumentCategory,
      BItm.SalesDocumentItemCategory,
      BItm.SalesDocumentItemType,
      BItm.ReturnItemProcessingType,

      // Administration
      _BDoc.LastChangeDate,
      BItm.CreationDate,
      BItm.CreationTime,

      // Organization
      BItm.SalesOrganization,
      BItm.DistributionChannel,
      BItm.OrganizationDivision,
      BItm.SalesOffice,
      BItm.SalesGroup,

      // Partner
      BItm.SoldToParty,
      BItm.PayerParty,
      BItm.BillToParty,
      BItm.ShipToParty,
      BItm.SalesEmployee,
      BItm.ResponsibleEmployee,

      // Product
      BItm.Material,

      @Analytics.internalName: #LOCAL
      BItm.Product,

      BItm.Division,
      BItm.InternationalArticleNumber,
      BItm.OriginallyRequestedMaterial,
      BItm.MaterialGroup,

      @Analytics.internalName: #LOCAL
      BItm.ProductGroup,

      BItm.AdditionalMaterialGroup1,
      BItm.AdditionalMaterialGroup2,
      BItm.AdditionalMaterialGroup3,
      BItm.AdditionalMaterialGroup4,
      BItm.AdditionalMaterialGroup5,
      BItm.MaterialCommissionGroup,

      // Pricing
      ConditionIsForStatistics,
      ConditionOrigin,

//      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,

      @Semantics.currencyCode: true
      PrcgElmnt.TransactionCurrency,

      ConditionInactiveReason,
      ConditionIsForConfiguration,
      VariantCondition,
      _BDoc.ExchangeRateType,
      BItm.PricingDate,
      BItm.PriceDetnExchangeRate,
      BItm.PriceDetnExchangeRateDate,
      BItm.StatisticalValueControl,

      // Billing
      BItm.BillingDocumentDate,
      _BDoc.BillingDocumentIsCancelled,
      BItm.BillingDocumentIsTemporary,
      BItm.BillingQuantityUnit,

//      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BItm.BillingQuantity,

      BItm.ServicesRenderedDate,
      BItm.BillingPlanRule,

      // Accounting
      BItm.CompanyCode,
      _BDoc.AccountingExchangeRate,
      _BDoc.StatisticsCurrency,
      _BDoc.FiscalYear,
      _BDoc.FiscalPeriod,
      _BDoc._CompanyCode.Currency,
      _BDoc._CompanyCode.FiscalYearVariant,
      BItm.ControllingArea,
      BItm.CostCenter,
      BItm.StatisticsExchangeRate,

      // Sales
      BItm.CustomerGroup,
      BItm.SalesDistrict,
      BItm.AdditionalCustomerGroup1,
      BItm.AdditionalCustomerGroup2,
      BItm.AdditionalCustomerGroup3,
      BItm.AdditionalCustomerGroup4,
      BItm.AdditionalCustomerGroup5,

      // Status
      BItm.OverallBillingStatus,

      // Reference
      BItm.ReferenceSDDocument,
      BItm.ReferenceSDDocumentItem,
      BItm.ReferenceSDDocumentCategory,
      BItm.SalesDocument,
      BItm.SalesDocumentItem
}

where BItm.BillingDocumentIsTemporary = ' '   -- excluding data from Temporary Billing Documents
  and (   BItm.SDDocumentCategory = 'M'    // Invoice
       or BItm.SDDocumentCategory = 'N'    // Invoice Canceled
       or BItm.SDDocumentCategory = 'O'    // Credit Memo
       or BItm.SDDocumentCategory = 'P'    // Debit Memo
       or BItm.SDDocumentCategory = 'S'    // Credit Memo Canceled
       or BItm.SDDocumentCategory = 'U'    // Pro Forma Invoice
       or BItm.SDDocumentCategory = '5'    // Intercompany Invoice
       or BItm.SDDocumentCategory = '6'    // Intercompany Credit Memo
       or BItm.SDDocumentCategory = 'DPRQ' // Down Payment Request
       or BItm.SDDocumentCategory = 'DPCC' // Down Payment Cancellation  
       or BItm.SDDocumentCategory = 'PBD') // Preliminary Billing Document
```
