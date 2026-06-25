---
name: I_QUALITYNOTIFICATIONITEMTP
description: Quality NotificationICATIONITEMTP
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
  - quality-notification
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYNOTIFICATIONITEMTP

**Quality NotificationICATIONITEMTP**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _QualityNotificationItem.QualityNotification` | `_QualityNotificationItem.QualityNotification` |
| `key _QualityNotificationItem.NotificationItem` | `_QualityNotificationItem.NotificationItem` |
| `_QualityNotificationItem.NotificationItemExternalID` | *Association* |
| `_QualityNotificationItem.NotificationItemText` | *Association* |
| `_QualityNotificationItem.MasterLanguage` | *Association* |
| `_QualityNotificationItem.Assembly` | *Association* |
| `_QualityNotificationItem.DefectClass` | *Association* |
| `_QualityNotificationItem.NumberOfDefects` | *Association* |
| `_QualityNotificationItem.InspPlanOperationInternalID` | *Association* |
| `_QualityNotificationItem.InspectionCharacteristic` | *Association* |
| `_QualityNotificationItem.InspectionSubsetInternalID` | *Association* |
| `_QualityNotificationItem.MaterialSample` | *Association* |
| `_QualityNotificationItem.DefectiveSingleUnit` | *Association* |
| `_QualityNotificationItem.WorkCenterTypeCode` | *Association* |
| `_QualityNotificationItem.MainWorkCenterInternalID` | *Association* |
| `_QualityNotificationItem.MainWorkCenter` | *Association* |
| `_QualityNotificationItem.MainWorkCenterPlant` | *Association* |
| `_QualityNotificationItem.DefectOrigin` | *Association* |
| `_QualityNotificationItem.ReferencedDefect` | *Association* |
| `_QualityNotificationItem.IsDeleted` | *Association* |
| `_QualityNotificationItem.DefectCodeCatalog` | *Association* |
| `_QualityNotificationItem.DefectCodeGroup` | *Association* |
| `_QualityNotificationItem.DefectCode` | *Association* |
| `_QualityNotificationItem.NotifItmObjectPartCodeCtlg` | *Association* |
| `_QualityNotificationItem.NotifItmObjectPartCodeGroup` | *Association* |
| `_QualityNotificationItem.NotifItmObjectPartCode` | *Association* |
| `_QualityNotificationItem.ExternalDefectiveQuantity` | *Association* |
| `_QualityNotificationItem.InternalDefectiveQuantity` | *Association* |
| `_QualityNotificationItem.DefectiveQuantityUnit` | *Association* |
| `_QualityNotificationItem.CreatedByUser` | *Association* |
| `_QualityNotificationItem.CreationDate` | *Association* |
| `_QualityNotificationItem.CreationTime` | *Association* |
| `_QualityNotificationItem.LastChangedByUser` | *Association* |
| `_QualityNotificationItem.LastChangeDate` | *Association* |
| `_QualityNotificationItem.LastChangeTime` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_QualityNotificationItem._QltyNotification          : redirected to parent            I_QltyNotificationTP` | *Association* |
| `_QualityNotificationItem._QltyNotifItemLongText     : redirected to composition child I_QltyNotifItemLongTextTP` | *Association* |
| `_QualityNotificationItem._QltyNotificationItemCause : redirected to composition child I_QltyNotificationItemCauseTP` | *Association* |
| `_QualityNotificationItem._Notification` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'NotificationItem'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityNotificationItemTP
  as projection on R_QualityNotificationItemTP as _QualityNotificationItem 

{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QualityNotificationItem.QualityNotification,
  key _QualityNotificationItem.NotificationItem,

      _QualityNotificationItem.NotificationItemExternalID,

      @Semantics.text: true
      _QualityNotificationItem.NotificationItemText,

      _QualityNotificationItem.MasterLanguage,
      _QualityNotificationItem.Assembly,
      _QualityNotificationItem.DefectClass,

      _QualityNotificationItem.NumberOfDefects,

      _QualityNotificationItem.InspPlanOperationInternalID,
      _QualityNotificationItem.InspectionCharacteristic,
      _QualityNotificationItem.InspectionSubsetInternalID,
      _QualityNotificationItem.MaterialSample,
      _QualityNotificationItem.DefectiveSingleUnit,

      _QualityNotificationItem.WorkCenterTypeCode,
      _QualityNotificationItem.MainWorkCenterInternalID,
      _QualityNotificationItem.MainWorkCenter,
      _QualityNotificationItem.MainWorkCenterPlant,

      _QualityNotificationItem.DefectOrigin,
      _QualityNotificationItem.ReferencedDefect,

      @Semantics.booleanIndicator: true
      _QualityNotificationItem.IsDeleted,

      _QualityNotificationItem.DefectCodeCatalog,
      _QualityNotificationItem.DefectCodeGroup,
      _QualityNotificationItem.DefectCode,
      _QualityNotificationItem.NotifItmObjectPartCodeCtlg,
      _QualityNotificationItem.NotifItmObjectPartCodeGroup,
      _QualityNotificationItem.NotifItmObjectPartCode,

      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      _QualityNotificationItem.ExternalDefectiveQuantity,
      @Semantics.quantity.unitOfMeasure: 'DefectiveQuantityUnit'
      _QualityNotificationItem.InternalDefectiveQuantity,
//      @Semantics.unitOfMeasure: true
      _QualityNotificationItem.DefectiveQuantityUnit,

      @Semantics.user.createdBy: true
      _QualityNotificationItem.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      _QualityNotificationItem.CreationDate,
      @Semantics.time: true
      _QualityNotificationItem.CreationTime,
      @Semantics.user.lastChangedBy: true
      _QualityNotificationItem.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _QualityNotificationItem.LastChangeDate,
      @Semantics.time: true
      _QualityNotificationItem.LastChangeTime,


      /* Associations */
      _QualityNotificationItem._QltyNotification          : redirected to parent            I_QltyNotificationTP,

      @Semantics.valueRange.maximum: '1'
      _QualityNotificationItem._QltyNotifItemLongText     : redirected to composition child I_QltyNotifItemLongTextTP,
      _QualityNotificationItem._QltyNotificationItemCause : redirected to composition child I_QltyNotificationItemCauseTP,

      // For auth check mapping role
      _QualityNotificationItem._Notification

}
```
