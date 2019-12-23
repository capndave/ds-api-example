const logger = require('../logger/logger'
const fs = require('fs')
const path = require('path')

// Declare Promise for typescript
declare var Promise: PromiseConstructorLike

/**
 * A module for fetching board member signatures from the file system.
 * @module getBoardMemberSignaturesFromFileSystem
 */

/**
 * Returns the path name of a file in the signatures directory 
 * @function getFileName
 * @param { number } signatureId
 * @returns { string } filePath
 */
function getFileName(fileId: number): string {
  const signatureDirectory: string = path.join(__dirname, `../../../signatures`)
  const fileName: string = `signature_${fileId}.jpg`
  return path.join(signatureDirectory, fileName)
}

/**
 * Reads a file (representing a signature) from the file system.
 * @method getBoardMemberSignatureFromFileSystem
 * @param { number } boardMemberid
 * @returns { Promise<Buffer> }
 */
function getBoardMemberSignatureFromFileSystem(boardMemberId: number)
    : Promise<Buffer>
{
    return new Promise ((resolve, reject) => {
        const fileName = getFileName(boardMemberId)
        fs.readFile(fileName, (error: Error, data: Buffer) => {
            if (error) {
                reject(`Error reading file in getBoardMemberSignaturesFromFileSystem: ${error}`)
            } 
            resolve(data)
        })
    })
}

/**
 * Recieves an array of fileIds and
 * calls getBoardMemberSignatureFromFile for all of them
 * @alias:module getBoardMemberSignaturesFromFileSystem 
 * @param fileIds
 * @returns { Promise.<Buffer[]> }
 */
const getBoardMemberSignaturesFromFileSystem =  async function(
    fileIds: number[]
): Promise<Buffer[]> {
    console.log(fileIds)
    try {
        return await Promise.all(
            fileIds.map(fileId => {
                return getBoardMemberSignatureFromFileSystem(fileId)
            })
        )
    } catch(error) {
        logger.error(error)
    }
}

module.exports = {
    getBoardMemberSignatureFromFileSystem,
    getBoardMemberSignaturesFromFileSystem
}