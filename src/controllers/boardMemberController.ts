//TODO: Finish boardMemberController
import express = require('express')
const getBoardMembersFromDatabase = require('../services/board/getBoardMembersFromDatabase')
const { getBoardMemberSignaturesFromFileSystem } = require('../services/board/getBoardMemberSignaturesFromFileSystem')
import { addSignatureValuesToObjectsInArray } from '../services/board/addSignatureValuesToObjectsInArray'
import { IBoardMember } from '../interfaces'
import { BoardMember } from '../models/board/boardMember.model'

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
  const { recordset }: any = await getBoardMembersFromDatabase.all(pool)
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
  const { recordset }: { recordset: BoardMember[] } = await getBoardMembersFromDatabase.forPanel(panel, pool)
  const boardMemberIds: number[] = recordset.map(boardMember => boardMember.board_member_id)
  const signatures: Buffer[] = await getBoardMemberSignaturesFromFileSystem(boardMemberIds)
  const boardMembers: BoardMember[] = addSignatureValuesToObjectsInArray(recordset, signatures)
  res.send(boardMembers).status(200)
}

exports.postBoardMemberNamesAndSignatures = function(req, res) {
  res.status(200).send(panel)
}
