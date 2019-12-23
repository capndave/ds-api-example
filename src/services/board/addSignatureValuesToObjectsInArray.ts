export {} // Tell typescript to recognize imported modules as in this scope
const logger = require('../../logger/logger')
import BoardMember from '../../models/boardMember.model'

/**
 * Merges name and signature data into an object
 * @function addSignatureValuesToObjectsInArray
 * @param { BoardMember[] } boardMembers
 * @return { BoardMember[] }
 */
export function addSignatureValuesToObjectsInArray(
    boardMembers: BoardMember[],
    signatureArray: Buffer[]
): BoardMember[] {
  boardMembers.forEach((boardMember, i) => {
    boardMember.signature = signatureArray[i]
  })
  return boardMembers
}
