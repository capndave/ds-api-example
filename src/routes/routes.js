const router = require('express').Router()
const logger = require('../logger/logger')
// TODO: add controllers for each route
const rootController = require('../controllers/rootController')
const propIdController = require('../controllers/propIdController')

/* GET */
router.get('/', rootController)

router.get('/propIds/:panel', propIdController.getPropIdsInPanel)

router.get('/getBoardMembers', (req, res) => {
  controllers.getBoardMembers
  response.status(200).send('Hello World')
})

router.get('/getAffidavitEntered', (req, res) => {
  controllers.getAffidavitEntered
  response.status(200).send('Hello World')
})

router.get('/getProtestYears', (req, res) => {
  controllers.getAffidavitEntered
  response.status(200).send('Hello World')
})

router.get('/getProtestData', (req, res) => {
  controllers.getAffidavitEntered
 response.status(200).send('Hello World')
})

router.get('/getAppraisers', (req, res) => {
    controllers.getAppraisers
  response.status(200).send('Hello World')
})

/* POST */

router.post('/postBoardMemberNamesAndSignatures', (req, res) => {
    controllers.postBoardMemberNamesAndSignatures
  response.status(200).send('Hello World')
})

router.post('/postFormData', (req, res) => {
    controllers.postFormData
  response.status(200).send('Hello World')
})

router.post('/postFormDataConfirmation', (req, res) => {
    controllers.confirmFormData
  response.status(200).send('Hello World')
})

module.exports = router
