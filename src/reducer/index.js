import { combineReducers } from 'redux'
import groupReducer from './groupReducer'
import usersReducer from './userReducer'

const reducer = combineReducers(Object.assign({},{
  groups: groupReducer,
  users: usersReducer
}))

export default reducer
