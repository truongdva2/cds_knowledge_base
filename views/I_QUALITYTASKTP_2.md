---
name: I_QUALITYTASKTP_2
description: Qualitytasktp 2
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - transactional-processing
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYTASKTP_2

**Qualitytasktp 2**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _QualityTask.QualityTaskInternalId` | `_QualityTask.QualityTaskInternalId` |
| `_QualityTask.QualityTask` | *Association* |
| `_QualityTask.QualityTaskOrigin` | *Association* |
| `_QualityTask.QualityTaskText` | *Association* |
| `_QualityTask.IsDeleted` | *Association* |
| `_QualityTask.QualityTaskProcessor` | *Association* |
| `_QualityTask.MasterLanguage` | *Association* |
| `_QualityTask.NotifTaskCompletedByUser` | *Association* |
| `_QualityTask.QualityTaskType` | *Association* |
| `_QualityTask.QualityTaskCodeCatalog` | *Association* |
| `_QualityTask.QualityTaskCodeGroup` | *Association* |
| `_QualityTask.QualityTaskCode` | *Association* |
| `_QualityTask.NotifTaskTimeZone` | *Association* |
| `_QualityTask.NotifTaskPlannedEndDate` | *Association* |
| `_QualityTask.NotifTaskPlannedEndTime` | *Association* |
| `_QualityTask.NotifTaskCompletionDate` | *Association* |
| `_QualityTask.NotifTaskCompletionTime` | *Association* |
| `_QualityTask.NotifTaskResubmissionDate` | *Association* |
| `_QualityTask.NotifTaskResubmissionTime` | *Association* |
| `_QualityTask.DefectInternalID` | *Association* |
| `_QualityTask.PredecessorQltyTaskIntNumber` | *Association* |
| `_QualityTask.ProbSolvingProc` | *Association* |
| `_QualityTask.ProbSolvingProcStp` | *Association* |
| `_QualityTask.ProbSolvingProcCause` | *Association* |
| `_QualityTask.QltyTaskFollowUpAction` | *Association* |
| `_QualityTask.QualityTaskLifecycleStatus` | *Association* |
| `_QualityTask.QualityTaskArchivingStatus` | *Association* |
| `_QualityTask.QltyTaskFllwUpActionSts` | *Association* |
| `_QualityTask.CreatedByUser` | *Association* |
| `_QualityTask.CreationDate` | *Association* |
| `_QualityTask.CreationTime` | *Association* |
| `_QualityTask.ChangedDateTime` | *Association* |
| `_QualityTask.LastChangeDate` | *Association* |
| `_QualityTask.LastChangeTime` | *Association* |
| `_QualityTask.LastChangedByUser` | *Association* |
| `_QualityTask.QltyTskProcgIsCtrldByTskOrigin` | *Association* |
| `_QualityTask.QltyTaskTimeBasedEffort` | *Association* |
| `_QualityTask.QltyTaskTimeBasedEffortUoM` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_QualityTaskLongText : redirected to composition child I_QualityTaskLongTextTP_2` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Quality Task - TP'
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@ObjectModel.sapObjectNodeType: { name: 'QualityTask' }
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #A
  },
  representativeKey: 'QualityTaskInternalId',
  semanticKey: ['QualityTask']
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_QualityTaskTP_2
  provider contract transactional_interface
  as projection on R_QualityTaskTP as _QualityTask
  
{
  key _QualityTask.QualityTaskInternalId,
  
      @ObjectModel.sapObjectNodeTypeReference: 'QualityTask'
      _QualityTask.QualityTask,
      _QualityTask.QualityTaskOrigin,
      _QualityTask.QualityTaskText,
      @Semantics.booleanIndicator: true
      _QualityTask.IsDeleted,
      _QualityTask.QualityTaskProcessor,
      _QualityTask.MasterLanguage,
      _QualityTask.NotifTaskCompletedByUser,
      _QualityTask.QualityTaskType,
  
//=== Code
      _QualityTask.QualityTaskCodeCatalog,
      _QualityTask.QualityTaskCodeGroup,
      _QualityTask.QualityTaskCode,
  
//=== Time Zone dependent fields
      _QualityTask.NotifTaskTimeZone,
      _QualityTask.NotifTaskPlannedEndDate,
      _QualityTask.NotifTaskPlannedEndTime,
      _QualityTask.NotifTaskCompletionDate,
      _QualityTask.NotifTaskCompletionTime,
      _QualityTask.NotifTaskResubmissionDate,
      _QualityTask.NotifTaskResubmissionTime,

//=== Reference Object Fields
      _QualityTask.DefectInternalID,
      _QualityTask.PredecessorQltyTaskIntNumber,
      _QualityTask.ProbSolvingProc,
      _QualityTask.ProbSolvingProcStp,
      _QualityTask.ProbSolvingProcCause,
      
//=== Follow-Up Action
      _QualityTask.QltyTaskFollowUpAction,
      -- 'transient' field
      //_QualityTask.QltyTskFllwUpActnConfignVal,
  
//=== Status
      _QualityTask.QualityTaskLifecycleStatus,
      _QualityTask.QualityTaskArchivingStatus,
      _QualityTask.QltyTaskFllwUpActionSts,
      
//=== Administrative Data
      _QualityTask.CreatedByUser,
      _QualityTask.CreationDate,
      _QualityTask.CreationTime,
      _QualityTask.ChangedDateTime,
      _QualityTask.LastChangeDate,
      _QualityTask.LastChangeTime,
      _QualityTask.LastChangedByUser,
      _QualityTask.QltyTskProcgIsCtrldByTskOrigin,
      
//=== Time Recording for Task
      @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
      _QualityTask.QltyTaskTimeBasedEffort,
      _QualityTask.QltyTaskTimeBasedEffortUoM,
      
      /* Associations */
      _QualityTaskLongText : redirected to composition child I_QualityTaskLongTextTP_2

}
```
