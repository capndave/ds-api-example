import logger from '../../logger/logger'
import fs from 'fs'
import getSignatureFileName from './getSignatureFileName'

/**
 * A module for fetching board member signatures from the file system.
 * @module getSignatureFiles
 */

/**
 * Reads a file (representing a signature) from the file system.
 * @method getSignatureFile
 * @param { number } fileId
 * @returns { Promise<Buffer> }
 */
export function getSignatureFile(fileId: number): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const fileName = getSignatureFileName(fileId)

    fs.readFile(fileName, (error: Error, data: Buffer) => {
      if (error) {
        reject(
          `getSignatureFiles [23]: ${error}`
        )
      }
      resolve(data)
    })
  })
}

/**
 * Recieves an array of fileIds and
 * calls getSignatureFile for all of them
 * @alias getSignatureFiles
 * @param { number[] } fileIds
 * @returns { Promise.<Buffer[]> }
 */
export default async function getSignatureFiles(
  fileIds: number[]
): Promise<Buffer[]> {
  try {
    return await Promise.all(
      fileIds.map(fileId => {
        return getSignatureFile(fileId)
      })
    )
  } catch (error) {
    logger.error(error)
  }
}
