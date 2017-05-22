import { fork, put, call, takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performGetUsers(request){
  try {
    debugger;
    const users = yield call(Api.get, '/users')
    yield put({type: types.FETCH_USERS_SUCCESS, users})
  } catch (err) {

  }
}

function* watchGetUsers() {
  yield takeEvery(types.GET_ALL_USERS, performGetUsers);
}

export default [
  fork(watchGetUsers),

]
