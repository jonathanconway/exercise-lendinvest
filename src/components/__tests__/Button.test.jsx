import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('<Button />', () => {
  it('renders with text', () => {
    const wrapper = shallow(<Button>hello</Button>)
    expect(wrapper.text()).toEqual('hello')
  })
})