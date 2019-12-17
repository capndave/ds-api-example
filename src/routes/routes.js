const router = require('express').Router()
// const sqlServer = require('../db/sqlServer')
const logger = require('../logger/logger')

/* From Admin App */
// router.get('/appraisers', sqlServer.sp('ma_get_appraisers')) // Hit by admin app
router.get('/', (request, response) => {
  response.status(200).send('Hello World')
})
router.get('/appraisers', (req, res) => {
//   postgres.get
//     .appraisers()
//     .then(data => {
//       sendResponse.success(res, data)
//     })
//     .catch(e => {
//       logger.error(e)
//       sendResponse.error(res, e)
//     })
})
// router.get('/panels/admin', sqlServer.sp('fa_get_panels_admin'))
// router.get('/panel/:panel_num', sqlServer.spReqBody('fa_get_single_panel'))
// router.get(
//   '/properties/:prop_id',
//   sqlServer.spReqBody('fa_get_single_property')
// )
// router.get('/queue/admin', sqlServer.sp('fa_get_queue_admin'))
// router.get('/queue/waitroom', sqlServer.sp('fa_get_queue_waitroom'))
// // router.get('/queue', sqlServer.sp('get_queue'))

// /* From Signin App */
// router.get('/dockets/:arbq_id', sqlServer.getDocket('ma_get_docket'))
// // router.get('/source/:arbq_id', sqlServer.spReqBody('get_source_data'))

// /* For Panels App */
// // router.get('/formal/panels/admin', sqlServer.sp('fa_get_panels_admin'))
// router.get('/panel/:panel_num', sqlServer.spReqBody('fa_get_single_panel'))

module.exports = router
