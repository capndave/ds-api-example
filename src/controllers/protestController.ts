import getProtestYearsFromDatabase from '../services/protest/getProtestYearsFromDatabase'
import getProtestDataFromDatabase from '../services/protest/getProtestDataFromDatabase'
import * as express from 'express'

/**
 * A module for working with prop id data.
 * @module protestControllers
 */

 /**
  * Extracts the prop id and connection pool from the request object,
  * gets data from the getProtestYearsFromDatabase service,
  * and sends data with the response object
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */
export async function getProtestYears(req: express.Request, res: express.Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: any = req.app.locals.pool

    const { recordset }: number[] = await getProtestYearsFromDatabase(panel, pool)
    res.send(recordset).status(200)

}

 /**
  * Extracts the prop id, year and connection pool from the request object,
  * gets data from the getProtestDataFromDatabase service,
  * and sends data with the response object
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */

export async function getProtestData(req: express.Request, res: express.Response) {
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.query.year)
    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await getProtestDataFromDatabase({panel, year, pool})
    res.send(data).status(200)

}
 
/**
  * Extracts the prop id, year and connection pool from the request object,
  * and posts data to the postProtestDataToDatabase service
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */
exports.postProtestData = async function (req: express.Request, res: express.Response) {

    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await postProtestDataToDatabase(req.body, pool)
    res.send(data).status(200)

}