import express from 'express'
const router = express.Router()
import logger from '../logger/logger'
import rootController from '../controllers/rootController'
import propIdController from '../controllers/propIdController'
import boardMemberController from '../controllers/boardMemberController'
import protestController from '../controllers/protestController'

/* GET */
router.get('/', rootController)
router.get('/panel/properties/:panel', propIdController.getPropIdsInPanel)
router.get('/board/members', boardMemberController.getBoardMembers)
router.get('/board/member/:panel', boardMemberController.getBoardMemberNamesAndSignaturesForPanel)
router.post('/board/members', boardMemberController.postBoardMemberNamesAndSignatures)

// router.get('/getExpectedBoardMemberNamesAndSignatures', boardMemberController.getBoardMembers)

// router.get('/getAffidavitEntered', (req, res) => {
//   controllers.getAffidavitEntered
//   response.status(200).send('Hello World')
// })

router.get('/protest/years/:propId', protestController.getProtestYear)
router.get('/protest/data/:propId', protestController.getProtestData)

// router.get('/getAppraisers', (req, res) => {
//     controllers.getAppraisers
//   response.status(200).send('Hello World')
// })

// /* POST */


// router.post('/postFormData', (req, res) => {
//     controllers.postFormData
//   response.status(200).send('Hello World')
// })

// router.post('/postFormDataConfirmation', (req, res) => {
//     controllers.confirmFormData
//   response.status(200).send('Hello World')
// })

export default router
