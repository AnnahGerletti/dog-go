import request from '../utils/api'
import { receiveLogin } from './login'
import { saveUserToken } from '../utils/auth'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

function requestRegister (creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export function registerError (message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function registerUser (creds,callback) {
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestRegister(creds))

    return request('post', '/register', creds)
      .then((response) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(registerError(response.body.message))
          return Promise.reject(response.body.message)
        } else {
          // If login was successful, set the token in local storage
          const userInfo = saveUserToken(response.body.token)
          // Dispatch the success action
          dispatch(receiveLogin(userInfo))
          callback()
        }
      }).catch(err => {
        dispatch(registerError(err.message))
      })
  }
}

export const addWalkerRequest = (walker) => {
  return {
    type: 'ADD_WALKER',
    walker
  }
}

export function postWalkerRequest (walker) {
  return (dispatch) => {
    return request('post', '/walkers', walker)
      .then(res => {
        dispatch(addWalkerRequest(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}

export const addOwnerRequest = (owner) => {
  return {
    type: 'ADD_OWNER',
    owner
  }
}
export function postOwnerRequest (owner) {
  return (dispatch) => {
    return request('post', '/owners', owner)
      .then(res => {
        dispatch(addOwnerRequest(res.body))
      })
      .catch(err => {
        console.error(err.message)
        return
      })
  }
}

export const addDogDetails = (dog) => {
  return{
    type: 'ADD_DOG'.
    dog
  }
}

export function postDogDetails (dog) {
  return(dispatch) => {
    return request('post', '/dog', dog)
      .then(res =>{
        dispatch(addDogDetails(req.body))
      })
      .catch(err =>{
        console.error(err.message)
        return
      })
  }
}
