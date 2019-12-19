//TODO: Finish boardMemberController
import express = require('express')
const getBoardMembersFromDatabase = require('../services/getBoardMembersFromDatabase')

/**
 * A module for working with prop id data.
 * @module propIdControllers
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

  const { recordset }: any = await getBoardMembersFromDatabase(pool)
  res.send(recordset).status(200)
}

exports.getExpectedBoardMemberNamesAndSignatures = function(req, res) {
  res.status(200).send(panel)
}

exports.postBoardMemberNamesAndSignatures = function(req, res) {
  res.status(200).send(panel)
}
