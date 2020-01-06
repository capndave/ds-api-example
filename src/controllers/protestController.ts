const getProtestYearsFromDatabase = require('../services/getProtestYearsFromDatabase')
const getProtestDataFromDatabase = require('../services/getProtestDataFromDatabase')

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
exports.getProtestYears = async function (req: Request, res: Response) {

    const propId: number = parseInt(req.params.propId)
    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await getProtestYearsFromDatabase({panel, pool})
    res.send(data).status(200)

}

 /**
  * Extracts the prop id and connection pool from the request object,
  * gets data from the getProtestYearsFromDatabase service,
  * and sends data with the response object
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */
exports.getProtestData

// TODO: Extract prop id AND YEAR from request query string
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.query.year)
    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await getProtestDataFromDatabase({panel, pool})
    res.send(data).status(200)

}