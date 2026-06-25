---
name: I_JP_INVCSMMRYITEM
description: JP Invcsmmryitem
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - item-level
  - component:FI-LOC-FI-JP
  - lob:Finance
---
# I_JP_INVCSMMRYITEM

**JP Invcsmmryitem**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `fis_bukrs)` | `cast(bukrs` |
| `farp_belnr_d)` | `cast(belnr` |
| `fis_gjahr)` | `cast(gjahr` |
| `farp_buzei)` | `cast(buzei` |
| `farp_bstat_d)` | `cast(bstat` |
| `isjp_ispayer)` | `cast(invsumpayer` |
| `isjp_pigrunit)` | `cast(pigrunit` |
| `waers)` | `cast(waers` |
| `isjp_recipient)` | `cast(invsumrecip` |
| `isjp_grpunit   )as  InvcSmmryGroupingUnit` | `cast(grunit` |
| `isjp_closedate)` | `cast(closdate` |
| `isjp_duedate)` | `cast(netdt` |
| `isjp_minr)` | `cast(minr` |
| `isjp_notincl)` | `cast(notincl` |
| `isjp_miblock)` | `cast(miblock` |
| `isjp_netamnt)` | `cast(netamnt` |
| `isjp_taxamnt)` | `cast(taxamnt` |
| `isjp_grossamnt )as InvcSmmryGrossAmount` | `cast(netamnt + taxamnt` |
| `fis_mwskz)` | `cast(mwskz` |
| `isjp_itemcat)` | `cast(itemcat` |
| `fis_augdt )` | `cast(cleardate` |
| `isjp_netamnt1)` | `cast(netamnt1` |
| `isjp_taxamnt1)` | `cast(taxamnt1` |
| `isjp_mwskz1)` | `cast(mwsk1` |
| `isjp_netamnt2)` | `cast(netamnt2` |
| `isjp_taxamnt2)` | `cast(taxamnt2` |
| `isjp_mwskz2)` | `cast(mwsk2` |
| `isjp_netamnt3)` | `cast(netamnt3` |
| `isjp_taxamnt3)` | `cast(taxamnt3` |
| `isjp_mwskz3)` | `cast(mwsk3` |
| `_CompanyCode` | *Association* |
| `_JournalEntry` | *Association* |
| `_FiscalYear` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJPINVCSMMRYITEM'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//@VDM.private:false
@VDM.viewType:#BASIC
@Metadata.allowExtensions: true
@Analytics: { 
      dataCategory: #DIMENSION,
      internalName: #LOCAL, 
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: 
            [
              { 
                table: 'ISJPINVSUMIT',
                role: #MAIN,
                viewElement: ['CompanyCode', 'FiscalYear', 'AccountingDocument','AccountingDocumentItem'],
                tableElement: ['bukrs', 'gjahr', 'belnr', 'buzei']
              }
            ] 
         }
      }
    }
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'JP_InvoiceSummaryPayerInvoice'

@EndUserText.label: 'Line Items for Japan Invoice Smmry'
define view I_JP_InvcSmmryItem as select from P_Jp_InvcSmmryItem 
  association [0..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                   on $projection.FiscalYear                      = _FiscalYear.FiscalYear
                                                                                     and $projection.CompanyCode                     = _FiscalYear.CompanyCode
  association [0..1] to I_JournalEntry                 as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                         and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                         and $projection.AccountingDocument = _JournalEntry.AccountingDocument 
{
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs  as fis_bukrs)       as  CompanyCode,
  @ObjectModel.foreignKey.association: '_JournalEntry'
  key cast(belnr  as farp_belnr_d)    as  AccountingDocument,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  key cast(gjahr  as  fis_gjahr)      as  FiscalYear,
  key cast(buzei  as  farp_buzei)     as  AccountingDocumentItem,
  cast(bstat      as  farp_bstat_d)   as  AccountingDocumentCategory,
  cast(invsumpayer  as  isjp_ispayer) as  InvcSmmryPayer,
  cast(pigrunit as  isjp_pigrunit)    as  InvcSmmryPayerInvcGrpgUnit,
  cast(waers    as  waers) as Currency,
  cast(invsumrecip  as  isjp_recipient) as  InvcSmmryRecipient,
  cast(grunit   as  isjp_grpunit   )as  InvcSmmryGroupingUnit,
  cast(closdate as  isjp_closedate) as  InvcSmmryClosingDate,
  cast(netdt    as  isjp_duedate)   as  InvcSmmryDueDate,
  cast(minr     as  isjp_minr)      as  InvcSmmryMonthlyInvc,
  cast(notincl  as  isjp_notincl)   as  InvcSmmryIsNotInMonthlyInvc,
  @Semantics.booleanIndicator: true
  cast(miblock  as  isjp_miblock)   as  InvcSmmryMonthlyInvcIsBlock,
  @Semantics.amount.currencyCode:'Currency'
  cast(netamnt  as  isjp_netamnt)   as  InvcSmmryNetAmount,
  @Semantics.amount.currencyCode:'Currency'
  cast(taxamnt  as  isjp_taxamnt)   as  InvcSmmryTaxAmount,
  @Semantics.amount.currencyCode:'Currency'
  cast(netamnt + taxamnt as isjp_grossamnt )as InvcSmmryGrossAmount,  
  cast(mwskz    as  fis_mwskz)      as  TaxCode,
  //CREAUSER,
  //CREADATE,
  //CREATIME,
  //CHANUSER,
  //CHANDATE,
  //CHANTIME,
  cast(itemcat    as  isjp_itemcat)  as InvcSmmryItemCategory,
  cast(cleardate  as  fis_augdt )    as ClearingDate ,
  @Semantics.amount.currencyCode:'Currency'
  cast(netamnt1   as  isjp_netamnt1) as InvcSmmryAddlNetAmount1,
  @Semantics.amount.currencyCode:'Currency'
  cast(taxamnt1   as  isjp_taxamnt1) as InvcSmmryAddlTaxAmount1,
  cast(mwsk1      as  isjp_mwskz1)   as InvcSmmryAddlTaxCode1,
  @Semantics.amount.currencyCode:'Currency'
  cast(netamnt2   as  isjp_netamnt2) as InvcSmmryAddlNetAmount2,
  @Semantics.amount.currencyCode:'Currency'
  cast(taxamnt2   as  isjp_taxamnt2) as InvcSmmryAddlTaxAmount2,
  cast(mwsk2      as  isjp_mwskz2)   as InvcSmmryAddlTaxCode2,
  @Semantics.amount.currencyCode:'Currency'
  cast(netamnt3   as  isjp_netamnt3) as InvcSmmryAddlNetAmount3,
  @Semantics.amount.currencyCode:'Currency'
  cast(taxamnt3   as  isjp_taxamnt3) as InvcSmmryAddlTaxAmount3,
  cast(mwsk3      as  isjp_mwskz3)   as InvcSmmryAddlTaxCode3,
  
  _CompanyCode,
  _JournalEntry,
  _FiscalYear
};
```
