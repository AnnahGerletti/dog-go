var test = require('ava')
var request = require('supertest')

var createServer = require('../../../server/server')
var walkerDb = require('../../../server/db/walkerdb')
var setupDb = require('../setup-db')

setupDb(test, createServer)

test.cb('POST api/v1/register', t => {
  request(t.context.app)
    .post('/api/v1/register')
    .send({username: 'bob', password: 'b'})
    .end((err,res) => {
      if (err) console.log(err)
      t.context.db('users')
      .then(data => {
        t.is(data.username, 'bob')
        t.end()
      })
    })
})

test.cb('API Call: Get /v1', (t)=> {
  request(t.context.app)
    .get('api/v1/walkers')
    .end((err, res) =>{
      console.log(res.body);
      //console.log('need the Api calls to work')
      t.is(res.body.length, undefined, 'get no response')
      t.is(res.status, 404, 'Status 404 confirmed')
      //t.pass()
      t.end()
    })
})
