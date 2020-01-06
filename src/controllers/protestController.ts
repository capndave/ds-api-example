const getProtestYearsFromDatabase = require('../services/getProtestYearsFromDatabase')

/**
 * A module for working with prop id data.
 * @module panelControllers
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