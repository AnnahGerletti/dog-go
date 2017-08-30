import {combineReducers} from 'redux'

import auth from './auth'
import owners from './owners'
import walkers from './walkers'
import dogs from './dogs'
import walkRequests from './walkrequests'

const reducers = combineReducers({
  auth,
  owners,
  walkers,
  dogs,
  walkRequests
})

export default reducers
