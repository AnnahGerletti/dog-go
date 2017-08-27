var test = require('ava')
var nock = require('nock')
var sinon = require('sinon')
import '../setup-dom'
const createToken = require('../../server/lib/auth').createToken

import {registerUser} from '../../client/actions/register'
import {postWalkerRequest} from '../../client/actions/register'

var testUser = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

test.cb('registerUser', t => {
  const scope = nock('http://localhost:80')
  .post('/api/v1/register')
  .reply(200, {
    ok: true,
    message: 'Authentication successful'
  })

  const dispatch = sinon.stub()
    .callsFake(actual => {
      console.log(actual);
      t.deepEqual(actual.isAuthenticated, false)
      t.end()
      scope.done()
    })

  registerUser({username: testUser, password: 'password'})(dispatch)
})

test.cb('postWalkerRequest', t =>{
  // nock('http://localhost:3000')
  // .post('/api/v1/walkers',{
  //   name: testUser,
  //   email: `${testUser}@email.zzz`,
  //   address: '3 lane',
  //   phone: 34,
  //   postCode: 45645
  // })
  // .reply(201, {
  //   ok:true,
  //   message: 'yo'
  // })
  // postWalkerRequest()((actual)=>{
  //   console.log(actual);
  //   t.deepEqual()
  //   t.end()
  // })
})
