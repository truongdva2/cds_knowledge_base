---
name: C_RU_EXCHDIFF
description: RU Exchdiff
app_component: FI-LOC-FI-RU
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - consumption-view
  - component:FI-LOC-FI-RU
  - lob:Finance
---
# C_RU_EXCHDIFF

**RU Exchdiff**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-RU` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _Sum.CompanyCode` | `_Sum.CompanyCode` |
| `key _Sum.AccountingDocument` | `_Sum.AccountingDocument` |
| `key _Sum.FiscalYear` | `_Sum.FiscalYear` |
| `key _Sum.AccountingDocumentItem` | `_Sum.AccountingDocumentItem` |
| `key _Sum.ControllingAreaCurrencyRole` | `_Sum.ControllingAreaCurrencyRole` |
| `key _Sum.ActiveValuationArea` | `_Sum.ActiveValuationArea` |
| `StartingBalanceAmtInCoCodeCrcy` | `0.0` |
| `case` | `case` |
| `when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''` | `when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''` |
| `then` | `then` |
| `case` | `case` |
| `when _Sum.EvaluationKeyDate = $parameters.P_ToPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy` | `when _Sum.EvaluationKeyDate = $parameters.P_ToPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy` |
| `else 0.0` | `else 0.0` |
| `end` | `end` |
| `else` | `else` |
| `sum(_Sum.ValuationDiffAmtInCoCodeCrcy)` | `sum(_Sum.ValuationDiffAmtInCoCodeCrcy)` |
| `EndingBalanceAmtInCoCodeCrcy` | `end` |
| `_Sum.CompanyCodeCurrency` | *Association* |
| `_Sum.FrgnCrcyValnDeltaLogicIsActive` | *Association* |
| `_Sum.AssignmentReference` | *Association* |
| `_Sum.Creditor` | *Association* |
| `_Sum.Debtor` | *Association* |
| `_Sum.BusinessPartner` | *Association* |
| `_Sum.PostingDate` | *Association* |
| `_Sum.CndnContrType` | *Association* |
| `_Sum.AuthorizationGroup` | *Association* |
| `_Sum.SupplierFinsAuthorizationGrp` | *Association* |
| `_Sum.CustomerFinsAuthorizationGrp` | *Association* |
| `SupplierCompanyAuthznGroup` | `SupplierCompany.AuthorizationGroup` |
| `CustomerCompanyAuthznGroup` | `CustomerCompany.AuthorizationGroup` |
| `BusinessPartner.DataControllerSet` | `BusinessPartner.DataControllerSet` |
| `BusinessPartner.DataController1` | `BusinessPartner.DataController1` |
| `BusinessPartner.DataController2` | `BusinessPartner.DataController2` |
| `BusinessPartner.DataController3` | `BusinessPartner.DataController3` |
| `BusinessPartner.DataController4` | `BusinessPartner.DataController4` |
| `BusinessPartner.DataController5` | `BusinessPartner.DataController5` |
| `BusinessPartner.DataController6` | `BusinessPartner.DataController6` |
| `BusinessPartner.DataController7` | `BusinessPartner.DataController7` |
| `BusinessPartner.DataController8` | `BusinessPartner.DataController8` |
| `BusinessPartner.DataController9` | `BusinessPartner.DataController9` |
| `BusinessPartner.DataController10` | `BusinessPartner.DataController10` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CRUEXCHDIFF'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #REQUIRED 
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@EndUserText.label: 'FI RU Unrealized exchanged differences'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE  ]
@Consumption.dbHints: ['NO_CYCLIC_JOIN', 'USE_HEX_PLAN']
define view C_RU_ExchDiff
  with parameters
    P_FromPostingDate : firu_posting_date_from,
    P_ToPostingDate   : firu_posting_date_to
  as select from P_RU_ExchDiff1 as _Sum
  left outer to one join I_SupplierCompany as SupplierCompany on  _Sum.Creditor    = SupplierCompany.Supplier
                                                                and _Sum.CompanyCode = SupplierCompany.CompanyCode

  left outer to one join I_CustomerCompany as CustomerCompany on  _Sum.Debtor    = CustomerCompany.Customer
                                                                and _Sum.CompanyCode = CustomerCompany.CompanyCode
  left outer to one join I_BusinessPartner as BusinessPartner on  _Sum.BusinessPartner = BusinessPartner.BusinessPartner
{
  key _Sum.CompanyCode,
  key _Sum.AccountingDocument,
  key _Sum.FiscalYear,
  key _Sum.AccountingDocumentItem,
  key _Sum.ControllingAreaCurrencyRole,
  key _Sum.ActiveValuationArea,
  case
  when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''
    then
    case
      when _Sum.EvaluationKeyDate = $parameters.P_FromPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy
      else 0.0
    end
  else
    sum(_Sum.ValuationDiffAmtInCoCodeCrcy)
  end as StartingBalanceAmtInCoCodeCrcy,
  0.0             as EndingBalanceAmtInCoCodeCrcy,
  _Sum.CompanyCodeCurrency,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.BusinessPartner,
  _Sum.PostingDate,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup as SupplierCompanyAuthznGroup,
  CustomerCompany.AuthorizationGroup as CustomerCompanyAuthznGroup,

  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataControllerSet,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController1,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController2,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController3,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController4,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController5,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController6,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController7,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController8,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController9,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController10
}
where
  _Sum.PostingDate <= $parameters.P_ToPostingDate
  and _Sum.EvaluationKeyDate       <= $parameters.P_FromPostingDate
group by
  _Sum.CompanyCode,
  _Sum.AccountingDocument,
  _Sum.FiscalYear,
  _Sum.AccountingDocumentItem,
  _Sum.ControllingAreaCurrencyRole,
  _Sum.ActiveValuationArea,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.CompanyCodeCurrency,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.PostingDate,
  _Sum.EvaluationKeyDate,
  _Sum.ValuationDiffAmtInCoCodeCrcy,
  _Sum.BusinessPartner,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup,
  CustomerCompany.AuthorizationGroup,
  BusinessPartner.DataControllerSet,
  BusinessPartner.DataController1,
  BusinessPartner.DataController2,
  BusinessPartner.DataController3,
  BusinessPartner.DataController4,
  BusinessPartner.DataController5,
  BusinessPartner.DataController6,
  BusinessPartner.DataController7,
  BusinessPartner.DataController8,
  BusinessPartner.DataController9,
  BusinessPartner.DataController10
union select from P_RU_ExchDiff1 as _Sum
  left outer to one join I_SupplierCompany as SupplierCompany on  _Sum.Creditor    = SupplierCompany.Supplier
                                                                and _Sum.CompanyCode = SupplierCompany.CompanyCode

  left outer to one join I_CustomerCompany as CustomerCompany on  _Sum.Debtor    = CustomerCompany.Customer
                                                                and _Sum.CompanyCode = CustomerCompany.CompanyCode
  left outer to one join I_BusinessPartnerTP  as BusinessPartner on  _Sum.BusinessPartner = BusinessPartner.BusinessPartner
{
  key _Sum.CompanyCode,
  key _Sum.AccountingDocument,
  key _Sum.FiscalYear,
  key _Sum.AccountingDocumentItem,
  key _Sum.ControllingAreaCurrencyRole,
  key _Sum.ActiveValuationArea,
  0.0             as StartingBalanceAmtInCoCodeCrcy,
  case
  when _Sum.FrgnCrcyValnDeltaLogicIsActive = ''
    then
    case
      when _Sum.EvaluationKeyDate = $parameters.P_ToPostingDate then _Sum.ValuationDiffAmtInCoCodeCrcy
      else 0.0
    end
  else
    sum(_Sum.ValuationDiffAmtInCoCodeCrcy)
  end as EndingBalanceAmtInCoCodeCrcy,
  _Sum.CompanyCodeCurrency,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.BusinessPartner,
  _Sum.PostingDate,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup as SupplierCompanyAuthznGroup,
  CustomerCompany.AuthorizationGroup as CustomerCompanyAuthznGroup,

  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataControllerSet,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController1,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController2,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController3,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController4,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController5,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController6,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController7,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController8,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController9,
  @UI.hidden: true
  @Consumption.hidden: true
  BusinessPartner.DataController10
}
where
  _Sum.PostingDate <= $parameters.P_ToPostingDate
  and _Sum.EvaluationKeyDate       between $parameters.P_FromPostingDate and $parameters.P_ToPostingDate
group by
  _Sum.CompanyCode,
  _Sum.AccountingDocument,
  _Sum.FiscalYear,
  _Sum.AccountingDocumentItem,
  _Sum.ControllingAreaCurrencyRole,
  _Sum.ActiveValuationArea,
  _Sum.FrgnCrcyValnDeltaLogicIsActive,
  _Sum.CompanyCodeCurrency,
  _Sum.AssignmentReference,
  _Sum.Creditor,
  _Sum.Debtor,
  _Sum.PostingDate,
  _Sum.EvaluationKeyDate,
  _Sum.ValuationDiffAmtInCoCodeCrcy,
  _Sum.BusinessPartner,
  _Sum.CndnContrType,
  _Sum.AuthorizationGroup,
  _Sum.SupplierFinsAuthorizationGrp,
  _Sum.CustomerFinsAuthorizationGrp,
  SupplierCompany.AuthorizationGroup,
  CustomerCompany.AuthorizationGroup,
  BusinessPartner.DataControllerSet,
  BusinessPartner.DataController1,
  BusinessPartner.DataController2,
  BusinessPartner.DataController3,
  BusinessPartner.DataController4,
  BusinessPartner.DataController5,
  BusinessPartner.DataController6,
  BusinessPartner.DataController7,
  BusinessPartner.DataController8,
  BusinessPartner.DataController9,
  BusinessPartner.DataController10
```
