export {} // Tell typescript to recognize imported modules as in this scope
const logger = require('../../logger/logger')
import BoardMember from '../../models/board/boardMember.model'

/**
 * Merges name and signature data into an object
 * @function mergeBoardMemberIdsAndSignaturesIntoObject
 * @param { BoardMember[] } boardMembers
 * @return { BoardMember[] }
 */
export default function mergeBoardMemberIdsAndSignaturesIntoObject(
    boardMembers: BoardMember[],
    signatureArray: Buffer[]
): BoardMember[] {
  boardMembers.forEach((boardMember, i) => {
    boardMember.signature = signatureArray[i]
  })
  return boardMembers
}
