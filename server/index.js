/* eslint no-console: "off" */
require('dotenv').config()
var createServer = require('./server')

var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(config)

var server = createServer(knex)

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Server listening on port', port)
})
