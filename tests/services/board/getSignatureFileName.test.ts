export {} // Tells typescript this is a module
import path from 'path'
import getSignatureFileName from '../../../src/services/board/getSignatureFileName'

describe('the getSignatureFileName module', () => {
  it('returns a string', () => {
    expect(typeof getSignatureFileName(1000)).toBe('string')
  })
  it('returns a file name including the number entered as an argument', () => {
    expect(getSignatureFileName(1000)).toMatch('1000')
  })
  it('returns a .jpg file extension', () => {
    expect(path.extname(getSignatureFileName(1000))).toBe('.jpg')
  })
})
