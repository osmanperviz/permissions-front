import * as types from '../Actions/types'

function groups(state = {}, action) {
  switch (action.type) {
    case types.FETCH_GROUP_SUCCESS:
      return [...state, ...action.groups ]
      break;

    default:
      return state
  }
}
export default groups
