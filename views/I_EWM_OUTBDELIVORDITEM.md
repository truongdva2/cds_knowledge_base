---
name: I_EWM_OUTBDELIVORDITEM
description: Ewm Outbdelivorditem
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - item-level
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_OUTBDELIVORDITEM

**Ewm Outbdelivorditem**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EWMOutboundDeliveryOrder` | `OutboundDeliveryOrder` |
| `EWMOutboundDeliveryOrderItem` | `OutboundDeliveryOrderItem` |
| `EWMWarehouse` | `EWMWarehouse` |
| `EWMDeliveryDocumentCategory` | `DeliveryCategory` |
| `EWMOutbDelivOrderItemCategory` | `OutbDeliveryOrderItemCategory` |
| `EWMOutbDeliveryOrderItemType` | `OutboundDeliveryOrderItemType` |
| `/* Product Information */` | `/* Product Information */` |
| `Product` | `Product` |
| `ProductUUID` | `ProductUUID` |
| `char40 preserving type )` | `cast( ProductExternalID` |
| `Batch` | `Batch` |
| `ProductQuantity` | `ProductQuantity` |
| `/scwm/de_base_uom preserving type )` | `cast( QuantityUnit` |
| `_SerialNumberLevel.SerialNumberRequiredLevel                                                                                                                          as SerialNumberRequiredLevel` | *Association* |
| `/* Staging Information */` | `/* Staging Information */` |
| `StagingArea` | `StagingArea` |
| `StagingAreaGroup` | `StagingAreaGroup` |
| `StagingBay` | `StagingBay` |
| `/* Status Information */` | `/* Status Information */` |
| `GoodsIssueStatus` | `GoodsIssueStatus` |
| `PlannedPickingStatus` | `PlannedPickingStatus` |
| `_DeliveryStatus[1:DeliveryStatusType = 'DPI'].Status                                                                                                                  as PickingStatus` | *Association* |
| `CompletionStatus` | `CompletionStatus` |
| `_DeliveryStatus[1:DeliveryStatusType = 'DBO'].Status                                                                                                                  as OverallBlockStatus` | *Association* |
| `_DeliveryStatus[1:DeliveryStatusType = 'DLO'].Status                                                                                                                  as LoadingStatus` | *Association* |
| `_DeliveryStatus[1:DeliveryStatusType = 'DGD'].Status                                                                                                                  as EWMGoodsIssueAndDistrStatus` | *Association* |
| `_DeliveryStatus[1:DeliveryStatusType = 'DED'].Status                                                                                                                  as EWMPlndPickingAndDistrStatus` | *Association* |
| `_DeliveryStatus[1:DeliveryStatusType = 'DPD'].Status                                                                                                                  as PickingAndDistributionStatus` | *Association* |
| `/*Batch Split Main Item*/` | `/*Batch Split Main Item*/` |
| `cast( case when _BatchSplitDetail.OutboundDeliveryOrderUUID is not null and _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is null` | `cast( case when _BatchSplitDetail.OutboundDeliveryOrderUUID is not null and _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is null` |
| `then EWMOutboundDeliveryOrderItem` | `then EWMOutboundDeliveryOrderItem` |
| `ewm_de_whsereqitmbatspltparitm preserving type )` | `else _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem end` |
| `/* Addmeas */` | `/* Addmeas */` |
| `ewm_de_whsereq_gross_vol preserving type )` | `cast( _GrossVolume.Quantity` |
| `ewm_de_whsereq_gross_vol_uom preserving type )` | `cast( _GrossVolume.UnitOfMeasure` |
| `ewm_de_whsereq_gross_wgt preserving type )` | `cast( _GrossWeight.Quantity` |
| `ewm_de_whsereq_gross_wgt_uom preserving type )` | `cast( _GrossWeight.UnitOfMeasure` |
| `WarehouseProcessType` | `WarehouseProcessType` |
| `ShippingCondition` | `ShippingCondition` |
| `GoodsMovementBin` | `GoodsMovementBin` |
| `EWMProductionSupplyArea` | `EWMProductionSupplyArea` |
| `case` | `case` |
| `when EWMDelivLastChangeUTCDateTime is initial then EWMDeliveryCreationUTCDateTime` | `when EWMDelivLastChangeUTCDateTime is initial then EWMDeliveryCreationUTCDateTime` |
| `else EWMDelivLastChangeUTCDateTime` | `else EWMDelivLastChangeUTCDateTime` |
| `EWMDelivLastChangeUTCDateTime` | `end` |
| `EWMStorageType` | `EWMStorageType` |
| `EWMStorageSection` | `StorageSection` |
| `EWMStorageBin` | `EWMStorageBin` |
| `EWMGoodsRecipient` | `EWMGoodsRecipient` |
| `EWMRecipientLocationName` | `EWMRecipientLocationName` |
| `WarehouseDoor` | `WarehouseDoor` |
| `/*Loading & Unloading Point */` | `/*Loading & Unloading Point */` |
| `/scwm/de_loading_point_out preserving type )` | `cast( _BPLocDetail[1:BusinessPartnerRole = 'LP'].WarehouseLocation` |
| `/scwm/de_unloading_point preserving type )` | `cast( _BPLocDetail[1:BusinessPartnerRole = 'UP'].WarehouseLocation` |
| `/* Open Warehouse Tasks Exists*/` | `/* Open Warehouse Tasks Exists*/` |
| `case when _OpenWarehouseTasksExists.EWMWarehouseRequestUUID is not null` | `case when _OpenWarehouseTasksExists.EWMWarehouseRequestUUID is not null` |
| `then 'X'` | `then 'X'` |
| `ewm_de_whsereqitm_has_open_wt )  end` | `else cast( ''` |
| `/* Date Information */` | `/* Date Information */` |
| `PlndGoodsIssueStartUTCDateTime` | `PlndGoodsIssueStartUTCDateTime` |
| `ActlGoodsIssueStartUTCDateTime` | `ActlGoodsIssueStartUTCDateTime` |
| `RouteSchedule` | `RouteSchedule` |
| `/* Product Attributes */` | `/* Product Attributes */` |
| `EWMWhseReqItmBBDSLEDUTCDteTme` | `EWMWhseReqItmBBDSLEDUTCDteTme` |
| `/* Stock Information */` | `/* Stock Information */` |
| `EntitledToDisposeParty` | `EntitledToDisposeParty` |
| `case when ( _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted <> 'X' or _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted is null )` | `case when ( _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted <> 'X' or _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted is null )` |
| `then _EWMEntitledToDisposeDetails.BusinessPartnerName` | `then _EWMEntitledToDisposeDetails.BusinessPartnerName` |
| `bu_nameor1  ) end` | `else cast( ''` |
| `EWMStockUsage` | `StockUsage` |
| `EWMStockType` | `EWMStockType` |
| `char10 preserving type )` | `cast( StockOwner` |
| `case when ( _EWMStockOwnerDetails.IsBusinessPurposeCompleted <> 'X' or _EWMStockOwnerDetails.IsBusinessPurposeCompleted is null )` | `case when ( _EWMStockOwnerDetails.IsBusinessPurposeCompleted <> 'X' or _EWMStockOwnerDetails.IsBusinessPurposeCompleted is null )` |
| `then _EWMStockOwnerDetails.BusinessPartnerName` | `then _EWMStockOwnerDetails.BusinessPartnerName` |
| `bu_nameor1  ) end` | `else cast( ''` |
| `DeliveryItemStockTypeDetnCode` | `DeliveryItemStockTypeDetnCode` |
| `ewm_de_stockdocumentcat preserving type )` | `cast( StockDocumentCategory` |
| `StockDocumentNumber, //Obsolete since 2005` | `StockDocumentNumber, //Obsolete since 2005` |
| `StockItemNumber, // Obsolete since 2005` | `StockItemNumber, // Obsolete since 2005` |
| `/* Project Stock - Internal WBS Element */` | `/* Project Stock - Internal WBS Element */` |
| `case StockDocumentCategory` | `case StockDocumentCategory` |
| `when 'PJS'` | `when 'PJS'` |
| `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` | `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` |
| `when 'X' then _ProjectStockDecentralized.WBSElementInternalID` | `when 'X' then _ProjectStockDecentralized.WBSElementInternalID` |
| `else _ProjectStock.WBSElementInternalID end` | `else _ProjectStock.WBSElementInternalID end` |
| `ps_s4_pspnr preserving type ) end` | `else cast( '00000000'` |
| `/* Project Stock - External WBS Element */` | `/* Project Stock - External WBS Element */` |
| `case StockDocumentCategory` | `case StockDocumentCategory` |
| `when 'PJS'` | `when 'PJS'` |
| `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` | `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` |
| `when 'X' then _ProjectStockDecentralized.WBSElementExternalID` | `when 'X' then _ProjectStockDecentralized.WBSElementExternalID` |
| `else _ProjectStock.WBSElementExternalID end` | `else _ProjectStock.WBSElementExternalID end` |
| `ps_posid_edit preserving type ) end` | `else cast( '                        '` |
| `ewm_de_special_stock_idfg_hdr )` | `cast( SpecialStockIdfgSalesOrder` |
| `ewm_de_special_stock_idfg_item )` | `cast( SpecialStockIdfgSalesOrderItem` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `/*Merge Project and Sales Order Stock Reference for UI consumption*/` | `/*Merge Project and Sales Order Stock Reference for UI consumption*/` |
| `cast( case StockDocumentCategory` | `cast( case StockDocumentCategory` |
| `when 'PJS'` | `when 'PJS'` |
| `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` | `then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized` |
| `when 'X' then _ProjectStockDecentralized.WBSElementExternalID` | `when 'X' then _ProjectStockDecentralized.WBSElementExternalID` |
| `else _ProjectStock.WBSElementExternalID end` | `else _ProjectStock.WBSElementExternalID end` |
| `ewm_de_stockdocumentnumber )` | `else StockDocumentNumber end` |
| `/* Reference Documents */` | `/* Reference Documents */` |
| `vdm_sales_order )` | `cast( SalesOrder` |
| `ewm_de_sales_order_item_aconv preserving type )` | `cast( SalesOrderItem` |
| `manufacturingorder )` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PPO'].EWMRefDeliveryDocumentNumber` |
| `ewm_de_maintenance_order )` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PMO'].EWMRefDeliveryDocumentNumber` |
| `ewm_de_maintenance_order_op)` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'POO'].EWMRefDeliveryDocumentItem` |
| `rsnum )` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'RES'].EWMRefDeliveryDocumentNumber` |
| `vdm_purchaseorder)` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PO'].EWMRefDeliveryDocumentNumber` |
| `/scwm/sp_docno_erp )` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentNumber` |
| `abap.numc( 10 )),5,6)` | `cast( substring(cast(_ReferenceDocuments[1:EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentItem` |
| `crmt_object_id )` | `cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'SRV'].EWMRefDeliveryDocumentNumber` |
| `abap.numc( 10 )),5,6)` | `cast( substring(cast(_ReferenceDocuments[1:EWMReferenceDocumentCategory = 'SRV'].EWMRefDeliveryDocumentItem` |
| `odo_item.OutboundDeliveryOrderUUID` | `odo_item.OutboundDeliveryOrderUUID` |
| `odo_item.OutboundDeliveryOrderItemUUID` | `odo_item.OutboundDeliveryOrderItemUUID` |
| `_BPLocDetail` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryStatus` | `I_EWM_OutbDelivOrdSts` | [0..*] |
| `_GrossVolume` | `I_EWM_OutbDelivOrdGrossVolume` | [0..1] |
| `_GrossWeight` | `I_EWM_OutbDelivOrdGrossMass` | [0..1] |
| `_ReferenceDocuments` | `I_EWM_DeliveryReferenceDoc_2` | [0..*] |
| `_ProjectStock` | `I_WBSElementBasicData` | [0..1] |
| `_ProjectStockDecentralized` | `I_EWM_WBSElementDecentralized` | [0..1] |
| `_WhseSystemIsDecentralized` | `I_EWM_WhseSystIsDecentralized` | [0..1] |
| `_OpenWarehouseTasksExists` | `P_EWM_OpnWhseTskODOItmExists` | [0..1] |
| `_BPLocDetail` | `I_EWM_DeliveryBPLocation` | [0..*] |
| `_BatchSplitDetail` | `P_EWM_ODOItmBatSpltChildItm` | [1..1] |
| `_SerialNumberLevel` | `I_EWM_SerialNumberHeader_2` | [1] |
| `_EWMEntitledToDisposeDetails` | `I_BusinessPartner` | [0..1] |
| `_EWMStockOwnerDetails` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.serviceQuality: #D
@EndUserText.label: 'Warehouse Outbound Delivery Order Item'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL

@VDM.viewType:#COMPOSITE

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'WhseOutboundDeliveryOrderItem'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]

define view entity I_EWM_OutbDelivOrdItem
  as select from I_EWM_OutbDelivOrdItemBasic as odo_item

  /* Association to Status */
  association [0..*] to I_EWM_OutbDelivOrdSts         as _DeliveryStatus              on  $projection.OutboundDeliveryOrderUUID     = _DeliveryStatus.OutboundDeliveryOrderUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _DeliveryStatus.OutboundDeliveryOrderItemUUID

  /* Association to ADDMEAS */
  association [0..1] to I_EWM_OutbDelivOrdGrossVolume as _GrossVolume                 on  $projection.OutboundDeliveryOrderUUID     = _GrossVolume.OutboundDeliveryOrderUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _GrossVolume.OutboundDeliveryOrderItemUUID

  association [0..1] to I_EWM_OutbDelivOrdGrossMass   as _GrossWeight                 on  $projection.OutboundDeliveryOrderUUID     = _GrossWeight.OutboundDeliveryOrderUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _GrossWeight.OutboundDeliveryOrderItemUUID

  /* Reference to Reference Documents */
  association [0..*] to I_EWM_DeliveryReferenceDoc_2  as _ReferenceDocuments          on  $projection.OutboundDeliveryOrderUUID     = _ReferenceDocuments.DeliveryUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _ReferenceDocuments.DeliveryItemUUID
                                                                                      and $projection.EWMDeliveryDocumentCategory   = _ReferenceDocuments.EWMDeliveryDocumentCategory

  /* Project Stock S/4 Embedded */
  association [0..1] to I_WBSElementBasicData         as _ProjectStock                on  $projection.StockDocumentNumber   = _ProjectStock.WBSElementInternalID
                                                                                      and $projection.StockDocumentCategory = 'PJS'

  /* Project Stock S/4 Decentralized */
  association [0..1] to I_EWM_WBSElementDecentralized as _ProjectStockDecentralized   on  $projection.StockDocumentNumber   = _ProjectStockDecentralized.StockDocumentNumber
                                                                                      and $projection.StockDocumentCategory = 'PJS'

  association [0..1] to I_EWM_WhseSystIsDecentralized as _WhseSystemIsDecentralized   on  _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized = 'X'

  /* Open Warehouse Tasks */
  association [0..1] to P_EWM_OpnWhseTskODOItmExists  as _OpenWarehouseTasksExists    on  $projection.OutboundDeliveryOrderUUID     = _OpenWarehouseTasksExists.EWMWarehouseRequestUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _OpenWarehouseTasksExists.EWMWarehouseRequestItemUUID

  /* Loading & Unloading Point Details */
  association [0..*] to I_EWM_DeliveryBPLocation      as _BPLocDetail                 on  $projection.OutboundDeliveryOrderUUID     = _BPLocDetail.OutboundDeliveryOrderUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _BPLocDetail.OutboundDeliveryOrderItemUUID

  /* Hierarchy Information: Batch Split */
  association [1..1] to P_EWM_ODOItmBatSpltChildItm   as _BatchSplitDetail            on  $projection.OutboundDeliveryOrderUUID     = _BatchSplitDetail.OutboundDeliveryOrderUUID
                                                                                      and $projection.OutboundDeliveryOrderItemUUID = _BatchSplitDetail.OutboundDeliveryOrderItemUUID

  /* Serial Number Level */
  association [1]    to I_EWM_SerialNumberHeader_2    as _SerialNumberLevel           on  $projection.EWMWarehouse           = _SerialNumberLevel.EWMWarehouse
                                                                                      and $projection.EntitledToDisposeParty = _SerialNumberLevel.EntitledToDisposeParty
                                                                                      and $projection.ProductUUID            = _SerialNumberLevel.ProductUUID


  association [0..1] to I_BusinessPartner             as _EWMEntitledToDisposeDetails on  $projection.EntitledToDisposeParty = _EWMEntitledToDisposeDetails.BusinessPartner
  association [0..1] to I_BusinessPartner             as _EWMStockOwnerDetails        on  $projection.EWMStockOwner = _EWMStockOwnerDetails.BusinessPartner

{
      //I_EWM_OutbDelivOrdItem
  key OutboundDeliveryOrder                                                                                                                                                 as EWMOutboundDeliveryOrder,
  key OutboundDeliveryOrderItem                                                                                                                                             as EWMOutboundDeliveryOrderItem,
      EWMWarehouse,
      DeliveryCategory                                                                                                                                                      as EWMDeliveryDocumentCategory,
      OutbDeliveryOrderItemCategory                                                                                                                                         as EWMOutbDelivOrderItemCategory,
      OutboundDeliveryOrderItemType                                                                                                                                         as EWMOutbDeliveryOrderItemType,

      /* Product Information */
      Product,
      ProductUUID,
      cast( ProductExternalID as char40 preserving type )                                                                                                                   as ProductExternalID,
      Batch,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProductQuantity,

      cast( QuantityUnit as /scwm/de_base_uom preserving type )                                                                                                             as QuantityUnit,
      _SerialNumberLevel.SerialNumberRequiredLevel                                                                                                                          as SerialNumberRequiredLevel,

      /* Staging Information */
      StagingArea,
      StagingAreaGroup,
      StagingBay,

      /* Status Information */
      GoodsIssueStatus,
      PlannedPickingStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DPI'].Status                                                                                                                  as PickingStatus,
      CompletionStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DBO'].Status                                                                                                                  as OverallBlockStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DLO'].Status                                                                                                                  as LoadingStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DGD'].Status                                                                                                                  as EWMGoodsIssueAndDistrStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DED'].Status                                                                                                                  as EWMPlndPickingAndDistrStatus,
      _DeliveryStatus[1:DeliveryStatusType = 'DPD'].Status                                                                                                                  as PickingAndDistributionStatus,


      /*Batch Split Main Item*/
      cast( case when _BatchSplitDetail.OutboundDeliveryOrderUUID is not null and _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem is null
      then EWMOutboundDeliveryOrderItem
      else _BatchSplitDetail.EWMWhseReqItmBatSpltParentItem end as ewm_de_whsereqitmbatspltparitm preserving type )                                                         as EWMWhseReqItmBatSpltParentItem,



      /* Addmeas */
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      cast( _GrossVolume.Quantity as ewm_de_whsereq_gross_vol preserving type )                                                                                             as EWMWhseReqGrossVolume,
      cast( _GrossVolume.UnitOfMeasure as ewm_de_whsereq_gross_vol_uom preserving type )                                                                                    as EWMWhseReqGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      cast( _GrossWeight.Quantity as ewm_de_whsereq_gross_wgt preserving type )                                                                                             as EWMWhseReqGrossWeight,
      cast( _GrossWeight.UnitOfMeasure as ewm_de_whsereq_gross_wgt_uom preserving type )                                                                                    as EWMWhseReqGrossWeightUnit,

      WarehouseProcessType,
      ShippingCondition,
      GoodsMovementBin,
      EWMProductionSupplyArea,
      case
        when EWMDelivLastChangeUTCDateTime is initial then EWMDeliveryCreationUTCDateTime
        else EWMDelivLastChangeUTCDateTime
      end                                                                                                                                                                   as EWMDelivLastChangeUTCDateTime,
      EWMStorageType,
      StorageSection                                                                                                                                                        as EWMStorageSection,
      EWMStorageBin,
      EWMGoodsRecipient,
      EWMRecipientLocationName,
      WarehouseDoor,

      /*Loading & Unloading Point */
      cast( _BPLocDetail[1:BusinessPartnerRole = 'LP'].WarehouseLocation as /scwm/de_loading_point_out preserving type )                                                    as EWMLoadingPoint,
      cast( _BPLocDetail[1:BusinessPartnerRole = 'UP'].WarehouseLocation as /scwm/de_unloading_point preserving type )                                                      as EWMUnloadingPoint,

      /* Open Warehouse Tasks Exists*/
      @Semantics.booleanIndicator
      case when _OpenWarehouseTasksExists.EWMWarehouseRequestUUID is not null
          then 'X'
          else cast( '' as ewm_de_whsereqitm_has_open_wt )  end                                                                                                             as EWMWhseReqItmHasOpnWhseTsk,

      /* Date Information */
      PlndGoodsIssueStartUTCDateTime,
      ActlGoodsIssueStartUTCDateTime,
      RouteSchedule,

      /* Product Attributes */
      EWMWhseReqItmBBDSLEDUTCDteTme,

      /* Stock Information */
      EntitledToDisposeParty,
      case when ( _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted <> 'X' or _EWMEntitledToDisposeDetails.IsBusinessPurposeCompleted is null )
          then _EWMEntitledToDisposeDetails.BusinessPartnerName
          else cast( '' as bu_nameor1  ) end                                                                                                                                as EntitledToDisposePartyName,
      StockUsage                                                                                                                                                            as EWMStockUsage,
      EWMStockType,
      cast( StockOwner as char10 preserving type )                                                                                                                          as EWMStockOwner,
      case when ( _EWMStockOwnerDetails.IsBusinessPurposeCompleted <> 'X' or _EWMStockOwnerDetails.IsBusinessPurposeCompleted is null )
          then _EWMStockOwnerDetails.BusinessPartnerName
          else cast( '' as bu_nameor1  ) end                                                                                                                                as EWMStockOwnerName,
      DeliveryItemStockTypeDetnCode,
      cast( StockDocumentCategory as ewm_de_stockdocumentcat preserving type )                                                                                              as StockDocumentCategory,
      StockDocumentNumber, //Obsolete since 2005
      StockItemNumber, // Obsolete since 2005

      /* Project Stock - Internal WBS Element */
      case StockDocumentCategory
        when 'PJS'
          then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized
            when 'X' then _ProjectStockDecentralized.WBSElementInternalID
            else _ProjectStock.WBSElementInternalID end
        else cast( '00000000' as ps_s4_pspnr preserving type ) end                                                                                                          as WBSElementInternalID, // Added for A2X Service to fulfill Guideline

      /* Project Stock - External WBS Element */
      case StockDocumentCategory
        when 'PJS'
          then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized
            when 'X' then _ProjectStockDecentralized.WBSElementExternalID
            else _ProjectStock.WBSElementExternalID end
        else cast( '                        ' as ps_posid_edit preserving type ) end                                                                                        as WBSElementExternalID, // Added for A2X Service to fulfill Guideline


      cast( SpecialStockIdfgSalesOrder as ewm_de_special_stock_idfg_hdr )                                                                                                   as SpecialStockIdfgSalesOrder,
      cast( SpecialStockIdfgSalesOrderItem as ewm_de_special_stock_idfg_item )                                                                                              as SpecialStockIdfgSalesOrderItem,
      CountryOfOrigin,

      /*Merge Project and Sales Order Stock Reference for UI consumption*/
      cast( case StockDocumentCategory
       when 'PJS'
         then case _WhseSystemIsDecentralized.WarehouseSystemIsDecentralized
           when 'X' then _ProjectStockDecentralized.WBSElementExternalID
           else _ProjectStock.WBSElementExternalID end
       else StockDocumentNumber end  as ewm_de_stockdocumentnumber )                                                                                                        as ExternalStockDocumentNumber, // Added for UI consumption


      /* Reference Documents */
      cast( SalesOrder as vdm_sales_order )                                                                                                                                 as SalesOrder,
      cast( SalesOrderItem as ewm_de_sales_order_item_aconv preserving type )                                                                                               as SalesOrderItem,

      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PPO'].EWMRefDeliveryDocumentNumber         as manufacturingorder )                                        as ManufacturingOrder,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PMO'].EWMRefDeliveryDocumentNumber         as ewm_de_maintenance_order )                                  as MaintenanceOrder,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'POO'].EWMRefDeliveryDocumentItem           as ewm_de_maintenance_order_op)                                as MaintenanceOrderOperation,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'RES'].EWMRefDeliveryDocumentNumber         as rsnum )                                                     as Reservation,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'PO'].EWMRefDeliveryDocumentNumber          as vdm_purchaseorder)                                          as PurchaseOrder,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentNumber         as /scwm/sp_docno_erp )                                        as OutboundDelivery,
      cast( substring(cast(_ReferenceDocuments[1:EWMReferenceDocumentCategory = 'ERP'].EWMRefDeliveryDocumentItem as abap.numc( 10 )),5,6) as ewm_de_outb_deliv_item_aconv) as OutboundDeliveryItem,
      cast( _ReferenceDocuments[1:EWMReferenceDocumentCategory = 'SRV'].EWMRefDeliveryDocumentNumber         as crmt_object_id )                                            as ServiceOrder,
      cast( substring(cast(_ReferenceDocuments[1:EWMReferenceDocumentCategory = 'SRV'].EWMRefDeliveryDocumentItem as abap.numc( 10 )),5,6) as ewm_de_serv_order_item_aconv) as ServiceOrderItem,

      odo_item.OutboundDeliveryOrderUUID,
      odo_item.OutboundDeliveryOrderItemUUID,

      _BPLocDetail
}
```
