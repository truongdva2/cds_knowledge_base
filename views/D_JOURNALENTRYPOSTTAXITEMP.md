---
name: D_JOURNALENTRYPOSTTAXITEMP
description: D Journal EntryPOSTTAXITEMP
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
  - tax
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTTAXITEMP

**D Journal EntryPOSTTAXITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAccountLineItem          :docln6;` | `GLAccountLineItem          :docln6;` |
| `TaxCode                    :mwskz;` | `TaxCode                    :mwskz;` |
| `TaxItemClassification      :ktosl;` | `TaxItemClassification      :ktosl;` |
| `ConditionType              :kschl;` | `ConditionType              :kschl;` |
| `TaxJurisdiction            :txjcd;` | `TaxJurisdiction            :txjcd;` |
| `TaxJurisdictionLevel       :acpi_txjcd_level;` | `TaxJurisdictionLevel       :acpi_txjcd_level;` |
| `LowestLevelTaxJurisdiction :acpi_txjcd_deep;` | `LowestLevelTaxJurisdiction :acpi_txjcd_deep;` |
| `TaxItemAcctgDocItemRef     :taxps;` | `TaxItemAcctgDocItemRef     :taxps;` |
| `TaxRate                    :msatz_f05l;` | `TaxRate                    :msatz_f05l;` |
| `TaxDeterminationDate       :acpi_txdat;` | `TaxDeterminationDate       :acpi_txdat;` |
| `IsDirectTaxPosting         :bapi_flg_dir;` | `IsDirectTaxPosting         :bapi_flg_dir;` |
| `TaxCountry                 :fot_tax_country;` | `TaxCountry                 :fot_tax_country;` |
| `_CurrencyAmount            : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;` | *Association* |
| `_JournalEntryPost          : association to parent D_JournalEntryPostParameter;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry Tax Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostTaxItemP
{
  //key DummyKey                   :abap.char(1);
      GLAccountLineItem          :docln6;
      TaxCode                    :mwskz;
      TaxItemClassification      :ktosl;
      ConditionType              :kschl;
      TaxJurisdiction            :txjcd;
      TaxJurisdictionLevel       :acpi_txjcd_level;
      LowestLevelTaxJurisdiction :acpi_txjcd_deep;
      TaxItemAcctgDocItemRef     :taxps;
      TaxRate                    :msatz_f05l;
      TaxDeterminationDate       :acpi_txdat;
      IsDirectTaxPosting         :bapi_flg_dir;
      TaxCountry                 :fot_tax_country;
      _CurrencyAmount            : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost          : association to parent D_JournalEntryPostParameter;
      
}
```
