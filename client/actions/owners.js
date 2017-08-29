import request from '../utils/api'

export function
receiveDogsAction(dogs) {
  return{
    type: 'RECEIVE_DOGS',
    dogs
  }
}

export function receiveOwnersRequest () {
  return dispatch => {
    return request('get', '/owners/all')
      .then(res => {
        console.log('body', res.body)
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

export function sendWalkRequest (dog_id, cb) {
  return dispatch => {
    return request('post', '/walkrequest/' + dog_id)
      .then(res => {
        dispatch(ownerWalkRequest(res.body))
        cb()
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}
