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

function* performAddPermissonToGroups(request){
  try {
    debugger
    const { group_id, permission, subject_id } = request.permissionData
    const params = { permission_name: permission, subject_id: subject_id }
    const group = yield call(Api.post, `/groups/${group_id}/add_permission`, params)
    debugger;
    yield put({type: types.CLOSE_MODAL})
    yield put({type: types.SUCCESS_ASSIGN_PERMISSION_TO_GROUP, group})
  } catch (err) {

  }
}

function* watchGetGroups() {
  yield takeLatest(types.GET_ALL_GROUPS, performGetGroups);
}

function* watchPermissionToGroups() {
  yield takeEvery(types.ADD_PERMISSION_TO_GROUP, performAddPermissonToGroups);
}

export default [
  fork(watchGetGroups),
  fork(watchPermissionToGroups),

]
