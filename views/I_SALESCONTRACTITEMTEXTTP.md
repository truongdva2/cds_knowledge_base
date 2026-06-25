---
name: I_SALESCONTRACTITEMTEXTTP
description: Salescontractitemtexttp
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - sales-contract
  - contract
  - text
  - item-level
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTITEMTEXTTP

**Salescontractitemtexttp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key SalesContractItemText.SalesContract` | `SalesContractItemText.SalesContract` |
| `key SalesContractItemText.SalesContractItem` | `SalesContractItemText.SalesContractItem` |
| `key SalesContractItemText.Language` | `SalesContractItemText.Language` |
| `key SalesContractItemText.LongTextID` | `SalesContractItemText.LongTextID` |
| `SalesContractItemText.LongTextIDForEdit` | `SalesContractItemText.LongTextIDForEdit` |
| `SalesContractItemText.LanguageForEdit` | `SalesContractItemText.LanguageForEdit` |
| `SalesContractItemText.LongText` | `SalesContractItemText.LongText` |
| `SalesContractItemText.SalesContractType` | `SalesContractItemText.SalesContractType` |
| `SalesContractItemText.SalesOrganization` | `SalesContractItemText.SalesOrganization` |
| `SalesContractItemText.DistributionChannel` | `SalesContractItemText.DistributionChannel` |
| `SalesContractItemText.OrganizationDivision` | `SalesContractItemText.OrganizationDivision` |
| `_Item          : redirected to parent I_SalesContractItemTP` | *Association* |
| `_SalesContract : redirected to I_SalesContractTP` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item - Text TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesContract', 'SalesContractItem', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesContractItemTextTP
  as projection on R_SalesContractItemTextTP as SalesContractItemText
{
  key SalesContractItemText.SalesContract,
  key SalesContractItemText.SalesContractItem,
      @Semantics.language:true
  key SalesContractItemText.Language,
  key SalesContractItemText.LongTextID,

      @ObjectModel.editableFieldFor: 'LongTextID'
      SalesContractItemText.LongTextIDForEdit,
      @Semantics.language:true
      @ObjectModel.editableFieldFor: 'Language'
      SalesContractItemText.LanguageForEdit,
      @Semantics.text:true
      SalesContractItemText.LongText,

      //    DCL
      @Consumption.hidden: true
      SalesContractItemText.SalesContractType,
      @Consumption.hidden: true
      SalesContractItemText.SalesOrganization,
      @Consumption.hidden: true
      SalesContractItemText.DistributionChannel,
      @Consumption.hidden: true
      SalesContractItemText.OrganizationDivision,

      //Composition
      _Item          : redirected to parent I_SalesContractItemTP,
      _SalesContract : redirected to I_SalesContractTP

}
```
