export {} // Tell typescript to recognize imported modules as in this scope
const logger = require('../../logger/logger')
import { FullNameAndId, FullNameIdAndSignature } from '../../models/board/boardMember.model'

/**
 * Merges name and signature data into an object
 * @function mergeBoardMemberIdsAndSignaturesIntoObject
 * @param { number[] } ids
 * @param { Buffer[] } signatures
 * @return { BoardMember[] }
 */
export default function mergeSignaturesIntoBoardMembersArr(
  fullNamesAndIds: FullNameAndId[],
  signatures: Buffer[]
): FullNameIdAndSignature[] {
  let boardMembers = []

  for (let i = 0; i < fullNamesAndIds.length; i++) {
    boardMembers.push(
      new FullNameIdAndSignature({
        id: fullNamesAndIds[i].board_member_id,
        full_name: fullNamesAndIds[i].full_name,
        signature: signatures[i]
      })
    )
  }

  return boardMembers
}
