---
name: I_WORKFORCEPERSONADDRESS
description: Workforcepersonaddress
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-BL
  - interface-view
  - address
  - component:CA-WFD-BL
  - lob:Cross-Application Components
---
# I_WORKFORCEPERSONADDRESS

**Workforcepersonaddress**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key     keymap.WorkforcePersonExternalID` | `keymap.WorkforcePersonExternalID` |
| `AddressNumber` | `EmployeeAddress.AddressID` |
| `keymap.BusinessPartner` | `keymap.BusinessPartner` |
| `cast (tstmp_to_dats( EmployeeAddress.ValidityStartDate` | `cast (tstmp_to_dats( EmployeeAddress.ValidityStartDate` |
| `vdm_v_start_date)` | `abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |
| `cast (tstmp_to_dats( EmployeeAddress.ValidityEndDate` | `cast (tstmp_to_dats( EmployeeAddress.ValidityEndDate` |
| `vdm_v_end_date)` | `abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' )` |
| `EmployeeAddress._AddressDefaultRepresentation.Country` | `EmployeeAddress._AddressDefaultRepresentation.Country` |
| `EmployeeAddress._AddressDefaultRepresentation.PostalCode` | `EmployeeAddress._AddressDefaultRepresentation.PostalCode` |
| `EmployeeAddress._AddressDefaultRepresentation.Region` | `EmployeeAddress._AddressDefaultRepresentation.Region` |
| `EmployeeAddress._AddressDefaultRepresentation.SecondaryRegion` | `EmployeeAddress._AddressDefaultRepresentation.SecondaryRegion` |
| `EmployeeAddress._AddressDefaultRepresentation.SecondaryRegionName` | `EmployeeAddress._AddressDefaultRepresentation.SecondaryRegionName` |
| `EmployeeAddress._AddressDefaultRepresentation.TertiaryRegion` | `EmployeeAddress._AddressDefaultRepresentation.TertiaryRegion` |
| `EmployeeAddress._AddressDefaultRepresentation.TertiaryRegionName` | `EmployeeAddress._AddressDefaultRepresentation.TertiaryRegionName` |
| `EmployeeAddress._AddressDefaultRepresentation.CityName` | `EmployeeAddress._AddressDefaultRepresentation.CityName` |
| `EmployeeAddress._AddressDefaultRepresentation.DistrictName` | `EmployeeAddress._AddressDefaultRepresentation.DistrictName` |
| `EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName1` | `EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName1` |
| `EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName2` | `EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName2` |
| `EmployeeAddress._AddressDefaultRepresentation.StreetName` | `EmployeeAddress._AddressDefaultRepresentation.StreetName` |
| `EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName1` | `EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName1` |
| `EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName2` | `EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName2` |
| `EmployeeAddress._AddressDefaultRepresentation.HouseNumber` | `EmployeeAddress._AddressDefaultRepresentation.HouseNumber` |
| `EmployeeAddress._AddressDefaultRepresentation.HouseNumberSupplementText` | `EmployeeAddress._AddressDefaultRepresentation.HouseNumberSupplementText` |
| `EmployeeAddress._AddressDefaultRepresentation.Floor` | `EmployeeAddress._AddressDefaultRepresentation.Floor` |
| `EmployeeAddress._AddressDefaultRepresentation.RoomNumber` | `EmployeeAddress._AddressDefaultRepresentation.RoomNumber` |
| `EmployeeAddress._AddressDefaultRepresentation.CareOfName` | `EmployeeAddress._AddressDefaultRepresentation.CareOfName` |
| `EmployeeAddress._AddressDefaultRepresentation.POBoxPostalCode` | `EmployeeAddress._AddressDefaultRepresentation.POBoxPostalCode` |
| `_BP.IsBusinessPurposeCompleted` | *Association* |
| `_BP.DataControllerSet` | *Association* |
| `_BP.DataController1` | *Association* |
| `_BP.DataController2` | *Association* |
| `_BP.DataController3` | *Association* |
| `_BP.DataController4` | *Association* |
| `_BP.DataController5` | *Association* |
| `_BP.DataController6` | *Association* |
| `_BP.DataController7` | *Association* |
| `_BP.DataController8` | *Association* |
| `_BP.DataController9` | *Association* |
| `_BP.DataController10` | *Association* |
| `_BP.AuthorizationGroup` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_BPProtectedAddress` | *Association* |
| `_WorkforcePerson` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPProtectedAddress` | `I_BPProtectedAddress` | [0..1] |
| `_BP` | `I_BusinessPartner` | [1..1] |
| `_WorkforcePerson` | `I_WorkforcePerson_1` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Workforce Person Address Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#NONE
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define view entity I_WorkforcePersonAddress
  as select distinct from I_WorkAssignmentKeyMapping as keymap    
    inner join   I_BusPartAddress                    as EmployeeAddress on EmployeeAddress.BusinessPartner = keymap.BusinessPartner
    inner join   I_Businesspartneraddressusage       as BPAddressUsage  on BPAddressUsage.BusinessPartner = EmployeeAddress.BusinessPartner
                                                                       and BPAddressUsage.AddressNumber   = EmployeeAddress.AddressID

  association [0..1] to I_BPProtectedAddress as _BPProtectedAddress on  $projection.BusinessPartner = _BPProtectedAddress.BusinessPartner
                                                                    and $projection.AddressNumber   = _BPProtectedAddress.AddressID
  association [1..1] to I_BusinessPartner    as _BP                 on  _BP.BusinessPartner = EmployeeAddress.BusinessPartner

  association [1]    to I_WorkforcePerson_1  as _WorkforcePerson    on  _WorkforcePerson.WorkforcePersonExternalID = $projection.WorkforcePersonExternalID
{
  key     keymap.WorkforcePersonExternalID,
  key     EmployeeAddress.AddressID                                                                      as AddressNumber,
          keymap.BusinessPartner,
          cast (tstmp_to_dats( EmployeeAddress.ValidityStartDate,
          abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_start_date) as StartDate,
          cast (tstmp_to_dats( EmployeeAddress.ValidityEndDate,
            abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as vdm_v_end_date) as EndDate,
          EmployeeAddress._AddressDefaultRepresentation.Country,
          EmployeeAddress._AddressDefaultRepresentation.PostalCode,
          EmployeeAddress._AddressDefaultRepresentation.Region,
          EmployeeAddress._AddressDefaultRepresentation.SecondaryRegion,
          EmployeeAddress._AddressDefaultRepresentation.SecondaryRegionName,
          EmployeeAddress._AddressDefaultRepresentation.TertiaryRegion,
          EmployeeAddress._AddressDefaultRepresentation.TertiaryRegionName,
          EmployeeAddress._AddressDefaultRepresentation.CityName,
          EmployeeAddress._AddressDefaultRepresentation.DistrictName,
          EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName1,
          EmployeeAddress._AddressDefaultRepresentation.StreetPrefixName2,
          EmployeeAddress._AddressDefaultRepresentation.StreetName,
          EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName1,
          EmployeeAddress._AddressDefaultRepresentation.StreetSuffixName2,
          EmployeeAddress._AddressDefaultRepresentation.HouseNumber,
          EmployeeAddress._AddressDefaultRepresentation.HouseNumberSupplementText,
          EmployeeAddress._AddressDefaultRepresentation.Floor,
          EmployeeAddress._AddressDefaultRepresentation.RoomNumber,
          EmployeeAddress._AddressDefaultRepresentation.CareOfName,
          EmployeeAddress._AddressDefaultRepresentation.POBoxPostalCode,
          @Semantics.booleanIndicator: true
          _BP.IsBusinessPurposeCompleted,
          @Consumption.hidden:true
          @UI.hidden:true          
          _BP.DataControllerSet,
          @Consumption.hidden:true
          @UI.hidden:true          
          _BP.DataController1,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController2,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController3,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController4,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController5,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController6,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController7,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController8,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController9,
          @Consumption.hidden:true
          @UI.hidden:true                    
          _BP.DataController10,         
          _BP.AuthorizationGroup,

          /* Associations */
          _BPProtectedAddress,
          _WorkforcePerson

}
where
  BPAddressUsage.AddressUsage = 'XXDEFAULT'
```
