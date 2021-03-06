import * as types from '../Actions/types'

function groups(state = {}, action) {
  switch (action.type) {
    case types.FETCH_GROUP_SUCCESS:
      return [...state, ...action.groups ]
      break;

    case types.SUCCESS_ASSIGN_PERMISSION_TO_GROUP:
      return state.map((group) => group.id === action.group.id ?
          {...group, permissions: action.group.permissions} : group )
      break;

    case types.ADD_USER_TO_GROUP_SUCCESS:
      return state.map((group) => group.id === action.group.id ?
          {...group, users: action.group.users} : group )
      break;

    case types.REMOVE_USERS_FROM_GROUP_SUCCESS:
      return state.map((group) => group.id === action.group.id ?
          {...group, users: action.group.users} : group )
      break;

    case types.CLEAR_PERMISSIONS_FROM_GROUP_SUCCESS:
      return state.map((group) => group.id === action.group.id ?
          {...group, permissions: action.group.permissions} : group )
      break;

    default:
      return state
  }
}
export default groups
