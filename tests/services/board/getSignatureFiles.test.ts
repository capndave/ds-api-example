export {} // Tells typescript this is a module
import fs from 'fs'
import path from 'path'
import { getSignatureFile } from '../../../src/services/board/getSignatureFiles'

describe('The getBoardMemberSignatureFromFileSystem function', () => {

  const filePath = path.join(__dirname, '..', 'signatures', 'signature_1000.jpg')

  // Write test.txt before tests
  beforeAll(() => {
    fs.writeFile(filePath, 'testing123', (err: Error) => {
      if (err)
        throw new Error(
          `Unable to write test file at signature.test.ts [38]: ${err}`
        )
    })
  })

  // // Delete test.txt after tests
  // afterAll(() => {
  //   fs.unlink(filePath, (err: Error) => {
  //     if (err)
  //       throw new Error(
  //         `Unable to delete test file at signature.test.ts [45]: ${err}`
  //       )
  //   })
  // })

  it.only('returns a promise', () => {
    expect(Promise.resolve(getSignatureFile(1000))).toEqual(getSignatureFile(1000))
  })

  // it('resolves to a boolean', done => {
  //   fileExists(filePath).then((result: boolean) => {
  //     expect(typeof result).toBe('boolean')
  //     done()
  //   })
  // })

  // it('resolves to true when file exists', done => {
  //   fileExists(filePath).then((result: boolean) => {
  //     expect(result).toBe(true)
  //     done()
  //   })
  // })

  // it('resolves to false when file does not exist', done => {
  //   const notAFile = './notAFile.txt'
  //   fileExists(notAFile).then((result: any) => {
  //     expect(result).toBe(false)
  //     done()
  //   })
  // })
})