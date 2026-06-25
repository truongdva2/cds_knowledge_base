---
name: ICA_MATCHINGJOURNALENTRYITEM
description: Ica MATCHINGJournal EntryITEM
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-ICR
  - journal-entry
  - item-level
  - component:FIN-CS-ICR-2CL
  - lob:Other
  - bo:JournalEntry
---
# ICA_MATCHINGJOURNALENTRYITEM

**Ica MATCHINGJournal EntryITEM**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `currencyCode: 'CompanyCodeCurrency'} }` | `currencyCode: 'CompanyCodeCurrency'} }` |
| `fis_lcrcy_sp_value preserving type )` | `cast(a.hvkwrt` |
| `fml_price_control preserving type )` | `cast(a.vprsv` |
| `fis_bukrs_sender preserving type )` | `cast(a.bukrs_sender` |
| `SenderGLAccount` | `a.racct_sender` |
| `fis_accas_sender preserving type )` | `cast( a.accas_sender` |
| `fis_accasty_sender preserving type )` | `cast( a.accasty_sender` |
| `fis_objnr preserving type)` | `cast( a.objnr` |
| `CostOriginGroup` | `a.hkgrp` |
| `OriginSenderObject` | `a.uspob` |
| `fis_co_belkz preserving type )` | `cast( a.co_belkz` |
| `OriginCtrlgDebitCreditCode` | `a.co_beknz` |
| `fis_bp_inout preserving type )` | `cast( a.beltp` |
| `QuantityIsIncomplete` | `a.muvflg` |
| `OffsettingAccount` | `a.gkont` |
| `fis_gkoar preserving type )` | `cast( a.gkoar` |
| `fis_offsettingktopl preserving type )` | `cast( a.ktopl` |
| `LineItemIsCompleted` | `a.erlkz` |
| `PersonnelNumber` | `a.pernr` |
| `ControllingObjectClass` | `a.scope` |
| `fis_pbukrs preserving type )` | `cast( a.pbukrs` |
| `PartnerControllingObjectClass` | `a.pscope` |
| `OriginProfitCenter` | `a.uprctr` |
| `OriginOrder` | `a.aufnr_org` |
| `OriginCostCtrActivityType` | `a.ulstar` |
| `OriginCostCenter` | `a.ukostl` |
| `OriginProduct` | `a.umatnr` |
| `VarianceOriginGLAccount` | `a.varc_uacct` |
| `AccountAssignment` | `a.accas` |
| `AccountAssignmentType` | `a.accasty` |
| `CostCtrActivityType` | `a.lstar` |
| `OrderID` | `a.aufnr` |
| `OrderCategory` | `a.autyp` |
| `fis_wbsint_no_conv preserving type )` | `cast( a.ps_psp_pnr` |
| `fis_wbs_no_conv preserving type )` | `cast( a.ps_posid` |
| `fis_partner_wbsint_no_conv preserving type )` | `cast( a.pps_psp_pnr` |
| `fis_partner_wbs_no_conv preserving type )` | `cast( a.pps_posid` |
| `fis_projectint_no_conv preserving type )` | `cast( a.ps_prj_pnr` |
| `fis_project_no_conv preserving type  )` | `cast( a.ps_pspid` |
| `fis_part_projectint_no_conv preserving type )` | `cast( a.pps_prj_pnr` |
| `fis_part_project_no_conv preserving type )` | `cast( a.pps_pspid` |
| `OperatingConcern` | `a.erkrs` |
| `ProjectNetwork` | `a.nplnr` |
| `RelatedNetworkActivity` | `a.nplnr_vorgn` |
| `BusinessProcess` | `a.prznr` |
| `CostObject` | `a.kstrg` |
| `BillableControl` | `a.bemot` |
| `CostAnalysisResource` | `a.rsrce` |
| `fis_qmnum preserving type )` | `cast( a.qmnum` |
| `ServiceDocumentType` | `a.service_doc_type` |
| `ServiceDocument` | `a.service_doc_id` |
| `ServiceDocumentItem` | `a.service_doc_item_id` |
| `fis_psrvdoc_type preserving type )` | `cast( a.pservice_doc_type` |
| `fis_psrvdoc_id preserving type )` | `cast( a.pservice_doc_id` |
| `fis_psrvdoc_item_id preserving type )` | `cast( a.pservice_doc_item_id` |
| `ServiceContractType` | `a.service_contract_type` |
| `ServiceContract` | `a.service_contract_id` |
| `ServiceContractItem` | `a.service_contract_item_id` |
| `BusinessSolutionOrder` | `a.solution_order_id` |
| `BusinessSolutionOrderItem` | `a.solution_order_item_id` |
| `ProviderContract` | `a.vtkey` |
| `ProviderContractItem` | `a.vtpos` |
| `RevenueAccountingContract` | `a.ra_contract_id` |
| `PerformanceObligation` | `a.ra_pob_id` |
| `TimeSheetOvertimeCategory` | `a.overtimecat` |
| `PartnerAccountAssignment` | `a.paccas` |
| `PartnerAccountAssignmentType` | `a.paccasty` |
| `StstclAccountAssignmentType1` | `a.co_accasty_n1` |
| `StstclAccountAssignmentType2` | `a.co_accasty_n2` |
| `StstclAccountAssignmentType3` | `a.co_accasty_n3` |
| `/cpd/plan_item_id )` | `cast( a.ps_posid` |
| `WorkItem` | `a.work_item_id` |
| `PartnerCostCtrActivityType` | `a.plstar` |
| `PartnerOrder` | `a.paufnr` |
| `PartnerOrderCategory` | `a.pautyp` |
| `PartnerSalesDocument` | `a.pkdauf` |
| `PartnerSalesDocumentItem` | `a.pkdpos` |
| `fis_par_npln preserving type )` | `cast( a.pnplnr` |
| `PartnerProjectNetworkActivity` | `a.pnplnr_vorgn` |
| `fis_par_prznr preserving type )` | `cast( a.pprznr` |
| `PartnerCostObject` | `a.pkstrg` |
| `co_buzei_acd preserving type  )` | `cast( a.co_buzei` |
| `VarianceOriginGroup` | `a.varc_hkgrp` |
| `BillingDocumentType` | `a.fkart` |
| `SalesOrganization` | `a.vkorg` |
| `DistributionChannel` | `a.vtweg` |
| `OrganizationDivision` | `a.spart` |
| `SoldProduct` | `a.matnr_copa` |
| `SoldProductGroup` | `a.matkl` |
| `CustomerGroup` | `a.kdgrp` |
| `fis_land1_gp preserving type )` | `cast( a.land1` |
| `fis_brsch preserving type )` | `cast( a.brsch` |
| `SalesDistrict` | `a.bzirk` |
| `BillToParty` | `a.kunre` |
| `ShipToParty` | `a.kunwe` |
| `fis_konzs preserving type )` | `cast( a.konzs` |
| `CashLedgerCompanyCode` | `a.re_bukrs` |
| `CashLedgerAccount` | `a.re_account` |
| `FinancialManagementArea` | `a.fikrs` |
| `CommitmentItem` | `a.fipex` |
| `FundsCenter` | `a.fistl` |
| `FundedProgram` | `a.measure` |
| `Fund` | `a.rfund` |
| `GrantID` | `a.rgrant_nbr` |
| `BudgetPeriod` | `a.rbudget_pd` |
| `PartnerFund` | `a.sfund` |
| `PartnerGrant` | `a.sgrant_nbr` |
| `fis_fm_pbudget_period preserving type )` | `cast( a.sbudget_pd` |
| `PubSecBudgetAccount` | `a.bdgt_account` |
| `PubSecBudgetAccountCoCode` | `a.bdgt_account_cocode` |
| `PubSecBudgetCnsmpnDate` | `a.bdgt_cnsmpn_date` |
| `PubSecBudgetCnsmpnFsclPeriod` | `a.bdgt_cnsmpn_period` |
| `PubSecBudgetCnsmpnFsclYear` | `a.bdgt_cnsmpn_year` |
| `PubSecBudgetIsRelevant` | `a.bdgt_relevant` |
| `PubSecBudgetCnsmpnType` | `a.bdgt_cnsmpn_type` |
| `PubSecBudgetCnsmpnAmtType` | `a.bdgt_cnsmpn_amount_type` |
| `SponsoredProgram` | `a.rsponsored_prog` |
| `SponsoredClass` | `a.rsponsored_class` |
| `GteeMBudgetValidityNumber` | `a.rbdgt_vldty_nbr` |
| `EarmarkedFundsDocument` | `a.kblnr` |
| `EarmarkedFundsDocumentItem` | `a.kblpos` |
| `FinancialServicesProductGroup` | `a.fs_product_group` |
| `FinancialServicesBranch` | `a.branch_id` |
| `FinancialDataSource` | `a.datasource_id` |
| `JointVenture` | `a.vname` |
| `jv_egroup_cds preserving type )` | `cast( a.egrup` |
| `jv_recind_cds preserving type )` | `cast( a.recid` |
| `jv_part_cds preserving type )` | `cast( a.vptnr` |
| `jv_bilind_cds preserving type )` | `cast( a.btype` |
| `jv_etype_cds preserving type )` | `cast( a.etype` |
| `jv_prodper_cds preserving type )` | `cast( a.prodper` |
| `jv_billm_cds preserving type )` | `cast( a.billm` |
| `jv_pom_cds preserving type )` | `cast( a.pom` |
| `jv_cbrunid_cds preserving type )` | `cast( a.cbrunid` |
| `jv_activity_cds preserving type )` | `cast( a.jvactivity` |
| `jv_pvname_cds preserving type )` | `cast( a.pvname` |
| `jv_pegrup_cds preserving type )` | `cast( a.pegrup` |
| `jv_srecind_cds preserving type )` | `cast( a.s_recind` |
| `jv_cbracct_cds preserving type )` | `cast( a.cbracct` |
| `jv_cbobjnr_cds preserving type )` | `cast( a.cbobjnr` |
| `REBusinessEntity` | `a.swenr` |
| `RealEstateBuilding` | `a.sgenr` |
| `RealEstateProperty` | `a.sgrnr` |
| `RERentalObject` | `a.smenr` |
| `RealEstateContract` | `a.recnnr` |
| `REServiceChargeKey` | `a.snksl` |
| `RESettlementUnitID` | `a.sempsl` |
| `fis_dabrbez preserving type )` | `cast( a.dabrz` |
| `REPartnerBusinessEntity` | `a.pswenr` |
| `RealEstatePartnerBuilding` | `a.psgenr` |
| `RealEstatePartnerProperty` | `a.psgrnr` |
| `REPartnerRentalObject` | `a.psmenr` |
| `RealEstatePartnerContract` | `a.precnnr` |
| `REPartnerServiceChargeKey` | `a.psnksl` |
| `REPartnerSettlementUnitID` | `a.psempsl` |
| `PartnerSettlementReferenceDate` | `a.pdabrz` |
| `AccrualObjectType` | `a.acrobjtype` |
| `AccrualObjectLogicalSystem` | `a.acrlogsys` |
| `AccrualObject` | `a.acrobj_id` |
| `AccrualSubobject` | `a.acrsobj_id` |
| `AccrualItemType` | `a.acritmtype` |
| `AccrualReferenceObject` | `a.acrrefobj_id` |
| `AccrualValueDate` | `a.acrvaldat` |
| `fis_val_obj_type preserving type )` | `cast( a.valobjtype` |
| `fis_val_obj_id preserving type )` | `cast( a.valobj_id` |
| `fis_val_subobj_id preserving type )` | `cast( a.valsobj_id` |
| `NetDueDate` | `a.netdt` |
| `CreditRiskClass` | `a.risk_class` |
| `WorkCenterInternalID` | `a.arbid` |
| `OrderOperation` | `a.vornr` |
| `OrderItem` | `a.aufps` |
| `PartnerOrderItem` | `a.paufps` |
| `fis_uvorn_no_conv preserving type )` | `cast( a.uvorn` |
| `Equipment` | `a.equnr` |
| `FunctionalLocation` | `a.tplnr` |
| `Assembly` | `a.istru` |
| `MaintenanceActivityType` | `a.ilart` |
| `MaintenanceOrderPlanningCode` | `a.plknz` |
| `MaintPriorityType` | `a.artpr` |
| `MaintPriority` | `a.priok` |
| `SuperiorOrder` | `a.maufnr` |
| `fis_matkl_mm preserving type )` | `cast( a.matkl_mm` |
| `MaintenanceOrderIsPlanned` | `a.planned_parts_work` |
| `fis_origin_order_operation preserving type)` | `cast( a.vornr_org` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Matching Journal Entry Item'
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #TRANSACTIONAL,
                usageType.serviceQuality: #X,
                supportedCapabilities: [ #SQL_DATA_SOURCE ] }
@AbapCatalog: { extensibility.dataSources: [ '_Extension' ],
                viewEnhancementCategory: [ #PROJECTION_LIST ] }           
@Metadata.ignorePropagatedAnnotations: true
define view entity ICA_MatchingJournalEntryItem
as select from acdoca as a
    inner join t001   as b on a.rbukrs = b.bukrs
  association [1..1] to E_JournalEntryItem             as _Extension                     
                     on  $projection.SourceLedger       = _Extension.SourceLedger
                     and $projection.CompanyCode        = _Extension.CompanyCode
                     and $projection.FiscalYear         = _Extension.FiscalYear
                     and $projection.AccountingDocument = _Extension.AccountingDocument
                     and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem                           
{
  key a.rldnr                                                                                            as SourceLedger,
  key a.rbukrs                                                                                           as CompanyCode,
  key a.gjahr                                                                                            as FiscalYear,
  key a.belnr                                                                                            as AccountingDocument,
  key a.docln                                                                                            as LedgerGLLineItem,
      cast ('' as ica_method_id)                                                                         as MatchingMethodID,
      a.ryear                                                                                            as LedgerFiscalYear,
      a.rrcty                                                                                            as GLRecordType,
      a.docnr_ld                                                                                         as JrnlEntrAltvFYConsecutiveID,
      a.ktopl                                                                                            as ChartOfAccounts,
      a.kokrs                                                                                            as ControllingArea,
      a.rmvct                                                                                            as FinancialTransactionType,
      a.vorgn                                                                                            as GLBusinessTransactionType,
      a.bttype                                                                                           as BusinessTransactionCategory, 
      a.cbttype                                                                                          as BusinessTransactionType, 
      a.closingstep                                                                                      as FinancialClosingStep,     
      a.vrgng                                                                                            as ControllingBusTransacType,
      a.awtyp                                                                                            as ReferenceDocumentType,
      a.awsys                                                                                            as LogicalSystem,
      a.aworg                                                                                            as ReferenceDocumentContext,
      a.awref                                                                                            as ReferenceDocument,      
      cast( a.awitem as fis_awitem preserving type )                                                     as ReferenceDocumentItem,      
      cast( a.awitgrp as fis_awitgrp preserving type )                                                   as ReferenceDocumentItemGroup,
      a.subta                                                                                            as TransactionSubitem,
      a.xreversing                                                                                       as IsReversal,
      a.xreversed                                                                                        as IsReversed,
      a.xtruerev                                                                                         as IsTrueReversed,    
      cast( a.aworg_rev as fis_aworg_rev preserving type )                                               as ReversalReferenceDocumentCntxt,      
      cast( a.awref_rev as fis_awref_rev preserving type )                                               as ReversalReferenceDocument,
      a.subta_rev                                                                                        as ReversalTransactionSubitem,
      a.xsettling                                                                                        as IsSettlement,
      a.xsettled                                                                                         as IsSettled,
      cast( a.prec_awtyp as fis_prec_awtyp preserving type )                                             as PredecessorReferenceDocType,
      cast( a.prec_aworg as fis_prec_aworg preserving type )                                             as PredecessorReferenceDocCntxt,      
      cast( a.prec_awref as fis_prec_awref preserving type )                                             as PredecessorReferenceDocument,
      cast( a.prec_awitem as fis_prec_awitem preserving type )                                           as PredecessorReferenceDocItem,
      cast( a.prec_bukrs as  fins_prec_bukrs_gfc preserving type )                                       as PrdcssrJournalEntryCompanyCode,
      a.prec_gjahr                                                                                       as PrdcssrJournalEntryFiscalYear,
      cast( a.prec_belnr as  fins_prec_belnr_gfc preserving type )                                       as PredecessorJournalEntry,
      cast( a.prec_docln as  fins_prec_docln_gfc preserving type )                                       as PredecessorJournalEntryItem,
      cast( a.src_awtyp as fis_src_awtyp preserving type )                                               as SourceReferenceDocumentType,
      cast( a.src_awsys as fis_src_awsys preserving type )                                               as SourceLogicalSystem,
      cast( a.src_aworg as fis_src_aworg preserving type )                                               as SourceReferenceDocumentCntxt,
      cast( a.src_awref as fis_src_awref preserving type )                                               as SourceReferenceDocument,
      cast( a.src_awitem as fis_src_awitem preserving type )                                             as SourceReferenceDocumentItem,
      cast( a.src_awsubit as fis_src_awsubit preserving type )                                           as SourceReferenceDocSubitem,
      cast( a.xcommitment as fis_xcommitment preserving type )                                           as IsCommitment,
      a.obs_reason                                                                                       as JrnlEntryItemObsoleteReason,
      a.xsecondary                                                                                       as JournalEntryIsSecondaryEntry,
      a.closing_run_id                                                                                   as JrnlPeriodEndClosingRunLogUUID,
      a.orgl_change                                                                                      as OrganizationalChange,
      a.racct                                                                                            as GLAccount,
      a.rcntr                                                                                            as CostCenter,
      a.prctr                                                                                            as ProfitCenter,
      a.rfarea                                                                                           as FunctionalArea,
      a.rbusa                                                                                            as BusinessArea, 
      a.segment                                                                                          as Segment,
      a.scntr                                                                                            as PartnerCostCenter,
      a.pprctr                                                                                           as PartnerProfitCenter,
      a.sfarea                                                                                           as PartnerFunctionalArea,
      a.sbusa                                                                                            as PartnerBusinessArea,
      a.rassc                                                                                            as PartnerCompany,
      a.psegment                                                                                         as PartnerSegment,
      //@Semantics.currencyCode:true
      a.rtcur                                                                                            as BalanceTransactionCurrency,
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      a.tsl                                                                                              as AmountInBalanceTransacCrcy,
      a.rwcur                                                                                            as TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      a.wsl                                                                                              as AmountInTransactionCurrency,
      a.rhcur                                                                                            as CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      a.hsl                                                                                              as AmountInCompanyCodeCurrency,
      a.rkcur                                                                                            as GlobalCurrency,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      a.ksl                                                                                              as AmountInGlobalCurrency,
      a.rfccur                                                                                           as FunctionalCurrency,
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      a.fcsl                                                                                             as AmountInFunctionalCurrency,     
      a.rocur                                                                                            as FreeDefinedCurrency1,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      a.osl                                                                                              as AmountInFreeDefinedCurrency1,
      a.rvcur                                                                                            as FreeDefinedCurrency2,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      a.vsl                                                                                              as AmountInFreeDefinedCurrency2,
      cast( a.rbcur as fis_curr3 preserving type )                                                       as FreeDefinedCurrency3,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      a.bsl                                                                                              as AmountInFreeDefinedCurrency3,
      cast( a.rccur as fis_curr4 preserving type )                                                       as FreeDefinedCurrency4,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      a.csl                                                                                              as AmountInFreeDefinedCurrency4,
      cast( a.rdcur as fis_curr5 preserving type )                                                       as FreeDefinedCurrency5,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      a.dsl                                                                                              as AmountInFreeDefinedCurrency5,
      cast( a.recur as fis_curr6 preserving type )                                                       as FreeDefinedCurrency6,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      a.esl                                                                                              as AmountInFreeDefinedCurrency6,
      a.rfcur                                                                                            as FreeDefinedCurrency7,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      a.fsl                                                                                              as AmountInFreeDefinedCurrency7,
      cast( a.rgcur as fis_curr8 preserving type )                                                       as FreeDefinedCurrency8,
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      a.gsl                                                                                              as AmountInFreeDefinedCurrency8,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      a.kfsl                                                                                             as FixedAmountInGlobalCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }   
      cast( a.kfsl2 as fis_vgcur12_fix2 preserving type )                                                as GrpValnFixedAmtInGlobCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
      cast( a.kfsl3 as fis_vgcur12_fix3 preserving type )                                                as PrftCtrValnFxdAmtInGlobCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
      a.psl                                                                                              as TotalPriceVarcInGlobalCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
      cast( a.psl2 as fis_vpcur12_2 preserving type )                                                    as GrpValnTotPrcVarcInGlobCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
      cast( a.psl3 as fis_vpcur12_3 preserving type )                                                    as PrftCtrValnTotPrcVarcInGlbCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }  
      a.pfsl                                                                                             as FixedPriceVarcInGlobalCrcy, 
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }     
      cast( a.pfsl2 as fis_vpfcur12_2 preserving type )                                                  as GrpValnFixedPrcVarcInGlobCrcy,
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }    
      cast( a.pfsl3 as fis_vpfcur12_3 preserving type )                                                  as PrftCtrValnFxdPrcVarcInGlbCrcy,
      a.rco_ocur                                                                                         as ControllingObjectCurrency,
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }   
      cast( a.co_osl as fis_vco_ocur12 preserving type )                                                 as AmountInObjectCurrency,
      a.rgm_ocur                                                                                         as GrantCurrency,
      @Semantics: { amount : {currencyCode: 'GrantCurrency'} }   
      a.gm_osl                                                                                           as AmountInGrantCurrency,
      a.runit                                                                                            as BaseUnit,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} } 
      a.msl                                                                                              as Quantity,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      cast( a.mfsl as fis_quan1_12_fix preserving type )                                                 as FixedQuantity,
      a.rvunit                                                                                           as CostSourceUnit,
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      cast( a.vmsl as fis_vquan1_12 preserving type )                                                    as ValuationQuantity, 
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      cast( a.vmfsl as fis_vquan1_12_fix preserving type )                                               as ValuationFixedQuantity,
      a.rrunit                                                                                           as ReferenceQuantityUnit,
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      a.rmsl                                                                                             as ReferenceQuantity,
      cast( a.qunit1 as fis_qunit1 preserving type )                                                     as AdditionalQuantity1Unit,  
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }    
      cast( a.quant1 as fis_quan1_l preserving type )                                                    as AdditionalQuantity1,
      cast( a.qunit2 as fis_qunit2 preserving type )                                                     as AdditionalQuantity2Unit, 
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      cast( a.quant2 as fis_quan2_l preserving type )                                                    as AdditionalQuantity2,
      cast( a.qunit3 as fis_qunit3 preserving type )                                                     as AdditionalQuantity3Unit, 
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      cast( a.quant3 as fis_quan3_l preserving type )                                                    as AdditionalQuantity3,
      a.co_meinh                                                                                         as IncmpltSummableValnQtyUnt,  
      @Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }     
      a.co_megbtr                                                                                        as IncmpltSummableValnQty, 
      @Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }
      a.co_mefbtr                                                                                        as IncmpltSummableValnFxdQty,
      a.drcrk                                                                                            as DebitCreditCode,
      a.poper                                                                                            as FiscalPeriod,
      a.periv                                                                                            as FiscalYearVariant,
      a.fiscyearper                                                                                      as FiscalYearPeriod,
      a.budat                                                                                            as PostingDate,
      a.bldat                                                                                            as DocumentDate,
      a.blart                                                                                            as AccountingDocumentType,
      a.buzei                                                                                            as AccountingDocumentItem,
      a.zuonr                                                                                            as AssignmentReference,
      a.bstat                                                                                            as AccountingDocumentCategory,
      a.linetype                                                                                         as JournalEntryItemCategory,      
      a.bschl                                                                                            as PostingKey,
      a.ktosl                                                                                            as TransactionTypeDetermination,
      a.slalittype                                                                                       as SubLedgerAcctLineItemType,
      a.usnam                                                                                            as AccountingDocCreatedByUser,
      cast(a.timestamp as fis_creation_datetime preserving type )                                        as CreationDateTime,
      cast(substring( cast(a.timestamp as abap.char(30)) , 1 , 8) as fis_cpdat)                          as CreationDate,
      cast( a.eprctr as fis_eprctr preserving type )                                                     as EliminationProfitCenter, 
      a.rhoart                                                                                           as OriginObjectType,
      a.glaccount_type                                                                                   as GLAccountType,
      cast(a.lokkt as fis_alternativeglaccount preserving type )                                         as AlternativeGLAccount,
      a.ktop2                                                                                            as CountryChartOfAccounts,
      cast( a.xsplitmod as xsplitmod_acd preserving type  )                                              as ItemIsSplit,    
      a.rbunit                                                                                           as ConsolidationUnit,
      a.rbuptr                                                                                           as PartnerConsolidationUnit,
      b.rcomp                                                                                            as Company, 
      a.ritclg                                                                                           as ConsolidationChartOfAccounts,
      a.ritem                                                                                            as CnsldtnFinancialStatementItem,
      a.sityp                                                                                            as CnsldtnSubitemCategory,
      a.subit                                                                                            as CnsldtnSubitem,      
      a.rebzg                                                                                            as InvoiceReference,
      a.rebzj                                                                                            as InvoiceReferenceFiscalYear,
      cast( a.rebzt as fis_rebzt preserving type )                                                       as FollowOnDocumentType,
      a.rebzz                                                                                            as InvoiceItemReference,
      a.rbest                                                                                            as ReferencePurchaseOrderCategory,
      a.ebeln                                                                                            as PurchasingDocument,
      a.ebelp                                                                                            as PurchasingDocumentItem,      
      cast( a.zekkn as fis_dzekkn preserving type )                                                      as AccountAssignmentNumber,
      a.sgtxt                                                                                            as DocumentItemText,
      cast(a.kdauf as vbeln_va preserving type)                                                          as SalesDocument,
      cast(a.kdpos as posnr_va preserving type)                                                          as SalesDocumentItem,
      cast(a.matnr as productnumber)                                                                     as Product,
      a.werks                                                                                            as Plant,
      a.lifnr                                                                                            as Supplier,
      a.kunnr                                                                                            as Customer,
      a.fbuda                                                                                            as ServicesRenderedDate,
      a.perop_beg                                                                                        as PerformancePeriodStartDate,
      a.perop_end                                                                                        as PerformancePeriodEndDate,
      a.coco_num                                                                                         as ConditionContract,
      a.wwert                                                                                            as ExchangeRateDate,
      a.koart                                                                                            as FinancialAccountType,
      a.umskz                                                                                            as SpecialGLCode,
      a.mwskz                                                                                            as TaxCode,
      a.tax_country                                                                                      as  TaxCountry,
      a.hbkid                                                                                            as HouseBank,
      a.hktid                                                                                            as HouseBankAccount,
      a.xopvw                                                                                            as IsOpenItemManaged,
      a.augdt                                                                                            as ClearingDate,
      cast( a.auggj as fis_auggj_no_conv_depre preserving type )                                         as ClearingDocFiscalYear,   
      cast( a.augbl as fis_augbl_depre preserving type )                                                 as ClearingAccountingDocument,            
      a.auggj                                                                                            as ClearingJournalEntryFiscalYear,
      a.augbl                                                                                            as ClearingJournalEntry,      
      a.valut                                                                                            as ValueDate,
      a.aging                                                                                            as GeneralLedgerAgingScope,
      a.aging_incrmnt                                                                                    as GeneralLedgerAgingIncrement,
      a.afabe                                                                                            as AssetDepreciationArea,
      a.anln1                                                                                            as MasterFixedAsset,
      a.anln2                                                                                            as FixedAsset,
      a.bzdat                                                                                            as AssetValueDate,
      a.anbwa                                                                                            as AssetTransactionType,
      a.movcat                                                                                           as AssetAcctTransClassfctn,
      a.depr_period                                                                                      as DepreciationFiscalPeriod,
      a.anlgr                                                                                            as GroupMasterFixedAsset,
      a.anlgr2                                                                                           as GroupFixedAsset,
      a.anlkl                                                                                            as AssetClass,
      a.panl1                                                                                            as PartnerMasterFixedAsset,
      a.panl2                                                                                            as PartnerFixedAsset,
      a.kalnr                                                                                            as CostEstimate,
      cast( a.kzbws as fis_inventoryspclstockvalntype preserving type )                                  as InventorySpecialStockValnType,
      cast( a.xobew as fis_mlxobew preserving type )                                                     as IsSupplierStockValuation,
      cast( a.sobkz as fis_inventoryspecialstocktype preserving type )                                   as InventorySpecialStockType,
      cast( a.mat_kdauf as fis_mlmat_kdauf preserving type )                                             as InventorySpclStkSalesDocument,
      cast( a.mat_kdpos as fis_mlmat_kdpos preserving type )                                             as InventorySpclStkSalesDocItm,
      cast( a.mat_pspnr as fis_invspstock_wbsint_no_conv preserving type )                               as InvtrySpclStockWBSElmntIntID,
      cast( a.mat_ps_posid as fis_invspstock_wbs_no_conv preserving type )                               as InventorySpclStockWBSElement,
      a.mat_lifnr                                                                                        as InventorySpecialStockSupplier,
      cast( a.bwtar as fis_bwtar_d preserving type )                                                     as InventoryValuationType,
      a.bwkey                                                                                            as ValuationArea,     
      cast(a.mlptyp as fml_process_type preserving type )                                                as MaterialLedgerProcessType,
      cast(a.mlcateg as fml_category preserving type )                                                   as MaterialLedgerCategory,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(a.hvkwrt as fis_lcrcy_sp_value preserving type )                                              as SlsPriceAmountInCoCodeCrcy,
      cast(a.vprsv as fml_price_control preserving type )                                                as ProductPriceControl,
      cast(a.bukrs_sender as fis_bukrs_sender preserving type )                                          as SenderCompanyCode,
      a.racct_sender                                                                                     as SenderGLAccount,
      cast( a.accas_sender as fis_accas_sender preserving type )                                         as SenderAccountAssignment,      
      cast( a.accasty_sender as fis_accasty_sender preserving type )                                     as SenderAccountAssignmentType,
      cast( a.objnr as fis_objnr preserving type)                                                        as ControllingObject,
      a.hkgrp                                                                                            as CostOriginGroup,
      a.uspob                                                                                            as OriginSenderObject,    
      cast( a.co_belkz as fis_co_belkz preserving type )                                                 as ControllingDebitCreditCode,
      a.co_beknz                                                                                         as OriginCtrlgDebitCreditCode,      
      cast( a.beltp as fis_bp_inout preserving type )                                                    as ControllingObjectDebitType,
      a.muvflg                                                                                           as QuantityIsIncomplete,
      a.gkont                                                                                            as OffsettingAccount,
      cast( a.gkoar as fis_gkoar preserving type )                                                       as OffsettingAccountType,
      cast( a.ktopl as fis_offsettingktopl preserving type )                                             as OffsettingChartOfAccounts,
      a.erlkz                                                                                            as LineItemIsCompleted,
      a.pernr                                                                                            as PersonnelNumber,
      a.scope                                                                                            as ControllingObjectClass, 
      cast( a.pbukrs as fis_pbukrs preserving type )                                                     as PartnerCompanyCode,
      a.pscope                                                                                           as PartnerControllingObjectClass,
      a.uprctr                                                                                           as OriginProfitCenter,
      a.aufnr_org                                                                                        as OriginOrder,
      a.ulstar                                                                                           as OriginCostCtrActivityType,
      a.ukostl                                                                                           as OriginCostCenter,
      a.umatnr                                                                                           as OriginProduct,
      a.varc_uacct                                                                                       as VarianceOriginGLAccount,
      a.accas                                                                                            as AccountAssignment,  
      a.accasty                                                                                          as AccountAssignmentType,
      a.lstar                                                                                            as CostCtrActivityType,
      a.aufnr                                                                                            as OrderID,
      a.autyp                                                                                            as OrderCategory,
      cast( a.ps_psp_pnr as fis_wbsint_no_conv preserving type )                                         as WBSElementInternalID,
      cast( a.ps_posid as fis_wbs_no_conv preserving type )                                              as WBSElement,
      cast( a.pps_psp_pnr as fis_partner_wbsint_no_conv preserving type )                                as PartnerWBSElementInternalID,
      cast( a.pps_posid as fis_partner_wbs_no_conv preserving type )                                     as PartnerWBSElement,
      cast( a.ps_prj_pnr as fis_projectint_no_conv preserving type )                                     as ProjectInternalID,
      cast( a.ps_pspid as fis_project_no_conv preserving type  )                                         as Project,
      cast( a.pps_prj_pnr as fis_part_projectint_no_conv preserving type )                               as PartnerProjectInternalID,
      cast( a.pps_pspid as fis_part_project_no_conv preserving type )                                    as PartnerProject,
      a.erkrs                                                                                            as OperatingConcern,
      a.nplnr                                                                                            as ProjectNetwork,
      a.nplnr_vorgn                                                                                      as RelatedNetworkActivity,
      a.prznr                                                                                            as BusinessProcess,
      a.kstrg                                                                                            as CostObject,
      a.bemot                                                                                            as BillableControl,
      a.rsrce                                                                                            as CostAnalysisResource,      
      cast( a.qmnum as fis_qmnum preserving type )                                                       as CustomerServiceNotification,
      a.service_doc_type                                                                                 as ServiceDocumentType,
      a.service_doc_id                                                                                   as ServiceDocument,
      a.service_doc_item_id                                                                              as ServiceDocumentItem,
      cast( a.pservice_doc_type as fis_psrvdoc_type preserving type )                                    as PartnerServiceDocumentType,
      cast( a.pservice_doc_id as fis_psrvdoc_id preserving type )                                        as PartnerServiceDocument,
      cast( a.pservice_doc_item_id as fis_psrvdoc_item_id preserving type )                              as PartnerServiceDocumentItem,
      a.service_contract_type                                                                            as ServiceContractType,
      a.service_contract_id                                                                              as ServiceContract,
      a.service_contract_item_id                                                                         as ServiceContractItem,
      a.solution_order_id                                                                                as BusinessSolutionOrder,
      a.solution_order_item_id                                                                           as BusinessSolutionOrderItem,
      a.vtkey                                                                                            as ProviderContract,
      a.vtpos                                                                                            as ProviderContractItem,
      a.ra_contract_id                                                                                   as RevenueAccountingContract,
      a.ra_pob_id                                                                                        as PerformanceObligation,         
      a.overtimecat                                                                                      as TimeSheetOvertimeCategory,
      a.paccas                                                                                           as PartnerAccountAssignment,
      a.paccasty                                                                                         as PartnerAccountAssignmentType,      
      a.co_accasty_n1                                                                                    as StstclAccountAssignmentType1,
      a.co_accasty_n2                                                                                    as StstclAccountAssignmentType2,
      a.co_accasty_n3                                                                                    as StstclAccountAssignmentType3,         
      cast( a.ps_posid as /cpd/plan_item_id )                                                            as WorkPackage,
      a.work_item_id                                                                                     as WorkItem,
      a.plstar                                                                                           as PartnerCostCtrActivityType,
      a.paufnr                                                                                           as PartnerOrder,
      a.pautyp                                                                                           as PartnerOrderCategory,
      a.pkdauf                                                                                           as PartnerSalesDocument,
      a.pkdpos                                                                                           as PartnerSalesDocumentItem,      
      cast( a.pnplnr as fis_par_npln preserving type )                                                   as PartnerProjectNetwork,  
      a.pnplnr_vorgn                                                                                     as PartnerProjectNetworkActivity,
      cast( a.pprznr as fis_par_prznr preserving type )                                                  as PartnerBusinessProcess,     
      a.pkstrg                                                                                           as PartnerCostObject,
      cast( a.co_buzei as co_buzei_acd preserving type  )                                                as ControllingDocumentItem,
      a.varc_hkgrp                                                                                       as VarianceOriginGroup, 
      a.fkart                                                                                            as BillingDocumentType,
      a.vkorg                                                                                            as SalesOrganization,
      a.vtweg                                                                                            as DistributionChannel,
      a.spart                                                                                            as OrganizationDivision,
      a.matnr_copa                                                                                       as SoldProduct,
      a.matkl                                                                                            as SoldProductGroup,
      a.kdgrp                                                                                            as CustomerGroup,
      cast( a.land1 as fis_land1_gp preserving type )                                                    as CustomerSupplierCountry,            
      cast( a.brsch as fis_brsch preserving type )                                                       as CustomerSupplierIndustry,
      a.bzirk                                                                                            as SalesDistrict,
      a.kunre                                                                                            as BillToParty,
      a.kunwe                                                                                            as ShipToParty,
      cast( a.konzs as fis_konzs preserving type )                                                       as CustomerSupplierCorporateGroup,
      a.re_bukrs                                                                                         as CashLedgerCompanyCode,
      a.re_account                                                                                       as CashLedgerAccount,
      a.fikrs                                                                                            as FinancialManagementArea,
      a.fipex                                                                                            as CommitmentItem,      
      a.fistl                                                                                            as FundsCenter,
      a.measure                                                                                          as FundedProgram,
      a.rfund                                                                                            as Fund,
      a.rgrant_nbr                                                                                       as GrantID,
      a.rbudget_pd                                                                                       as BudgetPeriod,
      a.sfund                                                                                            as PartnerFund,
      a.sgrant_nbr                                                                                       as PartnerGrant,
      cast( a.sbudget_pd as fis_fm_pbudget_period preserving type )                                      as PartnerBudgetPeriod,
      a.bdgt_account                                                                                     as PubSecBudgetAccount,
      a.bdgt_account_cocode                                                                              as PubSecBudgetAccountCoCode,
      a.bdgt_cnsmpn_date                                                                                 as PubSecBudgetCnsmpnDate,
      a.bdgt_cnsmpn_period                                                                               as PubSecBudgetCnsmpnFsclPeriod,
      a.bdgt_cnsmpn_year                                                                                 as PubSecBudgetCnsmpnFsclYear,
      a.bdgt_relevant                                                                                    as PubSecBudgetIsRelevant,
      a.bdgt_cnsmpn_type                                                                                 as PubSecBudgetCnsmpnType,
      a.bdgt_cnsmpn_amount_type                                                                          as PubSecBudgetCnsmpnAmtType,
      a.rsponsored_prog                                                                                  as SponsoredProgram,
      a.rsponsored_class                                                                                 as SponsoredClass,
      a.rbdgt_vldty_nbr                                                                                  as GteeMBudgetValidityNumber,     
      a.kblnr                                                                                            as EarmarkedFundsDocument,
      a.kblpos                                                                                           as EarmarkedFundsDocumentItem,       
      a.fs_product_group                                                                                 as FinancialServicesProductGroup,
      a.branch_id                                                                                        as FinancialServicesBranch,
      a.datasource_id                                                                                    as FinancialDataSource,
      a.vname                                                                                            as JointVenture,
      cast( a.egrup as jv_egroup_cds preserving type )                                                   as JointVentureEquityGroup,
      cast( a.recid as jv_recind_cds preserving type )                                                   as JointVentureCostRecoveryCode,
      cast( a.vptnr as jv_part_cds preserving type )                                                     as JointVenturePartner,
      cast( a.btype as jv_bilind_cds preserving type )                                                   as JointVentureBillingType,
      cast( a.etype as jv_etype_cds preserving type )                                                    as JointVentureEquityType,
      cast( a.prodper as jv_prodper_cds preserving type )                                                as JointVentureProductionDate,
      cast( a.billm as jv_billm_cds preserving type )                                                    as JointVentureBillingDate,
      cast( a.pom as jv_pom_cds preserving type )                                                        as JointVentureOperationalDate,
      cast( a.cbrunid as jv_cbrunid_cds preserving type )                                                as CutbackRun,
      cast( a.jvactivity as jv_activity_cds preserving type )                                            as JointVentureAccountingActivity,
      cast( a.pvname as jv_pvname_cds preserving type )                                                  as PartnerVenture,
      cast( a.pegrup as jv_pegrup_cds preserving type )                                                  as PartnerEquityGroup,
      cast( a.s_recind as jv_srecind_cds preserving type )                                               as SenderCostRecoveryCode,
      cast( a.cbracct as jv_cbracct_cds preserving type )                                                as CutbackAccount,
      cast( a.cbobjnr as jv_cbobjnr_cds preserving type )                                                as CutbackCostObject,
      a.swenr                                                                                            as REBusinessEntity,
      a.sgenr                                                                                            as RealEstateBuilding,
      a.sgrnr                                                                                            as RealEstateProperty,
      a.smenr                                                                                            as RERentalObject,
      a.recnnr                                                                                           as RealEstateContract,
      a.snksl                                                                                            as REServiceChargeKey,
      a.sempsl                                                                                           as RESettlementUnitID,      
      cast( a.dabrz as fis_dabrbez preserving type )                                                     as SettlementReferenceDate,      
      a.pswenr                                                                                           as REPartnerBusinessEntity,
      a.psgenr                                                                                           as RealEstatePartnerBuilding,
      a.psgrnr                                                                                           as RealEstatePartnerProperty,
      a.psmenr                                                                                           as REPartnerRentalObject,
      a.precnnr                                                                                          as RealEstatePartnerContract,
      a.psnksl                                                                                           as REPartnerServiceChargeKey,
      a.psempsl                                                                                          as REPartnerSettlementUnitID,
      a.pdabrz                                                                                           as PartnerSettlementReferenceDate,
      a.acrobjtype                                                                                       as AccrualObjectType,
      a.acrlogsys                                                                                        as AccrualObjectLogicalSystem,
      a.acrobj_id                                                                                        as AccrualObject,
      a.acrsobj_id                                                                                       as AccrualSubobject,
      a.acritmtype                                                                                       as AccrualItemType,
      a.acrrefobj_id                                                                                     as AccrualReferenceObject,
      a.acrvaldat                                                                                        as AccrualValueDate,     
      cast( a.valobjtype as fis_val_obj_type preserving type )                                           as FinancialValuationObjectType,    
      cast( a.valobj_id as fis_val_obj_id preserving type )                                              as FinancialValuationObject,
      cast( a.valsobj_id as fis_val_subobj_id preserving type )                                          as FinancialValuationSubobject,
      a.netdt                                                                                            as NetDueDate,
      a.risk_class                                                                                       as CreditRiskClass,
      a.arbid                                                                                            as WorkCenterInternalID,
      a.vornr                                                                                            as OrderOperation,
      a.aufps                                                                                            as OrderItem,
      a.paufps                                                                                           as PartnerOrderItem,
      cast( a.uvorn as fis_uvorn_no_conv preserving type )                                               as OrderSuboperation,
      a.equnr                                                                                            as Equipment,
      a.tplnr                                                                                            as FunctionalLocation,
      a.istru                                                                                            as Assembly,
      a.ilart                                                                                            as MaintenanceActivityType,
      a.plknz                                                                                            as MaintenanceOrderPlanningCode,
      a.artpr                                                                                            as MaintPriorityType,
      a.priok                                                                                            as MaintPriority,
      a.maufnr                                                                                           as SuperiorOrder,
      cast( a.matkl_mm  as fis_matkl_mm preserving type )                                                as ProductGroup,
      a.planned_parts_work                                                                               as MaintenanceOrderIsPlanned,
      cast( a.vornr_org as fis_origin_order_operation preserving type)                                   as OriginOrderOperation
      
      //_Extension   
}
```
