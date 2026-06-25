---
name: C_FUNCNLLOCCLFNCHARCVALUEDEX
description: Funcnllocclfncharcvaluedex
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - consumption-view
  - data-extraction
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# C_FUNCNLLOCCLFNCHARCVALUEDEX

**Funcnllocclfncharcvaluedex**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `vdm_eam_tplnr )` | `cast(Valuation.ClfnObjectID` |
| `key Valuation.ClassType` | `Valuation.ClassType` |
| `ClfnCharcValuePositionNumber` | `Valuation.CharcValuePositionNumber` |
| `key Valuation.CharcInternalID` | `Valuation.CharcInternalID` |
| `Valuation.ClfnObjectID` | `Valuation.ClfnObjectID` |
| `_FunctionalLocation._FunctionalLocationLabel.FunctionalLocationLabelName` | *Association* |
| `Valuation._Characteristic(P_KeyDate: $session.system_date).Characteristic` | `Valuation._Characteristic(P_KeyDate: $session.system_date).Characteristic` |
| `Valuation._Characteristic(P_KeyDate: $session.system_date).CharcDataType` | `Valuation._Characteristic(P_KeyDate: $session.system_date).CharcDataType` |
| `KeyDate` | `$session.system_date` |
| `Valuation.ChangeNumber` | `Valuation.ChangeNumber` |
| `CharcValueIntervalType` | `Valuation.CharcValueDependency` |
| `Valuation.CharcValue` | `Valuation.CharcValue` |
| `Valuation.CharcFromNumericValue` | `Valuation.CharcFromNumericValue` |
| `Valuation.CharcFromNumericValueUnit` | `Valuation.CharcFromNumericValueUnit` |
| `Valuation.CharcToNumericValue` | `Valuation.CharcToNumericValue` |
| `Valuation.CharcToNumericValueUnit` | `Valuation.CharcToNumericValueUnit` |
| `Valuation.CharcFromDecimalValue` | `Valuation.CharcFromDecimalValue` |
| `Valuation.CharcToDecimalValue` | `Valuation.CharcToDecimalValue` |
| `Valuation.CharcFromAmount` | `Valuation.CharcFromAmount` |
| `Valuation.CharcToAmount` | `Valuation.CharcToAmount` |
| `Valuation.Currency` | `Valuation.Currency` |
| `Valuation.CharcFromDate` | `Valuation.CharcFromDate` |
| `Valuation.CharcToDate` | `Valuation.CharcToDate` |
| `Valuation.CharcFromTime` | `Valuation.CharcFromTime` |
| `Valuation.CharcToTime` | `Valuation.CharcToTime` |
| `_FunctionalLocation.LastChangeDateTime` | *Association* |
| `_FunctionalLocation.FunctionalLocationCategory` | *Association* |
| `_FunctionalLocation.MaintenancePlanningPlant` | *Association* |
| `_FunctionalLocation._LocationAccountAssignment.CompanyCode` | *Association* |
| `_FunctionalLocation._LocationAccountAssignment.MaintenancePlant` | *Association* |
| `Valuation._Characteristic` | `Valuation._Characteristic` |
| `_FunctionalLocation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Floc Charc Values Data Extraction'

@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'FunctionalLocation'
define view entity C_FuncnlLocClfnCharcValueDEX
 as select from I_ClfnObjectCharcValForKeyDate(P_KeyDate: $session.system_date) as Valuation
 association [0..1] to I_FunctionalLocation as _FunctionalLocation on Valuation.ClfnObjectID = _FunctionalLocation.FunctionalLocation
{

  key cast(Valuation.ClfnObjectID as vdm_eam_tplnr ) as FunctionalLocation,
  key Valuation.ClassType,
  key Valuation.CharcValuePositionNumber as ClfnCharcValuePositionNumber,
  key Valuation.CharcInternalID,
      @Consumption.hidden: true
      Valuation.ClfnObjectID,
      _FunctionalLocation._FunctionalLocationLabel.FunctionalLocationLabelName,
      Valuation._Characteristic(P_KeyDate: $session.system_date).Characteristic,
      Valuation._Characteristic(P_KeyDate: $session.system_date).CharcDataType,
      @EndUserText.label:'Key Date'
      $session.system_date   as KeyDate,
      Valuation.ChangeNumber,
      Valuation.CharcValueDependency as CharcValueIntervalType,
      Valuation.CharcValue,
      Valuation.CharcFromNumericValue,
      Valuation.CharcFromNumericValueUnit,
      Valuation.CharcToNumericValue,
      Valuation.CharcToNumericValueUnit,
      Valuation.CharcFromDecimalValue,
      Valuation.CharcToDecimalValue,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      Valuation.CharcToAmount,
      Valuation.Currency,
      Valuation.CharcFromDate,
      Valuation.CharcToDate,
      Valuation.CharcFromTime,
      Valuation.CharcToTime,  
      _FunctionalLocation.LastChangeDateTime,
      _FunctionalLocation.FunctionalLocationCategory,
      _FunctionalLocation.MaintenancePlanningPlant,
      _FunctionalLocation._LocationAccountAssignment.CompanyCode,
      _FunctionalLocation._LocationAccountAssignment.MaintenancePlant,
       @Consumption.hidden: true
       Valuation._Characteristic,
       @Consumption.hidden: true
      _FunctionalLocation
}
where
      Valuation.ClfnObjectTable = 'IFLOT'
  and Valuation.ClfnObjectType  = 'O'
```
