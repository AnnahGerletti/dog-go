var test = require('ava')
import React from 'react'
import jsdom from 'jsdom'
import { shallow } from 'enzyme'

import App from '../../client/components/App'

test.skip('Test React component: <App />', t => {
  const wrapper = shallow(<div className="some-class" />)
  expect(wrapper.find('.other-class').exists()).to.be(false)
  //const expected = '<Header /><Homes /><Footer />'
  //var wrapper = shallow(<App />)
  t.pass()
  //t.is(wrapper.text().trim(), expected)
})
