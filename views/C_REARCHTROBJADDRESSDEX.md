---
name: C_REARCHTROBJADDRESSDEX
description: Rearchtrobjaddressdex
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - address
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REARCHTROBJADDRESSDEX

**Rearchtrobjaddressdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _REArchitectureObjectData.REArchitectureObjectUUID` | `_REArchitectureObjectData.REArchitectureObjectUUID` |
| `_REObjectAddress.InternalRealEstateNumber` | *Association* |
| `_REObjectAddress.AddressID` | *Association* |
| `_REObjectAddress.REAddressObjType` | *Association* |
| `_REObjectAddress._Address.StreetName, //street` | *Association* |
| `_REObjectAddress._Address.HouseNumber, //house_num1` | *Association* |
| `_REObjectAddress._Address.CityName, //city1` | *Association* |
| `_REObjectAddress._Address.PostalCode, //post_code1` | *Association* |
| `_REObjectAddress._Address.Country, //country` | *Association* |
| `_REObjectAddress._Address.Region, //region` | *Association* |
| `_REObjectAddress._Address.SecondaryRegionName, //secondaryRegion` | *Association* |
| `_REObjectAddress._Address.StreetPrefixName1              as StreetPrefixName, //str_suppl1` | *Association* |
| `_REObjectAddress._Address.StreetPrefixName2              as AdditionalStreetPrefixName, //str_suppl2` | *Association* |
| `_REObjectAddress._Address.StreetSuffixName1              as StreetSuffixName, //str_suppl3` | *Association* |
| `_REObjectAddress._Address.StreetSuffixName2              as AdditionalStreetSuffixName, //location` | *Association* |
| `_REObjectAddress._Address.HouseNumberSupplementText, // house_num2` | *Association* |
| `ort02_gp)` | `cast(_REObjectAddress._Address.DistrictName` |
| `_REObjectAddress._Address.Building, //building` | *Association* |
| `_REObjectAddress._Address.Floor, //floor` | *Association* |
| `_REObjectAddress._Address.RoomNumber, //door` | *Association* |
| `_REObjectAddress._Address.TertiaryRegionName` | *Association* |
| `_REObjectAddress._Address` | *Association* |
| `_REArchitectureObject` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Arch Obj Adress Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjAddressDEX   
 as select from I_REObjectAddress as _REObjectAddress
   inner join   I_REArchitectureObject as _REArchitectureObjectData on _REObjectAddress.InternalRealEstateNumber = _REArchitectureObjectData.InternalRealEstateNumber
 association to I_REArchitectureObject as _REArchitectureObject on $projection.REArchitectureObjectUUID = _REArchitectureObject.REArchitectureObjectUUID
 
{
  key _REArchitectureObjectData.REArchitectureObjectUUID,
       _REObjectAddress.InternalRealEstateNumber,
       _REObjectAddress.AddressID,
       _REObjectAddress.REAddressObjType,
       _REObjectAddress._Address.StreetName, //street
       _REObjectAddress._Address.HouseNumber, //house_num1
       _REObjectAddress._Address.CityName, //city1
       _REObjectAddress._Address.PostalCode, //post_code1
       _REObjectAddress._Address.Country, //country
       _REObjectAddress._Address.Region, //region
       _REObjectAddress._Address.SecondaryRegionName, //secondaryRegion
       //ADDRESS_TEXT
       _REObjectAddress._Address.StreetPrefixName1              as StreetPrefixName, //str_suppl1
       _REObjectAddress._Address.StreetPrefixName2              as AdditionalStreetPrefixName, //str_suppl2
       _REObjectAddress._Address.StreetSuffixName1              as StreetSuffixName, //str_suppl3
       _REObjectAddress._Address.StreetSuffixName2              as AdditionalStreetSuffixName, //location
       _REObjectAddress._Address.HouseNumberSupplementText, // house_num2
       cast(_REObjectAddress._Address.DistrictName as ort02_gp) as District, //city2
       _REObjectAddress._Address.Building, //building
       _REObjectAddress._Address.Floor, //floor
       _REObjectAddress._Address.RoomNumber, //door
       _REObjectAddress._Address.TertiaryRegionName,

       _REObjectAddress._Address,
       _REArchitectureObject
}
where
  _REObjectAddress.InternalRealEstateNumber like 'J8%'
```
