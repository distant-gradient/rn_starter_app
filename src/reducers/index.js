import { combineReducers } from 'redux'
import count from './count' 
import albums from './albums' 
import auth from './auth' 
import feed from './feed' 

export default combineReducers({
  count,
  albums,
  auth,
  feed
})
