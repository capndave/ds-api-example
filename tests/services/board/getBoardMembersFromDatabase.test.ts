import mssql from 'mssql'
import database from '../../../src/database/database'
import { IFullNameAndId } from '../../../src/interfaces'
import {
  getAllBoardMemberNamesAndIdsFromDatabase,
  getBoardMemberNamesAndIdsFromDatabaseForPanel
} from '../../../src/services/board/getBoardMembersFromDatabase'

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
      const recordset: IFullNameAndId[] = await getAllBoardMemberNamesAndIdsFromDatabase(
        pool
      )
      expect(typeof recordset).toBe('object')
    } catch (e) {
      throw e
    }
  })
})

describe('the getBoardMemberNamesAndIdsFromDatabaseForPanel function', () => {
  it('is a function', () => {
    expect(typeof getBoardMemberNamesAndIdsFromDatabaseForPanel).toBe(
      'function'
    )
  })
  it('returns some result', async () => {
    try {
      const recordset: IFullNameAndId[] = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
        4,
        pool
      )
      expect(typeof recordset).toBe('object')
    } catch (e) {
      throw e
    }
  })
})
