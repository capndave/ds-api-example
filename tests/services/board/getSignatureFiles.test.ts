export {} // Tells typescript this is a module
import fs from 'fs'
import path from 'path'
import getSignatureFiles, {
  getSignatureFile
} from '../../../src/services/board/getSignatureFiles'

const testFileOne = path.join(
  __dirname,
  '../../../..',
  'signatures',
  'signature_1000.jpg'
)

const testFileTwo = path.join(
  __dirname,
  '../../../..',
  'signatures',
  'signature_1001.jpg'
)

// Write test files before tests
beforeAll(() => {
  function writeTestFile(filePath: string) {
    fs.writeFile(filePath, 'testing123', (err: Error) => {
      if (err)
        throw new Error(
          `Unable to write test file at getSignatureFiles.test.ts [19]: ${err}`
        )
    })
  }
  writeTestFile(testFileOne)
  writeTestFile(testFileTwo)
})

// Delete test files after tests
afterAll(() => {
  function deleteTestFile(filePath: string) {
    fs.unlink(filePath, (err: Error) => {
      if (err)
        throw new Error(
          `Unable to delete test file at getSignatureFiles.test.ts [29]: ${err}`
        )
    })
  }
  deleteTestFile(testFileOne)
  deleteTestFile(testFileTwo)
})

describe('The getSignatureFile function', () => {
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

  it('throws a file not found error when file does not exist', async () => {
    await getSignatureFile(999).catch(e => expect(e).toMatch('ENOENT'))
  })
})

describe('the getSignatureFiles function', () => {
  const fileIds = [1000, 1001]

  it('returns a promise', () => {
    expect(Promise.resolve(getSignatureFiles(fileIds))).toEqual(
      getSignatureFiles(fileIds)
    )
  })
  it('resolves to an array of buffers', async () => {
    await getSignatureFiles(fileIds).then((buffers: Buffer[]) => {
      buffers.forEach(buffer => {
        expect(Buffer.isBuffer(buffer)).toBe(true)
      })
    })
  })
  it('throws a file not found error when file does not exist', async () => {
    await getSignatureFiles([999, 1000]).catch(e => expect(e).toMatch('ENOENT'))
  })
})
