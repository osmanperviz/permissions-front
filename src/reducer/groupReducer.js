import * as types from '../Actions/types'

function groups(state = {}, action) {
  switch (action.type) {
    case types.FETCH_GROUP_SUCCESS:
      return [...state, ...action.groups ]
      break;
    case types.SUCCESS_ASSIGN_PERMISSION_TO_GROUP:
    debugger;
      return [...state, ...action.group ]
      break;

    default:
      return state
  }
}
export default groups
