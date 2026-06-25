---
name: I_SALESDOCUMENTPARTNER
description: Salesdocumentpartner
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - sales-document
  - document
  - partner
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTPARTNER

**Salesdocumentpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `vbeln_va preserving type)` | `cast(Partner.SDDocument` |
| `key Partner.PartnerFunction` | `Partner.PartnerFunction` |
| `Partner.Customer` | `Partner.Customer` |
| `Partner.Supplier` | `Partner.Supplier` |
| `Partner.Personnel` | `Partner.Personnel` |
| `Partner.AddressID` | `Partner.AddressID` |
| `Partner.AddressPersonID` | `Partner.AddressPersonID` |
| `Partner.AddressObjectType` | `Partner.AddressObjectType` |
| `Partner.SDDocPartnerAddrIsDocSpecific` | `Partner.SDDocPartnerAddrIsDocSpecific` |
| `Partner.SDDocPartnerAddressRefType` | `Partner.SDDocPartnerAddressRefType` |
| `Partner.BPAddrDeterminationTransaction` | `Partner.BPAddrDeterminationTransaction` |
| `Partner.BPRefAddressIDForDocSpcfcAddr` | `Partner.BPRefAddressIDForDocSpcfcAddr` |
| `Partner.PartnerIsOneTimeAccount` | `Partner.PartnerIsOneTimeAccount` |
| `Partner.ContactPerson` | `Partner.ContactPerson` |
| `Partner.ReferenceBusinessPartner` | `Partner.ReferenceBusinessPartner` |
| `Partner.VATRegistration` | `Partner.VATRegistration` |
| `Partner.UnloadingPointName` | `Partner.UnloadingPointName` |
| `SalesDocument.SDDocumentCategory` | `SalesDocument.SDDocumentCategory` |
| `case` | `case` |
| `when Partner.Customer != ''` | `when Partner.Customer != ''` |
| `then Partner.Customer` | `then Partner.Customer` |
| `when Partner.Supplier != ''` | `when Partner.Supplier != ''` |
| `then Partner.Supplier` | `then Partner.Supplier` |
| `when Partner.Personnel != '00000000'` | `when Partner.Personnel != '00000000'` |
| `kunnr)` | `then cast(Partner.Personnel` |
| `when Partner.ContactPerson != '0000000000'` | `when Partner.ContactPerson != '0000000000'` |
| `kunnr)` | `then cast(Partner.ContactPerson` |
| `else` | `else` |
| `''` | `''` |
| `Partner` | `end` |
| `cast(` | `cast(` |
| `case Partner.AddressID` | `case Partner.AddressID` |
| `when ''` | `when ''` |
| `then` | `then` |
| `case` | `case` |
| `when Partner.Personnel != '00000000'` | `when Partner.Personnel != '00000000'` |
| `then coalesce(_WorkAssignment.PersonFullName` | `then coalesce(_WorkAssignment.PersonFullName` |
| `_WorkAssignment._BusinessPartner.LastName)` | *Association* |
| `end` | `end` |
| `else` | `else` |
| `case` | `case` |
| `when Partner.AddressObjectType = '1'` | `when Partner.AddressObjectType = '1'` |
| `then` | `then` |
| `case` | `case` |
| `when Partner.ContactPerson != '0000000000'` | `when Partner.ContactPerson != '0000000000'` |
| `then` | `then` |
| `cast(substring(replace(concat(Partner._ContactPerson.FirstName` | `cast(substring(replace(concat(Partner._ContactPerson.FirstName` |
| `ad_namtext )` | `concat(' &@', Partner._ContactPerson.LastName) ), '&@', '') ,1,80)` |
| `when Partner.Personnel != '00000000'` | `when Partner.Personnel != '00000000'` |
| `then _OrganizationAddress.AddresseeName1  //Document specific personnel` | `then _OrganizationAddress.AddresseeName1  //Document specific personnel` |
| `else` | `else` |
| `cast(concat_with_space(_OrganizationAddress.AddresseeName1` | `cast(concat_with_space(_OrganizationAddress.AddresseeName1` |
| `_OrganizationAddress.AddresseeName2, 1) as ad_namtext )` | *Association* |
| `end` | `end` |
| `when Partner.AddressObjectType = '2'` | `when Partner.AddressObjectType = '2'` |
| `then _PersonAddress.PersonFullName` | `then _PersonAddress.PersonFullName` |
| `when Partner.AddressObjectType = '3'` | `when Partner.AddressObjectType = '3'` |
| `then _PersonWorkplaceAddress.PersonFullName` | `then _PersonWorkplaceAddress.PersonFullName` |
| `end` | `end` |
| `ad_namtext )` | `end` |
| `cast(` | `cast(` |
| `coalesce( _PersonName.FormOfAddress` | `coalesce( _PersonName.FormOfAddress` |
| `_OrgNamePostalAddress.FormOfAddress )` | *Association* |
| `FormOfAddress` | `as ad_title preserving type )` |
| `coalesce( _PersonName.CorrespondenceLanguage` | `coalesce( _PersonName.CorrespondenceLanguage` |
| `_OrgNamePostalAddress.CorrespondenceLanguage ) as CorrespondenceLanguage` | *Association* |
| `/* Communication Related Data */` | `/* Communication Related Data */` |
| `cast(` | `cast(` |
| `case Partner.AddressID` | `case Partner.AddressID` |
| `when ''` | `when ''` |
| `then _WorkPlaceAddress.NormalizedPhoneNumber` | `then _WorkPlaceAddress.NormalizedPhoneNumber` |
| `else _CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber` | `else _CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber` |
| `vdm_sd_sls_phone preserving type )` | `end` |
| `cast(` | `cast(` |
| `case Partner.AddressID` | `case Partner.AddressID` |
| `when ''` | `when ''` |
| `then _WorkPlaceAddress.MblNormalizedPhoneNumber` | `then _WorkPlaceAddress.MblNormalizedPhoneNumber` |
| `else _CurrentDfltMobilePhoneNumber.InternationalPhoneNumber` | `else _CurrentDfltMobilePhoneNumber.InternationalPhoneNumber` |
| `vdm_sd_sls_mobile preserving type )` | `end` |
| `cast(` | `cast(` |
| `case Partner.AddressID` | `case Partner.AddressID` |
| `when ''` | `when ''` |
| `then _WorkPlaceAddress.InternationalFaxNumber` | `then _WorkPlaceAddress.InternationalFaxNumber` |
| `else _CurrentDfltFaxNumber.InternationalFaxNumber` | `else _CurrentDfltFaxNumber.InternationalFaxNumber` |
| `vdm_sd_sls_fax preserving type )` | `end` |
| `cast(` | `cast(` |
| `case Partner.AddressID` | `case Partner.AddressID` |
| `when ''` | `when ''` |
| `then _WorkPlaceAddress.DefaultEmailAddress` | `then _WorkPlaceAddress.DefaultEmailAddress` |
| `else _CurrentDfltEmailAddress.EmailAddress` | `else _CurrentDfltEmailAddress.EmailAddress` |
| `vdm_sd_sls_email preserving type )` | `end` |
| `_SalesDocument` | *Association* |
| `Partner._PartnerFunction` | `Partner._PartnerFunction` |
| `Partner._Address` | `Partner._Address` |
| `Partner._DfltAddrRprstn` | `Partner._DfltAddrRprstn` |
| `Partner._BusinessPartnerAddress` | `Partner._BusinessPartnerAddress` |
| `Partner._BPRefAddressForDocSpcfcAddr` | `Partner._BPRefAddressForDocSpcfcAddr` |
| `Partner._ContactPerson` | `Partner._ContactPerson` |
| `Partner._WorkforcePersonMappings` | `Partner._WorkforcePersonMappings` |
| `SalesDocument._SDDocumentCategory` | `SalesDocument._SDDocumentCategory` |
| `_PersonAddress` | *Association* |
| `_PersonName` | *Association* |
| `_OrganizationAddress` | *Association* |
| `_OrgNamePostalAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [1..1] |
| `_WorkAssignment` | `I_WorkAssignment` | [1] |
| `_OrganizationAddress` | `I_OrganizationAddress` | [0..1] |
| `_PersonAddress` | `I_PersonAddress` | [0..1] |
| `_PersonWorkplaceAddress` | `I_PersonWorkplaceAddress` | [0..1] |
| `_OrgNamePostalAddress` | `I_AddrOrgNamePostalAddress` | [0..1] |
| `_PersonName` | `I_AddressPersonName` | [0..1] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |
| `_WorkPlaceAddress` | `I_WorkplaceAddress` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Document Partner'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations:  [ '_Address', '_DfltAddrRprstn', '_PersonAddress', '_PersonName', '_OrganizationAddress', '_OrgNamePostalAddress' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSDOCPT',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentPartner
  as select from I_SDDocumentPartner  as Partner
    inner join   I_SalesDocumentBasic as SalesDocument on SalesDocument.SalesDocument = Partner.SDDocument

  association [1..1] to I_SalesDocument                as _SalesDocument                on  $projection.SalesDocument = _SalesDocument.SalesDocument

  association [1]    to I_WorkAssignment               as _WorkAssignment               on  $projection.Personnel = _WorkAssignment.WorkAssignment

  association [0..1] to I_OrganizationAddress          as _OrganizationAddress          on  $projection.AddressID                          = _OrganizationAddress.AddressID
                                                                                        and $projection.AddressPersonID                    = _OrganizationAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType                  = '1'
                                                                                        and _OrganizationAddress.AddressRepresentationCode is initial

  association [0..1] to I_PersonAddress                as _PersonAddress                on  $projection.AddressID                    = _PersonAddress.AddressID
                                                                                        and $projection.AddressPersonID              = _PersonAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType            = '2'
                                                                                        and _PersonAddress.AddressRepresentationCode is initial

  association [0..1] to I_PersonWorkplaceAddress       as _PersonWorkplaceAddress       on  $projection.AddressID                             = _PersonWorkplaceAddress.AddressID
                                                                                        and $projection.AddressPersonID                       = _PersonWorkplaceAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType                     = '3'
                                                                                        and _PersonWorkplaceAddress.AddressRepresentationCode is initial

  association [0..1] to I_AddrOrgNamePostalAddress     as _OrgNamePostalAddress         on  $projection.AddressID                           = _OrgNamePostalAddress.AddressID
                                                                                        and _OrgNamePostalAddress.AddressRepresentationCode is initial

  association [0..1] to I_AddressPersonName            as _PersonName                   on  $projection.AddressPersonID           = _PersonName.AddressPersonID
                                                                                        and _PersonName.AddressRepresentationCode is initial

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr on  $projection.AddressID       = _CurrentDfltLandlinePhoneNmbr.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltLandlinePhoneNmbr.AddressPersonID

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress      on  $projection.AddressID       = _CurrentDfltEmailAddress.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltEmailAddress.AddressPersonID

  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber on  $projection.AddressID       = _CurrentDfltMobilePhoneNumber.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltMobilePhoneNumber.AddressPersonID

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber         on  $projection.AddressID       = _CurrentDfltFaxNumber.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltFaxNumber.AddressPersonID

  association [1]    to I_WorkplaceAddress             as _WorkPlaceAddress             on  $projection.ReferenceBusinessPartner = _WorkPlaceAddress.BusinessPartner
{
      @ObjectModel.foreignKey.association: '_SalesDocument'
  key cast(Partner.SDDocument as vbeln_va preserving type)     as SalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key Partner.PartnerFunction,

      Partner.Customer,

      Partner.Supplier,

      Partner.Personnel,

      Partner.AddressID,

      Partner.AddressPersonID,

      Partner.AddressObjectType,

      Partner.SDDocPartnerAddrIsDocSpecific,

      Partner.SDDocPartnerAddressRefType,

      Partner.BPAddrDeterminationTransaction,

      Partner.BPRefAddressIDForDocSpcfcAddr,
      
      Partner.PartnerIsOneTimeAccount,

      Partner.ContactPerson,

      Partner.ReferenceBusinessPartner,

      Partner.VATRegistration,

      @Semantics.text: true
      Partner.UnloadingPointName,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SalesDocument.SDDocumentCategory,

      case
        when Partner.Customer != ''
            then Partner.Customer
        when Partner.Supplier != ''
            then Partner.Supplier
        when Partner.Personnel != '00000000'
            then cast(Partner.Personnel as kunnr)
        when Partner.ContactPerson != '0000000000'
            then cast(Partner.ContactPerson as kunnr)
        else
            ''
        end                                                    as Partner,

      cast(
      case Partner.AddressID
        when ''
          then
            case
              when Partner.Personnel != '00000000'
               then coalesce(_WorkAssignment.PersonFullName,
                             _WorkAssignment._BusinessPartner.LastName)
            end
        else
          case
            when Partner.AddressObjectType = '1'
              then
                case
                  when Partner.ContactPerson != '0000000000'
                    then
                      cast(substring(replace(concat(Partner._ContactPerson.FirstName,
                                             concat(' &@', Partner._ContactPerson.LastName) ), '&@', '') ,1,80) as ad_namtext )
                   when Partner.Personnel != '00000000'
                     then _OrganizationAddress.AddresseeName1  //Document specific personnel
                  else
                    cast(concat_with_space(_OrganizationAddress.AddresseeName1,
                                           _OrganizationAddress.AddresseeName2, 1) as ad_namtext )
                 end
            when Partner.AddressObjectType = '2'
              then _PersonAddress.PersonFullName
            when Partner.AddressObjectType = '3'
              then _PersonWorkplaceAddress.PersonFullName
          end
      end as ad_namtext )                                      as FullName,

      cast(
        coalesce( _PersonName.FormOfAddress,
                  _OrgNamePostalAddress.FormOfAddress )
         as ad_title preserving type )                         as FormOfAddress,

      coalesce( _PersonName.CorrespondenceLanguage,
                _OrgNamePostalAddress.CorrespondenceLanguage ) as CorrespondenceLanguage,

      /* Communication Related Data */
      cast(
        case Partner.AddressID
          when ''
            then _WorkPlaceAddress.NormalizedPhoneNumber
          else _CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber
        end as vdm_sd_sls_phone preserving type )              as InternationalPhoneNumber,

      cast(
        case Partner.AddressID
          when ''
            then _WorkPlaceAddress.MblNormalizedPhoneNumber
          else _CurrentDfltMobilePhoneNumber.InternationalPhoneNumber
        end as vdm_sd_sls_mobile preserving type )             as InternationalMobilePhoneNumber,

      cast(
        case Partner.AddressID
          when ''
            then _WorkPlaceAddress.InternationalFaxNumber
          else _CurrentDfltFaxNumber.InternationalFaxNumber
        end as vdm_sd_sls_fax preserving type )                as InternationalFaxNumber,

      cast(
        case Partner.AddressID
          when ''
            then _WorkPlaceAddress.DefaultEmailAddress
          else _CurrentDfltEmailAddress.EmailAddress
        end as vdm_sd_sls_email preserving type )              as EmailAddress,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SalesDocument,
      Partner._PartnerFunction,
      Partner._Address,
      Partner._DfltAddrRprstn,
      Partner._BusinessPartnerAddress,
      Partner._BPRefAddressForDocSpcfcAddr,
      Partner._ContactPerson,
      Partner._WorkforcePersonMappings,
      SalesDocument._SDDocumentCategory,
      _PersonAddress,
      _PersonName,
      _OrganizationAddress,
      _OrgNamePostalAddress

}
```
