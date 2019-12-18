exports.getPropIdsInPanel = function (req, res) {
    const panel = req.params.panel
    res.status(200).send(panel)
}