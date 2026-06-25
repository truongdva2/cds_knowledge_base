---
name: I_REVALNASSETCASHFLOW
description: Revalnassetcashflow
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
  - bo:Asset
---
# I_REVALNASSETCASHFLOW

**Revalnassetcashflow**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key REValuationCashflow.InternalRealEstateNumber` | `REValuationCashflow.InternalRealEstateNumber` |
| `key REValuationCashflow.REValuationRuleUUID` | `REValuationCashflow.REValuationRuleUUID` |
| `key REValuationCashflow.REValuationProcessUUID` | `REValuationCashflow.REValuationProcessUUID` |
| `key REValuationCashflow.REValuationCashFlowRecordUUID` | `REValuationCashflow.REValuationCashFlowRecordUUID` |
| `REValuationCashflow.RETermNumber` | `REValuationCashflow.RETermNumber` |
| `REValuationCashflow.REValuationRule` | `REValuationCashflow.REValuationRule` |
| `REValuationCashflow.RECashFlowType` | `REValuationCashflow.RECashFlowType` |
| `REValuationCashflow.CashFlowItemOrigin` | `REValuationCashflow.CashFlowItemOrigin` |
| `REValuationCashflow.REStatusObject` | `REValuationCashflow.REStatusObject` |
| `REValuationCashflow.REStatusObjectAsset` | `REValuationCashflow.REStatusObjectAsset` |
| `REValuationCashflow.REConditionUUID` | `REValuationCashflow.REConditionUUID` |
| `REValuationCashflow.ValidityStartDate` | `REValuationCashflow.ValidityStartDate` |
| `REValuationCashflow.CalculationPeriodStartDate` | `REValuationCashflow.CalculationPeriodStartDate` |
| `REValuationCashflow.CalculationPeriodEndDate` | `REValuationCashflow.CalculationPeriodEndDate` |
| `REValuationCashflow.NumberOfDays` | `REValuationCashflow.NumberOfDays` |
| `REValuationCashflow.REPositionDueDate` | `REValuationCashflow.REPositionDueDate` |
| `REValuationCashflow.PaymentDueDate` | `REValuationCashflow.PaymentDueDate` |
| `REValuationCashflow.CalculationDate` | `REValuationCashflow.CalculationDate` |
| `REValuationCashflow.REConditionCurrency` | `REValuationCashflow.REConditionCurrency` |
| `REValuationCashflow.REInterestRate` | `REValuationCashflow.REInterestRate` |
| `REValuationCashflow.REValuationIsInitialCost` | `REValuationCashflow.REValuationIsInitialCost` |
| `REValuationCashflow.REValuationIsLiabilityDiff` | `REValuationCashflow.REValuationIsLiabilityDiff` |
| `REValuationCashflow.REIsDeferralAdjustment` | `REValuationCashflow.REIsDeferralAdjustment` |
| `REValuationCashflow.REIsAssetRetirementObligation` | `REValuationCashflow.REIsAssetRetirementObligation` |
| `REValuationCashflow.REValnIsCompleteRetirement` | `REValuationCashflow.REValnIsCompleteRetirement` |
| `REValuationCashflow.REIsRetroActiveChange` | `REValuationCashflow.REIsRetroActiveChange` |
| `REValuationCashflow.REValuationIsReduction` | `REValuationCashflow.REValuationIsReduction` |
| `REValuationCashflow.REDocumentReferenceUUID` | `REValuationCashflow.REDocumentReferenceUUID` |
| `REValuationCashflow.REDocumentReference2UUID` | `REValuationCashflow.REDocumentReference2UUID` |
| `REValuationCashflow.REDocumentReference3UUID` | `REValuationCashflow.REDocumentReference3UUID` |
| `REValuationCashflow.REDocumentReference4UUID` | `REValuationCashflow.REDocumentReference4UUID` |
| `REValuationCashflow.CreatedByUser` | `REValuationCashflow.CreatedByUser` |
| `REValuationCashflow.CreationDate` | `REValuationCashflow.CreationDate` |
| `REValuationCashflow.CreationTime` | `REValuationCashflow.CreationTime` |
| `REValuationCashflow.RESourceOfCreation` | `REValuationCashflow.RESourceOfCreation` |
| `REValuationCashflow.LastChangedByUser` | `REValuationCashflow.LastChangedByUser` |
| `REValuationCashflow.LastChangeDate` | `REValuationCashflow.LastChangeDate` |
| `REValuationCashflow.LastChangeTime` | `REValuationCashflow.LastChangeTime` |
| `REValuationCashflow.RESourceOfChange` | `REValuationCashflow.RESourceOfChange` |
| `REValuationCashflow.IsReversed` | `REValuationCashflow.IsReversed` |
| `REValuationCashflow.SplitCashFlowRecordUUID` | `REValuationCashflow.SplitCashFlowRecordUUID` |
| `REValuationCashflow.RecordIsBasisForSplit` | `REValuationCashflow.RecordIsBasisForSplit` |
| `REValuationCashflow.REValuationEngine` | `REValuationCashflow.REValuationEngine` |
| `case when REValuationCashflow._REContract._REContractType_2.REContractUserSupplier = '1'` | `case when REValuationCashflow._REContract._REContractType_2.REContractUserSupplier = '1'` |
| `then` | `then` |
| `case when REValuationCashflow.RECashFlowType = '1'` | `case when REValuationCashflow.RECashFlowType = '1'` |
| `then` | `then` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount` | `then REValuationCashflow.RECashFlowPositionAmount` |
| `else REValuationCashflow.RECashFlowPositionAmount * (-1)` | `else REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `end` | `end` |
| `else` | `else` |
| `case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'` | `case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'` |
| `and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'` | `and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'` |
| `then` | `then` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount * (-1)` | `then REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `else REValuationCashflow.RECashFlowPositionAmount` | `else REValuationCashflow.RECashFlowPositionAmount` |
| `end` | `end` |
| `else` | `else` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount` | `then REValuationCashflow.RECashFlowPositionAmount` |
| `else REValuationCashflow.RECashFlowPositionAmount * (-1)` | `else REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `end` | `end` |
| `end` | `end` |
| `end` | `end` |
| `else` | `else` |
| `case when REValuationCashflow.RECashFlowType = '1'` | `case when REValuationCashflow.RECashFlowType = '1'` |
| `then` | `then` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount * (-1)` | `then REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `else REValuationCashflow.RECashFlowPositionAmount` | `else REValuationCashflow.RECashFlowPositionAmount` |
| `end` | `end` |
| `else` | `else` |
| `case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'` | `case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'` |
| `and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'` | `and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'` |
| `then` | `then` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount` | `then REValuationCashflow.RECashFlowPositionAmount` |
| `else REValuationCashflow.RECashFlowPositionAmount * (-1)` | `else REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `end` | `end` |
| `else` | `else` |
| `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` | `case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'` |
| `then REValuationCashflow.RECashFlowPositionAmount * (-1)` | `then REValuationCashflow.RECashFlowPositionAmount * (-1)` |
| `else REValuationCashflow.RECashFlowPositionAmount` | `else REValuationCashflow.RECashFlowPositionAmount` |
| `end` | `end` |
| `end` | `end` |
| `end` | `end` |
| `RECashFlowPositionAmount` | `end` |
| `REValuationCashflow.RETaxType` | `REValuationCashflow.RETaxType` |
| `REValuationCashflow.RETaxGroup` | `REValuationCashflow.RETaxGroup` |
| `REValuationCashflow.TaxJurisdiction` | `REValuationCashflow.TaxJurisdiction` |
| `REValuationCashflow.REIsConditionGrossAmount` | `REValuationCashflow.REIsConditionGrossAmount` |
| `REValuationCashflow.TaxCountry` | `REValuationCashflow.TaxCountry` |
| `REValuationCashflow.REFlowType` | `REValuationCashflow.REFlowType` |
| `REValuationCashflow.REOriginalFlowType` | `REValuationCashflow.REOriginalFlowType` |
| `REValuationCashflow.RERelshpOriglToFlowType` | `REValuationCashflow.RERelshpOriglToFlowType` |
| `REValuationCashflow.CashFlowPostingStatus` | `REValuationCashflow.CashFlowPostingStatus` |
| `REValuationCashflow.IsToBeArchived` | `REValuationCashflow.IsToBeArchived` |
| `REValuationCashflow.REOriglDueDate` | `REValuationCashflow.REOriglDueDate` |
| `REValuationCashflow.REConditionType` | `REValuationCashflow.REConditionType` |
| `REValuationCashflow.PostingDate` | `REValuationCashflow.PostingDate` |
| `REValuationCashflow.DocumentDate` | `REValuationCashflow.DocumentDate` |
| `REValuationCashflow.ExchangeRateDate` | `REValuationCashflow.ExchangeRateDate` |
| `REValuationCashflow.REReversalForUUID` | `REValuationCashflow.REReversalForUUID` |
| `REValuationCashflow.REReversalByUUID` | `REValuationCashflow.REReversalByUUID` |
| `REValuationCashflow.REFollowUpPostingUUID` | `REValuationCashflow.REFollowUpPostingUUID` |
| `REValuationCashflow.REBookedFlowType` | `REValuationCashflow.REBookedFlowType` |
| `REValuationCashflow.RERelshpBookedToFlowType` | `REValuationCashflow.RERelshpBookedToFlowType` |
| `REValuationCashflow.RETaxCalcDate` | `REValuationCashflow.RETaxCalcDate` |
| `REValuationCashflow.REModifiedDueDate` | `REValuationCashflow.REModifiedDueDate` |
| `REValuationCashflow.RECalcDueDate` | `REValuationCashflow.RECalcDueDate` |
| `REValuationCashflow.RECurrencyTranslationRule` | `REValuationCashflow.RECurrencyTranslationRule` |
| `REValuationCashflow.REIsPostInConditionCurrency` | `REValuationCashflow.REIsPostInConditionCurrency` |
| `REValuationCashflow.REPlndTranslationDate` | `REValuationCashflow.REPlndTranslationDate` |
| `REValuationCashflow.REActlTranslationDate` | `REValuationCashflow.REActlTranslationDate` |
| `REValuationCashflow.REOriglActlTranslationDate` | `REValuationCashflow.REOriglActlTranslationDate` |
| `REValuationCashflow.REIsTranslationDateFrmCashFlow` | `REValuationCashflow.REIsTranslationDateFrmCashFlow` |
| `REValuationCashflow._REContract._CompanyCode._Country.TaxCalculationProcedure` | `REValuationCashflow._REContract._CompanyCode._Country.TaxCalculationProcedure` |
| `/* Associations */` | `/* Associations */` |
| `REValuationCashflow._ChangedByUser` | `REValuationCashflow._ChangedByUser` |
| `REValuationCashflow._CreatedByUser` | `REValuationCashflow._CreatedByUser` |
| `REValuationCashflow._REBookedFlowType` | `REValuationCashflow._REBookedFlowType` |
| `REValuationCashflow._RECashFlowItemOrigin` | `REValuationCashflow._RECashFlowItemOrigin` |
| `REValuationCashflow._RECashFlowPostingStatus` | `REValuationCashflow._RECashFlowPostingStatus` |
| `REValuationCashflow._RECondition` | `REValuationCashflow._RECondition` |
| `REValuationCashflow._REConditionType` | `REValuationCashflow._REConditionType` |
| `REValuationCashflow._REContract` | `REValuationCashflow._REContract` |
| `REValuationCashflow._REDocumentHeader` | `REValuationCashflow._REDocumentHeader` |
| `REValuationCashflow._REFlowType` | `REValuationCashflow._REFlowType` |
| `REValuationCashflow._REOriglFlowType` | `REValuationCashflow._REOriglFlowType` |
| `REValuationCashflow._RERelshpBookedToFlowType` | `REValuationCashflow._RERelshpBookedToFlowType` |
| `REValuationCashflow._RERelshpOriglToFlowType` | `REValuationCashflow._RERelshpOriglToFlowType` |
| `REValuationCashflow._RETaxGroup` | `REValuationCashflow._RETaxGroup` |
| `REValuationCashflow._RETaxType` | `REValuationCashflow._RETaxType` |
| `REValuationCashflow._TaxCountry` | `REValuationCashflow._TaxCountry` |
| `_REValuationTerm` | *Association* |
| `_REValuationRule` | *Association* |
| `_RECashFlowType` | *Association* |
| `_RERelevantProcessData` | *Association* |
| `_RECurrencyTranslationRule` | *Association* |
| `_TaxJurisdiction` | *Association* |
| `_TaxJurisdictionCalcProcedure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REValuationTerm` | `I_REValuationTerm` | [0..1] |
| `_REValuationRule` | `I_REValuationRule` | [0..1] |
| `_RECashFlowType` | `I_RECashFlowType` | [0..1] |
| `_RECurrencyTranslationRule` | `I_RECurrencyTranslationRule` | [0..1] |
| `_RERelevantProcessData` | `I_RERelevantValnProcessStep` | [0..1] |
| `_TaxJurisdictionCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |
| `_TaxJurisdiction` | `I_TaxJurisdiction` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_ChangedByUser', '_CreatedByUser']
}
@EndUserText.label: 'Real Estate Valuation Asset Cash Flow'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REValuationCashFlowRecordUUID',
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REValuationAssetCashFlow'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
define view entity I_REValnAssetCashFlow
  as select from I_REValuationCashFlow       as REValuationCashflow
    inner join   I_RERelevantValnProcessStep as _RERelevantProcess on  REValuationCashflow.REValuationProcessUUID   = _RERelevantProcess.REValuationProcessUUID
                                                                   and REValuationCashflow.InternalRealEstateNumber = _RERelevantProcess.InternalRealEstateNumber
                                                                   and REValuationCashflow.REValuationRuleUUID      = _RERelevantProcess.REValuationRuleUUID

  association [0..1] to I_REValuationTerm           as _REValuationTerm              on  $projection.InternalRealEstateNumber = _REValuationTerm.InternalRealEstateNumber
                                                                                     and $projection.REValuationRuleUUID      = _REValuationTerm.REValuationRuleUUID
  association [0..1] to I_REValuationRule           as _REValuationRule              on  $projection.REValuationRule = _REValuationRule.REValuationRule
  association [0..1] to I_RECashFlowType            as _RECashFlowType               on  $projection.RECashFlowType = _RECashFlowType.RECashFlowType
  association [0..1] to I_RECurrencyTranslationRule as _RECurrencyTranslationRule    on  $projection.RECurrencyTranslationRule = _RECurrencyTranslationRule.RECurrencyTranslationRule
  association [0..1] to I_RERelevantValnProcessStep as _RERelevantProcessData        on  REValuationCashflow.REValuationProcessUUID   = _RERelevantProcessData.REValuationProcessUUID
                                                                                     and REValuationCashflow.InternalRealEstateNumber = _RERelevantProcessData.InternalRealEstateNumber
                                                                                     and REValuationCashflow.REValuationRuleUUID      = _RERelevantProcessData.REValuationRuleUUID
  association [0..1] to I_TaxJurisCalcProcedure     as _TaxJurisdictionCalcProcedure on  $projection.taxcalculationprocedure = _TaxJurisdictionCalcProcedure.TaxJurisdictionCalcProcedure
  association [0..1] to I_TaxJurisdiction           as _TaxJurisdiction              on  $projection.TaxJurisdiction         = _TaxJurisdiction.TaxJurisdiction
                                                                                     and $projection.taxcalculationprocedure = _TaxJurisdiction.TaxJurisdictionCalcProcedure
{
      @ObjectModel.foreignKey.association: '_REContract'
  key REValuationCashflow.InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_REValuationTerm'
  key REValuationCashflow.REValuationRuleUUID,
      @ObjectModel.foreignKey.association: '_RERelevantProcessData'
  key REValuationCashflow.REValuationProcessUUID,
  key REValuationCashflow.REValuationCashFlowRecordUUID,
      REValuationCashflow.RETermNumber,
      @ObjectModel.foreignKey.association: '_REValuationRule'
      REValuationCashflow.REValuationRule,
      @ObjectModel.foreignKey.association: '_RECashFlowType'
      REValuationCashflow.RECashFlowType,
      REValuationCashflow.CashFlowItemOrigin,
      REValuationCashflow.REStatusObject,
      REValuationCashflow.REStatusObjectAsset,
      REValuationCashflow.REConditionUUID,
      REValuationCashflow.ValidityStartDate,
      @Semantics.businessDate.from: true
      REValuationCashflow.CalculationPeriodStartDate,
      @Semantics.businessDate.to: true
      REValuationCashflow.CalculationPeriodEndDate,
      REValuationCashflow.NumberOfDays,
      REValuationCashflow.REPositionDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.PaymentDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.CalculationDate,
      REValuationCashflow.REConditionCurrency,
      REValuationCashflow.REInterestRate,
      REValuationCashflow.REValuationIsInitialCost,
      REValuationCashflow.REValuationIsLiabilityDiff,
      REValuationCashflow.REIsDeferralAdjustment,
      REValuationCashflow.REIsAssetRetirementObligation,
      REValuationCashflow.REValnIsCompleteRetirement,
      REValuationCashflow.REIsRetroActiveChange,
      REValuationCashflow.REValuationIsReduction,
      REValuationCashflow.REDocumentReferenceUUID,
      REValuationCashflow.REDocumentReference2UUID,
      REValuationCashflow.REDocumentReference3UUID,
      REValuationCashflow.REDocumentReference4UUID,
      REValuationCashflow.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      REValuationCashflow.CreationDate,
      REValuationCashflow.CreationTime,
      REValuationCashflow.RESourceOfCreation,
      REValuationCashflow.LastChangedByUser,
      REValuationCashflow.LastChangeDate,
      REValuationCashflow.LastChangeTime,
      REValuationCashflow.RESourceOfChange,
      REValuationCashflow.IsReversed,
      REValuationCashflow.SplitCashFlowRecordUUID,
      REValuationCashflow.RecordIsBasisForSplit,
      REValuationCashflow.REValuationEngine,

      @Semantics.amount.currencyCode: 'REConditionCurrency'
      case when REValuationCashflow._REContract._REContractType_2.REContractUserSupplier = '1'
      then
        case when REValuationCashflow.RECashFlowType = '1'
        then
          case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
           then REValuationCashflow.RECashFlowPositionAmount
           else REValuationCashflow.RECashFlowPositionAmount * (-1)
          end
        else
          case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'
                and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'
            then
              case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
               then REValuationCashflow.RECashFlowPositionAmount * (-1)
               else REValuationCashflow.RECashFlowPositionAmount
              end
            else
              case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
               then REValuationCashflow.RECashFlowPositionAmount
               else REValuationCashflow.RECashFlowPositionAmount * (-1)
              end
          end
        end
      else
        case when REValuationCashflow.RECashFlowType = '1'
        then
          case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
           then REValuationCashflow.RECashFlowPositionAmount * (-1)
           else REValuationCashflow.RECashFlowPositionAmount
          end
        else
          case when REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'
                and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'
            then
              case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
               then REValuationCashflow.RECashFlowPositionAmount
               else REValuationCashflow.RECashFlowPositionAmount * (-1)
              end
            else
              case when REValuationCashflow._REBookedFlowType.DebitCreditCode = 'H'
               then REValuationCashflow.RECashFlowPositionAmount * (-1)
               else REValuationCashflow.RECashFlowPositionAmount
              end
            end
        end
      end as RECashFlowPositionAmount,

      @ObjectModel.foreignKey.association: '_RETaxType'
      REValuationCashflow.RETaxType,
      @ObjectModel.foreignKey.association: '_RETaxGroup'
      REValuationCashflow.RETaxGroup,
      @ObjectModel.foreignKey.association: '_TaxJurisdiction'
      REValuationCashflow.TaxJurisdiction,
      REValuationCashflow.REIsConditionGrossAmount,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      REValuationCashflow.TaxCountry,
      REValuationCashflow.REFlowType,
      REValuationCashflow.REOriginalFlowType,
      REValuationCashflow.RERelshpOriglToFlowType,
      REValuationCashflow.CashFlowPostingStatus,
      REValuationCashflow.IsToBeArchived,
      REValuationCashflow.REOriglDueDate,
      REValuationCashflow.REConditionType,
      @Semantics.businessDate.at: true
      REValuationCashflow.PostingDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.DocumentDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.ExchangeRateDate,
      REValuationCashflow.REReversalForUUID,
      REValuationCashflow.REReversalByUUID,
      REValuationCashflow.REFollowUpPostingUUID,
      REValuationCashflow.REBookedFlowType,
      REValuationCashflow.RERelshpBookedToFlowType,
      @Semantics.businessDate.at: true
      REValuationCashflow.RETaxCalcDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REModifiedDueDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.RECalcDueDate,
      @ObjectModel.foreignKey.association: '_RECurrencyTranslationRule'
      REValuationCashflow.RECurrencyTranslationRule,
      REValuationCashflow.REIsPostInConditionCurrency,
      @Semantics.businessDate.at: true
      REValuationCashflow.REPlndTranslationDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REActlTranslationDate,
      @Semantics.businessDate.at: true
      REValuationCashflow.REOriglActlTranslationDate,
      REValuationCashflow.REIsTranslationDateFrmCashFlow,
      @ObjectModel.foreignKey.association: '_TaxJurisdictionCalcProcedure'
      REValuationCashflow._REContract._CompanyCode._Country.TaxCalculationProcedure,

      /* Associations */
      REValuationCashflow._ChangedByUser,
      REValuationCashflow._CreatedByUser,
      REValuationCashflow._REBookedFlowType,
      REValuationCashflow._RECashFlowItemOrigin,
      REValuationCashflow._RECashFlowPostingStatus,
      REValuationCashflow._RECondition,
      REValuationCashflow._REConditionType,
      REValuationCashflow._REContract,
      REValuationCashflow._REDocumentHeader,
      REValuationCashflow._REFlowType,
      REValuationCashflow._REOriglFlowType,
      REValuationCashflow._RERelshpBookedToFlowType,
      REValuationCashflow._RERelshpOriglToFlowType,
      REValuationCashflow._RETaxGroup,
      REValuationCashflow._RETaxType,
      REValuationCashflow._TaxCountry,
      _REValuationTerm,
      _REValuationRule,
      _RECashFlowType,
      _RERelevantProcessData,
      _RECurrencyTranslationRule,
      _TaxJurisdiction,
      _TaxJurisdictionCalcProcedure

}
where
      REValuationCashflow.RECashFlowType           =  '1'
  and REValuationCashflow.RERelshpBookedToFlowType <> 'CE8'
  and REValuationCashflow.RERelshpBookedToFlowType <> 'CE9'
  and _REValuationRule.REValuationClassification   <> 'C'
  or  REValuationCashflow.RECashFlowType           =  '2'
```
