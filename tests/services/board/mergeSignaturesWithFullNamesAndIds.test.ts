import mergeSignaturesWithFullNamesAndIds from '../../../src/services/board/mergeSignaturesWithFullNamesAndIds'
import { FullNameIdAndSignature } from '../../../src/models'
import { IFullNameAndId } from '../../../src/interfaces'

describe('the mergeSignaturesWithFullNamesAndIds function', () => {
  const fullNamesAndIdsMock: IFullNameAndId[] = [
    {
      board_member_id: 1000,
      full_name: 'Test Name'
    },
    {
      board_member_id: 1001,
      full_name: 'Another Name'
    }
  ]
  const signaturesMock: Buffer[] = [
    new Buffer('testSignature', 'utf-8'),
    new Buffer('anotherTestSignature', 'utf-8')
  ]

  it('is a function', () => {
    expect(typeof mergeSignaturesWithFullNamesAndIds).toBe('function')
  })

  it('returns an object', () => {
    expect(
      typeof mergeSignaturesWithFullNamesAndIds(
        fullNamesAndIdsMock,
        signaturesMock
      )
    ).toBe('object')
  })

  it('returns at least one row with a board_member_id, full_name, and signature field', () => {

    // get results
    const recordset = mergeSignaturesWithFullNamesAndIds(fullNamesAndIdsMock, signaturesMock)

    // define test condition
    const hasAllProps = ['board_member_id', 'full_name', 'signature'].every(property =>
      recordset[0].hasOwnProperty(property)
    )

    // test
    expect(hasAllProps).toBe(true)

  })
})
