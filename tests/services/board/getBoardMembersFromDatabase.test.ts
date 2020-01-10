import mssql from 'mssql'
import database from '../../../src/database/database'
import { getAllBoardMemberNamesAndIdsFromDatabase, getBoardMemberNamesAndIdsFromDatabaseForPanel } from '../../../src/services/board/getBoardMembersFromDatabase'

let pool: mssql.ConnectionPool

beforeAll(async () => {
  pool = await database()
})

describe('the getAllBoardMemberNamesAndIdsFromDatabase function', () => {
  it('is a function', () => {
    expect(typeof getAllBoardMemberNamesAndIdsFromDatabase).toBe('function')
  })
  it('returns some result', async () => {
    try {
      const result: mssql.IResult<any> = await getAllBoardMemberNamesAndIdsFromDatabase(
        pool
      )
      expect(typeof result.recordset).toBe('array')
    } catch (e) {
      throw e
    }
  })
})

describe('the getBoardMemberNamesAndIdsFromDatabaseForPanel function', () => {
  it('is a function', () => {
    expect(typeof getBoardMemberNamesAndIdsFromDatabaseForPanel).toBe('function')
  })
  it('returns some result', async () => {
    try {
      const result: mssql.IResult<any> = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
        4,
        pool
      )
      expect(typeof result.recordset).toBe('array')
    } catch (e) {
      throw e
    }
  })
})
