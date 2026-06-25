---
name: I_COMPANYMARGINCUBEDST
description: Companymargincubedst
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - interface-view
  - component:CO-FIO-PA-2CL
  - lob:Controlling
---
# I_COMPANYMARGINCUBEDST

**Companymargincubedst**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `type: #DOC` | `type: #DOC` |
| `semantics: #PROPERTY` | `semantics: #PROPERTY` |
| `}` | `}` |
| `docprop` | `docprop` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Company Margin Cube'
@VDM.viewType: #BASIC
@ObjectModel.modelingPattern: #ANALYTICAL_DOCUMENT_STORE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DOCUMENT_STORE ]
@Analytics.dataCategory: #DOCSTORE
@Analytics.document.storageForEntity: [ 'I_COMPANYMARGINCUBE_2' ]
@Analytics.document.serviceClassName: 'CL_CELL_COMMENT_GENERIC_HDLR'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'DCU',
  quota: {
    maximumFields: 250,
    maximumBytes: 3000
  },
  dataSources: ['_persistence']
}
define view entity I_CompanyMarginCubeDSt
  as select from icompanymadsttab as _persistence
{
  @Analytics.document: {
    type: #DOC, 
    semantics: #ID
  }
  key docid,
  @Analytics.document: {
    type: #DOC, 
    semantics: #VERSION
  }
  key version,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TAG
  }
  doctag,
  @Analytics.document: {
    type: #DOC, 
    semantics: #QPROV
  }
  docqprov,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BillableControl'
  }
  tra_00001,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BillableControl'
  }
  sva_00001,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProviderContractItem'
  }
  tra_00002,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProviderContractItem'
  }
  sva_00002,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Plant'
  }
  tra_plant,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Plant'
  }
  sva_plant,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Plant'
  }
  svh_plant,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Plant'
  }
  hnm_plant,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Plant'
  }
  hno_plant,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Plant'
  }
  hio_plant,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Customer'
  }
  tra_customer,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Customer'
  }
  sva_customer,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Customer'
  }
  svh_customer,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Customer'
  }
  hnm_customer,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Customer'
  }
  hno_customer,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Customer'
  }
  hio_customer,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalPeriod'
  }
  tra_fiscalperiod,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalPeriod'
  }
  sva_fiscalperiod,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalPeriod'
  }
  svh_fiscalperiod,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalPeriod'
  }
  hnm_fiscalperiod,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalPeriod'
  }
  hno_fiscalperiod,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalPeriod'
  }
  hio_fiscalperiod,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PostingDate'
  }
  tra_postingdate,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PostingDate'
  }
  sva_postingdate,
  @Analytics.document: {
    type: #SVH, 
    reference: 'PostingDate'
  }
  svh_postingdate,
  @Analytics.document: {
    type: #HNM, 
    reference: 'PostingDate'
  }
  hnm_postingdate,
  @Analytics.document: {
    type: #HNO, 
    reference: 'PostingDate'
  }
  hno_postingdate,
  @Analytics.document: {
    type: #HIO, 
    reference: 'PostingDate'
  }
  hio_postingdate,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYear'
  }
  tra_fiscalyear,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYear'
  }
  sva_fiscalyear,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProfitCenter'
  }
  tra_profitcenter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProfitCenter'
  }
  sva_profitcenter,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ProfitCenter'
  }
  svh_profitcenter,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ProfitCenter'
  }
  hnm_profitcenter,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ProfitCenter'
  }
  hno_profitcenter,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ProfitCenter'
  }
  hio_profitcenter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ValuationArea'
  }
  tra_valuationarea,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ValuationArea'
  }
  sva_valuationarea,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocument'
  }
  tra_00003,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocument'
  }
  sva_00003,
  @Analytics.document: {
    type: #TRA, 
    reference: 'WBSElement'
  }
  tra_wbselement,
  @Analytics.document: {
    type: #SVA, 
    reference: 'WBSElement'
  }
  sva_wbselement,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SemanticTag'
  }
  tra_semantictag,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SemanticTag'
  }
  sva_semantictag,
  @Analytics.document: {
    type: #TRA, 
    reference: 'WBSElementExternalID'
  }
  tra_00004,
  @Analytics.document: {
    type: #SVA, 
    reference: 'WBSElementExternalID'
  }
  sva_00004,
  @Analytics.document: {
    type: #SVH, 
    reference: 'WBSElementExternalID'
  }
  svh_00004,
  @Analytics.document: {
    type: #HNM, 
    reference: 'WBSElementExternalID'
  }
  hnm_00004,
  @Analytics.document: {
    type: #HNO, 
    reference: 'WBSElementExternalID'
  }
  hno_00004,
  @Analytics.document: {
    type: #HIO, 
    reference: 'WBSElementExternalID'
  }
  hio_00004,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FunctionalCurrency'
  }
  tra_00005,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FunctionalCurrency'
  }
  sva_00005,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ChartOfAccounts'
  }
  tra_00006,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ChartOfAccounts'
  }
  sva_00006,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessSolutionOrderItem'
  }
  tra_00007,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessSolutionOrderItem'
  }
  sva_00007,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountAssignmentType'
  }
  tra_00008,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountAssignmentType'
  }
  sva_00008,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServicesRenderedDate'
  }
  tra_00009,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServicesRenderedDate'
  }
  sva_00009,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ServicesRenderedDate'
  }
  svh_00009,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ServicesRenderedDate'
  }
  hnm_00009,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ServicesRenderedDate'
  }
  hno_00009,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ServicesRenderedDate'
  }
  hio_00009,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesDistrict'
  }
  tra_salesdistrict,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesDistrict'
  }
  sva_salesdistrict,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SalesDistrict'
  }
  svh_salesdistrict,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SalesDistrict'
  }
  hnm_salesdistrict,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SalesDistrict'
  }
  hno_salesdistrict,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SalesDistrict'
  }
  hio_salesdistrict,
  @Analytics.document: {
    type: #TRA, 
    reference: '-C1'
  }
  tra_c1,
  @Analytics.document: {
    type: #SVA, 
    reference: '-C1'
  }
  sva_c1,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PersonnelNumber'
  }
  tra_00010,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PersonnelNumber'
  }
  sva_00010,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrder'
  }
  tra_salesorder,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrder'
  }
  sva_salesorder,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CostCenter'
  }
  tra_costcenter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CostCenter'
  }
  sva_costcenter,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CostCenter'
  }
  svh_costcenter,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CostCenter'
  }
  hnm_costcenter,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CostCenter'
  }
  hno_costcenter,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CostCenter'
  }
  hio_costcenter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProjectExternalID'
  }
  tra_00011,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProjectExternalID'
  }
  sva_00011,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Product'
  }
  tra_product,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Product'
  }
  sva_product,
  @Analytics.document: {
    type: #SVH, 
    reference: 'Product'
  }
  svh_product,
  @Analytics.document: {
    type: #HNM, 
    reference: 'Product'
  }
  hnm_product,
  @Analytics.document: {
    type: #HNO, 
    reference: 'Product'
  }
  hno_product,
  @Analytics.document: {
    type: #HIO, 
    reference: 'Product'
  }
  hio_product,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocCreatedByUser'
  }
  tra_00012,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocCreatedByUser'
  }
  sva_00012,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Currency'
  }
  tra_currency,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Currency'
  }
  sva_currency,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GLAccount'
  }
  tra_glaccount,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GLAccount'
  }
  sva_glaccount,
  @Analytics.document: {
    type: #SVH, 
    reference: 'GLAccount'
  }
  svh_glaccount,
  @Analytics.document: {
    type: #HNM, 
    reference: 'GLAccount'
  }
  hnm_glaccount,
  @Analytics.document: {
    type: #HNO, 
    reference: 'GLAccount'
  }
  hno_glaccount,
  @Analytics.document: {
    type: #HIO, 
    reference: 'GLAccount'
  }
  hio_glaccount,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SourceLedger'
  }
  tra_sourceledger,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SourceLedger'
  }
  sva_sourceledger,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FunctionalArea'
  }
  tra_functionalarea,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FunctionalArea'
  }
  sva_functionalarea,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FunctionalArea'
  }
  svh_functionalarea,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FunctionalArea'
  }
  hnm_functionalarea,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FunctionalArea'
  }
  hno_functionalarea,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FunctionalArea'
  }
  hio_functionalarea,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SubLedgerAcctLineItemType'
  }
  tra_00013,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SubLedgerAcctLineItemType'
  }
  sva_00013,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FinancialAccountType'
  }
  tra_00014,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FinancialAccountType'
  }
  sva_00014,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Segment'
  }
  tra_segment,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Segment'
  }
  sva_segment,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BillToParty'
  }
  tra_billtoparty,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BillToParty'
  }
  sva_billtoparty,
  @Analytics.document: {
    type: #SVH, 
    reference: 'BillToParty'
  }
  svh_billtoparty,
  @Analytics.document: {
    type: #HNM, 
    reference: 'BillToParty'
  }
  hnm_billtoparty,
  @Analytics.document: {
    type: #HNO, 
    reference: 'BillToParty'
  }
  hno_billtoparty,
  @Analytics.document: {
    type: #HIO, 
    reference: 'BillToParty'
  }
  hio_billtoparty,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrganization'
  }
  tra_00015,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrganization'
  }
  sva_00015,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SalesOrganization'
  }
  svh_00015,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SalesOrganization'
  }
  hnm_00015,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SalesOrganization'
  }
  hno_00015,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SalesOrganization'
  }
  hio_00015,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AssetClass'
  }
  tra_assetclass,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AssetClass'
  }
  sva_assetclass,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CurrencyField'
  }
  tra_currencyfield,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CurrencyField'
  }
  sva_currencyfield,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerGroup'
  }
  tra_customergroup,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerGroup'
  }
  sva_customergroup,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerGroup'
  }
  svh_customergroup,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerGroup'
  }
  hnm_customergroup,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerGroup'
  }
  hno_customergroup,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerGroup'
  }
  hio_customergroup,
  @Analytics.document: {
    type: #TRA, 
    reference: 'DistributionChannel'
  }
  tra_00016,
  @Analytics.document: {
    type: #SVA, 
    reference: 'DistributionChannel'
  }
  sva_00016,
  @Analytics.document: {
    type: #SVH, 
    reference: 'DistributionChannel'
  }
  svh_00016,
  @Analytics.document: {
    type: #HNM, 
    reference: 'DistributionChannel'
  }
  hnm_00016,
  @Analytics.document: {
    type: #HNO, 
    reference: 'DistributionChannel'
  }
  hno_00016,
  @Analytics.document: {
    type: #HIO, 
    reference: 'DistributionChannel'
  }
  hio_00016,
  @Analytics.document: {
    type: #TRA, 
    reference: 'OrganizationDivision'
  }
  tra_00017,
  @Analytics.document: {
    type: #SVA, 
    reference: 'OrganizationDivision'
  }
  sva_00017,
  @Analytics.document: {
    type: #SVH, 
    reference: 'OrganizationDivision'
  }
  svh_00017,
  @Analytics.document: {
    type: #HNM, 
    reference: 'OrganizationDivision'
  }
  hnm_00017,
  @Analytics.document: {
    type: #HNO, 
    reference: 'OrganizationDivision'
  }
  hno_00017,
  @Analytics.document: {
    type: #HIO, 
    reference: 'OrganizationDivision'
  }
  hio_00017,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocumentItem'
  }
  tra_00018,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocumentItem'
  }
  sva_00018,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessSolutionOrder'
  }
  tra_00019,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessSolutionOrder'
  }
  sva_00019,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GlobalCurrency'
  }
  tra_globalcurrency,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GlobalCurrency'
  }
  sva_globalcurrency,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CompanyCode'
  }
  tra_companycode,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CompanyCode'
  }
  sva_companycode,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CompanyCode'
  }
  svh_companycode,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CompanyCode'
  }
  hnm_companycode,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CompanyCode'
  }
  hno_companycode,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CompanyCode'
  }
  hio_companycode,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ShipToParty'
  }
  tra_shiptoparty,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ShipToParty'
  }
  sva_shiptoparty,
  @Analytics.document: {
    type: #SVH, 
    reference: 'ShipToParty'
  }
  svh_shiptoparty,
  @Analytics.document: {
    type: #HNM, 
    reference: 'ShipToParty'
  }
  hnm_shiptoparty,
  @Analytics.document: {
    type: #HNO, 
    reference: 'ShipToParty'
  }
  hno_shiptoparty,
  @Analytics.document: {
    type: #HIO, 
    reference: 'ShipToParty'
  }
  hio_shiptoparty,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocument'
  }
  tra_00020,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocument'
  }
  sva_00020,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ControllingArea'
  }
  tra_00021,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ControllingArea'
  }
  sva_00021,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SoldProductGroup'
  }
  tra_00022,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SoldProductGroup'
  }
  sva_00022,
  @Analytics.document: {
    type: #TRA, 
    reference: 'AccountingDocumentType'
  }
  tra_00023,
  @Analytics.document: {
    type: #SVA, 
    reference: 'AccountingDocumentType'
  }
  sva_00023,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Equipment'
  }
  tra_equipment,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Equipment'
  }
  sva_equipment,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Supplier'
  }
  tra_supplier,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Supplier'
  }
  sva_supplier,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SoldProduct'
  }
  tra_soldproduct,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SoldProduct'
  }
  sva_soldproduct,
  @Analytics.document: {
    type: #SVH, 
    reference: 'SoldProduct'
  }
  svh_soldproduct,
  @Analytics.document: {
    type: #HNM, 
    reference: 'SoldProduct'
  }
  hnm_soldproduct,
  @Analytics.document: {
    type: #HNO, 
    reference: 'SoldProduct'
  }
  hno_soldproduct,
  @Analytics.document: {
    type: #HIO, 
    reference: 'SoldProduct'
  }
  hio_soldproduct,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCostCtrActivityType'
  }
  tra_00024,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCostCtrActivityType'
  }
  sva_00024,
  @Analytics.document: {
    type: #SVH, 
    reference: 'PartnerCostCtrActivityType'
  }
  svh_00024,
  @Analytics.document: {
    type: #HNM, 
    reference: 'PartnerCostCtrActivityType'
  }
  hnm_00024,
  @Analytics.document: {
    type: #HNO, 
    reference: 'PartnerCostCtrActivityType'
  }
  hno_00024,
  @Analytics.document: {
    type: #HIO, 
    reference: 'PartnerCostCtrActivityType'
  }
  hio_00024,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearPeriod'
  }
  tra_00025,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearPeriod'
  }
  sva_00025,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalYearPeriod'
  }
  svh_00025,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalYearPeriod'
  }
  hnm_00025,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalYearPeriod'
  }
  hno_00025,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalYearPeriod'
  }
  hio_00025,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ProviderContract'
  }
  tra_00026,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ProviderContract'
  }
  sva_00026,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearQuarter'
  }
  tra_00027,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearQuarter'
  }
  sva_00027,
  @Analytics.document: {
    type: #SVH, 
    reference: 'FiscalYearQuarter'
  }
  svh_00027,
  @Analytics.document: {
    type: #HNM, 
    reference: 'FiscalYearQuarter'
  }
  hnm_00027,
  @Analytics.document: {
    type: #HNO, 
    reference: 'FiscalYearQuarter'
  }
  hno_00027,
  @Analytics.document: {
    type: #HIO, 
    reference: 'FiscalYearQuarter'
  }
  hio_00027,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCompanyCode'
  }
  tra_00028,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCompanyCode'
  }
  sva_00028,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ReferenceDocumentType'
  }
  tra_00029,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ReferenceDocumentType'
  }
  sva_00029,
  @Analytics.document: {
    type: #TRA, 
    reference: 'Ledger'
  }
  tra_ledger,
  @Analytics.document: {
    type: #SVA, 
    reference: 'Ledger'
  }
  sva_ledger,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalYearVariant'
  }
  tra_00030,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalYearVariant'
  }
  sva_00030,
  @Analytics.document: {
    type: #TRA, 
    reference: 'ServiceDocumentType'
  }
  tra_00031,
  @Analytics.document: {
    type: #SVA, 
    reference: 'ServiceDocumentType'
  }
  sva_00031,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerSupplierCountry'
  }
  tra_00032,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerSupplierCountry'
  }
  sva_00032,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerSupplierCountry'
  }
  svh_00032,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerSupplierCountry'
  }
  hnm_00032,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerSupplierCountry'
  }
  hno_00032,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerSupplierCountry'
  }
  hio_00032,
  @Analytics.document: {
    type: #TRA, 
    reference: 'FiscalQuarter'
  }
  tra_fiscalquarter,
  @Analytics.document: {
    type: #SVA, 
    reference: 'FiscalQuarter'
  }
  sva_fiscalquarter,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesOrderItem'
  }
  tra_salesorderitem,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesOrderItem'
  }
  sva_salesorderitem,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BusinessTransactionType'
  }
  tra_00033,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BusinessTransactionType'
  }
  sva_00033,
  @Analytics.document: {
    type: #SVH, 
    reference: 'BusinessTransactionType'
  }
  svh_00033,
  @Analytics.document: {
    type: #HNM, 
    reference: 'BusinessTransactionType'
  }
  hnm_00033,
  @Analytics.document: {
    type: #HNO, 
    reference: 'BusinessTransactionType'
  }
  hno_00033,
  @Analytics.document: {
    type: #HIO, 
    reference: 'BusinessTransactionType'
  }
  hio_00033,
  @Analytics.document: {
    type: #TRA, 
    reference: 'PartnerCompany'
  }
  tra_partnercompany,
  @Analytics.document: {
    type: #SVA, 
    reference: 'PartnerCompany'
  }
  sva_partnercompany,
  @Analytics.document: {
    type: #TRA, 
    reference: 'TimeSheetOvertimeCategory'
  }
  tra_00034,
  @Analytics.document: {
    type: #SVA, 
    reference: 'TimeSheetOvertimeCategory'
  }
  sva_00034,
  @Analytics.document: {
    type: #TRA, 
    reference: 'LedgerFiscalYear'
  }
  tra_00035,
  @Analytics.document: {
    type: #SVA, 
    reference: 'LedgerFiscalYear'
  }
  sva_00035,
  @Analytics.document: {
    type: #TRA, 
    reference: 'GLAccountHierarchy'
  }
  tra_00036,
  @Analytics.document: {
    type: #SVA, 
    reference: 'GLAccountHierarchy'
  }
  sva_00036,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CustomerSupplierIndustry'
  }
  tra_00037,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CustomerSupplierIndustry'
  }
  sva_00037,
  @Analytics.document: {
    type: #SVH, 
    reference: 'CustomerSupplierIndustry'
  }
  svh_00037,
  @Analytics.document: {
    type: #HNM, 
    reference: 'CustomerSupplierIndustry'
  }
  hnm_00037,
  @Analytics.document: {
    type: #HNO, 
    reference: 'CustomerSupplierIndustry'
  }
  hno_00037,
  @Analytics.document: {
    type: #HIO, 
    reference: 'CustomerSupplierIndustry'
  }
  hio_00037,
  @Analytics.document: {
    type: #TRA, 
    reference: 'SalesDocument'
  }
  tra_salesdocument,
  @Analytics.document: {
    type: #SVA, 
    reference: 'SalesDocument'
  }
  sva_salesdocument,
  @Analytics.document: {
    type: #TRA, 
    reference: 'OrderID'
  }
  tra_orderid,
  @Analytics.document: {
    type: #SVA, 
    reference: 'OrderID'
  }
  sva_orderid,
  @Analytics.document: {
    type: #SVH, 
    reference: 'OrderID'
  }
  svh_orderid,
  @Analytics.document: {
    type: #HNM, 
    reference: 'OrderID'
  }
  hnm_orderid,
  @Analytics.document: {
    type: #HNO, 
    reference: 'OrderID'
  }
  hno_orderid,
  @Analytics.document: {
    type: #HIO, 
    reference: 'OrderID'
  }
  hio_orderid,
  @Analytics.document: {
    type: #TRA, 
    reference: 'CompanyCodeCurrency'
  }
  tra_00038,
  @Analytics.document: {
    type: #SVA, 
    reference: 'CompanyCodeCurrency'
  }
  sva_00038,
  @Analytics.document: {
    type: #TRA, 
    reference: 'BaseUnit'
  }
  tra_baseunit,
  @Analytics.document: {
    type: #SVA, 
    reference: 'BaseUnit'
  }
  sva_baseunit,
  @Analytics.document: {
    type: #TRA, 
    reference: 'LedgerGLLineItem'
  }
  tra_00039,
  @Analytics.document: {
    type: #SVA, 
    reference: 'LedgerGLLineItem'
  }
  sva_00039,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TYPE
  }
  doctype,
  @Analytics.document: {
    type: #DOC, 
    semantics: #OWNER
  }
  owner,
  @Analytics.document: {
    type: #DOC, 
    semantics: #INFOPROV
  }
  infoprov,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SVA_INFOPROV
  }
  sva_infoprov,
  @Analytics.document: {
    type: #DOC, 
    semantics: #KYFNM
  }
  kyfnm,
  @Analytics.document: {
    type: #DOC, 
    semantics: #STATUS
  }
  docstat,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SESSION_ID
  }
  session_id,
  @Analytics.document: {
    type: #DOC, 
    semantics: #TIMESTAMP
  }
  timestamp,
  @Analytics.document: {
    type: #DOC, 
    semantics: #DOCUMENT
  }
  document,
  @Analytics.document: {
    type: #DOC, 
    semantics: #SELECTIONS
  }
  seldr,
  @Analytics.document: {
    type: #DOC, 
    semantics: #PROPERTY
  }
  docprop
}
```
