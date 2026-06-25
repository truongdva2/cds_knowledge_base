---
name: I_ENTPROJCHGDOCUMENTDEX
description: Entprojchgdocumentdex
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - data-extraction
  - document
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJCHGDOCUMENTDEX

**Entprojchgdocumentdex**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `key ChangeDocObject` | `ChangeDocObject` |
| `key ChangeDocObjectClass` | `ChangeDocObjectClass` |
| `key ChangeDocument` | `ChangeDocument` |
| `key DatabaseTable` | `DatabaseTable` |
| `key ChangeDocTableKey` | `ChangeDocTableKey` |
| `key ChangeDocDatabaseTableField` | `ChangeDocDatabaseTableField` |
| `key ChangeDocItemChangeType` | `ChangeDocItemChangeType` |
| `case` | `case` |
| `when  ChangeDocDatabaseTableField = 'KEY'` | `when  ChangeDocDatabaseTableField = 'KEY'` |
| `then` | `then` |
| `cast('Key'as fieldname )` | `cast('Key'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'OBJECT_TYPE'` | `when  ChangeDocDatabaseTableField = 'OBJECT_TYPE'` |
| `then` | `then` |
| `cast('ObjectType'as fieldname )` | `cast('ObjectType'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'CAUSE'` | `when  ChangeDocDatabaseTableField = 'CAUSE'` |
| `then` | `then` |
| `cast('ProjectReasonCode'as fieldname )` | `cast('ProjectReasonCode'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'LOCATION'` | `when  ChangeDocDatabaseTableField = 'LOCATION'` |
| `then` | `then` |
| `cast('Location'as fieldname )` | `cast('Location'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'PRART'` | `when  ChangeDocDatabaseTableField = 'PRART'` |
| `then` | `then` |
| `cast('EnterpriseProjectType'as fieldname )` | `cast('EnterpriseProjectType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PROJECTUUID'` | `when ChangeDocDatabaseTableField = 'PROJECTUUID'` |
| `then` | `then` |
| `cast('ProjectUUID'as fieldname )` | `cast('ProjectUUID'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'KALSM'` | `when  ChangeDocDatabaseTableField = 'KALSM'` |
| `then` | `then` |
| `cast('CostingSheet'as fieldname )` | `cast('CostingSheet'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'PLVAR'` | `when  ChangeDocDatabaseTableField = 'PLVAR'` |
| `then` | `then` |
| `cast('PlanVersion'as fieldname )` | `cast('PlanVersion'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'FORECAST_START_DATE'` | `when  ChangeDocDatabaseTableField = 'FORECAST_START_DATE'` |
| `then` | `then` |
| `cast(' ForecastedStartDate'as fieldname )` | `cast(' ForecastedStartDate'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'FORECAST_FINISH_DATE'` | `when  ChangeDocDatabaseTableField = 'FORECAST_FINISH_DATE'` |
| `then` | `then` |
| `cast('ForecastedFinishDate'as fieldname )` | `cast('ForecastedFinishDate'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'RESP_ORG_UNIT'` | `when  ChangeDocDatabaseTableField = 'RESP_ORG_UNIT'` |
| `then` | `then` |
| `cast('OrganizationalUnit'as fieldname )` | `cast('OrganizationalUnit'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'RELEASED_ON'` | `when  ChangeDocDatabaseTableField = 'RELEASED_ON'` |
| `then` | `then` |
| `cast('ReleaseDateTime'as fieldname )` | `cast('ReleaseDateTime'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'SETTLEMENTELEMENT'` | `when  ChangeDocDatabaseTableField = 'SETTLEMENTELEMENT'` |
| `then` | `then` |
| `cast('EntProjectSettlementElement'as fieldname )` | `cast('EntProjectSettlementElement'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'APP_RELEVANT'` | `when  ChangeDocDatabaseTableField = 'APP_RELEVANT'` |
| `then` | `then` |
| `cast('IsApprovalRelevant'as fieldname )` | `cast('IsApprovalRelevant'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'CALENDAR_ID'` | `when  ChangeDocDatabaseTableField = 'CALENDAR_ID'` |
| `then` | `then` |
| `cast('FactoryCalendar'as fieldname )` | `cast('FactoryCalendar'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'XSTAT'` | `when  ChangeDocDatabaseTableField = 'XSTAT'` |
| `then` | `then` |
| `cast('WBSIsStatisticalWBSElement'as fieldname )` | `cast('WBSIsStatisticalWBSElement'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'SORT_NUMBER'` | `when  ChangeDocDatabaseTableField = 'SORT_NUMBER'` |
| `then` | `then` |
| `cast('SortingNumber'as fieldname )` | `cast('SortingNumber'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'SETTLEMENTTYPE'` | `when  ChangeDocDatabaseTableField = 'SETTLEMENTTYPE'` |
| `then` | `then` |
| `cast('EntProjectSettlementType'as fieldname )` | `cast('EntProjectSettlementType'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'PROC_STATUS_SUP'` | `when  ChangeDocDatabaseTableField = 'PROC_STATUS_SUP'` |
| `then` | `then` |
| `cast('TaskParentProcessingStatus'as fieldname )` | `cast('TaskParentProcessingStatus'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_VNAME'` | `when  ChangeDocDatabaseTableField = 'JV_VNAME'` |
| `then` | `then` |
| `cast('JointVenture'as fieldname )` | `cast('JointVenture'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'FUNCTION_ID'` | `when ChangeDocDatabaseTableField = 'FUNCTION_ID'` |
| `then` | `then` |
| `cast('EntProjElementFunctionID'as fieldname )` | `cast('EntProjElementFunctionID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'IS_BLOCKED'` | `when ChangeDocDatabaseTableField = 'IS_BLOCKED'` |
| `then` | `then` |
| `cast('BlockFunctionStatusIsBlocked'as fieldname )` | `cast('BlockFunctionStatusIsBlocked'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ROLE_GUID'` | `when ChangeDocDatabaseTableField = 'ROLE_GUID'` |
| `then` | `then` |
| `cast('ProjectRoleUUID'as fieldname )` | `cast('ProjectRoleUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TEAM_MEMBER_GUID'` | `when ChangeDocDatabaseTableField = 'TEAM_MEMBER_GUID'` |
| `then` | `then` |
| `cast('TeamMemberUUID'as fieldname )` | `cast('TeamMemberUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ROLE_CATEGORY'` | `when ChangeDocDatabaseTableField = 'ROLE_CATEGORY'` |
| `then` | `then` |
| `cast('ProjectRoleCategory'as fieldname )` | `cast('ProjectRoleCategory'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ROLE_NAME'` | `when ChangeDocDatabaseTableField = 'ROLE_NAME'` |
| `then` | `then` |
| `cast('ProjectRoleName'as fieldname )` | `cast('ProjectRoleName'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ROLE_TYPE'` | `when ChangeDocDatabaseTableField = 'ROLE_TYPE'` |
| `then` | `then` |
| `cast('ProjectRoleType'as fieldname )` | `cast('ProjectRoleType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'BUPA_GUID'` | `when ChangeDocDatabaseTableField = 'BUPA_GUID'` |
| `then` | `then` |
| `cast('BusinessPartnerUUID'as fieldname )` | `cast('BusinessPartnerUUID'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_RECID'` | `when  ChangeDocDatabaseTableField = 'JV_RECID'` |
| `then` | `then` |
| `cast('JointVentureCostRecoveryCode'as fieldname )` | `cast('JointVentureCostRecoveryCode'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_ETYPE'` | `when  ChangeDocDatabaseTableField = 'JV_ETYPE'` |
| `then` | `then` |
| `cast('JointVentureEquityType'as fieldname )` | `cast('JointVentureEquityType'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_OTYPE'` | `when  ChangeDocDatabaseTableField = 'JV_OTYPE'` |
| `then` | `then` |
| `cast('JointVentureObjType'as fieldname )` | `cast('JointVentureObjType'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_JIBCL'` | `when  ChangeDocDatabaseTableField = 'JV_JIBCL'` |
| `then` | `then` |
| `cast('JointVentureClass'as fieldname )` | `cast('JointVentureClass'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'JV_JIBSA'` | `when  ChangeDocDatabaseTableField = 'JV_JIBSA'` |
| `then` | `then` |
| `cast('JointVentureSubClass'as fieldname )` | `cast('JointVentureSubClass'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'RFUND'` | `when  ChangeDocDatabaseTableField = 'RFUND'` |
| `then` | `then` |
| `cast('Fund'as fieldname )` | `cast('Fund'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'RGRANT_NBR'` | `when  ChangeDocDatabaseTableField = 'RGRANT_NBR'` |
| `then` | `then` |
| `cast('GrantID'as fieldname )` | `cast('GrantID'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'FUND_FIX_ASSIGN'` | `when  ChangeDocDatabaseTableField = 'FUND_FIX_ASSIGN'` |
| `then` | `then` |
| `cast('FundIsFixAssigned'as fieldname )` | `cast('FundIsFixAssigned'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'GRANT_FIX_ASSIGNED'` | `when  ChangeDocDatabaseTableField = 'GRANT_FIX_ASSIGNED'` |
| `then` | `then` |
| `cast(' GrantIsFixAssigned'as fieldname )` | `cast(' GrantIsFixAssigned'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'FUNC_AREA_FIX_ASSIGNED'` | `when  ChangeDocDatabaseTableField = 'FUNC_AREA_FIX_ASSIGNED'` |
| `then` | `then` |
| `cast('FunctionalAreaIsFixAssigned'as fieldname )` | `cast('FunctionalAreaIsFixAssigned'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'SPONSOREDPROG'` | `when  ChangeDocDatabaseTableField = 'SPONSOREDPROG'` |
| `then` | `then` |
| `cast('SponsoredProgram'as fieldname )` | `cast('SponsoredProgram'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'MILESTONE'` | `when  ChangeDocDatabaseTableField = 'MILESTONE'` |
| `then` | `then` |
| `cast('IsProjectMilestone'as fieldname )` | `cast('IsProjectMilestone'as fieldname )` |
| `when  ChangeDocDatabaseTableField = 'MLSTN_APPRVL_STATUS'` | `when  ChangeDocDatabaseTableField = 'MLSTN_APPRVL_STATUS'` |
| `then` | `then` |
| `cast('MilestoneApprovalStatus'as fieldname )` | `cast('MilestoneApprovalStatus'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKUUID'` | `when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKUUID'` |
| `then` | `then` |
| `cast('EntProjectObjectLinkUUID'as fieldname )` | `cast('EntProjectObjectLinkUUID'as fieldname )` |
| `when ( DatabaseTable = '/S4PPM/PSTASK_CD' )` | `when ( DatabaseTable = '/S4PPM/PSTASK_CD' )` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'CONFIDENTIAL'` | `when ChangeDocDatabaseTableField = 'CONFIDENTIAL'` |
| `then` | `then` |
| `cast('EntProjectIsConfidential'as fieldname )` | `cast('EntProjectIsConfidential'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'FABKL'` | `when ChangeDocDatabaseTableField = 'FABKL'` |
| `then` | `then` |
| `cast('FactoryCalendar'as fieldname )` | `cast('FactoryCalendar'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PBUKR'` | `when ChangeDocDatabaseTableField = 'PBUKR'` |
| `then` | `then` |
| `FieldmapEl.EntPrjChgDocFldDet` | `FieldmapEl.EntPrjChgDocFldDet` |
| `when ChangeDocDatabaseTableField = 'PKOKR'` | `when ChangeDocDatabaseTableField = 'PKOKR'` |
| `then` | `then` |
| `FieldmapEl.EntPrjChgDocFldDet` | `FieldmapEl.EntPrjChgDocFldDet` |
| `when ChangeDocDatabaseTableField = 'POST1'` | `when ChangeDocDatabaseTableField = 'POST1'` |
| `then` | `then` |
| `cast('ProjectDescription'as fieldname )` | `cast('ProjectDescription'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PROJECTINTERNALID'` | `when ChangeDocDatabaseTableField = 'PROJECTINTERNALID'` |
| `then` | `then` |
| `cast('ProjectInternalID'as fieldname )` | `cast('ProjectInternalID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TASK_GUID'` | `when ChangeDocDatabaseTableField = 'TASK_GUID'` |
| `then` | `then` |
| `cast('ProjectElementUUID'as fieldname )` | `cast('ProjectElementUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TASK_TYPE'` | `when ChangeDocDatabaseTableField = 'TASK_TYPE'` |
| `then` | `then` |
| `cast('EntProjectElementType'as fieldname )` | `cast('EntProjectElementType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'` | `when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'` |
| `then` | `then` |
| `cast('WBSElementInternalID'as fieldname )` | `cast('WBSElementInternalID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'` |
| `then` | `then` |
| `cast('FinishConstraintDate'as fieldname )` | `cast('FinishConstraintDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'` |
| `then` | `then` |
| `cast('StartConstraintDate'as fieldname )` | `cast('StartConstraintDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'` |
| `then` | `then` |
| `cast('StartConstraintType'as fieldname )` | `cast('StartConstraintType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'DURATION'` | `when ChangeDocDatabaseTableField = 'DURATION'` |
| `then` | `then` |
| `cast('ProjectElementDuration'as fieldname )` | `cast('ProjectElementDuration'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'DURATION_UNIT'` | `when ChangeDocDatabaseTableField = 'DURATION_UNIT'` |
| `then` | `then` |
| `cast('DurationUnit'as fieldname )` | `cast('DurationUnit'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'MASTER_LANGUAGE'` | `when ChangeDocDatabaseTableField = 'MASTER_LANGUAGE'` |
| `then` | `then` |
| `cast('MasterLanguage'as fieldname )` | `cast('MasterLanguage'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TEMPLATE_GUID'` | `when ChangeDocDatabaseTableField = 'TEMPLATE_GUID'` |
| `then` | `then` |
| `cast('ProjectTemplateUUID'as fieldname )` | `cast('ProjectTemplateUUID'as fieldname )` |
| `else` | `else` |
| `FieldmapH.EntPrjChgDocFldDet` | `FieldmapH.EntPrjChgDocFldDet` |
| `end` | `end` |
| `when ( DatabaseTable = '/S4PPM/PRJELM_CD' )` | `when ( DatabaseTable = '/S4PPM/PRJELM_CD' )` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'` | `when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'` |
| `then` | `then` |
| `cast('WBSElementInternalID'as fieldname )` | `cast('WBSElementInternalID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PLANFINISH_DATE'` | `when ChangeDocDatabaseTableField = 'PLANFINISH_DATE'` |
| `then` | `then` |
| `cast('PlannedEndDate'as fieldname )` | `cast('PlannedEndDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PLANSTART_DATE'` | `when ChangeDocDatabaseTableField = 'PLANSTART_DATE'` |
| `then` | `then` |
| `cast('PlannedStartDate'as fieldname )` | `cast('PlannedStartDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TASK_GUID'` | `when ChangeDocDatabaseTableField = 'TASK_GUID'` |
| `then` | `then` |
| `cast('ProjectElementUUID'as fieldname )` | `cast('ProjectElementUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'POST1'` | `when ChangeDocDatabaseTableField = 'POST1'` |
| `then` | `then` |
| `cast('WBSDescription'as fieldname )` | `cast('WBSDescription'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'MULTI_SOI_ENABLED'` | `when ChangeDocDatabaseTableField = 'MULTI_SOI_ENABLED'` |
| `then` | `then` |
| `cast('EntProjIsMultiSlsOrdItmsEnbld'as fieldname )` | `cast('EntProjIsMultiSlsOrdItmsEnbld'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'` |
| `then` | `then` |
| `cast('FinishConstraintDate'as fieldname )` | `cast('FinishConstraintDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'` |
| `then` | `then` |
| `cast('StartConstraintDate'as fieldname )` | `cast('StartConstraintDate'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'` | `when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'` |
| `then` | `then` |
| `cast('StartConstraintType'as fieldname )` | `cast('StartConstraintType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'DURATION'` | `when ChangeDocDatabaseTableField = 'DURATION'` |
| `then` | `then` |
| `cast('ProjectElementDuration'as fieldname )` | `cast('ProjectElementDuration'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'DURATION_UNIT'` | `when ChangeDocDatabaseTableField = 'DURATION_UNIT'` |
| `then` | `then` |
| `cast('DurationUnit'as fieldname )` | `cast('DurationUnit'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CALENDAR_ID'` | `when ChangeDocDatabaseTableField = 'CALENDAR_ID'` |
| `then` | `then` |
| `cast('FactoryCalendar'as fieldname )` | `cast('FactoryCalendar'as fieldname )` |
| `else` | `else` |
| `FieldmapEl.EntPrjChgDocFldDet` | `FieldmapEl.EntPrjChgDocFldDet` |
| `end` | `end` |
| `when ( DatabaseTable = '/S4PPM/OBJLINK')` | `when ( DatabaseTable = '/S4PPM/OBJLINK')` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'PROJECTELEMENTUUID'` | `when ChangeDocDatabaseTableField = 'PROJECTELEMENTUUID'` |
| `then` | `then` |
| `cast('ProjectElementUUID'as fieldname )` | `cast('ProjectElementUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKTYPE'` | `when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKTYPE'` |
| `then` | `then` |
| `cast('EntProjectObjectLinkType'as fieldname )` | `cast('EntProjectObjectLinkType'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'REFERENCEDOBJECTUUID'` | `when ChangeDocDatabaseTableField = 'REFERENCEDOBJECTUUID'` |
| `then` | `then` |
| `cast('ReferencedObjectUUID'as fieldname )` | `cast('ReferencedObjectUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CREATEDBYUSER'` | `when ChangeDocDatabaseTableField = 'CREATEDBYUSER'` |
| `then` | `then` |
| `cast('CreatedByUser'as fieldname )` | `cast('CreatedByUser'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'CREATIONDATETIME'` | `when ChangeDocDatabaseTableField = 'CREATIONDATETIME'` |
| `then` | `then` |
| `cast('CreationDateTime'as fieldname )` | `cast('CreationDateTime'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'LASTCHANGEDBYUSER'` | `when ChangeDocDatabaseTableField = 'LASTCHANGEDBYUSER'` |
| `then` | `then` |
| `cast('LastChangedByUser'as fieldname )` | `cast('LastChangedByUser'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'LASTCHANGEDDATETIME'` | `when ChangeDocDatabaseTableField = 'LASTCHANGEDDATETIME'` |
| `then` | `then` |
| `cast('LastChangeDateTime'as fieldname )` | `cast('LastChangeDateTime'as fieldname )` |
| `end` | `end` |
| `when ( DatabaseTable = '/S4PPM/SOLOLINK')` | `when ( DatabaseTable = '/S4PPM/SOLOLINK')` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDER'` | `when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDER'` |
| `then` | `then` |
| `cast('BusinessSolutionOrder'as fieldname )` | `cast('BusinessSolutionOrder'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDERITEM'` | `when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDERITEM'` |
| `then` | `then` |
| `cast('BusinessSolutionOrderItem'as fieldname )` | `cast('BusinessSolutionOrderItem'as fieldname )` |
| `end` | `end` |
| `when ( DatabaseTable = '/S4PPM/STAT_AREA')` | `when ( DatabaseTable = '/S4PPM/STAT_AREA')` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'GUID'` | `when ChangeDocDatabaseTableField = 'GUID'` |
| `then` | `then` |
| `cast('Guid'as fieldname )` | `cast('Guid'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'PROJECT_GUID'` | `when ChangeDocDatabaseTableField = 'PROJECT_GUID'` |
| `then` | `then` |
| `cast('ProjectUUID'as fieldname )` | `cast('ProjectUUID'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'STATUSAREA'` | `when ChangeDocDatabaseTableField = 'STATUSAREA'` |
| `then` | `then` |
| `cast('StatusArea'as fieldname )` | `cast('StatusArea'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'STATUS'` | `when ChangeDocDatabaseTableField = 'STATUS'` |
| `then` | `then` |
| `cast('Status'as fieldname )` | `cast('Status'as fieldname )` |
| `when ChangeDocDatabaseTableField = 'TREND'` | `when ChangeDocDatabaseTableField = 'TREND'` |
| `then` | `then` |
| `cast('StatusTrend'as fieldname )` | `cast('StatusTrend'as fieldname )` |
| `end` | `end` |
| `when ( DatabaseTable = '/S4PPM/HIERARCHY')` | `when ( DatabaseTable = '/S4PPM/HIERARCHY')` |
| `then` | `then` |
| `case` | `case` |
| `when ChangeDocDatabaseTableField = 'OBJECT_GUID'` | `when ChangeDocDatabaseTableField = 'OBJECT_GUID'` |
| `then` | `then` |
| `cast('ReferencedObjectUUID'as fieldname )` | `cast('ReferencedObjectUUID'as fieldname )` |
| `else` | `else` |
| `FieldmapEl.EntPrjChgDocFldDet` | `FieldmapEl.EntPrjChgDocFldDet` |
| `end` | `end` |
| `else` | `else` |
| `ChangeDocGlobalFieldName` | `ChangeDocDatabaseTableField end` |
| `EnterpriseProject.ProjectUUID` | `EnterpriseProject.ProjectUUID` |
| `EnterpriseProject .ProjectCategory` | `EnterpriseProject .ProjectCategory` |
| `ChangeDocPreviousUnit` | `ChangeDocPreviousUnit` |
| `ChangeDocNewUnit` | `ChangeDocNewUnit` |
| `ChangeDocPreviousCurrency` | `ChangeDocPreviousCurrency` |
| `ChangeDocNewCurrency` | `ChangeDocNewCurrency` |
| `ChangeDocNewFieldValue` | `ChangeDocNewFieldValue` |
| `ChangeDocPreviousFieldValue` | `ChangeDocPreviousFieldValue` |
| `ChangeDocTextIsChanged` | `ChangeDocTextIsChanged` |
| `_ChangeDocument.CreationDate` | *Association* |
| `_ChangeDocument.CreationTime` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeDocument` | `I_ChangeDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IENTPRJCHGDOC'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Data Extraction for Project Change Document'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{
    authorizationCheck:#PRIVILEGED_ONLY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]


@VDM.viewType: #COMPOSITE

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'cdpos', role:#MAIN,
                    viewElement: ['ChangeDocObject', 'ChangeDocObjectClass', 'ChangeDocument', 'DatabaseTable', 'ChangeDocTableKey', 'ChangeDocDatabaseTableField', 'ChangeDocItemChangeType'],
                    tableElement: ['objectid', 'objectclas', 'changenr', 'tabname', 'tabkey', 'fname', 'chngind' ]
                },
                {
                    table: '/s4ppm/project', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ProjectUUID'],
                    tableElement: ['guid']
                 },
                 {
                    table: 'cdhdr', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ChangeDocObjectClass', 'ChangeDocObject', 'ChangeDocument'],
                    tableElement: ['objectclas', 'objectid', 'changenr']
                 }
            ]
        }
    }
 }
 @ObjectModel.sapObjectNodeType.name: 'EnterpriseProject'
 

define view I_EntProjChgDocumentDEX as select from   I_ChangeDocumentItem as ChangeItem
    left outer to one join I_EntProjFieldMapChgDoc     as FieldmapH on  FieldmapH.EntProjChgDocStrucName  = 'PROJ'
                                                                      and FieldmapH.EntProjChgDocFld = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapH.EntProjChgDocObj = 'I_ENTERPRISEPROJECT' 
     
                                                                         
      left outer to one join I_EntProjFieldMapChgDoc     as FieldmapEl on  FieldmapEl.EntProjChgDocStrucName = 'TASK'
                                                                      and FieldmapEl.EntProjChgDocFld = ChangeItem.ChangeDocDatabaseTableField
                                                                      and FieldmapEl.EntProjChgDocObj  = 'I_ENTERPRISEPROJECTELEMENT'                                                                                                                                          
   left outer to one join R_EnterpriseProject as EnterpriseProject   
          on ChangeItem.ChangeDocObject = EnterpriseProject.EntProjectChangeDocument
 association [0..1] to I_ChangeDocument              as _ChangeDocument              on  $projection.ChangeDocObjectClass = _ChangeDocument.ChangeDocObjectClass
                                                                                      and $projection.ChangeDocObject      = _ChangeDocument.ChangeDocObject
                                                                                      and $projection.ChangeDocument       = _ChangeDocument.ChangeDocument 
                                                                                
{
      @Consumption.hidden
  key ChangeDocObject,
      @Consumption.hidden
  key ChangeDocObjectClass,
      @Consumption.hidden
  key ChangeDocument,
      @Consumption.hidden
  key DatabaseTable,
      @Consumption.hidden
  key ChangeDocTableKey,
      @Consumption.hidden
  key ChangeDocDatabaseTableField,

  key ChangeDocItemChangeType,
    case
      when  ChangeDocDatabaseTableField = 'KEY'
      then
      cast('Key'as fieldname )
       when  ChangeDocDatabaseTableField = 'OBJECT_TYPE'
      then
      cast('ObjectType'as fieldname )
              when  ChangeDocDatabaseTableField = 'CAUSE'
      then
      cast('ProjectReasonCode'as fieldname )
       when  ChangeDocDatabaseTableField = 'LOCATION'
      then
      cast('Location'as fieldname )
       when  ChangeDocDatabaseTableField = 'PRART'
      then
      cast('EnterpriseProjectType'as fieldname )
       when ChangeDocDatabaseTableField = 'PROJECTUUID'
      then
       cast('ProjectUUID'as fieldname )
      when  ChangeDocDatabaseTableField = 'KALSM'
      then
      cast('CostingSheet'as fieldname )
       when  ChangeDocDatabaseTableField = 'PLVAR'
      then
      cast('PlanVersion'as fieldname )
       when  ChangeDocDatabaseTableField = 'FORECAST_START_DATE'
      then
      cast(' ForecastedStartDate'as fieldname )
       when  ChangeDocDatabaseTableField = 'FORECAST_FINISH_DATE'
      then
      cast('ForecastedFinishDate'as fieldname )
       when  ChangeDocDatabaseTableField = 'RESP_ORG_UNIT'
      then
      cast('OrganizationalUnit'as fieldname )
       when  ChangeDocDatabaseTableField = 'RELEASED_ON'
      then
      cast('ReleaseDateTime'as fieldname )
       when  ChangeDocDatabaseTableField = 'SETTLEMENTELEMENT'
      then
      cast('EntProjectSettlementElement'as fieldname )
       when  ChangeDocDatabaseTableField = 'APP_RELEVANT'
      then
      cast('IsApprovalRelevant'as fieldname )
       when  ChangeDocDatabaseTableField = 'CALENDAR_ID'
      then
      cast('FactoryCalendar'as fieldname )
       when  ChangeDocDatabaseTableField = 'XSTAT'
      then
      cast('WBSIsStatisticalWBSElement'as fieldname )
      when  ChangeDocDatabaseTableField = 'SORT_NUMBER'
      then
      cast('SortingNumber'as fieldname )
       when  ChangeDocDatabaseTableField = 'SETTLEMENTTYPE'
      then
      cast('EntProjectSettlementType'as fieldname )
       when  ChangeDocDatabaseTableField = 'PROC_STATUS_SUP'
      then
      cast('TaskParentProcessingStatus'as fieldname )
      //Catg 6 common fields for pst and wp
       when  ChangeDocDatabaseTableField = 'JV_VNAME'
      then
      cast('JointVenture'as fieldname )
      //Block Function
       when ChangeDocDatabaseTableField = 'FUNCTION_ID'
      then
       cast('EntProjElementFunctionID'as fieldname )
         when ChangeDocDatabaseTableField = 'IS_BLOCKED'
      then
       cast('BlockFunctionStatusIsBlocked'as fieldname )
       //entitlement
             when ChangeDocDatabaseTableField = 'ROLE_GUID'
      then
       cast('ProjectRoleUUID'as fieldname )  
        when ChangeDocDatabaseTableField = 'TEAM_MEMBER_GUID'
      then
       cast('TeamMemberUUID'as fieldname )  
       //Roles
       when ChangeDocDatabaseTableField = 'ROLE_CATEGORY'
      then
       cast('ProjectRoleCategory'as fieldname )
           when ChangeDocDatabaseTableField = 'ROLE_NAME'
      then
       cast('ProjectRoleName'as fieldname )
        when ChangeDocDatabaseTableField = 'ROLE_TYPE'
      then
       cast('ProjectRoleType'as fieldname )
      //Team member
      when ChangeDocDatabaseTableField = 'BUPA_GUID'
      then
       cast('BusinessPartnerUUID'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_RECID'
      then
      cast('JointVentureCostRecoveryCode'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_ETYPE'
      then
      cast('JointVentureEquityType'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_OTYPE'
      then
      cast('JointVentureObjType'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_JIBCL'
      then
      cast('JointVentureClass'as fieldname )
       when  ChangeDocDatabaseTableField = 'JV_JIBSA'
      then
      cast('JointVentureSubClass'as fieldname )
       when  ChangeDocDatabaseTableField = 'RFUND'
      then
      cast('Fund'as fieldname )
       when  ChangeDocDatabaseTableField = 'RGRANT_NBR'
      then
      cast('GrantID'as fieldname )
       when  ChangeDocDatabaseTableField = 'FUND_FIX_ASSIGN'
      then
      cast('FundIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'GRANT_FIX_ASSIGNED'
      then
      cast(' GrantIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'FUNC_AREA_FIX_ASSIGNED'
      then
      cast('FunctionalAreaIsFixAssigned'as fieldname )
        when  ChangeDocDatabaseTableField = 'SPONSOREDPROG'
      then
      cast('SponsoredProgram'as fieldname )
      //Milestone
       when  ChangeDocDatabaseTableField = 'MILESTONE'
      then
      cast('IsProjectMilestone'as fieldname )
       when  ChangeDocDatabaseTableField = 'MLSTN_APPRVL_STATUS'
      then
      cast('MilestoneApprovalStatus'as fieldname )
      when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKUUID'
      then
       cast('EntProjectObjectLinkUUID'as fieldname )
      //Project header
      
      when ( DatabaseTable = '/S4PPM/PSTASK_CD' )
      then
      case
      when ChangeDocDatabaseTableField = 'CONFIDENTIAL'
      then
       cast('EntProjectIsConfidential'as fieldname )
       when ChangeDocDatabaseTableField = 'FABKL'
      then
       cast('FactoryCalendar'as fieldname )
       when ChangeDocDatabaseTableField = 'PBUKR'
      then
       FieldmapEl.EntPrjChgDocFldDet
     //  cast('CompanyCode'as fieldname )
       when ChangeDocDatabaseTableField = 'PKOKR'
      then
       FieldmapEl.EntPrjChgDocFldDet
       //cast('ControllingArea'as fieldname )
        when ChangeDocDatabaseTableField = 'POST1'
      then
       cast('ProjectDescription'as fieldname )
        when ChangeDocDatabaseTableField = 'PROJECTINTERNALID'
      then
       cast('ProjectInternalID'as fieldname )
        when ChangeDocDatabaseTableField = 'TASK_GUID'
      then
       cast('ProjectElementUUID'as fieldname )
        when ChangeDocDatabaseTableField = 'TASK_TYPE'
      then
       cast('EntProjectElementType'as fieldname )
        when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'
      then
       cast('WBSElementInternalID'as fieldname )
       //Catg 6
             when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'
      then
       cast('FinishConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'
      then
       cast('StartConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'
      then
       cast('StartConstraintType'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION'
      then
       cast('ProjectElementDuration'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION_UNIT'
      then
       cast('DurationUnit'as fieldname )
          when ChangeDocDatabaseTableField = 'MASTER_LANGUAGE'
      then
       cast('MasterLanguage'as fieldname )
             when ChangeDocDatabaseTableField = 'TEMPLATE_GUID'
      then
       cast('ProjectTemplateUUID'as fieldname )
      else
         FieldmapH.EntPrjChgDocFldDet
         end
         // Workpackage
      when ( DatabaseTable = '/S4PPM/PRJELM_CD' )
      then
     case
     when ChangeDocDatabaseTableField = 'WBSELEMENTINTERNALID'
      then
       cast('WBSElementInternalID'as fieldname )
            when ChangeDocDatabaseTableField = 'PLANFINISH_DATE'
      then
       cast('PlannedEndDate'as fieldname )
            when ChangeDocDatabaseTableField = 'PLANSTART_DATE'
      then
       cast('PlannedStartDate'as fieldname )
            when ChangeDocDatabaseTableField = 'TASK_GUID'
      then
       cast('ProjectElementUUID'as fieldname )
            when ChangeDocDatabaseTableField = 'POST1'
      then
       cast('WBSDescription'as fieldname )
        //Cat6
         when ChangeDocDatabaseTableField = 'MULTI_SOI_ENABLED'
      then
       cast('EntProjIsMultiSlsOrdItmsEnbld'as fieldname )
              
             when ChangeDocDatabaseTableField = 'CONSTRAINT_END_DATE'
      then
       cast('FinishConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_START_DATE'
      then
       cast('StartConstraintDate'as fieldname )
             when ChangeDocDatabaseTableField = 'CONSTRAINT_TYPE'
      then
       cast('StartConstraintType'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION'
      then
       cast('ProjectElementDuration'as fieldname )
             when ChangeDocDatabaseTableField = 'DURATION_UNIT'
      then
       cast('DurationUnit'as fieldname )
             when ChangeDocDatabaseTableField = 'CALENDAR_ID'
      then
       cast('FactoryCalendar'as fieldname )
      else
       FieldmapEl.EntPrjChgDocFldDet
       end
  
           //Object Link  
      when ( DatabaseTable = '/S4PPM/OBJLINK')
   then   
      case 
           when ChangeDocDatabaseTableField = 'PROJECTELEMENTUUID'
      then
       cast('ProjectElementUUID'as fieldname )
           when ChangeDocDatabaseTableField = 'ENTPROJECTOBJECTLINKTYPE'
      then
       cast('EntProjectObjectLinkType'as fieldname )
           when ChangeDocDatabaseTableField = 'REFERENCEDOBJECTUUID'
      then
       cast('ReferencedObjectUUID'as fieldname )
         when ChangeDocDatabaseTableField = 'CREATEDBYUSER'
      then
       cast('CreatedByUser'as fieldname )
         when ChangeDocDatabaseTableField = 'CREATIONDATETIME'
      then
       cast('CreationDateTime'as fieldname )
         when ChangeDocDatabaseTableField = 'LASTCHANGEDBYUSER'
      then
       cast('LastChangedByUser'as fieldname )
         when ChangeDocDatabaseTableField = 'LASTCHANGEDDATETIME'
      then
       cast('LastChangeDateTime'as fieldname )
       end
           //Solo link
      when ( DatabaseTable = '/S4PPM/SOLOLINK')
   then   
      case 
         when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDER'
      then
       cast('BusinessSolutionOrder'as fieldname )
         when ChangeDocDatabaseTableField = 'BUSINESSSOLUTIONORDERITEM'
      then
       cast('BusinessSolutionOrderItem'as fieldname )
       end
           //Status Area   
      when ( DatabaseTable = '/S4PPM/STAT_AREA')
   then   
       case 
             when ChangeDocDatabaseTableField = 'GUID'
      then
       cast('Guid'as fieldname )
           when ChangeDocDatabaseTableField = 'PROJECT_GUID'
      then
       cast('ProjectUUID'as fieldname )
           when ChangeDocDatabaseTableField = 'STATUSAREA'
      then
       cast('StatusArea'as fieldname )
           when ChangeDocDatabaseTableField = 'STATUS'
      then
       cast('Status'as fieldname )
           when ChangeDocDatabaseTableField = 'TREND'
      then
       cast('StatusTrend'as fieldname )
       end
      //Hierrarchy
           when ( DatabaseTable = '/S4PPM/HIERARCHY')
   then
      case 
             when ChangeDocDatabaseTableField = 'OBJECT_GUID'
      then
       cast('ReferencedObjectUUID'as fieldname )
       
       else
      FieldmapEl.EntPrjChgDocFldDet
      end

      else
      ChangeDocDatabaseTableField end as ChangeDocGlobalFieldName,
      @Consumption.hidden: true
      EnterpriseProject.ProjectUUID,
     EnterpriseProject .ProjectCategory,
      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      @Semantics.booleanIndicator: true
      ChangeDocTextIsChanged,
      _ChangeDocument.CreationDate,
      _ChangeDocument.CreationTime
      

}
where
  ChangeItem.ChangeDocObjectClass = '/S4PPM/PROJECT'
```
