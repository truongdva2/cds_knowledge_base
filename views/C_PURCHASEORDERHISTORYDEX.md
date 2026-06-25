---
name: C_PURCHASEORDERHISTORYDEX
description: Purchase OrderHISTORYDEX
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - purchase-order
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# C_PURCHASEORDERHISTORYDEX

**Purchase OrderHISTORYDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseOrder` | `PurchaseOrder` |
| `vdm_purchaseorderitem preserving type )` | `cast ( PurchaseOrderItem` |
| `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| `PurchasingHistoryDocumentType` | `PurchasingHistoryDocumentType` |
| `PurchasingHistoryDocumentYear` | `PurchasingHistoryDocumentYear` |
| `PurchasingHistoryDocument` | `PurchasingHistoryDocument` |
| `PurchasingHistoryDocumentItem` | `PurchasingHistoryDocumentItem` |
| `PurchasingHistoryCategory` | `PurchasingHistoryCategory` |
| `GoodsMovementType` | `GoodsMovementType` |
| `PostingDate` | `PostingDate` |
| `Currency` | `Currency` |
| `DebitCreditCode` | `DebitCreditCode` |
| `IsCompletelyDelivered` | `IsCompletelyDelivered` |
| `ReferenceDocumentFiscalYear` | `ReferenceDocumentFiscalYear` |
| `ReferenceDocument` | `ReferenceDocument` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `RvslOfGoodsReceiptIsAllowed` | `RvslOfGoodsReceiptIsAllowed` |
| `PricingDocument` | `PricingDocument` |
| `TaxCode` | `TaxCode` |
| `DocumentDate` | `DocumentDate` |
| `InventoryValuationType` | `InventoryValuationType` |
| `DocumentReferenceID` | `DocumentReferenceID` |
| `DeliveryQuantityUnit` | `DeliveryQuantityUnit` |
| `ematn preserving type )` | `cast ( ManufacturerMaterial` |
| `AccountingDocumentCreationDate` | `AccountingDocumentCreationDate` |
| `Quantity` | `Quantity` |
| `PurOrdAmountInCompanyCodeCrcy` | `PurOrdAmountInCompanyCodeCrcy` |
| `PurchaseOrderAmount` | `PurchaseOrderAmount` |
| `QtyInPurchaseOrderPriceUnit` | `QtyInPurchaseOrderPriceUnit` |
| `GRIRAcctClrgAmtInCoCodeCrcy` | `GRIRAcctClrgAmtInCoCodeCrcy` |
| `GdsRcptBlkdStkQtyInOrdQtyUnit` | `GdsRcptBlkdStkQtyInOrdQtyUnit` |
| `GdsRcptBlkdStkQtyInOrdPrcUnit` | `GdsRcptBlkdStkQtyInOrdPrcUnit` |
| `InvoiceAmtInCoCodeCrcy` | `InvoiceAmtInCoCodeCrcy` |
| `ShipgInstrnSupplierCompliance` | `ShipgInstrnSupplierCompliance` |
| `InvoiceAmountInFrgnCurrency` | `InvoiceAmountInFrgnCurrency` |
| `QuantityInDeliveryQtyUnit` | `QuantityInDeliveryQtyUnit` |
| `GRIRAcctClrgAmtInTransacCrcy` | `GRIRAcctClrgAmtInTransacCrcy` |
| `QuantityInBaseUnit` | `QuantityInBaseUnit` |
| `GRIRAcctClrgAmtInOrdTrnsacCrcy` | `GRIRAcctClrgAmtInOrdTrnsacCrcy` |
| `InvoiceAmtInPurOrdTransacCrcy` | `InvoiceAmtInPurOrdTransacCrcy` |
| `VltdGdsRcptBlkdStkQtyInOrdUnit` | `VltdGdsRcptBlkdStkQtyInOrdUnit` |
| `VltdGdsRcptBlkdQtyInOrdPrcUnit` | `VltdGdsRcptBlkdQtyInOrdPrcUnit` |
| `IsToBeAcceptedAtOrigin` | `IsToBeAcceptedAtOrigin` |
| `ExchangeRateDifferenceAmount` | `ExchangeRateDifferenceAmount` |
| `ExchangeRate` | `ExchangeRate` |
| `DeliveryDocument` | `DeliveryDocument` |
| `vdm_posnr_vl preserving type )` | `cast ( DeliveryDocumentItem` |
| `OrderPriceUnit` | `OrderPriceUnit` |
| `PurchaseOrderQuantityUnit` | `PurchaseOrderQuantityUnit` |
| `BaseUnit` | `BaseUnit` |
| `vdm_documentcurrency preserving type )` | `cast ( DocumentCurrency` |
| `fis_hwaer preserving type )` | `cast ( CompanyCodeCurrency` |
| `_PurchaseOrderItem.ProductType                    as ProductTypeCode` | *Association* |
| `_PurchaseOrderItem.IsStatisticalItem              as IsStatisticalItem` | *Association* |
| `_PurchaseOrderItem.IsReturnsItem                  as IsReturnsItem` | *Association* |
| `_PurchaseOrderItem.GoodsReceiptIsExpected         as GoodsReceiptIsExpected` | *Association* |
| `_PurchaseOrderItem.GoodsReceiptIsNonValuated      as GoodsReceiptIsNonValuated` | *Association* |
| `_PurchaseOrderItem.IsFinallyInvoiced              as IsFinallyInvoiced` | *Association* |
| `_PurchaseOrderItem.InvoiceIsExpected              as InvoiceIsExpected` | *Association* |
| `_PurchaseOrderItem.PurchaseContract               as PurchaseContract` | *Association* |
| `_PurchaseOrderItem.PurchaseContractItem           as PurchaseContractItem` | *Association* |
| `_PurchaseOrderItem.AccountAssignmentCategory      as AccountAssignmentCategory` | *Association* |
| `_PurchaseOrderItem.PurchaseRequisition            as PurchaseRequisition` | *Association* |
| `_PurchaseOrderItem.PurchaseRequisitionItem        as PurchaseRequisitionItem` | *Association* |
| `_PurchaseOrderItem.PurchaseOrderItemCategory      as PurchaseOrderItemCategory` | *Association* |
| `_PurchaseOrderItem.ServicePerformer               as ServicePerformer` | *Association* |
| `_PurchaseOrderItem.MaterialGroup                  as ProductGroup` | *Association* |
| `_PurchaseOrderItem.MultipleAcctAssgmtDistribution as MultipleAcctAssgmtDistribution` | *Association* |
| `_PurchaseOrderItem.PurchasingDocumentDeletionCode as PurgDocumentItemDeletionCode` | *Association* |
| `_PurchaseOrder.Supplier                           as Supplier` | *Association* |
| `_PurchaseOrder.PurchasingOrganization             as PurchasingOrganization` | *Association* |
| `_PurchaseOrder.PurchasingGroup                    as PurchasingGroup` | *Association* |
| `_PurchaseOrder.CompanyCode                        as CompanyCode` | *Association* |
| `_PurchaseOrder.PurchaseOrderType                  as PurchaseOrderType` | *Association* |
| `_PurchaseOrder.PurchasingDocumentDeletionCode     as PurchasingDocumentDeletionCode` | *Association* |
| `_PurchaseOrder.ReleaseIsNotCompleted              as ReleaseIsNotCompleted` | *Association* |
| `_PurchaseOrder.PurchasingCompletenessStatus       as PurchasingCompletenessStatus` | *Association* |
| `/* Associations */` | `/* Associations */` |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseOrderDEX` | *Association* |
| `_PurchaseOrderItemDEX` | *Association* |
| `_PurchaseContract` | *Association* |
| `_PurchaseContractItem` | *Association* |
| `_PurchaseRequisitionItem` | *Association* |
| `_PurchaseOrderHistCategory` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_Currency` | *Association* |
| `_DebitCreditCode` | *Association* |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_InventoryValuationType` | *Association* |
| `_DeliveryQuantityUnit` | *Association* |
| `_ManufacturerMaterial` | *Association* |
| `_DeliveryDocument` | *Association* |
| `_DeliveryDocumentItem` | *Association* |
| `_OrderPriceUnit` | *Association* |
| `_PurchaseOrderQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_DocumentCurrency` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_ProductTypeCode` | *Association* |
| `_PurgDocumentItemCategory` | *Association* |
| `_ServicePerformer` | *Association* |
| `_ProductGroup` | *Association* |
| `_Supplier` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderDEX` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItemDEX` | `C_PurchaseOrderItemDEX` | [1..1] |
| `_PurchaseContract` | `C_PurchaseContractDEX` | [1..1] |
| `_PurchaseContractItem` | `C_PurchaseContractItemDEX` | [1..1] |
| `_PurchaseRequisitionItem` | `C_PurchaseRequisitionItemDEX` | [0..1] |
| `_PurchaseOrderHistCategory` | `I_PurchaseOrderHistCategory` | [1..1] |
| `_GoodsMovementType` | `I_GoodsMovementType` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_DeliveryQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ManufacturerMaterial` | `I_Product` | [0..1] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [0..1] |
| `_DeliveryDocumentItem` | `I_DeliveryDocumentItem` | [0..1] |
| `_OrderPriceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchaseOrderQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [1..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |
| `_PurgDocumentItemCategory` | `I_PurgDocumentItemCategory` | [0..1] |
| `_ServicePerformer` | `I_BusinessPartner` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CMMPURORDHIST'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }

@EndUserText.label                      : 'Data Extraction for Purchase Order History'
@ClientHandling.algorithm               : #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }


@VDM.viewType                           : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations   : true

//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekbe', role: #MAIN,
                        viewElement     : ['PurchaseOrder', 'PurchaseOrderItem', 'AccountAssignmentNumber',
                                           'PurchasingHistoryDocumentType','PurchasingHistoryDocumentYear',
                                           'PurchasingHistoryDocument',
                                           'PurchasingHistoryDocumentItem' ],
                        tableElement    : ['ebeln', 'ebelp', 'zekkn', 'vgabe', 'gjahr', 'belnr', 'buzei' ]
                      },

                              { table           : 'ekpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder', 'PurchaseOrderItem'],
                                tableElement    : ['ebeln', 'ebelp']
                              },
                              {
                                table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                                viewElement     : ['PurchaseOrder'],
                                tableElement    : ['ebeln']
                              }
                         ]


        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrderHistory'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchaseOrderHistoryDEX
  as select from I_PurchaseOrderHistoryAPI01

  association [1..1] to C_PurchaseOrderDEX           as _PurchaseOrderDEX          on  $projection.PurchaseOrder = _PurchaseOrderDEX.PurchaseOrder

  association [1..1] to C_PurchaseOrderItemDEX       as _PurchaseOrderItemDEX      on  $projection.PurchaseOrder     = _PurchaseOrderItemDEX.PurchaseOrder
                                                                                   and $projection.PurchaseOrderItem = _PurchaseOrderItemDEX.PurchaseOrderItem
  
  association [1..1] to C_PurchaseContractDEX        as _PurchaseContract          on  $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association [1..1] to C_PurchaseContractItemDEX    as _PurchaseContractItem      on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                   and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem
                                                                                
  association [0..1] to C_PurchaseRequisitionItemDEX as _PurchaseRequisitionItem   on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                   and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem
  
  association [1..1] to I_PurchaseOrderHistCategory  as _PurchaseOrderHistCategory on  $projection.PurchasingHistoryCategory = _PurchaseOrderHistCategory.PurchaseOrderHistCategory
  
  association [0..1] to I_GoodsMovementType          as _GoodsMovementType         on  $projection.GoodsMovementType = _GoodsMovementType.GoodsMovementType
  
  association [1..1] to I_Currency                   as _Currency                  on  $projection.Currency = _Currency.Currency
  
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode           on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  
  association [0..1] to I_Product                    as _Product                   on  $projection.Material = _Product.Product
  
  association [1..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
  
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType    on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  
  association [0..1] to I_UnitOfMeasure              as _DeliveryQuantityUnit      on  $projection.DeliveryQuantityUnit = _DeliveryQuantityUnit.UnitOfMeasure
  
  association [0..1] to I_Product                    as _ManufacturerMaterial      on  $projection.ManufacturerMaterial = _ManufacturerMaterial.Product
  
  association [0..1] to I_DeliveryDocument           as _DeliveryDocument          on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
  
  association [0..1] to I_DeliveryDocumentItem       as _DeliveryDocumentItem      on  $projection.DeliveryDocument     = _DeliveryDocumentItem.DeliveryDocument
                                                                                   and $projection.DeliveryDocumentItem = _DeliveryDocumentItem.DeliveryDocumentItem
                                                                            
  association [0..1] to I_UnitOfMeasure              as _OrderPriceUnit            on  $projection.OrderPriceUnit = _OrderPriceUnit.UnitOfMeasure
  
  association [1..1] to I_UnitOfMeasure              as _PurchaseOrderQuantityUnit on  $projection.PurchaseOrderQuantityUnit = _PurchaseOrderQuantityUnit.UnitOfMeasure
  
  association [1..1] to I_UnitOfMeasure              as _BaseUnit                  on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  
  association [1..1] to I_Currency                   as _DocumentCurrency          on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  
  association [1..1] to I_Currency                   as _CompanyCodeCurrency       on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  
  association [0..1] to I_ProductTypeCode            as _ProductTypeCode           on  $projection.ProductTypeCode = _ProductTypeCode.ProductTypeCode
  
  association [0..1] to I_PurgDocumentItemCategory   as _PurgDocumentItemCategory  on  $projection.PurchaseOrderItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory
  
  association [0..1] to I_BusinessPartner            as _ServicePerformer          on  $projection.ServicePerformer = _ServicePerformer.BusinessPartner
  
  association [1..1] to I_ProductGroup_2             as _ProductGroup              on  $projection.ProductGroup = _ProductGroup.ProductGroup
  
  association [0..1] to I_Supplier                   as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization    on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_PurchasingGroup            as _PurchasingGroup           on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [0..1] to I_CompanyCode                as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
{

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrder'
  key PurchaseOrder                                     as PurchaseOrder,
 
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrderItem'
  key cast ( PurchaseOrderItem as vdm_purchaseorderitem preserving type ) as PurchaseOrderItem,

  key AccountAssignmentNumber                           as AccountAssignmentNumber,

  key PurchasingHistoryDocumentType                     as PurchasingHistoryDocumentType,

      @Semantics.fiscal.year: true
  key PurchasingHistoryDocumentYear                     as PurchasingHistoryDocumentYear,

  key PurchasingHistoryDocument                         as PurchasingHistoryDocument,

  key PurchasingHistoryDocumentItem                     as PurchasingHistoryDocumentItem,

      @ObjectModel.foreignKey.association: '_PurchaseOrderHistCategory'
      PurchasingHistoryCategory                         as PurchasingHistoryCategory,

      @ObjectModel.foreignKey.association: '_GoodsMovementType'
      GoodsMovementType                                 as GoodsMovementType,

      @Semantics.businessDate.at: true
      PostingDate                                       as PostingDate,

      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      Currency                                          as Currency,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode                                   as DebitCreditCode,

      IsCompletelyDelivered                             as IsCompletelyDelivered,

      @Semantics.fiscal.year: true
      ReferenceDocumentFiscalYear                       as ReferenceDocumentFiscalYear,

      ReferenceDocument                                 as ReferenceDocument,

      // ReferenceDocumentItem          as ReferenceDocumentItem,  "GFN ATC Error in underlying API IView.

      @ObjectModel.foreignKey.association: '_Product'
      Material                                          as Material,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant                                             as Plant,

      RvslOfGoodsReceiptIsAllowed                       as RvslOfGoodsReceiptIsAllowed,
      PricingDocument                                   as PricingDocument,
      TaxCode                                           as TaxCode,
      
      @Semantics.businessDate.at: true
      DocumentDate                                      as DocumentDate,
      
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType                            as InventoryValuationType,
      
      DocumentReferenceID                               as DocumentReferenceID,
      
      @ObjectModel.foreignKey.association: '_DeliveryQuantityUnit'
      @Semantics.unitOfMeasure: true
      DeliveryQuantityUnit                              as DeliveryQuantityUnit,

      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      cast ( ManufacturerMaterial as ematn preserving type ) as ManufacturerMaterial,

      @Semantics.businessDate.at: true
      AccountingDocumentCreationDate                    as AccountingDocumentCreationDate,

      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      Quantity                                          as Quantity,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      PurOrdAmountInCompanyCodeCrcy                     as PurOrdAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      PurchaseOrderAmount                               as PurchaseOrderAmount,

      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      QtyInPurchaseOrderPriceUnit                       as QtyInPurchaseOrderPriceUnit,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      GRIRAcctClrgAmtInCoCodeCrcy                       as GRIRAcctClrgAmtInCoCodeCrcy,

      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      GdsRcptBlkdStkQtyInOrdQtyUnit                     as GdsRcptBlkdStkQtyInOrdQtyUnit,

      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      GdsRcptBlkdStkQtyInOrdPrcUnit                     as GdsRcptBlkdStkQtyInOrdPrcUnit,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      InvoiceAmtInCoCodeCrcy                            as InvoiceAmtInCoCodeCrcy,

      ShipgInstrnSupplierCompliance                     as ShipgInstrnSupplierCompliance,

      @Semantics.amount.currencyCode: 'Currency'
      InvoiceAmountInFrgnCurrency                       as InvoiceAmountInFrgnCurrency,

      @Semantics.quantity.unitOfMeasure:'DeliveryQuantityUnit'
      QuantityInDeliveryQtyUnit                         as QuantityInDeliveryQtyUnit,

      @Semantics.amount.currencyCode: 'Currency'
      GRIRAcctClrgAmtInTransacCrcy                      as GRIRAcctClrgAmtInTransacCrcy,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @EndUserText.label: 'Quantity in base unit'
      QuantityInBaseUnit                                as QuantityInBaseUnit,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @EndUserText.label: 'Purchase Order Currency'
      GRIRAcctClrgAmtInOrdTrnsacCrcy                    as GRIRAcctClrgAmtInOrdTrnsacCrcy,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceAmtInPurOrdTransacCrcy                     as InvoiceAmtInPurOrdTransacCrcy,

      @Semantics.quantity.unitOfMeasure:'PurchaseOrderQuantityUnit'
      VltdGdsRcptBlkdStkQtyInOrdUnit                    as VltdGdsRcptBlkdStkQtyInOrdUnit,

      @Semantics.quantity.unitOfMeasure:'OrderPriceUnit'
      VltdGdsRcptBlkdQtyInOrdPrcUnit                    as VltdGdsRcptBlkdQtyInOrdPrcUnit,

      IsToBeAcceptedAtOrigin                            as IsToBeAcceptedAtOrigin,

      @Semantics.amount.currencyCode: 'Currency'
      ExchangeRateDifferenceAmount                      as ExchangeRateDifferenceAmount,

      ExchangeRate                                      as ExchangeRate,

      @ObjectModel.foreignKey.association: '_DeliveryDocument'
      DeliveryDocument                                  as DeliveryDocument,

      @ObjectModel.foreignKey.association: '_DeliveryDocumentItem'
      cast ( DeliveryDocumentItem as vdm_posnr_vl preserving type ) as DeliveryDocumentItem,

      @ObjectModel.foreignKey.association: '_OrderPriceUnit'
      @Semantics.unitOfMeasure: true
      OrderPriceUnit                                    as OrderPriceUnit,

      @ObjectModel.foreignKey.association: '_PurchaseOrderQuantityUnit'
      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit                         as PurchaseOrderQuantityUnit,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      BaseUnit                                          as BaseUnit,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      cast ( DocumentCurrency as vdm_documentcurrency preserving type ) as DocumentCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      cast ( CompanyCodeCurrency as fis_hwaer preserving type ) as CompanyCodeCurrency,

      //JIRA 14008 Item fields


      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      _PurchaseOrderItem.ProductType                    as ProductTypeCode,
      
      _PurchaseOrderItem.IsStatisticalItem              as IsStatisticalItem,
      _PurchaseOrderItem.IsReturnsItem                  as IsReturnsItem,
      _PurchaseOrderItem.GoodsReceiptIsExpected         as GoodsReceiptIsExpected,
      _PurchaseOrderItem.GoodsReceiptIsNonValuated      as GoodsReceiptIsNonValuated,
      _PurchaseOrderItem.IsFinallyInvoiced              as IsFinallyInvoiced,
      _PurchaseOrderItem.InvoiceIsExpected              as InvoiceIsExpected,
      
      // _PurchaseOrderItem.PurchasingDocumentCategory as PurchasingDocumentCategory,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      _PurchaseOrderItem.PurchaseContract               as PurchaseContract,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      _PurchaseOrderItem.PurchaseContractItem           as PurchaseContractItem,
      
      _PurchaseOrderItem.AccountAssignmentCategory      as AccountAssignmentCategory,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisition'
      _PurchaseOrderItem.PurchaseRequisition            as PurchaseRequisition,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisitionItem'
      _PurchaseOrderItem.PurchaseRequisitionItem        as PurchaseRequisitionItem,
      
      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
      _PurchaseOrderItem.PurchaseOrderItemCategory      as PurchaseOrderItemCategory,
      
      @ObjectModel.foreignKey.association: '_ServicePerformer'
      _PurchaseOrderItem.ServicePerformer               as ServicePerformer,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      _PurchaseOrderItem.MaterialGroup                  as ProductGroup,
      
      _PurchaseOrderItem.MultipleAcctAssgmtDistribution as MultipleAcctAssgmtDistribution,
      _PurchaseOrderItem.PurchasingDocumentDeletionCode as PurgDocumentItemDeletionCode,

      // //JIRA 14008 Header fields
      
      @ObjectModel.foreignKey.association: '_Supplier'
      _PurchaseOrder.Supplier                           as Supplier,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      _PurchaseOrder.PurchasingOrganization             as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _PurchaseOrder.PurchasingGroup                    as PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _PurchaseOrder.CompanyCode                        as CompanyCode,
      
      
      _PurchaseOrder.PurchaseOrderType                  as PurchaseOrderType,
      
      _PurchaseOrder.PurchasingDocumentDeletionCode     as PurchasingDocumentDeletionCode,
      _PurchaseOrder.ReleaseIsNotCompleted              as ReleaseIsNotCompleted,
      _PurchaseOrder.PurchasingCompletenessStatus       as PurchasingCompletenessStatus,




      /* Associations */
      _PurchaseOrder,
      _PurchaseOrderItem,
      
      _PurchaseOrderDEX,
      _PurchaseOrderItemDEX,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchaseRequisitionItem,
      _PurchaseOrderHistCategory,
      _GoodsMovementType,
      _Currency,
      _DebitCreditCode,
      _Product,
      _Plant,
      _InventoryValuationType,
      _DeliveryQuantityUnit,
      _ManufacturerMaterial,
      _DeliveryDocument,
      _DeliveryDocumentItem,
      _OrderPriceUnit,
      _PurchaseOrderQuantityUnit,
      _BaseUnit,
      _DocumentCurrency,
      _CompanyCodeCurrency,
      _ProductTypeCode,
      _PurgDocumentItemCategory,
      _ServicePerformer,
      _ProductGroup,
      _Supplier,
      _PurchasingOrganization,
      _PurchasingGroup,
      _CompanyCode

}
```
