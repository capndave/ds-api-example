//TODO: Finish boardMemberController
import { Request, Response } from 'express'
import { ConnectionPool } from 'mssql'
import { basename } from 'path'
import logger from '../logger/logger'
import { IFullNameAndId } from '../interfaces'
import { FullNameIdAndSignature } from '../models'
import {
  getAllBoardMemberNamesAndIdsFromDatabase,
  getBoardMemberNamesAndIdsFromDatabaseForPanel
} from '../services/board/getBoardMembersFromDatabase'
import getSignatureFiles from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'

const fileName = basename(__filename)
import prettyPrintObject from '../services/utilities/prettyPrintObject'

/**
 * Extracts the connection pool from the request object,
 * gets data from the getBoardMembersFromDatabase service,
 * and sends data with the response object
 * @async
 * @function
 * @param { Request } req
 * @param { Response } res
 * @remarks testing
 */
export async function getBoardMembers(req: Request, res: Response) {
  try {
    const pool: ConnectionPool = req.app.locals.pool
    const namesAndIds: IFullNameAndId[] = await getAllBoardMemberNamesAndIdsFromDatabase(
      pool
    )
    res.send(namesAndIds).status(200)
  } catch (err) {
    logger.info(`${fileName} [37]: ${err}`)
  }
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
  req: Request,
  res: Response
) {
  try {
    const panel: number = parseInt(req.params.panel)
    const pool: ConnectionPool = req.app.locals.pool

    const recordset: IFullNameAndId[] = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
      panel,
      pool
    )

    const ids: number[] = recordset.map(
      (record: IFullNameAndId) => record.board_member_id
    )

    const signatures: Buffer[] = await getSignatureFiles(ids)

    const fullNamesIdsAndSignatures: FullNameIdAndSignature[] = mergeSignaturesWithFullNamesAndIds(
      recordset,
      signatures
    )

    res.send(fullNamesIdsAndSignatures).status(200)
  } catch (err) {
    logger.info(`${fileName} [79]: ${err}`)
  }
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
  req: Request,
  res: Response
) {
  try {
    const panel: number = parseInt(req.params.panel)
    const pool: ConnectionPool = req.app.locals.pool

    prettyPrintObject(req.body.map)

    // TODO: Post board member names to db

    //TODO: Post board member signatures to fs

    // boardMembers.forEach(boardMember => {
    //   await saveSignatureFile(boardMember)
    // })

    res.status(200).send('Post request successful')
  } catch (err) {
    logger.info(`${fileName} [115]: ${err}`)
  }
}
