import { fork, put, call, takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../Actions/types'

function* performGetUsers(request){
  try {
    const users = yield call(Api.get, '/users')
    yield put({type: types.FETCH_USERS_SUCCESS, users})
  } catch (err) {
    console.error('error', err)
  }
}

function* performAddPermissonToUsers(request){
  try {
    const { user_id, permission, subject_id } = request.permissionData
    const params = { permission_name: permission, subject_id: subject_id }
    const user = yield call(Api.post, `/users/${user_id}/add_premission`, params)
    yield put({type: types.CLOSE_MODAL})
    yield put({type: types.SUCCESS_ASSIGN_PERMISSION, user})
  } catch (err) {
    console.error('error', err)
  }
}

function* performRemovePermissionsFromUser(request){
  try {
    const user = yield call(Api.get, `/users/${request.id}/remove_permissions`)
    yield put({ type: types.CLOSE_MODAL })
    yield put({type: types.CLEAR_PERMISSIONS_FROM_USER_SUCCESS, user})
  } catch (err) {
    console.error('error', err)
  }
}


function* watchGetUsers() {
  yield takeEvery(types.GET_ALL_USERS, performGetUsers);
}

function* watchPermissionToUser() {
  yield takeEvery(types.ADD_PERMISSION_TO_USER, performAddPermissonToUsers);
}

function* watchRemovePermissionsFromUser() {
  yield takeEvery(types.CLEAR_PERMISSIONS_FROM_USER, performRemovePermissionsFromUser);
}

export default [
  fork(watchGetUsers),
  fork(watchPermissionToUser),
  fork(watchRemovePermissionsFromUser),
]
