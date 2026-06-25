---
name: D_CNSLDTNGRPJRNLENTRPOSTITEMP
description: D Cnsldtngrpjrnlentrpostitemp
app_component: FIN-CS-JE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-JE
  - item-level
  - component:FIN-CS-JE-2CL
  - lob:Other
---
# D_CNSLDTNGRPJRNLENTRPOSTITEMP

**D Cnsldtngrpjrnlentrpostitemp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-JE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key DummyKey                       : abap.char(1);` | `DummyKey                       : abap.char(1);` |
| `ConsolidationPostingItem       : docln6;` | `ConsolidationPostingItem       : docln6;` |
| `FinancialStatementItem         : fc_item;` | `FinancialStatementItem         : fc_item;` |
| `ConsolidationVersion           : fc_rvers;` | `ConsolidationVersion           : fc_rvers;` |
| `SubItem                        : fc_sitem;` | `SubItem                        : fc_sitem;` |
| `AmountInLocalCurrency          : vlcur12;` | `AmountInLocalCurrency          : vlcur12;` |
| `LocalCurrency                  : lcurr;` | `LocalCurrency                  : lcurr;` |
| `AmountInGroupCurrency          : vgcur12;` | `AmountInGroupCurrency          : vgcur12;` |
| `GroupCurrency                  : gcurr;` | `GroupCurrency                  : gcurr;` |
| `AmountInTransactionCurrency    : vtcur12;` | `AmountInTransactionCurrency    : vtcur12;` |
| `TransactionCurrency            : rtcur;` | `TransactionCurrency            : rtcur;` |
| `PartnerConsolidationUnit       : fincs_partnerconsolidationunit;` | `PartnerConsolidationUnit       : fincs_partnerconsolidationunit;` |
| `ConsolidationUnit              : fincs_consolidationunit;` | `ConsolidationUnit              : fincs_consolidationunit;` |
| `BaseUnit                       : meins;` | `BaseUnit                       : meins;` |
| `Quantity                       : fincs_quan;` | `Quantity                       : fincs_quan;` |
| `Company                        : rcomp_d;` | `Company                        : rcomp_d;` |
| `CompanyCode                    : obukr;` | `CompanyCode                    : obukr;` |
| `BusinessTransactionType        : glvor;` | `BusinessTransactionType        : glvor;` |
| `ControllingArea                : kokrs;` | `ControllingArea                : kokrs;` |
| `CostCenter                     : kostl;` | `CostCenter                     : kostl;` |
| `GLAccount                      : racct;` | `GLAccount                      : racct;` |
| `ProfitCenter                   : prctr;` | `ProfitCenter                   : prctr;` |
| `BusinessArea                   : gsber;` | `BusinessArea                   : gsber;` |
| `PartnerCostCenter              : skost;` | `PartnerCostCenter              : skost;` |
| `PartnerProfitCenter            : pprctr;` | `PartnerProfitCenter            : pprctr;` |
| `AssignmentReference            : dzuonr;` | `AssignmentReference            : dzuonr;` |
| `Segment                        : fb_segment;` | `Segment                        : fb_segment;` |
| `PartnerFunctionalArea          : sfkber;` | `PartnerFunctionalArea          : sfkber;` |
| `PartnerBusinessArea            : pargb;` | `PartnerBusinessArea            : pargb;` |
| `PartnerCompany                 : rassc;` | `PartnerCompany                 : rassc;` |
| `PartnerSegment                 : fb_psegment;` | `PartnerSegment                 : fb_psegment;` |
| `OrderID                        : aufnr;` | `OrderID                        : aufnr;` |
| `Customer                       : kunnr;` | `Customer                       : kunnr;` |
| `FunctionalArea                 : fkber;` | `FunctionalArea                 : fkber;` |
| `Supplier                       : lifnr;` | `Supplier                       : lifnr;` |
| `Material                       : matnr;` | `Material                       : matnr;` |
| `Plant                          : werks_d;` | `Plant                          : werks_d;` |
| `FinancialTransactionType       : rmvct;` | `FinancialTransactionType       : rmvct;` |
| `BillingDocumentType            : fkart;` | `BillingDocumentType            : fkart;` |
| `SalesOrganization              : vkorg;` | `SalesOrganization              : vkorg;` |
| `DistributionChannel            : vtweg;` | `DistributionChannel            : vtweg;` |
| `OrganizationDivision           : spart;` | `OrganizationDivision           : spart;` |
| `SoldMaterial                   : fins_matnr_pa;` | `SoldMaterial                   : fins_matnr_pa;` |
| `MaterialGroup                  : fins_matkl_mm;` | `MaterialGroup                  : fins_matkl_mm;` |
| `ProductGroup                   : fins_matkl_pa;` | `ProductGroup                   : fins_matkl_pa;` |
| `CustomerGroup                  : kdgrp;` | `CustomerGroup                  : kdgrp;` |
| `CustomerSupplierCountry        : land1_gp;` | `CustomerSupplierCountry        : land1_gp;` |
| `CustomerSupplierIndustry       : brsch;` | `CustomerSupplierIndustry       : brsch;` |
| `SalesDistrict                  : bzirk;` | `SalesDistrict                  : bzirk;` |
| `BillToParty                    : kunre;` | `BillToParty                    : kunre;` |
| `ShipToParty                    : kunwe;` | `ShipToParty                    : kunwe;` |
| `CustomerSupplierCorporateGroup : konzs;` | `CustomerSupplierCorporateGroup : konzs;` |
| `FinancialServicesProductGroup  : fincs_finsrvcsproductgroup;` | `FinancialServicesProductGroup  : fincs_finsrvcsproductgroup;` |
| `FinancialServicesBranch        : fincs_financialservicesbranch;` | `FinancialServicesBranch        : fincs_financialservicesbranch;` |
| `FinancialDataSource            : fincs_financialdatasource;` | `FinancialDataSource            : fincs_financialdatasource;` |
| `FinancialManagementArea        : fincs_financialmanagementarea;` | `FinancialManagementArea        : fincs_financialmanagementarea;` |
| `Fund                           : fincs_fund;` | `Fund                           : fincs_fund;` |
| `GrantID                        : fincs_grant;` | `GrantID                        : fincs_grant;` |
| `CnsldtnCashLedgerChartOfAccts  : fincs_cashledgerchartofaccts;` | `CnsldtnCashLedgerChartOfAccts  : fincs_cashledgerchartofaccts;` |
| `CashLedgerAccount              : fincs_cashledgeraccount;` | `CashLedgerAccount              : fincs_cashledgeraccount;` |
| `PartnerFund                    : fincs_partnerfund;` | `PartnerFund                    : fincs_partnerfund;` |
| `GHGScope                       : fincs_ghgscope;` | `GHGScope                       : fincs_ghgscope;` |
| `GHGCategory                    : fincs_ghgcategory;` | `GHGCategory                    : fincs_ghgcategory;` |
| `GHGScope2CalculationMethod     : fincs_ghgscp2calculationmethod;` | `GHGScope2CalculationMethod     : fincs_ghgscp2calculationmethod;` |
| `GHGScope2ContractualInstrument : fincs_ghgscp2cntrctlinstrument;` | `GHGScope2ContractualInstrument : fincs_ghgscp2cntrctlinstrument;` |
| `SustainabilityModeOfTransport  : fincs_sustmodeoftransport;` | `SustainabilityModeOfTransport  : fincs_sustmodeoftransport;` |
| `GHGDataQualityCharacteristic   : fincs_ghgdtaqltycharc;` | `GHGDataQualityCharacteristic   : fincs_ghgdtaqltycharc;` |
| `GHGEnergyClassification        : fincs_ghgenergyclassification;` | `GHGEnergyClassification        : fincs_ghgenergyclassification;` |
| `GHGEnergyMix                   : fincs_ghgenergymix;` | `GHGEnergyMix                   : fincs_ghgenergymix;` |
| `GHGEnergySourcingType          : fincs_ghgenergysourcingtype;` | `GHGEnergySourcingType          : fincs_ghgenergysourcingtype;` |
| `_DummyAssociation              : association to parent D_CnsldtnGrpJrnlEntrPostP on $projection.DummyKey = _DummyAssociation.DummyKey;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Consolidation Group JE line item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]

define abstract entity D_CnsldtnGrpJrnlEntrPostItemP
{
  key DummyKey                       : abap.char(1);
      ConsolidationPostingItem       : docln6;
      FinancialStatementItem         : fc_item;
      ConsolidationVersion           : fc_rvers;
      SubItem                        : fc_sitem;
      @Semantics.amount.currencyCode : 'LocalCurrency'
      AmountInLocalCurrency          : vlcur12;
      @Semantics.currencyCode        : true
      LocalCurrency                  : lcurr;
      @Semantics.amount.currencyCode : 'GroupCurrency'
      AmountInGroupCurrency          : vgcur12;
      @Semantics.currencyCode        : true
      GroupCurrency                  : gcurr;
      @Semantics.amount.currencyCode : 'TransactionCurrency'
      AmountInTransactionCurrency    : vtcur12;
      @Semantics.currencyCode        : true
      TransactionCurrency            : rtcur;
      PartnerConsolidationUnit       : fincs_partnerconsolidationunit;
      ConsolidationUnit              : fincs_consolidationunit;
      @Semantics.unitOfMeasure       : true
      BaseUnit                       : meins;
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Quantity                       : fincs_quan;
      Company                        : rcomp_d;
      CompanyCode                    : obukr;
      BusinessTransactionType        : glvor;
      ControllingArea                : kokrs;
      CostCenter                     : kostl;
      GLAccount                      : racct;
      ProfitCenter                   : prctr;
      BusinessArea                   : gsber;
      PartnerCostCenter              : skost;
      PartnerProfitCenter            : pprctr;
      AssignmentReference            : dzuonr;
      Segment                        : fb_segment;
      PartnerFunctionalArea          : sfkber;
      PartnerBusinessArea            : pargb;
      PartnerCompany                 : rassc;
      PartnerSegment                 : fb_psegment;
      OrderID                        : aufnr;
      Customer                       : kunnr;
      FunctionalArea                 : fkber;
      Supplier                       : lifnr;
      Material                       : matnr;
      Plant                          : werks_d;
      FinancialTransactionType       : rmvct;
      BillingDocumentType            : fkart;
      SalesOrganization              : vkorg;
      DistributionChannel            : vtweg;
      OrganizationDivision           : spart;
      SoldMaterial                   : fins_matnr_pa;
      MaterialGroup                  : fins_matkl_mm;
      ProductGroup                   : fins_matkl_pa;
      CustomerGroup                  : kdgrp;
      CustomerSupplierCountry        : land1_gp;
      CustomerSupplierIndustry       : brsch;
      SalesDistrict                  : bzirk;
      BillToParty                    : kunre;
      ShipToParty                    : kunwe;
      CustomerSupplierCorporateGroup : konzs;
      -- *industry-specific fields* --
      -- financial services --
      FinancialServicesProductGroup  : fincs_finsrvcsproductgroup;
      FinancialServicesBranch        : fincs_financialservicesbranch;
      FinancialDataSource            : fincs_financialdatasource;
      -- public sector --
      FinancialManagementArea        : fincs_financialmanagementarea;
      Fund                           : fincs_fund;
      GrantID                        : fincs_grant;
      CnsldtnCashLedgerChartOfAccts  : fincs_cashledgerchartofaccts;
      CashLedgerAccount              : fincs_cashledgeraccount;
      PartnerFund                    : fincs_partnerfund;
      -- greenhouse gas --
      GHGScope                       : fincs_ghgscope;
      GHGCategory                    : fincs_ghgcategory;
      GHGScope2CalculationMethod     : fincs_ghgscp2calculationmethod;
      GHGScope2ContractualInstrument : fincs_ghgscp2cntrctlinstrument;
      SustainabilityModeOfTransport  : fincs_sustmodeoftransport;
      GHGDataQualityCharacteristic   : fincs_ghgdtaqltycharc;
      GHGEnergyClassification        : fincs_ghgenergyclassification;
      GHGEnergyMix                   : fincs_ghgenergymix;
      GHGEnergySourcingType          : fincs_ghgenergysourcingtype;
      _DummyAssociation              : association to parent D_CnsldtnGrpJrnlEntrPostP on $projection.DummyKey = _DummyAssociation.DummyKey;
}
```
