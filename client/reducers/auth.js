import { LOGOUT_SUCCESS } from '../actions/logout'
import { REGISTER_REQUEST, REGISTER_FAILURE } from '../actions/register'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login'
import { isAuthenticated, getUserTokenInfo } from '../utils/auth'
import {get, set} from '../utils/localstorage'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: '',
  passwordNeeded: get('passNeeded') || false
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case LOGIN_SUCCESS:
      set('passNeeded', false)
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        passwordNeeded: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
    case REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'ADD_OWNER':
      set('passNeeded', true)
      return {
        ...state,
        passwordNeeded: true
      }
    case 'ADD_WALKER':
      set('passNeeded', true)
      return {
        ...state,
        passwordNeeded: true
      }
    default:
      return state
  }
}
