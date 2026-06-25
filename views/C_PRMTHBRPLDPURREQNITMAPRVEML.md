---
name: C_PRMTHBRPLDPURREQNITMAPRVEML
description: Prmthbrpldpurreqnitmaprveml
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURREQNITMAPRVEML

**Prmthbrpldpurreqnitmaprveml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _Workflowtask.WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `_PurchaseRequisitionItem.ProcmtHubPurchaseRequisition                                                         as ProcmtHubPurchaseRequisition` | *Association* |
| `_PurchaseRequisitionItem.ProcmtHubPurRequisitionItem                                                          as ProcmtHubPurRequisitionItem` | *Association* |
| `_PurchaseRequisitionItem.ProcmtHubPurRequisitionType                                                          as ProcmtHubPurRequisitionType` | *Association* |
| `_PurchaseRequisitionItem.ProcurementHubSourceSystem                                                           as ProcurementHubSourceSystem` | *Association* |
| `sww_lsd )` | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' )` |
| `sww_lst )` | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' )` |
| `sww_led )` | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' )` |
| `sww_let )` | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' )` |
| `_PurchaseRequisitionItem.ProcmtHubSupplier` | *Association* |
| `_User.UserDescription                                                                                         as CreatedByUserDescription` | *Association* |
| `_Supplier.SupplierName` | *Association* |
| `_Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReason` | *Association* |
| `_Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURRQNITAPREML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Requisition Itm Details for WF Approval Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.modelingPattern : #NONE
@Metadata.ignorePropagatedAnnotations:true

define view C_PrmtHbRpldPurReqnItmAprvEml
  as select from            I_WorkflowTask               as _Workflowtask

    inner join I_WorkflowTaskApplObject     as _WorkflowTaskApplObject  on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                     and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseReqnItem'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_PrmtHbRpldPurReqnItemAPI01 as _PurchaseRequisitionItem on  _PurchaseRequisitionItem.ProcmtHubPurchaseRequisition = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
                                                                                     and _PurchaseRequisitionItem.ProcmtHubPurRequisitionItem  = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey2

    left outer to one join  I_User                       as _User                    on _User.UserID = _PurchaseRequisitionItem.ProcmtHubCreatedByUser
    left outer to one join  I_Supplier                   as _Supplier                on _Supplier.Supplier = _PurchaseRequisitionItem.ProcmtHubSupplier

{
  key _Workflowtask.WorkflowTaskInternalID,

      _PurchaseRequisitionItem.ProcmtHubPurchaseRequisition                                                         as ProcmtHubPurchaseRequisition,

      _PurchaseRequisitionItem.ProcmtHubPurRequisitionItem                                                          as ProcmtHubPurRequisitionItem,

      _PurchaseRequisitionItem.ProcmtHubPurRequisitionType                                                          as ProcmtHubPurRequisitionType,

      _PurchaseRequisitionItem.ProcurementHubSourceSystem                                                           as ProcurementHubSourceSystem,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme,

      _PurchaseRequisitionItem.ProcmtHubSupplier,

      _User.UserDescription                                                                                         as CreatedByUserDescription,

      _Supplier.SupplierName,
      
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReason,
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText[1:Language=$session.system_language].WorkflowTaskResultReasonText

}
```
