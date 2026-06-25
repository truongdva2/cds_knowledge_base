---
name: I_EDCJOURNALENTRYRECORDS
description: EDCJournal EntryRECORDS
app_component: CA-GTF-CSC-EDC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - journal-entry
  - component:CA-GTF-CSC-EDC
  - lob:Cross-Application Components
  - bo:JournalEntry
---
# I_EDCJOURNALENTRYRECORDS

**EDCJournal EntryRECORDS**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _EDCRelation.EDCType` | `_EDCRelation.EDCType` |
| `key _EDCRelation.CompanyCode` | `_EDCRelation.CompanyCode` |
| `key _EDCRelation.EDCCommonKey` | `_EDCRelation.EDCCommonKey` |
| `_EDCRelation.AccountingDocument` | *Association* |
| `_EDCRelation.FiscalYear` | *Association* |
| `_EDCRelation.EDCRecordUUID` | *Association* |
| `_EDCRelation.EDCCreatedOnDateTime` | *Association* |
| `_EDCRelation.EDCRepresentationType` | *Association* |
| `_EDCRelation.EDCRepresentationKey` | *Association* |
| `_JournalEntry.AccountingDocumentType` | *Association* |
| `_JournalEntry.DocumentDate` | *Association* |
| `_JournalEntry.PostingDate` | *Association* |
| `_JournalEntry.AccountingDocumentCreationDate` | *Association* |
| `_JournalEntry.TransactionCode` | *Association* |
| `_JournalEntry.IntercompanyTransaction` | *Association* |
| `_JournalEntry.DocumentReferenceID` | *Association* |
| `_JournalEntry.TransactionCurrency` | *Association* |
| `_JournalEntry.AccountingDocumentCategory` | *Association* |
| `_JournalEntry.BusinessTransactionType` | *Association* |
| `_JournalEntry.Branch` | *Association* |
| `_JournalEntry.IsDiscountDocument` | *Association* |
| `_JournalEntry.TaxReportingDate` | *Association* |
| `_JournalEntry.TaxFulfillmentDate` | *Association* |
| `_JournalEntry.AccountingDocumentClass` | *Association* |
| `_JournalEntry.IsReversal` | *Association* |
| `_JournalEntry.IsReversed` | *Association* |
| `_JournalEntry.TaxCountry` | *Association* |
| `_JournalEntry.WithholdingTaxReportingDate` | *Association* |
| `_JournalEntry._AccountingDocumentCategory` | *Association* |
| `_JournalEntry._AccountingDocumentType` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'EDC Relevant Journal Entry Records'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XXL,
  dataClass: #MIXED
}
@VDM: {
  viewType: #BASIC,
//  lifecycle.contract.type: #SAP_INTERNAL_API
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
define view entity I_EDCJournalEntryRecords
  as select from I_EDCAccountingDocRelation as _EDCRelation
    inner join   I_JournalEntry             as _JournalEntry on  _EDCRelation.CompanyCode        = _JournalEntry.CompanyCode
                                                             and _EDCRelation.AccountingDocument = _JournalEntry.AccountingDocument
                                                             and _EDCRelation.FiscalYear         = _JournalEntry.FiscalYear
{
  key _EDCRelation.EDCType,
  key _EDCRelation.CompanyCode,
  key _EDCRelation.EDCCommonKey,
      _EDCRelation.AccountingDocument,
      _EDCRelation.FiscalYear,
      _EDCRelation.EDCRecordUUID,
      _EDCRelation.EDCCreatedOnDateTime,
      _EDCRelation.EDCRepresentationType,
      _EDCRelation.EDCRepresentationKey,
      _JournalEntry.AccountingDocumentType,
      _JournalEntry.DocumentDate,
      _JournalEntry.PostingDate,
      _JournalEntry.AccountingDocumentCreationDate,
      _JournalEntry.TransactionCode,
      _JournalEntry.IntercompanyTransaction,
      _JournalEntry.DocumentReferenceID,
      _JournalEntry.TransactionCurrency,
      _JournalEntry.AccountingDocumentCategory,
      _JournalEntry.BusinessTransactionType,
      _JournalEntry.Branch,
      @Semantics.booleanIndicator
      _JournalEntry.IsDiscountDocument,
      _JournalEntry.TaxReportingDate,
      _JournalEntry.TaxFulfillmentDate,
      _JournalEntry.AccountingDocumentClass,
      _JournalEntry.IsReversal,
      _JournalEntry.IsReversed,
      _JournalEntry.TaxCountry,
      _JournalEntry.WithholdingTaxReportingDate,
      _JournalEntry._AccountingDocumentCategory,
      _JournalEntry._AccountingDocumentType

}
```
