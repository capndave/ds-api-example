import { ConnectionPool } from 'mssql'
import { IProtest } from '../../../src/interfaces'
import database from '../../../src/database/database'
import postProtestDataToDatabase from '../../../src/services/protest/postProtestDataToDatabase'
import deleteProtestDataFromDatabase from './deleteProtestDataFromDatabase'

let pool: ConnectionPool

const dataToPost: IProtest = {
  affidavit: true,
  ag_hearing: true,
  code_25_25_c: true,
  code_25_25_d: true,
  code_41_411: true,
  dismissed: false,
  equity_value: 3,
  exemption_hearing: true,
  late_protest_approved: true,
  late_protest_denial_reason: 'protester is very bad',
  market_value: 3,
  moved_to_informal: false,
  phone_hearing: false,
  prop_id: 999999,
  prop_val_yr: 2525,
  prot_taxes_paid: true,
  protest_status: 'ORD1',
  value_hearing: true,
  withdrawn: false
}

beforeAll(async () => {
  pool = await database()
})

afterAll(async () => {
  await deleteProtestDataFromDatabase(
    dataToPost.prop_id,
    dataToPost.prop_val_yr,
    pool
  )
  pool.close()
})

describe('the postProtestDataToDatabase function', () => {
  it('is a function', () => {
    expect(typeof postProtestDataToDatabase).toBe('function')
  })

  it('returns an undefinded recordset property when successful', async () => {
    try {
      const response: any = await postProtestDataToDatabase(dataToPost, pool)
      expect(response.recordset).toBe(undefined)
    } catch (e) {
      throw e
    }
  })
  it.only('throws an error if prop_id is a string', async () => {
      const modifiedDataToPost = {
        ...dataToPost,
        prop_id: ''
      }
      await expect(postProtestDataToDatabase(modifiedDataToPost, pool)).rejects.toThrow("Validation failed for parameter 'prop_id'")
  })
})
