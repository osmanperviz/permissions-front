import { fork, put, call, select, takeLatest,takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performGetGroups(request){
  try {
    const groups = yield call(Api.get, '/groups')
    yield put({type: types.FETCH_GROUP_SUCCESS, groups})
  } catch (err) {

  }
}

function* watchGetGroups() {
  yield takeLatest(types.GET_ALL_GROUPS, performGetGroups);
}

export default [
  fork(watchGetGroups),

]
