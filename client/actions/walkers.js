import request from '../utils/api'

export const receiveWalkerAction = (walker) => {
  console.log('action', walker);
  return {
    type: 'RECEIVE_WALKER',
    walker
  }
}

export function receiveWalkerRequest (walker) {
  console.log('action request', walker);
  return dispatch => {
    return request('get', '/walkers', walker)
      .then(res => {
        dispatch(receiveWalkerAction(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}
