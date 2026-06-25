---
name: I_CLFNCHARACTERISTICDEX
description: Clfncharacteristicdex
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARACTERISTICDEX

**Clfncharacteristicdex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key Characteristic.CharcInternalID` | `Characteristic.CharcInternalID` |
| `key Characteristic.ValidityEndDate` | `Characteristic.ValidityEndDate` |
| `Characteristic.TimeIntervalNumber` | `Characteristic.TimeIntervalNumber` |
| `Characteristic.Characteristic` | `Characteristic.Characteristic` |
| `Characteristic.CharcStatus` | `Characteristic.CharcStatus` |
| `Characteristic.CharcDataType` | `Characteristic.CharcDataType` |
| `Characteristic.CharcLength` | `Characteristic.CharcLength` |
| `Characteristic.CharcDecimals` | `Characteristic.CharcDecimals` |
| `Characteristic.CharcTemplate` | `Characteristic.CharcTemplate` |
| `Characteristic.ValueIsCaseSensitive` | `Characteristic.ValueIsCaseSensitive` |
| `Characteristic.CharcConversionRoutine` | `Characteristic.CharcConversionRoutine` |
| `Characteristic.CharcGroup` | `Characteristic.CharcGroup` |
| `entryisrequired preserving type )` | `cast ( Characteristic.EntryRequiredCode` |
| `multiplevaluesareallowed preserving type )` | `cast ( Characteristic.MultipleValuesAllowedCode` |
| `Characteristic.CharcValueUnit` | `Characteristic.CharcValueUnit` |
| `Characteristic.Currency` | `Characteristic.Currency` |
| `Characteristic.CharcExponentFormat` | `Characteristic.CharcExponentFormat` |
| `Characteristic.CharcExponentValue` | `Characteristic.CharcExponentValue` |
| `valueintervalisallowed preserving type )` | `cast ( Characteristic.ValueIntervalAllowedCode` |
| `additionalvalueisallowed preserving type )` | `cast ( Characteristic.AdditionalValueAllowedCode` |
| `Characteristic.NegativeValueIsAllowed` | `Characteristic.NegativeValueIsAllowed` |
| `Characteristic.ValidityStartDate` | `Characteristic.ValidityStartDate` |
| `Characteristic.ChangeNumber` | `Characteristic.ChangeNumber` |
| `Characteristic.IsDeleted` | `Characteristic.IsDeleted` |
| `Characteristic.DocumentInfoRecordDocType` | `Characteristic.DocumentInfoRecordDocType` |
| `Characteristic.DocumentInfoRecordDocNumber` | `Characteristic.DocumentInfoRecordDocNumber` |
| `Characteristic.DocumentInfoRecordDocVersion` | `Characteristic.DocumentInfoRecordDocVersion` |
| `Characteristic.DocumentInfoRecordDocPart` | `Characteristic.DocumentInfoRecordDocPart` |
| `Characteristic.CharcMaintAuthGrp` | `Characteristic.CharcMaintAuthGrp` |
| `charcisreadonly preserving type )` | `cast ( Characteristic.CharcReadOnlyCode` |
| `charcishidden preserving type )` | `cast ( Characteristic.CharcHiddenCode` |
| `charcisrestrictable preserving type )` | `cast ( Characteristic.CharcRestrictableCode` |
| `Characteristic.CharcReferenceTable` | `Characteristic.CharcReferenceTable` |
| `Characteristic.CharcReferenceTableField` | `Characteristic.CharcReferenceTableField` |
| `Characteristic.CharcCheckTable` | `Characteristic.CharcCheckTable` |
| `Characteristic.CharcCheckFunctionModule` | `Characteristic.CharcCheckFunctionModule` |
| `charcentryisnotformatctrld preserving type )` | `cast ( Characteristic.CharcEntryNotFormatCtrldCode` |
| `charctemplateisdisplayed preserving type )` | `cast ( Characteristic.CharcTemplateDisplayedCode` |
| `Characteristic.CharcSelectedSet` | `Characteristic.CharcSelectedSet` |
| `Characteristic.Plant` | `Characteristic.Plant` |
| `Characteristic.CharcCatalogType` | `Characteristic.CharcCatalogType` |
| `Characteristic.CreatedByUser` | `Characteristic.CreatedByUser` |
| `Characteristic.CreationDate` | `Characteristic.CreationDate` |
| `Characteristic.LastChangedByUser` | `Characteristic.LastChangedByUser` |
| `Characteristic.LastChangeDate` | `Characteristic.LastChangeDate` |
| `Characteristic.CharcLastChangedDateTime` | `Characteristic.CharcLastChangedDateTime` |
| `_CharacteristicGroup` | *Association* |
| `_CharacteristicStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharacteristicGroup` | `I_ClfnCharcGroup` | [0..1] |
| `_CharacteristicStatus` | `I_ClfnCharcStatus` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','TimeIntervalNumber']
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'CABN',
    role: #MAIN,
    tableElement: ['ATINN','ADZHL'], 
    viewElement: ['CharcInternalID','TimeIntervalNumber']
    } ]
@Analytics.dataExtraction.enabled
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Classification Characteristic DEX'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClassificationCharacteristic'     
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC
define view entity I_ClfnCharacteristicDEX
  as select from I_ClfnCharcBasic as Characteristic 
  
      association [0..1] to I_ClfnCharcGroup as _CharacteristicGroup
        on  $projection.CharcGroup  = _CharacteristicGroup.CharcGroup
  
      association [0..1] to I_ClfnCharcStatus as _CharacteristicStatus
        on  $projection.CharcStatus  = _CharacteristicStatus.CharcStatus
    
{
  key Characteristic.CharcInternalID,
      @Semantics.businessDate.to: true
  key Characteristic.ValidityEndDate,    
      Characteristic.TimeIntervalNumber,  
      Characteristic.Characteristic,
      Characteristic.CharcStatus,
      Characteristic.CharcDataType,
      Characteristic.CharcLength,
      Characteristic.CharcDecimals,
      Characteristic.CharcTemplate,
      Characteristic.ValueIsCaseSensitive,
      Characteristic.CharcConversionRoutine,
      Characteristic.CharcGroup,
      cast ( Characteristic.EntryRequiredCode as entryisrequired preserving type ) as EntryIsRequired, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.MultipleValuesAllowedCode as multiplevaluesareallowed preserving type ) as MultipleValuesAreAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcValueUnit,
      Characteristic.Currency,      
      Characteristic.CharcExponentFormat,
      Characteristic.CharcExponentValue,
      cast ( Characteristic.ValueIntervalAllowedCode as valueintervalisallowed preserving type ) as ValueIntervalIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      cast ( Characteristic.AdditionalValueAllowedCode as additionalvalueisallowed preserving type ) as AdditionalValueIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      Characteristic.NegativeValueIsAllowed,
      @Semantics.businessDate.from: true
      Characteristic.ValidityStartDate,         
      Characteristic.ChangeNumber,
      Characteristic.IsDeleted,
      Characteristic.DocumentInfoRecordDocType,
      Characteristic.DocumentInfoRecordDocNumber,
      Characteristic.DocumentInfoRecordDocVersion,
      Characteristic.DocumentInfoRecordDocPart,
      Characteristic.CharcMaintAuthGrp,
      cast ( Characteristic.CharcReadOnlyCode as charcisreadonly preserving type ) as CharcIsReadOnly, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      cast ( Characteristic.CharcHiddenCode as charcishidden preserving type ) as CharcIsHidden, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.CharcRestrictableCode as charcisrestrictable preserving type ) as CharcIsRestrictable, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcReferenceTable,
      Characteristic.CharcReferenceTableField,
      Characteristic.CharcCheckTable,
      Characteristic.CharcCheckFunctionModule,
      cast ( Characteristic.CharcEntryNotFormatCtrldCode as charcentryisnotformatctrld preserving type ) as CharcEntryIsNotFormatCtrld, // no overwritten characteristic: the representation of the field needed to change from code to indicator    
      cast ( Characteristic.CharcTemplateDisplayedCode as charctemplateisdisplayed preserving type ) as CharcTemplateIsDisplayed, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      Characteristic.CharcSelectedSet,
      Characteristic.Plant,
      Characteristic.CharcCatalogType,
      Characteristic.CreatedByUser,
      Characteristic.CreationDate,
      Characteristic.LastChangedByUser,
      Characteristic.LastChangeDate,
      Characteristic.CharcLastChangedDateTime,
      
      _CharacteristicGroup,
      _CharacteristicStatus
}
where Characteristic.CharcIdentificationCode = ''  // overwritten characteristics are skipped
```
