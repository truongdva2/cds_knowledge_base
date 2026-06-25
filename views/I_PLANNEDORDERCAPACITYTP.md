---
name: I_PLANNEDORDERCAPACITYTP
description: Planned OrderCAPACITYTP
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - transactional-processing
  - planned-order
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# I_PLANNEDORDERCAPACITYTP

**Planned OrderCAPACITYTP**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key PlannedOrderCapacity.PlannedOrder` | `PlannedOrderCapacity.PlannedOrder` |
| `key PlannedOrderCapacity.CapacityRequirement` | `PlannedOrderCapacity.CapacityRequirement` |
| `key PlannedOrderCapacity.CapacityRequirementItem` | `PlannedOrderCapacity.CapacityRequirementItem` |
| `key PlannedOrderCapacity.CapacityRqmtItemCapacity` | `PlannedOrderCapacity.CapacityRqmtItemCapacity` |
| `PlannedOrderCapacity.Sequence` | `PlannedOrderCapacity.Sequence` |
| `PlannedOrderCapacity.Operation` | `PlannedOrderCapacity.Operation` |
| `PlannedOrderCapacity.SubOperation` | `PlannedOrderCapacity.SubOperation` |
| `PlannedOrderCapacity.WorkCenter` | `PlannedOrderCapacity.WorkCenter` |
| `PlannedOrderCapacity.MRPController, // - Make it read only in BDEF` | `PlannedOrderCapacity.MRPController, // - Make it read only in BDEF` |
| `PlannedOrderCapacity.MRPPlant,      // - Make it read only in BDEF` | `PlannedOrderCapacity.MRPPlant,      // - Make it read only in BDEF` |
| `PlannedOrderCapacity.OperationLatestStartDate` | `PlannedOrderCapacity.OperationLatestStartDate` |
| `PlannedOrderCapacity.OperationLatestStartTime` | `PlannedOrderCapacity.OperationLatestStartTime` |
| `PlannedOrderCapacity.OperationLatestEndDate` | `PlannedOrderCapacity.OperationLatestEndDate` |
| `PlannedOrderCapacity.OperationLatestEndTime` | `PlannedOrderCapacity.OperationLatestEndTime` |
| `PlannedOrderCapacity.OperationEarliestStartDate` | `PlannedOrderCapacity.OperationEarliestStartDate` |
| `PlannedOrderCapacity.OperationEarliestStartTime` | `PlannedOrderCapacity.OperationEarliestStartTime` |
| `PlannedOrderCapacity.OperationEarliestEndDate` | `PlannedOrderCapacity.OperationEarliestEndDate` |
| `PlannedOrderCapacity.OperationEarliestEndTime` | `PlannedOrderCapacity.OperationEarliestEndTime` |
| `PlannedOrderCapacity.OpLtstSchedldProcgStrtDte` | `PlannedOrderCapacity.OpLtstSchedldProcgStrtDte` |
| `PlannedOrderCapacity.OpLtstSchedldProcgStrtTme` | `PlannedOrderCapacity.OpLtstSchedldProcgStrtTme` |
| `PlannedOrderCapacity.OpLtstSchedldTrdwnStrtDte` | `PlannedOrderCapacity.OpLtstSchedldTrdwnStrtDte` |
| `PlannedOrderCapacity.OpLtstSchedldTrdwnStrtTme` | `PlannedOrderCapacity.OpLtstSchedldTrdwnStrtTme` |
| `PlannedOrderCapacity.CapacityRequirementUnit` | `PlannedOrderCapacity.CapacityRequirementUnit` |
| `PlannedOrderCapacity.ScheduledCapReqOpSegSetupDurn` | `PlannedOrderCapacity.ScheduledCapReqOpSegSetupDurn` |
| `PlannedOrderCapacity.RemainingCapReqOpSegSetupDurn` | `PlannedOrderCapacity.RemainingCapReqOpSegSetupDurn` |
| `PlannedOrderCapacity.ScheduledCapReqOpSegProcgDurn` | `PlannedOrderCapacity.ScheduledCapReqOpSegProcgDurn` |
| `PlannedOrderCapacity.RemainingCapReqOpSegProcgDurn` | `PlannedOrderCapacity.RemainingCapReqOpSegProcgDurn` |
| `PlannedOrderCapacity.ScheduledCapReqOpSegTrdwnDurn` | `PlannedOrderCapacity.ScheduledCapReqOpSegTrdwnDurn` |
| `PlannedOrderCapacity.RemainingCapReqOpSegTrdwnDurn` | `PlannedOrderCapacity.RemainingCapReqOpSegTrdwnDurn` |
| `PlannedOrderCapacity.WrkCtrHasLeadingCapacity` | `PlannedOrderCapacity.WrkCtrHasLeadingCapacity` |
| `PlannedOrderCapacity.OperationText` | `PlannedOrderCapacity.OperationText` |
| `PlannedOrderCapacity.PlannedOrderLastChangeDateTime` | `PlannedOrderCapacity.PlannedOrderLastChangeDateTime` |
| `PlannedOrderCapacity.WorkCenterText` | `PlannedOrderCapacity.WorkCenterText` |
| `PlannedOrderCapacity.MRPControllerName` | `PlannedOrderCapacity.MRPControllerName` |
| `PlannedOrderCapacity.PlantName` | `PlannedOrderCapacity.PlantName` |
| `PlannedOrderCapacity._PlannedOrder : redirected to parent I_PlannedOrderTP` | `PlannedOrderCapacity._PlannedOrder : redirected to parent I_PlannedOrderTP` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Interface for Capacity entity of BO PlannedOrder - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity I_PlannedOrderCapacityTP
  as projection on R_PlannedOrderCapacityTP as PlannedOrderCapacity
{
  key PlannedOrderCapacity.PlannedOrder,
  key PlannedOrderCapacity.CapacityRequirement,
  key PlannedOrderCapacity.CapacityRequirementItem,
  key PlannedOrderCapacity.CapacityRqmtItemCapacity,

      // Basic information
      PlannedOrderCapacity.Sequence,
      PlannedOrderCapacity.Operation,
      @EndUserText.label: 'SubOperation'
      PlannedOrderCapacity.SubOperation,
      @ObjectModel.text.element: ['WorkCenterText']
      PlannedOrderCapacity.WorkCenter,
      @ObjectModel.text.element: ['MRPControllerName']
      PlannedOrderCapacity.MRPController, // - Make it read only in BDEF
      @ObjectModel.text.element: ['PlantName']
      PlannedOrderCapacity.MRPPlant,      // - Make it read only in BDEF

      PlannedOrderCapacity.OperationLatestStartDate,
      PlannedOrderCapacity.OperationLatestStartTime,
      PlannedOrderCapacity.OperationLatestEndDate,
      PlannedOrderCapacity.OperationLatestEndTime,

      PlannedOrderCapacity.OperationEarliestStartDate,
      PlannedOrderCapacity.OperationEarliestStartTime,
      PlannedOrderCapacity.OperationEarliestEndDate,
      PlannedOrderCapacity.OperationEarliestEndTime,
      
      @EndUserText.label: 'Processing Start Date'
      PlannedOrderCapacity.OpLtstSchedldProcgStrtDte,
      @EndUserText.label: 'Processing Start Date'
      PlannedOrderCapacity.OpLtstSchedldProcgStrtTme,
      PlannedOrderCapacity.OpLtstSchedldTrdwnStrtDte,
      PlannedOrderCapacity.OpLtstSchedldTrdwnStrtTme,

      // Capacity durations
      //@Semantics.unitOfMeasure: true
      PlannedOrderCapacity.CapacityRequirementUnit,
      PlannedOrderCapacity.ScheduledCapReqOpSegSetupDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegSetupDurn,
      PlannedOrderCapacity.ScheduledCapReqOpSegProcgDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegProcgDurn,
      PlannedOrderCapacity.ScheduledCapReqOpSegTrdwnDurn,
      PlannedOrderCapacity.RemainingCapReqOpSegTrdwnDurn,

      PlannedOrderCapacity.WrkCtrHasLeadingCapacity,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.OperationText,
      
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.PlannedOrderLastChangeDateTime,
      
      //exposing below fields for custom ui service
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.WorkCenterText,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.MRPControllerName,
      @Consumption.filter.hidden: true
      PlannedOrderCapacity.PlantName,
      
      PlannedOrderCapacity._PlannedOrder : redirected to parent I_PlannedOrderTP
}
```
