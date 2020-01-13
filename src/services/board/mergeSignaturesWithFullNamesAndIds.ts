import logger from '../../logger/logger'
import { FullNameIdAndSignature } from '../../models'
import { IFullNameAndId } from '../../interfaces'

/**
 * Merges name and signature data into an object
 * @function mergeSignaturesWithFullNamesAndIds
 * @param { number[] } ids
 * @param { Buffer[] } signatures
 * @return { FullNameIdAndSignature[] }
 * @remarks tested
 */
export default function mergeSignaturesWithFullNamesAndIds(
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
