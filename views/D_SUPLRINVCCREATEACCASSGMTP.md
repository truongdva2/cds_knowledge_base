---
name: D_SUPLRINVCCREATEACCASSGMTP
description: D Suplrinvccreateaccassgmtp
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
  - transactional-processing
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEACCASSGMTP

**D Suplrinvccreateaccassgmtp**

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
| `SuplrInvcAcctAssignmentAmount : wrbtr_cs;` | `SuplrInvcAcctAssignmentAmount : wrbtr_cs;` |
| `PurchaseOrderQuantityUnit     : bstme;` | `PurchaseOrderQuantityUnit     : bstme;` |
| `QuantityInPurchaseOrderUnit   : menge_d;` | `QuantityInPurchaseOrderUnit   : menge_d;` |
| `PurchaseOrderPriceUnit        : bprme;` | `PurchaseOrderPriceUnit        : bprme;` |
| `QtyInPurchaseOrderPriceUnit   : bpmng;` | `QtyInPurchaseOrderPriceUnit   : bpmng;` |
| `GLAccount                     : saknr;` | `GLAccount                     : saknr;` |
| `CostCenter                    : kostl;` | `CostCenter                    : kostl;` |
| `SalesOrder                    : vbeln;` | `SalesOrder                    : vbeln;` |
| `SalesOrderItem                : vbelp;` | `SalesOrderItem                : vbelp;` |
| `MasterFixedAsset              : anln1;` | `MasterFixedAsset              : anln1;` |
| `FixedAsset                    : anln2;` | `FixedAsset                    : anln2;` |
| `InternalOrder                 : aufnr;` | `InternalOrder                 : aufnr;` |
| `CommitmentItemShortID         : fmis_ci_internalname;` | `CommitmentItemShortID         : fmis_ci_internalname;` |
| `FundsCenter                   : fistl;` | `FundsCenter                   : fistl;` |
| `FunctionalArea                : fkber;` | `FunctionalArea                : fkber;` |
| `Fund                          : bp_geber;` | `Fund                          : bp_geber;` |
| `BusinessArea                  : gsber;` | `BusinessArea                  : gsber;` |
| `ControllingArea               : kokrs; //to be checked if this works in BOPF (direct input)` | `ControllingArea               : kokrs; //to be checked if this works in BOPF (direct input)` |
| `CostObject                    : kstrg;` | `CostObject                    : kstrg;` |
| `WBSElementInternalID          : ps_s4_pspnr;` | `WBSElementInternalID          : ps_s4_pspnr;` |
| `GrantID                       : gm_grant_nbr;` | `GrantID                       : gm_grant_nbr;` |
| `SupplierInvoiceItemText       : sgtxt; //needs to be enabled in BOPF first` | `SupplierInvoiceItemText       : sgtxt; //needs to be enabled in BOPF first` |
| `TaxCountry                    : fot_tax_country;` | `TaxCountry                    : fot_tax_country;` |
| `BudgetPeriod                  : fm_budget_period;` | `BudgetPeriod                  : fm_budget_period;` |
| `_SupplierInvoiceItemPurOrdRef : association to parent D_SuplrInvcCreatePOItemP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Account Assignments'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcCreateAccAssgmtP
{
      OrdinalNumber                 : cobl_nr;
      TaxCode                       : mwskz;
      TaxJurisdiction               : txjcd;
      @Semantics.currencyCode       : true
      DocumentCurrency              : waers;
      @Semantics                    : { amount : {currencyCode: 'DocumentCurrency'} }
      SuplrInvcAcctAssignmentAmount : wrbtr_cs;
      PurchaseOrderQuantityUnit     : bstme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      QuantityInPurchaseOrderUnit   : menge_d;
      @Semantics.unitOfMeasure      : true
      PurchaseOrderPriceUnit        : bprme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QtyInPurchaseOrderPriceUnit   : bpmng;
      GLAccount                     : saknr; 
      CostCenter                    : kostl; 
      SalesOrder                    : vbeln; 
      SalesOrderItem                : vbelp;
      MasterFixedAsset              : anln1;
      FixedAsset                    : anln2; 
      InternalOrder                 : aufnr; 
      CommitmentItemShortID         : fmis_ci_internalname;
      FundsCenter                   : fistl;
      FunctionalArea                : fkber;
      Fund                          : bp_geber;
      BusinessArea                  : gsber;
      ControllingArea               : kokrs; //to be checked if this works in BOPF (direct input)
      CostObject                    : kstrg;
      WBSElementInternalID          : ps_s4_pspnr;
      GrantID                       : gm_grant_nbr; 
      SupplierInvoiceItemText       : sgtxt; //needs to be enabled in BOPF first
      TaxCountry                    : fot_tax_country;
      BudgetPeriod                  : fm_budget_period;

      _SupplierInvoiceItemPurOrdRef : association to parent D_SuplrInvcCreatePOItemP;
}
```
