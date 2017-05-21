import React, { Component } from 'react';
import { connect } from 'react-redux'
import Groups from './Groups'
import { getGroups } from '../Actions'

class Permissions extends Component {

  componentWillMount() {
    this.props.getGroups()
  }

  render() {
    console.log('permissions', this.props.groups)
    return (
      <Groups groups={this.props.groups} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getGroups: () => {
      dispatch(getGroups())
    }
  }
}

function mapStateToProps(state) {
  return {
    groups: state.groups,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permissions)
