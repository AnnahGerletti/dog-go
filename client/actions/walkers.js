import request from '../utils/api'

export const receiveWalkerAction = (walker) => {
  return {
    type: 'RECEIVE_WALKER',
    walker
  }
}

export function receiveWalkerRequest (walker) {
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
