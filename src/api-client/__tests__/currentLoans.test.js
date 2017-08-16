import { get } from '../currentLoans'

jest.mock('../../../data/current-loans.json', () => ({
  loans: [
    {
      "title": "Voluptate et sed tempora qui quisquam."
    },
    {
      "title": "Consectetur ipsam qui magnam minus dolore ut fugit."
    }
  ]
}))

describe('currentLoans', () => {
  it('fetches loans from the data source', () => {
    const loans = get()
    expect(loans[0].title).toEqual('Voluptate et sed tempora qui quisquam.')
    expect(loans[1].title).toEqual('Consectetur ipsam qui magnam minus dolore ut fugit.')
  })
})