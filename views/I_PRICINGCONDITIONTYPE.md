---
name: I_PRICINGCONDITIONTYPE
description: Pricing ConditionTYPE
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_PRICINGCONDITIONTYPE

**Pricing ConditionTYPE**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionApplication` | `_t685.kappl` |
| `ConditionType` | `_t685.kschl` |
| `_t685.kvewe                       as ConditionUsage` | *Association* |
| `_t685.kozgf                       as AccessSequence` | *Association* |
| `_t685a.koaid                      as ConditionClass` | *Association* |
| `krech_long)` | `cast(_t685a.krech` |
| `_t685a.kntyp                      as ConditionCategory` | *Association* |
| `_t685a.txprf                      as PrcgCndnAmountRoundingRule` | *Association* |
| `_t685a.purp                       as PricingConditionFunction` | *Association* |
| `_t685a.kdupl                      as StructureCondition` | *Association* |
| `_t685a.knega                      as PrcgConditionAmountSign` | *Association* |
| `_t685a.kgrpe                      as IsGroupCondition` | *Association* |
| `_t685a.rdifa                      as PrcgCndnRndngDiffsIsSettled` | *Association* |
| `_t685a.grlnr                      as PrcgGroupConditionRoutine` | *Association* |
| `_t685a.kmanu                      as CndnManualEntries` | *Association* |
| `_t685a.kkopf                      as CndnAppliesHeader` | *Association* |
| `_t685a.kposi                      as CndnAppliesItems` | *Association* |
| `_t685a.kaend_loe                  as PrcgCndnTypeDeletionIsAllowed` | *Association* |
| `_t685a.kaend_btr                  as PrcgCndnAmountChangedIsAllowed` | *Association* |
| `_t685a.kaend_ufk                  as PrcgCndnCnvrsnFctrChgIsAllowed` | *Association* |
| `_t685a.kaend_wrt                  as PrcgCndnValChgIsAllwd` | *Association* |
| `_t685.dtvob                       as PrcgCndnPrpsdValidFromDateCode` | *Association* |
| `_t685.datvo                       as PrcgCndnPrpsdValidToDateCode` | *Association* |
| `_t685a.kalsm                      as PricingProcedure` | *Association* |
| `_t685a.kdele                      as PrcgConditionDeletionMethod` | *Association* |
| `_t685a.koupd                      as CndnIsRelevantForLimitValue` | *Association* |
| `_t685a.kzbzg                      as PricingScaleBasisShort` | *Association* |
| `_t685a.kstpr                      as PricingScaleCheckingRule` | *Association* |
| `_t685a.stfkz                      as PricingScaleType` | *Association* |
| `_t685a.kofrs                      as PricingScaleRoutine` | *Association* |
| `_t685a.grmen                      as PricingScaleUnit` | *Association* |
| `_t685a.ganzz                      as PrcgCndnCrcyCnvrsnIsAftMltpl` | *Association* |
| `_t685a.kruek                      as IsRelevantForAccrual` | *Association* |
| `_t685a.kvarc                      as CndnIsForVariantConfiguration` | *Association* |
| `_t685a.kmeng                      as PrcgCndnQtyCnvrsnIsActivated` | *Association* |
| `_t685a.kfkiv                      as CndnIsRelevantForIntcoBilling` | *Association* |
| `_t685a.kznep                      as ConditionExclusion` | *Association* |
| `_t685a.kprdt                      as PricingDateIdentificationCode` | *Association* |
| `_t685a.val_zero                   as CndnValueZeroProcgCode` | *Association* |
| `_t685a.vkkal                      as IsRelevantForSalesPriceCalc` | *Association* |
| `_t685a.isinclusionpoint           as ConditionTypeIsInclusionPoint` | *Association* |
| `_t685a.pricingsubproceduremaxstep as PricingSubprocedureMaxStep` | *Association* |
| `_ConditionApplication` | *Association* |
| `_Text` | *Association* |
| `_Text_2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |
| `_Text` | `I_ConditionTypeText` | [0..*] |
| `_Text_2` | `I_PricingConditionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCGCNDNTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'ConditionType'
@EndUserText.label: 'Pricing Condition Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
define view I_PricingConditionType
  as select from t685  as _t685
    inner join   t685a as _t685a on  _t685.kappl = _t685a.kappl
                                 and _t685.kschl = _t685a.kschl
  association [0..1] to I_ConditionApplication     as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [0..*] to I_ConditionTypeText        as _Text                 on  $projection.ConditionType        = _Text.ConditionType
                                                                            and $projection.ConditionApplication = _Text.ConditionApplication
                                                                            and _Text.ConditionUsage             = 'A'
  association [0..*] to I_PricingConditionTypeText as _Text_2               on  $projection.ConditionType        = _Text_2.ConditionType
                                                                            and $projection.ConditionApplication = _Text_2.ConditionApplication
{
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key _t685.kappl                       as ConditionApplication,
      @ObjectModel.text.association: '_Text_2'
  key _t685.kschl                       as ConditionType,
      _t685.kvewe                       as ConditionUsage,
      _t685.kozgf                       as AccessSequence,
      _t685a.koaid                      as ConditionClass,
      cast(_t685a.krech as krech_long)  as ConditionCalculationType,
      _t685a.kntyp                      as ConditionCategory,
      _t685a.txprf                      as PrcgCndnAmountRoundingRule,
      _t685a.purp                       as PricingConditionFunction,
      _t685a.kdupl                      as StructureCondition,
      _t685a.knega                      as PrcgConditionAmountSign,
      @Semantics.booleanIndicator
      _t685a.kgrpe                      as IsGroupCondition,
      _t685a.rdifa                      as PrcgCndnRndngDiffsIsSettled,
      _t685a.grlnr                      as PrcgGroupConditionRoutine,
      _t685a.kmanu                      as CndnManualEntries,
      _t685a.kkopf                      as CndnAppliesHeader,
      _t685a.kposi                      as CndnAppliesItems,
      _t685a.kaend_loe                  as PrcgCndnTypeDeletionIsAllowed,
      _t685a.kaend_btr                  as PrcgCndnAmountChangedIsAllowed,
      _t685a.kaend_ufk                  as PrcgCndnCnvrsnFctrChgIsAllowed,
      _t685a.kaend_wrt                  as PrcgCndnValChgIsAllwd,
      _t685.dtvob                       as PrcgCndnPrpsdValidFromDateCode,
      _t685.datvo                       as PrcgCndnPrpsdValidToDateCode,
      _t685a.kalsm                      as PricingProcedure,
      _t685a.kdele                      as PrcgConditionDeletionMethod,
      _t685a.koupd                      as CndnIsRelevantForLimitValue,
      _t685a.kzbzg                      as PricingScaleBasisShort,
      _t685a.kstpr                      as PricingScaleCheckingRule,
      _t685a.stfkz                      as PricingScaleType,
      _t685a.kofrs                      as PricingScaleRoutine,
      _t685a.grmen                      as PricingScaleUnit,
      _t685a.ganzz                      as PrcgCndnCrcyCnvrsnIsAftMltpl,
      _t685a.kruek                      as IsRelevantForAccrual,
      _t685a.kvarc                      as CndnIsForVariantConfiguration,
      _t685a.kmeng                      as PrcgCndnQtyCnvrsnIsActivated,
      _t685a.kfkiv                      as CndnIsRelevantForIntcoBilling,
      _t685a.kznep                      as ConditionExclusion,
      _t685a.kprdt                      as PricingDateIdentificationCode,
      _t685a.val_zero                   as CndnValueZeroProcgCode,
      _t685a.vkkal                      as IsRelevantForSalesPriceCalc,
      _t685a.isinclusionpoint           as ConditionTypeIsInclusionPoint,
      _t685a.pricingsubproceduremaxstep as PricingSubprocedureMaxStep,
      _ConditionApplication,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Text_2'
      _Text,
      _Text_2

}
where
  _t685.kvewe = 'A'
```
