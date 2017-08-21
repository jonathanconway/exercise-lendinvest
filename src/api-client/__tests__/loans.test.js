import { loans } from '../loans'

jest.mock('../../../data/current-loans.json', () => ({
  loans: [{
    "id": "1",
    "title": "Voluptate et sed tempora qui quisquam.",
    "tranche": "A",
    "available": "11,959",
    "annualised_return": "8.60",
    "term_remaining": "864000",
    "ltv": "48.80",
    "amount": "85,754"
  },
  {
    "id": "5",
    "title": "Consectetur ipsam qui magnam minus dolore ut fugit.",
    "tranche": "B",
    "available": "31,405",
    "annualised_return": "7.10",
    "term_remaining": "1620000",
    "ltv": "48.79",
    "amount": "75,754"
  }]
}))

describe('currentLoans', () => {
  it('fetches loans from the data source', () => {
    expect(loans[0].title).toEqual('Voluptate et sed tempora qui quisquam.')
    expect(loans[1].title).toEqual('Consectetur ipsam qui magnam minus dolore ut fugit.')
  })

  it('parses comma-formatted numbers into number-typed values', () => {
    expect(loans[0].available).toEqual(11959)
    expect(loans[0].annualised_return).toEqual(8.6)
    expect(loans[0].term_remaining).toEqual(864000)
    expect(loans[0].ltv).toEqual(48.80)
    expect(loans[0].amount).toEqual(85754)

    expect(loans[1].available).toEqual(31405)
    expect(loans[1].annualised_return).toEqual(7.10)
    expect(loans[1].term_remaining).toEqual(1620000)
    expect(loans[1].ltv).toEqual(48.79)
    expect(loans[1].amount).toEqual(75754)
  })
})