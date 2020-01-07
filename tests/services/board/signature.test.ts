export {} // Tells typescript this is a module
const {
  fileExists,
  filePathFromId,
  save
} = require('../../../src/services/board/signature')
const { basename, join } = require('path')
const fs = require('fs')

describe('The filePathFromId method', () => {
  it('returns a string', () => {
    expect(typeof filePathFromId(2)).toBe('string')
  })

  it('includes the path to src/services/signatures', () => {
    expect(filePathFromId(2)).toMatch('src/services/signatures')
  })

  it('returns a string ending with ".jpg"', () => {
    expect(basename(filePathFromId(2))).toMatch('.jpg')
  })

  it('returns a string including the number entered as an argument', () => {
    expect(basename(filePathFromId(2))).toMatch('2')
  })

  it('returns a string including an underscore', () => {
    expect(basename(filePathFromId(2))).toMatch('_')
  })
})

describe('The fileExists method', () => {
  const filePath = join(__dirname, '..', 'board', 'test.txt')

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

describe('the save method', () => {
  const filePath = join(__dirname, '..', 'board', 'test.txt')

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
    expect(Promise.resolve(save(filePath))).toEqual(save(filePath))
  })

  it('writes content to a file', done => {
    save(filePath, 'abc123').then((result: boolean) => {
      expect(result).toMatch('File written successfully')
      done()
    })
  })
  
  it('throws an error if given an invalid path', async () => {
    await expect(save('./not/a/directory', 'someContent')).rejects.toMatch(
      'Unable to write file'
    )
  })
})
