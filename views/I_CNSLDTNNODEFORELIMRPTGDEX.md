---
name: I_CNSLDTNNODEFORELIMRPTGDEX
description: Cnsldtnnodeforelimrptgdex
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-EA
  - interface-view
  - data-extraction
  - component:FIN-CS-EA-2CL
  - lob:Other
---
# I_CNSLDTNNODEFORELIMRPTGDEX

**Cnsldtnnodeforelimrptgdex**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `fincs_hierarchytype preserving type )` | `cast(_node.hrytyp` |
| `UniversalHierarchy` | `_node.hryid` |
| `fincs_hierarchynodeclass preserving type )` | `cast(_node.nodecls` |
| `fincs_hierarchynode preserving type )` | `cast(_node.hrynode` |
| `fincs_parentnode preserving type )` | `cast(_node.parnode` |
| `fincs_validityenddate preserving type )` | `cast(_node.hryvalto` |
| `fincs_validitystartdate preserving type )` | `cast(_node.hryvalfrom` |
| `fincs_hierarchynodevalue preserving type )` | `cast(_node.nodevalue` |
| `fincs_hierarchynodelevel preserving type )` | `cast(_node.hrylevel` |
| `fincs_nodetype preserving type )` | `cast(_node.nodetype` |

## Associations

> No associations found.

## Source Code

```abap
@Analytics: {
  dataExtraction: {
    enabled: true
  }
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE],
  sapObjectNodeType.name: 'CnsldtnNodeForElimRptg'

}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Node For Elim Reporting DEX'

define view entity I_CnsldtnNodeForElimRptgDEX
  as select from            hrrp_node_n      as _node

    left outer to many join fincs_addlcharcx as _addlcharcx on _addlcharcx.cnsldtnmanagementelimenabled = 'X'
                                                            and(
                                                              _addlcharcx.cnsldtnaddlcharcfldname       = 'SEGMENT'
                                                              or _addlcharcx.cnsldtnaddlcharcfldname    = 'PRCTR'
                                                            )
                                                            and(
                                                              _node.hrytyp                              = 'CS01'
                                                              or _node.hrytyp                           = 'CS04'
                                                            )
{
  key cast(_node.hrytyp as fincs_hierarchytype preserving type )         as HierarchyType,

  key _node.hryid                                                        as UniversalHierarchy,

  key cast(_node.nodecls as fincs_hierarchynodeclass preserving type )   as HierarchyNodeClass,

  key cast(_node.hrynode as fincs_hierarchynode preserving type )        as HierarchyNode,

  key cast(_node.parnode as fincs_parentnode preserving type )           as ParentNode,

  key cast(_node.hryvalto as fincs_validityenddate preserving type )     as ValidityEndDate,

      cast(_node.hryvalfrom as fincs_validitystartdate preserving type ) as ValidityStartDate,

      cast(_node.nodevalue as fincs_hierarchynodevalue preserving type ) as HierarchyNodeVal,

      cast(_node.hrylevel as fincs_hierarchynodelevel preserving type )  as HierarchyNodeLevel,

      cast(_node.nodetype as fincs_nodetype preserving type )            as NodeType
}
where
            _node.node_timedep                       = ''
  and(
    (
            _node.hrytyp                             = 'CS01'
      and(
            _addlcharcx.cnsldtnaddlcharcfldname      = 'SEGMENT'
        and _addlcharcx.cnsldtnmanagementelimenabled = 'X'
      )
    )
    or(
            _node.hrytyp                             = 'CS04'
      and(
            _addlcharcx.cnsldtnaddlcharcfldname      = 'PRCTR'
        and _addlcharcx.cnsldtnmanagementelimenabled = 'X'
      )
    )
    or      _node.hrytyp                             = 'CS17'
  );
```
