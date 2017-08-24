
var test = require('ava')
var request = require('supertest')

var createServer = require('../server/server')
var walkerDb = require('../server/db/walkerdb')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('api/v1/secrets')
    .expect(403)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 1)
      t.end()
    })
})
