const getPropIdsInPanelFromDatabase = require('../services/getPropIdsInPanelFromDatabase')

/**
 * A module for working with prop id data.
 * @module propIdControllers
 */

 /**
  * Extracts the panel number and connection pool from the request object,
  * gets data from the getPropIdsInPanelFromDatabase service,
  * and sends data with the response object
  * @async
  * @method
  * @param { Request } req
  * @param { Response } res
  */
exports.getPropIdsInPanel = async function (req: Request, res: Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await getPropIdsInPanelFromDatabase({panel, pool})
    res.send(data).status(200)

}