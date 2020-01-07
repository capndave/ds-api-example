  import fs from 'fs'
  
  /**
   * Check whether a signature file exists for a boardMemberId.
   * @async
   * @function
   * @param { string } fileName
   */
  export default function(fileName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(fs.existsSync(fileName))
      } catch (err) {
        reject(
          `Error checking existence of filename in ${fileName} [28]: ${err}`
        )
      }
    })
  }