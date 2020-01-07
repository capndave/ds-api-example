const logger = require('../../logger/logger')
const sql = require('mssql')
const fs = require('fs')
const path = require('path')
import { BoardMember } from '../../models/board/boardMember.model'
const fileName = path.basename(__filename)

module.exports = {
  /**
   * Returns a file path from a give Board Member ID
   * @param { number } boardMemberId
   */
  filePathFromId: function(boardMemberId: number) {
    return path.join(
      __dirname,
      '..',
      'signatures',
      `signature_${boardMemberId}.jpg`
    )
  },

  /**
   * Check whether a signature file exists for a boardMemberId.
   * @async
   * @function
   * @param { string } fileName
   */
  fileExists: function(fileName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(fs.existsSync(fileName))
      } catch (err) {
        reject(
          `Error checking existence of filename in ${fileName} [28]: ${err}`
        )
      }
    })
  },

  /**
   * Check whether a signature file exists for a boardMemberId.
   * @async
   * @function
   */
  save: function(fileName: string, signature: any): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, signature, (err: Error) => {
        if (err) {
          reject(`Unable to write file at ${fileName} [41]: ${err}`)
        }
        resolve(`File written successfully to ${fileName}`)
      })
    })
  },

  /**
   * Save a signature file if it does not already exist
   */
  saveIfFileDoesNotExist: async function(
    boardMemberId: string,
    signature: any
  ) {
    const filePath: string = this.filePathFromId(boardMemberId)
    if (await this.fileExists(filePath)) {
      return 'File already exists'
    } else {
      await this.save(filePath, signature)
      return 'File saved successfully'
    }
  }
}
