---
name: I_SUPLRINVCITEMPURORDREFAPI01
description: Suplrinvcitempurordrefapi 01
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCITEMPURORDREFAPI01

**Suplrinvcitempurordrefapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key item.SupplierInvoice` | `item.SupplierInvoice` |
| `key item.FiscalYear` | `item.FiscalYear` |
| `key item.SupplierInvoiceItem` | `item.SupplierInvoiceItem` |
| `item.PurchaseOrder` | `item.PurchaseOrder` |
| `item.PurchaseOrderItem` | `item.PurchaseOrderItem` |
| `item.Plant` | `item.Plant` |
| `item.SupplierInvoiceItemText` | `item.SupplierInvoiceItemText` |
| `item.PurchaseOrderItemMaterial` | `item.PurchaseOrderItemMaterial` |
| `item.PurchaseOrderQuantityUnit` | `item.PurchaseOrderQuantityUnit` |
| `item.QuantityInPurchaseOrderUnit` | `item.QuantityInPurchaseOrderUnit` |
| `item.PurchaseOrderPriceUnit` | `item.PurchaseOrderPriceUnit` |
| `item.QtyInPurchaseOrderPriceUnit` | `item.QtyInPurchaseOrderPriceUnit` |
| `item.StockUnit` | `item.StockUnit` |
| `item.SuplrInvcDeliveryCostCndnType` | `item.SuplrInvcDeliveryCostCndnType` |
| `item.SuplrInvcDeliveryCostCndnStep` | `item.SuplrInvcDeliveryCostCndnStep` |
| `item.SuplrInvcDeliveryCostCndnCount` | `item.SuplrInvcDeliveryCostCndnCount` |
| `item.DocumentCurrency` | `item.DocumentCurrency` |
| `item.SupplierInvoiceItemAmount` | `item.SupplierInvoiceItemAmount` |
| `item.IsSubsequentDebitCredit` | `item.IsSubsequentDebitCredit` |
| `item.TaxCode` | `item.TaxCode` |
| `item.TaxJurisdiction` | `item.TaxJurisdiction` |
| `item.ReferenceDocument` | `item.ReferenceDocument` |
| `item.ReferenceDocumentFiscalYear` | `item.ReferenceDocumentFiscalYear` |
| `item.ReferenceDocumentItem` | `item.ReferenceDocumentItem` |
| `item.DebitCreditCode` | `item.DebitCreditCode` |
| `item.FreightSupplier` | `item.FreightSupplier` |
| `item.IsNotCashDiscountLiable` | `item.IsNotCashDiscountLiable` |
| `item.SuplrInvcItemHasPriceVariance` | `item.SuplrInvcItemHasPriceVariance` |
| `item.SuplrInvcItemHasQtyVariance` | `item.SuplrInvcItemHasQtyVariance` |
| `item.SuplrInvcItemHasDateVariance` | `item.SuplrInvcItemHasDateVariance` |
| `item.SuplrInvcItemHasOrdPrcQtyVarc` | `item.SuplrInvcItemHasOrdPrcQtyVarc` |
| `item.SuplrInvcItemHasOtherVariance` | `item.SuplrInvcItemHasOtherVariance` |
| `item.SuplrInvcItemHasAmountOutsdTol` | `item.SuplrInvcItemHasAmountOutsdTol` |
| `item.SuplrInvcItmHasQualityVariance` | `item.SuplrInvcItmHasQualityVariance` |
| `item.TaxCountry` | `item.TaxCountry` |
| `item.SuplrInvcItmUnplndDelivCost` | `item.SuplrInvcItmUnplndDelivCost` |
| `item.IsFinallyInvoiced` | `item.IsFinallyInvoiced` |
| `_SupplierInvoiceAPI01` | *Association* |
| `_SuplrInvcItmAcctAssgmtAPI01` | *Association* |
| `item._Currency` | `item._Currency` |
| `_UnitOfMeasure` | *Association* |
| `_PurOrdPriceUnitOfMeasure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_SuplrInvcItmAcctAssgmtAPI01` | `I_SuplrInvcItmAcctAssgmtAPI01` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISIPORDREFAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Purchase Order Ref of Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrInvcItemPurOrdRefAPI01
  as select from I_SupplierInvoiceItemPurOrdRef as item
    inner join   I_SupplierInvoiceAPI01 on  item.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and item.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01        as _SupplierInvoiceAPI01        on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                                      and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
  association [1..*] to I_SuplrInvcItmAcctAssgmtAPI01 as _SuplrInvcItmAcctAssgmtAPI01 on  $projection.SupplierInvoice     = _SuplrInvcItmAcctAssgmtAPI01.SupplierInvoice
                                                                                      and $projection.FiscalYear          = _SuplrInvcItmAcctAssgmtAPI01.FiscalYear
                                                                                      and $projection.SupplierInvoiceItem = _SuplrInvcItmAcctAssgmtAPI01.SupplierInvoiceItem
{
      //Key
  key item.SupplierInvoice,
  key item.FiscalYear,
  key item.SupplierInvoiceItem,

      item.PurchaseOrder,
      item.PurchaseOrderItem,
      item.Plant,
      item.SupplierInvoiceItemText,
      item.PurchaseOrderItemMaterial,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      item.PurchaseOrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      item.QuantityInPurchaseOrderUnit,
      @ObjectModel.foreignKey.association: '_PurOrdPriceUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      item.PurchaseOrderPriceUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      item.QtyInPurchaseOrderPriceUnit,
      @Semantics.unitOfMeasure: true
      item.StockUnit,
      item.SuplrInvcDeliveryCostCndnType,
      item.SuplrInvcDeliveryCostCndnStep,
      item.SuplrInvcDeliveryCostCndnCount,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      item.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.SupplierInvoiceItemAmount,
      item.IsSubsequentDebitCredit,
      item.TaxCode,
      item.TaxJurisdiction,
      item.ReferenceDocument,
      item.ReferenceDocumentFiscalYear,
      item.ReferenceDocumentItem,
      item.DebitCreditCode,
      item.FreightSupplier,
      item.IsNotCashDiscountLiable,
      item.SuplrInvcItemHasPriceVariance,
      item.SuplrInvcItemHasQtyVariance,
      item.SuplrInvcItemHasDateVariance,
      item.SuplrInvcItemHasOrdPrcQtyVarc,
      item.SuplrInvcItemHasOtherVariance,
      item.SuplrInvcItemHasAmountOutsdTol,
      item.SuplrInvcItmHasQualityVariance,
      item.TaxCountry,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.SuplrInvcItmUnplndDelivCost,
      item.IsFinallyInvoiced,

      _SupplierInvoiceAPI01,
      _SuplrInvcItmAcctAssgmtAPI01,
      item._Currency,
      _UnitOfMeasure,
      _PurOrdPriceUnitOfMeasure
}
```
