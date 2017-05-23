import { fork, put, call, takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performGetSubjects(request){
  try {
    const subjects = yield call(Api.get, '/subjects')
    yield put({type: types.FETCH_SUBJECTS_SUCCESS, subjects})
  } catch (err) {

  }
}

function* watchGetSubjects() {
  yield takeEvery(types.GET_SUBJECTS, performGetSubjects);
}

export default [
  fork(watchGetSubjects),

]
