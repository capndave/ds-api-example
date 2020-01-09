import mssql from 'mssql'
import database from '../../../src/database/database'
import getProtestYearsFromDatabase from '../../../src/services/protest/getProtestYearsFromDatabase'

let pool: mssql.IPool

beforeAll(async () => {
  pool = await database()
})

describe('the getProtestYearsFromDatabase function', () => {
  it('is a function', () => {
    expect(typeof getProtestYearsFromDatabase).toBe('function')
  })
  it('returns some result', async () => {
    try {
      const result: mssql.IResult<any> = await getProtestYearsFromDatabase(
        188749,
        pool
      )
      expect(typeof result.recordset).toBe('array')
    } catch (e) {
      throw e
    }
  })
})
