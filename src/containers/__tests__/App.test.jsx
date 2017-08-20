import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

jest.mock('../../../data/current-loans.json', () => ({
  loans: [{}, {}]
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
})