import test from 'ava'
import request from 'supertest'

var createServer = require('../../../server/server')
var walkerDb = require('../../../server/db/walkerdb')
var setupDb = require('../setup-db')

setupDb(test, createServer)

test.cb('register', (t) => {
  request(t.context.app)
    .post('/api/v1/register')
    .send({username: 'bobs', password: 'b'})
    .end((err, res) => {
      t.true(res.body.token.length > 0)
      t.end()
    })
})
