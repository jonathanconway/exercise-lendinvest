import React from 'react'
import { shallow } from 'enzyme'

import TotalAvailable from '../TotalAvailable'

describe('<TotalAvailable />', () => {

  let fakeLoans = [{
    title: 'title',
    tranche: 'A',
    available: 1123,
    annualised_return: 1456,
    ltv: 42341,
    amount: 1241
  }, {
    title: 'title2',
    tranche: 'B',
    available: 3123,
    annualised_return: 2456,
    ltv: 82341,
    amount: 241
  }]

  it('renders the total amount due, correctly formatted', () => {
    const wrapper = shallow(<TotalAvailable loans={fakeLoans} />)
    expect(wrapper.text()).toMatch('£4,246')
  })

})