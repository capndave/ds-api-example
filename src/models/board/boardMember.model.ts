export default class BoardMember {
    board_member_id: number | undefined
    first_name: string
    last_name: string
    full_name: string
    signature: Buffer | undefined

    constructor(input?: any) {
        this.board_member_id = input.board_member_id
        this.first_name = input.first_name
        this.last_name = input.last_name
        this.full_name = input.full_name
        this.signature = input.signature
    }
}

export class FullNameAndId {
    board_member_id: number
    full_name: string

    constructor(input?: any) {
      this.board_member_id = this.board_member_id
      this.full_name = this.full_name
    }
}

export class FullNameIdAndSignature {
    board_member_id: number
    full_name: string
    signature: Buffer

    constructor(input?: any) {
      this.board_member_id = input.board_member_id
      this.full_name = input.full_name
      this.signature = input.signature
    }
}