import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroupsAndUsersTable from './GroupsAndUsersTable'
import Modal from './Modal'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class GroupsAndUsers extends Component {

  render() {
    return (
      <Card>
        <CardHeader title="Groups And Users"/>
        <CardText >
          <GroupsAndUsersTable
            groups={this.props.groups}
            users={this.props.users}
            permissionToUser={this.props.permissionToUser}
          />
        </CardText>

      </Card>

    )
  }
};

export default GroupsAndUsers;
