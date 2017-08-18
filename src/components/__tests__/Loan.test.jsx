import React from 'react'
import { shallow } from 'enzyme'

import Loan from '../Loan'

describe('<Loan />', () => {
  it('renders with loan details, properly formatted', () => {
    const fakeLoan = {
      title: 'title',
      tranche: 'A',
      available: 1123,
      annualised_return: 1456,
      term_remaining: 864000,
      ltv: 42341,
      amount: 1241
    }
    const wrapper = shallow(<Loan loan={fakeLoan} />)
    expect(wrapper.find('[data-test="title"]').text()).toMatch(fakeLoan.title)
    expect(wrapper.find('[data-test="tranche"]').text()).toMatch(fakeLoan.tranche.toString())
    expect(wrapper.find('[data-test="available"]').text()).toMatch('£1,123')
    expect(wrapper.find('[data-test="annualised_return"]').text()).toMatch('£1,456')
    expect(wrapper.find('[data-test="term_remaining"]').text()).toMatch('864000')
    expect(wrapper.find('[data-test="ltv"]').text()).toMatch('£42,341')
    expect(wrapper.find('[data-test="amount"]').text()).toMatch('£1,241')
  })
})