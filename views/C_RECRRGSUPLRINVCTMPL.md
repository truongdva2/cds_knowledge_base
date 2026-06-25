---
name: C_RECRRGSUPLRINVCTMPL
description: Recrrgsuplrinvctmpl
app_component: FI-FIO-AP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - consumption-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPL

**Recrrgsuplrinvctmpl**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RecrrgSuplrInvcTmplUUID` | `_Tmpl.RecrrgSuplrInvcTmplUUID` |
| `_Tmpl.RecrrgSupplierInvoiceTemplate                                                                                                           as RecrrgSupplierInvoiceTemplate` | *Association* |
| `_Tmpl.AccountingDocumentType                                                                                                                  as AccountingDocumentType` | *Association* |
| `_Tmpl.CompanyCode                                                                                                                             as CompanyCode` | *Association* |
| `_Tmpl.DocumentReferenceID                                                                                                                     as DocumentReferenceID` | *Association* |
| `_Tmpl.AccountingDocumentHeaderText                                                                                                            as AccountingDocumentHeaderText` | *Association* |
| `_Tmpl.TotalAmountInTransactionCrcy                                                                                                            as TotalAmountInTransactionCrcy` | *Association* |
| `_Tmpl.InvoicingParty                                                                                                                          as InvoicingParty` | *Association* |
| `_Tmpl.ExchangeRate                                                                                                                            as ExchangeRate` | *Association* |
| `_Tmpl.TotalAmountInLocalCurrency                                                                                                              as TotalAmountInLocalCurrency` | *Association* |
| `_Tmpl.TransactionCurrency                                                                                                                     as TransactionCurrency` | *Association* |
| `_Tmpl.LocalCurrency                                                                                                                           as LocalCurrency` | *Association* |
| `_Tmpl.AssignmentReference                                                                                                                     as AssignmentReference` | *Association* |
| `_Tmpl.SupplierBankType                                                                                                                        as SupplierBankType` | *Association* |
| `_Tmpl.IBAN                                                                                                                                    as IBAN` | *Association* |
| `_Tmpl.SWIFTCode                                                                                                                               as SWIFTCode` | *Association* |
| `case  when _Tmpl.SupplierBankType is initial then ''` | `case  when _Tmpl.SupplierBankType is initial then ''` |
| `PaymentSystem` | `else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end` |
| `case  when _Tmpl.SupplierBankType is initial then ''` | `case  when _Tmpl.SupplierBankType is initial then ''` |
| `AliasType` | `else _BPBankAlias._BusinessPartnerBankAlias.AliasType end` |
| `case  when _Tmpl.SupplierBankType is initial then ''` | `case  when _Tmpl.SupplierBankType is initial then ''` |
| `BPBankAccountAliasName` | `else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end` |
| `_Tmpl.ReportingCountry                                                                                                                        as ReportingCountry` | *Association* |
| `_Tmpl.CompanyCodeCountry                                                                                                                      as CompanyCodeCountry` | *Association* |
| `_Tmpl.SupplierVATRegistration                                                                                                                 as SupplierVATRegistration` | *Association* |
| `_Tmpl.IsEUTriangularDeal                                                                                                                      as IsEUTriangularDeal` | *Association* |
| `_Tmpl.DocumentItemText                                                                                                                        as DocumentItemText` | *Association* |
| `_Tmpl.CreatedByUser                                                                                                                           as CreatedByUser` | *Association* |
| `_Tmpl.CreatedByUserName                                                                                                                       as CreatedByUserName` | *Association* |
| `_Tmpl.CreationDate                                                                                                                            as CreationDate` | *Association* |
| `_Tmpl.StateCentralBankPaymentReason                                                                                                           as StateCentralBankPaymentReason` | *Association* |
| `_Tmpl.SupplyingCountry                                                                                                                        as SupplyingCountry` | *Association* |
| `_Tmpl.PaymentTerms                                                                                                                            as PaymentTerms` | *Association* |
| `_Tmpl.PaymentMethod                                                                                                                           as PaymentMethod` | *Association* |
| `_Tmpl.PaymentReference                                                                                                                        as PaymentReference` | *Association* |
| `_Tmpl.CashDiscount1Days                                                                                                                       as CashDiscount1Days` | *Association* |
| `_Tmpl.CashDiscount1Percent                                                                                                                    as CashDiscount1Percent` | *Association* |
| `_Tmpl.CashDiscount2Days                                                                                                                       as CashDiscount2Days` | *Association* |
| `_Tmpl.CashDiscount2Percent                                                                                                                    as CashDiscount2Percent` | *Association* |
| `_Tmpl.NetPaymentDays                                                                                                                          as NetPaymentDays` | *Association* |
| `_Tmpl.HouseBank                                                                                                                               as HouseBank` | *Association* |
| `_Tmpl.HouseBankAccount                                                                                                                        as HouseBankAccount` | *Association* |
| `_Tmpl.ManualCashDiscountAmount                                                                                                                as ManualCashDiscountAmount` | *Association* |
| `_Tmpl.PaymentMethodSupplement                                                                                                                 as PaymentMethodSupplement` | *Association* |
| `_Tmpl.SuplrInvcPaymentBlockingReason                                                                                                          as SuplrInvcPaymentBlockingReason` | *Association* |
| `_Tmpl.PaytSlipWthRefCheckDigit                                                                                                                as PaytSlipWthRefCheckDigit` | *Association* |
| `_Tmpl.PaytSlipWthRefReference                                                                                                                 as PaytSlipWthRefReference` | *Association* |
| `_Tmpl.PaytSlipWthRefSubscriber                                                                                                                as PaytSlipWthRefSubscriber` | *Association* |
| `_Tmpl.TaxCode                                                                                                                                 as TaxCode` | *Association* |
| `_Tmpl.FixedCashDiscount                                                                                                                       as FixedCashDiscount` | *Association* |
| `_Tmpl.TaxBaseAmountInTransCrcy                                                                                                                as TaxBaseAmountInTransCrcy` | *Association* |
| `_Tmpl.TaxDeterminationDate                                                                                                                    as TaxDeterminationDate` | *Association* |
| `_Tmpl.TaxJurisdiction                                                                                                                         as TaxJurisdiction` | *Association* |
| `_Tmpl.TaxCountry                                                                                                                              as TaxCountry` | *Association* |
| `_Tmpl.WithholdingTaxIsEnabled                                                                                                                 as WithholdingTaxIsEnabled` | *Association* |
| `_Tmpl.GLAccount                                                                                                                               as GLAccount` | *Association* |
| `_Tmpl.SettlmtCoCodeTaxCountry                                                                                                                 as SettlmtCoCodeTaxCountry` | *Association* |
| `_Tmpl.RecurrenceStartDate                                                                                                                     as RecurrenceStartDate` | *Association* |
| `_Tmpl.FirstOccurrenceDate                                                                                                                     as FirstOccurrenceDate` | *Association* |
| `_Tmpl.NextOccurrenceDate                                                                                                                      as NextOccurrenceDate` | *Association* |
| `_Tmpl.NextOccurrenceAmountInTC                                                                                                                as NextOccurrenceAmountInTC` | *Association* |
| `_Tmpl.RecurrencePattern                                                                                                                       as RecurrencePattern` | *Association* |
| `fap_rsiv_recurr_pattern preserving type )` | `cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName` |
| `_Tmpl.RecurrenceIntervalInDays                                                                                                                as RecurrenceIntervalInDays` | *Association* |
| `_Tmpl.RecurrenceIntervalInWeeks                                                                                                               as RecurrenceIntervalInWeeks` | *Association* |
| `_Tmpl.RecurrenceIntervalInMonths                                                                                                              as RecurrenceIntervalInMonths` | *Association* |
| `_Tmpl.RecurrenceDayOfMonth                                                                                                                    as RecurrenceDayOfMonth` | *Association* |
| `_Tmpl.RecurrenceDayOfWeek                                                                                                                     as RecurrenceDayOfWeek` | *Association* |
| `_Tmpl.RecurrenceEndType                                                                                                                       as RecurrenceEndType` | *Association* |
| `fap_rsiv_recurr_end_type preserving type )` | `cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName` |
| `_Tmpl.NumberOfOccurrences                                                                                                                     as NumberOfOccurrences` | *Association* |
| `_Tmpl.NumberOfPostedInvoices                                                                                                                  as NumberOfPostedInvoices` | *Association* |
| `_Tmpl.NumberOfNotPostedInvoices                                                                                                               as NumberOfNotPostedInvoices` | *Association* |
| `_Tmpl.LastOccurrenceDate                                                                                                                      as LastOccurrenceDate` | *Association* |
| `_Tmpl.ForeignCrcyAmtCnvrsnRule                                                                                                                as ForeignCrcyAmtCnvrsnRule` | *Association* |
| `_Tmpl.BusinessPlace                                                                                                                           as BusinessPlace` | *Association* |
| `_Tmpl.BusinessSectionCode                                                                                                                     as BusinessSectionCode` | *Association* |
| `_Tmpl.IN_GSTPartner                                                                                                                           as IN_GSTPartner` | *Association* |
| `_Tmpl.IN_GSTPlaceOfSupply                                                                                                                     as IN_GSTPlaceOfSupply` | *Association* |
| `_Tmpl.IN_InvoiceReferenceNumber                                                                                                               as IN_InvoiceReferenceNumber` | *Association* |
| `_Tmpl.QuickResponseIBAN                                                                                                                       as QuickResponseIBAN` | *Association* |
| `_Tmpl.OneTimeAcctCntrySpecificRef1                                                                                                            as OneTimeAcctCntrySpecificRef1` | *Association* |
| `_Tmpl.ReferenceAccountForIBAN                                                                                                                 as ReferenceAccountForIBAN` | *Association* |
| `_RecrrgSuplrInvcTmplItem` | *Association* |
| `_RecrrgSuplrInvcTmplInstce` | *Association* |
| `_RecrrgSuplrInvcTmplWhgdTax` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RecrrgSuplrInvcTmplItem` | `C_RecrrgSuplrInvcTmplItem` | [0..*] |
| `_RecrrgSuplrInvcTmplInstce` | `C_RecrrgSuplrInvcTmplInstce` | [0..*] |
| `_RecrrgSuplrInvcTmplWhgdTax` | `C_RecrrgSuplrInvcTmplWhgdTax` | [0..*] |
| `_RecurrencePatternText` | `I_RecurrencePattern` | [0..1] |
| `_RecurrenceEndTypeText` | `I_RecurrencePatternEndType` | [0..1] |
| `_BPBankAlias` | `I_SupplierBankDetails` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Recurring Supplier Invoice Template'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecurringSupplierInvoiceTmpl'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}


define root view entity C_RecrrgSuplrInvcTmpl
  as select from I_RecrrgSuplrInvcTmpl as _Tmpl

  association [0..*] to C_RecrrgSuplrInvcTmplItem    as _RecrrgSuplrInvcTmplItem    on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplItem.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplInstce  as _RecrrgSuplrInvcTmplInstce  on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplInstce.RecrrgSuplrInvcTmplUUID

  association [0..*] to C_RecrrgSuplrInvcTmplWhgdTax as _RecrrgSuplrInvcTmplWhgdTax on  $projection.RecrrgSuplrInvcTmplUUID = _RecrrgSuplrInvcTmplWhgdTax.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_RecurrencePattern          as _RecurrencePatternText      on  $projection.RecurrencePattern = _RecurrencePatternText.RecurrenceType

  association [0..1] to I_RecurrencePatternEndType   as _RecurrenceEndTypeText      on  $projection.RecurrenceEndType = _RecurrenceEndTypeText.RecurrenceEndType

  association [0..1] to I_SupplierBankDetails        as _BPBankAlias                on  $projection.SupplierBankType        = _BPBankAlias.BPBankAccountInternalID
                                                                                    and $projection.ReferenceAccountForIBAN = _BPBankAlias.Supplier

{
  key _Tmpl.RecrrgSuplrInvcTmplUUID                                                                                                                 as RecrrgSuplrInvcTmplUUID,

      @Search.defaultSearchElement: true
      _Tmpl.RecrrgSupplierInvoiceTemplate                                                                                                           as RecrrgSupplierInvoiceTemplate,

      _Tmpl.AccountingDocumentType                                                                                                                  as AccountingDocumentType,

      _Tmpl.CompanyCode                                                                                                                             as CompanyCode,

      _Tmpl.DocumentReferenceID                                                                                                                     as DocumentReferenceID,

      _Tmpl.AccountingDocumentHeaderText                                                                                                            as AccountingDocumentHeaderText,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TotalAmountInTransactionCrcy                                                                                                            as TotalAmountInTransactionCrcy,

      _Tmpl.InvoicingParty                                                                                                                          as InvoicingParty,

      _Tmpl.ExchangeRate                                                                                                                            as ExchangeRate,

      @Semantics.amount.currencyCode: 'LocalCurrency'
      _Tmpl.TotalAmountInLocalCurrency                                                                                                              as TotalAmountInLocalCurrency,

      _Tmpl.TransactionCurrency                                                                                                                     as TransactionCurrency,

      _Tmpl.LocalCurrency                                                                                                                           as LocalCurrency,

      _Tmpl.AssignmentReference                                                                                                                     as AssignmentReference,

      _Tmpl.SupplierBankType                                                                                                                        as SupplierBankType,

      _Tmpl.IBAN                                                                                                                                    as IBAN,

      _Tmpl.SWIFTCode                                                                                                                               as SWIFTCode,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.PaymentSystem end                                                                                 as PaymentSystem,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.AliasType end                                                                                     as AliasType,

      case  when _Tmpl.SupplierBankType is initial then ''
      else _BPBankAlias._BusinessPartnerBankAlias.BPBankAccountAliasName end                                                                        as BPBankAccountAliasName,

      _Tmpl.ReportingCountry                                                                                                                        as ReportingCountry,

      _Tmpl.CompanyCodeCountry                                                                                                                      as CompanyCodeCountry,

      _Tmpl.SupplierVATRegistration                                                                                                                 as SupplierVATRegistration,

      _Tmpl.IsEUTriangularDeal                                                                                                                      as IsEUTriangularDeal,

      _Tmpl.DocumentItemText                                                                                                                        as DocumentItemText,

      _Tmpl.CreatedByUser                                                                                                                           as CreatedByUser,

      _Tmpl.CreatedByUserName                                                                                                                       as CreatedByUserName,

      _Tmpl.CreationDate                                                                                                                            as CreationDate,

      _Tmpl.StateCentralBankPaymentReason                                                                                                           as StateCentralBankPaymentReason,

      _Tmpl.SupplyingCountry                                                                                                                        as SupplyingCountry,

      _Tmpl.PaymentTerms                                                                                                                            as PaymentTerms,

      _Tmpl.PaymentMethod                                                                                                                           as PaymentMethod,

      _Tmpl.PaymentReference                                                                                                                        as PaymentReference,

      _Tmpl.CashDiscount1Days                                                                                                                       as CashDiscount1Days,

      _Tmpl.CashDiscount1Percent                                                                                                                    as CashDiscount1Percent,

      _Tmpl.CashDiscount2Days                                                                                                                       as CashDiscount2Days,

      _Tmpl.CashDiscount2Percent                                                                                                                    as CashDiscount2Percent,

      _Tmpl.NetPaymentDays                                                                                                                          as NetPaymentDays,

      _Tmpl.HouseBank                                                                                                                               as HouseBank,

      _Tmpl.HouseBankAccount                                                                                                                        as HouseBankAccount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.ManualCashDiscountAmount                                                                                                                as ManualCashDiscountAmount,

      _Tmpl.PaymentMethodSupplement                                                                                                                 as PaymentMethodSupplement,

      _Tmpl.SuplrInvcPaymentBlockingReason                                                                                                          as SuplrInvcPaymentBlockingReason,

      _Tmpl.PaytSlipWthRefCheckDigit                                                                                                                as PaytSlipWthRefCheckDigit,

      _Tmpl.PaytSlipWthRefReference                                                                                                                 as PaytSlipWthRefReference,

      _Tmpl.PaytSlipWthRefSubscriber                                                                                                                as PaytSlipWthRefSubscriber,

      _Tmpl.TaxCode                                                                                                                                 as TaxCode,

      _Tmpl.FixedCashDiscount                                                                                                                       as FixedCashDiscount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.TaxBaseAmountInTransCrcy                                                                                                                as TaxBaseAmountInTransCrcy,

      _Tmpl.TaxDeterminationDate                                                                                                                    as TaxDeterminationDate,

      _Tmpl.TaxJurisdiction                                                                                                                         as TaxJurisdiction,

      _Tmpl.TaxCountry                                                                                                                              as TaxCountry,

      _Tmpl.WithholdingTaxIsEnabled                                                                                                                 as WithholdingTaxIsEnabled,

      _Tmpl.GLAccount                                                                                                                               as GLAccount,

      _Tmpl.SettlmtCoCodeTaxCountry                                                                                                                 as SettlmtCoCodeTaxCountry,

      _Tmpl.RecurrenceStartDate                                                                                                                     as RecurrenceStartDate,

      _Tmpl.FirstOccurrenceDate                                                                                                                     as FirstOccurrenceDate,

      _Tmpl.NextOccurrenceDate                                                                                                                      as NextOccurrenceDate,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Tmpl.NextOccurrenceAmountInTC                                                                                                                as NextOccurrenceAmountInTC,

      _Tmpl.RecurrencePattern                                                                                                                       as RecurrencePattern,

      cast( _RecurrencePatternText._Text[ Language = $session.system_language ].RecurrenceTypeName as fap_rsiv_recurr_pattern preserving type )     as RecurrencePatternName,

      _Tmpl.RecurrenceIntervalInDays                                                                                                                as RecurrenceIntervalInDays,

      _Tmpl.RecurrenceIntervalInWeeks                                                                                                               as RecurrenceIntervalInWeeks,

      _Tmpl.RecurrenceIntervalInMonths                                                                                                              as RecurrenceIntervalInMonths,

      _Tmpl.RecurrenceDayOfMonth                                                                                                                    as RecurrenceDayOfMonth,

      _Tmpl.RecurrenceDayOfWeek                                                                                                                     as RecurrenceDayOfWeek,

      _Tmpl.RecurrenceEndType                                                                                                                       as RecurrenceEndType,

      cast( _RecurrenceEndTypeText._Text[ Language = $session.system_language ].RecurrenceEndTypeName as fap_rsiv_recurr_end_type preserving type ) as RecurrenceEndTypeName,

      _Tmpl.NumberOfOccurrences                                                                                                                     as NumberOfOccurrences,

      _Tmpl.NumberOfPostedInvoices                                                                                                                  as NumberOfPostedInvoices,

      _Tmpl.NumberOfNotPostedInvoices                                                                                                               as NumberOfNotPostedInvoices,

      _Tmpl.LastOccurrenceDate                                                                                                                      as LastOccurrenceDate,

      _Tmpl.ForeignCrcyAmtCnvrsnRule                                                                                                                as ForeignCrcyAmtCnvrsnRule,

      _Tmpl.BusinessPlace                                                                                                                           as BusinessPlace,

      _Tmpl.BusinessSectionCode                                                                                                                     as BusinessSectionCode,

      _Tmpl.IN_GSTPartner                                                                                                                           as IN_GSTPartner,

      _Tmpl.IN_GSTPlaceOfSupply                                                                                                                     as IN_GSTPlaceOfSupply,

      _Tmpl.IN_InvoiceReferenceNumber                                                                                                               as IN_InvoiceReferenceNumber,

      _Tmpl.QuickResponseIBAN                                                                                                                       as QuickResponseIBAN,

      _Tmpl.OneTimeAcctCntrySpecificRef1                                                                                                            as OneTimeAcctCntrySpecificRef1,

      _Tmpl.ReferenceAccountForIBAN                                                                                                                 as ReferenceAccountForIBAN,

      _RecrrgSuplrInvcTmplItem,
      _RecrrgSuplrInvcTmplInstce,
      _RecrrgSuplrInvcTmplWhgdTax
}
```
