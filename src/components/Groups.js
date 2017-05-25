import React, { Component } from 'react';
import GroupTable from './GroupTable'

import {Card, CardHeader, CardText} from 'material-ui/Card';



class Groups extends Component {

  render() {
    console.error('error',this.props);
    return (
      <Card>
        <CardHeader title="Groups"/>
        <CardText >
          <GroupTable
            groups={this.props.groups}
            userToGroup={this.props.userToGroup}
            permissionToGroup={this.props.permissionToGroup}
            removeUsersFromGroup={this.props.removeUsersFromGroup}
          />
        </CardText>

      </Card>

    )
  }
};

export default Groups;
