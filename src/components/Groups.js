import React, { Component } from 'react';
import GroupTable from './GroupTable'

import {Card, CardHeader, CardText} from 'material-ui/Card';



class Groups extends Component {

  render() {
    return (
      <Card>
        <CardHeader title="Groups"/>
        <CardText >
          <GroupTable
            groups={this.props.groups}
            userToGroup={this.props.userToGroup}
            permissionToGroup={this.props.permissionToGroup}
            removeUsersFromGroup={this.props.removeUsersFromGroup}
            clearPermissions={this.props.clearPermissions}
          />
        </CardText>

      </Card>

    )
  }
};

export default Groups;
