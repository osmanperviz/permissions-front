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
