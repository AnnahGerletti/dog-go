import React from 'react'
var test = require('ava')
import '../setup-dom'
import {Component} from 'react'
import { shallow } from 'enzyme'
import jsdom from 'jsdom'



import App from '../../../client/components/App'

// const path = require('path')
// const appPath = path.resolve
// console.log("path location :", path.resolve('.'))




test('Test React component: <App />', t => {

  const wrapper = shallow(<App />)
  t.false(wrapper.find('container').exists())
  //const expected = '<Header /><Homes /><Footer />'
  //var wrapper = shallow(<App />)
  //t.is(wrapper.text().trim(), expected)
})
