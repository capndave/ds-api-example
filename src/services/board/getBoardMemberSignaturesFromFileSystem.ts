export {} // Tell typescript to recognize imported modules as in this scope
const logger = require('../../logger/logger')
const fs = require('fs')
const path = require('path')
import BoardMember from '../../models/boardMember.model'
import getSignatureFileName from './getSignatureFileName'

/**
 * A module for fetching board member signatures from the file system.
 * @module getBoardMemberSignaturesFromFileSystem
 */

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
        const fileName = getSignatureFileName(boardMemberId)
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