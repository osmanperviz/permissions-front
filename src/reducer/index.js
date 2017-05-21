import { combineReducers } from 'redux'
import groupReducer from './groupReducer'

const reducer = combineReducers(Object.assign({},{
  groupReducer
}))

export default reducer
