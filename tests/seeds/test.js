exports.seed = (knex, Promise) => knex('users')
  .del()
  .then(() => Promise.all([
    knex('users').insert({ id: 1, username: 'aardvark', hash: Buffer.from('$argon2i$v=19$m=32768,t=4,p=1$wbzYVNa89LbWPbTtH6dYnQ$xoOnHlSOPwuFfEp61/5laRtNLp0fLJZ11aYXbYLwraA                                ') }),
    knex('users').insert({ id: 2, username: 'capybara', hash: Buffer.from('$argon2i$v=19$m=32768,t=4,p=1$+cuHWVljfFQJX0vHxxdTyA$bZO+nkLlNCdqk+OcKRK7lz0mXteAV5cqGUatXsc2vOA                                ') }),
    knex('users').insert({ id: 3, username: 'chinchilla', hash: Buffer.from('$argon2i$v=19$m=32768,t=4,p=1$+cuHWVljfFQJX0vHxxdTyA$bZO+nkLlNCdqk+OcKRK7lz0mXteAV5cqGUatXsc2vOA                                ') }),
    knex('users').insert({ id: 4, username: 'caviidae', hash: Buffer.from('$argon2i$v=19$m=32768,t=4,p=1$+cuHWVljfFQJX0vHxxdTyA$bZO+nkLlNCdqk+OcKRK7lz0mXteAV5cqGUatXsc2vOA                                ') }),
    knex('walkers').insert({ id: 1, name: "John", address: "123 Square Rd", phone:"555-5555", postCode:"6011", email:"John@example.com", user_id: 1}),
    knex('walkers').insert({ id: 2, name: "Brian", address: "456 Square Rd", phone:"555-5555", postCode:"6022", email:"brian@example.com", user_id: 2}),
    knex('owners').insert({id: 1, name: "Tintin", address: "26 Labrador Road", phone:"555-5526", postCode:"6011", email:"tintin@example.com", user_id:3}),
    knex('owners').insert({id: 2, name: "Philip", address: "12 Winston Road", phone:"555-5527", postCode:"6022", email:"winston@example.com", user_id:4}),
    knex('dogs').insert({id: 1, name: "Snowy", breed: "Terrier", age:"5", colour:"white", owner_id: 1})
  ]))
