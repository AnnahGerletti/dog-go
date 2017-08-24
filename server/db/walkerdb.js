const insertWalker =(walker ,db) => {
  return db ('walkers')
    .insert(walker)
}
