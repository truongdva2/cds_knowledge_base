---
name: ICA_MATCHINGOPLACCTGDOCITEM
description: Ica Matchingoplacctgdocitem
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
  - item-level
  - component:FIN-CS-ICR-2CL
  - lob:Other
---
# ICA_MATCHINGOPLACCTGDOCITEM

**Ica Matchingoplacctgdocitem**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `unitOfMeasure: 'BaseUnit'} }` | `unitOfMeasure: 'BaseUnit'} }` |
| `MaterialPriceUnitQty` | `a.peinh` |
| `EarmarkedFunds` | `a.kblnr` |
| `EarmarkedFundsItem` | `a.kblpos` |
| `IN_GSTPartner` | `a.gst_part` |
| `IN_GSTPlaceOfSupply` | `a.plc_sup` |
| `IN_HSNOrSACCode` | `a.hsn_sac` |
| `dats_tims_to_tstmp( b.cpudt, b.cputm, abap_system_timezone( $session.client,'NULL' )` | `dats_tims_to_tstmp( b.cpudt, b.cputm, abap_system_timezone( $session.client,'NULL' )` |
| `Timestamp` | `$session.client, 'NULL' )` |
| `fis_lastmanualchangedate preserving type )` | `cast ( b.aedat` |
| `fis_lastautomaticchangedate preserving type)` | `cast ( b.upddt` |
| `ExchangeRateDate` | `b.wwert` |
| `AccountingDocCreatedByUser` | `b.usnam` |
| `TransactionCode` | `b.tcode` |
| `IntercompanyTransaction` | `b.bvorg` |
| `DocumentReferenceID` | `b.xblnr` |
| `RecurringAccountingDocument` | `b.dbblg` |
| `ReverseDocument` | `b.stblg` |
| `ReverseDocumentFiscalYear` | `b.stjah` |
| `AccountingDocumentHeaderText` | `b.bktxt` |
| `NetAmountIsPosted` | `b.xnetb` |
| `JrnlEntryIsPostedToPrevPeriod` | `b.xrueb` |
| `BusinessTransactionType` | `b.glvor` |
| `BatchInputSession` | `b.grpid` |
| `FinancialManagementArea` | `b.fikrs` |
| `ReversalIsPlanned` | `b.xstov` |
| `PlannedReversalDate` | `b.stodt` |
| `TaxIsCalculatedAutomatically` | `b.xmwst` |
| `AdditionalCurrency1Role` | `b.curt2` |
| `AdditionalCurrency2Role` | `b.curt3` |
| `TaxBaseAmountIsNetAmount` | `b.xsnet` |
| `SourceCompanyCode` | `b.ausbk` |
| `LogicalSystem` | `b.awsys` |
| `TaxExchangeRate` | `b.txkrs` |
| `ReversalReason` | `b.stgrd` |
| `fis_ppnam preserving type )` | `cast(b.ppnam` |
| `ParkingDate` | `b.ppdat` |
| `ParkingTime` | `b.pptme` |
| `Branch` | `b.brnch` |
| `NmbrOfPages` | `b.numpg` |
| `IsDiscountDocument` | `b.adisc` |
| `Reference1InDocumentHeader` | `b.xref1_hd` |
| `Reference2InDocumentHeader` | `b.xref2_hd` |
| `InvoiceReceiptDate` | `b.reindat` |
| `Ledger` | `b.rldnr` |
| `LedgerGroup` | `b.ldgrp` |
| `fis_xblnr_alt_alpha preserving type )` | `cast(b.xblnr_alt` |
| `TaxReportingDate` | `b.vatdate` |
| `TaxFulfillmentDate` | `b.fulfilldate` |
| `AccountingDocumentClass` | `b.doccat` |
| `ExchangeRateType` | `b.kurst` |
| `SenderLogicalSystem` | `b.logsystem_sender` |
| `SenderCompanyCode` | `b.bukrs_sender` |
| `SenderAccountingDocument` | `b.belnr_sender` |
| `SenderFiscalYear` | `b.gjahr_sender` |
| `ReversalReferenceDocumentCntxt` | `b.aworg_rev` |
| `ReversalReferenceDocument` | `b.awref_rev` |
| `LatePaymentReason` | `b.penrc` |
| `SalesDocumentCondition` | `b.knumv` |
| `IsReversal` | `b.xreversing` |
| `IsReversed` | `b.xreversed` |
| `GLBusinessTransactionGroup` | `b.glbtgrp` |
| `CostAccountingValuationDate` | `b.co_valdt` |
| `JrnlEntryCntrySpecificRef1` | `b.glo_ref1_hd` |
| `JrnlEntryCntrySpecificDate1` | `b.glo_dat1_hd` |
| `JrnlEntryCntrySpecificRef2` | `b.glo_ref2_hd` |
| `JrnlEntryCntrySpecificDate2` | `b.glo_dat2_hd` |
| `JrnlEntryCntrySpecificRef3` | `b.glo_ref3_hd` |
| `JrnlEntryCntrySpecificDate3` | `b.glo_dat3_hd` |
| `JrnlEntryCntrySpecificRef4` | `b.glo_ref4_hd` |
| `JrnlEntryCntrySpecificDate4` | `b.glo_dat4_hd` |
| `JrnlEntryCntrySpecificRef5` | `b.glo_ref5_hd` |
| `JrnlEntryCntrySpecificDate5` | `b.glo_dat5_hd` |
| `JrnlEntryCntrySpecificBP1` | `b.glo_bp1_hd` |
| `JrnlEntryCntrySpecificBP2` | `b.glo_bp2_hd` |
| `WithholdingTaxReportingDate` | `b.whtdate` |
| `Company` | `c.rcomp` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_OperationalAcctgDocItem` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Match Opl Accounting Document Item'
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #TRANSACTIONAL,
                usageType.serviceQuality: #X,
                supportedCapabilities: [ #SQL_DATA_SOURCE ] }
@AbapCatalog: { extensibility.dataSources: [ '_Extension' ],
                viewEnhancementCategory: [ #PROJECTION_LIST ] }           
@Metadata.ignorePropagatedAnnotations: true
define view entity ICA_MatchingOplAcctgDocItem 
  as select from bseg as a
    inner join   bkpf as b            on a.bukrs = b.bukrs
                                     and a.belnr = b.belnr
                                     and a.gjahr = b.gjahr
    inner join   t001 as c            on a.bukrs = c.bukrs
  association [1] to E_OperationalAcctgDocItem as _Extension on $projection.CompanyCode = _Extension.CompanyCode and
                                                                $projection.FiscalYear = _Extension.FiscalYear and
                                                                $projection.AccountingDocument = _Extension.AccountingDocument and
                                                                $projection.AccountingDocumentItem = _Extension.AccountingDocumentItem
{
    key a.bukrs                                                    as  CompanyCode,
    key a.belnr                                                    as  AccountingDocument,
    key a.gjahr                                                    as  FiscalYear,
    key a.buzei                                                    as  AccountingDocumentItem,
    cast ('' as ica_method_id)                                     as  MatchingMethodID,
        c.ktopl                                                    as  ChartOfAccounts,
        a.buzid                                                    as  AccountingDocumentItemType,
        a.augdt                                                    as  ClearingDate,
        a.augcp                                                    as  ClearingCreationDate,
        a.auggj                                                    as  ClearingJournalEntryFiscalYear,
    cast( a.auggj  as fis_auggj_no_conv_depre preserving type )    as  ClearingDocFiscalYear,
        a.augbl                                                    as  ClearingJournalEntry,
    cast( a.augbl as fis_augbl_depre preserving type )             as  ClearingAccountingDocument,
        a.bschl                                                    as  PostingKey,
        a.koart                                                    as  FinancialAccountType,
        a.umskz                                                    as  SpecialGLCode,
        a.umsks                                                    as  SpecialGLTransactionType,
        a.shkzg                                                    as  DebitCreditCode,
        a.gsber                                                    as  BusinessArea,
        a.pargb                                                    as  PartnerBusinessArea,
        a.mwskz                                                    as  TaxCode,
        a.tax_country                                              as  TaxCountry, 
        a.txdat_from                                               as  TaxRateValidityStartDate,
        a.qsskz                                                    as  WithholdingTaxCode,
        a.mwart                                                    as  TaxType,
        a.txgrp                                                    as  TaxItemGroup,
        a.ktosl                                                    as  TransactionTypeDetermination,
        a.valut                                                    as  ValueDate,
        a.zuonr                                                    as  AssignmentReference,
        a.sgtxt                                                    as  DocumentItemText,
        a.vbund                                                    as  PartnerCompany,
        a.bewar                                                    as  FinancialTransactionType,
        a.altkt                                                    as  CorporateGroupAccount,
        a.fdlev                                                    as  PlanningLevel,
        a.kokrs                                                    as  ControllingArea,
        a.kostl                                                    as  CostCenter,
        a.aufnr                                                    as  OrderID,
        a.vbeln                                                    as  BillingDocument,
        a.vbel2                                                    as  SalesDocument,
        a.posn2                                                    as  SalesDocumentItem,
        a.eten2                                                    as  ScheduleLine,
        a.service_doc_type                                         as  ServiceDocumentType,
        a.service_doc_id                                           as  ServiceDocument,
        a.service_doc_item_id                                      as  ServiceDocumentItem,
        a.anln1                                                    as  MasterFixedAsset,
        a.anln2                                                    as  FixedAsset,
        a.anbwa                                                    as  AssetTransactionType,
        a.bzdat                                                    as  AssetValueDate,
        a.pernr                                                    as  PersonnelNumber,
        a.xumsw                                                    as  IsSalesRelated,
        a.xkres                                                    as  LineItemDisplayIsEnabled,
        a.xopvw                                                    as  IsOpenItemManaged,
        cast( a.xcpdd as farp_xcpdd )                              as  AddressAndBankIsSetManually,
        a.xanet                                                    as  DownPaymentIsNetProcedure,
        a.xskrl                                                    as  IsNotCashDiscountLiable,
        a.xauto                                                    as  IsAutomaticallyCreated,
        a.xzahl                                                    as  IsUsedInPaymentTransaction,
        a.saknr                                                    as  OperationalGLAccount,
        a.hkont                                                    as  GLAccount,
        a.kunnr                                                    as  Customer,
        a.lifnr                                                    as  Supplier,
        a.filkd                                                    as  BranchAccount,
        a.xbilk                                                    as  IsBalanceSheetAccount,
        a.gvtyp                                                    as  ProfitLossAccountType,
        a.hzuon                                                    as  SpecialGLAccountAssignment,
        a.zfbdt                                                    as  DueCalculationBaseDate,
        a.zterm                                                    as  PaymentTerms,
        a.zbd1t                                                    as  CashDiscount1Days,
        a.zbd2t                                                    as  CashDiscount2Days,
        a.zbd3t                                                    as  NetPaymentDays,
        a.zbd1p                                                    as  CashDiscount1Percent,
        a.zbd2p                                                    as  CashDiscount2Percent,
        a.zlsch                                                    as  PaymentMethod,
        a.zlspr                                                    as  PaymentBlockingReason,
        a.zbfix                                                    as  FixedCashDiscount,
        a.hbkid                                                    as  HouseBank,
        a.bvtyp                                                    as  BPBankAccountInternalID,
        a.mwsk1                                                    as  TaxDistributionCode1,
        a.mwsk2                                                    as  TaxDistributionCode2,
        a.mwsk3                                                    as  TaxDistributionCode3,
        a.rebzg                                                    as  InvoiceReference,
        a.rebzj                                                    as  InvoiceReferenceFiscalYear,
        a.rebzz                                                    as  InvoiceItemReference,
        a.rebzt                                                    as  FollowOnDocumentType,
        a.lzbkz                                                    as  StateCentralBankPaymentReason,
        a.landl                                                    as  SupplyingCountry,
        a.samnr                                                    as  InvoiceList,
        a.disbn                                                    as  BillOfExchangeUsageDocument,
        a.wverw                                                    as  BillOfExchangeUsage,
        a.mschl                                                    as  DunningKey,
        a.mansp                                                    as  DunningBlockingReason,
        a.madat                                                    as  LastDunningDate,
        a.manst                                                    as  DunningLevel,
        a.maber                                                    as  DunningArea,
        a.esrnr                                                    as  PaytSlipWthRefSubscriber,
        a.esrre                                                    as  PaytSlipWthRefReference,
        a.esrpz                                                    as  PaytSlipWthRefCheckDigit,
        a.qsznr                                                    as  WithholdingTaxCertificate,
        cast( a.matnr as productnumber )                           as  Product,
        a.werks                                                    as  Plant,
        a.ebeln                                                    as  PurchasingDocument,
        a.ebelp                                                    as  PurchasingDocumentItem,
        a.zekkn                                                    as  AccountAssignmentNumber,
        a.elikz                                                    as  IsCompletelyDelivered,
        a.vprsv                                                    as  MaterialPriceControl,
        a.bwkey                                                    as  ValuationArea,
        a.bwtar                                                    as  InventoryValuationType,
        a.stceg                                                    as  VATRegistration,
        a.egbld                                                    as  DelivOfGoodsDestCountry,
        a.eglld                                                    as  DelivOfGoodsOriginCountry,
        a.rstgr                                                    as  PaymentDifferenceReason,
        a.prctr                                                    as  ProfitCenter,
        a.vname                                                    as  JointVenture,
        a.recid                                                    as  JointVentureCostRecoveryCode,
        a.egrup                                                    as  JointVentureEquityGroup,
        cast( a.vptnr as jv_part_cds preserving type )             as  JointVenturePartner,
        a.vertt                                                    as  TreasuryContractType,
        a.vertn                                                    as  AssetContract,
        a.vbewa                                                    as  CashFlowType,
        a.txjcd                                                    as  TaxJurisdiction,
        cast( a.imkey as recaimkeyfi preserving type )             as  REInternalFinNumber,
        a.imkey                                                    as  RealEstateObject,
        a.dabrz                                                    as  SettlementReferenceDate,
        a.fipos                                                    as  CommitmentItem,
        cast( a.fipos as fis_fipos_shortid preserving type )       as  CommitmentItemShortID, 
        a.kstrg                                                    as  CostObject,
        a.nplnr                                                    as  ProjectNetwork,
        a.aufpl                                                    as  OrderInternalBillOfOperations,
        a.aplzl                                                    as  OrderIntBillOfOperationsItem,
        cast( a.projk as fis_wbsint_no_conv preserving type )      as  WBSElementInternalID,
        cast( a.paobjnr as rkeobjnr_char )                         as ProfitabilitySegment_2, 
        //cast( a.btype as jv_bilind_cds preserving type )           as  JointVentureBillingType,
        a.etype                                                    as  JointVentureEquityType,
        a.xegdr                                                    as  IsEUTriangularDeal,
        a.hrkft                                                    as  CostOriginGroup,
        a.hwmet                                                    as  CompanyCodeCurrencyDetnMethod,
        a.xragl                                                    as  ClearingIsReversed,
        a.uzawe                                                    as  PaymentMethodSupplement,
        a.lokkt                                                    as  AlternativeGLAccount,
        a.fistl                                                    as  FundsCenter,
        a.geber                                                    as  Fund,
        a.stbuk                                                    as  TaxCompanyCode,
        a.pprct                                                    as  PartnerProfitCenter,
        a.xref1                                                    as  Reference1IDByBusinessPartner,
        a.xref2                                                    as  Reference2IDByBusinessPartner,   
        a.kblnr                                                    as  EarmarkedFundsDocument,    
        a.kblpos                                                   as  EarmarkedFundsDocumentItem,
        a.xnegp                                                    as  IsNegativePosting,
        a.rfzei                                                    as  PaymentCardItem,
        a.ccbtc                                                    as  PaymentCardPaymentSettlement,
        a.kkber                                                    as  CreditControlArea,
        a.empfb                                                    as  AlternativePayeePayer,
        a.xref3                                                    as  Reference3IDByBusinessPartner,
        a.dtws1                                                    as  DataExchangeInstruction1,
        a.dtws2                                                    as  DataExchangeInstruction2,
        a.dtws3                                                    as  DataExchangeInstruction3,
        a.dtws4                                                    as  DataExchangeInstruction4,
        a.grirg                                                    as  Region,
        a.xpypr                                                    as  HasPaymentOrder,
        a.kidno                                                    as  PaymentReference,
        a.txdat                                                    as  TaxDeterminationDate,
        a.agzei                                                    as  ClearingItem,
        a.bupla                                                    as  BusinessPlace,
        a.secco                                                    as  TaxSection,
        a.lstar                                                    as  CostCtrActivityType,
        a.cession_kz                                               as  AccountsReceivableIsPledged,
      cast( a.cession_kz as fis_cession_kz_code preserving type )  as AcctsReceivablePledgingCode,
        a.prznr                                                    as  BusinessProcess,
        a.grant_nbr                                                as  GrantID,
        a.fkber_long                                               as  FunctionalArea,
        a.gmvkz                                                    as  CustomerIsInExecution,
        a.measure                                                  as  FundedProgram,
        a.docln                                                    as  LedgerGLLineItem,
        a.segment                                                  as  Segment,
        a.psegment                                                 as  PartnerSegment,
        a.pfkber                                                   as  PartnerFunctionalArea,
        a.hktid                                                    as  HouseBankAccount,
        a.kstar                                                    as  CostElement,
        a.taxps                                                    as  TaxItemAcctgDocItemRef,
        a.pays_prov                                                as  PaymentServiceProvider,
        a.pays_tran                                                as  PaymentRefByPaytSrvcProvider,
        a.mndid                                                    as  SEPAMandate,
        a.awtyp                                                    as  ReferenceDocumentType,
        a.awkey                                                    as  OriginalReferenceDocument,
        a.awsys                                                    as  ReferenceDocumentLogicalSystem,
        a.posnr                                                    as  AccountingDocumentItemRef,
        a.h_monat                                                  as  FiscalPeriod,
        a.h_bstat                                                  as  AccountingDocumentCategory,    
        a.h_budat                                                  as  PostingDate,
        a.h_bldat                                                  as  DocumentDate,
        a.h_blart                                                  as  AccountingDocumentType,
        a.netdt                                                    as  NetDueDate,
        a.sk1dt                                                    as  CashDiscount1DueDate,
        a.sk2dt                                                    as  CashDiscount2DueDate,
        a.gkont                                                    as  OffsettingAccount,
        a.gkart                                                    as  OffsettingAccountType,
        //c.gktopl                                                   as  OffsettingChartOfAccounts,
        a.pgeber                                                   as  PartnerFund,
        a.pgrant_nbr                                               as  PartnerGrant,
        a.budget_pd                                                as  BudgetPeriod,
        a.pbudget_pd                                               as  PartnerBudgetPeriod,
        a.j_1tpbupl                                                as  BranchCode,
        cast( a.prodper as jv_prodper_cds preserving type )        as  JointVentureProductionDate,
        a.glo_ref1                                                 as  OplAcctgDocItmCntrySpcfcRef1,
        a.payt_rsn                                                 as  PaymentReason,
        a.re_bukrs                                                 as  CashLedgerCompanyCode,
        a.re_account                                               as  CashLedgerAccount,
        a.bdgt_account_cocode                                      as  PubSecBudgetAccountCoCode,
        a.bdgt_account                                             as  PubSecBudgetAccount,
        a.h_hwaer                                                  as  CompanyCodeCurrency,
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.dmbtr                                                    as  AmountInCompanyCodeCurrency,
        a.rfccur                                                   as  FunctionalCurrency,
        @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
        a.fcsl                                                     as  AmountInFunctionalCurrency,   
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.mwsts                                                    as  TaxAmountInCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.hwbas                                                    as  TaxBaseAmountInCoCodeCrcy,
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.bdiff                                                    as  ValuationDiffAmtInCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.sknto                                                    as  CashDiscountAmtInCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
        a.dmbt1                                                    as  TaxBrkdwnAmount1InCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
        a.dmbt2                                                    as  TaxBrkdwnAmount2InCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
        a.dmbt3                                                    as  TaxBrkdwnAmount3InCoCodeCrcy, 
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
        a.navhw                                                    as  NonDcblTaxAmountInCoCodeCrcy,
        @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
        a.rewrt                                                    as  InvoiceAmtInCoCodeCrcy,                                         
        a.h_waers                                                  as  TransactionCurrency,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.wrbtr                                                    as  AmountInTransactionCurrency,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.txbfw                                                    as  OriginalTaxBaseAmount,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.wmwst                                                    as  TaxAmount,  
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.fwbas                                                    as  TaxBaseAmountInTransCrcy,  
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.qsshb                                                    as  WithholdingTaxBaseAmount, 
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.fdwbt                                                    as  PlannedAmtInTransactionCrcy,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.skfbt                                                    as  CashDiscountBaseAmount,    
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.wskto                                                    as  CashDiscountAmount,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.nebtr                                                    as  NetPaymentAmount,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
        a.wrbt1                                                    as  TaxBrkdwnAmount1InTransCrcy, 
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
        a.wrbt2                                                    as TaxBrkdwnAmount2InTransCrcy, 
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
        a.wrbt3                                                    as TaxBrkdwnAmount3InTransCrcy,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.qbshb                                                    as  WithholdingTaxAmount,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.qsfbt                                                    as  WithholdingTaxExemptionAmt,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.navfw                                                    as  NonDcblTaxAmountInTransCrcy,
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        a.rewwr                                                    as  InvoiceAmountInFrgnCurrency,        
        a.pswsl                                                    as  BalanceTransactionCurrency, 
        @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
        a.pswbt                                                    as  AmountInBalanceTransacCrcy,              
        a.h_hwae2                                                  as  AdditionalCurrency1,  
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
        a.bdif2                                                    as  ValuationDiffAmtInAddlCrcy1,   
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
        a.dmbe2                                                    as  AmountInAdditionalCurrency1, 
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
        a.mwst2                                                    as TaxAmountInAdditionalCurrency1,                
        a.h_hwae3                                                  as  AdditionalCurrency2,
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
        a.dmbe3                                                    as  AmountInAdditionalCurrency2, 
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
        a.mwst3                                                    as TaxAmountInAdditionalCurrency2, 
        @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
        a.bdif3                                                    as  ValuationDiffAmtInAddlCrcy2,                      
        a.pycur                                                    as  PaymentCurrency,
        @Semantics: { amount : {currencyCode: 'PaymentCurrency'} }
        a.pyamt                                                    as  AmountInPaymentCurrency,   
        a.meins                                                    as  BaseUnit,
        @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
        a.menge                                                    as  Quantity,
        a.erfme                                                    as  GoodsMovementEntryUnit,
        @Semantics: { quantity : {unitOfMeasure: 'GoodsMovementEntryUnit'} }
        a.erfmg                                                    as  QuantityInEntryUnit,     
        a.bprme                                                    as  PurchasingDocumentPriceUnit,
        @Semantics: { quantity : {unitOfMeasure: 'PurchasingDocumentPriceUnit'} }
        a.bpmng                                                    as  PurchaseOrderQty,
        @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
        a.peinh                                                    as  MaterialPriceUnitQty,
        a.kblnr                                                    as  EarmarkedFunds,
        a.kblpos                                                   as  EarmarkedFundsItem,
        a.gst_part                                                 as  IN_GSTPartner,
        a.plc_sup                                                  as  IN_GSTPlaceOfSupply,
        a.hsn_sac                                                  as  IN_HSNOrSACCode,
   
        ------------------------------------------
        // Header fields 
        ------------------------------------------         
    dats_tims_to_tstmp( b.cpudt, b.cputm, abap_system_timezone( $session.client,'NULL' ),
                     $session.client, 'NULL' )                     as Timestamp,        
    cast ( b.aedat as fis_lastmanualchangedate preserving type )   as LastManualChangeDate,
    cast ( b.upddt as fis_lastautomaticchangedate preserving type) as LastAutomaticChangeDate,
        b.wwert                                                    as ExchangeRateDate,
        b.usnam                                                    as AccountingDocCreatedByUser,
        b.tcode                                                    as TransactionCode,
        b.bvorg                                                    as IntercompanyTransaction,
        b.xblnr                                                    as DocumentReferenceID,
        b.dbblg                                                    as RecurringAccountingDocument,
        b.stblg                                                    as ReverseDocument,
        b.stjah                                                    as ReverseDocumentFiscalYear,
        b.bktxt                                                    as AccountingDocumentHeaderText,
        b.xnetb                                                    as NetAmountIsPosted,
        b.xrueb                                                    as JrnlEntryIsPostedToPrevPeriod,
        b.glvor                                                    as BusinessTransactionType,
        b.grpid                                                    as BatchInputSession,
        b.fikrs                                                    as FinancialManagementArea,
        b.xstov                                                    as ReversalIsPlanned,
        b.stodt                                                    as PlannedReversalDate,
        b.xmwst                                                    as TaxIsCalculatedAutomatically,
        b.curt2                                                    as AdditionalCurrency1Role,
        b.curt3                                                    as AdditionalCurrency2Role,
        b.xsnet                                                    as TaxBaseAmountIsNetAmount,
        b.ausbk                                                    as SourceCompanyCode,
        b.awsys                                                    as LogicalSystem,
        b.txkrs                                                    as TaxExchangeRate,
        b.stgrd                                                    as ReversalReason,
        cast(b.ppnam as fis_ppnam preserving type )                as ParkedByUser,
        b.ppdat                                                    as ParkingDate,
        b.pptme                                                    as ParkingTime,
        b.brnch                                                    as Branch,
        b.numpg                                                    as NmbrOfPages,
        b.adisc                                                    as IsDiscountDocument,
        b.xref1_hd                                                 as Reference1InDocumentHeader,
        b.xref2_hd                                                 as Reference2InDocumentHeader,
        b.reindat                                                  as InvoiceReceiptDate,    
        b.rldnr                                                    as Ledger,
        b.ldgrp                                                    as LedgerGroup,
        cast(b.xblnr_alt as fis_xblnr_alt_alpha preserving type )  as AlternativeReferenceDocument,
        b.vatdate                                                  as TaxReportingDate,
        b.fulfilldate                                              as TaxFulfillmentDate,
        b.doccat                                                   as AccountingDocumentClass,
        b.kurst                                                    as ExchangeRateType,
        b.logsystem_sender                                         as SenderLogicalSystem,
        b.bukrs_sender                                             as SenderCompanyCode,
        b.belnr_sender                                             as SenderAccountingDocument,
        b.gjahr_sender                                             as SenderFiscalYear,
        b.aworg_rev                                                as ReversalReferenceDocumentCntxt,
        b.awref_rev                                                as ReversalReferenceDocument,
        b.penrc                                                    as LatePaymentReason,
        b.knumv                                                    as SalesDocumentCondition,
        b.xreversing                                               as IsReversal,
        b.xreversed                                                as IsReversed,
        b.glbtgrp                                                  as GLBusinessTransactionGroup,
        b.co_valdt                                                 as CostAccountingValuationDate, 
        b.glo_ref1_hd                                              as JrnlEntryCntrySpecificRef1,
        b.glo_dat1_hd                                              as JrnlEntryCntrySpecificDate1,
        b.glo_ref2_hd                                              as JrnlEntryCntrySpecificRef2,
        b.glo_dat2_hd                                              as JrnlEntryCntrySpecificDate2,
        b.glo_ref3_hd                                              as JrnlEntryCntrySpecificRef3,
        b.glo_dat3_hd                                              as JrnlEntryCntrySpecificDate3,
        b.glo_ref4_hd                                              as JrnlEntryCntrySpecificRef4,
        b.glo_dat4_hd                                              as JrnlEntryCntrySpecificDate4,
        b.glo_ref5_hd                                              as JrnlEntryCntrySpecificRef5,
        b.glo_dat5_hd                                              as JrnlEntryCntrySpecificDate5,
        b.glo_bp1_hd                                               as JrnlEntryCntrySpecificBP1,
        b.glo_bp2_hd                                               as JrnlEntryCntrySpecificBP2,
        b.whtdate                                                  as WithholdingTaxReportingDate,
        
        c.rcomp                                                    as Company
}
```
