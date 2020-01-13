export interface IBoardMember {
  board_member_id: number
  full_name: string
}

export interface FullNameIdAndSignature {
  board_member_id: number
  full_name: string
  signature: Buffer
}
