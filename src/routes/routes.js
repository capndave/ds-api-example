const router = require('express').Router()
const logger = require('../logger/logger')
// TODO: add controllers for each route

/* GET */

router.get('/getPropIdsInPanel', (req, res) => {
  response.status(200).send('Hello World')
})

router.get('/getBoardMembers', (req, res) => {
  response.status(200).send('Hello World')
})

router.get('/getAffidavitEntered', (req, res) => {
  response.status(200).send('Hello World')
})

router.get('/getProtestYears', (req, res) => {
  response.status(200).send('Hello World')
})

router.get('/getProtestData', (req, res) => {
  response.status(200).send('Hello World')
})

router.get('/getAppraisers', (req, res) => {
  response.status(200).send('Hello World')
})

/* POST */

router.post('/postBoardMemberNamesAndSignatures', (req, res) => {
  response.status(200).send('Hello World')
})

router.post('/postFormData', (req, res) => {
  response.status(200).send('Hello World')
})

router.post('/confirmFormData', (req, res) => {
  response.status(200).send('Hello World')
})

module.exports = router
