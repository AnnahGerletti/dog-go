import React from 'react'
var test = require('ava')
import {Component} from 'react'

import jsdom from 'jsdom'
import { shallow } from 'enzyme'


import App from '../../client/components/App'

// const path = require('path')
// const appPath = path.resolve
// console.log("path location :", path.resolve('.'))




test.only('Test React component: <App />', t => {

  const wrapper = shallow(<App />)
  expect(wrapper.find('container').exists()).to.be(false)
  //const expected = '<Header /><Homes /><Footer />'
  //var wrapper = shallow(<App />)
  t.end()
  //t.is(wrapper.text().trim(), expected)
})
