import { writeFile } from 'fs'
import path from 'path'
import getSignatureFileName from './getSignatureFileName'

const fileName = path.basename(__filename)

/**
 * Check whether a signature file exists for a boardMemberId.
 * @function saveSignatureFile
 * @returns { Promise }
 */
export default function saveSignatureFile(
  boardMemberId: number,
  signature: any
): Promise<string> {
  const fileName: string = getSignatureFileName(boardMemberId)

  return new Promise((resolve, reject) => {
    writeFile(fileName, signature, (err: Error) => {
      if (err) {
        reject(`Unable to write file at ${fileName} [41]: ${err}`)
      }
      resolve(`File written successfully to ${fileName}`)
    })
  })
}
