import { fork, put, call, select, takeLatest,takeEvery } from "redux-saga/effects"
// import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performGetGroups(request){
  debugger;
  try {

  } catch (err) {

  }
}

function* watchGetGroups() {
  yield takeLatest(types.GET_ALL_GROUPS, performGetGroups);
}

export default [
  fork(watchGetGroups),

]
