import { Request, Response } from 'express'
import { Duplex } from 'stream'
import { ConnectionPool } from 'mssql'
import { FormData } from '../models'
import { basename } from 'path'

import {
  CommunicationAffidavit,
  DecisionSheet
} from '../services/forms/makeForm'
import getSignatureFiles from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'

import prettyPrintObject from '../services/utilities/prettyPrintObject'
import logger from '../logger/logger'
const fileName = basename(__filename)

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
  try {
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.params.year)
    const pool: ConnectionPool = req.app.locals.pool
    const data = new FormData(req.params)

    const forms: any = await DecisionSheet.generate(data)
    console.log(forms)
    //   res.send(namesAndIds).status(200)
  } catch (e) {
    logger.error(`${fileName} [54]: ${e}`)
  }
}

export async function postIntermediateFormsData(req: Request, res: Response) {
  try {
    console.log('in postIntermediateFormsData function')
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.params.year)
    const pool: ConnectionPool = req.app.locals.pool

    console.log(req.params)

    const data = new FormData(req.params)
    const decisionSheetStream: Duplex = await DecisionSheet.generate(data)
    res.send(decisionSheetStream).status(200)
  } catch (e) {
    logger.error(`${fileName} [54]: ${e}`)
  }
}
