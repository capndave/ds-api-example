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
  saveFile: function(boardMemberId: number, signature: any): Promise<string> {

    const filePath: string = this.filePathFromId(boardMemberId)

    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, signature, (err: Error) => {
        if (err) {
          reject(`Unable to write file at ${fileName} [41]: ${err}`)
        }
        resolve(`File written successfully to ${fileName}`)
      })
    })
  }

}
