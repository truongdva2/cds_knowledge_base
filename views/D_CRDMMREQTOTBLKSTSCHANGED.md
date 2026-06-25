---
name: D_CRDMMREQTOTBLKSTSCHANGED
description: D Crdmmreqtotblkstschanged
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CRDMMREQTOTBLKSTSCHANGED

**D Crdmmreqtotblkstschanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime            : vdm_lastchangedon;` | `EventRaisedDateTime            : vdm_lastchangedon;` |
| `CreditMemoRequestType          : auart_unv;` | `CreditMemoRequestType          : auart_unv;` |
| `SalesOrganization              : vkorg;` | `SalesOrganization              : vkorg;` |
| `DistributionChannel            : vtweg;` | `DistributionChannel            : vtweg;` |
| `OrganizationDivision           : spart;` | `OrganizationDivision           : spart;` |
| `SoldToParty                    : kunnr;` | `SoldToParty                    : kunnr;` |
| `TotalBlockStatus               : spstg;` | `TotalBlockStatus               : spstg;` |
| `PreviousTotalBlockStatus       : spstg;` | `PreviousTotalBlockStatus       : spstg;` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Tot Blk Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqTotBlkStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      CreditMemoRequestType          : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PreviousTotalBlockStatus'
      TotalBlockStatus               : spstg;

      PreviousTotalBlockStatus       : spstg;
}
```
