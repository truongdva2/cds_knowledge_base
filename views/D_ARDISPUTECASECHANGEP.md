---
name: D_ARDISPUTECASECHANGEP
description: D Ardisputecasechangep
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECHANGEP

**D Ardisputecasechangep**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DisputeCaseUUID            : scmg_case_guid;` | `DisputeCaseUUID            : scmg_case_guid;` |
| `DisputeCaseCoordinator     : udm_coordinator;` | `DisputeCaseCoordinator     : udm_coordinator;` |
| `DisputeCaseRootCause       : udm_root_ccode;` | `DisputeCaseRootCause       : udm_root_ccode;` |
| `CaseProcessingDeadlineDate : udm_due_date;` | `CaseProcessingDeadlineDate : udm_due_date;` |
| `CustomerDisputedAmount     : udm_custdisp_amt;` | `CustomerDisputedAmount     : udm_custdisp_amt;` |
| `CustomerDisputedCurrency   : udm_custdisp_curr;` | `CustomerDisputedCurrency   : udm_custdisp_curr;` |
| `ContactPersonName          : udm_contact_name;` | `ContactPersonName          : udm_contact_name;` |
| `ContactPersonEmailAddress  : udm_contact_email;` | `ContactPersonEmailAddress  : udm_contact_email;` |
| `ContactPersonPhoneNumber   : udm_contact_phone;` | `ContactPersonPhoneNumber   : udm_contact_phone;` |
| `CaseExternalReference      : scmg_ext_ref;` | `CaseExternalReference      : scmg_ext_ref;` |
| `CasePlannedCloseDate       : scmg_plan_end_date;` | `CasePlannedCloseDate       : scmg_plan_end_date;` |
| `CaseProcessor              : scmg_processor;` | `CaseProcessor              : scmg_processor;` |
| `CaseResponsible            : scmg_responsible;` | `CaseResponsible            : scmg_responsible;` |
| `CaseTitle                  : scmg_case_title;` | `CaseTitle                  : scmg_case_title;` |
| `CaseEscalationReason       : scmg_escal_reason;` | `CaseEscalationReason       : scmg_escal_reason;` |
| `CaseCategory               : scmg_category;` | `CaseCategory               : scmg_category;` |
| `CasePriority               : scmg_priority;` | `CasePriority               : scmg_priority;` |
| `CaseStatus                 : scmgstatusonr;` | `CaseStatus                 : scmgstatusonr;` |
| `CaseReason                 : scmg_reason_code;` | `CaseReason                 : scmg_reason_code;` |
| `_Notes                     : composition [0..*] of D_ARDisputeCaseChangeNoteP;` | *Association* |
| `_Attachments               : composition [0..*] of D_ARDisputeCaseChangeAttchP;` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameter for action Change'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_ARDisputeCaseChangeP
{
  DisputeCaseUUID            : scmg_case_guid;
  DisputeCaseCoordinator     : udm_coordinator;
  DisputeCaseRootCause       : udm_root_ccode;
  CaseProcessingDeadlineDate : udm_due_date;
  @Semantics.amount.currencyCode: 'CustomerDisputedCurrency'
  CustomerDisputedAmount     : udm_custdisp_amt;
  CustomerDisputedCurrency   : udm_custdisp_curr;
  ContactPersonName          : udm_contact_name;
  ContactPersonEmailAddress  : udm_contact_email;
  ContactPersonPhoneNumber   : udm_contact_phone;
  CaseExternalReference      : scmg_ext_ref;
  CasePlannedCloseDate       : scmg_plan_end_date;
  CaseProcessor              : scmg_processor;
  CaseResponsible            : scmg_responsible;
  CaseTitle                  : scmg_case_title;
  CaseEscalationReason       : scmg_escal_reason;
  CaseCategory               : scmg_category;
  CasePriority               : scmg_priority;
  CaseStatus                 : scmgstatusonr;
  CaseReason                 : scmg_reason_code;

  _Notes                     : composition [0..*] of D_ARDisputeCaseChangeNoteP;
  _Attachments               : composition [0..*] of D_ARDisputeCaseChangeAttchP;
}
```
