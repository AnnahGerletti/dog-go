
const getBooks = (db) => {
 return db('users')
   .join('owners', 'authors.id', '=', 'users.author_id')
   .join('walkers', 'genres.id', '=', 'users.genre_id')
   .select('*')
}

module.exports = {
 getBooks
}
