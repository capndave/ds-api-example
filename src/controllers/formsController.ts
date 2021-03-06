import { Request, Response } from 'express'
import { Duplex } from 'stream'
import { ConnectionPool } from 'mssql'
import { basename } from 'path'
import logger from '../logger/logger'
import { FormData } from '../models'

import {
  CommunicationAffidavit,
  DecisionSheet
} from '../services/forms/makeForm'
import getSignatureFiles from '../services/board/getSignatureFiles'
import saveSignatureFile from '../services/board/saveSignatureFile'
import mergeSignaturesWithFullNamesAndIds from '../services/board/mergeSignaturesWithFullNamesAndIds'

import prettyPrintObject from '../services/utilities/prettyPrintObject'
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

    const forms: any = await DecisionSheet.pdf(data)
    res.send(forms).status(200)
  } catch (err) {
    logger.error(`${fileName} [39]: ${err}`)
  }
}

export async function getCommunicationAffidavit(req: Request, res: Response) {
  try {
    console.log('Inside getCommunicationAffidavit')
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.params.year)
    const pool: ConnectionPool = req.app.locals.pool
    const data = new FormData(req.params)
    console.log(data)
    const forms: any = await CommunicationAffidavit.html(data)
    console.log(forms)
    res.send(forms).status(200)
  } catch (err) {
    logger.error(`${fileName} [53]: ${err}`)
  }
}

export async function postIntermediateFormsData(req: Request, res: Response) {
  try {
    console.log('in postIntermediateFormsData function')
    const propId: number = parseInt(req.params.propId)
    const year: number = parseInt(req.params.year)
    const pool: ConnectionPool = req.app.locals.pool
    const data = new FormData(req.params)
    const decisionSheetStream: Duplex = await DecisionSheet.pdf(data)
    res.send(decisionSheetStream).status(200)
  } catch (e) {
    logger.error(`${fileName} [56]: ${e}`)
  }
}
