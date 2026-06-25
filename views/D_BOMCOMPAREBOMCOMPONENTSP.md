---
name: D_BOMCOMPAREBOMCOMPONENTSP
description: D Bomcomparebomcomponentsp
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMCOMPAREBOMCOMPONENTSP

**D Bomcomparebomcomponentsp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaterialPrimary                : matnr;` | `MaterialPrimary                : matnr;` |
| `PlantPrimary                   : werks_d;` | `PlantPrimary                   : werks_d;` |
| `BOMVariantUsagePrimary         : stlan;` | `BOMVariantUsagePrimary         : stlan;` |
| `BOMVariantPrimary              : stalt;` | `BOMVariantPrimary              : stalt;` |
| `BOMVersionPrimary              : cs_versn;` | `BOMVersionPrimary              : cs_versn;` |
| `PrimBOMValidityDate            : datuv;` | `PrimBOMValidityDate            : datuv;` |
| `ChangeNumberPrimary            : aennr;` | `ChangeNumberPrimary            : aennr;` |
| `MaterialSecondary              : matnr;` | `MaterialSecondary              : matnr;` |
| `PlantSecondary                 : werks_d;` | `PlantSecondary                 : werks_d;` |
| `BOMVariantUsageSecondary       : stlan;` | `BOMVariantUsageSecondary       : stlan;` |
| `BOMVariantSecondary            : stalt;` | `BOMVariantSecondary            : stalt;` |
| `BOMVersionSecondary            : cs_versn;` | `BOMVersionSecondary            : cs_versn;` |
| `SecondaryBOMValidityDate       : datuv;` | `SecondaryBOMValidityDate       : datuv;` |
| `ChangeNumberSecondary          : aennr;` | `ChangeNumberSecondary          : aennr;` |
| `ComparisonFieldsDesc           : cs_comparison_fields;` | `ComparisonFieldsDesc           : cs_comparison_fields;` |
| `BOMComparisonIsType            : cs_comparison_type;` | `BOMComparisonIsType            : cs_comparison_type;` |
| `BOMTypeOfPrimBOMValue          : cs_bom_type_primary;` | `BOMTypeOfPrimBOMValue          : cs_bom_type_primary;` |
| `BOMTypeOfSecdryBOMValue        : cs_bom_type_secondary;` | `BOMTypeOfSecdryBOMValue        : cs_bom_type_secondary;` |
| `BOMExplsnApplPrimBOMValue      : capid;` | `BOMExplsnApplPrimBOMValue      : capid;` |
| `BOMExplsnApplSecdryBOMValue    : capid;` | `BOMExplsnApplSecdryBOMValue    : capid;` |
| `SalesOrderNmbrPrimBOMValue     : cs_vbeln;` | `SalesOrderNmbrPrimBOMValue     : cs_vbeln;` |
| `PrimBOMSalesOrderItemNmbrValue : cs_vbpos;` | `PrimBOMSalesOrderItemNmbrValue : cs_vbpos;` |
| `SalesOrderNmbrSecdryBOMValue   : cs_vbeln;` | `SalesOrderNmbrSecdryBOMValue   : cs_vbeln;` |
| `SalesOrderItemSecdryBOMValue   : cs_vbpos;` | `SalesOrderItemSecdryBOMValue   : cs_vbpos;` |
| `BOMHasAlternativePriority      : altvo;` | `BOMHasAlternativePriority      : altvo;` |
| `BOMObjDependenciesAreCompared  : cs_bzvgl;` | `BOMObjDependenciesAreCompared  : cs_bzvgl;` |
| `ScrapQuantityIsRequested       : asflg;` | `ScrapQuantityIsRequested       : asflg;` |
| `ExplodeBOMLevelValue           : cs_maxst;` | `ExplodeBOMLevelValue           : cs_maxst;` |
| `BillOfMaterialComponent        : idnrk;` | `BillOfMaterialComponent        : idnrk;` |
| `BOMComparisonIsSummarized      : lkenz;` | `BOMComparisonIsSummarized      : lkenz;` |
| `BOMItemNumberPrimary           : sposn;` | `BOMItemNumberPrimary           : sposn;` |
| `BOMItemNumberSecondary         : sposn;` | `BOMItemNumberSecondary         : sposn;` |
| `PrimBOMHdrBaseUoM              : meins;` | `PrimBOMHdrBaseUoM              : meins;` |
| `BOMPrimaryComponentRequiredQty : emeng;` | `BOMPrimaryComponentRequiredQty : emeng;` |
| `BOMSecondaryCompRequiredQty    : emeng;` | `BOMSecondaryCompRequiredQty    : emeng;` |
| `PrimBOMComponentLevelValue     : stufe;` | `PrimBOMComponentLevelValue     : stufe;` |
| `PrimaryBOMValue                : stnum;` | `PrimaryBOMValue                : stnum;` |
| `BOMNmbrNextLevelPrimBOMValue   : stnum;` | `BOMNmbrNextLevelPrimBOMValue   : stnum;` |
| `SecdryBOMComponentLevelValue   : stufe;` | `SecdryBOMComponentLevelValue   : stufe;` |
| `SecondaryBOMValue              : stnum;` | `SecondaryBOMValue              : stnum;` |
| `BOMNmbrNextLevelSecdryBOMValue : stnum;` | `BOMNmbrNextLevelSecdryBOMValue : stnum;` |
| `PrimaryBOMComponentIndexValue  : sytabix;` | `PrimaryBOMComponentIndexValue  : sytabix;` |
| `SecdryBOMComponentIndexValue   : sytabix;` | `SecdryBOMComponentIndexValue   : sytabix;` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameters for BOM Comparison details'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE             
 }   
define abstract entity D_BOMCompareBOMComponentsP
{
  MaterialPrimary                : matnr;
  PlantPrimary                   : werks_d;
  BOMVariantUsagePrimary         : stlan;
  BOMVariantPrimary              : stalt;
  BOMVersionPrimary              : cs_versn;
  PrimBOMValidityDate            : datuv;
  ChangeNumberPrimary            : aennr;
  MaterialSecondary              : matnr;
  PlantSecondary                 : werks_d;
  BOMVariantUsageSecondary       : stlan;
  BOMVariantSecondary            : stalt;
  BOMVersionSecondary            : cs_versn;
  SecondaryBOMValidityDate       : datuv;
  ChangeNumberSecondary          : aennr;
  ComparisonFieldsDesc           : cs_comparison_fields;
  BOMComparisonIsType            : cs_comparison_type;
  BOMTypeOfPrimBOMValue          : cs_bom_type_primary;
  BOMTypeOfSecdryBOMValue        : cs_bom_type_secondary;
  BOMExplsnApplPrimBOMValue      : capid;
  BOMExplsnApplSecdryBOMValue    : capid;
  SalesOrderNmbrPrimBOMValue     : cs_vbeln;
  PrimBOMSalesOrderItemNmbrValue : cs_vbpos;
  SalesOrderNmbrSecdryBOMValue   : cs_vbeln;
  SalesOrderItemSecdryBOMValue   : cs_vbpos;
  BOMHasAlternativePriority      : altvo;
  BOMObjDependenciesAreCompared  : cs_bzvgl;
  ScrapQuantityIsRequested       : asflg;
  ExplodeBOMLevelValue           : cs_maxst;
  BillOfMaterialComponent        : idnrk;
  BOMComparisonIsSummarized      : lkenz;
  BOMItemNumberPrimary           : sposn;
  BOMItemNumberSecondary         : sposn;
  PrimBOMHdrBaseUoM              : meins;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMPrimaryComponentRequiredQty : emeng;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMSecondaryCompRequiredQty    : emeng;
  PrimBOMComponentLevelValue     : stufe;
  PrimaryBOMValue                : stnum;
  BOMNmbrNextLevelPrimBOMValue   : stnum;
  SecdryBOMComponentLevelValue   : stufe;
  SecondaryBOMValue              : stnum;
  BOMNmbrNextLevelSecdryBOMValue : stnum;
  PrimaryBOMComponentIndexValue  : sytabix;
  SecdryBOMComponentIndexValue   : sytabix;
}
```
