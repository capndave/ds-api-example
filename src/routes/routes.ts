import express from 'express'
const router = express.Router()
import logger from '../logger/logger'
import {
    getPropIdsInPanel,
    getBoardMembers,
    getBoardMemberNamesAndSignaturesForPanel,
    postBoardMemberNamesAndSignatures,
    rootController,
    getProtestYears
} from '../controllers'

/* GET */
router.get('/', rootController)
router.get('/panel/properties/:panel', getPropIdsInPanel)
router.get('/board/members', getBoardMembers)
router.get('/board/member/namesAndSignatures/:panel', getBoardMemberNamesAndSignaturesForPanel)
router.post('/board/member/namesAndSignatures', postBoardMemberNamesAndSignatures)
router.get('/protest/years/:propId', getProtestYears)
// router.get('/protest/data/:propId', protestController.getProtestData)

// router.get('/getExpectedBoardMemberNamesAndSignatures', boardMemberController.getBoardMembers)

// router.get('/getAffidavitEntered', (req, res) => {
//   controllers.getAffidavitEntered
//   response.status(200).send('Hello World')
// })


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
