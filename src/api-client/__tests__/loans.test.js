import { loans } from '../loans'

jest.mock('../../../data/current-loans.json', () => ({
  loans: [
    {
      "title": "Voluptate et sed tempora qui quisquam.",
      "amount": "85,754"
    },
    {
      "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
      "amount": "75,754"
    }
  ]
}))

describe('currentLoans', () => {
  it('fetches loans from the data source', () => {
    expect(loans[0].title).toEqual('Voluptate et sed tempora qui quisquam.')
    expect(loans[1].title).toEqual('Consectetur ipsam qui magnam minus dolore ut fugit.')
  })

  it('parses comma-formatted numbers into number-typed values', () => {
    expect(loans[0].amount).toEqual(85754)
    expect(loans[1].amount).toEqual(75754)
  })
})