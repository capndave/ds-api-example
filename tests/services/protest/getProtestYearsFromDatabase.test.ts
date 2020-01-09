import getProtestYearsFromDatabase from '../../../src/services/protest/getProtestYearsFromDatabase'

describe('the getProtestYearsFromDatabase function', () => {
  it('is a function', () => {
      expect(typeof getProtestYearsFromDatabase).toBe('function')
  })
})