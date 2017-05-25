import React, { Component } from 'react';
import GroupsAndUsersTable from './GroupsAndUsersTable'

import {Card, CardHeader, CardText} from 'material-ui/Card';



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
            permissionToGroup={this.props.permissionToGroup}
            usersToGroup={this.props.userToGroup}
          />
        </CardText>

      </Card>

    )
  }
};

export default GroupsAndUsers;
