import React from 'react'
var test = require('ava')
import '../setup-dom'
import {Component} from 'react'
import { shallow } from 'enzyme'
import jsdom from 'jsdom'

import App from '../../../client/components/App'

test('Test React component: <App />', t => {
  const wrapper = shallow(<App />)
  t.false(wrapper.find('container').exists())
})
