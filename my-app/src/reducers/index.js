import { combineReducers } from 'redux';
import GroupReducer from './groupreducer.js'
import PostReducer from './postreducer.js'
import UsersReducer from './usersreducer.js'

export default combineReducers({GroupReducer, PostReducer, UsersReducer})
