---
name: D_BILLOFMATERIALEXPLODEBOMR
description: D Bill of MaterialEXPLODEBOMR
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - material
  - bill-of-material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALEXPLODEBOMR

**D Bill of MaterialEXPLODEBOMR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BOMHdrRootMatlHierNode         : matnr;` | `BOMHdrRootMatlHierNode         : matnr;` |
| `MaterialName                   : maktx;` | `MaterialName                   : maktx;` |
| `BillOfMaterialRoot             : stnum;` | `BillOfMaterialRoot             : stnum;` |
| `ParentBillOfMaterial           : cs_stlnr;` | `ParentBillOfMaterial           : cs_stlnr;` |
| `BOMHeaderQuantityInBaseUnit    : basmn;` | `BOMHeaderQuantityInBaseUnit    : basmn;` |
| `BOMHeaderBaseUnit              : basme;` | `BOMHeaderBaseUnit              : basme;` |
| `BillOfMaterialRootVariant      : stlal;` | `BillOfMaterialRootVariant      : stlal;` |
| `BillOfMaterialVariantUsage     : stlvw;` | `BillOfMaterialVariantUsage     : stlvw;` |
| `HeaderValidityStartDate        : datuv;` | `HeaderValidityStartDate        : datuv;` |
| `HeaderValidityEndDate          : datub;` | `HeaderValidityEndDate          : datub;` |
| `ChangeNumber                   : aennr;` | `ChangeNumber                   : aennr;` |
| `BOMHdrMatlHierNode             : matnr;` | `BOMHdrMatlHierNode             : matnr;` |
| `ProductionVersion              : verid;` | `ProductionVersion              : verid;` |
| `BOMAlternativeText             : stktx;` | `BOMAlternativeText             : stktx;` |
| `ExplodeBOMLevelValue           : histu;` | `ExplodeBOMLevelValue           : histu;` |
| `PathToPredecessorBOMValue      : cs_e_vwegx;` | `PathToPredecessorBOMValue      : cs_e_vwegx;` |
| `PathToBillOfMaterialValue      : wegxx;` | `PathToBillOfMaterialValue      : wegxx;` |
| `BillOfMaterialItemNumber       : sposn;` | `BillOfMaterialItemNumber       : sposn;` |
| `NewBillOfMaterialItemNumber    : cs_sposn;` | `NewBillOfMaterialItemNumber    : cs_sposn;` |
| `BillOfMaterialVariant          : stlal;` | `BillOfMaterialVariant          : stlal;` |
| `BillOfMaterial                 : stnum;` | `BillOfMaterial                 : stnum;` |
| `SuccessorBillOfMaterial        : cs_stlnr;` | `SuccessorBillOfMaterial        : cs_stlnr;` |
| `BOMHdrEngChgDoc                : aennr;` | `BOMHdrEngChgDoc                : aennr;` |
| `PlantName                      : name1;` | `PlantName                      : name1;` |
| `BOMVersionStatusDescription    : ddtext;` | `BOMVersionStatusDescription    : ddtext;` |
| `BillOfMaterialComponent        : idnrk;` | `BillOfMaterialComponent        : idnrk;` |
| `BillOfMaterialItemQuantity     : kmpmg;` | `BillOfMaterialItemQuantity     : kmpmg;` |
| `BillOfMaterialItemUnit         : meins;` | `BillOfMaterialItemUnit         : meins;` |
| `ComponentQuantityInCompUoM     : cs_e_mngko;` | `ComponentQuantityInCompUoM     : cs_e_mngko;` |
| `ComponentQuantityInBaseUoM     : cs_e_mnglg;` | `ComponentQuantityInBaseUoM     : cs_e_mnglg;` |
| `ComponentDescription           : ojtxp;` | `ComponentDescription           : ojtxp;` |
| `MaterialType                   : mtart;` | `MaterialType                   : mtart;` |
| `StandardPrice                  : stprs;` | `StandardPrice                  : stprs;` |
| `MRPType                        : dismm;` | `MRPType                        : dismm;` |
| `BOMSpecialProcurementType      : sobsl;` | `BOMSpecialProcurementType      : sobsl;` |
| `FollowUpProduct                : nfmat;` | `FollowUpProduct                : nfmat;` |
| `MaterialIsConfigurable         : kzkfg;` | `MaterialIsConfigurable         : kzkfg;` |
| `RecordCreationDate             : andat;` | `RecordCreationDate             : andat;` |
| `CreatedByUser                  : annam;` | `CreatedByUser                  : annam;` |
| `LastChangeDate                 : aedat;` | `LastChangeDate                 : aedat;` |
| `LastChangedByUser              : aenam;` | `LastChangedByUser              : aenam;` |
| `BillOfMaterialItemCategory     : postp;` | `BillOfMaterialItemCategory     : postp;` |
| `IsMaterialProvision            : beikz;` | `IsMaterialProvision            : beikz;` |
| `IsBOMItemSparePart             : erskz;` | `IsBOMItemSparePart             : erskz;` |
| `IsCAD                          : cadpo;` | `IsCAD                          : cadpo;` |
| `PurchasingOrganization         : ekorg;` | `PurchasingOrganization         : ekorg;` |
| `PurchasingGroup                : ekgrp;` | `PurchasingGroup                : ekgrp;` |
| `Supplier                       : lifnr;` | `Supplier                       : lifnr;` |
| `MaterialComponentPrice         : preis;` | `MaterialComponentPrice         : preis;` |
| `MaterialPriceUnitQty           : cs_e_peinh;` | `MaterialPriceUnitQty           : cs_e_peinh;` |
| `Currency                       : waers;` | `Currency                       : waers;` |
| `CostElement                    : sakto;` | `CostElement                    : sakto;` |
| `DocNumber                      : doknr;` | `DocNumber                      : doknr;` |
| `DocumentType                   : dokar;` | `DocumentType                   : dokar;` |
| `DocumentPart                   : doktl_d;` | `DocumentPart                   : doktl_d;` |
| `DocumentVersion                : dokvr;` | `DocumentVersion                : dokvr;` |
| `BOMItemDescription             : potx1;` | `BOMItemDescription             : potx1;` |
| `BOMItemText2                   : potx2;` | `BOMItemText2                   : potx2;` |
| `MaterialGroup                  : matkl;` | `MaterialGroup                  : matkl;` |
| `GoodsReceiptDurationInDays     : webaz;` | `GoodsReceiptDurationInDays     : webaz;` |
| `ValidityStartDate              : datuv;` | `ValidityStartDate              : datuv;` |
| `ValidityEndDate                : dtbis;` | `ValidityEndDate                : dtbis;` |
| `IsPhantomItem                  : dumps;` | `IsPhantomItem                  : dumps;` |
| `ProdOrderIssueLocation         : lgpro;` | `ProdOrderIssueLocation         : lgpro;` |
| `IsSoftwareComponent            : cs_sfwind;` | `IsSoftwareComponent            : cs_sfwind;` |
| `BOMItemIsDiscontinued          : kzaus;` | `BOMItemIsDiscontinued          : kzaus;` |
| `ChgToEngChgNumber              : aenra;` | `ChgToEngChgNumber              : aenra;` |
| `DeliveryTimeInDays             : lifzt;` | `DeliveryTimeInDays             : lifzt;` |
| `MaterialCompIsAlternativeItem  : alpos;` | `MaterialCompIsAlternativeItem  : alpos;` |
| `AlternativeItemGroup           : cs_alpgr;` | `AlternativeItemGroup           : cs_alpgr;` |
| `NextLevelCompIsAlternativeItem : cs_e_xalst;` | `NextLevelCompIsAlternativeItem : cs_e_xalst;` |
| `IsClassificationRelevant       : cs_kzclb;` | `IsClassificationRelevant       : cs_kzclb;` |
| `IsAssembly                     : stkkz;` | `IsAssembly                     : stkkz;` |
| `NextLevelBaseQuantity          : cs_e_xbmng;` | `NextLevelBaseQuantity          : cs_e_xbmng;` |
| `NextLevelBaseUnit              : cs_e_xbmen;` | `NextLevelBaseUnit              : cs_e_xbmen;` |
| `NextLevelBillOfMaterialVariant : cs_e_xstal;` | `NextLevelBillOfMaterialVariant : cs_e_xstal;` |
| `NextLevelBOMCategory           : cs_e_xstty;` | `NextLevelBOMCategory           : cs_e_xstty;` |
| `BillOfMaterialCategory         : stlty;` | `BillOfMaterialCategory         : stlty;` |
| `NextLevelBillOfMaterial        : cs_e_xstnr;` | `NextLevelBillOfMaterial        : cs_e_xstnr;` |
| `AssemblyBillOfMaterial         : cs_e_xstnr_1;` | `AssemblyBillOfMaterial         : cs_e_xstnr_1;` |
| `NextLevelBOMUsage              : cs_e_xstan;` | `NextLevelBOMUsage              : cs_e_xstan;` |
| `Class                          : klasse_d;` | `Class                          : klasse_d;` |
| `ClassType                      : klassenart;` | `ClassType                      : klassenart;` |
| `BOMClassificationNumber        : cs_clszu;` | `BOMClassificationNumber        : cs_clszu;` |
| `NextLevelIsConfigurableBOM     : cs_e_xkbau;` | `NextLevelIsConfigurableBOM     : cs_e_xkbau;` |
| `MaterialIsCoProduct            : kzkup;` | `MaterialIsCoProduct            : kzkup;` |
| `BOMItemInternalChangeCount     : cim_count;` | `BOMItemInternalChangeCount     : cim_count;` |
| `NextLevelHasDateHistory        : cs_e_xhsdt;` | `NextLevelHasDateHistory        : cs_e_xhsdt;` |
| `DeletionIndicator              : cs_e_lkzch;` | `DeletionIndicator              : cs_e_lkzch;` |
| `DiscontinuationGroup           : cs_nfeag;` | `DiscontinuationGroup           : cs_nfeag;` |
| `DistributionKeyCompConsumption : sa_verti;` | `DistributionKeyCompConsumption : sa_verti;` |
| `NextLevelItemIsDeleted         : cs_e_xlkzh;` | `NextLevelItemIsDeleted         : cs_e_xlkzh;` |
| `ExplosionType                  : cs_dispo;` | `ExplosionType                  : cs_dispo;` |
| `BOMItemHasFixedQuantity        : fmnge;` | `BOMItemHasFixedQuantity        : fmnge;` |
| `FollowUpGroup                  : cs_nfgrp;` | `FollowUpGroup                  : cs_nfgrp;` |
| `MatlCompIsFollowUpMaterial     : cs_kznfp;` | `MatlCompIsFollowUpMaterial     : cs_kznfp;` |
| `FormulaKey                     : rform;` | `FormulaKey                     : rform;` |
| `GoodsRecipientName             : wempf;` | `GoodsRecipientName             : wempf;` |
| `BOMHasHeaderInfoRecord         : hdnfo;` | `BOMHasHeaderInfoRecord         : hdnfo;` |
| `IntraMaterial                  : intrm;` | `IntraMaterial                  : intrm;` |
| `ExternalIdentificationOfItem   : cs_itmid;` | `ExternalIdentificationOfItem   : cs_itmid;` |
| `LeadTimeOffset                 : nlfzt;` | `LeadTimeOffset                 : nlfzt;` |
| `LongTextLanguage               : ltxsp;` | `LongTextLanguage               : ltxsp;` |
| `MaterialPurityPercent          : csstr;` | `MaterialPurityPercent          : csstr;` |
| `MultipleSelectionAllowed       : clmult;` | `MultipleSelectionAllowed       : clmult;` |
| `VariableSizeItemQuantity       : roanz;` | `VariableSizeItemQuantity       : roanz;` |
| `VariableSizeItemUnit           : roame;` | `VariableSizeItemUnit           : roame;` |
| `NmbrOfCompatibleUnitInstances  : /cum/cufactor;` | `NmbrOfCompatibleUnitInstances  : /cum/cufactor;` |
| `ObjectType                     : objty;` | `ObjectType                     : objty;` |
| `ObjDpnAssignmentNumber         : knobj;` | `ObjDpnAssignmentNumber         : knobj;` |
| `OperationLeadTimeOffset        : cs_nlfzv;` | `OperationLeadTimeOffset        : cs_nlfzv;` |
| `OperationLeadTimeOffsetUnit    : cs_nlfmv;` | `OperationLeadTimeOffsetUnit    : cs_nlfmv;` |
| `ReinsurContrOrgUnit            : abteilung;` | `ReinsurContrOrgUnit            : abteilung;` |
| `AlternativeItemPriority        : cs_alprf;` | `AlternativeItemPriority        : cs_alprf;` |
| `ProductionSupplyArea           : prvbe;` | `ProductionSupplyArea           : prvbe;` |
| `QuantityVariableSizeItem       : romen;` | `QuantityVariableSizeItem       : romen;` |
| `VariableSizeCompUnitOfMeasure  : rokme;` | `VariableSizeCompUnitOfMeasure  : rokme;` |
| `ReferencePoint                 : cn_rfpnt;` | `ReferencePoint                 : cn_rfpnt;` |
| `RequiredComponent              : clobk;` | `RequiredComponent              : clobk;` |
| `ScrapQuantityInBaseUoM         : cs_e_amglg;` | `ScrapQuantityInBaseUoM         : cs_e_amglg;` |
| `Size1                          : roms1;` | `Size1                          : roms1;` |
| `Size2                          : roms2;` | `Size2                          : roms2;` |
| `Size3                          : roms3;` | `Size3                          : roms3;` |
| `UnitOfMeasureForSize1To3       : romei;` | `UnitOfMeasureForSize1To3       : romei;` |
| `BOMItemSpecialProcurementType  : cs_sobsl;` | `BOMItemSpecialProcurementType  : cs_sobsl;` |
| `SpecialProcurementType         : cs_sobmx;` | `SpecialProcurementType         : cs_sobmx;` |
| `StorageLocation                : lgort_d;` | `StorageLocation                : lgort_d;` |
| `AlternativeItemStrategy        : cs_alpst;` | `AlternativeItemStrategy        : cs_alpst;` |
| `IsSubItem                      : upskz;` | `IsSubItem                      : upskz;` |
| `RowIndex                       : sytabix;` | `RowIndex                       : sytabix;` |
| `NextLevelHasTechStatusHistory  : cs_e_xhssr;` | `NextLevelHasTechStatusHistory  : cs_e_xhssr;` |
| `UnitOfMeasure                  : kmpme;` | `UnitOfMeasure                  : kmpme;` |
| `UnloadingPointName             : ablad;` | `UnloadingPointName             : ablad;` |
| `UsageProbabilityPercent        : ewahr;` | `UsageProbabilityPercent        : ewahr;` |
| `NextLevelIsVariantDocStructure : cs_e_xvrst;` | `NextLevelIsVariantDocStructure : cs_e_xvrst;` |
| `BOMItemSign                    : cs_e_msign;` | `BOMItemSign                    : cs_e_msign;` |
| `BOMIsParamEffectivityRelevant  : cc_mteff;` | `BOMIsParamEffectivityRelevant  : cc_mteff;` |
| `BOMItemAssyScrapPercent        : cs_e_ausss;` | `BOMItemAssyScrapPercent        : cs_e_ausss;` |
| `BaseUnit                       : meins;` | `BaseUnit                       : meins;` |
| `ProdnOrderIsBatchRequired      : kzech;` | `ProdnOrderIsBatchRequired      : kzech;` |
| `MaterialIsIntBatchManaged      : xchar;` | `MaterialIsIntBatchManaged      : xchar;` |
| `IsBulkMaterial                 : schgt;` | `IsBulkMaterial                 : schgt;` |
| `ComponentScrapPercent          : cs_e_ausch;` | `ComponentScrapPercent          : cs_e_ausch;` |
| `CommodityCodeText              : stawn;` | `CommodityCodeText              : stawn;` |
| `ComponentScrapMaterialPercent  : cs_e_kausf;` | `ComponentScrapMaterialPercent  : cs_e_kausf;` |
| `CompleteMaintStatus            : vpsta;` | `CompleteMaintStatus            : vpsta;` |
| `MaterialVariantConfigNumber    : cs_e_mcuob;` | `MaterialVariantConfigNumber    : cs_e_mcuob;` |
| `BOMIsConfiguredOnMultipleLvl   : nconf;` | `BOMIsConfiguredOnMultipleLvl   : nconf;` |
| `CustomsPreference              : prefe;` | `CustomsPreference              : prefe;` |
| `Denominator                    : umren;` | `Denominator                    : umren;` |
| `ProductDocumentVersion         : dzeivr;` | `ProductDocumentVersion         : dzeivr;` |
| `ProductDocumentNumber          : dzeinr;` | `ProductDocumentNumber          : dzeinr;` |
| `ExternalDocumentStatus         : stabk;` | `ExternalDocumentStatus         : stabk;` |
| `ProductDocumentType            : dzeiar;` | `ProductDocumentType            : dzeiar;` |
| `InspLotDocumentationIsRequired : kzdkz;` | `InspLotDocumentationIsRequired : kzdkz;` |
| `EffectiveOutDate               : ausdt;` | `EffectiveOutDate               : ausdt;` |
| `IsEngineeringRelevant          : sanko;` | `IsEngineeringRelevant          : sanko;` |
| `BOMExceptionText               : excpt;` | `BOMExceptionText               : excpt;` |
| `IsFixedPriceCoProduct          : ck_fixprku;` | `IsFixedPriceCoProduct          : ck_fixprku;` |
| `BOMItemIsHighLevelConfig       : sanvs;` | `BOMItemIsHighLevelConfig       : sanvs;` |
| `DependentRequirementsType      : sbdkz;` | `DependentRequirementsType      : sbdkz;` |
| `ClfnObjectInternalID           : cuobj;` | `ClfnObjectInternalID           : cuobj;` |
| `IssuingPlant                   : pswrk;` | `IssuingPlant                   : pswrk;` |
| `BillOfMaterialItemNodeNumber   : stlkn;` | `BillOfMaterialItemNodeNumber   : stlkn;` |
| `LowLevelCode                   : disst;` | `LowLevelCode                   : disst;` |
| `MaintenanceStatus              : pstat_d;` | `MaintenanceStatus              : pstat_d;` |
| `MovingAveragePriceInCoCodeCrcy : verpr;` | `MovingAveragePriceInCoCodeCrcy : verpr;` |
| `IsNetScrap                     : netau;` | `IsNetScrap                     : netau;` |
| `ProductDocumentPageCount       : blanz;` | `ProductDocumentPageCount       : blanz;` |
| `Numerator                      : umrez;` | `Numerator                      : umrez;` |
| `ObjectDescription              : ojtxb;` | `ObjectDescription              : ojtxb;` |
| `OperationScrapPercent          : avoau;` | `OperationScrapPercent          : avoau;` |
| `ProductDocumentPageFormat      : dzeifo;` | `ProductDocumentPageFormat      : dzeifo;` |
| `ProductDocumentPageNumber      : blatt;` | `ProductDocumentPageNumber      : blatt;` |
| `Plant                          : werks_d;` | `Plant                          : werks_d;` |
| `BOMItemIsPlantMaintRelevant    : sanin;` | `BOMItemIsPlantMaintRelevant    : sanin;` |
| `PlantSpecificMaterialStatus    : mmsta;` | `PlantSpecificMaterialStatus    : mmsta;` |
| `ProductPriceControl            : vprsv;` | `ProductPriceControl            : vprsv;` |
| `MatlCompIsProcuredExternally   : fbskz;` | `MatlCompIsProcuredExternally   : fbskz;` |
| `BOMItemIsProductionRelevant    : sanfe;` | `BOMItemIsProductionRelevant    : sanfe;` |
| `ProfitCenter                   : prctr;` | `ProfitCenter                   : prctr;` |
| `IsBOMRecursiveAllowed          : rekrs;` | `IsBOMRecursiveAllowed          : rekrs;` |
| `BOMIsRecursive                 : rekri;` | `BOMIsRecursive                 : rekri;` |
| `BOMItemIsCostingRelevant       : ck_selkz;` | `BOMItemIsCostingRelevant       : ck_selkz;` |
| `BOMItemIsSalesRelevant         : rvrel;` | `BOMItemIsSalesRelevant         : rvrel;` |
| `RequirementSegment             : sgt_rcat;` | `RequirementSegment             : sgt_rcat;` |
| `RevisionLevel                  : revlv;` | `RevisionLevel                  : revlv;` |
| `MaterialRevisionLevel          : cs_revlv;` | `MaterialRevisionLevel          : cs_revlv;` |
| `SerialNumberProfile            : serail;` | `SerialNumberProfile            : serail;` |
| `BOMItemSorter                  : sortp;` | `BOMItemSorter                  : sortp;` |
| `CostingSpecialProcurementType  : ck_sobsl;` | `CostingSpecialProcurementType  : ck_sobsl;` |
| `DocumentStatusName             : dostx;` | `DocumentStatusName             : dostx;` |
| `StockSegment                   : sgt_scat;` | `StockSegment                   : sgt_scat;` |
| `EffectivityParameterVariant    : techv;` | `EffectivityParameterVariant    : techv;` |
| `ProductUnitOfMeasureUsage      : kzwso;` | `ProductUnitOfMeasureUsage      : kzwso;` |
| `PlantSpecificStatusValidFrmDte : mmstd;` | `PlantSpecificStatusValidFrmDte : mmstd;` |
| `CrossPlantStatusValidFromDte   : mstde;` | `CrossPlantStatusValidFromDte   : mstde;` |
| `ValuationCategory              : bwtty_d;` | `ValuationCategory              : bwtty_d;` |
| `CrossPlantMaterialStatus       : mstae;` | `CrossPlantMaterialStatus       : mstae;` |
| `BillOfMaterialVersion          : cs_versn;` | `BillOfMaterialVersion          : cs_versn;` |
| `BOMVersionStatus               : cs_versnst;` | `BOMVersionStatus               : cs_versnst;` |
| `BillOfMaterialItemIndex        : sytabix;` | `BillOfMaterialItemIndex        : sytabix;` |
| `ProcurementType                : beskz;` | `ProcurementType                : beskz;` |
| `VisualSceneIdentifier          : sceneid;` | `VisualSceneIdentifier          : sceneid;` |
| `BOMIsVisualEnabled             : visenable_flg;` | `BOMIsVisualEnabled             : visenable_flg;` |
| `VislIntegAccessTokenValue      : visl_token;` | `VislIntegAccessTokenValue      : visl_token;` |
| `VislDocumentURL                : esh_e_fl_url_bin_content;` | `VislDocumentURL                : esh_e_fl_url_bin_content;` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Result of a Bill of Material Explosion'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
 }
define abstract entity D_BillOfMaterialExplodeBOMR
{

  BOMHdrRootMatlHierNode         : matnr;
  MaterialName                   : maktx;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'ParentBillOfMaterial'
  BillOfMaterialRoot             : stnum;
  ParentBillOfMaterial           : cs_stlnr;
  @EndUserText.label             : 'Base Unit for Header'
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  @EndUserText.quickInfo         : 'Base Unit for Hdr'
  BOMHeaderQuantityInBaseUnit    : basmn;
  BOMHeaderBaseUnit              : basme;
  BillOfMaterialRootVariant      : stlal;
  BillOfMaterialVariantUsage     : stlvw;
  HeaderValidityStartDate        : datuv;
  HeaderValidityEndDate          : datub;
  ChangeNumber                   : aennr;
  BOMHdrMatlHierNode             : matnr;
  ProductionVersion              : verid;
  BOMAlternativeText             : stktx;
  ExplodeBOMLevelValue           : histu;
  PathToPredecessorBOMValue      : cs_e_vwegx;
  PathToBillOfMaterialValue      : wegxx;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'NewBillOfMaterialItemNumber'
  BillOfMaterialItemNumber       : sposn;
  NewBillOfMaterialItemNumber    : cs_sposn;
  BillOfMaterialVariant          : stlal;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'SuccessorBillOfMaterial'
  BillOfMaterial                 : stnum;
  SuccessorBillOfMaterial        : cs_stlnr;
  BOMHdrEngChgDoc                : aennr;
  PlantName                      : name1;
  BOMVersionStatusDescription    : ddtext;
  BillOfMaterialComponent        : idnrk;
  @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
  BillOfMaterialItemQuantity     : kmpmg;
  BillOfMaterialItemUnit         : meins;
  @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
  ComponentQuantityInCompUoM     : cs_e_mngko;
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  ComponentQuantityInBaseUoM     : cs_e_mnglg;
  ComponentDescription           : ojtxp;
  MaterialType                   : mtart;
  // @Semantics.: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  StandardPrice                  : stprs;
  MRPType                        : dismm;
  BOMSpecialProcurementType      : sobsl;
  FollowUpProduct                : nfmat;
  MaterialIsConfigurable         : kzkfg;
  RecordCreationDate             : andat;
  CreatedByUser                  : annam;
  LastChangeDate                 : aedat;
  LastChangedByUser              : aenam;
  BillOfMaterialItemCategory     : postp;

  IsMaterialProvision            : beikz;
  IsBOMItemSparePart             : erskz;
  IsCAD                          : cadpo;
  PurchasingOrganization         : ekorg;
  PurchasingGroup                : ekgrp;
  Supplier                       : lifnr;
  // @Semantics.quantity.unitOfMeasure: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  MaterialComponentPrice         : preis;
  MaterialPriceUnitQty           : cs_e_peinh;
  Currency                       : waers;
  CostElement                    : sakto;
  DocNumber                      : doknr;
  DocumentType                   : dokar;
  DocumentPart                   : doktl_d;
  DocumentVersion                : dokvr;
  BOMItemDescription             : potx1;
  BOMItemText2                   : potx2;
  MaterialGroup                  : matkl;
  GoodsReceiptDurationInDays     : webaz;
  ValidityStartDate              : datuv;
  ValidityEndDate                : dtbis;
  IsPhantomItem                  : dumps;
  ProdOrderIssueLocation         : lgpro;
  IsSoftwareComponent            : cs_sfwind;
  BOMItemIsDiscontinued          : kzaus;
  ChgToEngChgNumber              : aenra;
  DeliveryTimeInDays             : lifzt;
  MaterialCompIsAlternativeItem  : alpos;
  AlternativeItemGroup           : cs_alpgr;
  NextLevelCompIsAlternativeItem : cs_e_xalst;
  IsClassificationRelevant       : cs_kzclb;
  IsAssembly                     : stkkz;
  @Semantics.quantity.unitOfMeasure: 'NextLevelBaseUnit'
  NextLevelBaseQuantity          : cs_e_xbmng;
  NextLevelBaseUnit              : cs_e_xbmen;
  NextLevelBillOfMaterialVariant : cs_e_xstal;
  NextLevelBOMCategory           : cs_e_xstty;
  BillOfMaterialCategory         : stlty;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'AssemblyBillOfMaterial'
  NextLevelBillOfMaterial        : cs_e_xstnr;
  AssemblyBillOfMaterial         : cs_e_xstnr_1;
  NextLevelBOMUsage              : cs_e_xstan;
  Class                          : klasse_d;
  ClassType                      : klassenart;
  BOMClassificationNumber        : cs_clszu;
  NextLevelIsConfigurableBOM     : cs_e_xkbau;
  MaterialIsCoProduct            : kzkup;
  BOMItemInternalChangeCount     : cim_count;
  NextLevelHasDateHistory        : cs_e_xhsdt;
  DeletionIndicator              : cs_e_lkzch;
  DiscontinuationGroup           : cs_nfeag;
  DistributionKeyCompConsumption : sa_verti;
  NextLevelItemIsDeleted         : cs_e_xlkzh;
  ExplosionType                  : cs_dispo;
  BOMItemHasFixedQuantity        : fmnge;
  FollowUpGroup                  : cs_nfgrp;
  MatlCompIsFollowUpMaterial     : cs_kznfp;
  FormulaKey                     : rform;
  GoodsRecipientName             : wempf;
  BOMHasHeaderInfoRecord         : hdnfo;
  IntraMaterial                  : intrm;
  ExternalIdentificationOfItem   : cs_itmid;
  LeadTimeOffset                 : nlfzt;
  LongTextLanguage               : ltxsp;
  MaterialPurityPercent          : csstr;
  MultipleSelectionAllowed       : clmult;
  @Semantics.quantity.unitOfMeasure: 'VariableSizeItemUnit'
  VariableSizeItemQuantity       : roanz;
  VariableSizeItemUnit           : roame;
  NmbrOfCompatibleUnitInstances  : /cum/cufactor;
  ObjectType                     : objty;
  ObjDpnAssignmentNumber         : knobj;
  OperationLeadTimeOffset        : cs_nlfzv;
  OperationLeadTimeOffsetUnit    : cs_nlfmv;
  ReinsurContrOrgUnit            : abteilung;
  AlternativeItemPriority        : cs_alprf;
  ProductionSupplyArea           : prvbe;
  @Semantics.quantity.unitOfMeasure: 'VariableSizeCompUnitOfMeasure'
  QuantityVariableSizeItem       : romen;
  VariableSizeCompUnitOfMeasure  : rokme;
  ReferencePoint                 : cn_rfpnt;
  RequiredComponent              : clobk;
  @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
  ScrapQuantityInBaseUoM         : cs_e_amglg;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size1                          : roms1;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size2                          : roms2;
  @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureForSize1To3'
  Size3                          : roms3;
  UnitOfMeasureForSize1To3       : romei;
  BOMItemSpecialProcurementType  : cs_sobsl;
  SpecialProcurementType         : cs_sobmx;
  StorageLocation                : lgort_d;
  AlternativeItemStrategy        : cs_alpst;
  IsSubItem                      : upskz;
  RowIndex                       : sytabix;
  NextLevelHasTechStatusHistory  : cs_e_xhssr;
  //    totals_record_id: sumkz;
  UnitOfMeasure                  : kmpme;
  UnloadingPointName             : ablad;
  UsageProbabilityPercent        : ewahr;
  NextLevelIsVariantDocStructure : cs_e_xvrst;
  BOMItemSign                    : cs_e_msign;
  BOMIsParamEffectivityRelevant  : cc_mteff;
  BOMItemAssyScrapPercent        : cs_e_ausss;
  BaseUnit                       : meins;
  ProdnOrderIsBatchRequired      : kzech;
  MaterialIsIntBatchManaged      : xchar;
  IsBulkMaterial                 : schgt;
  ComponentScrapPercent          : cs_e_ausch;
  CommodityCodeText              : stawn;
  ComponentScrapMaterialPercent  : cs_e_kausf;
  CompleteMaintStatus            : vpsta;
  MaterialVariantConfigNumber    : cs_e_mcuob;
  BOMIsConfiguredOnMultipleLvl   : nconf;
  CustomsPreference              : prefe;
  Denominator                    : umren;
  ProductDocumentVersion         : dzeivr;
  ProductDocumentNumber          : dzeinr;
  ExternalDocumentStatus         : stabk;
  ProductDocumentType            : dzeiar;
  InspLotDocumentationIsRequired : kzdkz;
  EffectiveOutDate               : ausdt;
  @EndUserText.label             : 'Engineering / Design'
  IsEngineeringRelevant          : sanko;
  BOMExceptionText               : excpt;
  IsFixedPriceCoProduct          : ck_fixprku;
  BOMItemIsHighLevelConfig       : sanvs;
  DependentRequirementsType      : sbdkz;
  ClfnObjectInternalID           : cuobj;
  IssuingPlant                   : pswrk;
  BillOfMaterialItemNodeNumber   : stlkn;
  LowLevelCode                   : disst;
  MaintenanceStatus              : pstat_d;
  //    @Semantics.quantity.unitOfMeasure: 'price_unit'
  @Semantics.amount.currencyCode : 'currency'
  MovingAveragePriceInCoCodeCrcy : verpr;
  IsNetScrap                     : netau;
  ProductDocumentPageCount       : blanz;
  Numerator                      : umrez;
  ObjectDescription              : ojtxb;
  OperationScrapPercent          : avoau;
  ProductDocumentPageFormat      : dzeifo;
  ProductDocumentPageNumber      : blatt;
  Plant                          : werks_d;
  BOMItemIsPlantMaintRelevant    : sanin;
  PlantSpecificMaterialStatus    : mmsta;
  ProductPriceControl            : vprsv;
  MatlCompIsProcuredExternally   : fbskz;
  BOMItemIsProductionRelevant    : sanfe;
  ProfitCenter                   : prctr;
  IsBOMRecursiveAllowed          : rekrs;
  BOMIsRecursive                 : rekri;
  BOMItemIsCostingRelevant       : ck_selkz;
  BOMItemIsSalesRelevant         : rvrel;
  RequirementSegment             : sgt_rcat;
  @API.element.releaseState      : #DEPRECATED
  @API.element.successor         : 'MaterialRevisionLevel'
  RevisionLevel                  : revlv;
  MaterialRevisionLevel          : cs_revlv;
  SerialNumberProfile            : serail;
  BOMItemSorter                  : sortp;
  CostingSpecialProcurementType  : ck_sobsl;
  DocumentStatusName             : dostx;
  StockSegment                   : sgt_scat;
  EffectivityParameterVariant    : techv;
  ProductUnitOfMeasureUsage      : kzwso;
  PlantSpecificStatusValidFrmDte : mmstd;
  CrossPlantStatusValidFromDte   : mstde;
  ValuationCategory              : bwtty_d;
  CrossPlantMaterialStatus       : mstae;
  BillOfMaterialVersion          : cs_versn;
  BOMVersionStatus               : cs_versnst;
  BillOfMaterialItemIndex        : sytabix;
  ProcurementType                : beskz;
  VisualSceneIdentifier          : sceneid;
  BOMIsVisualEnabled             : visenable_flg;
  VislIntegAccessTokenValue      : visl_token;
  VislDocumentURL                : esh_e_fl_url_bin_content;
}
```
