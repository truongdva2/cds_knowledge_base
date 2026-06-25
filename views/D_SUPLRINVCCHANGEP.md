---
name: D_SUPLRINVCCHANGEP
description: D Suplrinvcchangep
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
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCHANGEP

**D Suplrinvcchangep**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DocumentDate                   : bldat;` | `DocumentDate                   : bldat;` |
| `PostingDate                    : budat;` | `PostingDate                    : budat;` |
| `SupplierInvoiceIDByInvcgParty  : xblnr1;` | `SupplierInvoiceIDByInvcgParty  : xblnr1;` |
| `InvoicingParty                 : lifre;` | `InvoicingParty                 : lifre;` |
| `InvoiceReceiptDate             : reindat;` | `InvoiceReceiptDate             : reindat;` |
| `AssignmentReference            : dzuonr;` | `AssignmentReference            : dzuonr;` |
| `InvoiceReference               : awref_reb;` | `InvoiceReference               : awref_reb;` |
| `InvoiceReferenceFiscalYear     : rebzj;` | `InvoiceReferenceFiscalYear     : rebzj;` |
| `BusinessArea                   : gsber;` | `BusinessArea                   : gsber;` |
| `SuplrInvcLstChgDteTmeTxt       : mmiv_si_lastchangedatetime_txt;` | `SuplrInvcLstChgDteTmeTxt       : mmiv_si_lastchangedatetime_txt;` |
| `ReconciliationAccount          :hkont;` | `ReconciliationAccount          :hkont;` |
| `TaxReportingDate               : vatdate;` | `TaxReportingDate               : vatdate;` |
| `TaxFulfillmentDate             : fot_fulfilldate;` | `TaxFulfillmentDate             : fot_fulfilldate;` |
| `PaymentTerms                   : dzterm;` | `PaymentTerms                   : dzterm;` |
| `DueCalculationBaseDate         : dzfbdt;` | `DueCalculationBaseDate         : dzfbdt;` |
| `CashDiscount1Days              : dzbd1t;` | `CashDiscount1Days              : dzbd1t;` |
| `CashDiscount1Percent           : dzbd1p;` | `CashDiscount1Percent           : dzbd1p;` |
| `CashDiscount2Days              : dzbd2t;` | `CashDiscount2Days              : dzbd2t;` |
| `CashDiscount2Percent           : dzbd2p;` | `CashDiscount2Percent           : dzbd2p;` |
| `NetPaymentDays                 : dzbd3t;` | `NetPaymentDays                 : dzbd3t;` |
| `PaymentBlockingReason          : dzlspr;` | `PaymentBlockingReason          : dzlspr;` |
| `PaymentMethod                  : dzlsch;` | `PaymentMethod                  : dzlsch;` |
| `PaymentMethodSupplement        : uzawe;` | `PaymentMethodSupplement        : uzawe;` |
| `StateCentralBankPaymentReason  : lzbkz;` | `StateCentralBankPaymentReason  : lzbkz;` |
| `SupplyingCountry               : landl;` | `SupplyingCountry               : landl;` |
| `PaymentReference               : kidno;` | `PaymentReference               : kidno;` |
| `FixedCashDiscount              : dzbfix;` | `FixedCashDiscount              : dzbfix;` |
| `PaytSlipWthRefSubscriber       : esrnr;` | `PaytSlipWthRefSubscriber       : esrnr;` |
| `PaytSlipWthRefCheckDigit       : esrpz;` | `PaytSlipWthRefCheckDigit       : esrpz;` |
| `PaytSlipWthRefReference        : esrre;` | `PaytSlipWthRefReference        : esrre;` |
| `BPBankAccountInternalID        : bvtyp;` | `BPBankAccountInternalID        : bvtyp;` |
| `HouseBank                      : hbkid;` | `HouseBank                      : hbkid;` |
| `HouseBankAccount               : hktid;` | `HouseBankAccount               : hktid;` |
| `IBAN                           : iban;` | `IBAN                           : iban;` |
| `OneTimeAcctCntrySpecificRef1   : glo_log_ref1_ot;` | `OneTimeAcctCntrySpecificRef1   : glo_log_ref1_ot;` |
| `PaymentReason                  : farp_payt_rsn;` | `PaymentReason                  : farp_payt_rsn;` |
| `DocumentHeaderText             : bktxt;` | `DocumentHeaderText             : bktxt;` |
| `SupplierPostingLineItemText    : sgtxt;` | `SupplierPostingLineItemText    : sgtxt;` |
| `IsEUTriangularDeal             : xegdr;` | `IsEUTriangularDeal             : xegdr;` |
| `DeliveryOfGoodsReportingCntry  : egmld_bsez;` | `DeliveryOfGoodsReportingCntry  : egmld_bsez;` |
| `BusinessPlace                  : bupla;` | `BusinessPlace                  : bupla;` |
| `BusinessSectionCode            : secco;` | `BusinessSectionCode            : secco;` |
| `JrnlEntryCntrySpecificRef1     : fac_glo_ref1_hd;` | `JrnlEntryCntrySpecificRef1     : fac_glo_ref1_hd;` |
| `JrnlEntryCntrySpecificDate1    : fac_glo_dat1_hd;` | `JrnlEntryCntrySpecificDate1    : fac_glo_dat1_hd;` |
| `JrnlEntryCntrySpecificRef2     : fac_glo_ref2_hd;` | `JrnlEntryCntrySpecificRef2     : fac_glo_ref2_hd;` |
| `JrnlEntryCntrySpecificDate2    : fac_glo_dat2_hd;` | `JrnlEntryCntrySpecificDate2    : fac_glo_dat2_hd;` |
| `JrnlEntryCntrySpecificRef3     : fac_glo_ref3_hd;` | `JrnlEntryCntrySpecificRef3     : fac_glo_ref3_hd;` |
| `JrnlEntryCntrySpecificDate3    : fac_glo_dat3_hd;` | `JrnlEntryCntrySpecificDate3    : fac_glo_dat3_hd;` |
| `JrnlEntryCntrySpecificRef4     : fac_glo_ref4_hd;` | `JrnlEntryCntrySpecificRef4     : fac_glo_ref4_hd;` |
| `JrnlEntryCntrySpecificDate4    : fac_glo_dat4_hd;` | `JrnlEntryCntrySpecificDate4    : fac_glo_dat4_hd;` |
| `JrnlEntryCntrySpecificRef5     : fac_glo_ref5_hd;` | `JrnlEntryCntrySpecificRef5     : fac_glo_ref5_hd;` |
| `JrnlEntryCntrySpecificDate5    : fac_glo_dat5_hd;` | `JrnlEntryCntrySpecificDate5    : fac_glo_dat5_hd;` |
| `JrnlEntryCntrySpecificBP1      : fac_glo_bp1_hd;` | `JrnlEntryCntrySpecificBP1      : fac_glo_bp1_hd;` |
| `JrnlEntryCntrySpecificBP2      : fac_glo_bp2_hd;` | `JrnlEntryCntrySpecificBP2      : fac_glo_bp2_hd;` |
| `_ItemsWithPOReference          : composition [0..*] of D_SuplrInvcChangePOItemP;` | *Association* |
| `_GLItems                       : composition [0..*] of D_SuplrInvcChangeGLItemP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SuplrInvcChangeP
{
      DocumentDate                   : bldat;
      PostingDate                    : budat;
      SupplierInvoiceIDByInvcgParty  : xblnr1;
      InvoicingParty                 : lifre;
      InvoiceReceiptDate             : reindat;
      AssignmentReference            : dzuonr;
      InvoiceReference               : awref_reb;
      InvoiceReferenceFiscalYear     : rebzj;
      BusinessArea                   : gsber;
      SuplrInvcLstChgDteTmeTxt       : mmiv_si_lastchangedatetime_txt;
      ReconciliationAccount          :hkont;

      //Tax
      TaxReportingDate               : vatdate;
      TaxFulfillmentDate             : fot_fulfilldate;

      //Payment
      PaymentTerms                   : dzterm;
      DueCalculationBaseDate         : dzfbdt;
      CashDiscount1Days              : dzbd1t;
      CashDiscount1Percent           : dzbd1p;
      CashDiscount2Days              : dzbd2t;
      CashDiscount2Percent           : dzbd2p;
      NetPaymentDays                 : dzbd3t;
      PaymentBlockingReason          : dzlspr;
      PaymentMethod                  : dzlsch;
      PaymentMethodSupplement        : uzawe;
      StateCentralBankPaymentReason  : lzbkz;
      SupplyingCountry               : landl;
      PaymentReference               : kidno;
      FixedCashDiscount              : dzbfix;
      PaytSlipWthRefSubscriber       : esrnr;
      PaytSlipWthRefCheckDigit       : esrpz;
      PaytSlipWthRefReference        : esrre;
      BPBankAccountInternalID        : bvtyp;
      HouseBank                      : hbkid;
      HouseBankAccount               : hktid;
      IBAN                           : iban;
      OneTimeAcctCntrySpecificRef1   : glo_log_ref1_ot;
      PaymentReason                  : farp_payt_rsn; 

      //Short texts
      DocumentHeaderText             : bktxt;
      SupplierPostingLineItemText    : sgtxt;

      //EU fields
      IsEUTriangularDeal             : xegdr;
      DeliveryOfGoodsReportingCntry  : egmld_bsez;

      //Localization fields
      BusinessPlace                  : bupla;
      BusinessSectionCode            : secco;

      //Generic localization fields
      JrnlEntryCntrySpecificRef1     : fac_glo_ref1_hd;
      JrnlEntryCntrySpecificDate1    : fac_glo_dat1_hd;
      JrnlEntryCntrySpecificRef2     : fac_glo_ref2_hd;
      JrnlEntryCntrySpecificDate2    : fac_glo_dat2_hd;
      JrnlEntryCntrySpecificRef3     : fac_glo_ref3_hd;
      JrnlEntryCntrySpecificDate3    : fac_glo_dat3_hd;
      JrnlEntryCntrySpecificRef4     : fac_glo_ref4_hd;
      JrnlEntryCntrySpecificDate4    : fac_glo_dat4_hd;
      JrnlEntryCntrySpecificRef5     : fac_glo_ref5_hd;
      JrnlEntryCntrySpecificDate5    : fac_glo_dat5_hd;
      JrnlEntryCntrySpecificBP1      : fac_glo_bp1_hd;
      JrnlEntryCntrySpecificBP2      : fac_glo_bp2_hd;

      _ItemsWithPOReference          : composition [0..*] of D_SuplrInvcChangePOItemP;
      _GLItems                       : composition [0..*] of D_SuplrInvcChangeGLItemP;
}
```
