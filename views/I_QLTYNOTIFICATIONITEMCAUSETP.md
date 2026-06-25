---
name: I_QLTYNOTIFICATIONITEMCAUSETP
description: Qltynotificationitemcausetp
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
  - item-level
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONITEMCAUSETP

**Qltynotificationitemcausetp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key _QltyNotificationItemCauseTP.QualityNotification` | `_QltyNotificationItemCauseTP.QualityNotification` |
| `key _QltyNotificationItemCauseTP.NotificationItem` | `_QltyNotificationItemCauseTP.NotificationItem` |
| `key _QltyNotificationItemCauseTP.NotificationCauseID` | `_QltyNotificationItemCauseTP.NotificationCauseID` |
| `_QltyNotificationItemCauseTP.NotificationCauseSortNumber` | *Association* |
| `_QltyNotificationItemCauseTP.MasterLanguage` | *Association* |
| `_QltyNotificationItemCauseTP.NotificationCauseText` | *Association* |
| `_QltyNotificationItemCauseTP.NotificationCauseCodeCatalog` | *Association* |
| `_QltyNotificationItemCauseTP.NotificationCauseCodeGroup` | *Association* |
| `_QltyNotificationItemCauseTP.NotificationCauseCode` | *Association* |
| `_QltyNotificationItemCauseTP.NotificationRootCause` | *Association* |
| `_QltyNotificationItemCauseTP.IsDeleted` | *Association* |
| `_QltyNotificationItemCauseTP.IsBusinessPurposeCompleted` | *Association* |
| `_QltyNotificationItemCauseTP.CreatedByUser` | *Association* |
| `_QltyNotificationItemCauseTP.CreationDate` | *Association* |
| `_QltyNotificationItemCauseTP.CreationTime` | *Association* |
| `_QltyNotificationItemCauseTP.LastChangedByUser` | *Association* |
| `_QltyNotificationItemCauseTP.LastChangeDate` | *Association* |
| `_QltyNotificationItemCauseTP.LastChangeTime` | *Association* |
| `_QltyNotificationItemCauseTP._QltyNotification        : redirected to        I_QltyNotificationTP` | *Association* |
| `_QltyNotificationItemCauseTP._QualityNotificationItem : redirected to parent I_QualityNotificationItemTP` | *Association* |
| `_QltyNotificationItemCauseTP._Notification` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Quality Notification Item Cause - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'NotificationCauseID'
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotificationItemCauseTP
  as projection on R_QltyNotificationItemCauseTP as _QltyNotificationItemCauseTP
{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QltyNotificationItemCauseTP.QualityNotification,
      @ObjectModel.foreignKey.association: '_QualityNotificationItem'
  key _QltyNotificationItemCauseTP.NotificationItem,
  key _QltyNotificationItemCauseTP.NotificationCauseID,
  
      _QltyNotificationItemCauseTP.NotificationCauseSortNumber,
      _QltyNotificationItemCauseTP.MasterLanguage,

      @Semantics.text: true
      _QltyNotificationItemCauseTP.NotificationCauseText,
      
      // Codes
      _QltyNotificationItemCauseTP.NotificationCauseCodeCatalog,
      _QltyNotificationItemCauseTP.NotificationCauseCodeGroup,
      _QltyNotificationItemCauseTP.NotificationCauseCode,
      
      _QltyNotificationItemCauseTP.NotificationRootCause,

      @Semantics.booleanIndicator: true
      _QltyNotificationItemCauseTP.IsDeleted,
      @Semantics.booleanIndicator: true
      _QltyNotificationItemCauseTP.IsBusinessPurposeCompleted,

      // Admin Data
      @Semantics.user.createdBy: true
      _QltyNotificationItemCauseTP.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      _QltyNotificationItemCauseTP.CreationDate,
      @Semantics.time: true
      _QltyNotificationItemCauseTP.CreationTime,
      @Semantics.user.lastChangedBy: true
      _QltyNotificationItemCauseTP.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _QltyNotificationItemCauseTP.LastChangeDate,
      @Semantics.time: true
      _QltyNotificationItemCauseTP.LastChangeTime,

      // Associations
      _QltyNotificationItemCauseTP._QltyNotification        : redirected to        I_QltyNotificationTP,
      _QltyNotificationItemCauseTP._QualityNotificationItem : redirected to parent I_QualityNotificationItemTP,

      // For auth check mapping role
      _QltyNotificationItemCauseTP._Notification

}
```
