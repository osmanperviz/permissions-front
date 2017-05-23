import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroupTable from './GroupTable'
import Modal from './Modal'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class Groups extends Component {

  render() {
    return (
      <Card>
        <CardHeader title="Groups"/>
        <CardText >
          <GroupTable
            groups={this.props.groups}
            permissionToGroup={this.props.permissionToGroup}
          />
        </CardText>

      </Card>

    )
  }
};

export default Groups;
