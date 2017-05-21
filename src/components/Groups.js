import React, { Component } from 'react';
import { connect } from 'react-redux'
import GroupTable from './GroupTable'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



class GroupsList extends Component {

  

  render() {
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
          <GroupTable />
        </CardText>

      </Card>
    )
  }
};

export default GroupsList;
