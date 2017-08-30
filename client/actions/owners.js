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
    return request('get', '/owners')
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
    type: 'SEND_WALK_REQUEST',
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

export function receiveWalkAction(request) {
  return {
    type: 'RECEIVE_WALK_REQUEST',
    request
  }
}

export function receiveWalkRequest() {
  return dispatch => {
    return request('get', '/walkrequest', request)
      .then(res => {
        dispatch(receiveWalkAction(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}

//move to walk requests action
function receiveWalkRequestFR (walkRequests) {
  return {
    type: 'RECEIVE_WALK_REQUESTS_FR',
    walkRequests
  }
}

export function getWalkRequestsFR (cb ) {
  return(dispatch) => {
    return request('get', '/walkrequest')
      .then(res =>{
        dispatch(receiveWalkRequestFR(res.body))
        if(cb) {cb()}
      })
      .catch(err =>{
        console.error(err.message)
        return
      })
  }
}
