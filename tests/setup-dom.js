require('babel-register')

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')

const localStorage = {}

dom.window.localStorage = {
  getItem: () => {},
  setItem: () => {},
  removeItem: () => {}
}

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
