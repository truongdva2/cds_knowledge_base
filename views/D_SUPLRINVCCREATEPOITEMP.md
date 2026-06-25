---
name: D_SUPLRINVCCREATEPOITEMP
description: D Suplrinvccreatepoitemp
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
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEPOITEMP

**D Suplrinvccreatepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `currencyCode: 'DocumentCurrency'} }` | `currencyCode: 'DocumentCurrency'} }` |
| `SupplierInvoiceItemAmount      : wrbtr_cs;` | `SupplierInvoiceItemAmount      : wrbtr_cs;` |
| `PurchaseOrderQuantityUnit      : bstme;` | `PurchaseOrderQuantityUnit      : bstme;` |
| `QuantityInPurchaseOrderUnit    : menge_d;` | `QuantityInPurchaseOrderUnit    : menge_d;` |
| `PurchaseOrderPriceUnit         : bprme;` | `PurchaseOrderPriceUnit         : bprme;` |
| `QtyInPurchaseOrderPriceUnit    : bpmng;` | `QtyInPurchaseOrderPriceUnit    : bpmng;` |
| `SuplrInvcDeliveryCostCndnType  : kschl;` | `SuplrInvcDeliveryCostCndnType  : kschl;` |
| `SuplrInvcDeliveryCostCndnStep  : stunr;` | `SuplrInvcDeliveryCostCndnStep  : stunr;` |
| `SuplrInvcDeliveryCostCndnCount : dzaehk;` | `SuplrInvcDeliveryCostCndnCount : dzaehk;` |
| `FreightSupplier                : lifnr;` | `FreightSupplier                : lifnr;` |
| `ServiceEntrySheet              : lblni;` | `ServiceEntrySheet              : lblni;` |
| `ServiceEntrySheetItem          : extrow;` | `ServiceEntrySheetItem          : extrow;` |
| `SupplierInvoiceItemText        : sgtxt;` | `SupplierInvoiceItemText        : sgtxt;` |
| `IsNotCashDiscountLiable        : xskrl;` | `IsNotCashDiscountLiable        : xskrl;` |
| `TaxCountry                     : fot_tax_country;` | `TaxCountry                     : fot_tax_country;` |
| `IsFinallyInvoiced              : erekz;` | `IsFinallyInvoiced              : erekz;` |
| `_AccountAssignments            : composition [0..*] of D_SuplrInvcCreateAccAssgmtP;` | *Association* |
| `_SupplierInvoice               : association to parent D_SuplrInvcCreateP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Items with Purchase Order Reference'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_SuplrInvcCreatePOItemP
{
      SupplierInvoiceItem            : rblgp;
      PurchaseOrder                  : ebeln; 
      PurchaseOrderItem              : ebelp;
      ReferenceDocument              : lfbnr; 
      ReferenceDocumentFiscalYear    : lfgja; 
      ReferenceDocumentItem          : lfpos;
      SuplrInvcIsSubsqntDebitCrdt    : tbtkz;
      TaxCode                        : mwskz;
      TaxJurisdiction                : txjcd;
      @Semantics.currencyCode        : true
      DocumentCurrency               : waers; 
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      SupplierInvoiceItemAmount      : wrbtr_cs;
      PurchaseOrderQuantityUnit      : bstme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      QuantityInPurchaseOrderUnit    : menge_d;
      @Semantics.unitOfMeasure       : true
      PurchaseOrderPriceUnit         : bprme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QtyInPurchaseOrderPriceUnit    : bpmng;
      SuplrInvcDeliveryCostCndnType  : kschl;
      SuplrInvcDeliveryCostCndnStep  : stunr;
      SuplrInvcDeliveryCostCndnCount : dzaehk;
      FreightSupplier                : lifnr;
      ServiceEntrySheet              : lblni; 
      ServiceEntrySheetItem          : extrow; 
      SupplierInvoiceItemText        : sgtxt;
      IsNotCashDiscountLiable        : xskrl;
      TaxCountry                     : fot_tax_country;
      IsFinallyInvoiced              : erekz;

      _AccountAssignments            : composition [0..*] of D_SuplrInvcCreateAccAssgmtP;
      _SupplierInvoice               : association to parent D_SuplrInvcCreateP;
}
```
