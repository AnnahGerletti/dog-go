import {combineReducers} from 'redux'

import auth from './auth'
import owners from './owners'
import walkers from './walkers'
import dogs from './dogs'

const reducers = combineReducers({
  auth,
  owners,
  walkers,
  dogs
})

export default reducers
