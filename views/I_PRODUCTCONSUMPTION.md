---
name: I_PRODUCTCONSUMPTION
description: Productconsumption
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTCONSUMPTION

**Productconsumption**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `productnumber preserving type)` | `cast (Consumption.matnr` |
| `Plant` | `Consumption.werks` |
| `PostingFiscalYear` | `Consumption.gjahr` |
| `PeriodType` | `Consumption.perkz` |
| `NumberOfFollowOnRecords` | `Consumption.zahlr` |
| `gsvbr1 preserving type)` | `cast (Consumption.gsv01` |
| `gsvbr2 preserving type)` | `cast (Consumption.gsv02` |
| `gsvbr3 preserving type)` | `cast (Consumption.gsv03` |
| `gsvbr4 preserving type)` | `cast (Consumption.gsv04` |
| `gsvbr5 preserving type)` | `cast (Consumption.gsv05` |
| `gsvbr6 preserving type)` | `cast (Consumption.gsv06` |
| `gsvbr7 preserving type)` | `cast (Consumption.gsv07` |
| `gsvbr8 preserving type)` | `cast (Consumption.gsv08` |
| `gsvbr9 preserving type)` | `cast (Consumption.gsv09` |
| `gsvbr10 preserving type)` | `cast (Consumption.gsv10` |
| `gsvbr11 preserving type)` | `cast (Consumption.gsv11` |
| `gsvbr12 preserving type)` | `cast (Consumption.gsv12` |
| `gsvbr13 preserving type)` | `cast (Consumption.gsv13` |
| `unvbr1 preserving type)` | `cast (Consumption.unv01` |
| `unvbr2 preserving type)` | `cast (Consumption.unv02` |
| `unvbr3 preserving type)` | `cast (Consumption.unv03` |
| `unvbr4 preserving type)` | `cast (Consumption.unv04` |
| `unvbr5 preserving type)` | `cast (Consumption.unv05` |
| `unvbr6 preserving type)` | `cast (Consumption.unv06` |
| `unvbr7 preserving type)` | `cast (Consumption.unv07` |
| `unvbr8 preserving type)` | `cast (Consumption.unv08` |
| `unvbr9 preserving type)` | `cast (Consumption.unv09` |
| `unvbr10 preserving type)` | `cast (Consumption.unv10` |
| `unvbr11 preserving type)` | `cast (Consumption.unv11` |
| `unvbr12 preserving type)` | `cast (Consumption.unv12` |
| `unvbr13 preserving type)` | `cast (Consumption.unv13` |
| `mgvbr1 preserving type)` | `cast (Consumption.mgv01` |
| `mgvbr2 preserving type)` | `cast (Consumption.mgv02` |
| `mgvbr3 preserving type)` | `cast (Consumption.mgv03` |
| `mgvbr4 preserving type)` | `cast (Consumption.mgv04` |
| `mgvbr5 preserving type)` | `cast (Consumption.mgv05` |
| `mgvbr6 preserving type)` | `cast (Consumption.mgv06` |
| `mgvbr7 preserving type)` | `cast (Consumption.mgv07` |
| `mgvbr8 preserving type)` | `cast (Consumption.mgv08` |
| `mgvbr9 preserving type)` | `cast (Consumption.mgv09` |
| `mgvbr10 preserving type)` | `cast (Consumption.mgv10` |
| `mgvbr11 preserving type)` | `cast (Consumption.mgv11` |
| `mgvbr12 preserving type)` | `cast (Consumption.mgv12` |
| `mgvbr13 preserving type)` | `cast (Consumption.mgv13` |
| `muvbr1 preserving type)` | `cast (Consumption.muv01` |
| `muvbr2 preserving type)` | `cast (Consumption.muv02` |
| `muvbr3 preserving type)` | `cast (Consumption.muv03` |
| `muvbr4 preserving type)` | `cast (Consumption.muv04` |
| `muvbr5 preserving type)` | `cast (Consumption.muv05` |
| `muvbr6 preserving type)` | `cast (Consumption.muv06` |
| `muvbr7 preserving type)` | `cast (Consumption.muv07` |
| `muvbr8 preserving type)` | `cast (Consumption.muv08` |
| `muvbr9 preserving type)` | `cast (Consumption.muv09` |
| `muvbr10 preserving type)` | `cast (Consumption.muv10` |
| `muvbr11 preserving type)` | `cast (Consumption.muv11` |
| `muvbr12 preserving type)` | `cast (Consumption.muv12` |
| `muvbr13 preserving type)` | `cast (Consumption.muv13` |
| `_Product.BaseUnit                                         as BaseUnit` | *Association* |
| `_Product` | *Association* |
| `_Product._BaseUnitOfMeasure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Consumption'
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #B,
  usageType.dataClass: #MASTER,
  usageType.sizeCategory: #XL
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics:{
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture :{
      mapping: [{ viewElement: ['Product', 'Plant', 'PostingFiscalYear', 'PeriodType', 'NumberOfFollowOnRecords'],
                  role: #MAIN,
                  table: 'MVER',
                  tableElement: ['MATNR', 'WERKS', 'GJAHR', 'PERKZ', 'ZAHLR']},
                { viewElement: ['Product'],
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  table: 'MARA',
                  tableElement: ['MATNR']}
                ]
    }
  }
}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ProductConsumption'

define view entity I_ProductConsumption
  as select from mver as Consumption
  association [1..1] to I_Product as _Product on $projection.Product = _Product.Product
{
  key cast (Consumption.matnr as productnumber preserving type) as Product,
  key Consumption.werks                                         as Plant,
  key Consumption.gjahr                                         as PostingFiscalYear,
  key Consumption.perkz                                         as PeriodType,
  key Consumption.zahlr                                         as NumberOfFollowOnRecords,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv01 as gsvbr1 preserving type)        as TotalConsumption1Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv02 as gsvbr2 preserving type)        as TotalConsumption2Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv03 as gsvbr3 preserving type)        as TotalConsumption3Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv04 as gsvbr4 preserving type)        as TotalConsumption4Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv05 as gsvbr5 preserving type)        as TotalConsumption5Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv06 as gsvbr6 preserving type)        as TotalConsumption6Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv07 as gsvbr7 preserving type)        as TotalConsumption7Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv08 as gsvbr8 preserving type)        as TotalConsumption8Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv09 as gsvbr9 preserving type)        as TotalConsumption9Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv10 as gsvbr10 preserving type)       as TotalConsumption10Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv11 as gsvbr11 preserving type)       as TotalConsumption11Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv12 as gsvbr12 preserving type)       as TotalConsumption12Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.gsv13 as gsvbr13 preserving type)       as TotalConsumption13Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv01 as unvbr1 preserving type)        as UnplannedConsumption1Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv02 as unvbr2 preserving type)        as UnplannedConsumption2Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv03 as unvbr3 preserving type)        as UnplannedConsumption3Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv04 as unvbr4 preserving type)        as UnplannedConsumption4Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv05 as unvbr5 preserving type)        as UnplannedConsumption5Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv06 as unvbr6 preserving type)        as UnplannedConsumption6Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv07 as unvbr7 preserving type)        as UnplannedConsumption7Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv08 as unvbr8 preserving type)        as UnplannedConsumption8Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv09 as unvbr9 preserving type)        as UnplannedConsumption9Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv10 as unvbr10 preserving type)       as UnplannedConsumption10Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv11 as unvbr11 preserving type)       as UnplannedConsumption11Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv12 as unvbr12 preserving type)       as UnplannedConsumption12Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.unv13 as unvbr13 preserving type)       as UnplannedConsumption13Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv01 as mgvbr1 preserving type)        as MnllyCrrtdTotCnsmpn1Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv02 as mgvbr2 preserving type)        as MnllyCrrtdTotCnsmpn2Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv03 as mgvbr3 preserving type)        as MnllyCrrtdTotCnsmpn3Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv04 as mgvbr4 preserving type)        as MnllyCrrtdTotCnsmpn4Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv05 as mgvbr5 preserving type)        as MnllyCrrtdTotCnsmpn5Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv06 as mgvbr6 preserving type)        as MnllyCrrtdTotCnsmpn6Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv07 as mgvbr7 preserving type)        as MnllyCrrtdTotCnsmpn7Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv08 as mgvbr8 preserving type)        as MnllyCrrtdTotCnsmpn8Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv09 as mgvbr9 preserving type)        as MnllyCrrtdTotCnsmpn9Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv10 as mgvbr10 preserving type)       as MnllyCrrtdTotCnsmpn10Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv11 as mgvbr11 preserving type)       as MnllyCrrtdTotCnsmpn11Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv12 as mgvbr12 preserving type)       as MnllyCrrtdTotCnsmpn12Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.mgv13 as mgvbr13 preserving type)       as MnllyCrrtdTotCnsmpn13Quantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv01 as muvbr1 preserving type)        as MnllyCrrtdUnplndCnsmpn1Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv02 as muvbr2 preserving type)        as MnllyCrrtdUnplndCnsmpn2Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv03 as muvbr3 preserving type)        as MnllyCrrtdUnplndCnsmpn3Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv04 as muvbr4 preserving type)        as MnllyCrrtdUnplndCnsmpn4Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv05 as muvbr5 preserving type)        as MnllyCrrtdUnplndCnsmpn5Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv06 as muvbr6 preserving type)        as MnllyCrrtdUnplndCnsmpn6Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv07 as muvbr7 preserving type)        as MnllyCrrtdUnplndCnsmpn7Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv08 as muvbr8 preserving type)        as MnllyCrrtdUnplndCnsmpn8Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv09 as muvbr9 preserving type)        as MnllyCrrtdUnplndCnsmpn9Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv10 as muvbr10 preserving type)       as MnllyCrrtdUnplndCnsmpn10Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv11 as muvbr11 preserving type)       as MnllyCrrtdUnplndCnsmpn11Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv12 as muvbr12 preserving type)       as MnllyCrrtdUnplndCnsmpn12Qty,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast (Consumption.muv13 as muvbr13 preserving type)       as MnllyCrrtdUnplndCnsmpn13Qty,
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      _Product.BaseUnit                                         as BaseUnit,
      _Product,
      _Product._BaseUnitOfMeasure
}
```
