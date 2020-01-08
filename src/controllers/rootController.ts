
import fs from 'fs'
import path from 'path'
import logger from '../logger/logger'

export default function(req: any, res: any) {
  const pathToHtml = path.join(__dirname, '../pages/root.html')
  fs.readFile(pathToHtml, (err: string, data: string) => {
    if (err) logger.error(`Error reading html file in rootController[8]: ${err}`)
    res.write(data)
    res.end()
  })
}