
import { Request, Response } from 'express'
import { ConnectionPool } from 'mssql'
import { IFullNameAndId } from '../interfaces'
import {
  { CommunicationAffidavit, DecisionSheet }
} from '../services/forms/makeForm'
import getSignatureFiles from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'

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
export async function getForms(req: Request, res: Response) {
  const pool: ConnectionPool = req.app.locals.pool
  const namesAndIds: IFullNameAndId[] = await getAllBoardMemberNamesAndIdsFromDatabase(
    pool
  )
  res.send(namesAndIds).status(200)
}