  import fs from 'fs'
  
  /**
   * Check whether a signature file exists for a boardMemberId.
   * @function
   * @param { string } fileName
   */
  export default function(fileName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        resolve(fs.existsSync(fileName))
      } catch (err) {
        reject(
          `${fileName} [28]: ${err}`
        )
      }
    })
  }