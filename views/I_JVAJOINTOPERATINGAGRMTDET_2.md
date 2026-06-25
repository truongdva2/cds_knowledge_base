---
name: I_JVAJOINTOPERATINGAGRMTDET_2
description: Jvajointoperatingagrmtdet 2
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAJOINTOPERATINGAGRMTDET_2

**Jvajointoperatingagrmtdet 2**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `currencyCode: 'Currency'} }` | `currencyCode: 'Currency'} }` |
| `_JointVentureMasterFld.JntVntrBillgThldCredit` | *Association* |
| `_JointVentureMasterFld.JntVntrBillgThldIsActive` | *Association* |
| `_JointVentureMasterFld.JntVntrPaymentTermSchema` | *Association* |
| `_JointVentureMasterFld.JVAVentureIntrstCalcGrpID` | *Association* |
| `_JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue` | *Association* |
| `cast ( cast ( 99999999 - cast( _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue` | `cast ( cast ( 99999999 - cast( _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue` |
| `as abap.int4 )` | `as abap.int4 )` |
| `as abap.char ( 12 ) )` | `as abap.char ( 12 ) )` |
| `JVAEquityGroupFromDate` | `as abap.dats )` |
| `_JntVntrValdInvmtGrp.JointVentureEquityGroupActive` | *Association* |
| `_JntVntrValdInvmtGrp.JointVentureDefBillCurrency` | *Association* |
| `_JntVntrValdInvmtGrp.JVAFundingGrpInEquityGrp` | *Association* |
| `_JntVntrValdInvmtGrp.JVAEquityGroupIntrstCalcGrpID` | *Association* |
| `_JntVntrValdInvmtGrp.JointVentureEquityTypeName` | *Association* |
| `_JointVentureIntcoVenture.JointVentureIntcoVenture` | *Association* |
| `_JointVentureIntcoVenture.JointVentureIntcoEquityGrp` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrEquityShare` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrIsSuspended` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedPerd` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedYr` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrIsNotSuspended` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedPerd` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedYr` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrInterestType` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOpgRcvryPercent` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrDrillingRcvryPercent` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrPayIsStppd` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstPerd` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstYrValue` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrCarriedIntrstGrp` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrNetProfitIntrstGrp` | *Association* |
| `_JntVntrPartOwnrEquityShr.JntVntrOperatorAddressArea` | *Association* |
| `_JntVntrPartOwnrEquityShr._JntVntrEquityGrp._JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText` | *Association* |
| `/*Associations*/` | `/*Associations*/` |
| `_CompanyCode` | *Association* |
| `_CompanyCode.Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_JntOpgAgrmt` | `I_JntOpgAgrmt` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVAJOADETAILS_2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'JVA and cost object MD information'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@ObjectModel: { usageType: { sizeCategory: #XL,
                             dataClass:  #MASTER,
                             serviceQuality: #C },
                supportedCapabilities: [#ANALYTICAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #UI_PROVIDER_PROJECTION_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }
// This view is successor view of deprecated view I_JVAJointOperatingAgrmtDetail
define view I_JVAJointOperatingAgrmtDet_2
  as select from            I_JointVentureMasterFld    as _JointVentureMasterFld
  
left outer to many join  I_JntVntrValdInvmtGrp      as _JntVntrValdInvmtGrp      on  _JointVentureMasterFld.CompanyCode  = _JntVntrValdInvmtGrp.CompanyCode
                                                                                   and _JointVentureMasterFld.JointVenture = _JntVntrValdInvmtGrp.JointVenture
left outer to many join  I_JntVntrPartOwnrEquityShr as _JntVntrPartOwnrEquityShr on  _JointVentureMasterFld.CompanyCode           = _JntVntrPartOwnrEquityShr.CompanyCode
                                                                                   and _JointVentureMasterFld.JointVenture          = _JntVntrPartOwnrEquityShr.JointVenture
                                                                                   and _JntVntrValdInvmtGrp.JointVentureEquityGroup = _JntVntrPartOwnrEquityShr.JntOpgAgrmtEquityGrp
left outer to many join  I_JointVentureIntcoVenture as _JointVentureIntcoVenture on  _JntVntrValdInvmtGrp.CompanyCode             = _JointVentureIntcoVenture.CompanyCode
                                                                                   and _JntVntrValdInvmtGrp.JointVenture            = _JointVentureIntcoVenture.JointVenture
                                                                                   and _JntVntrValdInvmtGrp.JointVentureEquityGroup = _JointVentureIntcoVenture.JointVentureEquityGroup

  association [1..1] to I_CompanyCode as _CompanyCode on  _JointVentureMasterFld.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_JntOpgAgrmt as _JntOpgAgrmt on  _JointVentureMasterFld.CompanyCode = _JntOpgAgrmt.CompanyCode
                                                      and _JointVentureMasterFld.JntOpgAgrmt = _JntOpgAgrmt.JntOpgAgrmt
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [
             { entity:  { name:    'I_JointVentureCompanyCodeVH',
                          element: 'CompanyCode' }
             }]
  key _JointVentureMasterFld.CompanyCode,
      @ObjectModel.text.element: [ 'JntOpgAgrmtText' ]
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_JNTOPGAGRMTVH',
                       element: 'JntOpgAgrmt' }
          }]
  key _JntOpgAgrmt.JntOpgAgrmt,
      @ObjectModel.text.element: [ 'JointVentureName' ]
      @Consumption.valueHelpDefinition: [
                        { entity:  { name:    'I_JntVntrValueHelp',
                                     element: 'JointVenture' }
                        }]
  key _JointVentureMasterFld.JointVenture,
       @ObjectModel.text.element: [ 'JointVentureEquityTypeName' ]
       @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JntVntrEquityTypeVH',
                           element: 'JointVentureEquityType' }
              }]
  key _JntVntrValdInvmtGrp.JointVentureEquityType,
      @ObjectModel.text.element: [ 'JntOpgAgrmtEquityGrpText' ]
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JntVntrEquityGroupValueHelp',
                          element: 'JntOpgAgrmtEquityGrp' }
              }]
  key _JntVntrValdInvmtGrp.JointVentureEquityGroup,
     @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_JointVenturePartnerValueHelp',
                           element: 'JointVenturePartner' }
              }]
  key _JntVntrPartOwnrEquityShr.JointVenturePartner,
  key _JointVentureIntcoVenture.JntVntrIntcoCode,

      _JntOpgAgrmt._JntOpgAgrmtText[1:Language = $session.system_language ].JntOpgAgrmtText,

      _JntOpgAgrmt.JntVntrContractNmbr,

      _JntOpgAgrmt.JntVntrPayrollClearingSet,

      _JntOpgAgrmt.JntVntrConstructionExclsnSet,

      _JntOpgAgrmt.JntVntrCatastropheExclsnSet,

      _JntOpgAgrmt.JntVntrConstructionOvhdRule,

      _JntOpgAgrmt.JntVntrCatastropheOvhdRule,

      _JntOpgAgrmt.JVAOvhdPercentProdg,

      _JntOpgAgrmt.JVAExclsnAcctSetPercentProdg,

      _JntOpgAgrmt.JVAOvhdPercentDev,

      _JntOpgAgrmt.JVAExclsnAcctSetPercentDev,

      _JntOpgAgrmt.JntVntrExplorationOvhdRule,

      _JntOpgAgrmt.JntVntrDrillingOvhdRule,

      _JntOpgAgrmt.JntVntrCapitalExclsnSet,

      _JntOpgAgrmt.JntVntrOvhdOffsetCostCtr,

      _JntOpgAgrmt.JntOpgAgrmtProdgWellThld,

      _JntOpgAgrmt.JntVntrOvhdRecurringDoc,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JntOpgAgrmt.JntVntrOvhdFlatRateAmt,

      _JntOpgAgrmt.JntVntrExpnIsEscalated,

      _JntOpgAgrmt.JntOpgAgrmtClass,

      _JntOpgAgrmt.JntOpgAgrmtDrillingPayRate,

      _JntOpgAgrmt.JntOpgAgrmtNonDrillingPayRate,

      _JointVentureMasterFld._JointVentureDesc[1:Language = $session.system_language ].JointVentureName,

      @EndUserText:{ label: 'Payment Terms', quickInfo: 'Payment Terms' }
      _JointVentureMasterFld.JointVenturePaymentTerms,

      _JointVentureMasterFld.JointVentureBillingMethod,

      _JointVentureMasterFld.JointVentureType,

      _JointVentureMasterFld.JointVentureOperator,

      _JointVentureMasterFld.JointVentureTaxCode,

      _JointVentureMasterFld.JVAVentureClass,

      _JointVentureMasterFld.JntVntrInceptionToDateData,

      _JointVentureMasterFld.JntVntrBillgCutbackIsBlk,

      _JointVentureMasterFld.JntVntrTaxJurisdiction,

      _JointVentureMasterFld.JntVntrOutPaymentTerms,

      _JointVentureMasterFld.JntVntrOutTaxCode,

      _JointVentureMasterFld.JntVntrOutTaxJurisdiction,

      _JointVentureMasterFld.JntVntrNonBillgFormat,

      _JointVentureMasterFld.JntVntrBillgFrqcy,

      _JointVentureMasterFld.JntVntrDrillingPayRate,

      _JointVentureMasterFld.JntVntrNonDrillingPayRate,

      _JointVentureMasterFld.JntVntrParentCoOvhdExpnCostCtr,

      _JointVentureMasterFld.JntVntrParentCoOvhdProject,

      _JointVentureMasterFld.JntVntrParentCoOvhdExpnOrder,

      _JointVentureMasterFld.JntVntrSubstituteCostCtr,

      _JointVentureMasterFld.JntVntrFundingGroup,

      _JointVentureMasterFld.JntVntrCrcyIsFundingCrcy,

      _JointVentureMasterFld.JntVntrProperty,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JointVentureMasterFld.JntVntrBillgThldDebit,

      @Semantics: { amount : { currencyCode: 'Currency'} }
      _JointVentureMasterFld.JntVntrBillgThldCredit,

      _JointVentureMasterFld.JntVntrBillgThldIsActive,

      _JointVentureMasterFld.JntVntrPaymentTermSchema,

      _JointVentureMasterFld.JVAVentureIntrstCalcGrpID,

      _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue,

      @EndUserText.label : 'valid-from date'
      cast ( cast ( 99999999 - cast( _JntVntrValdInvmtGrp.JntVntrEquityFundingDateValue
                                 as abap.int4 )
               as abap.char ( 12 ) )
        as abap.dats ) as JVAEquityGroupFromDate,

      _JntVntrValdInvmtGrp.JointVentureEquityGroupActive,

      _JntVntrValdInvmtGrp.JointVentureDefBillCurrency,

      _JntVntrValdInvmtGrp.JVAFundingGrpInEquityGrp,

      _JntVntrValdInvmtGrp.JVAEquityGroupIntrstCalcGrpID,

      @UI.hidden: true
      _JntVntrValdInvmtGrp.JointVentureEquityTypeName,

      _JointVentureIntcoVenture.JointVentureIntcoVenture,

      _JointVentureIntcoVenture.JointVentureIntcoEquityGrp,

      _JntVntrPartOwnrEquityShr.JntVntrEquityShare,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrIsSuspended,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedPerd,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrSuspendedYr,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrIsNotSuspended,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedPerd,

      _JntVntrPartOwnrEquityShr.JntVntrOwnrNotSuspendedYr,

      _JntVntrPartOwnrEquityShr.JntVntrInterestType,

      _JntVntrPartOwnrEquityShr.JntVntrOpgRcvryPercent,

      _JntVntrPartOwnrEquityShr.JntVntrDrillingRcvryPercent,

      _JntVntrPartOwnrEquityShr.JntVntrPayIsStppd,

      _JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstPerd,

      _JntVntrPartOwnrEquityShr.JntVntrPartWrkgIntrstYrValue,

      _JntVntrPartOwnrEquityShr.JntVntrCarriedIntrstGrp,

      _JntVntrPartOwnrEquityShr.JntVntrNetProfitIntrstGrp,

      _JntVntrPartOwnrEquityShr.JntVntrOperatorAddressArea,

      @UI.hidden: true
      _JntVntrPartOwnrEquityShr._JntVntrEquityGrp._JntVntrEquityGrpText[1:Language = $session.system_language ].JntOpgAgrmtEquityGrpText,

      /*Associations*/
      _CompanyCode,
      _CompanyCode.Currency

}
```
