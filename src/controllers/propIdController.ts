import { Request, Response } from 'express'
import { ConnectionPool } from 'mssql'
import getPropIdsInPanelFromDatabase from '../services/board/getPropIdsInPanelFromDatabase'
import PropId  from '../interfaces/propId.interface'

 /**
  * Extracts the panel number and connection pool from the request object,
  * gets data from the getPropIdsInPanelFromDatabase service,
  * and sends data with the response object
  * @async
  * @function getPropIdsInPanel
  * @param { Request } req
  * @param { Response } res
  */
export async function getPropIdsInPanel(req: Request, res: Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: ConnectionPool = req.app.locals.pool

    const propIds: PropId[] = await getPropIdsInPanelFromDatabase(panel, pool)
    res.send(propIds).status(200)

}