import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import register from './register'
import receive from './owners'
import walkerReducer from './walkers'

const reducers = combineReducers({
  auth,
  quote,
  register,
  receive,
  walkerReducer
})

export default reducers
