---
name: D_JOURNALENTRYPOSTGLITEMP
description: D Journal EntryPOSTGLITEMP
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
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYPOSTGLITEMP

**D Journal EntryPOSTGLITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `unitOfMeasure: 'BaseUnit'} }` | `unitOfMeasure: 'BaseUnit'} }` |
| `Quantity                     :menge_d;` | `Quantity                     :menge_d;` |
| `IsNotCashDiscountLiable      :xskrl;` | `IsNotCashDiscountLiable      :xskrl;` |
| `PartnerCompany               :rassc;` | `PartnerCompany               :rassc;` |
| `BusinessPlace                :acpi_branch;` | `BusinessPlace                :acpi_branch;` |
| `ValueDate                    :valut;` | `ValueDate                    :valut;` |
| `HouseBank                    :hbkid;` | `HouseBank                    :hbkid;` |
| `HouseBankAccount             :hktid;` | `HouseBankAccount             :hktid;` |
| `ProfitCenter                 :prctr;` | `ProfitCenter                 :prctr;` |
| `PartnerProfitCenter          :pprctr;` | `PartnerProfitCenter          :pprctr;` |
| `Segment                      :fb_segment;` | `Segment                      :fb_segment;` |
| `PartnerSegment               :fb_psegment;` | `PartnerSegment               :fb_psegment;` |
| `CostCenter                   :kostl;` | `CostCenter                   :kostl;` |
| `CostCtrActivityType          :lstar;` | `CostCtrActivityType          :lstar;` |
| `WBSElement                   :ps_posid_edit;` | `WBSElement                   :ps_posid_edit;` |
| `MasterFixedAsset             :anln1;` | `MasterFixedAsset             :anln1;` |
| `FixedAsset                   :anln2;` | `FixedAsset                   :anln2;` |
| `SalesOrder                   :kdauf;` | `SalesOrder                   :kdauf;` |
| `SalesOrderItem               :kdpos;` | `SalesOrderItem               :kdpos;` |
| `FunctionalArea               :fkber;` | `FunctionalArea               :fkber;` |
| `ServiceDocumentType          :fco_srvdoc_type;` | `ServiceDocumentType          :fco_srvdoc_type;` |
| `ServiceDocument              :fco_srvdoc_id;` | `ServiceDocument              :fco_srvdoc_id;` |
| `ServiceDocumentItem          :fco_srvdoc_item_id;` | `ServiceDocumentItem          :fco_srvdoc_item_id;` |
| `PersonnelNumber              :pernr_d;` | `PersonnelNumber              :pernr_d;` |
| `WorkItem                     :/cpd/pfp_workitem_id;` | `WorkItem                     :/cpd/pfp_workitem_id;` |
| `OrderID                      :aufnr;` | `OrderID                      :aufnr;` |
| `JointVenture                 :jv_name;` | `JointVenture                 :jv_name;` |
| `JointVentureRecoveryCode        :jv_recind;` | `JointVentureRecoveryCode        :jv_recind;` |
| `JointVentureEquityGroup         :jv_egroup;` | `JointVentureEquityGroup         :jv_egroup;` |
| `FinancialServicesProductGroup   :ffs_product_group;` | `FinancialServicesProductGroup   :ffs_product_group;` |
| `FinancialServicesBranch         :ffs_branch_id;` | `FinancialServicesBranch         :ffs_branch_id;` |
| `FinancialDataSource          :ffs_datasource_id;` | `FinancialDataSource          :ffs_datasource_id;` |
| `_CurrencyAmount              : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;` | *Association* |
| `_JournalEntryPost            : association to parent D_JournalEntryPostParameter;` | *Association* |
| `_ProfitabilitySupplement     : composition [0..1] of D_JournalEntryPostCOPAP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry GL Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryPostGLItemP
{
  //key DummyKey                     :abap.char(1);
      GLAccountLineItem            :docln6;
      ItemGroup                    :logvo;
      CompanyCode                  :bukrs;
      GLAccount                    :hkont;
      DocumentItemText             :sgtxt;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3;
      OplAcctgDocItmCntrySpcfcRef1 :fac_glo_ref1;
      AssignmentReference          :acpi_zuonr;
      FinancialTransactionType     :rmvct;
      TaxCode                      :mwskz;
      TaxJurisdiction              :txjcd;
      TaxItemAcctgDocItemRef       :taxps;
      TaxCountry                   :fot_tax_country;
      Plant                        :werks_d;
      Material                     :matnr40;
      @Semantics.unitOfMeasure     :true
      BaseUnit                     :meins;
      @Semantics                   : { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity                     :menge_d;
      IsNotCashDiscountLiable      :xskrl;
      PartnerCompany               :rassc;
      BusinessPlace                :acpi_branch;
      ValueDate                    :valut;
      HouseBank                    :hbkid;
      HouseBankAccount             :hktid;
      ProfitCenter                 :prctr;
      PartnerProfitCenter          :pprctr;
      Segment                      :fb_segment;
      PartnerSegment               :fb_psegment;
      CostCenter                   :kostl;
      CostCtrActivityType          :lstar;
      WBSElement                   :ps_posid_edit;
      MasterFixedAsset             :anln1;
      FixedAsset                   :anln2;
      SalesOrder                   :kdauf;
      SalesOrderItem               :kdpos;
      FunctionalArea               :fkber;
      ServiceDocumentType          :fco_srvdoc_type;
      ServiceDocument              :fco_srvdoc_id;
      ServiceDocumentItem          :fco_srvdoc_item_id;
      PersonnelNumber              :pernr_d;
      WorkItem                     :/cpd/pfp_workitem_id;   
      OrderID                      :aufnr;
      JointVenture                 :jv_name;
      JointVentureRecoveryCode        :jv_recind;
      JointVentureEquityGroup         :jv_egroup;   
      FinancialServicesProductGroup   :ffs_product_group;
      FinancialServicesBranch         :ffs_branch_id;
      FinancialDataSource          :ffs_datasource_id;  
      _CurrencyAmount              : association [0..*] to D_JournalEntryPostCurrencyAmtP on 1 = 1;
      _JournalEntryPost            : association to parent D_JournalEntryPostParameter;
      _ProfitabilitySupplement     : composition [0..1] of D_JournalEntryPostCOPAP;

}
```
