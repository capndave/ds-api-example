const getPropIdsInPanelFromDatabase = require('../services/getPropIdsInPanelFromDatabase')

exports.getPropIdsInPanel = async function (req: Request, res: Response) {

    const panel: number = parseInt(req.params.panel)
    const pool: any = req.app.locals.pool

    const {recordset: data}: number[] = await getPropIdsInPanelFromDatabase({panel}, pool)
    res.send(data).status(200)
}