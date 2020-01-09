import getPropIdsInPanelFromDatabase from '../services/board/getPropIdsInPanelFromDatabase'
import PropId  from '../interfaces/propId.interface'
import * as express from 'express'

 /**
  * Extracts the panel number and connection pool from the request object,
  * gets data from the getPropIdsInPanelFromDatabase service,
  * and sends data with the response object
  * @async
  * @function getPropIdsInPanel
  * @param { Request } req
  * @param { Response } res
  */
export default async function getPropIdsInPanel(req: express.Request, res: express.Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: any = req.app.locals.pool

    const propIds: PropId[] = await getPropIdsInPanelFromDatabase(panel, pool)
    res.send(propIds).status(200)

}