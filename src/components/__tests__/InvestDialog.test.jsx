import React from 'react'
import { shallow, mount } from 'enzyme'

import InvestDialog from '../InvestDialog'

jest.mock('../formatters', () => ({
  formatTermRemaining: input => `mockFormatTermRemaining-${input}`
}))

describe('<InvestDialog />', () => {  
  const fakeLoan = {
    title: 'title',
    tranche: 'A',
    available: 1123,
    annualised_return: 1456,
    term_remaining: 864000,
    ltv: 42341,
    amount: 1241
  }

  it(`renders a dialog component with
      - dialog title
      - loan title
      - amount available
      - term term_remaining
      - investment amount form, containing
        - label
        - input
        - submit button`, () => {
    const wrapper = shallow(<InvestDialog loan={fakeLoan} onSubmitInvestmentAmount={() => {}} />)
    expect(wrapper.find('dialog').length).toEqual(1)
    expect(wrapper.find('[data-test="title"]').text().length).toBeGreaterThan(5)
    expect(wrapper.find('[data-test="loan-title"]').text()).toEqual('title')
    expect(wrapper.find('[data-test="amount_available"]').text()).toEqual('£1,123')
    expect(wrapper.find('[data-test="term_remaining"]').text()).toMatch('mockFormatTermRemaining-864000')

    expect(wrapper.find('form').length).toEqual(1)
    expect(wrapper.find('label[htmlFor="invest--investment-amount"]').length).toEqual(1)
    expect(wrapper.find('input[type="number"]#invest--investment-amount').length).toEqual(1)
    expect(wrapper.find('button[type="submit"]').length).toEqual(1)
  })

  it('triggers onSubmitInvestmentAmount handler with form data when clicked', () => {
    const mockHandleSubmitInvestmentAmount = jest.fn()
    const wrapper = mount(<InvestDialog loan={fakeLoan} onSubmitInvestmentAmount={mockHandleSubmitInvestmentAmount} />)
    wrapper.find('input#invest--investment-amount').node.value = '12345'
    wrapper.find('form').simulate('submit')
    expect(mockHandleSubmitInvestmentAmount).toBeCalledWith(12345)
  })
})