---
name: D_JOURNALENTRYPOSTAPITEMP
description: D Journal EntryPOSTAPITEMP
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTAPITEMP

**D Journal EntryPOSTAPITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAccountLineItem             :docln6;` | `GLAccountLineItem             :docln6;` |
| `Supplier                      :lifnr;` | `Supplier                      :lifnr;` |
| `GLAccount                     :hkont;` | `GLAccount                     :hkont;` |
| `DocumentItemText              :sgtxt;` | `DocumentItemText              :sgtxt;` |
| `AssignmentReference           :acpi_zuonr;` | `AssignmentReference           :acpi_zuonr;` |
| `Reference1IDByBusinessPartner :xref1;` | `Reference1IDByBusinessPartner :xref1;` |
| `Reference2IDByBusinessPartner :xref2;` | `Reference2IDByBusinessPartner :xref2;` |
| `Reference3IDByBusinessPartner :xref3;` | `Reference3IDByBusinessPartner :xref3;` |
| `PaymentTerms                  :acpi_zterm;` | `PaymentTerms                  :acpi_zterm;` |
| `DueCalculationBaseDate        :acpi_zfbdt;` | `DueCalculationBaseDate        :acpi_zfbdt;` |
| `CashDiscount1Days             :acpi_zbd1t;` | `CashDiscount1Days             :acpi_zbd1t;` |
| `CashDiscount1Percent          :acpi_zbd1p;` | `CashDiscount1Percent          :acpi_zbd1p;` |
| `CashDiscount2Days             :acpi_zbd2t;` | `CashDiscount2Days             :acpi_zbd2t;` |
| `CashDiscount2Percent          :acpi_zbd2p;` | `CashDiscount2Percent          :acpi_zbd2p;` |
| `NetPaymentDays                :acpi_zbd3t;` | `NetPaymentDays                :acpi_zbd3t;` |
| `PaymentMethod                 :acpi_zlsch;` | `PaymentMethod                 :acpi_zlsch;` |
| `PaymentMethodSupplement       :uzawe;` | `PaymentMethodSupplement       :uzawe;` |
| `PaymentReference              :acpi_kidno;` | `PaymentReference              :acpi_kidno;` |
| `PaymentBlockingReason         :acpi_zlspr;` | `PaymentBlockingReason         :acpi_zlspr;` |
| `AlternativePayee              :vvabwze;` | `AlternativePayee              :vvabwze;` |
| `BPBankAccountInternalID       :vvbvtypabw;` | `BPBankAccountInternalID       :vvbvtypabw;` |
| `StateCentralBankPaymentReason :lzbkz;` | `StateCentralBankPaymentReason :lzbkz;` |
| `OplAcctgDocItmCntrySpcfcRef1  :fac_glo_ref1;` | `OplAcctgDocItmCntrySpcfcRef1  :fac_glo_ref1;` |
| `BranchAccount                 :acpi_filkd;` | `BranchAccount                 :acpi_filkd;` |
| `BusinessPlace                 :acpi_branch;` | `BusinessPlace                 :acpi_branch;` |
| `BusinessSectionCode           :secco;` | `BusinessSectionCode           :secco;` |
| `HouseBank                     :hbkid;` | `HouseBank                     :hbkid;` |
| `HouseBankAccount              :hktid;` | `HouseBankAccount              :hktid;` |
| `TaxCountry                    :fot_tax_country;` | `TaxCountry                    :fot_tax_country;` |
| `SpecialGLCode                 :acpi_umskz;` | `SpecialGLCode                 :acpi_umskz;` |
| `TaxCode                       :mwskz;` | `TaxCode                       :mwskz;` |
| `TaxJurisdiction               :txjcd;` | `TaxJurisdiction               :txjcd;` |
| `VATRegistration               :stceg;` | `VATRegistration               :stceg;` |
| `PaymentReason                 :farp_payt_rsn;` | `PaymentReason                 :farp_payt_rsn;` |
| `JointVenture                  :jv_name;` | `JointVenture                  :jv_name;` |
| `JointVentureRecoveryCode                   :jv_recind;` | `JointVentureRecoveryCode                   :jv_recind;` |
| `JointVentureEquityGroup                   :jv_egroup;` | `JointVentureEquityGroup                   :jv_egroup;` |
| `WBSElement                    :ps_posid_edit;` | `WBSElement                    :ps_posid_edit;` |
| `ProfitCenter                  :prctr;` | `ProfitCenter                  :prctr;` |
| `_CurrencyAmount               : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;` | *Association* |
| `_JournalEntryPost             : association to parent D_JournalEntryPostParameter;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry AP Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostAPItemP
{
 // key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      Supplier                      :lifnr;
      GLAccount                     :hkont;
      DocumentItemText              :sgtxt;
      AssignmentReference           :acpi_zuonr;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3;
      PaymentTerms                  :acpi_zterm;
      DueCalculationBaseDate        :acpi_zfbdt;
      CashDiscount1Days             :acpi_zbd1t;
      CashDiscount1Percent          :acpi_zbd1p;
      CashDiscount2Days             :acpi_zbd2t;
      CashDiscount2Percent          :acpi_zbd2p;
      NetPaymentDays                :acpi_zbd3t;
      PaymentMethod                 :acpi_zlsch;
      PaymentMethodSupplement       :uzawe;
      PaymentReference              :acpi_kidno;
      PaymentBlockingReason         :acpi_zlspr;
      AlternativePayee              :vvabwze;
      BPBankAccountInternalID       :vvbvtypabw;
      StateCentralBankPaymentReason :lzbkz;
      OplAcctgDocItmCntrySpcfcRef1  :fac_glo_ref1;
      BranchAccount                 :acpi_filkd;
      BusinessPlace                 :acpi_branch;
      BusinessSectionCode           :secco;
      HouseBank                     :hbkid;
      HouseBankAccount              :hktid;
      TaxCountry                    :fot_tax_country;
      SpecialGLCode                 :acpi_umskz;
      TaxCode                       :mwskz;
      TaxJurisdiction               :txjcd;
      VATRegistration               :stceg;
      PaymentReason                 :farp_payt_rsn;
      JointVenture                  :jv_name;
      JointVentureRecoveryCode                   :jv_recind;
      JointVentureEquityGroup                   :jv_egroup;
      WBSElement                    :ps_posid_edit;
      ProfitCenter                  :prctr;
      _CurrencyAmount               : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost             : association to parent D_JournalEntryPostParameter;
      
}
```
