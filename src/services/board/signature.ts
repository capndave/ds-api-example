const logger = require('../../logger/logger')
const sql = require('mssql')
const fs = require('fs')
const path = require('path')
import { BoardMember } from '../../models/board/boardMember.model'
import getSignatureFileName from './getSignatureFileName'
const fileName = path.basename(__filename)


const Signature = {

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
   * @method saveFile
   */
  saveFile: function(boardMemberId: number, signature: any): Promise<string> {

    const fileName: string = getSignatureFileName(boardMemberId)

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

module.exports = Signature