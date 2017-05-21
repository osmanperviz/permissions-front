import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroupTable from './GroupTable'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class Groups extends Component {


  render() {
    console.log('list', this.props)
    return (
      <Card>
        <CardHeader title="Groups"/>

        <CardActions>
          <FlatButton label="Add User" />
          <FlatButton label="Remove Users" />
          <FlatButton label="Add Permission" />
          <FlatButton label="Remove Permissions" />
        </CardActions>

        <CardText >
          <GroupTable groups={this.props.groups}/>
        </CardText>

      </Card>
    )
  }
};

export default Groups;
