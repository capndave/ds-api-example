//TODO: Finish boardMemberController
import express from 'express'
import { getAllBoardMembersFromDatabase, getBoardMembersFromDatabaseForPanel } from '../services/board/getBoardMembersFromDatabase'
import { getBoardMemberSignaturesFromFileSystem } from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'
import BoardMember, {FullNameAndId, FullNameIdAndSignature} from '../models/board/boardMember.model'

/**
 * A module for working with board member data.
 * @module boardMemberControllers
 */

/**
 * Extracts the connection pool from the request object,
 * gets data from the getBoardMembersFromDatabase service,
 * and sends data with the response object
 * @async
 * @method
 * @param { express.Request } req
 * @param { express.Response } res
 */
exports.getBoardMembers = async function(
  req: express.Request,
  res: express.Response
) {
  const pool: any = req.app.locals.pool
  const { recordset }: any = await getAllBoardMembersFromDatabase(pool)
  res.send(recordset).status(200)
}

/**
 * Gets the panel number from the request url string,
 * gets the connection pool from the request object,
 * gets data from the getExpectedBoardMemberNames service,
 * get signature data from the getExpectedBoardMemberSignatures service,
 * assembles names and signatures into a boardMembers object
 * and sends boardMembers data with the response object
 * @async
 * @method
 * @param { express.Request } req
 * @param { express.Response } res
 */
exports.getBoardMemberNamesAndSignaturesForPanel = async function(
  req: express.Request,
  res: express.Response
) {
  const panel: number = parseInt(req.params.panel)
  const pool: any = req.app.locals.pool
  const {
    recordset
  }: { recordset: FullNameAndId[] } = await getBoardMembersFromDatabaseForPanel(
    panel,
    pool
  )
  const ids: number[] = recordset.map(
    boardMember => boardMember.board_member_id
  )
  const signatures: Buffer[] = await getBoardMemberSignaturesFromFileSystem(ids)
  const fullNamesIdsAndSignatures: fullNameIdAndSignature[] = mergeSignaturesWithFullNamesAndIds(
    recordset, signatures
  )
  res.send(fullNamesIdsAndSignatures).status(200)
}

/**
 * Gets the panel number from the request url string,
 * gets the connection pool from the request object,
 * gets data from the getExpectedBoardMemberNames service,
 * get signature data from the getExpectedBoardMemberSignatures service,
 * assembles names and signatures into a boardMembers object
 * and sends boardMembers data with the response object
 * @async
 * @method
 * @param { express.Request } req
 * @param { express.Response } res
 */
// TODO: WHAT IS THIS?
exports.postBoardMemberNamesAndSignatures = async function(
  req: express.Request,
  res: express.Response
) {
  const panel: number = parseInt(req.params.panel)
  const pool: any = req.app.locals.pool

  // map request body to an array of BoardMember class
  const boardMembers: BoardMember[] = req.body.map(
    boardMember => new BoardMember(boardMember)
  ) // assign to class

  boardMembers.forEach(boardMember => {
    await saveSignatureFile(boardMember)
  })

  res.status(200).send('Post request successful')
}
