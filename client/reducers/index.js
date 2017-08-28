import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import register from './register'
import receive from './owners'
import walkerReducer from './walkers'
import dogs from './dogs'

const reducers = combineReducers({
  auth,
  quote,
  register,
  receive,
  walkerReducer,
  dogs
})

export default reducers
