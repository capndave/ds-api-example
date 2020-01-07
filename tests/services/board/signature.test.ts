export {}       // Tells typescript this is a module
const {
  fileExists,
  filePathFromId
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

  const filePath = join(__dirname, '..', 'signatures', 'test.txt')

  // Write test.txt before tests
  beforeAll(() => {
    fs.writeFile(filePath, 'testing123', (err: Error) => {
      console.log('Unable to write test file')
    })
  })

  // Delete test.txt after tests
  afterAll((done) => {
    fs.unlink(filePath, (err: Error) => {
      if (err) console.log('Unable to write test file')
      console.log('Test file deleted')
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
