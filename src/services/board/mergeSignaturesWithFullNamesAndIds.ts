import logger from '../../logger/logger'
import { FullNameIdAndSignature } from '../../models'
import { IFullNameAndId } from '../../interfaces'

/**
 * Merges name and signature data into an object
 * @function mergeBoardMemberIdsAndSignaturesIntoObject
 * @param { number[] } ids
 * @param { Buffer[] } signatures
 * @return { BoardMember[] }
 */
export default function mergeSignaturesIntoBoardMembersArr(
  fullNamesAndIds: IFullNameAndId[],
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
