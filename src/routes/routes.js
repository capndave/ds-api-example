const router = require('express').Router()
const logger = require('../logger/logger')
// TODO: add controllers for each route
const propIdController = require('../controllers/propIdController')

/* GET */
router.get('/', (req, res) => {
  res.send(`
    <h1>TCAD Decision Sheet API</h1>
    <p>Try adding another keyword to your path. Routes available:
    <h4>GET</h4>
    <ul>
      <li><b>propIDs/:panel</b> - Get the prop id's that are assigned to a hearing in a panel, at the current moment.</li>
      <li><b>getBoardMembers</b> - Get a list of all board members</li>
      <li><b>getAffidavitEntered</b> - Get a true/false value indicating whether an affidavit has been entered today.</li>
      <li><b>getProtestYears/:propId</b> - Get a list of years for which an unresolved protest exists, for a particular property.</li>
      <li><b>getProtestData/:caseId</b> - Get data on protest for a particular case, including protest data and any saved data from a former decision sheet entry.</li>
      <li><b>getAppraisers</b> - Get a list of all appraisers.</li>
      <li><b>getAppraiser/:propId</b> - Get the name of the appraiser currently assigned to work with a propId.</li>
    </ul>
    <h4>POST</h4>
    <ul>
      <li><b>postBoardMemberNamesAndSignatures</b> - Post an object containing names and a signature jpg for each board member.</li>
      <li><b>postFormData</b> - Post data entered for the decision sheet. Returns a pdf of a rendered decision sheet form.</li>
      <li><b>postFormDataConfirmation</b> - Post a true/false value indicating whether the data posted from postFormData is correct.</li>
    </ul>
  `)
})

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
