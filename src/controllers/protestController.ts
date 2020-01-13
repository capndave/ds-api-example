import getProtestYearsFromDatabase from '../services/protest/getProtestYearsFromDatabase'
import getProtestDataFromDatabase from '../services/protest/getProtestDataFromDatabase'
import { Request, Response} from 'express'

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
export async function getProtestYears(req: Request, res: Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: any = req.app.locals.pool

    const { recordset }: any = await getProtestYearsFromDatabase(panel, pool)
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
// TODO: Finish this!
// export async function getProtestData(req: Request, res: Response) {
//     const propId: number = parseInt(req.params.propId)
//     const year: number = parseInt(req.query.year)
//     const pool: any = req.app.locals.pool

//     const { recordset }: any = await getProtestDataFromDatabase({panel, year, pool})
//     res.send(recordset).status(200)

// }
 
/**
  * Extracts the prop id, year and connection pool from the request object,
  * and posts data to the postProtestDataToDatabase service
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */
 // TODO: Finish this!
// exports.postProtestData = async function (req: Request, res: Response) {

//     const pool: any = req.app.locals.pool

//     const { recordset }: any = await postProtestDataToDatabase(req.body, pool)
//     res.send(recordset).status(200)

// }