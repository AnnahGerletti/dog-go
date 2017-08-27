import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import register from './register'
import receive from './owners'

const reducers = combineReducers({
  auth,
  quote,
  register,
  receive
})

export default reducers
