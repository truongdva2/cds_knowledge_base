---
name: I_REARCHITECTUREOBJADDRESS
description: Rearchitectureobjaddress
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
  - interface-view
  - address
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REARCHITECTUREOBJADDRESS

**Rearchitectureobjaddress**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _REObjectAddress.InternalRealEstateNumber` | `_REObjectAddress.InternalRealEstateNumber` |
| `_REObjectAddress.AddressID` | *Association* |
| `_REObjectAddress.REAddressObjType` | *Association* |
| `_REObjectAddress._Address.StreetName                     as StreetName, //street` | *Association* |
| `_REObjectAddress._Address.HouseNumber                    as HouseNumber, //house_num1` | *Association* |
| `_REObjectAddress._Address.CityName                       as CityName,//city1` | *Association* |
| `_REObjectAddress._Address.PostalCode                     as PostalCode, //post_code1` | *Association* |
| `_REObjectAddress._Address.Country                        as Country, //country` | *Association* |
| `_REObjectAddress._Address.Region                         as Region, //region` | *Association* |
| `_REObjectAddress._Address.SecondaryRegionName            as SecondaryRegionName, //secondaryRegion` | *Association* |
| `_REObjectAddress._Address.StreetPrefixName1              as StreetPrefixName, //str_suppl1` | *Association* |
| `_REObjectAddress._Address.StreetPrefixName2              as AdditionalStreetPrefixName, //str_suppl2` | *Association* |
| `_REObjectAddress._Address.StreetSuffixName1              as StreetSuffixName, //str_suppl3` | *Association* |
| `_REObjectAddress._Address.StreetSuffixName2              as AdditionalStreetSuffixName, //location` | *Association* |
| `_REObjectAddress._Address.HouseNumberSupplementText, // house_num2` | *Association* |
| `ort02_gp)` | `cast(_REObjectAddress._Address.DistrictName` |
| `_REObjectAddress._Address.Building                       as Building, //building` | *Association* |
| `_REObjectAddress._Address.Floor                          as Floor, //floor` | *Association* |
| `_REObjectAddress._Address.RoomNumber                     as RoomNumber, //door` | *Association* |
| `_REObjectAddress._Address.TertiaryRegionName             as TertiaryRegionName` | *Association* |
| `_REObjectAddress._Address` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: [ '_Address' ]

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'InternalRealEstateNumber',
            semanticKey: [ 'InternalRealEstateNumber' ],
            sapObjectNodeType.name: 'REArchitectureObjectAddress',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions:true
  }

@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Real Estate Architecture Object Address'
define view entity I_REArchitectureObjAddress 
    as select from I_REObjectAddress as _REObjectAddress
{
   key _REObjectAddress.InternalRealEstateNumber,
       _REObjectAddress.AddressID,
       _REObjectAddress.REAddressObjType,
       _REObjectAddress._Address.StreetName                     as StreetName, //street
       _REObjectAddress._Address.HouseNumber                    as HouseNumber, //house_num1
       _REObjectAddress._Address.CityName                       as CityName,//city1
       _REObjectAddress._Address.PostalCode                     as PostalCode, //post_code1
       _REObjectAddress._Address.Country                        as Country, //country
       _REObjectAddress._Address.Region                         as Region, //region
       _REObjectAddress._Address.SecondaryRegionName            as SecondaryRegionName, //secondaryRegion
       //ADDRESS_TEXT
       _REObjectAddress._Address.StreetPrefixName1              as StreetPrefixName, //str_suppl1
       _REObjectAddress._Address.StreetPrefixName2              as AdditionalStreetPrefixName, //str_suppl2
       _REObjectAddress._Address.StreetSuffixName1              as StreetSuffixName, //str_suppl3
       _REObjectAddress._Address.StreetSuffixName2              as AdditionalStreetSuffixName, //location
       _REObjectAddress._Address.HouseNumberSupplementText, // house_num2
       cast(_REObjectAddress._Address.DistrictName as ort02_gp) as District, //city2
       _REObjectAddress._Address.Building                       as Building, //building
       _REObjectAddress._Address.Floor                          as Floor, //floor
       _REObjectAddress._Address.RoomNumber                     as RoomNumber, //door
       _REObjectAddress._Address.TertiaryRegionName             as TertiaryRegionName,
       //long
       //lat
       //Geo_ewbk für Spatial oder gleich via AMDP und HANA native Tabelle?

       _REObjectAddress._Address
}
where
  _REObjectAddress.InternalRealEstateNumber like 'J8%'
```
