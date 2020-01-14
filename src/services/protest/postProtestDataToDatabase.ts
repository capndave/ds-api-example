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
 * @remarks tested
 */
export default async function postProtestDataToDatabase(
  input: any,
  pool: mssql.ConnectionPool
): Promise<any> {
  try {
    return await pool
      .request()
      .input('affidavit', mssql.Bit, input.affidavit)
      .input('ag_hearing', mssql.Bit, input.ag_hearing)
      .input('code_25_25_c', mssql.Bit, input.code_25_25_c)
      .input('code_25_25_d', mssql.Bit, input.code_25_25_d)
      .input('code_41_411', mssql.Bit, input.code_41_411)
      .input('dismissed', mssql.Bit, input.dismissed)
      .input('equity_value', mssql.Int, input.equity_value)
      .input('exemption_hearing', mssql.Bit, input.exemption_hearing)
      .input('late_protest_approved', mssql.Bit, input.late_protest_approved)
      .input('late_protest_denial_reason', mssql.VarChar(25), input.late_protest_denial_reason)
      .input('market_value', mssql.Int, input.market_value)
      .input('moved_to_informal', mssql.Bit, input.moved_to_informal)
      .input('phone_hearing', mssql.Bit, input.phone_hearing)
      .input('prop_id', mssql.Int, input.prop_id)
      .input('prop_val_yr', mssql.Int, input.prop_val_yr)
      .input('prot_taxes_paid', mssql.Bit, input.prot_taxes_paid)
      .input('protest_status', mssql.Bit, input.protest_status)
      .input('value_hearing', mssql.Bit, input.value_hearing)
      .input('withdrawn', mssql.Bit, input.withdrawn)
      .execute('ma_post_protest_data')
  } catch (error) {
    throw new Error(
      `${fileName} [21]: ${error}`
    )
  }
}
