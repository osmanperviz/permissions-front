import * as types from '../Actions/types'

function users(state = {}, action) {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return [...state, ...action.users ]
      break;

    default:
      return state
  }
}
export default users
