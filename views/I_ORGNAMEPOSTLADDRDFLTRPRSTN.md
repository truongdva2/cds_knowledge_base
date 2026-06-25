---
name: I_ORGNAMEPOSTLADDRDFLTRPRSTN
description: Orgnamepostladdrdfltrprstn
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ORGNAMEPOSTLADDRDFLTRPRSTN

**Orgnamepostladdrdfltrprstn**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key PostalAddress.AddressID` | `PostalAddress.AddressID` |
| `PostalAddress.AddressRepresentationCode` | `PostalAddress.AddressRepresentationCode` |
| `PostalAddress.AddressIsPersonAddress` | `PostalAddress.AddressIsPersonAddress` |
| `PostalAddress.CorrespondenceLanguage` | `PostalAddress.CorrespondenceLanguage` |
| `PostalAddress.PrfrdCommMediumType` | `PostalAddress.PrfrdCommMediumType` |
| `PostalAddress.CityNumber` | `PostalAddress.CityNumber` |
| `PostalAddress.CityName` | `PostalAddress.CityName` |
| `PostalAddress.DistrictName` | `PostalAddress.DistrictName` |
| `PostalAddress.VillageName` | `PostalAddress.VillageName` |
| `PostalAddress.PostalCode` | `PostalAddress.PostalCode` |
| `PostalAddress.CompanyPostalCode` | `PostalAddress.CompanyPostalCode` |
| `PostalAddress.POBox` | `PostalAddress.POBox` |
| `PostalAddress.POBoxAddrNonDeliverableReason` | `PostalAddress.POBoxAddrNonDeliverableReason` |
| `PostalAddress.POBoxIsWithoutNumber` | `PostalAddress.POBoxIsWithoutNumber` |
| `PostalAddress.POBoxPostalCode` | `PostalAddress.POBoxPostalCode` |
| `PostalAddress.POBoxLobbyName` | `PostalAddress.POBoxLobbyName` |
| `PostalAddress.POBoxDeviatingCityName` | `PostalAddress.POBoxDeviatingCityName` |
| `PostalAddress.POBoxDeviatingCityCode` | `PostalAddress.POBoxDeviatingCityCode` |
| `PostalAddress.POBoxDeviatingRegion` | `PostalAddress.POBoxDeviatingRegion` |
| `PostalAddress.POBoxDeviatingCountry` | `PostalAddress.POBoxDeviatingCountry` |
| `PostalAddress.Street` | `PostalAddress.Street` |
| `PostalAddress.StreetName` | `PostalAddress.StreetName` |
| `PostalAddress.StreetAddrNonDeliverableReason` | `PostalAddress.StreetAddrNonDeliverableReason` |
| `PostalAddress.StreetPrefixName1` | `PostalAddress.StreetPrefixName1` |
| `PostalAddress.StreetPrefixName2` | `PostalAddress.StreetPrefixName2` |
| `PostalAddress.StreetSuffixName1` | `PostalAddress.StreetSuffixName1` |
| `PostalAddress.StreetSuffixName2` | `PostalAddress.StreetSuffixName2` |
| `PostalAddress.HouseNumber` | `PostalAddress.HouseNumber` |
| `PostalAddress.HouseNumberSupplementText` | `PostalAddress.HouseNumberSupplementText` |
| `PostalAddress.Building` | `PostalAddress.Building` |
| `PostalAddress.Floor` | `PostalAddress.Floor` |
| `PostalAddress.RoomNumber` | `PostalAddress.RoomNumber` |
| `PostalAddress.Country` | `PostalAddress.Country` |
| `PostalAddress.Region` | `PostalAddress.Region` |
| `PostalAddress.CareOfName` | `PostalAddress.CareOfName` |
| `PostalAddress.FormOfAddress` | `PostalAddress.FormOfAddress` |
| `PostalAddress.AddresseeName1` | `PostalAddress.AddresseeName1` |
| `PostalAddress.AddresseeName2` | `PostalAddress.AddresseeName2` |
| `PostalAddress.AddresseeName3` | `PostalAddress.AddresseeName3` |
| `PostalAddress.AddresseeName4` | `PostalAddress.AddresseeName4` |
| `PostalAddress.TaxJurisdiction` | `PostalAddress.TaxJurisdiction` |
| `PostalAddress.TransportZone` | `PostalAddress.TransportZone` |
| `PostalAddress.DeliveryServiceTypeCode` | `PostalAddress.DeliveryServiceTypeCode` |
| `PostalAddress.DeliveryServiceNumber` | `PostalAddress.DeliveryServiceNumber` |
| `PostalAddress.AddressTimeZone` | `PostalAddress.AddressTimeZone` |
| `PostalAddress.SecondaryRegion` | `PostalAddress.SecondaryRegion` |
| `PostalAddress.SecondaryRegionName` | `PostalAddress.SecondaryRegionName` |
| `PostalAddress.TertiaryRegion` | `PostalAddress.TertiaryRegion` |
| `PostalAddress.TertiaryRegionName` | `PostalAddress.TertiaryRegionName` |
| `PostalAddress.AddressSearchTerm1` | `PostalAddress.AddressSearchTerm1` |
| `PostalAddress.AddressSearchTerm2` | `PostalAddress.AddressSearchTerm2` |
| `PostalAddress.RegionalStructureCheckStatus` | `PostalAddress.RegionalStructureCheckStatus` |
| `PostalAddress.AddressGroup` | `PostalAddress.AddressGroup` |
| `PostalAddress._Country` | `PostalAddress._Country` |
| `PostalAddress._FormOfAddress` | `PostalAddress._FormOfAddress` |
| `PostalAddress._Region` | `PostalAddress._Region` |
| `PostalAddress._TransportationZone` | `PostalAddress._TransportationZone` |
| `_DfltRprstnPostalAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DfltRprstnPostalAddress` | `I_AddrOrgNamePostalAddress` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_Region', '_Country', '_FormOfAddress', '_TransportationZone']
@Analytics.dataCategory: #DIMENSION
@EndUserText.label: 'Dflt Addr Rprstn for Org and Postal'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API  
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_OrgNamePostlAddrDfltRprstn 
     as select from I_AddrOrgNamePostalAddress as PostalAddress
     association [0..*] to I_AddrOrgNamePostalAddress as _DfltRprstnPostalAddress on $projection.AddressID = _DfltRprstnPostalAddress.AddressID
                                                                                  and _DfltRprstnPostalAddress.AddressRepresentationCode is not initial
{
 key PostalAddress.AddressID,
  PostalAddress.AddressRepresentationCode,
  PostalAddress.AddressIsPersonAddress,
  PostalAddress.CorrespondenceLanguage,
  PostalAddress.PrfrdCommMediumType,
  PostalAddress.CityNumber,
  PostalAddress.CityName,
  PostalAddress.DistrictName,
  PostalAddress.VillageName,
  PostalAddress.PostalCode,
  PostalAddress.CompanyPostalCode,
  PostalAddress.POBox,
  @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
  PostalAddress.POBoxAddrNonDeliverableReason,
  PostalAddress.POBoxIsWithoutNumber,
  PostalAddress.POBoxPostalCode,
  PostalAddress.POBoxLobbyName,
  PostalAddress.POBoxDeviatingCityName,
  PostalAddress.POBoxDeviatingCityCode,
  PostalAddress.POBoxDeviatingRegion,
  PostalAddress.POBoxDeviatingCountry,
  PostalAddress.Street,
  PostalAddress.StreetName,
  @EndUserText.label: 'Street Address Non-Deliverable Reason'
  PostalAddress.StreetAddrNonDeliverableReason,
  PostalAddress.StreetPrefixName1,
  PostalAddress.StreetPrefixName2,
  PostalAddress.StreetSuffixName1,
  PostalAddress.StreetSuffixName2,
  PostalAddress.HouseNumber,
  PostalAddress.HouseNumberSupplementText,
  PostalAddress.Building,
  PostalAddress.Floor,
  PostalAddress.RoomNumber,
  @ObjectModel.foreignKey.association: '_Country'  
  PostalAddress.Country,
  PostalAddress.Region,
  PostalAddress.CareOfName,
  @ObjectModel.foreignKey.association: '_FormOfAddress' 
  PostalAddress.FormOfAddress,
  PostalAddress.AddresseeName1,
  PostalAddress.AddresseeName2,
  PostalAddress.AddresseeName3,
  PostalAddress.AddresseeName4,
  PostalAddress.TaxJurisdiction,
  @ObjectModel.foreignKey.association: '_TransportationZone'  
  PostalAddress.TransportZone,
  PostalAddress.DeliveryServiceTypeCode,
  PostalAddress.DeliveryServiceNumber,
  PostalAddress.AddressTimeZone,
  PostalAddress.SecondaryRegion,
  PostalAddress.SecondaryRegionName,
  PostalAddress.TertiaryRegion,
  PostalAddress.TertiaryRegionName,
  PostalAddress.AddressSearchTerm1,
  PostalAddress.AddressSearchTerm2,
  PostalAddress.RegionalStructureCheckStatus,
  PostalAddress.AddressGroup,
  PostalAddress._Country,
  PostalAddress._FormOfAddress,
  PostalAddress._Region,
  PostalAddress._TransportationZone,
  _DfltRprstnPostalAddress
}
where
  AddressRepresentationCode is initial
```
