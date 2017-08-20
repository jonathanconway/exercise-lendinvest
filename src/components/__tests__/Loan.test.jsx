import React from 'react'
import { shallow, mount } from 'enzyme'

import Loan from '../Loan'

jest.mock('../formatters', () => ({
  formatTermRemaining: input => `mockFormatTermRemaining-${input}`
}))

describe('<Loan />', () => {

  let fakeLoan = {
    title: 'title',
    tranche: 'A',
    available: 1123,
    annualised_return: 1456,
    term_remaining: 864000,
    ltv: 42341,
    amount: 1241
  }

  describe('loan details', () => {
    it('renders title, tranche and monetary figures, properly formatted', () => {
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="title"]').text()).toMatch(fakeLoan.title)
      expect(wrapper.find('[data-test="tranche"]').text()).toMatch(fakeLoan.tranche.toString())
      expect(wrapper.find('[data-test="available"]').text()).toMatch('£1,123')
      expect(wrapper.find('[data-test="annualised_return"]').text()).toMatch('£1,456')
      expect(wrapper.find('[data-test="ltv"]').text()).toMatch('£42,341')
      expect(wrapper.find('[data-test="amount"]').text()).toMatch('£1,241')
      expect(wrapper.find('[data-test="term_remaining"]').text()).toMatch('mockFormatTermRemaining-864000')
    })
  })

  describe('invest button', () => {
    it('renders with text', () => {
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      const button = wrapper.find('button[data-test="invest"]')
      expect(button.length).toEqual(1)
      expect(button.text().length).toBeGreaterThan(5)
    })

    it('triggers onClickInvest handler when clicked', () => {
      const mockHandleClickInvest = jest.fn()
      const wrapper = mount(<Loan loan={fakeLoan} onClickInvest={mockHandleClickInvest} />)
      wrapper.find('button[data-test="invest"]').simulate('click')
      expect(mockHandleClickInvest).toHaveBeenCalled()
    })
  })

})