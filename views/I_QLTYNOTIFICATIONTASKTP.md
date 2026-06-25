---
name: I_QLTYNOTIFICATIONTASKTP
description: Qltynotificationtasktp
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
# I_QLTYNOTIFICATIONTASKTP

**Qltynotificationtasktp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _QualityNotificationTask.QualityNotification` | `_QualityNotificationTask.QualityNotification` |
| `key _QualityNotificationTask.NotificationTask` | `_QualityNotificationTask.NotificationTask` |
| `_QualityNotificationTask.NotificationTaskText` | *Association* |
| `_QualityNotificationTask.IsDeleted` | *Association* |
| `_QualityNotificationTask.NotifTaskPlannedStartDate` | *Association* |
| `_QualityNotificationTask.NotifTaskPlannedStartTime` | *Association* |
| `_QualityNotificationTask.NotifTaskPlannedEndDate` | *Association* |
| `_QualityNotificationTask.NotifTaskPlannedEndTime` | *Association* |
| `_QualityNotificationTask.StatusObject` | *Association* |
| `_QualityNotificationTask.NotifTaskCompletedByUser` | *Association* |
| `_QualityNotificationTask.NotifTaskCompletionDate` | *Association* |
| `_QualityNotificationTask.NotifTaskCompletionTime` | *Association* |
| `_QualityNotificationTask.ResponsiblePersonFunctionCode` | *Association* |
| `_QualityNotificationTask.PersonResponsible` | *Association* |
| `_QualityNotificationTask.NotificationTaskSortNumber` | *Association* |
| `_QualityNotificationTask.NotificationItem` | *Association* |
| `_QualityNotificationTask.NotificationCauseID` | *Association* |
| `_QualityNotificationTask.QualityTaskCodeCatalog` | *Association* |
| `_QualityNotificationTask.QualityTaskCodeGroup` | *Association* |
| `_QualityNotificationTask.QualityTaskCode` | *Association* |
| `_QualityNotificationTask.QltyTaskTimeBasedEffort` | *Association* |
| `_QualityNotificationTask.QltyTaskTimeBasedEffortUoM` | *Association* |
| `_QualityNotificationTask.CreatedByUser` | *Association* |
| `_QualityNotificationTask.CreationDate` | *Association* |
| `_QualityNotificationTask.CreationTime` | *Association* |
| `_QualityNotificationTask.LastChangedByUser` | *Association* |
| `_QualityNotificationTask.LastChangeDate` | *Association* |
| `_QualityNotificationTask.LastChangeTime` | *Association* |
| `_QualityNotificationTask.NotificationType` | *Association* |
| `_QualityNotificationTask.Plant` | *Association* |
| `_QualityNotificationTask.IsBusinessPurposeCompleted` | *Association* |
| `_QualityNotificationTask._QltyNotification             : redirected to parent            I_QltyNotificationTP` | *Association* |
| `_QualityNotificationTask._QltyNotificationTaskLongText : redirected to composition child I_QltyNotifTaskLongTextTP` | *Association* |
| `/* Associations *///Only included because of authorization check with DPP` | `/* Associations *///Only included because of authorization check with DPP` |
| `_QualityNotificationTask._PartnerFunction` | *Association* |
| `_QualityNotificationTask._ContactPerson` | *Association* |
| `_QualityNotificationTask._Employee` | *Association* |
| `_QualityNotificationTask._Customer` | *Association* |
| `_QualityNotificationTask._Supplier` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Quality Notification Task - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A },
    representativeKey: 'NotificationTask'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotificationTaskTP 
  as projection on R_QltyNotificationTaskTP as _QualityNotificationTask
  
{
      @ObjectModel.foreignKey.association: '_QltyNotification'      
  key _QualityNotificationTask.QualityNotification,
  key _QualityNotificationTask.NotificationTask,
  
      _QualityNotificationTask.NotificationTaskText,
      @Semantics.booleanIndicator: true
      _QualityNotificationTask.IsDeleted,
      _QualityNotificationTask.NotifTaskPlannedStartDate,
      _QualityNotificationTask.NotifTaskPlannedStartTime,
      _QualityNotificationTask.NotifTaskPlannedEndDate,
      _QualityNotificationTask.NotifTaskPlannedEndTime,
      _QualityNotificationTask.StatusObject,
//      _QualityNotificationTask.NotifTaskTimeZone,
      _QualityNotificationTask.NotifTaskCompletedByUser,
      _QualityNotificationTask.NotifTaskCompletionDate,
      _QualityNotificationTask.NotifTaskCompletionTime,

//    Not supported
//      _QualityNotificationTask.NotifTaskResubmissionDate,
//      _QualityNotificationTask.NotifTaskResubmissionTime,

      _QualityNotificationTask.ResponsiblePersonFunctionCode,
      _QualityNotificationTask.PersonResponsible,
      _QualityNotificationTask.NotificationTaskSortNumber,
      _QualityNotificationTask.NotificationItem,
      _QualityNotificationTask.NotificationCauseID,
      
      //=== Task Code  
      _QualityNotificationTask.QualityTaskCodeCatalog,
      _QualityNotificationTask.QualityTaskCodeGroup,
      _QualityNotificationTask.QualityTaskCode,
      
      //====Time Recording for Task
      @Semantics.quantity.unitOfMeasure: 'QltyTaskTimeBasedEffortUoM'
      _QualityNotificationTask.QltyTaskTimeBasedEffort,
      _QualityNotificationTask.QltyTaskTimeBasedEffortUoM,
      
      //=== Administrative Data
      _QualityNotificationTask.CreatedByUser,
      _QualityNotificationTask.CreationDate,
      _QualityNotificationTask.CreationTime,
      _QualityNotificationTask.LastChangedByUser,
      _QualityNotificationTask.LastChangeDate,
      _QualityNotificationTask.LastChangeTime,
      
      //=== Fields of quality notification header used in DCL for authorization check
      _QualityNotificationTask.NotificationType,
      _QualityNotificationTask.Plant,
      @Semantics.booleanIndicator: true
      _QualityNotificationTask.IsBusinessPurposeCompleted,
  
      //=== Associations
      _QualityNotificationTask._QltyNotification             : redirected to parent            I_QltyNotificationTP,
      
      @Semantics.valueRange.maximum: '1'
      _QualityNotificationTask._QltyNotificationTaskLongText : redirected to composition child I_QltyNotifTaskLongTextTP,
  
      /* Associations *///Only included because of authorization check with DPP
      _QualityNotificationTask._PartnerFunction,
      _QualityNotificationTask._ContactPerson,
      _QualityNotificationTask._Employee,
      _QualityNotificationTask._Customer,
      _QualityNotificationTask._Supplier
      
}
```
