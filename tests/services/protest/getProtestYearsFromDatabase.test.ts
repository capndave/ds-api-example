import mssql from 'mssql'
import database from '../../../src/database/database'
import { IPropValYear } from '../../../src/interfaces'
import getProtestYearsFromDatabase from '../../../src/services/protest/getProtestYearsFromDatabase'

let pool: mssql.ConnectionPool

beforeAll(async () => {
  pool = await database()
})

afterAll(async () => {
  pool.close()
})

describe('the getProtestYearsFromDatabase function', () => {
  it('is a function', () => {
    expect(typeof getProtestYearsFromDatabase).toBe('function')
  })
  it('returns an array of objects with a prop_val_yr parameter', async () => {
    try {
      const recordset: IPropValYear[] = await getProtestYearsFromDatabase(
        188749,
        pool
      )
      expect(recordset[0].hasOwnProperty('prop_val_yr')).toBe(true)
    } catch (e) {
      throw e
    }
  })
})
