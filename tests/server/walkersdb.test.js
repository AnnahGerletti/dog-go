const test = require('ava')
const knex = require('knex')

const config = require('../../knexfile').test
const walkers = require('../../server/db/walkerdb')

const users = require('../../server/lib/users')


test.beforeEach(t => {
  t.context.db = knex(config)
  return t.context.db
    .migrate.latest()
    .then(() => t.context.db.seed.run())
})

test.afterEach(t => t.context.db.destroy())

test('There are Walkers in the Walker Table', t => {
  return walkers
    .getWalkers(t.context.db)
    .then(actual => t.truthy(actual))
})

test('There is an individual Walker in the Walker Table', t => {
  return walkers
    .getWalker(1, t.context.db)
    .then(actual => t.truthy(actual))
})

test('A Walker can be inserted into the Walker Table', t => {
    return users
      .create('TestAnimal', 'password', t.context.db)
      .then(actual => t.truthy(actual))
      var aWalker = { id: 1, name: "John", address: "123 Square Rd", phone:"555-5555", postCode:"6011", email:"John@example.com", user_id: 5}
      return walkers
        .insertWalker(aWalker, t.context.db )
        .then(actual => t.truthy(actual))
})
