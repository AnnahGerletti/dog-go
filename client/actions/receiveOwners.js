import request from '../utils/api'


export function receiveOwnersAction(owner) {
  return{
    type: 'RECEIVE_OWNERS',
    owner
  }
}

export function receiveOwnersRequest (owner) {
  return dispatch => {
    return request('get', '/owners', owner)
      .then(res => {
        dispatch(receiveOwnersAction(res.body))
      })

      .catch(err => {
        console.error(err.message)
        return
      })
  }
}
