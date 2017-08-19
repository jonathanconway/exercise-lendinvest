import React from 'react'
import { shallow } from 'enzyme'

import Loan from '../Loan'

describe('<Loan />', () => {
  describe('loan details', () => {
    let fakeLoan = {
      title: 'title',
      tranche: 'A',
      available: 1123,
      annualised_return: 1456,
      ltv: 42341,
      amount: 1241
    }

    const oneDaySeconds = 60 * 60 * 24;

    it('renders title, tranche and monetary figures, properly formatted', () => {
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="title"]').text()).toMatch(fakeLoan.title)
      expect(wrapper.find('[data-test="tranche"]').text()).toMatch(fakeLoan.tranche.toString())
      expect(wrapper.find('[data-test="available"]').text()).toMatch('£1,123')
      expect(wrapper.find('[data-test="annualised_return"]').text()).toMatch('£1,456')
      expect(wrapper.find('[data-test="ltv"]').text()).toMatch('£42,341')
      expect(wrapper.find('[data-test="amount"]').text()).toMatch('£1,241')
    })

    describe('renders term remaining, properly formatted, for 10 days, 0 monthss', () => {
      fakeLoan.term_remaining = 864000
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('10 days')
    })

    describe('renders term remaining, properly formatted, for 1 day, 0 months', () => {
      fakeLoan.term_remaining = oneDaySeconds
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('1 day')
    })

    describe('renders term remaining, properly formatted, for 1 day, 1 month', () => {
      fakeLoan.term_remaining = (oneDaySeconds * 32)
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('1 month, 1 day')
    })

    describe('renders term remaining, properly formatted, for 1 day, 2 months', () => {
      fakeLoan.term_remaining = (oneDaySeconds * 62)
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('2 months, 1 day')
    })

    describe('renders term remaining, properly formatted, for 0 days, 1 month', () => {
      fakeLoan.term_remaining = (oneDaySeconds * 31)
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('1 month')
    })

    describe('renders term remaining, properly formatted, for 0 days, 2 months', () => {
      fakeLoan.term_remaining = (oneDaySeconds * 61)
      const wrapper = shallow(<Loan loan={fakeLoan} />)
      expect(wrapper.find('[data-test="term_remaining"]').text()).toEqual('2 months')
    })

  })
})