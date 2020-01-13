export class Protest {

    propId: number
    year: number
    withdrawn: boolean
    dismissed: boolean
    movedToInformal: boolean
    hearingMethod: string       // By phone, not present, or in person  
    affidavitHearing: boolean   // They have an affidavit
    exemptionHearing: boolean   // The hearing is about an exemption
    agExemptionHearing: boolean
    dvExemptionHearing: boolean
    homesteadExemptionHearing: boolean
    agExemptionApproved: boolean
    dvExemptionApproved: boolean
    homesteadExemptionApproved: boolean
    valueHearing: boolean
    marketValue: number
    ordSelected: string
    equityHearing: boolean
    marketHearing: boolean
    hearingType: string         // 25.25c, etc
    paidTaxes: boolean
    lateProtestApproved: boolean
    denialReason: string        // Comment why denial happened
    
    constructor(input?: any) {
        this.propId = input.propId
        this.year = input.year
        this.dismissed = input.dismissed
        this.movedToInformal = input.movedToInformal
        this.hearingMethod = input.hearingMethod
        this.affidavitHearing = input.affidavitHearing
        this.exemptionHearing = input.exemptionHearing
        this.agExemptionHearing = input.asExemptionHearing
        this.dvExemptionHearing = input.dvExemptionHearing
        this.homesteadExemptionHearing = input.homesteadExemptionHearing
        this.agExemptionApproved = input.agExemptionApproved
        this.dvExemptionApproved = input.dvExemptionApproved
        this.homesteadExemptionApproved = input.homesteadExemptionApproved
        this.valueHearing = input.valueHearing
        this.marketValue = input.marketValue
        this.ordSelected = input.ordSelected
        this.equityHearing = input.equityHearing
        this.marketHearing = input.marketHearing
        this.hearingType = input.hearingType
        this.paidTaxes = input.paidTaxes
        this.lateProtestApproved = input.lateProtestApproved
        this.denialReason = input.denialReason
    }
}