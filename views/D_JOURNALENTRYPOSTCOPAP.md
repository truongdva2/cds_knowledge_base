---
name: D_JOURNALENTRYPOSTCOPAP
description: D Journal EntryPOSTCOPAP
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTCOPAP

**D Journal EntryPOSTCOPAP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Customer                 :kunnr;` | `Customer                 :kunnr;` |
| `CustomerGroup            :kdgrp;` | `CustomerGroup            :kdgrp;` |
| `CustomerSupplierIndustry :brsch;` | `CustomerSupplierIndustry :brsch;` |
| `CustomerSupplierCountry  :land1;` | `CustomerSupplierCountry  :land1;` |
| `SalesDistrict            :bzirk;` | `SalesDistrict            :bzirk;` |
| `SoldProduct              :artnr;` | `SoldProduct              :artnr;` |
| `SoldProductGroup         :matkl;` | `SoldProductGroup         :matkl;` |
| `SalesOrganization        :vkorg;` | `SalesOrganization        :vkorg;` |
| `DistributionChannel      :vtweg;` | `DistributionChannel      :vtweg;` |
| `Division                 :spart;` | `Division                 :spart;` |
| `BillToParty              :kunre;` | `BillToParty              :kunre;` |
| `ShipToParty              :kunwe;` | `ShipToParty              :kunwe;` |
| `WBSElement               :ps_posid_edit;` | `WBSElement               :ps_posid_edit;` |
| `FunctionalArea           :fkber;` | `FunctionalArea           :fkber;` |
| `ServiceDocumentType      :fco_srvdoc_type;` | `ServiceDocumentType      :fco_srvdoc_type;` |
| `ServiceDocument          :fco_srvdoc_id;` | `ServiceDocument          :fco_srvdoc_id;` |
| `ServiceDocumentItem      :fco_srvdoc_item_id;` | `ServiceDocumentItem      :fco_srvdoc_item_id;` |
| `BillingDocumentType      :fkart;` | `BillingDocumentType      :fkart;` |
| `SalesOrder               :vbeln_va;` | `SalesOrder               :vbeln_va;` |
| `SalesOrderItem           :posnr_va;` | `SalesOrderItem           :posnr_va;` |
| `Plant                    :werks_ext;` | `Plant                    :werks_ext;` |
| `CostCenter               :kostl;` | `CostCenter               :kostl;` |
| `ProfitCenter             :prctr;` | `ProfitCenter             :prctr;` |
| `_JournalEntryPost        : association to parent D_JournalEntryPostGLItemP ;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry Profitability Supplement'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostCOPAP
{
  //key DummyKey                 :abap.char(1);
      Customer                 :kunnr;
      CustomerGroup            :kdgrp;
      CustomerSupplierIndustry :brsch;
      CustomerSupplierCountry  :land1;
      SalesDistrict            :bzirk;
      SoldProduct              :artnr;
      SoldProductGroup         :matkl;
      SalesOrganization        :vkorg;
      DistributionChannel      :vtweg;
      Division                 :spart;
      BillToParty              :kunre;
      ShipToParty              :kunwe;
      WBSElement               :ps_posid_edit;
      FunctionalArea           :fkber;
      ServiceDocumentType      :fco_srvdoc_type;
      ServiceDocument          :fco_srvdoc_id;
      ServiceDocumentItem      :fco_srvdoc_item_id;
      BillingDocumentType      :fkart;
      SalesOrder               :vbeln_va;
      SalesOrderItem           :posnr_va;
      Plant                    :werks_ext;
      CostCenter               :kostl;
      ProfitCenter             :prctr;
      _JournalEntryPost        : association to parent D_JournalEntryPostGLItemP ;
 
}
```
