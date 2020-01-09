//TODO: Finish boardMemberController
import express from 'express'
import {
  getAllBoardMemberNamesAndIdsFromDatabase,
  getBoardMemberNamesAndIdsFromDatabaseForPanel
} from '../services/board/getBoardMembersFromDatabase'
import getSignatureFiles from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'
import BoardMember, {
  FullNameAndId,
  FullNameIdAndSignature
} from '../models/board/boardMember.model'
import prettyPrintObject from '../services/utilities/prettyPrintObject'

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
export async function getBoardMembers(
  req: express.Request,
  res: express.Response
) {
  const pool: any = req.app.locals.pool
  const { recordset }: any = await getAllBoardMemberNamesAndIdsFromDatabase(pool)
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
export async function getBoardMemberNamesAndSignaturesForPanel(
  req: express.Request,
  res: express.Response
) {
  const panel: number = parseInt(req.params.panel)
  const pool: any = req.app.locals.pool

  const { recordset }: { recordset: FullNameAndId[] }
    = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
    panel,
    pool
  )
  const ids: number[] = recordset.map(
    (boardMember: any) => boardMember.board_member_id
  )
  const signatures: Buffer[] = await getSignatureFiles(ids)
  const fullNamesIdsAndSignatures: FullNameIdAndSignature[] = mergeSignaturesWithFullNamesAndIds(
    recordset,
    signatures
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
export async function postBoardMemberNamesAndSignatures(
  req: express.Request,
  res: express.Response
) {
  const panel: number = parseInt(req.params.panel)
  const pool: any = req.app.locals.pool

  console.log('here')

  // // map request body to an array of BoardMember class
  // const boardMembers: BoardMember[] = req.body.map(
  //   boardMember => new BoardMember(boardMember)
  // ) // assign to class
  prettyPrintObject(req.body.map)

  // TODO: Post board member names to db

  //TODO: Post board member signatures to fs

  // boardMembers.forEach(boardMember => {
  //   await saveSignatureFile(boardMember)
  // })

  res.status(200).send('Post request successful')
}
