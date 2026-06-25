---
name: D_SUPPLYDEMANDITEMGETITEMR
description: D Supplydemanditemgetitemr
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# D_SUPPLYDEMANDITEMGETITEMR

**D Supplydemanditemgetitemr**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RowIndex                       : abap.int4;` | `RowIndex                       : abap.int4;` |
| `Material                       : matnr;` | `Material                       : matnr;` |
| `MRPPlant                       : werks_d;` | `MRPPlant                       : werks_d;` |
| `MRPArea                        : berid;` | `MRPArea                        : berid;` |
| `MRPPlanningSegmentType         : plaab;` | `MRPPlanningSegmentType         : plaab;` |
| `MRPPlanningSegment             : planr;` | `MRPPlanningSegment             : planr;` |
| `MaterialExternalID             : matnr;` | `MaterialExternalID             : matnr;` |
| `MRPElement                     : del12;` | `MRPElement                     : del12;` |
| `MRPElementItem                 : delps;` | `MRPElementItem                 : delps;` |
| `MRPElementScheduleLine         : delet;` | `MRPElementScheduleLine         : delet;` |
| `MRPElementCategory             : delkz;` | `MRPElementCategory             : delkz;` |
| `MRPElementCategoryShortName    : delb0;` | `MRPElementCategoryShortName    : delb0;` |
| `MRPElementAvailyOrRqmtDate     : dat00;` | `MRPElementAvailyOrRqmtDate     : dat00;` |
| `MRPAvailableQuantity           : lmeng;` | `MRPAvailableQuantity           : lmeng;` |
| `MRPElementOpenQuantity         : lmeng;` | `MRPElementOpenQuantity         : lmeng;` |
| `MRPElementQuantityIsFirm       : flag;` | `MRPElementQuantityIsFirm       : flag;` |
| `MRPElementDocumentType         : char4;` | `MRPElementDocumentType         : char4;` |
| `MRPElementDocumentTypeName     : char60;` | `MRPElementDocumentTypeName     : char60;` |
| `ProductionPlant                : werks_d;` | `ProductionPlant                : werks_d;` |
| `StorageLocation                : char4;` | `StorageLocation                : char4;` |
| `Assembly                       : baugr;` | `Assembly                       : baugr;` |
| `ProductionVersion              : verid;` | `ProductionVersion              : verid;` |
| `SourceMRPElement               : del12;` | `SourceMRPElement               : del12;` |
| `SourceMRPElementItem           : posvr;` | `SourceMRPElementItem           : posvr;` |
| `SourceMRPElementCategory       : delkz;` | `SourceMRPElementCategory       : delkz;` |
| `MRPElementBusinessPartner      : char10;` | `MRPElementBusinessPartner      : char10;` |
| `MRPElementBusinessPartnerName  : bpname;` | `MRPElementBusinessPartnerName  : bpname;` |
| `MRPElementBusinessPartnerType  : char1;` | `MRPElementBusinessPartnerType  : char1;` |
| `MaterialBaseUnit               : meins;` | `MaterialBaseUnit               : meins;` |
| `UnitOfMeasureCommercialName    : mseh3;` | `UnitOfMeasureCommercialName    : mseh3;` |
| `TargetQuantityUnitDisplayDcmls : andec;` | `TargetQuantityUnitDisplayDcmls : andec;` |
| `TargetQuantityUnitDcmls        : decan;` | `TargetQuantityUnitDcmls        : decan;` |
| `MaterialBaseUnitDesc           : mseh6;` | `MaterialBaseUnitDesc           : mseh6;` |
| `UnitOfMeasureName              : mseh3;` | `UnitOfMeasureName              : mseh3;` |
| `MRPElementIsReleased           : char1;` | `MRPElementIsReleased           : char1;` |
| `MRPElementIsPartiallyDelivered : char1;` | `MRPElementIsPartiallyDelivered : char1;` |
| `MRPRequestStatus               : char2;` | `MRPRequestStatus               : char2;` |
| `MRPRequestSupplierResponse     : char2;` | `MRPRequestSupplierResponse     : char2;` |
| `MRPAvailability                : vrfkz;` | `MRPAvailability                : vrfkz;` |
| `MaterialSafetyStockQty         : lmeng;` | `MaterialSafetyStockQty         : lmeng;` |
| `_DummyAssociation              : association to parent D_SupDmndItmGetPggngWthItemsR;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Items'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_SupplyDemandItemGetItemR
{

  RowIndex                       : abap.int4;
  Material                       : matnr;
  MRPPlant                       : werks_d;
  MRPArea                        : berid;
  MRPPlanningSegmentType         : plaab;
  MRPPlanningSegment             : planr;
  MaterialExternalID             : matnr;
  MRPElement                     : del12;
  MRPElementItem                 : delps;
  MRPElementScheduleLine         : delet;
  MRPElementCategory             : delkz;
  MRPElementCategoryShortName    : delb0;
  MRPElementAvailyOrRqmtDate     : dat00;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MRPAvailableQuantity           : lmeng;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MRPElementOpenQuantity         : lmeng;
  MRPElementQuantityIsFirm       : flag;
  MRPElementDocumentType         : char4;
  MRPElementDocumentTypeName     : char60;
  ProductionPlant                : werks_d;
  StorageLocation                : char4;
  Assembly                       : baugr;
  ProductionVersion              : verid;
  SourceMRPElement               : del12;
  SourceMRPElementItem           : posvr;
  SourceMRPElementCategory       : delkz;
  MRPElementBusinessPartner      : char10;
  MRPElementBusinessPartnerName  : bpname;
  MRPElementBusinessPartnerType  : char1;
  MaterialBaseUnit               : meins;
  UnitOfMeasureCommercialName    : mseh3;
  TargetQuantityUnitDisplayDcmls : andec;
  TargetQuantityUnitDcmls        : decan;
  MaterialBaseUnitDesc           : mseh6;
  UnitOfMeasureName              : mseh3;
  @Semantics.booleanIndicator
  MRPElementIsReleased           : char1;
  @Semantics.booleanIndicator
  MRPElementIsPartiallyDelivered : char1;
  MRPRequestStatus               : char2;
  MRPRequestSupplierResponse     : char2;
  MRPAvailability                : vrfkz;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MaterialSafetyStockQty         : lmeng;
  _DummyAssociation              : association to parent D_SupDmndItmGetPggngWthItemsR;


}
```
