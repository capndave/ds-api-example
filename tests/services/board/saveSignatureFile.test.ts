export {} // Tells typescript this is a module
import saveSignatureFile from '../../../src/services/board/saveSignatureFile'
import path from 'path'
import fs from 'fs'

describe('the saveSignatureFile function', () => {
  // define file to save
  const boardMemberId = 666
  const filePath = path.join(
    __dirname,
    '../../../../signatures',
    `signature_${boardMemberId}.jpg`
  )
  console.log(filePath)

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
    expect(Promise.resolve(saveSignatureFile(boardMemberId, 'abc123'))).toEqual(
      saveSignatureFile(boardMemberId, 'abc123')
    )
  })

  it('writes content to a file', done => {
    saveSignatureFile(boardMemberId, 'abc123').then((result: string) => {
      expect(result).toMatch('File written successfully')
      done()
    })
  })
})
