---
name: C_TRDCMPLNCDOCITMLICASSGMT
description: Trdcmplncdocitmlicassgmt
app_component: FT-ITR-TRC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-TRC
  - consumption-view
  - component:FT-ITR-TRC
  - lob:Other
---
# C_TRDCMPLNCDOCITMLICASSGMT

**Trdcmplncdocitmlicassgmt**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key Item.TrdCmplncDocItemUUID` | `Item.TrdCmplncDocItemUUID` |
| `key TrdCmplncLicenseUUID` | `TrdCmplncLicenseUUID` |
| `_DocItem.ReferenceDocumentCategory` | *Association* |
| `_DocItem.ReferenceDocument` | *Association* |
| `_DocItem.ReferenceDocumentItem` | *Association* |
| `_DocItem.CompanyCode` | *Association* |
| `_License.LegalRegulation` | *Association* |
| `_License.TrdCmplncLicenseType` | *Association* |
| `_License.TrdCmplncLicenseOwner` | *Association* |
| `_License.TrdCmplncLicenseCategory` | *Association* |
| `_License.TrdCmplncLicense` | *Association* |
| `_License.ExtTrdCmplncLicense` | *Association* |
| `_License.TrdCmplncLicenseRemark` | *Association* |
| `_License.TrdCmplncLicenseStatus` | *Association* |
| `_License.ValidityStartDate` | *Association* |
| `_License.ValidityEndDate` | *Association* |
| `_DocItem` | *Association* |
| `_License` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocItem` | `I_TrdCmplncDocItemBasic` | [0..1] |
| `_License` | `I_TrdCmplncLicense` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CTRDDOCITMLCASN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED 
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL 
@EndUserText.label: 'Trade Compliance Document Item License Assignment'
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_TrdCmplncDocItmLicAssgmt
  as select from I_TrdCmplncDocItmLicAssgmt as Item
  association [0..1] to I_TrdCmplncDocItemBasic      as _DocItem on $projection.TrdCmplncDocItemUUID = _DocItem.TrdCmplncDocItemUUID
  association [0..1] to I_TrdCmplncLicense      as _License on $projection.TrdCmplncLicenseUUID = _License.TrdCmplncLicenseUUID
{
  key Item.TrdCmplncDocItemUUID,
  key TrdCmplncLicenseUUID,
      _DocItem.ReferenceDocumentCategory,
      _DocItem.ReferenceDocument,
      _DocItem.ReferenceDocumentItem,
      _DocItem.CompanyCode,

      _License.LegalRegulation,
      _License.TrdCmplncLicenseType,
      _License.TrdCmplncLicenseOwner,
      _License.TrdCmplncLicenseCategory,
      _License.TrdCmplncLicense,
      _License.ExtTrdCmplncLicense,
      _License.TrdCmplncLicenseRemark,
      _License.TrdCmplncLicenseStatus,
      _License.ValidityStartDate,
      _License.ValidityEndDate,

      _DocItem,
      _License

}
```
