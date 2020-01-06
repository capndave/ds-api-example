const { filePathFromId } = require('../../../src/services/board/signature')
const { basename } = require('path')

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