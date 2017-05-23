import { combineReducers } from 'redux'
import groupReducer from './groupReducer'
import usersReducer from './userReducer'
import modalReducer from './modalReducer'
import subjectsReducer from './subjectReducer'

const reducer = combineReducers(Object.assign({},{
  groups: groupReducer,
  users: usersReducer,
  modal: modalReducer,
  subjects: subjectsReducer
}))

export default reducer
