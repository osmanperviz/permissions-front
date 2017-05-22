import React, { Component } from 'react';
import { connect } from 'react-redux'
import Groups from './Groups'
import GroupsAndUsers from './GroupsAndUsers'
import Navigation from './AppBar'
import { getGroups, getUsers } from '../Actions'

class Permissions extends Component {

  componentWillMount() {
    this.props.getGroups()
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        <Navigation />
        <Groups groups={this.props.groups} />
        <GroupsAndUsers groups={this.props.groups} users={this.props.users} />
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
    }
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
    users: state.users,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permissions)
