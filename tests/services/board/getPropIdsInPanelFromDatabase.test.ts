export {} // Tells typescript this is a module
import database from '../../../src/database/database'
import getPropIdsInPanelFromDatabase from '../../../src/services/board/getPropIdsInPanelFromDatabase'
import PropId from '../../../src/models/board/boardMember.model'
let pool: any

beforeAll(async () => {
  pool = await database()
})

describe('the getPropIdsInPanelFromDatabase module', () => {
  it('returns a list where the first object has a prop__id key', async () => {
    const propIds: PropId[] = await getPropIdsInPanelFromDatabase(5, pool)
    expect(propIds[0].hasOwnProperty('prop_id')).toBe(true)
  })
})
