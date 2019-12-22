//TODO: Finish boardMemberController
import express = require('express')
const getBoardMembersFromDatabase = require('../services/getBoardMembersFromDatabase')

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
 * assembles names and signatures into a data object
 * and sends data with the response object
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
  const { recordset }: any = await getBoardMembersFromDatabase.forPanel(panel, pool)
  res.send(recordset).status(200)
}

exports.postBoardMemberNamesAndSignatures = function(req, res) {
  res.status(200).send(panel)
}
