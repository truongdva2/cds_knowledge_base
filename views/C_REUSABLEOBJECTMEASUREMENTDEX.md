---
name: C_REUSABLEOBJECTMEASUREMENTDEX
description: Reusableobjectmeasurementdex
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REUSABLEOBJECTMEASUREMENTDEX

**Reusableobjectmeasurementdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _REUsableObjectData.RealEstateUsableObjectUUID` | `_REUsableObjectData.RealEstateUsableObjectUUID` |
| `key _REMeasurement.InternalRealEstateNumber` | `_REMeasurement.InternalRealEstateNumber` |
| `key _REMeasurement.REMeasurementType` | `_REMeasurement.REMeasurementType` |
| `ValidityEndDate` | `_REMeasurement.ValidityEndDate` |
| `_REMeasurement.ValidityStartDate` | *Association* |
| `_REMeasurement._REMeasurementType.REMeasurementIsTotal` | *Association* |
| `_REMeasurement.REMeasurementUnit` | *Association* |
| `_REMeasurement.REMeasurementQuantity` | *Association* |
| `_REMeasurement.REMaximumMeasurementQuantity` | *Association* |
| `_REUsableObject` | *Association* |
| `_REMeasurement._REMeasurementType                      as _REMeasurementType` | *Association* |
| `_REMeasurement._UnitOfMeasure                          as _UnitOfMeasure` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usable Obj Measurement'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSABLEOBJMEASUREMENTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsableObjectMeasurementDEX 
  as select from I_REMeasurement  as _REMeasurement
    inner join   I_REUsableObject as _REUsableObjectData on _REUsableObjectData.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key _REUsableObjectData.RealEstateUsableObjectUUID,
  key _REMeasurement.InternalRealEstateNumber,
  key _REMeasurement.REMeasurementType,
  key _REMeasurement.ValidityEndDate                         as ValidityEndDate,
      _REMeasurement.ValidityStartDate,
      _REMeasurement._REMeasurementType.REMeasurementIsTotal,
      _REMeasurement.REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMeasurementQuantity,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMaximumMeasurementQuantity,

      _REUsableObject,
      _REMeasurement._REMeasurementType                      as _REMeasurementType,
      _REMeasurement._UnitOfMeasure                          as _UnitOfMeasure

    
}
```
