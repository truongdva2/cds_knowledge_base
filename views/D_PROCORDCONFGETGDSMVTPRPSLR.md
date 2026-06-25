---
name: D_PROCORDCONFGETGDSMVTPRPSLR
description: D Procordconfgetgdsmvtprpslr
app_component: PP-SFC-EXE-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - PP-SFC-EXE
  - component:PP-SFC-EXE-CON-2CL
  - lob:Manufacturing
---
# D_PROCORDCONFGETGDSMVTPRPSLR

**D Procordconfgetgdsmvtprpslr**

| Property | Value |
|---|---|
| App Component | `PP-SFC-EXE-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConfirmationGroup        : pph_rueck;` | `ConfirmationGroup        : pph_rueck;` |
| `OrderType                : manufacturingordertype ;` | `OrderType                : manufacturingordertype ;` |
| `OrderID                  : manufacturingorder;` | `OrderID                  : manufacturingorder;` |
| `OrderItem                : manufacturingorderitem;` | `OrderItem                : manufacturingorderitem;` |
| `ManufacturingOrderCategory : manufacturingordercategory;` | `ManufacturingOrderCategory : manufacturingordercategory;` |
| `Material                 : matnr;` | `Material                 : matnr;` |
| `Plant                    : werks_d;` | `Plant                    : werks_d;` |
| `Reservation              : rsnum;` | `Reservation              : rsnum;` |
| `ReservationItem          : nsdm_rspos;` | `ReservationItem          : nsdm_rspos;` |
| `StorageLocation          : storagelocation;` | `StorageLocation          : storagelocation;` |
| `Batch                    : charg_d;` | `Batch                    : charg_d;` |
| `InventoryValuationType   : pph_bwtar;` | `InventoryValuationType   : pph_bwtar;` |
| `GoodsMovementType        : pph_bwart;` | `GoodsMovementType        : pph_bwart;` |
| `GoodsMovementReasonCode  : mb_grbew;` | `GoodsMovementReasonCode  : mb_grbew;` |
| `GoodsMovementRefDocType  : nsdm_kzbew;` | `GoodsMovementRefDocType  : nsdm_kzbew;` |
| `InventoryUsabilityCode   : nsdm_insmk;` | `InventoryUsabilityCode   : nsdm_insmk;` |
| `InventorySpecialStockType: nsdm_spcl_stock_type;` | `InventorySpecialStockType: nsdm_spcl_stock_type;` |
| `SalesOrder               : co_kdauf;` | `SalesOrder               : co_kdauf;` |
| `SalesOrderItem           : co_kdpos;` | `SalesOrderItem           : co_kdpos;` |
| `WBSElementExternalID     : vdm_ps_posid;` | `WBSElementExternalID     : vdm_ps_posid;` |
| `Supplier                 : lifnr;` | `Supplier                 : lifnr;` |
| `Customer                 : kunnr;` | `Customer                 : kunnr;` |
| `ReservationIsFinallyIssued : boolean;` | `ReservationIsFinallyIssued : boolean;` |
| `IsCompletelyDelivered   : boolean;` | `IsCompletelyDelivered   : boolean;` |
| `ShelfLifeExpirationDate : vfdat;` | `ShelfLifeExpirationDate : vfdat;` |
| `ManufactureDate         : hsdat;` | `ManufactureDate         : hsdat;` |
| `StorageType              : lgtyp;` | `StorageType              : lgtyp;` |
| `StorageBin               : lgpla;` | `StorageBin               : lgpla;` |
| `EWMWarehouse             : /scwm/lgnum;` | `EWMWarehouse             : /scwm/lgnum;` |
| `EWMStorageBin            : /scwm/lgpla;` | `EWMStorageBin            : /scwm/lgpla;` |
| `EntryUnit                : erfme;` | `EntryUnit                : erfme;` |
| `EntryUnitISOCode         : isocd_unit;` | `EntryUnitISOCode         : isocd_unit;` |
| `EntryUnitSAPCode         : meinsint;` | `EntryUnitSAPCode         : meinsint;` |
| `QuantityInEntryUnit      : pph_erfmg;` | `QuantityInEntryUnit      : pph_erfmg;` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'Goods Movements Proposal for Process Order Confirmation'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//// Odata CDS A_ProcOrdConfMatlDocItem is used as a reference for fields
define abstract entity D_ProcOrdConfGetGdsMvtPrpslR
{
        ConfirmationGroup        : pph_rueck;
        OrderType                : manufacturingordertype ;
        OrderID                  : manufacturingorder;
        OrderItem                : manufacturingorderitem;
        ManufacturingOrderCategory : manufacturingordercategory;
        Material                 : matnr;
        Plant                    : werks_d;
        Reservation              : rsnum;
        ReservationItem          : nsdm_rspos;
        StorageLocation          : storagelocation;
        Batch                    : charg_d;
        InventoryValuationType   : pph_bwtar;
        GoodsMovementType        : pph_bwart;
        GoodsMovementReasonCode  : mb_grbew;
        GoodsMovementRefDocType  : nsdm_kzbew;
        InventoryUsabilityCode   : nsdm_insmk;
        InventorySpecialStockType: nsdm_spcl_stock_type; 
        SalesOrder               : co_kdauf; 
        SalesOrderItem           : co_kdpos;
        WBSElementExternalID     : vdm_ps_posid; 
        Supplier                 : lifnr;
        Customer                 : kunnr;
        ReservationIsFinallyIssued : boolean;
        IsCompletelyDelivered   : boolean;
        ShelfLifeExpirationDate : vfdat;
        ManufactureDate         : hsdat;
        StorageType              : lgtyp;
        StorageBin               : lgpla;
        EWMWarehouse             : /scwm/lgnum; 
        EWMStorageBin            : /scwm/lgpla; 
        EntryUnit                : erfme;
        EntryUnitISOCode         : isocd_unit; 
        EntryUnitSAPCode         : meinsint;  
        @Semantics.quantity.unitOfMeasure: 'EntryUnit' 
        QuantityInEntryUnit      : pph_erfmg;
}
```
