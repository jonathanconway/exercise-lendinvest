import React from 'react'
import { shallow, mount } from 'enzyme'

import Loan from '../Loan'

jest.mock('../formatters', () => ({
  formatTermRemaining: input => `mockFormatTermRemaining-${input}`
}))

describe('<Loan />', () => {

  let fakeLoan = {
    id: '1',
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
      const wrapper = shallow(<Loan loan={fakeLoan} onClickInvest={() => {}} />)
      expect(wrapper.find('[data-test="title"]').html()).toMatch(fakeLoan.title)
      expect(wrapper.find('[data-test="tranche"]').html()).toMatch(fakeLoan.tranche.toString())
      expect(wrapper.find('[data-test="available"]').text()).toMatch('£1,123')
      expect(wrapper.find('[data-test="annualised_return"]').text()).toMatch('£1,456')
      expect(wrapper.find('[data-test="ltv"]').text()).toMatch('£42,341')
      expect(wrapper.find('[data-test="amount"]').text()).toMatch('£1,241')
      expect(wrapper.find('[data-test="term_remaining"]').text()).toMatch('mockFormatTermRemaining-864000')
    })
  })

  describe('invest button', () => {
    it('renders with text', () => {
      const wrapper = shallow(<Loan loan={fakeLoan} onClickInvest={() => {}} />)
      const button = wrapper.find('[data-test="invest"]')
      expect(button).toHaveLength(1)
      expect(button.text().length).toBeGreaterThan(5)
    })

    it('triggers onClickInvest handler when clicked, passing loan id', () => {
      const mockHandleClickInvest = jest.fn()
      const wrapper = mount(<Loan loan={fakeLoan} onClickInvest={mockHandleClickInvest} />)
      expect(mockHandleClickInvest).not.toHaveBeenCalled()
      wrapper.find('button[data-test="invest"]').simulate('click')
      expect(mockHandleClickInvest).toHaveBeenCalledWith('1')
    })
  })

  describe('status indicator', () => {
    it('renders, blank by default', () => {
      const wrapper = shallow(<Loan loan={fakeLoan} onClickInvest={() => {}} />)
      expect(wrapper.find('[data-test="status"]')).toHaveLength(1)
      expect(wrapper.find('[data-test="status"] *')).toHaveLength(0)
    })

    it('renders message if isInvested of loan prop set', () => {
      fakeLoan.isInvested = true
      const wrapper = shallow(<Loan loan={fakeLoan} onClickInvest={() => {}} />)
      expect(wrapper.find('[data-test="status"]').node.props.children.length).toBeGreaterThan(3)
      expect(wrapper.find('[data-test="status"]')).toHaveLength(1)
    })
  })
})