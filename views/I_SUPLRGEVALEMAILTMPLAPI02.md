---
name: I_SUPLRGEVALEMAILTMPLAPI02
description: Suplrgevalemailtmplapi 02
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - workflow
  - email
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLRGEVALEMAILTMPLAPI02

**Suplrgevalemailtmplapi 02**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key response.SuplrEvalRspUUID` | `response.SuplrEvalRspUUID` |
| `/srmsmc/evaluation_response_id)` | `cast(ltrim(response.SupplierEvalResponse,'0')` |
| `response.SuplrEvalRspName` | `response.SuplrEvalRspName` |
| `response.SuplrEvalStartDate` | `response.SuplrEvalStartDate` |
| `response.SuplrEvalEndDate` | `response.SuplrEvalEndDate` |
| `/srmsmc/created_by )` | `cast(response.CreatedByUser` |
| `response.CreationDateTime` | `response.CreationDateTime` |
| `/srmsmc/last_changed_by )` | `cast(response.LastChangedByUser` |
| `response.LastChangeDateTime` | `response.LastChangeDateTime` |
| `response.Language` | `response.Language` |
| `/srmsmc/created_by_user_desc)` | `cast(response._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName` |
| `/srmsmc/last_changed_by_desc)` | `cast(response._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName` |
| `FormOfAddressName` | `formofaddressname.FormOfAddressName` |
| `businessuser.FirstName` | `businessuser.FirstName` |
| `FamilyName` | `businessuser.LastName` |
| `/srmsmc/company_name )` | `cast(response._Supplier._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGEVALMAILTAPI02'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #OUTPUT_EMAIL_DATA_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Email Template for Eval Notification'

define view I_SuplrGEvalEmailTmplAPI02 with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : /srmsmc/language_parameter
  as select  distinct from I_SupplierEvalResponse as response 
   join  I_SupplierEvalRspAppraiser   appraiser on appraiser.SuplrEvalRspUUID = response.SuplrEvalRspUUID
    left outer join  I_BusinessUser   businessuser on appraiser.UserID = businessuser.UserID and businessuser.IsBusinessPurposeCompleted = '' 
    left outer join  I_FormOfAddressText  formofaddressname on formofaddressname.FormOfAddress = businessuser.FormOfAddress and formofaddressname.Language = $parameters.P_Language
{ 

  key response.SuplrEvalRspUUID,
      cast(ltrim(response.SupplierEvalResponse,'0') as /srmsmc/evaluation_response_id) as SupplierEvalResponse,
      response.SuplrEvalRspName,
      @Semantics.businessDate.from: true
      response.SuplrEvalStartDate, 
      @Semantics.businessDate.to: true
      response.SuplrEvalEndDate, 
      cast(response.CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      response.CreationDateTime,
      cast(response.LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      response.LastChangeDateTime,
      response.Language,
      cast(response._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/created_by_user_desc)     as CreatedByUserDescription,
      cast(response._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/last_changed_by_desc) as LastChangedByUserName,
      formofaddressname.FormOfAddressName as FormOfAddressName,
      businessuser.FirstName,
      businessuser.LastName as FamilyName,
      cast(response._Supplier._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/company_name ) as BusinessPartnerFullName
}
```
