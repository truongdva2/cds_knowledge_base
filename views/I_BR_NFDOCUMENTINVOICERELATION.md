---
name: I_BR_NFDOCUMENTINVOICERELATION
description: BR Nfdocumentinvoicerelation
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTINVOICERELATION

**BR Nfdocumentinvoicerelation**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _BR_NFItem.BR_NFSourceDocumentNumber` | `_BR_NFItem.BR_NFSourceDocumentNumber` |
| `_BR_NFDocument.BR_NotaFiscal` | *Association* |
| `_BR_NFDocument.BR_NFType` | *Association* |
| `_BR_NFDocument.BR_NFSNumber` | *Association* |
| `_BR_NFDocument.BR_NFSVerificationCode` | *Association* |
| `_BR_NFDocument.BR_NFAuthznProtocolNumber` | *Association* |
| `_BR_NFDocument.BR_NFAuthznProtocolNumber16` | *Association* |
| `_BR_NFDocument.BR_NFAuthenticationDate` | *Association* |
| `_BR_NFDocument.BR_NFAuthenticationTime` | *Association* |
| `_BR_NFeActive.BR_NFeRandomNumber` | *Association* |
| `_BR_NFeActive.IssuingType` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Nota Fiscal and Invoice Relation'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
///*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity I_BR_NFDocumentInvoiceRelation
  as select distinct from I_BR_NFItem     as _BR_NFItem
    inner join            I_BR_NFDocument as _BR_NFDocument on _BR_NFItem.BR_NotaFiscal = _BR_NFDocument.BR_NotaFiscal
    inner join            I_BR_NFeActive  as _BR_NFeActive  on _BR_NFItem.BR_NotaFiscal = _BR_NFeActive.BR_NotaFiscal
{
  key _BR_NFItem.BR_NFSourceDocumentNumber,
      _BR_NFDocument.BR_NotaFiscal,
      _BR_NFDocument.BR_NFType,
      _BR_NFDocument.BR_NFSNumber,
      _BR_NFDocument.BR_NFSVerificationCode,
      _BR_NFDocument.BR_NFAuthznProtocolNumber,
      _BR_NFDocument.BR_NFAuthznProtocolNumber16,
      _BR_NFDocument.BR_NFAuthenticationDate,
      _BR_NFDocument.BR_NFAuthenticationTime,
      _BR_NFeActive.BR_NFeRandomNumber,
      _BR_NFeActive.IssuingType
}
where
  _BR_NFItem.BR_NFSourceDocumentType = 'LI'
```
