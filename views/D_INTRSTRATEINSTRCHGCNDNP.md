---
name: D_INTRSTRATEINSTRCHGCNDNP
description: D Intrstrateinstrchgcndnp
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# D_INTRSTRATEINSTRCHGCNDNP

**D Intrstrateinstrchgcndnp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialTransactionDirection  : tb_rkondgr;` | `FinancialTransactionDirection  : tb_rkondgr;` |
| `FinConditionItem               : tb_kond;` | `FinConditionItem               : tb_kond;` |
| `ConditionItemValidityStartDate : dguel_kp;` | `ConditionItemValidityStartDate : dguel_kp;` |
| `FinConditionConditionType      : ftr_cndn_condition_type;` | `FinConditionConditionType      : ftr_cndn_condition_type;` |
| `FinConditionInterestCategory   : ftr_intcat;` | `FinConditionInterestCategory   : ftr_intcat;` |
| `ConditionPercentageRate        : pkond;` | `ConditionPercentageRate        : pkond;` |
| `FinancialConditionItemAmount   : ftr_condition_item_amount;` | `FinancialConditionItemAmount   : ftr_condition_item_amount;` |
| `FinancialConditionItemCurrency : swhrkond;` | `FinancialConditionItemCurrency : swhrkond;` |
| `FinCndnFirstPeriodCalcMethod   : tfmsfstper;` | `FinCndnFirstPeriodCalcMethod   : tfmsfstper;` |
| `FinCndnLastPeriodCalcMethod    : tfmsfstper;` | `FinCndnLastPeriodCalcMethod    : tfmsfstper;` |
| `FinCndnCalcBaseAmt             : ftr_calc_base_amount;` | `FinCndnCalcBaseAmt             : ftr_calc_base_amount;` |
| `ReferenceInterestRate          : szsref;` | `ReferenceInterestRate          : szsref;` |
| `InterestMarkupMarkdownValue    : tb_zzs;` | `InterestMarkupMarkdownValue    : tb_zzs;` |
| `FinConditionFormulaReference   : tb_xformbe;` | `FinConditionFormulaReference   : tb_xformbe;` |
| `InterestFirstPeriodRate        : tfm_pkond1stper;` | `InterestFirstPeriodRate        : tfm_pkond1stper;` |
| `FinancialConditionPaymentRate  : tfm_ppayment;` | `FinancialConditionPaymentRate  : tfm_ppayment;` |
| `InterestCalculationMethod      : szbmeth;` | `InterestCalculationMethod      : szbmeth;` |
| `IntrstCalcMethFactoryCalendar  : tfmskalidwt;` | `IntrstCalcMethFactoryCalendar  : tfmskalidwt;` |
| `FinCndnDueDteFrequency         : ftr_cndn_due_date_frequency;` | `FinCndnDueDteFrequency         : ftr_cndn_due_date_frequency;` |
| `FinCndnDueDteFrqcyUnit         : ftr_cndn_due_date_frqcy_unit;` | `FinCndnDueDteFrqcyUnit         : ftr_cndn_due_date_frqcy_unit;` |
| `CalculationDate                : dvalut;` | `CalculationDate                : dvalut;` |
| `TermStartDateIsInclusive       : tb_svincl;` | `TermStartDateIsInclusive       : tb_svincl;` |
| `CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;` | `CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;` |
| `FinCndnCalcDteWrkgDayShft      : ftr_cndn_calc_date_wrk_day_sft;` | `FinCndnCalcDteWrkgDayShft      : ftr_cndn_calc_date_wrk_day_sft;` |
| `FinancialConditionDueDate      : dfaell;` | `FinancialConditionDueDate      : dfaell;` |
| `DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;` | `DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;` |
| `FinCndnDueDteWrkgDayShft       : ftr_cndn_due_date_wrk_day_sft;` | `FinCndnDueDteWrkgDayShft       : ftr_cndn_due_date_wrk_day_sft;` |
| `FinCndnDueDteShiftToTermEnd    : tb_sfranze_new;` | `FinCndnDueDteShiftToTermEnd    : tb_sfranze_new;` |
| `FinConditionFactoryCalendar1   : ftr_cndn_factory_calendar1;` | `FinConditionFactoryCalendar1   : ftr_cndn_factory_calendar1;` |
| `FinConditionFactoryCalendar2   : ftr_cndn_factory_calendar2;` | `FinConditionFactoryCalendar2   : ftr_cndn_factory_calendar2;` |
| `InterestRateAdjustmentDateRule : tfmsrhyzap;` | `InterestRateAdjustmentDateRule : tfmsrhyzap;` |
| `InterestRateAdjustmentFrqcy    : tfmarhy;` | `InterestRateAdjustmentFrqcy    : tfmarhy;` |
| `InterestRateAdjmtFrqcyUnit     : tfmurhy;` | `InterestRateAdjmtFrqcyUnit     : tfmurhy;` |
| `InterestRateAdjustmentDate     : tbvaluza;` | `InterestRateAdjustmentDate     : tbvaluza;` |
| `IntrstRateAdjmtDateIsMonthEnd  : tbultiza;` | `IntrstRateAdjmtDateIsMonthEnd  : tbultiza;` |
| `IntrstRateAdjmtDateWrkgDayShft : tb_svwerk;` | `IntrstRateAdjmtDateWrkgDayShft : tb_svwerk;` |
| `IntrstRateAdjmtShftNrOfDays    : tb_avgstag;` | `IntrstRateAdjmtShftNrOfDays    : tb_avgstag;` |
| `InterestRateFixingDateRule     : tfmsrhy;` | `InterestRateFixingDateRule     : tfmsrhy;` |
| `InterestRateFixingDateRef      : tfmzreldat;` | `InterestRateFixingDateRef      : tfmzreldat;` |
| `InterestRateFixingFrqcy        : tfmarhy;` | `InterestRateFixingFrqcy        : tfmarhy;` |
| `InterestRateFixingFrqcyUnit    : tfmurhy;` | `InterestRateFixingFrqcyUnit    : tfmurhy;` |
| `InterestRateFixingDate         : tbfaelza;` | `InterestRateFixingDate         : tbfaelza;` |
| `IntrstRateFixingDateIsMonthEnd : tbfultiza;` | `IntrstRateFixingDateIsMonthEnd : tbfultiza;` |
| `InterestRateFixingShftNrOfDays : tb_azgstag;` | `InterestRateFixingShftNrOfDays : tb_azgstag;` |
| `IntrstRateFixDteShftIsModifd   : tfmjmodif;` | `IntrstRateFixDteShftIsModifd   : tfmjmodif;` |
| `FinConditionFactoryCalendar3   : ftr_cndn_factory_calendar3;` | `FinConditionFactoryCalendar3   : ftr_cndn_factory_calendar3;` |
| `FinCndnRpaytSettlmt            : tfmsofverr;` | `FinCndnRpaytSettlmt            : tfmsofverr;` |
| `FinCndnAmountRoundingCategory  : tfm_sround;` | `FinCndnAmountRoundingCategory  : tfm_sround;` |
| `FinCndnAmountRoundingUnit      : tfmprunit;` | `FinCndnAmountRoundingUnit      : tfmprunit;` |
| `FinCndnAmtRoundingCalcFactor   : bapicurr_d;` | `FinCndnAmtRoundingCalcFactor   : bapicurr_d;` |
| `ExponentialIntrstSettlmtFrqcy  : tfm_ammrhyzv;` | `ExponentialIntrstSettlmtFrqcy  : tfm_ammrhyzv;` |
| `FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;` | `FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;` |
| `FinCndnCalcBaseReference       : sbasis;` | `FinCndnCalcBaseReference       : sbasis;` |
| `FinCndnAmountTimeUnit          : tfm_samountunit;` | `FinCndnAmountTimeUnit          : tfm_samountunit;` |
| `FinCndnCalcDteUpdateRule       : ftr_cndn_calc_date_update_meth;` | `FinCndnCalcDteUpdateRule       : ftr_cndn_calc_date_update_meth;` |
| `FinCndnCalcDteShftNrOfDays     : tb_avgstag;` | `FinCndnCalcDteShftNrOfDays     : tb_avgstag;` |
| `FinCndnDueDteUpdateRule        : ftr_cndn_due_date_update_meth;` | `FinCndnDueDteUpdateRule        : ftr_cndn_due_date_update_meth;` |
| `FinCndnDueDteShftNrOfDays      : tb_afgstag;` | `FinCndnDueDteShftNrOfDays      : tb_afgstag;` |
| `FinConditionFactoryCalendar4   : ftr_cndn_factory_calendar4;` | `FinConditionFactoryCalendar4   : ftr_cndn_factory_calendar4;` |
| `FinConditionFactoryCalendar5   : ftr_cndn_factory_calendar5;` | `FinConditionFactoryCalendar5   : ftr_cndn_factory_calendar5;` |
| `FinCndnItemLowerLimitAmount    : ftr_condition_lower_amount;` | `FinCndnItemLowerLimitAmount    : ftr_condition_lower_amount;` |
| `FinCndnItemUpperLimitAmount    : ftr_condition_upper_amount;` | `FinCndnItemUpperLimitAmount    : ftr_condition_upper_amount;` |
| `InterestCalculationType        : tfmsintcalc;` | `InterestCalculationType        : tfmsintcalc;` |
| `FinCndnFactorRoundingCategory  : tfm_sroundfactor;` | `FinCndnFactorRoundingCategory  : tfm_sroundfactor;` |
| `FinCndnFactorRoundingDecimals  : tfm_rounddecfactor;` | `FinCndnFactorRoundingDecimals  : tfm_rounddecfactor;` |
| `FinCndnRateFactorRndngCategory : tfm_sroundratefactor;` | `FinCndnRateFactorRndngCategory : tfm_sroundratefactor;` |
| `FinCndnRateFactorRndngDecimals : tfm_rounddecratefactor;` | `FinCndnRateFactorRndngDecimals : tfm_rounddecratefactor;` |
| `FinCndnBaseFactorRndngCategory : tfm_sroundbasefactor;` | `FinCndnBaseFactorRndngCategory : tfm_sroundbasefactor;` |
| `FinCndnBaseFactorRndngDecimals : tfm_rounddecbasefactor;` | `FinCndnBaseFactorRndngDecimals : tfm_rounddecbasefactor;` |
| `FinCndnRateFixingLockoutPeriod : tfmatlockout;` | `FinCndnRateFixingLockoutPeriod : tfmatlockout;` |
| `FinCndnProcessingSequenceValue : tfm_sequence;` | `FinCndnProcessingSequenceValue : tfm_sequence;` |
| `AvgIntrstRateHasUsedUpperLimit : tfm_javgcap;` | `AvgIntrstRateHasUsedUpperLimit : tfm_javgcap;` |
| `AverageInterestUpperLimitRate  : tfm_pavgcap;` | `AverageInterestUpperLimitRate  : tfm_pavgcap;` |
| `AvgIntrstRateHasUsedLowerLimit : tfm_javgfloor;` | `AvgIntrstRateHasUsedLowerLimit : tfm_javgfloor;` |
| `AverageInterestLowerLimitRate  : tfm_pavgfloor;` | `AverageInterestLowerLimitRate  : tfm_pavgfloor;` |
| `AverageInterestRateSpreadValue : tfm_pavgspread;` | `AverageInterestRateSpreadValue : tfm_pavgspread;` |
| `AverageIntrstRateRndngCategory : tfm_sroundavginterest;` | `AverageIntrstRateRndngCategory : tfm_sroundavginterest;` |
| `AverageIntrstRateRndngDecimals : tfm_rounddecavginterest;` | `AverageIntrstRateRndngDecimals : tfm_rounddecavginterest;` |
| `AverageIntrstRateWeightingCat  : tfm_sweight;` | `AverageIntrstRateWeightingCat  : tfm_sweight;` |
| `AverageIntrstRateResetCalcEvt  : tfm_sfactorreset;` | `AverageIntrstRateResetCalcEvt  : tfm_sfactorreset;` |
| `FinCndnItmHasUsedLowerLimitAmt : tfm_jugrenz;` | `FinCndnItmHasUsedLowerLimitAmt : tfm_jugrenz;` |
| `FinCndnItmHasUsedUpperLimitAmt : tfm_jugrenz;` | `FinCndnItmHasUsedUpperLimitAmt : tfm_jugrenz;` |
| `_FmlaVarbl                     : composition [0..*] of D_IntrstRateInstrChgFmlaVarblP;` | *Association* |
| `_Scales                        : composition [0..*] of D_IntrstRateInstrChgScaleP;` | *Association* |
| `_SingleDates                   : composition [0..*] of D_IntrstRateInstrChgSglDteP;` | *Association* |
| `_IntrstRateInstr              : association to parent D_IntrstRateInstrChangeP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Condition Abstract View Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgCndnP
{
//   key DummyKey                       : abap.char(1);
      //CompanyCode                    : bukrs;
      //FinancialTransaction           : tb_rfha;
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      FinConditionConditionType      : ftr_cndn_condition_type;
      //FinCndnAdjCrossRef             : szinsanp;
      //FinCndnZero                    : tb_snullkond;
      FinConditionInterestCategory   : ftr_intcat;
      ConditionPercentageRate        : pkond;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinancialConditionItemAmount   : ftr_condition_item_amount;
      @Semantics.currencyCode        : true
      FinancialConditionItemCurrency : swhrkond;
      FinCndnFirstPeriodCalcMethod   : tfmsfstper;
      FinCndnLastPeriodCalcMethod    : tfmsfstper;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnCalcBaseAmt             : ftr_calc_base_amount;
      ReferenceInterestRate          : szsref;
      InterestMarkupMarkdownValue    : tb_zzs;
      FinConditionFormulaReference   : tb_xformbe;
      InterestFirstPeriodRate        : tfm_pkond1stper;
      FinancialConditionPaymentRate  : tfm_ppayment;
      InterestCalculationMethod      : szbmeth;
      IntrstCalcMethFactoryCalendar  : tfmskalidwt;
      FinCndnDueDteFrequency         : ftr_cndn_due_date_frequency;
      FinCndnDueDteFrqcyUnit         : ftr_cndn_due_date_frqcy_unit;
      CalculationDate                : dvalut;
      TermStartDateIsInclusive       : tb_svincl;
      CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;
      FinCndnCalcDteWrkgDayShft      : ftr_cndn_calc_date_wrk_day_sft;
      FinancialConditionDueDate      : dfaell;
      DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;
      FinCndnDueDteWrkgDayShft       : ftr_cndn_due_date_wrk_day_sft;
      FinCndnDueDteShiftToTermEnd    : tb_sfranze_new;
      FinConditionFactoryCalendar1   : ftr_cndn_factory_calendar1;
      FinConditionFactoryCalendar2   : ftr_cndn_factory_calendar2;
      InterestRateAdjustmentDateRule : tfmsrhyzap;
      InterestRateAdjustmentFrqcy    : tfmarhy;
      InterestRateAdjmtFrqcyUnit     : tfmurhy;
      InterestRateAdjustmentDate     : tbvaluza;
      IntrstRateAdjmtDateIsMonthEnd  : tbultiza;
      IntrstRateAdjmtDateWrkgDayShft : tb_svwerk;
      IntrstRateAdjmtShftNrOfDays    : tb_avgstag;
      InterestRateFixingDateRule     : tfmsrhy;
      InterestRateFixingDateRef      : tfmzreldat;
      InterestRateFixingFrqcy        : tfmarhy;
      InterestRateFixingFrqcyUnit    : tfmurhy;
      InterestRateFixingDate         : tbfaelza;
      IntrstRateFixingDateIsMonthEnd : tbfultiza;
      InterestRateFixingShftNrOfDays : tb_azgstag;
      IntrstRateFixDteShftIsModifd   : tfmjmodif;
      FinConditionFactoryCalendar3   : ftr_cndn_factory_calendar3;
      FinCndnRpaytSettlmt            : tfmsofverr;
      FinCndnAmountRoundingCategory  : tfm_sround;
      FinCndnAmountRoundingUnit      : tfmprunit;
      FinCndnAmtRoundingCalcFactor   : bapicurr_d;
      ExponentialIntrstSettlmtFrqcy  : tfm_ammrhyzv;
      FinInstrConditionLogicGroup    : ftr_instr_cndn_logic_group;
      FinCndnCalcBaseReference       : sbasis;
      FinCndnAmountTimeUnit          : tfm_samountunit;
      FinCndnCalcDteUpdateRule       : ftr_cndn_calc_date_update_meth;
      FinCndnCalcDteShftNrOfDays     : tb_avgstag;
      FinCndnDueDteUpdateRule        : ftr_cndn_due_date_update_meth;
      FinCndnDueDteShftNrOfDays      : tb_afgstag;
      FinConditionFactoryCalendar4   : ftr_cndn_factory_calendar4;
      FinConditionFactoryCalendar5   : ftr_cndn_factory_calendar5;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnItemLowerLimitAmount    : ftr_condition_lower_amount;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinCndnItemUpperLimitAmount    : ftr_condition_upper_amount;
      InterestCalculationType        : tfmsintcalc;
      FinCndnFactorRoundingCategory  : tfm_sroundfactor;
      FinCndnFactorRoundingDecimals  : tfm_rounddecfactor;
      FinCndnRateFactorRndngCategory : tfm_sroundratefactor;
      FinCndnRateFactorRndngDecimals : tfm_rounddecratefactor;
      FinCndnBaseFactorRndngCategory : tfm_sroundbasefactor;
      FinCndnBaseFactorRndngDecimals : tfm_rounddecbasefactor;
      FinCndnRateFixingLockoutPeriod : tfmatlockout;
      FinCndnProcessingSequenceValue : tfm_sequence;
      AvgIntrstRateHasUsedUpperLimit : tfm_javgcap;
      AverageInterestUpperLimitRate  : tfm_pavgcap;
      AvgIntrstRateHasUsedLowerLimit : tfm_javgfloor;
      AverageInterestLowerLimitRate  : tfm_pavgfloor;
      AverageInterestRateSpreadValue : tfm_pavgspread;
      AverageIntrstRateRndngCategory : tfm_sroundavginterest;
      AverageIntrstRateRndngDecimals : tfm_rounddecavginterest;
      AverageIntrstRateWeightingCat  : tfm_sweight;
      AverageIntrstRateResetCalcEvt  : tfm_sfactorreset;
      FinCndnItmHasUsedLowerLimitAmt : tfm_jugrenz;
      FinCndnItmHasUsedUpperLimitAmt : tfm_jugrenz;

      _FmlaVarbl                     : composition [0..*] of D_IntrstRateInstrChgFmlaVarblP;
      _Scales                        : composition [0..*] of D_IntrstRateInstrChgScaleP;
      _SingleDates                   : composition [0..*] of D_IntrstRateInstrChgSglDteP;
      _IntrstRateInstr              : association to parent D_IntrstRateInstrChangeP;
      //      _InrstRateInstrAssociation     : association to parent D_IntrstRateInstrChangeP  on $projection.CompanyCode          = _InrstRateInstrAssociation.CompanyCode
      //                                                                                       and $projection.FinancialTransaction = _InrstRateInstrAssociation.FinancialTransaction;

}
```
