---
name: D_BLGDCCRTEFRMEXTBLBLDOCITMIP
description: D Blgdccrtefrmextblbldocitmip
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BLGDCCRTEFRMEXTBLBLDOCITMIP

**D Blgdccrtefrmextblbldocitmip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceDocumentItem        : sdbil_odata_src_doc_item; //Mandatory` | `ReferenceDocumentItem        : sdbil_odata_src_doc_item; //Mandatory` |
| `SalesDocumentType            : auart; //Mandatory` | `SalesDocumentType            : auart; //Mandatory` |
| `SalesDocumentItemCategory    : sales_doc_item_category; //Mandatory` | `SalesDocumentItemCategory    : sales_doc_item_category; //Mandatory` |
| `ReferenceDocumentItemText    : billing_doc_request_item_text;` | `ReferenceDocumentItemText    : billing_doc_request_item_text;` |
| `BillingDocumentType          : sdbil_odata_bdr_type; //Mandatory` | `BillingDocumentType          : sdbil_odata_bdr_type; //Mandatory` |
| `SalesOrganization            : vkorg; //Mandatory` | `SalesOrganization            : vkorg; //Mandatory` |
| `DistributionChannel          : vtweg; //Mandatory` | `DistributionChannel          : vtweg; //Mandatory` |
| `Division                     : spart; //Mandatory` | `Division                     : spart; //Mandatory` |
| `BillingDocumentDate          : fkdat;` | `BillingDocumentDate          : fkdat;` |
| `SoldToParty                  : kunag; //Mandatory` | `SoldToParty                  : kunag; //Mandatory` |
| `TransactionCurrency          : waerk; //Mandatory` | `TransactionCurrency          : waerk; //Mandatory` |
| `TaxDepartureCountry          : landtx;` | `TaxDepartureCountry          : landtx;` |
| `PurchaseOrderByCustomer      : bstkd;` | `PurchaseOrderByCustomer      : bstkd;` |
| `CustomerPaymentTerms         : dzterm;` | `CustomerPaymentTerms         : dzterm;` |
| `PaymentMethod                : schzw_bseg;` | `PaymentMethod                : schzw_bseg;` |
| `Product                      : productnumber; //Mandatory` | `Product                      : productnumber; //Mandatory` |
| `IncotermsClassification      : inco1;` | `IncotermsClassification      : inco1;` |
| `IncotermsTransferLocation    : inco2;` | `IncotermsTransferLocation    : inco2;` |
| `IncotermsVersion             : incov;` | `IncotermsVersion             : incov;` |
| `IncotermsLocation1           : inco2_l;` | `IncotermsLocation1           : inco2_l;` |
| `IncotermsLocation2           : inco3_l;` | `IncotermsLocation2           : inco3_l;` |
| `MatlAccountAssignmentGroup   : ktgrm;` | `MatlAccountAssignmentGroup   : ktgrm;` |
| `BillingRequestedQuantity     : billing_quantity; //Mandatory` | `BillingRequestedQuantity     : billing_quantity; //Mandatory` |
| `BillingRequestedQuantityUnit : billing_quantity_unit; //Mandatory` | `BillingRequestedQuantityUnit : billing_quantity_unit; //Mandatory` |
| `ServicesRenderedDate         : fbuda;` | `ServicesRenderedDate         : fbuda;` |
| `PricingDate                  : prsdt;` | `PricingDate                  : prsdt;` |
| `PriceDetnExchangeRate        : kursk_not_converted;` | `PriceDetnExchangeRate        : kursk_not_converted;` |
| `TaxJurisdiction              : txjcd;` | `TaxJurisdiction              : txjcd;` |
| `ProductTaxClassification1    : taxm1;` | `ProductTaxClassification1    : taxm1;` |
| `Plant                        : werks_d; //Mandatory` | `Plant                        : werks_d; //Mandatory` |
| `DepartureCountry             : aland;` | `DepartureCountry             : aland;` |
| `ProfitCenter                 : prctr;` | `ProfitCenter                 : prctr;` |
| `ContractAccount              : corr_vkont_kk;` | `ContractAccount              : corr_vkont_kk;` |
| `CostCenter                   : kostl;` | `CostCenter                   : kostl;` |
| `WBSElementInternalID         : ps_s4_pspnr; // Db: ps_psp_pnr ?` | `WBSElementInternalID         : ps_s4_pspnr; // Db: ps_psp_pnr ?` |
| `SEPAMandate                  : sepa_mndid;` | `SEPAMandate                  : sepa_mndid;` |
| `CustomerTaxClassification1   : taxk1;` | `CustomerTaxClassification1   : taxk1;` |
| `_PricingElement              : association [0..*] to D_BillgDocCrteFrmExtPrgElmIP on 1 = 0;` | *Association* |
| `_Text                        : association [0..*] to D_BillgDocCrteFrmExtTxtIP on 1 = 0;` | *Association* |
| `_Partner                     : association [0..*] to D_BillgDocCrteFrmExtPartnerIP on 1 = 0;` | *Association* |
| `_DummyAssociation            : association to parent D_BlgDcCrteFrmExtBllbleDocIP; //standardized association` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Billing Document Create From External Data Item - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true
define abstract entity D_BlgDcCrteFrmExtBlblDocItmIP

{
  ReferenceDocumentItem        : sdbil_odata_src_doc_item; //Mandatory

  SalesDocumentType            : auart; //Mandatory

  SalesDocumentItemCategory    : sales_doc_item_category; //Mandatory

  @Semantics.text              : true
  ReferenceDocumentItemText    : billing_doc_request_item_text;

  BillingDocumentType          : sdbil_odata_bdr_type; //Mandatory

  SalesOrganization            : vkorg; //Mandatory
  DistributionChannel          : vtweg; //Mandatory
  Division                     : spart; //Mandatory

  BillingDocumentDate          : fkdat;

  SoldToParty                  : kunag; //Mandatory

  @Semantics.currencyCode      : true
  TransactionCurrency          : waerk; //Mandatory

  TaxDepartureCountry          : landtx;

  PurchaseOrderByCustomer      : bstkd;

  CustomerPaymentTerms         : dzterm;

  PaymentMethod                : schzw_bseg;

  Product                      : productnumber; //Mandatory

  IncotermsClassification      : inco1;

  IncotermsTransferLocation    : inco2;

  IncotermsVersion             : incov;

  IncotermsLocation1           : inco2_l;

  IncotermsLocation2           : inco3_l;

  MatlAccountAssignmentGroup   : ktgrm;

  @Semantics.valueRange.minimum: '0'
  @Semantics.quantity.unitOfMeasure: 'BillingRequestedQuantityUnit'
  BillingRequestedQuantity     : billing_quantity; //Mandatory
  @Semantics.unitOfMeasure     : true //?
  BillingRequestedQuantityUnit : billing_quantity_unit; //Mandatory

  ServicesRenderedDate         : fbuda;

  PricingDate                  : prsdt;

  PriceDetnExchangeRate        : kursk_not_converted;

  TaxJurisdiction              : txjcd;

  ProductTaxClassification1    : taxm1;

  Plant                        : werks_d; //Mandatory

  DepartureCountry             : aland;

  ProfitCenter                 : prctr;

  ContractAccount              : corr_vkont_kk;

  CostCenter                   : kostl;

  WBSElementInternalID         : ps_s4_pspnr; // Db: ps_psp_pnr ?

  SEPAMandate                  : sepa_mndid;

  CustomerTaxClassification1   : taxk1;

  _PricingElement              : association [0..*] to D_BillgDocCrteFrmExtPrgElmIP on 1 = 0;

  _Text                        : association [0..*] to D_BillgDocCrteFrmExtTxtIP on 1 = 0;

  _Partner                     : association [0..*] to D_BillgDocCrteFrmExtPartnerIP on 1 = 0;

  _DummyAssociation            : association to parent D_BlgDcCrteFrmExtBllbleDocIP; //standardized association

}
```
