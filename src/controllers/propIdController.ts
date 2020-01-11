import { Request, Response } from 'express'
import { ConnectionPool } from 'mssql'
import { IPropId } from '../interfaces/'
import getPropIdsInPanelFromDatabase from '../services/propId/getPropIdsInPanelFromDatabase'

 /**
  * Extracts the panel number and connection pool from the request object,
  * gets data from the getPropIdsInPanelFromDatabase service,
  * and sends data with the response object
  * @async
  * @function getPropIdsInPanel
  * @param { Request } req
  * @param { Response } res
  */
export async function getPropIdsInPanel(req: Request, res: Response): Promise<void> {

    const panel: number = parseInt(req.params.panel)
    const pool: ConnectionPool = req.app.locals.pool

    const propIds: IPropId[] = await getPropIdsInPanelFromDatabase(panel, pool)
    res.send(propIds).status(200)

}