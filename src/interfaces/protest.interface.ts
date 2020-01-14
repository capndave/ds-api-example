export interface IPropValYear {
    prop_val_yr: number
}

export interface IProtest {
    prop_id: number 
    prop_val_yr: number
    prot_taxes_paid: boolean
    late_protest_approved: boolean
    late_protest_denial_reason: string
    withdrawn: boolean
    dismissed: boolean
    prot_affidavit_testimony_recieved: boolean
    moved_to_informal?: boolean
    phone_hearing: boolean
    code_25_25_c: boolean
    code_25_25_d: boolean
    code_41_411: boolean
    ag_hearing: boolean
    exemption_hearing: boolean
    value_hearing: boolean
    market_value: number
    equity_value: number
    protest_status: string
}