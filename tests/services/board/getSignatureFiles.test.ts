export {} // Tells typescript this is a module
import fs from 'fs'
import path from 'path'
import { getSignatureFile } from '../../../src/services/board/getSignatureFiles'

describe('The getBoardMemberSignatureFromFileSystem function', () => {
  const filePath = path.join(
    __dirname,
    '../../../..',
    'signatures',
    'signature_1000.jpg'
  )

  // Write test.txt before tests
  beforeAll(() => {
    fs.writeFile(filePath, 'testing123', (err: Error) => {
      if (err)
        throw new Error(
          `Unable to write test file at signature.test.ts [38]: ${err}`
        )
    })
  })

  // Delete test.txt after tests
  afterAll(() => {
    fs.unlink(filePath, (err: Error) => {
      if (err)
        throw new Error(
          `Unable to delete test file at signature.test.ts [45]: ${err}`
        )
    })
  })

  it('returns a promise', () => {
    expect(Promise.resolve(getSignatureFile(1000))).toEqual(
      getSignatureFile(1000)
    )
  })

  it('resolves to a buffer object', done => {
    getSignatureFile(1000).then((result: Buffer) => {
      expect(Buffer.isBuffer(result)).toBe(true)
      done()
    })
  })

  it('throws an error when file does not exist', async () => {
    await getSignatureFile(999).catch(e =>
      expect(e).toMatch('Error reading file')
    )
  })
})
