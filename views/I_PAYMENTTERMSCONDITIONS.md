---
name: I_PAYMENTTERMSCONDITIONS
description: Paymenttermsconditions
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - pricing-condition
  - payment
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSCONDITIONS

**Paymenttermsconditions**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `farp_dzterm preserving type )` | `cast( zterm` |
| `dztagg_052  preserving type )` | `cast( ztagg` |
| `koart_z preserving type )` | `cast( koart` |
| `dzfael preserving type )` | `cast( zfael` |
| `dzmona preserving type )` | `cast( zmona` |
| `farp_dzlspr preserving type )` | `cast( zschf` |
| `PaymentBlockIsTransferred` | `xchpb` |
| `farp_schzw_bseg preserving type )` | `cast( zlsch` |
| `PaymentMethodIsTransferred` | `xchpm` |
| `PaymentIsInstallment` | `xsplt` |
| `RecrrgEntPaytTrmsIsFrmAcctMstr` | `xscrc` |
| `case when zdart = ''` | `case when zdart = ''` |
| `then 'X'` | `then 'X'` |
| `else ''` | `else ''` |
| `BslnDteHasNoDfltProposal` | `end` |
| `case when zdart = 'B'` | `case when zdart = 'B'` |
| `then 'X'` | `then 'X'` |
| `else ''` | `else ''` |
| `DocDteIsBslnDteProposal` | `end` |
| `case when zdart = 'D'` | `case when zdart = 'D'` |
| `then 'X'` | `then 'X'` |
| `else ''` | `else ''` |
| `PostgDteIsBslnDteProposal` | `end` |
| `case when zdart = 'C'` | `case when zdart = 'C'` |
| `then 'X'` | `then 'X'` |
| `else ''` | `else ''` |
| `EntrDteIsBslnDteProposal` | `end` |
| `PaymentTermsIsHidden` | `f_obsolete` |
| `abap.dec(3,0) )` | `cast( cast( ztag1` |
| `abap.dec(3,0) )` | `cast( cast( ztag2` |
| `abap.dec(3,0) )` | `cast( cast( ztag3` |
| `dzbd1p_farp preserving type )` | `cast( zprz1` |
| `dzbd2p_farp preserving type )` | `cast( zprz2` |
| `abap.dec(2,0) )` | `cast( zstg1` |
| `abap.dec(2,0) )` | `cast( zstg2` |
| `abap.dec(2,0) )` | `cast( zstg3` |
| `abap.dec(2,0) )` | `cast( zsmn1` |
| `abap.dec(2,0) )` | `cast( zsmn2` |
| `abap.dec(2,0) )` | `cast( zsmn3` |
| `_PaymentTerms` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentTermsConditionsText` | [0..*] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IFIPAYTTRMSCNDNS',
    compiler.compareFilter:true,
    preserveKey:true
    }
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@EndUserText.label: 'Payment Terms Conditions'
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    modelingPattern:  #ANALYTICAL_DIMENSION,
    representativeKey: 'PaymentTermsValidityMonthDay',
    sapObjectNodeType.name: 'PaymentTermsConditions',
    supportedCapabilities: [
                            #ANALYTICAL_DIMENSION,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE
                            ],
    usageType.dataClass: #CUSTOMIZING,
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #M
    }
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC
    }
define view I_PaymentTermsConditions
  as select from P_PaymentTermsConditions2
  association [0..*] to I_PaymentTermsConditionsText as _Text         on  $projection.PaymentTerms                 = _Text.PaymentTerms
                                                                      and $projection.PaymentTermsValidityMonthDay = _Text.PaymentTermsValidityMonthDay
  association [1..1] to I_PaymentTerms               as _PaymentTerms on  $projection.PaymentTerms                 = _PaymentTerms.PaymentTerms                                                                

{
      @ObjectModel.foreignKey.association: '_PaymentTerms'
  key cast( zterm as farp_dzterm preserving type )                          as PaymentTerms,
      @ObjectModel.text.association: '_Text'
  key cast( ztagg as dztagg_052  preserving type )                          as PaymentTermsValidityMonthDay,

      // do not confuse with FinancialAccountType! this property/code has other code values
      // - D     for customers
      // - K     for suppliers/vendors
      // - SPACE for both customers and suppliers/vendors
      cast( koart as koart_z preserving type )                              as PaymentTermsFinAccountType,
      cast( zfael as dzfael preserving type )                               as BslnDteCalcDayOfMnth,
      cast( zmona as dzmona preserving type )                               as BslnDteCalcAddlMnths,
      cast( zschf as farp_dzlspr preserving type )                          as PaymentBlockingReason,
      xchpb                                                                 as PaymentBlockIsTransferred,
      cast( zlsch as farp_schzw_bseg preserving type )                      as PaymentMethod,
      xchpm                                                                 as PaymentMethodIsTransferred,
      xsplt                                                                 as PaymentIsInstallment,
      xscrc                                                                 as RecrrgEntPaytTrmsIsFrmAcctMstr,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'No Default for Baseline Date Proposal'
      case when zdart = ''
               then 'X'
               else ''
      end as BslnDteHasNoDfltProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Document Date is Baseline Date Proposal'
      case when zdart = 'B'
           then 'X'
           else ''
      end as DocDteIsBslnDteProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Posting Date is Baseline Date Proposal'
      case when zdart = 'D'
           then 'X'
           else ''
      end as PostgDteIsBslnDteProposal,
      
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Entry Date is Baseline Date Proposal'
      case when zdart = 'C'
           then 'X'
           else ''
      end as EntrDteIsBslnDteProposal,
      
      @EndUserText.label: 'Payment Terms is Hidden in Value Help'
      f_obsolete                                                            as PaymentTermsIsHidden,
      
      cast( cast( ztag1 as abap.dec(3,0) ) as farp_dzbd1t preserving type ) as CashDiscount1Days,
      cast( cast( ztag2 as abap.dec(3,0) ) as farp_dzbd2t preserving type ) as CashDiscount2Days,
      cast( cast( ztag3 as abap.dec(3,0) ) as farp_dzbd3t preserving type ) as NetPaymentDays,
      
      cast( zprz1 as dzbd1p_farp preserving type )                          as CashDiscount1Percent,
      cast( zprz2 as dzbd2p_farp preserving type )                          as CashDiscount2Percent,
      
      cast( zstg1 as abap.dec(2,0) )                                        as CashDiscount1DayOfMonth,
      cast( zstg2 as abap.dec(2,0) )                                        as CashDiscount2DayOfMonth,
      cast( zstg3 as abap.dec(2,0) )                                        as CashDiscount3DayOfMonth,
      
      cast( zsmn1 as abap.dec(2,0) )                                        as CashDiscount1AdditionalMonths,
      cast( zsmn2 as abap.dec(2,0) )                                        as CashDiscount2AdditionalMonths,
      cast( zsmn3 as abap.dec(2,0) )                                        as CashDiscount3AdditionalMonths,



      _PaymentTerms,
      _Text
}
```
