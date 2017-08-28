import test from 'ava'
import '../setup-dom'
// var register = require('../../client/reducers/register')
import walkers from '../../../client/reducers/walkers'
import owners from '../../../client/reducers/owners'
import dogs from '../../../client/reducers/dogs'

test('initial state empty', t => {
  const expected = []
  const actual = walkers(undefined, {})
  t.deepEqual(actual, expected)
})

test('initial state empty', t => {
  const expected = []
  const actual = dogs(undefined, {})
  t.deepEqual(actual, expected)
})

test('initial state empty', t => {
  const expected = []
  const actual = owners(undefined, {})
  t.deepEqual(actual, expected)
})


test('state adds a walker', t => {
  const state = []
  const action = {
    type: 'ADD_WALKER',
    walker: {name: 'timmy'}
  }
  const expected = [{name: 'timmy'}]
  const actual = walkers(state, action)

  t.deepEqual(actual, expected)
})

test('state adds an owner', t => {
  const state = []
  const action = {
    type: 'ADD_OWNER',
    owner: {name:'bob'}
  }
  const expected= [{name: 'bob'}]
  const actual = owners(state, action)

  t.deepEqual(actual, expected)
})

test('state adds a dog', t => {
  const state = []
  const action = {
    type: 'ADD_DOG',
    dog: {name: 'spot'}
  }
  const expected = [{name: 'spot'}]
  const actual = register(state, action)

  t.deepEqual(actual, expected)
})
