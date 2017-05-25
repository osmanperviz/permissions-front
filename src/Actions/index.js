import * as types from './types'

export function getGroups() {
  return {
    type: types.GET_ALL_GROUPS,
  }
}
export function getUsers() {
  return {
    type: types.GET_ALL_USERS,
  }
}

export function addPermissionToUser(permissionData) {
  return {
    type: types.ADD_PERMISSION_TO_USER,
    permissionData
  }
}

export function addPermissionToGroup(permissionData) {
  return {
    type: types.ADD_PERMISSION_TO_GROUP,
    permissionData
  }
}

export function addUserToGroup(groupData) {
  return {
    type: types.ADD_USER_TO_GROUP,
    groupData
  }
}

export function removeUsersFromGroup(groupId) {
  return {
    type: types.REMOVE_USERS_FROM_GROUP,
    groupId
  }
}

export function getSubjects() {
  return {
    type: types.GET_SUBJECTS,
  }
}
export function openModal() {


  return {
    type: types.OPEN_MODAL,
  }
}
