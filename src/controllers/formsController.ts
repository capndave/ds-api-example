import { Request, Response } from 'express'
import { ConnectionPool } from 'mssql'
import { IFullNameAndId } from '../interfaces'
import {
  CommunicationAffidavit,
  DecisionSheet
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
  const propId: number = parseInt(req.params.propId)
  const year: number = parseInt(req.params.year)
  const pool: ConnectionPool = req.app.locals.pool
  class FormData {
      prop_id: number,
      prop_val_yr: number

      constructor(input: any) {
          this.prop_id = input.propId
          this.prop_val_yr = input.prop_val_yr
      }
  }
  const data = new FormData(req.params)
  const forms: any = await DecisionSheet.generate(data)
  console.log(forms)
//   res.send(namesAndIds).status(200)
}
