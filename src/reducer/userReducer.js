import * as types from '../Actions/types'

function users(state = {}, action) {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return [...state, ...action.users ]
      break;

    case types.SUCCESS_ASSIGN_PERMISSION:
      return state.map((user) => user.id === action.user.id ?
          {...user, permissions: action.user.permissions} : user )
      break;

    case types.CLEAR_PERMISSIONS_FROM_USER_SUCCESS:
    debugger
      return state.map((user) => user.id === action.user.id ?
          {...user, permissions: action.user.permissions} : user )
      break;

    default:
      return state
  }
}
export default users
