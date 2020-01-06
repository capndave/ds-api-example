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
    return path.join(__dirname, '..', 'signatures', `signature_${boardMemberId}.jpg`)
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
      } catch(err) {
        reject(`Error checking existence of filename in ${fileName} [28]: ${err}`)
      }
    })
  },

 /**
  * Check whether a signature file exists for a boardMemberId.
  * @async
  * @function
  */
  save: async function(panel: number, pool: any): Promise<[{ full_name: string }]> {
    try {
      return await pool
        .request()
        .input('panel', sql.TinyInt, panel)
        .execute('ma_get_board_members_for_panel')
    } catch (error) {
      logger.error(
        `Error fetching data from database in getBoardMembersFromDatabase [44]: ${error}`
      )
    }
  },
   
  /**
   * Save a signature file if it does not already exist
   */
  saveIfFileDoesNotExist: async function(boardMember: BoardMember) {
    
    if (await this.fileExists(boardMember)) {
      return 'File already exists'
    } else {
      await this.save(boardMember)
      return 'File saved successfully'
    }  

  }

}