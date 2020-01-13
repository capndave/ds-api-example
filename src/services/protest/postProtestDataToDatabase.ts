import logger from '../../logger/logger'
import path from 'path'
import * as mssql from 'mssql'

const fileName = path.basename(__filename)

/**
 * Get all protest years for a particular property ID from the database.
 * @async
 * @function postProtestDataToDatabase
 * @param { ConnectionPool } pool - A sql connection pool
 * @returns { Promise<Protest> }
 */
export default async function postProtestDataToDatabase(
  input: any,
  pool: mssql.ConnectionPool
): Promise<any> {
  try {
    return await pool
      .request()
      .input('prop_id', mssql.Int, input.propId)
      .input('prop_val_yr', mssql.Int, input.prop_val_yr)
      .input('prot_taxes_paid', mssql.Int, input.prot_taxes_paid)
      .input('late_protest_approved', mssql.Int, input.late_protest_approved)
      .input('late_protest_denial_reason', mssql.VarChar(25), input.late_protest_denial_reason)
      .input('withdrawn', mssql.Int, input.withdrawn)
      .input('dismissed', mssql.Int, input.dismissed)
      .input('prot_affidavit_testimony_recieved', mssql.Int, input.prot_affidavit_testimony_recieved)
      .input('moved_to_informal', mssql.Int, input.moved_to_informal)
      .input('phone_hearing', mssql.Int, input.phone_hearing)
      .input('code_25_25_c', mssql.Int, input.code_25_25_c)
      .input('code_25_25_d', mssql.Int, input.code_25_25_d)
      .input('code_41_411', mssql.Int, input.code_41_411)
      .input('ag_hearing', mssql.Int, input.ag_hearing)
      .input('exemption_hearing', mssql.Int, input.exemption_hearing)
      .input('value_hearing', mssql.Int, input.value_hearing)
      .input('market_value', mssql.Int, input.market_value)
      .input('equity_value', mssql.Int, input.equity_value)
      .input('protest_status', mssql.Int, input.protest_status)
      .execute('ma_post_protest_data')
  } catch (error) {
    logger.error(
      `Error fetching data from database in ${fileName} [21]: ${error}`
    )
  }
}
