import React, { Component } from 'react';
import { connect } from 'react-redux'
import Groups from './Groups'
import * as types from '../Actions/types'
import GroupsAndUsers from './GroupsAndUsers'
import Navigation from './AppBar'
import Modal from './Modal'
import { getGroups,
        getUsers,
        addPermissionToUser,
        addPermissionToGroup,
        openModal,
        getSubjects,
        addUserToGroup,
        removeUsersFromGroup,
        clearPermissionsFromUser,
        clearPermissionsFromGroup
      } from '../Actions'

class Permissions extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalTitle: 'Modal Title',
      layout: null
    }
  }

  componentWillMount() {
    this.props.getGroups()
    this.props.getUsers()
    this.props.getSubjects()
  }

  _handlePermissionToUserSubmit = (user_id, permission, subject_id) => {
    this.props.addPermissionToUser({ user_id, permission, subject_id })
  }
  _handlePermissionToGroupSubmit = (group_id, permission, subject_id) => {
    this.props.addPermissionToGroup({ group_id, permission, subject_id })
  }
  _handleUserToGroupSubmit = (user_id, group_id) => {
    this.props.addUserToGroup({ user_id, group_id })
  }
  _handleRemoveuserFromGroup = (group_id) => {
    this.props.removeUsersFromGroup(group_id)
  }
  _handleClearPermissionsSubmit = (entityInfo) => {
    debugger;
    entityInfo.entity == 'user' ? this.props.clearPermissionsFromUser(entityInfo.id) :
    this.props.clearPermissionsFromGroup(entityInfo.id)
  }

  _openModal = () => {
    this.setState({
      modalTitle: 'Add permisssion to user',
      layout: 'permissionToUser'
    })
    this.props.openModal()
  }

  _closeModal = (dispatch) => {
    dispatch(types.CLOSE_MODAL)
  }

  _permissionToGroup = () => {
    this.setState({
      modalTitle: 'Add permisssion to Group',
      layout: 'permissionToGroup'
    })
    this.props.openModal()
  }

  _userToGroup = () => {
    this.setState({
      modalTitle: 'Add user to Group',
      layout: 'userToGroup'
    })
    this.props.openModal()
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Groups
          groups={this.props.groups}
          users={this.props.users}
          permissionToGroup={this._permissionToGroup}
          userToGroup={this._userToGroup}
          removeUsersFromGroup={this._handleRemoveuserFromGroup}
          clearPermissions={this._handleClearPermissionsSubmit}
        />
        <br />
        <br />
        <GroupsAndUsers
          groups={this.props.groups}
          users={this.props.users}
          permissionToUser={this._openModal}
          permissionToGroup={this._permissionToGroup}
          userToGroup={this._userToGroup}
          clearPermissions={this._handleClearPermissionsSubmit}
        />

        <Modal
          title={this.state.modalTitle}
          open={this.props.modal.modalVisible}
          layout={this.state.layout}
          permissionToUser={this._handlePermissionToUserSubmit}
          permissionToGroup={this._handlePermissionToGroupSubmit}
          userToGroup={this._handleUserToGroupSubmit}
          groups={this.props.groups}
          users={this.props.users}
          subjects={this.props.subjects}
          closeModal={this._closeModal}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGroups: () => {
      dispatch(getGroups())
    },
    getUsers: () => {
      dispatch(getUsers())
    },
    addPermissionToUser: (permissionData) => {
      dispatch(addPermissionToUser(permissionData))
    },
    getSubjects: () => {
      dispatch(getSubjects())
    },
    addPermissionToGroup: (permissionData) => {
      dispatch(addPermissionToGroup(permissionData))
    },
    addUserToGroup: (groupData) => {
      dispatch(addUserToGroup(groupData))
    },
    removeUsersFromGroup: (groupId) => {
      dispatch(removeUsersFromGroup(groupId))
    },
    clearPermissionsFromGroup: (id) => {
      dispatch(clearPermissionsFromGroup(id))
    },
    clearPermissionsFromUser: (id) => {
      dispatch(clearPermissionsFromUser(id))
    },
    openModal: () => {
      dispatch(openModal())
    }
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    users: state.users,
    modal: state.modal,
    subjects: state.subjects,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permissions)
