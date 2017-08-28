export function addDogDetails(dog) {
  return{
    type: 'ADD_DOG',
    dog
  }
}

export function postDogDetails (dog, cb ) {
  return(dispatch) => {
    return request('post', '/dogs', dog)
      .then(res =>{
        dispatch(addDogDetails(res.body))
        cb()
      })
      .catch(err =>{
        console.error(err.message)
        return
      })
  }
}
