---
name: D_JOURNALENTRYPOSTPARAMETER
description: D Journal EntryPOSTPARAMETER
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
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTPARAMETER

**D Journal EntryPOSTPARAMETER**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AccountingDocument           : belnr_d;` | `AccountingDocument           : belnr_d;` |
| `BusinessTransactionType      : glvor;` | `BusinessTransactionType      : glvor;` |
| `AccountingDocumentType       : blart;` | `AccountingDocumentType       : blart;` |
| `LedgerGroup                  : fagl_ldgrp;` | `LedgerGroup                  : fagl_ldgrp;` |
| `DocumentReferenceID          : xblnr;` | `DocumentReferenceID          : xblnr;` |
| `AccountingDocumentHeaderText : bktxt;` | `AccountingDocumentHeaderText : bktxt;` |
| `InvoiceReferenceDocument     : awkey_reb;` | `InvoiceReferenceDocument     : awkey_reb;` |
| `CreatedByUser                : usnam;` | `CreatedByUser                : usnam;` |
| `CompanyCode                  : bukrs;` | `CompanyCode                  : bukrs;` |
| `DocumentDate                 : bldat;` | `DocumentDate                 : bldat;` |
| `PostingDate                  : budat;` | `PostingDate                  : budat;` |
| `TaxReportingDate             : vatdate;` | `TaxReportingDate             : vatdate;` |
| `TaxDeterminationDate         : txdat;` | `TaxDeterminationDate         : txdat;` |
| `TaxFulfillmentDate           : fot_fulfilldate;` | `TaxFulfillmentDate           : fot_fulfilldate;` |
| `InvoiceReceiptDate           : reindat;` | `InvoiceReceiptDate           : reindat;` |
| `ExchangeRateDate             : wwert_d;` | `ExchangeRateDate             : wwert_d;` |
| `IsNegativePosting            : xnegp;` | `IsNegativePosting            : xnegp;` |
| `PostingFiscalPeriod          : monat;` | `PostingFiscalPeriod          : monat;` |
| `Reference1InDocumentHeader   : fins_xref1_hd;` | `Reference1InDocumentHeader   : fins_xref1_hd;` |
| `Reference2InDocumentHeader   : fins_xref2_hd;` | `Reference2InDocumentHeader   : fins_xref2_hd;` |
| `JrnlEntryCntrySpecificRef1   : fac_glo_ref1_hd;` | `JrnlEntryCntrySpecificRef1   : fac_glo_ref1_hd;` |
| `JrnlEntryCntrySpecificDate1  : fac_glo_dat1_hd;` | `JrnlEntryCntrySpecificDate1  : fac_glo_dat1_hd;` |
| `JrnlEntryCntrySpecificRef2   : fac_glo_ref2_hd;` | `JrnlEntryCntrySpecificRef2   : fac_glo_ref2_hd;` |
| `JrnlEntryCntrySpecificDate2  : fac_glo_dat2_hd;` | `JrnlEntryCntrySpecificDate2  : fac_glo_dat2_hd;` |
| `JrnlEntryCntrySpecificRef3   : fac_glo_ref3_hd;` | `JrnlEntryCntrySpecificRef3   : fac_glo_ref3_hd;` |
| `JrnlEntryCntrySpecificDate3  : fac_glo_dat3_hd;` | `JrnlEntryCntrySpecificDate3  : fac_glo_dat3_hd;` |
| `JrnlEntryCntrySpecificRef4   : fac_glo_ref4_hd;` | `JrnlEntryCntrySpecificRef4   : fac_glo_ref4_hd;` |
| `JrnlEntryCntrySpecificDate4  : fac_glo_dat4_hd;` | `JrnlEntryCntrySpecificDate4  : fac_glo_dat4_hd;` |
| `JrnlEntryCntrySpecificRef5   : fac_glo_ref5_hd;` | `JrnlEntryCntrySpecificRef5   : fac_glo_ref5_hd;` |
| `JrnlEntryCntrySpecificDate5  : fac_glo_dat5_hd;` | `JrnlEntryCntrySpecificDate5  : fac_glo_dat5_hd;` |
| `JrnlEntryCntrySpecificBP1    : fac_glo_bp1_hd;` | `JrnlEntryCntrySpecificBP1    : fac_glo_bp1_hd;` |
| `JrnlEntryCntrySpecificBP2    : fac_glo_bp2_hd;` | `JrnlEntryCntrySpecificBP2    : fac_glo_bp2_hd;` |
| `ReversalReferenceDocumentKey : awkey_rev;` | `ReversalReferenceDocumentKey : awkey_rev;` |
| `ReversalReason               : acpi_stgrd;` | `ReversalReason               : acpi_stgrd;` |
| `PlannedReversalDate          : fis_stodt;` | `PlannedReversalDate          : fis_stodt;` |
| `_OneTimeCustomerSupplier     : composition [0..1] of D_JournalEntryPostCPDP;` | *Association* |
| `_GLItems                     : composition [0..*] of D_JournalEntryPostGLItemP;` | *Association* |
| `_ARItems                     : composition [0..*] of D_JournalEntryPostARItemP;` | *Association* |
| `_APItems                     : composition [0..*] of D_JournalEntryPostAPItemP;` | *Association* |
| `_TaxItems                    : composition [0..*] of D_JournalEntryPostTaxItemP;` | *Association* |
| `_WithHoldingTaxItems         : composition [0..*] of D_JournalEntryPostWhgdItemP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry Abstract View Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_JournalEntryPostParameter
{
  // key DummyKey                     : abap.char(1);
  AccountingDocument           : belnr_d;
  BusinessTransactionType      : glvor;
  AccountingDocumentType       : blart;
  LedgerGroup                  : fagl_ldgrp;
  DocumentReferenceID          : xblnr;
  AccountingDocumentHeaderText : bktxt;
  InvoiceReferenceDocument     : awkey_reb;
  CreatedByUser                : usnam;
  CompanyCode                  : bukrs;
  DocumentDate                 : bldat;
  PostingDate                  : budat;
  TaxReportingDate             : vatdate;
  TaxDeterminationDate         : txdat;
  TaxFulfillmentDate           : fot_fulfilldate;
  InvoiceReceiptDate           : reindat;
  ExchangeRateDate             : wwert_d;
  IsNegativePosting            : xnegp;
  PostingFiscalPeriod          : monat;
  Reference1InDocumentHeader   : fins_xref1_hd;
  Reference2InDocumentHeader   : fins_xref2_hd;
  JrnlEntryCntrySpecificRef1   : fac_glo_ref1_hd;
  JrnlEntryCntrySpecificDate1  : fac_glo_dat1_hd;
  JrnlEntryCntrySpecificRef2   : fac_glo_ref2_hd;
  JrnlEntryCntrySpecificDate2  : fac_glo_dat2_hd;
  JrnlEntryCntrySpecificRef3   : fac_glo_ref3_hd;
  JrnlEntryCntrySpecificDate3  : fac_glo_dat3_hd;
  JrnlEntryCntrySpecificRef4   : fac_glo_ref4_hd;
  JrnlEntryCntrySpecificDate4  : fac_glo_dat4_hd;
  JrnlEntryCntrySpecificRef5   : fac_glo_ref5_hd;
  JrnlEntryCntrySpecificDate5  : fac_glo_dat5_hd;
  JrnlEntryCntrySpecificBP1    : fac_glo_bp1_hd;
  JrnlEntryCntrySpecificBP2    : fac_glo_bp2_hd;
  ReversalReferenceDocumentKey : awkey_rev;
  ReversalReason               : acpi_stgrd;
  PlannedReversalDate          : fis_stodt;
  _OneTimeCustomerSupplier     : composition [0..1] of D_JournalEntryPostCPDP;
  _GLItems                     : composition [0..*] of D_JournalEntryPostGLItemP;
  _ARItems                     : composition [0..*] of D_JournalEntryPostARItemP;
  _APItems                     : composition [0..*] of D_JournalEntryPostAPItemP;
  _TaxItems                    : composition [0..*] of D_JournalEntryPostTaxItemP;
  _WithHoldingTaxItems         : composition [0..*] of D_JournalEntryPostWhgdItemP;

}
```
