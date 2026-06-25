---
name: C_SUPLRINVCWRKFLWEMLDEADLINE
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
  - consumption-view
  - workflow
  - component:MM-IV-INT-WF-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLRINVCWRKFLWEMLDEADLINE

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
| `key  _WorkflowDeadline.WorkflowTaskInternalID` | `_WorkflowDeadline.WorkflowTaskInternalID` |
| `_WorkflowDeadline.SAPObjectNodeRepresentation` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTaskDesc` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTaskType` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTskTypeDesc` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTaskStatus` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTskStatusDesc` | *Association* |
| `_WorkflowDeadline.WorkflowTaskCreatedByUser` | *Association* |
| `_WorkflowDeadline.SuplrInvcWrkflwTskCrtnDateTime` | *Association* |
| `_WorkflowDeadline.WorkflowTaskCurrentUser` | *Association* |
| `_WorkflowDeadline.FullName` | *Association* |
| `_WorkflowDeadline.WorkflowTaskDefinition` | *Association* |
| `_WorkflowDeadline.WorkflowTaskDueUTCDateTime` | *Association* |
| `_WorkflowDeadline.SupplierInvoice` | *Association* |
| `_WorkflowDeadline.FiscalYear` | *Association* |
| `_WorkflowDeadline.CompanyCode` | *Association* |
| `_WorkflowDeadline.CompanyCodeName` | *Association* |
| `_WorkflowDeadline.InvoicingParty` | *Association* |
| `_WorkflowDeadline.SupplierName` | *Association* |
| `_WorkflowDeadline.BPSupplierName` | *Association* |
| `_WorkflowDeadline.InvoiceGrossAmount` | *Association* |
| `_WorkflowDeadline.DocumentCurrency` | *Association* |
| `WorkflowTaskURL.WorkflowTaskURL` | `WorkflowTaskURL.WorkflowTaskURL` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSINVWFEMLURLDL'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType : #CONSUMPTION
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel: {
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #MIXED
}

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
// This would be sematically correct, cannot change due to compatibility: @ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER

@EndUserText.label: 'Supplier Invoice Details for WF Deadline Email'
define view C_SuplrInvcWrkflwEmlDeadLine
  as select from           I_SuplrInvcWrkflwEmlDeadLine as _WorkflowDeadline
    left outer to one join I_WorkflowTaskURL as WorkflowTaskURL on _WorkflowDeadline.WorkflowTaskInternalID = WorkflowTaskURL.WorkflowTaskInternalID
{
  key  _WorkflowDeadline.WorkflowTaskInternalID,

       _WorkflowDeadline.SAPObjectNodeRepresentation,

       _WorkflowDeadline.SuplrInvcWrkflwTaskDesc,

       _WorkflowDeadline.SuplrInvcWrkflwTaskType,

       _WorkflowDeadline.SuplrInvcWrkflwTskTypeDesc,

       _WorkflowDeadline.SuplrInvcWrkflwTaskStatus,

       @EndUserText.label: 'Task Status Name'
       _WorkflowDeadline.SuplrInvcWrkflwTskStatusDesc,

       _WorkflowDeadline.WorkflowTaskCreatedByUser,

       _WorkflowDeadline.SuplrInvcWrkflwTskCrtnDateTime,

       _WorkflowDeadline.WorkflowTaskCurrentUser,

       _WorkflowDeadline.FullName,

       _WorkflowDeadline.WorkflowTaskDefinition,

       _WorkflowDeadline.WorkflowTaskDueUTCDateTime,

       _WorkflowDeadline.SupplierInvoice,

       _WorkflowDeadline.FiscalYear,

       _WorkflowDeadline.CompanyCode,

       _WorkflowDeadline.CompanyCodeName,

       _WorkflowDeadline.InvoicingParty,

       @API.element.releaseState: #DEPRECATED
       @API.element.successor: 'BPSupplierName'
       _WorkflowDeadline.SupplierName,
       
       _WorkflowDeadline.BPSupplierName,

       @Semantics.amount.currencyCode: 'DocumentCurrency'
       _WorkflowDeadline.InvoiceGrossAmount,

       _WorkflowDeadline.DocumentCurrency,

       WorkflowTaskURL.WorkflowTaskURL

}
where
       _WorkflowDeadline.SuplrInvcWrkflwTaskType = 'W'
```
