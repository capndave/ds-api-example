export interface IPropValYear {
    prop_val_yr: number
}

export interface IProtest {
    affidavit: boolean
    ag_hearing: boolean
    code_25_25_c: boolean
    code_25_25_d: boolean
    code_41_411: boolean
    dismissed: boolean
    equity_value: number
    exemption_hearing: boolean
    late_protest_approved: boolean
    late_protest_denial_reason: string
    market_value: number
    moved_to_informal?: boolean
    phone_hearing: boolean
    prop_id: number 
    prop_val_yr: number
    prot_taxes_paid: boolean
    protest_status: string
    value_hearing: boolean
    withdrawn: boolean

    bpp_recommended_market_value: number
    bpp_recommended_equal_appraised_value: number
    assessed_recommended_market_value: number
    assessed_recommended_equal_appraised_value: number
    market_recommended_market_value: number
    market_recommended_equal_appraised_value: number
    case_id?: number
    owner?: string
    legal_desc?: string
    description?: string
    situs?: string
    agent_id?: number
    agent_name?: number
    agent_authority_to_protest?: boolean
    agent_authority_to_resolve?: boolean
    date?: string
}