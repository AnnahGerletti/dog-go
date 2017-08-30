import React from 'react'
var test = require('ava')
import '../setup-dom'
import {Component} from 'react'
import { shallow, mount } from 'enzyme'
import jsdom from 'jsdom'
import {Provider} from 'react-redux'

import App from '../../../client/components/App'
import DogForm from '../../../client/components/DogForm'
import store from '../../../client/store'

test('Test React component: <App />', t => {
  const wrapper = mount(<Provider store={store}><App/></Provider>)
  t.true(wrapper.find('.container').exists())
})

test('Test React component: <DogForm />', t => {
  const wrapper = mount(<Provider store={store}><DogForm/></Provider>)
  t.true(wrapper.find('.dogForm').exists())
})
