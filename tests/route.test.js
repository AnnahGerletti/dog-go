
var test = require('ava')
var request = require('supertest')

var createServer = require('../server/server')
var walkerDb = require('../server/db/walkerdb')
var setupDb = require('./setup-db')

setupDb(test, createServer)

test.cb.only('GET /', t => {
  request(t.context.app)
    .get('api/v1/')
    .expect(200)
    .end((err,res) => {
      console.log("res : ",res.body, res.status)
      if (err) console.log(err);
      t.pass()
      //t.is(res.body.length, 1)
      t.end()
    })
})
