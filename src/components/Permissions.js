import React, { Component } from 'react';
import { connect } from 'react-redux'
import Groups from './Groups'
import {getGroups} from '../Actions'

class Permissions extends Component {

  componentDidMount() {
    this.props.getGroups()
  }

  render() {
    return (
    <Groups />
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
