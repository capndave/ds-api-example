import { ConnectionPool, IResult, IRecordSet } from 'mssql'
import { IPropId } from '../../../src/interfaces'
import database from '../../../src/database/database'
import getPropIdsInPanelFromDatabase from '../../../src/services/propId/getPropIdsInPanelFromDatabase'

let pool: ConnectionPool

// Open db connection
beforeAll(async () => {
  pool = await database()
})

// Close db connection
afterAll(() => {
  pool.close()
})

describe('the getPropIdsInPanelFromDatabaseForPanel function', () => {
  it('is a function', () => {
    expect(typeof getPropIdsInPanelFromDatabase).toBe('function')
  })
  it('returns a list of prop_ids that are numbers', async () => {
    try {
      const recordset: IPropId[] = await getPropIdsInPanelFromDatabase(
        5,
        pool
      )
      expect(typeof recordset[0].prop_id).toBe('number')
    } catch (e) {
      throw e
    }
  })
})
