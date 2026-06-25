---
name: D_TRANSPORDLIFECYCLESTSCHGD
description: D Transpordlifecyclestschgd
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDLIFECYCLESTSCHGD

**D Transpordlifecyclestschgd**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrder        : /scmtms/tor_id;` | `TransportationOrder        : /scmtms/tor_id;` |
| `TransportationOrderType    : /scmtms/tor_type;` | `TransportationOrderType    : /scmtms/tor_type;` |
| `TransportationMode         : /scmtms/trmodcode;` | `TransportationMode         : /scmtms/trmodcode;` |
| `TransportationShippingType : /scmtms/shipping_type;` | `TransportationShippingType : /scmtms/shipping_type;` |
| `Carrier                    : /scmtms/pty_carrier;` | `Carrier                    : /scmtms/pty_carrier;` |
| `TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;` | `TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;` |
| `TranspOrdLifeCycleStatus   : /scmtms/tor_lc_status;` | `TranspOrdLifeCycleStatus   : /scmtms/tor_lc_status;` |
| `__before                   : composition [1..1] of D_TranspOrdLifecycleStsBfr;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdLifecycleStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TranspOrdLifeCycleStatus   : /scmtms/tor_lc_status;
  __before                   : composition [1..1] of D_TranspOrdLifecycleStsBfr;

}
```
