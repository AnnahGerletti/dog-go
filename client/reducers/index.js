import {combineReducers} from 'redux'

import auth from './auth'
import quote from './quote'
import register from './register'

const reducers = combineReducers({
  auth,
  quote,
  register
})

export default reducers
