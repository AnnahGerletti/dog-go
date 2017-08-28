import {combineReducers} from 'redux'

import auth from './auth'
import register from './register'
import receive from './owners'
import walkerReducer from './walkers'
import dogs from './dogs'

const reducers = combineReducers({
  auth,
  register,
  receive,
  walkerReducer,
  dogs
})

export default reducers
