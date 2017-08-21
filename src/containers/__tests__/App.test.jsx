import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../App'

import { investInLoan } from '../../api-client/loans'
jest.mock('../../api-client/loans', () => ({
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
      "ltv": "48.80",
      "amount": "85,754"
    }],
  investInLoan: jest.fn()
}))

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />)
  })

  it(`renders
      - one loan component per loan in the data-set
      - one total available component`, () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Loan').length).toEqual(2)
    expect(wrapper.find('TotalAvailable').length).toEqual(1)
  })

  it('shows invest dialog, when a loan is clicked, for that loan', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('InvestDialog').length).toEqual(0)
    wrapper.find('Loan button').at(1).simulate('click', '1')
    expect(wrapper.find('InvestDialog').length).toEqual(1)
    expect(wrapper.find('InvestDialog').prop('loan')).toEqual(expect.objectContaining({ id: '5' }))
  })

  it('calls api to invest loan amount and close invest dialog when user submits an investment amount', () => {
    const wrapper = mount(<App />)
    wrapper.find('Loan button').at(1).simulate('click', '1')
    wrapper.find('InvestDialog').props().onSubmitInvestmentAmount(123)
    expect(investInLoan).toHaveBeenCalled()
    expect(wrapper.find('InvestDialog')).toHaveLength(0)
  })
})