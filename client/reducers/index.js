import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import register from './register'
import walkerReducer from './walkers'

const reducers = combineReducers({
  auth,
  quote,
  register,
  walkerReducer
})

export default reducers
