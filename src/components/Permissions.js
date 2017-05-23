import React, { Component } from 'react';
import { connect } from 'react-redux'
import Groups from './Groups'
import GroupsAndUsers from './GroupsAndUsers'
import Navigation from './AppBar'
import Modal from './Modal'
import { getGroups,
        getUsers,
        addPermissionToUser,
        addPermissionToGroup,
        openModal,
        getSubjects } from '../Actions'

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

  _openModal = () => {
    this.setState({
      modalTitle: 'Add permisssion to user',
      layout: 'permissionToUser'
    })
    this.props.openModal()
  }

  _permissionToGroup = () => {
    this.setState({
      modalTitle: 'Add permisssion to Group',
      layout: 'permissionToGroup'
    })
    this.props.openModal()
  }

  render() {
    return (
      <div>
        <Navigation/>
        <Groups
          groups={this.props.groups}
          permissionToGroup={this._permissionToGroup}
          users={this.props.users}
        />
        <br />
        <br />
        <GroupsAndUsers
          groups={this.props.groups}
          users={this.props.users}
          permissionToUser={this._openModal}
        />

        <Modal
          title={this.state.modalTitle}
          open={this.props.modal.modalVisible}
          layout={this.state.layout}
          permissionToUser={this._handlePermissionToUserSubmit}
          permissionToGroup={this._handlePermissionToGroupSubmit}
          groups={this.props.groups}
          users={this.props.users}
          subjects={this.props.subjects}
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
