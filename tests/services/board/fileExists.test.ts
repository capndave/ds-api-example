export {} // Tells typescript this is a module
import fs from 'fs'
import path from 'path'
import fileExists from '../../../src/services/board/fileExists'

describe('The fileExists method', () => {
  const filePath = path.join(__dirname, '..', 'board', 'test.txt')

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
    expect(Promise.resolve(fileExists(filePath))).toEqual(fileExists(filePath))
  })

  it('resolves to a boolean', done => {
    fileExists(filePath).then((result: boolean) => {
      expect(typeof result).toBe('boolean')
      done()
    })
  })

  it('resolves to true when file exists', done => {
    fileExists(filePath).then((result: boolean) => {
      expect(result).toBe(true)
      done()
    })
  })

  it('resolves to false when file does not exist', done => {
    const notAFile = './notAFile.txt'
    fileExists(notAFile).then((result: any) => {
      expect(result).toBe(false)
      done()
    })
  })
})