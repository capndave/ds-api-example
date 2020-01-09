export {} // Tells typescript this is a module
import database from '../../../src/database/database'
import getPropIdsInPanelFromDatabase from '../../../src/services/board/getPropIdsInPanelFromDatabase'
import prettyPrintObject from '../../../src/services/utilities/prettyPrintObject'
import * as sql from 'mssql'
let pool: any

beforeAll(async () => {
  pool = await database()
})

describe('the getPropIdsInPanelFromDatabase module', () => {
  it('returns data', async () => {
    const { recordset } = await getPropIdsInPanelFromDatabase(5, pool)
    prettyPrintObject(recordset)
    await expect(0).toBe(1)
  })
})
