import { combineReducers } from 'redux'
import groupReducer from './groupReducer'

const reducer = combineReducers(Object.assign({},{
  groups: groupReducer
}))

export default reducer
