export {} // Tells typescript this is a module
import saveSignatureFile from '../../../src/services/board/saveSignatureFile'
import path from 'path'
import fs from 'fs'

describe('the saveSignatureFile function', () => {

  // define file to save
  const filePath = path.join(__dirname, '../../../..', 'signatures', 'signature_1000.jpg')

  // delete file after tests
  afterAll(() => {
    fs.unlink(filePath, (err: Error) => {
      if (err)
        throw new Error(
          `Unable to delete test file at signature.test.ts [45]: ${err}`
        )
    })
  })

  it('returns a promise', () => {
    expect(Promise.resolve(saveSignatureFile(100, 'abc123'))).toEqual(saveSignatureFile(100, 'abc123'))
  })

  it.only('writes content to a file', done => {
    saveSignatureFile(100, 'abc123').then((result: boolean) => {
      expect(result).toMatch('File written successfully')
      done()
    })
  })
  
})
