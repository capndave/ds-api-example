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

afterAll(async () => {
  pool.close()
})

describe('the getAllBoardMemberNamesAndIdsFromDatabase function', () => {
  it('is a function', () => {
    expect(typeof getAllBoardMemberNamesAndIdsFromDatabase).toBe('function')
  })
  it('returns an object', async () => {
    try {
      const recordset: IFullNameAndId[] = await getAllBoardMemberNamesAndIdsFromDatabase(
        pool
      )
      console.log(recordset)
      expect(typeof recordset).toBe('object')
    } catch (e) {
      throw e
    }
  })
  it('returns at least one result with a board_member_id and full_name properties', async () => {
    try {
      // get records
      const recordset: IFullNameAndId[] = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
        5,
        pool
      )

      // define test condition
      const hasIdAndNameProps = [
        'board_member_id',
        'full_name'
      ].every(property => recordset[0].hasOwnProperty(property))

      // test
      expect(hasIdAndNameProps).toBe(true)
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
  it('returns an object', async () => {
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
  it('returns at least one result with a board_member_id and full_name properties', async () => {
    try {
      // get records
      const recordset: IFullNameAndId[] = await getBoardMemberNamesAndIdsFromDatabaseForPanel(
        5,
        pool
      )

      // define test condition
      const hasIdAndNameProps = [
        'board_member_id',
        'full_name'
      ].every(property => recordset[0].hasOwnProperty(property))

      // test
      expect(hasIdAndNameProps).toBe(true)
    } catch (e) {
      throw e
    }
  })
})
