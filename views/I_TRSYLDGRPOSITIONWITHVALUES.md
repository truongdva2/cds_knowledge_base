---
name: I_TRSYLDGRPOSITIONWITHVALUES
description: Trsyldgrpositionwithvalues
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
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYLDGRPOSITIONWITHVALUES

**Trsyldgrpositionwithvalues**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `_PositionIdentifier.TreasuryValuationArea                                                                   as TreasuryValuationArea, // key` | *Association* |
| `_PositionIdentifier.TreasuryValuationClass                                                                  as TreasuryValuationClass, // key` | *Association* |
| `_PositionIdentifier.CompanyCode                                                                             as CompanyCode, // key` | *Association* |
| `_PositionIdentifier.SecurityAccount                                                                         as SecurityAccount, // key` | *Association* |
| `_PositionIdentifier.SecurityClass                                                                           as SecurityClass, // key` | *Association* |
| `_PositionIdentifier.TreasuryPositionLotUUID                                                                 as TreasuryPositionLotUUID, // key` | *Association* |
| `_PositionIdentifier.FinancialTransaction                                                                    as FinancialTransaction, // key` | *Association* |
| `_PositionIdentifier.FinancialExposureItem                                                                   as FinancialExposureItem, // key` | *Association* |
| `_PositionIdentifier.FinancialExposureSubItem                                                                as FinancialExposureSubItem, // key` | *Association* |
| `_PositionIdentifier.FinancialInstrValuationClass                                                            as FinancialInstrValuationClass` | *Association* |
| `_PositionIdentifier.DifferentiationPortfolio                                                                as DifferentiationPortfolio` | *Association* |
| `_PositionIdentifier.SecurityAccountGroup                                                                    as SecurityAccountGroup` | *Association* |
| `_PositionIdentifier.TreasuryPositionLongShortCode                                                           as TreasuryPositionLongShortCode` | *Association* |
| `_PositionIdentifier.FinancialInstrumentProductType                                                          as FinancialInstrumentProductType` | *Association* |
| `_PositionIdentifier.Fund                                                                                    as Fund` | *Association* |
| `_PositionIdentifier.GrantID                                                                                 as GrantID` | *Association* |
| `_PositionIdentifier._WBSElementBasicData.WBSElementExternalID                                               as WBSElementExternalID` | *Association* |
| `_PositionIdentifier.FunctionalArea                                                                          as FunctionalArea` | *Association* |
| `_PositionIdentifier.TrsyPosCustomDiffntnTerm1                                                               as TrsyPosCustomDiffntnTerm1` | *Association* |
| `_PositionIdentifier.TrsyPosCustomDiffntnTerm2                                                               as TrsyPosCustomDiffntnTerm2` | *Association* |
| `_PositionIdentifier.TrsyPosCustomDiffntnTerm3                                                               as TrsyPosCustomDiffntnTerm3` | *Association* |
| `_PositionIdentifier.TrsyPosCustomDiffntnTerm4                                                               as TrsyPosCustomDiffntnTerm4` | *Association* |
| `_PositionIdentifier.TrsyPosCustomDiffntnTerm5                                                               as TrsyPosCustomDiffntnTerm5` | *Association* |
| `ftr_gen_asset_liability_code preserving type )` | `cast( _TrsyLedgerPosition.TreasuryPosAssetLiabilityCode` |
| `_TrsyLedgerPosition.TrsyPosManagementProcedure                                                              as TrsyPosManagementProcedure` | *Association* |
| `_TrsyLedgerPosition.TreasuryPositionZeroDate                                                                as TreasuryPositionZeroDate` | *Association* |
| `ftr_gen_position_uuid preserving type)` | `cast(Deriv_Pos_Comp_Accu.position_oid` |
| `char5))` | `cast(max(cast(Deriv_Pos_Comp_Accu.nominal_curr` |
| `char5))` | `cast(max(cast(Deriv_Pos_Comp_Accu.des_nominal_curr` |
| `ftr_gen_valuation_currency preserving type)` | `cast(Deriv_Pos_Comp_Accu.valuation_curr` |
| `ftr_gen_position_crcy preserving type)` | `cast(Deriv_Pos_Comp_Accu.position_curr` |
| `ftr_gen_quantity_in_units)` | `cast(sum(Deriv_Pos_Comp_Accu.units)` |
| `tpm_nominal_amt preserving type)` | `cast(sum(nominal_amt)` |
| `ftr_gen_nominal_amount_orig)` | `cast(sum(nominal_org_amt)` |
| `tpm_nominal_amt preserving type)` | `cast(sum(des_nominal_amt)` |
| `ftr_gen_nominal_amount_orig)` | `cast(sum(des_nominal_org_amt)` |
| `ftr_gen_internal_clearing_pc)` | `cast(sum(PC_1000)` |
| `ftr_gen_internal_clearing_vc)` | `cast(sum(VC_1000)` |
| `ftr_gen_purch_pc)` | `cast(sum(PC_1001)` |
| `ftr_gen_purch_vc)` | `cast(sum(VC_1001)` |
| `ftr_gen_val_ti_pc)` | `cast(sum(PC_1002)` |
| `ftr_gen_val_ti_vc)` | `cast(sum(VC_1002)` |
| `ftr_gen_val_fx_vc)` | `cast(sum(VC_1003)` |
| `ftr_gen_charge_pc)` | `cast(sum(PC_1004)` |
| `ftr_gen_charge_vc)` | `cast(sum(VC_1004)` |
| `ftr_gen_val_ch_ti_pc)` | `cast(sum(PC_1005)` |
| `ftr_gen_val_ch_ti_vc)` | `cast(sum(VC_1005)` |
| `ftr_gen_val_ch_fx_vc)` | `cast(sum(VC_1006)` |
| `ftr_gen_amort_pc)` | `cast(sum(PC_1007)` |
| `ftr_gen_amort_vc)` | `cast(sum(VC_1007)` |
| `ftr_gen_disagio_pc)` | `cast(sum(PC_1008)` |
| `ftr_gen_disagio_vc)` | `cast(sum(VC_1008)` |
| `ftr_gen_val_idx_pc)` | `cast(sum(PC_1009)` |
| `ftr_gen_val_idx_vc)` | `cast(sum(VC_1009)` |
| `ftr_gen_deferral_item_pv_pc)` | `cast(sum(PC_1010)` |
| `ftr_gen_deferral_item_pv_vc)` | `cast(sum(VC_1010)` |
| `ftr_gen_val_fx_amaqu_val_vc)` | `cast(sum(VC_1011)` |
| `ftr_gen_varmar_pc)` | `cast(sum(PC_1012)` |
| `ftr_gen_varmar_vc)` | `cast(sum(VC_1012)` |
| `ftr_gen_val_ti_npl_pc)` | `cast(sum(PC_1013)` |
| `ftr_gen_val_ti_npl_vc)` | `cast(sum(VC_1013)` |
| `ftr_gen_val_fx_npl_vc)` | `cast(sum(VC_1014)` |
| `ftr_gen_val_idx_npl_pc)` | `cast(sum(PC_1015)` |
| `ftr_gen_val_idx_npl_vc)` | `cast(sum(VC_1015)` |
| `ftr_gen_val_ch_ti_npl_pc)` | `cast(sum(PC_1016)` |
| `ftr_gen_val_ch_ti_npl_vc)` | `cast(sum(VC_1016)` |
| `ftr_gen_val_ch_fx_npl_vc)` | `cast(sum(VC_1017)` |
| `ftr_gen_comp_acc_interest_pc)` | `cast(sum(PC_1018)` |
| `ftr_gen_comp_acc_interest_vc)` | `cast(sum(VC_1018)` |
| `ftr_gen_amort_neg_spread_pc)` | `cast(sum(PC_1019)` |
| `ftr_gen_amort_neg_spread_vc)` | `cast(sum(VC_1019)` |
| `ftr_gen_repayment_pc)` | `cast(sum(PC_1020)` |
| `ftr_gen_repayment_vc)` | `cast(sum(VC_1020)` |
| `ftr_gen_cons_gains_ti_pc)` | `cast(sum(PC_1021)` |
| `ftr_gen_cons_gains_ti_vc)` | `cast(sum(VC_1021)` |
| `ftr_gen_cons_losses_ti_pc)` | `cast(sum(PC_1022)` |
| `ftr_gen_cons_losses_ti_vc)` | `cast(sum(VC_1022)` |
| `ftr_gen_cons_gains_fx_vc)` | `cast(sum(VC_1023)` |
| `ftr_gen_cons_losses_fx_vc)` | `cast(sum(VC_1024)` |
| `ftr_gen_vad_gain_pc)` | `cast(sum(PC_1025)` |
| `ftr_gen_vad_gain_vc)` | `cast(sum(VC_1025)` |
| `ftr_gen_vad_loss_pc)` | `cast(sum(PC_1026)` |
| `ftr_gen_vad_loss_vc)` | `cast(sum(VC_1026)` |
| `ftr_gen_orig_vad_pc)` | `cast(sum(PC_1027)` |
| `ftr_gen_orig_vad_vc)` | `cast(sum(VC_1027)` |
| `ftr_gen_int_income_pc)` | `cast(sum(PC_1028)` |
| `ftr_gen_int_income_vc)` | `cast(sum(VC_1028)` |
| `ftr_gen_hamort_pc)` | `cast(sum(PC_1029)` |
| `ftr_gen_hamort_vc)` | `cast(sum(VC_1029)` |
| `ftr_gen_fx_valuation_diff_vc)` | `cast(sum(VC_1098)` |
| `ftr_gen_capitalization_res_pc)` | `cast(sum(PC_1099)` |
| `ftr_gen_capitalization_res_vc)` | `cast(sum(VC_1099)` |
| `ftr_gen_spotvalp_vc)` | `cast(sum(VC_1105)` |
| `ftr_gen_spotvals_vc)` | `cast(sum(VC_1106)` |
| `ftr_gen_swapacc_pc)` | `cast(sum(PC_1107)` |
| `ftr_gen_swapacc_vc)` | `cast(sum(VC_1107)` |
| `ftr_gen_swapval_vc)` | `cast(sum(VC_1108)` |
| `ftr_gen_impmnt_pc)` | `cast(sum(PC_1201)` |
| `ftr_gen_impmnt_vc)` | `cast(sum(VC_1201)` |
| `ftr_gen_impmnt_fx_vc)` | `cast(sum(VC_1202)` |
| `ftr_gen_val_amt_to_classify_pc)` | `cast(sum(PC_1300)` |
| `ftr_gen_val_amt_to_classify_vc)` | `cast(sum(VC_1300)` |
| `ftr_gen_effctv_amt_pc)` | `cast(sum(PC_1302)` |
| `ftr_gen_effctv_amt_vc)` | `cast(sum(VC_1302)` |
| `ftr_gen_ineffctv_amt_pc)` | `cast(sum(PC_1303)` |
| `ftr_gen_ineffctv_amt_vc)` | `cast(sum(VC_1303)` |
| `fti_imp_loss_allow_pc)` | `cast(sum(PC_1306)` |
| `fti_imp_loss_allow_vc)` | `cast(sum(VC_1306)` |
| `fti_imp_loss_allow_fx_vc)` | `cast(sum(VC_1307)` |
| `fti_imp_offs_loss_allow_pc)` | `cast(sum(PC_1308)` |
| `fti_imp_offs_loss_allow_vc)` | `cast(sum(VC_1308)` |
| `fti_imp_offs_loss_allow_fx_vc)` | `cast(sum(VC_1309)` |
| `fti_imp_contract_change_pc)` | `cast(sum(PC_1310)` |
| `fti_imp_contract_change_vc)` | `cast(sum(VC_1310)` |
| `fti_imp_contract_change_fx_vc)` | `cast(sum(VC_1311)` |
| `fti_imp_oci_offs_loss_allow_pc)` | `cast(sum(PC_1312)` |
| `fti_imp_oci_offs_loss_allow_vc)` | `cast(sum(VC_1312)` |
| `fti_imp_amort_adj_la_pc)` | `cast(sum(PC_1314)` |
| `fti_imp_oci_offs_la_fx_vc)` | `cast(sum(VC_1313)` |
| `fti_imp_amort_adj_la_vc)` | `cast(sum(VC_1314)` |
| `fti_imp_amort_adj_la_fx_vc)` | `cast(sum(VC_1315)` |
| `ftr_gen_effctv_costhr_pc)` | `cast(sum(PC_1322)` |
| `ftr_gen_effctv_costhr_vc)` | `cast(sum(VC_1322)` |
| `ftr_gen_ineffctv_hr_tpl_pc)` | `cast(sum(PC_1323)` |
| `ftr_gen_ineffctv_hr_tpl_vc)` | `cast(sum(VC_1323)` |
| `ftr_gen_effctv_hr_tpl_pc)` | `cast(sum(PC_1324)` |
| `ftr_gen_effctv_hr_tpl_vc)` | `cast(sum(VC_1324)` |
| `ftr_gen_ineffctv_costhr_tpl_pc)` | `cast(sum(PC_1333)` |
| `ftr_gen_ineffctv_costhr_tpl_vc)` | `cast(sum(VC_1333)` |
| `ftr_gen_effctv_costhr_tpl_pc)` | `cast(sum(PC_1334)` |
| `ftr_gen_effctv_costhr_tpl_vc)` | `cast(sum(VC_1334)` |
| `ftr_gen_pnl_desig_pc)` | `cast(sum(PC_1343)` |
| `ftr_gen_pnl_desig_vc)` | `cast(sum(VC_1343)` |
| `ftr_gen_pnl_non_desig_pc)` | `cast(sum(PC_1344)` |
| `ftr_gen_pnl_non_desig_vc)` | `cast(sum(PC_1344)` |
| `ftr_gen_amort_non_desig_pc)` | `cast(sum(PC_1345)` |
| `ftr_gen_amort_non_desig_vc)` | `cast(sum(PC_1345)` |
| `ftr_gen_book_val_pc)` | `cast(sum(PC_9001)` |
| `ftr_gen_book_val_vc)` | `cast(sum(VC_9001)` |
| `ftr_gen_book_val_ex_pc)` | `cast(sum(PC_9002)` |
| `ftr_gen_book_val_ex_vc)` | `cast(sum(VC_9002)` |
| `ftr_gen_aqu_val_pc)` | `cast(sum(PC_9003)` |
| `ftr_gen_aqu_val_vc)` | `cast(sum(VC_9003)` |
| `ftr_gen_amaqu_val_pc)` | `cast(sum(PC_9004)` |
| `ftr_gen_amaqu_val_vc)` | `cast(sum(VC_9004)` |
| `fti_amort_cost_pc)` | `cast(sum(PC_9005)` |
| `fti_amort_cost_vc)` | `cast(sum(VC_9005)` |
| `_NominalCurrency` | *Association* |
| `_ValuationCurrency` | *Association* |
| `_PositionCurrency` | *Association* |
| `_TrsyLedgerPosition` | *Association* |
| `_PositionIdentifier` | *Association* |
| `_TrsyLdgrGLAcctAssgmtRef` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_ValuationCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_TrsyLedgerPosition` | `I_TreasuryLedgerPosition` | [0..1] |
| `_PositionIdentifier` | `I_TreasuryPositionIdentifier` | [0..1] |
| `_TrsyLdgrGLAcctAssgmtRef` | `I_TrsyLdgrGLAcctAssgmtRef` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Ledger Position with Values'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@Analytics.dataExtraction: { enabled: true }
@ObjectModel.usageType: { dataClass: #MIXED, serviceQuality: #D, sizeCategory: #L }
@ObjectModel.sapObjectNodeType.name: 'TrsyLedgerPositionWithValues'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define view entity I_TrsyLdgrPositionWithValues
  with parameters
    P_KeyDate : vdm_v_key_date
  as select from P_TrsyPosAccmltdDerivdCompFlow as Deriv_Pos_Comp_Accu

  association [0..1] to I_Currency                   as _NominalCurrency         on  $projection.NominalCurrency = _NominalCurrency.Currency

  association [0..1] to I_Currency                   as _ValuationCurrency       on  $projection.ValuationCurrency = _ValuationCurrency.Currency

  association [0..1] to I_Currency                   as _PositionCurrency        on  $projection.PositionCurrency = _PositionCurrency.Currency

  association [0..1] to I_TreasuryLedgerPosition     as _TrsyLedgerPosition      on  $projection.TreasuryPosition = _TrsyLedgerPosition.TreasuryPosition

  association [0..1] to I_TreasuryPositionIdentifier as _PositionIdentifier      on  $projection.TreasuryPosition                = _PositionIdentifier.TreasuryPosition
                                                                                 and _PositionIdentifier.TreasuryPositionContext = 'TRL'

  association [0..1] to I_TrsyLdgrGLAcctAssgmtRef    as _TrsyLdgrGLAcctAssgmtRef on  $projection.TreasuryValuationArea          = _TrsyLdgrGLAcctAssgmtRef.TreasuryValuationArea
                                                                                 and $projection.FinancialInstrValuationClass   = _TrsyLdgrGLAcctAssgmtRef.FinancialInstrValuationClass
                                                                                 and $projection.TreasuryValuationClass         = _TrsyLdgrGLAcctAssgmtRef.TreasuryValuationClass
                                                                                 and $projection.CompanyCode                    = _TrsyLdgrGLAcctAssgmtRef.CompanyCode
                                                                                 and $projection.FinancialInstrumentProductType = _TrsyLdgrGLAcctAssgmtRef.FinancialInstrumentProductType
                                                                                 and $projection.SecurityAccount                = _TrsyLdgrGLAcctAssgmtRef.SecurityAccount
                                                                                 and $projection.SecurityClass                  = _TrsyLdgrGLAcctAssgmtRef.SecurityClass
                                                                                 and $projection.DifferentiationPortfolio       = _TrsyLdgrGLAcctAssgmtRef.DifferentiationPortfolio
                                                                                 and $projection.SecurityAccountGroup           = _TrsyLdgrGLAcctAssgmtRef.SecurityAccountGroup
                                                                                 and $projection.TreasuryPositionLongShortCode  = _TrsyLdgrGLAcctAssgmtRef.TreasuryPositionLongShortCode
                                                                                 and $projection.FinancialTransaction           = _TrsyLdgrGLAcctAssgmtRef.FinancialTransaction
                                                                                 and $projection.FinancialExposureItem          = _TrsyLdgrGLAcctAssgmtRef.FinancialExposureItem
                                                                                 and $projection.FinancialExposureSubItem       = _TrsyLdgrGLAcctAssgmtRef.FinancialExposureSubItem
                                                                                 and $projection.Fund                           = _TrsyLdgrGLAcctAssgmtRef.Fund
                                                                                 and $projection.GrantID                        = _TrsyLdgrGLAcctAssgmtRef.GrantID

{
  _PositionIdentifier.TreasuryValuationArea                                                                   as TreasuryValuationArea, // key
  _PositionIdentifier.TreasuryValuationClass                                                                  as TreasuryValuationClass, // key
  _PositionIdentifier.CompanyCode                                                                             as CompanyCode, // key
  _PositionIdentifier.SecurityAccount                                                                         as SecurityAccount, // key
  _PositionIdentifier.SecurityClass                                                                           as SecurityClass, // key
  _PositionIdentifier.TreasuryPositionLotUUID                                                                 as TreasuryPositionLotUUID, // key
  _PositionIdentifier.FinancialTransaction                                                                    as FinancialTransaction, // key
  _PositionIdentifier.FinancialExposureItem                                                                   as FinancialExposureItem, // key
  _PositionIdentifier.FinancialExposureSubItem                                                                as FinancialExposureSubItem, // key
  _PositionIdentifier.FinancialInstrValuationClass                                                            as FinancialInstrValuationClass,
  _PositionIdentifier.DifferentiationPortfolio                                                                as DifferentiationPortfolio,
  _PositionIdentifier.SecurityAccountGroup                                                                    as SecurityAccountGroup,
  _PositionIdentifier.TreasuryPositionLongShortCode                                                           as TreasuryPositionLongShortCode,
  _PositionIdentifier.FinancialInstrumentProductType                                                          as FinancialInstrumentProductType,
  _PositionIdentifier.Fund                                                                                    as Fund,
  _PositionIdentifier.GrantID                                                                                 as GrantID,
  _PositionIdentifier._WBSElementBasicData.WBSElementExternalID                                               as WBSElementExternalID,
  _PositionIdentifier.FunctionalArea                                                                          as FunctionalArea,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm1                                                               as TrsyPosCustomDiffntnTerm1,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm2                                                               as TrsyPosCustomDiffntnTerm2,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm3                                                               as TrsyPosCustomDiffntnTerm3,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm4                                                               as TrsyPosCustomDiffntnTerm4,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm5                                                               as TrsyPosCustomDiffntnTerm5,

  cast( _TrsyLedgerPosition.TreasuryPosAssetLiabilityCode  as  ftr_gen_asset_liability_code preserving type ) as TreasuryPosAssetLiabilityCode,
  _TrsyLedgerPosition.TrsyPosManagementProcedure                                                              as TrsyPosManagementProcedure,
  _TrsyLedgerPosition.TreasuryPositionZeroDate                                                                as TreasuryPositionZeroDate,


  @ObjectModel.foreignKey.association: '_TrsyLedgerPosition'
  cast(Deriv_Pos_Comp_Accu.position_oid as ftr_gen_position_uuid preserving type)                             as TreasuryPosition,
  cast(max(cast(Deriv_Pos_Comp_Accu.nominal_curr as char5)) as ftr_gen_nominal_currency)                      as NominalCurrency,
  cast(max(cast(Deriv_Pos_Comp_Accu.des_nominal_curr as char5)) as ftr_gen_nominal_currency)                  as DesignatedNominalCurrency,
  cast(Deriv_Pos_Comp_Accu.valuation_curr as ftr_gen_valuation_currency preserving type)                      as ValuationCurrency,
  cast(Deriv_Pos_Comp_Accu.position_curr as ftr_gen_position_crcy preserving type)                            as PositionCurrency,

  //units
  cast(sum(Deriv_Pos_Comp_Accu.units) as   ftr_gen_quantity_in_units)                                         as QuantityInPieces,

  //nominal amount
  @Semantics.amount.currencyCode: 'NominalCurrency'
  cast(sum(nominal_amt) as tpm_nominal_amt preserving type)                                                   as NominalAmountInNominalCurrency,
  @Semantics.amount.currencyCode: 'NominalCurrency'
  cast(sum(nominal_org_amt)  as ftr_gen_nominal_amount_orig)                                                  as OriglNominalAmtInNominalCrcy,
  @Semantics.amount.currencyCode: 'DesignatedNominalCurrency'
  cast(sum(des_nominal_amt) as tpm_nominal_amt preserving type)                                               as DesignatedAmountInNominalCrcy,
  @Semantics.amount.currencyCode: 'DesignatedNominalCurrency'
  cast(sum(des_nominal_org_amt)  as ftr_gen_nominal_amount_orig)                                              as DesignatedOrigAmtInNominalCrcy,

  //components
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1000) as ftr_gen_internal_clearing_pc)                                                          as ClearingAmountInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1000) as ftr_gen_internal_clearing_vc)                                                          as ClearingAmountInValuationCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1001) as ftr_gen_purch_pc)                                                                      as PurchaseValueInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1001) as ftr_gen_purch_vc)                                                                      as PurchaseValueInValuationCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1002) as ftr_gen_val_ti_pc)                                                                     as SecurityValuationAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1002) as ftr_gen_val_ti_vc)                                                                     as SecurityValuationAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1003) as ftr_gen_val_fx_vc)                                                                     as ForeignCrcyValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1004) as ftr_gen_charge_pc)                                                                     as CostInPositionCurrency,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1004) as ftr_gen_charge_vc)                                                                     as CostInValuationCurrency,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1005) as ftr_gen_val_ch_ti_pc)                                                                  as SecurityCostValnAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1005) as ftr_gen_val_ch_ti_vc)                                                                  as SecurityCostValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1006) as ftr_gen_val_ch_fx_vc)                                                                  as FrgnExchCostValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1007) as ftr_gen_amort_pc)                                                                      as AmortizationAmtInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1007) as ftr_gen_amort_vc)                                                                      as AmortizationAmtInValuationCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1008) as ftr_gen_disagio_pc)                                                                    as ClrdPremDiscDefrlTxCompnAmount,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1008) as ftr_gen_disagio_vc)                                                                    as ClrdPremDiscDefrlAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1009) as ftr_gen_val_idx_pc)                                                                    as IndexValuationAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1009) as ftr_gen_val_idx_vc)                                                                    as IndexValuationAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1010) as ftr_gen_deferral_item_pv_pc)                                                           as PurValDeferralItmAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1010) as ftr_gen_deferral_item_pv_vc)                                                           as PurValDeferralItmAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1011) as ftr_gen_val_fx_amaqu_val_vc)                                                           as FXValnAmtzdAcqnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1012) as ftr_gen_varmar_pc)                                                                     as VariationMarginAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1012) as ftr_gen_varmar_vc)                                                                     as VariationMarginAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1013) as ftr_gen_val_ti_npl_pc)                                                                 as OCISecurityValnAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1013) as ftr_gen_val_ti_npl_vc)                                                                 as OCIScrtyValnAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1014) as ftr_gen_val_fx_npl_vc)                                                                 as OCIFrgnExchValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1015) as ftr_gen_val_idx_npl_pc)                                                                as OCIIndexValnAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1015) as ftr_gen_val_idx_npl_vc)                                                                as OCIIndexValnAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1016) as ftr_gen_val_ch_ti_npl_pc)                                                              as OCIScrtyCostValnAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1016) as ftr_gen_val_ch_ti_npl_vc)                                                              as OCIScrtyCostValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1017) as ftr_gen_val_ch_fx_npl_vc)                                                              as OCICostFXValnAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1018) as ftr_gen_comp_acc_interest_pc)                                                          as AccruedInterestInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1018) as ftr_gen_comp_acc_interest_vc)                                                          as AccruedInterestInValuationCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1019) as ftr_gen_amort_neg_spread_pc)                                                           as NegttnSpreadAmtznAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1019) as ftr_gen_amort_neg_spread_vc)                                                           as NegttnSpreadAmtznAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1020) as ftr_gen_repayment_pc)                                                                  as CumltvRepaymentAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1020) as ftr_gen_repayment_vc)                                                                  as CumltvRepaymentAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1021) as ftr_gen_cons_gains_ti_pc)                                                              as CnsldtdScrtyGainAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1021) as ftr_gen_cons_gains_ti_vc)                                                              as CnsldtdScrtyGainAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1022) as ftr_gen_cons_losses_ti_pc)                                                             as CnsldtdScrtyLossAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1022) as ftr_gen_cons_losses_ti_vc)                                                             as CnsldtdScrtyLossAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1023) as ftr_gen_cons_gains_fx_vc)                                                              as CnsldtdForExGainAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1024) as ftr_gen_cons_losses_fx_vc)                                                             as CnsldtdForExLossAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1025) as ftr_gen_vad_gain_pc)                                                                   as GainValueAdjmtAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1025) as ftr_gen_vad_gain_vc)                                                                   as GainValueAdjmtAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1026) as ftr_gen_vad_loss_pc)                                                                   as LossValueAdjmtAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1026) as ftr_gen_vad_loss_vc)                                                                   as LossValueAdjmtAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1027) as ftr_gen_orig_vad_pc)                                                                   as OriginalValueAdjmtAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1027) as ftr_gen_orig_vad_vc)                                                                   as OriginalValAdjmtAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1028) as ftr_gen_int_income_pc)                                                                 as InterestIncomeInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1028) as ftr_gen_int_income_vc)                                                                 as InterestIncomeInValuationCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1029) as ftr_gen_hamort_pc)                                                                     as HedgeAmortizationAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1029) as ftr_gen_hamort_vc)                                                                     as HedgeAmortizationAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1098) as ftr_gen_fx_valuation_diff_vc)                                                          as FrgnExchValnDiffAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1099) as ftr_gen_capitalization_res_pc)                                                         as CapitalizationRsrvInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1099) as ftr_gen_capitalization_res_vc)                                                         as CapitalizationRsrvInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1105) as ftr_gen_spotvalp_vc)                                                                   as PurCrcySpotValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1106) as ftr_gen_spotvals_vc)                                                                   as SaleCrcySpotValnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1107) as ftr_gen_swapacc_pc)                                                                    as SwapAccrualAmountInPosCurrency,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1107) as ftr_gen_swapacc_vc)                                                                    as SwapAccrualAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1108) as ftr_gen_swapval_vc)                                                                    as SwapValuationAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1201) as ftr_gen_impmnt_pc)                                                                     as ImpairmentAmountInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1201) as ftr_gen_impmnt_vc)                                                                     as ImpairmentAmtInValuationCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1202) as ftr_gen_impmnt_fx_vc)                                                                  as ForeignExchImprmtAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1300) as ftr_gen_val_amt_to_classify_pc)                                                        as TrsyClsfctnAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1300) as ftr_gen_val_amt_to_classify_vc)                                                        as TrsyClsfctnAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1302) as ftr_gen_effctv_amt_pc)                                                                 as EffctvAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1302) as ftr_gen_effctv_amt_vc)                                                                 as EffctvAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1303) as ftr_gen_ineffctv_amt_pc)                                                               as IneffctvAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1303) as ftr_gen_ineffctv_amt_vc)                                                               as IneffctvAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1306) as fti_imp_loss_allow_pc)                                                                 as LossAllowanceAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1306) as fti_imp_loss_allow_vc)                                                                 as LossAllowanceAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1307) as fti_imp_loss_allow_fx_vc)                                                              as FXLossAllowanceAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1308) as fti_imp_offs_loss_allow_pc)                                                            as OffstLossAllowanceAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1308) as fti_imp_offs_loss_allow_vc)                                                            as OffsetLossAllwncAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1309) as fti_imp_offs_loss_allow_fx_vc)                                                         as FXOffstLossAllwncAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1310) as fti_imp_contract_change_pc)                                                            as ContractChangeAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1310) as fti_imp_contract_change_vc)                                                            as ContractChangeAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1311) as fti_imp_contract_change_fx_vc)                                                         as FrgnExchContrChgAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1312) as fti_imp_oci_offs_loss_allow_pc)                                                        as OCIOffstLossAllwncAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1312) as fti_imp_oci_offs_loss_allow_vc)                                                        as OCIOffstLossAllwncInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1314) as fti_imp_amort_adj_la_pc)                                                               as AmtznAdjmtLossAllwncInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1313) as fti_imp_oci_offs_la_fx_vc)                                                             as FXOffstOCILossAllwncInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1314) as fti_imp_amort_adj_la_vc)                                                               as AmtznAdjmtLossAllwncInValnCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1315) as fti_imp_amort_adj_la_fx_vc)                                                            as FXAmtznAdjLossAllwncInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1322) as ftr_gen_effctv_costhr_pc)                                                              as EffctvCostHdggRsrvInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1322) as ftr_gen_effctv_costhr_vc)                                                              as EffctvCostHdggRsrvInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1323) as ftr_gen_ineffctv_hr_tpl_pc)                                                            as IneffctvHdggRsrvPnLInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1323) as ftr_gen_ineffctv_hr_tpl_vc)                                                            as IneffctvHdggRsrvPnLInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1324) as ftr_gen_effctv_hr_tpl_pc)                                                              as EffctvHdggRsrvPnLInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1324) as ftr_gen_effctv_hr_tpl_vc)                                                              as EffctvHdggRsrvPnLInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1333) as ftr_gen_ineffctv_costhr_tpl_pc)                                                        as IneffctvCostHdgRsrvPnLPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1333) as ftr_gen_ineffctv_costhr_tpl_vc)                                                        as IneffctvCostHdgRsrvPnLValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1334) as ftr_gen_effctv_costhr_tpl_pc)                                                          as EffctvCostHdgRsrvPnLInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1334) as ftr_gen_effctv_costhr_tpl_vc)                                                          as EffctvCostHdgRsrvPnLInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1343) as ftr_gen_pnl_desig_pc)                                                                  as PnLDesignatedAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_1343) as ftr_gen_pnl_desig_vc)                                                                  as PnLDesignatedAmtInVC,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1344) as ftr_gen_pnl_non_desig_pc)                                                              as PnLNonDesignatedAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(PC_1344) as ftr_gen_pnl_non_desig_vc)                                                              as PnLNonDesignatedAmtInVC,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_1345) as ftr_gen_amort_non_desig_pc)                                                            as AmtznNonDesignatedAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(PC_1345) as ftr_gen_amort_non_desig_vc)                                                            as AmtznNonDesignatedAmtInVC,

  //derived components
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_9001) as ftr_gen_book_val_pc)                                                                   as BookValueAmtInPositionCurrency,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_9001) as ftr_gen_book_val_vc)                                                                   as BookValueAmountInValnCurrency,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_9002) as ftr_gen_book_val_ex_pc)                                                                as CostExcldBookValueAmtInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_9002) as ftr_gen_book_val_ex_vc)                                                                as CostExcldBookValAmtInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_9003) as ftr_gen_aqu_val_pc)                                                                    as AcquisitionAmtInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_9003) as ftr_gen_aqu_val_vc)                                                                    as AcquisitionAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_9004) as ftr_gen_amaqu_val_pc)                                                                  as AmortizedAcqnAmountInPosCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_9004) as ftr_gen_amaqu_val_vc)                                                                  as AmortizedAcqnAmountInValnCrcy,
  @Semantics.amount.currencyCode: 'PositionCurrency'
  cast(sum(PC_9005) as fti_amort_cost_pc)                                                                     as AmortizedCostInPositionCrcy,
  @Semantics.amount.currencyCode: 'ValuationCurrency'
  cast(sum(VC_9005) as fti_amort_cost_vc)                                                                     as AmortizedCostInValuationCrcy,

  _NominalCurrency,
  _ValuationCurrency,
  _PositionCurrency,
  _TrsyLedgerPosition,
  _PositionIdentifier,
  _TrsyLdgrGLAcctAssgmtRef
}
where
  Deriv_Pos_Comp_Accu.trldate <= $parameters.P_KeyDate
//group only by position_oid, all other fields must be always identical
group by
  Deriv_Pos_Comp_Accu.position_oid,
  _PositionIdentifier.TreasuryValuationArea,
  _PositionIdentifier.TreasuryValuationClass,
  _PositionIdentifier.CompanyCode,
  _PositionIdentifier.SecurityAccount,
  _PositionIdentifier.SecurityClass,
  _PositionIdentifier.TreasuryPositionLotUUID,
  _PositionIdentifier.FinancialTransaction,
  _PositionIdentifier.FinancialExposureItem,
  _PositionIdentifier.FinancialExposureSubItem,
  _PositionIdentifier.FinancialInstrValuationClass,
  _PositionIdentifier.DifferentiationPortfolio,
  _PositionIdentifier.SecurityAccountGroup,
  _PositionIdentifier.TreasuryPositionLongShortCode,
  _PositionIdentifier.FinancialInstrumentProductType,
  _PositionIdentifier.Fund,
  _PositionIdentifier.GrantID,
  _PositionIdentifier._WBSElementBasicData.WBSElementExternalID,
  _PositionIdentifier.FunctionalArea,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm1,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm2,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm3,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm4,
  _PositionIdentifier.TrsyPosCustomDiffntnTerm5,
  _TrsyLedgerPosition.TreasuryPosAssetLiabilityCode,
  _TrsyLedgerPosition.TrsyPosManagementProcedure,
  _TrsyLedgerPosition.TreasuryPositionZeroDate,
  Deriv_Pos_Comp_Accu.position_curr,
  Deriv_Pos_Comp_Accu.valuation_curr
```
