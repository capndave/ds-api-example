import fs from 'fs'
import path from 'path'
import logger from '../logger/logger'
import { Request, Response } from 'express'

export default function(req: Request, res: Response): any {
  const pathToHtml = path.join(__dirname, '../pages/root.html')
  fs.readFile(pathToHtml, (err: Error, data: any) => {
    if (err) logger.error(`Error reading html file in rootController[8]: ${err}`)
    res.write(data)
    res.end()
  })
}