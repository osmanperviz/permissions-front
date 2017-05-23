import * as types from '../Actions/types'

 const initialState = {
  modalVisible: false
}

function modal(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {...state, modalVisible: true}
      break;

    case types.CLOSE_MODAL:
      return {...state, modalVisible: false}
      break;

    default:
      return state
  }
}
export default modal
