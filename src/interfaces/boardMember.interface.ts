export interface IFullNameAndId {
  board_member_id: number
  full_name: string
}

export interface IFullNameIdAndSignature extends IFullNameAndId {
  signature: Buffer
}
