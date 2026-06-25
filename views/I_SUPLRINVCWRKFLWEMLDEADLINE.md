---
name: I_SUPLRINVCWRKFLWEMLDEADLINE
description: Suplrinvcwrkflwemldeadline
app_component: MM-IV-INT-WF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-INT
  - interface-view
  - workflow
  - component:MM-IV-INT-WF-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCWRKFLWEMLDEADLINE

**Suplrinvcwrkflwemldeadline**

| Property | Value |
|---|---|
| App Component | `MM-IV-INT-WF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_WorkflowTask.WorkflowTaskInternalID` |
| `_WorkflowTaskApplObject.SAPObjectNodeRepresentation` | *Association* |
| `_WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName              as SuplrInvcWrkflwTaskDesc` | *Association* |
| `_WorkflowTask.WorkflowTaskType                                                              as SuplrInvcWrkflwTaskType` | *Association* |
| `_WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc     as SuplrInvcWrkflwTskTypeDesc` | *Association* |
| `_WorkflowTask.WorkflowTaskStatus                                                            as SuplrInvcWrkflwTaskStatus` | *Association* |
| `_WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc as SuplrInvcWrkflwTskStatusDesc` | *Association* |
| `_WorkflowTask.WorkflowTaskCreatedByUser` | *Association* |
| `_WorkflowTask.WrkflwTskCreationUTCDateTime                                                  as SuplrInvcWrkflwTskCrtnDateTime` | *Association* |
| `_WorkflowTask.WorkflowTaskCurrentUser` | *Association* |
| `_User.UserDescription                                                                       as FullName` | *Association* |
| `_WorkflowTask.WorkflowTaskDefinition` | *Association* |
| `_WorkflowTask._TaskDueDate.WorkflowTaskDueUTCDateTime` | *Association* |
| `_SupplierInvoice.SupplierInvoice` | *Association* |
| `_SupplierInvoice.FiscalYear` | *Association* |
| `_SupplierInvoice.CompanyCode` | *Association* |
| `_CompanyCodeText.CompanyCodeName` | *Association* |
| `_SupplierInvoice.InvoicingParty` | *Association* |
| `_SupplierText.SupplierName` | *Association* |
| `_SupplierText.BPSupplierName` | *Association* |
| `_SupplierInvoice.InvoiceGrossAmount` | *Association* |
| `_SupplierInvoice.DocumentCurrency` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISIWFEMLDL'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #COMPOSITE
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
// This would be sematically correct, cannot change due to compatibility: @ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER

@EndUserText.label: 'Supplier Invoice Details for Workflow Deadline Email'
define view I_SuplrInvcWrkflwEmlDeadLine
  as select from           I_WorkflowTask             as _WorkflowTask
    inner join             I_WorkflowTaskApplObject   as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                                 and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                 and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'SupplierInvoice'
                                                                                 and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
    left outer to one join I_User                     as _User                   on _WorkflowTask.WorkflowTaskCurrentUser = _User.UserID
    left outer to one join I_SupplierInvoiceAPI01     as _SupplierInvoice        on  _SupplierInvoice.SupplierInvoice               = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
                                                                                 and _SupplierInvoice.FiscalYear                    = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey2
                                                                                 and _WorkflowTaskApplObject.WorkflowTaskInternalID is not null
    left outer to one join I_CompanyCode              as _CompanyCodeText        on _SupplierInvoice.CompanyCode = _CompanyCodeText.CompanyCode
    left outer to one join I_Supplier                 as _SupplierText           on _SupplierText.Supplier = _SupplierInvoice.InvoicingParty
{

  key  _WorkflowTask.WorkflowTaskInternalID                                                        as WorkflowTaskInternalID,

       _WorkflowTaskApplObject.SAPObjectNodeRepresentation,

       _WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName              as SuplrInvcWrkflwTaskDesc,

       _WorkflowTask.WorkflowTaskType                                                              as SuplrInvcWrkflwTaskType,

       _WorkflowTask._TaskType._Text[1:Language=$session.system_language].WorkflowTaskTypeDesc     as SuplrInvcWrkflwTskTypeDesc,

       _WorkflowTask.WorkflowTaskStatus                                                            as SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _WorkflowTask._TaskStatus._Text[1:Language=$session.system_language].WorkflowTaskStatusDesc as SuplrInvcWrkflwTskStatusDesc,

       _WorkflowTask.WorkflowTaskCreatedByUser,

       _WorkflowTask.WrkflwTskCreationUTCDateTime                                                  as SuplrInvcWrkflwTskCrtnDateTime,

       _WorkflowTask.WorkflowTaskCurrentUser,

       _User.UserDescription                                                                       as FullName,

       _WorkflowTask.WorkflowTaskDefinition,

       _WorkflowTask._TaskDueDate.WorkflowTaskDueUTCDateTime,

       _SupplierInvoice.SupplierInvoice,

       _SupplierInvoice.FiscalYear,

       _SupplierInvoice.CompanyCode,

       _CompanyCodeText.CompanyCodeName,

       _SupplierInvoice.InvoicingParty,

       @API.element.releaseState: #DEPRECATED
       @API.element.successor: 'BPSupplierName'
       _SupplierText.SupplierName,
       
       _SupplierText.BPSupplierName,

       @Semantics.amount.currencyCode: 'DocumentCurrency'
       _SupplierInvoice.InvoiceGrossAmount,

       _SupplierInvoice.DocumentCurrency

}
where
  _WorkflowTask.WorkflowTaskType = 'W'
```
