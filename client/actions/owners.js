import request from '../utils/api'

export function
receiveDogsAction(dogs) {
  return{
    type: 'RECEIVE_DOGS',
    dogs
  }
}

export function receiveOwnersRequest (owner) {
  return dispatch => {
    return request('get', '/owners', owner)
      .then(res => {
        dispatch(receiveDogsAction(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}

export function ownerWalkRequest(request) {
  return {
    type: 'SEND_REQUEST',
    request
  }
}

export function sendWalkRequest (dog_id) {
  return dispatch => {
    return request('post', '/walkrequest/' + dog_id)
      .then(res => {
        dispatch(ownerWalkRequest(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}
