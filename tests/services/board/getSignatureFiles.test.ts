export {} // Tells typescript this is a module
import fs from 'fs'
import path from 'path'
import getSignatureFiles, { getSignatureFile } from '../../../src/services/board/getSignatureFiles'

function writeTestFile(filePath) {
  fs.writeFile(filePath, 'testing123', (err: Error) => {
    if (err)
      throw new Error(
        `Unable to write test file at getSignatureFiles.test.ts [19]: ${err}`
      )
  })
}

function deleteTestFile(filePath) {
  fs.unlink(filePath, (err: Error) => {
    if (err)
      throw new Error(
        `Unable to delete test file at getSignatureFiles.test.ts [29]: ${err}`
      )
  })
}
  
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
    'signature_1000.jpg'
  )

// Write test files before tests
beforeAll(() => {
  writeTestFile(testFileOne)
  writeTestFile(testFileTwo)
})

// Delete test files after tests
afterAll(() => {
  deleteTestFile(testFileOne)
  deleteTestFile(testFileTwo)
})

describe('The getSignatureFile function', () => {

  it.only('returns a promise', () => {
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

describe('the getSignatureFiles function', () => {
  it('returns a promise', () => {
    expect(Promise.resolve(getSignatureFiles([1000, 1001]))).toEqual(
      getSignatureFile([1000, 1001])
    )
  })
})
