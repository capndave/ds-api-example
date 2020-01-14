import { Request, Response} from 'express'
import { IPropValYear } from '../interfaces'
import getProtestYearsFromDatabase from '../services/protest/getProtestYearsFromDatabase'
import getProtestDataFromDatabase from '../services/protest/getProtestDataFromDatabase'
import postProtestDataToDatabase from '../services/protest/postProtestDataToDatabase'
import logger from '../logger/logger'

 /**
  * Extracts the prop id and connection pool from the request object,
  * gets data from the getProtestYearsFromDatabase service,
  * and sends data with the response object
  * @async
  * @function
  * @param { Request } req
  * @param { Response } res
  * @remarks tested
  */
export async function getProtestYears(req: Request, res: Response) {
  try {
    const propId: number = parseInt(req.params.propId)
    const pool: any = req.app.locals.pool
    const recordset: IPropValYear[] = await getProtestYearsFromDatabase(propId, pool)
    res.send(recordset).status(200)
  } catch (e) {
    logger.error(e)
  }
}

 /**
  * Extracts the prop id, year and connection pool from the request object,
  * gets data from the getProtestDataFromDatabase service,
  * and sends data with the response object
  * @async
  * @function
  * @param { Request } req
  * @param { Response } res
  * 
  */
export async function getProtestData(req: Request, res: Response) {
  try {
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.params.year)
    const pool: any = req.app.locals.pool
    const recordset: any = await getProtestDataFromDatabase(propId, year, pool)
    res.send(recordset).status(200)
  } catch (e) {
    logger.error(e)
  }
}
 
/**
  * Extracts the prop id, year and connection pool from the request object,
  * and posts data to the postProtestDataToDatabase service
  * @async
  * @function
  * @param { Request } req
  * @param { Response } res
  */
exports.postProtestData = async function (req: Request, res: Response) {
  try {
    const pool: any = req.app.locals.pool
    const recordset: any = await postProtestDataToDatabase(req.body, pool)
    res.status(200)
  } catch (e) {
    logger.error(e)
  }


}