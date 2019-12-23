export {} // Lets Typescript know that required modules are in local scope

const fs = require('fs')
const path = require('path')
const logger = require('../logger/logger')

export default function(req: any, res: any) {
  const pathToHtml = path.join(__dirname, '../pages/root.html')
  fs.readFile(pathToHtml, (err: string, data: string) => {
    if (err) logger.error(`Error reading html file in rootController[8]: ${err}`)
    res.write(data)
    res.end()
  })
}