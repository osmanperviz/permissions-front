import * as types from '../Actions/types'

function subjects(state = {}, action) {
  switch (action.type) {
    case types.FETCH_SUBJECTS_SUCCESS:
      return [...state, ...action.subjects ]
      break;

    default:
      return state
  }
}
export default subjects
