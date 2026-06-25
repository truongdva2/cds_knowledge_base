---
name: I_LEGALDOCUMENTTP
description: Legaldocumenttp
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - transactional-processing
  - document
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCUMENTTP

**Legaldocumenttp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key LegalDocument.LglCntntMDocumentUUID` | `LegalDocument.LglCntntMDocumentUUID` |
| `LegalDocument.LglCntntMDocument` | `LegalDocument.LglCntntMDocument` |
| `LegalDocument.LglCntntMDocumentLinkedObject` | `LegalDocument.LglCntntMDocumentLinkedObject` |
| `LegalDocument.LglCntntMDocumentLinkedObjKey` | `LegalDocument.LglCntntMDocumentLinkedObjKey` |
| `LegalDocument.LegalTransaction` | `LegalDocument.LegalTransaction` |
| `LegalDocument.LegalTransactionUUID` | `LegalDocument.LegalTransactionUUID` |
| `LegalDocument.LglCntntMDocContentType` | `LegalDocument.LglCntntMDocContentType` |
| `LegalDocument.LglCntntMLanguage` | `LegalDocument.LglCntntMLanguage` |
| `LegalDocument.DocumentDescription` | `LegalDocument.DocumentDescription` |
| `LegalDocument.LglCntntMDocAccessLvl` | `LegalDocument.LglCntntMDocAccessLvl` |
| `LegalDocument.LglCntntMDocPaperType` | `LegalDocument.LglCntntMDocPaperType` |
| `LegalDocument.LegalDocumentSource` | `LegalDocument.LegalDocumentSource` |
| `LegalDocument.LglCntntMChangedUTCDateTime` | `LegalDocument.LglCntntMChangedUTCDateTime` |
| `LegalDocument.LglCntntMChangedByUser` | `LegalDocument.LglCntntMChangedByUser` |
| `LegalDocument.LglCntntMCreatedUTCDateTime` | `LegalDocument.LglCntntMCreatedUTCDateTime` |
| `LegalDocument.LglCntntMCreatedByUser` | `LegalDocument.LglCntntMCreatedByUser` |
| `LegalDocument.InternalDocumentStatus` | `LegalDocument.InternalDocumentStatus` |
| `LegalDocument.LglCntntMDocumentIsTopVersion` | `LegalDocument.LglCntntMDocumentIsTopVersion` |
| `LegalDocument.LglCntntMVirtualDocVersKey` | `LegalDocument.LglCntntMVirtualDocVersKey` |
| `LegalDocument.LglCntntMDocAssemblyStatus` | `LegalDocument.LglCntntMDocAssemblyStatus` |
| `LegalDocument.LglCntntMTmplID` | `LegalDocument.LglCntntMTmplID` |
| `LegalDocument.LglCntntMDocType` | `LegalDocument.LglCntntMDocType` |
| `LegalDocument.LglCntntMDocLowTouchLevel` | `LegalDocument.LglCntntMDocLowTouchLevel` |
| `LegalDocument.LglCntntMIsMandatory` | `LegalDocument.LglCntntMIsMandatory` |
| `LegalDocument.LegalDocumentVersion` | `LegalDocument.LegalDocumentVersion` |
| `LegalDocument.LglCntntMParentDocument` | `LegalDocument.LglCntntMParentDocument` |
| `LegalDocument.LglCntntMDocumentKind` | `LegalDocument.LglCntntMDocumentKind` |
| `LglCntntMDocAmendmentType` | `LglCntntMDocAmendmentType` |
| `LglCntntMDocEffectiveFromDate` | `LglCntntMDocEffectiveFromDate` |
| `LglCntntMDocEffectiveToDate` | `LglCntntMDocEffectiveToDate` |
| `LglCntntMSgntrPreference` | `LglCntntMSgntrPreference` |
| `LegalDocument.LglCntntMMainLinkdObjType` | `LegalDocument.LglCntntMMainLinkdObjType` |
| `LegalDocument.IsEndOfPurposeBlocked` | `LegalDocument.IsEndOfPurposeBlocked` |
| `LegalDocument.LglCntntMProfile` | `LegalDocument.LglCntntMProfile` |
| `LegalDocument.LglTransAccessLvl` | `LegalDocument.LglTransAccessLvl` |
| `LegalDocument.LglCntntMMainOrgCoCode` | `LegalDocument.LglCntntMMainOrgCoCode` |
| `LegalDocument.LglCntntMMainOrgPurOrg` | `LegalDocument.LglCntntMMainOrgPurOrg` |
| `LegalDocument.LglCntntMMainOrgSalesOrg` | `LegalDocument.LglCntntMMainOrgSalesOrg` |
| `/* Associations */` | `/* Associations */` |
| `_LegalDocParCategory : redirected to composition child I_LegalDocParCategoryTP` | *Association* |
| `_LegalDocStamp       : redirected to composition child I_LegalDocStampTP` | *Association* |
| `_LegalDocObligation  : redirected to composition child I_LegalDocObligationTP` | *Association* |
| `_LegalDocAgreement   : redirected to composition child I_LegalDocAgreementTP` | *Association* |
| `_LegalDocTmplInfo    : redirected to composition child I_LegalDocTmplInfoTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Document - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'LegalDocument'
define root view entity I_LegalDocumentTP
  provider contract transactional_interface
  as projection on R_LegalDocumentTP as LegalDocument
{
  key LegalDocument.LglCntntMDocumentUUID,
      LegalDocument.LglCntntMDocument,
      LegalDocument.LglCntntMDocumentLinkedObject,
      LegalDocument.LglCntntMDocumentLinkedObjKey,
      LegalDocument.LegalTransaction,
      //      @Consumption.hidden: true
      LegalDocument.LegalTransactionUUID,
      LegalDocument.LglCntntMDocContentType,
      LegalDocument.LglCntntMLanguage,
      LegalDocument.DocumentDescription,
      LegalDocument.LglCntntMDocAccessLvl,
      LegalDocument.LglCntntMDocPaperType,
      LegalDocument.LegalDocumentSource,
      LegalDocument.LglCntntMChangedUTCDateTime,
      LegalDocument.LglCntntMChangedByUser,
      LegalDocument.LglCntntMCreatedUTCDateTime,
      LegalDocument.LglCntntMCreatedByUser,
      LegalDocument.InternalDocumentStatus,
      LegalDocument.LglCntntMDocumentIsTopVersion,
      LegalDocument.LglCntntMVirtualDocVersKey,
      LegalDocument.LglCntntMDocAssemblyStatus,
      LegalDocument.LglCntntMTmplID,
      LegalDocument.LglCntntMDocType,
      LegalDocument.LglCntntMDocLowTouchLevel,
      LegalDocument.LglCntntMIsMandatory,
      LegalDocument.LegalDocumentVersion,
      LegalDocument.LglCntntMParentDocument,
      LegalDocument.LglCntntMDocumentKind,

      @Feature:'LCM_DOC_AMENDMENT_TYPE_ENH'
      LglCntntMDocAmendmentType,

      @Feature:'LCM_DOCUMENT_ENH'
      LglCntntMDocEffectiveFromDate,

      @Feature:'LCM_DOCUMENT_ENH'
      LglCntntMDocEffectiveToDate,

      @Feature: 'LCM_DOCUMENT_SIGNATURE_ENH'
      LglCntntMSgntrPreference, 
      
      @Feature: 'SW:LCM_ICRTS_SWITCH'
      LegalDocument.LglCntntMMainLinkdObjType,

      @Semantics.booleanIndicator: true
      @Consumption.hidden: true
      LegalDocument.IsEndOfPurposeBlocked,
      @Consumption.hidden: true
      LegalDocument.LglCntntMProfile,
      @Consumption.hidden: true
      LegalDocument.LglTransAccessLvl,
      @Consumption.hidden: true
      LegalDocument.LglCntntMMainOrgCoCode,
      @Consumption.hidden: true
      LegalDocument.LglCntntMMainOrgPurOrg,
      @Consumption.hidden: true
      LegalDocument.LglCntntMMainOrgSalesOrg,

      /* Associations */
      _LegalDocParCategory : redirected to composition child I_LegalDocParCategoryTP,
      _LegalDocStamp       : redirected to composition child I_LegalDocStampTP,
      _LegalDocObligation  : redirected to composition child I_LegalDocObligationTP,
      _LegalDocAgreement   : redirected to composition child I_LegalDocAgreementTP,
      _LegalDocTmplInfo    : redirected to composition child I_LegalDocTmplInfoTP
}
```
