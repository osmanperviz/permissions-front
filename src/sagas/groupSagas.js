import { fork, put, call, takeLatest,takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performRemoveUsersFromGroups(request){
  try {
    const groupId = request.groupId
    const group = yield call(Api.get, `/groups/${groupId}/remove_users_from_group`)
    yield put({ type: types.CLOSE_MODAL })
    yield put({type: types.REMOVE_USERS_FROM_GROUP_SUCCESS, group})
  } catch (err) {
    console.error('error', err)
  }
}

function* performRemovePermissionsFromGroup(request){
  try {
     const group = yield call(Api.get, `/groups/${request.id}/remove_permissions_from_group`)
     yield put({ type: types.CLOSE_MODAL })
     yield put({type: types.CLEAR_PERMISSIONS_FROM_GROUP_SUCCESS, group})
  } catch (err) {
    console.error('error', err)
  }
}

function* performGetGroups(request){
  try {
    const groups = yield call(Api.get, '/groups')
    yield put({type: types.FETCH_GROUP_SUCCESS, groups})
  } catch (err) {
    console.error('error', err)
  }
}

function* performAddPermissonToGroups(request){
  try {
    const { group_id, permission, subject_id } = request.permissionData
    const params = { permission_name: permission, subject_id: subject_id }
    const group = yield call(Api.post, `/groups/${group_id}/add_permission`, params)
    yield put({ type: types.CLOSE_MODAL })
    yield put({ type: types.SUCCESS_ASSIGN_PERMISSION_TO_GROUP, group })
  } catch (err) {
    console.error('error', err)
  }
}

function* performUserToGroup(request){
  try {
    const { group_id, user_id} = request.groupData
    const group = yield call(Api.post, `/groups/${group_id}/add_user`, { user_id: user_id })
    yield put({type: types.CLOSE_MODAL})
    yield put({type: types.ADD_USER_TO_GROUP_SUCCESS, group})
  } catch (err) {
    console.error('error', err)
  }
}



function* watchUserToGroup() {
  yield takeLatest(types.ADD_USER_TO_GROUP, performUserToGroup);
}

function* watchGetGroups() {
  yield takeLatest(types.GET_ALL_GROUPS, performGetGroups);
}

function* watchPermissionToGroups() {
  yield takeEvery(types.ADD_PERMISSION_TO_GROUP, performAddPermissonToGroups);
}

function* watchRemoveUsersFromGroup() {
  yield takeEvery(types.REMOVE_USERS_FROM_GROUP, performRemoveUsersFromGroups);
}

function* watchRemovePermissionsFromGroup() {
  yield takeEvery(types.CLEAR_PERMISSIONS_FROM_GROUP, performRemovePermissionsFromGroup);
}

export default [
  fork(watchGetGroups),
  fork(watchPermissionToGroups),
  fork(watchRemoveUsersFromGroup),
  fork(watchRemovePermissionsFromGroup),
  fork(watchUserToGroup),
]
