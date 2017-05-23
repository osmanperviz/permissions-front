import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class GroupTable extends React.Component {
  render(){
    return(
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Users</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.groups.length > 0 ? this.props.groups.map((group) => {
            return <TableRow key={group.id}>
              <TableRowColumn>{group.name}</TableRowColumn>

              <TableRowColumn>{group.users.map((user) => `${user.username} ,`)}</TableRowColumn>
              <TableRowColumn>
                 <FlatButton primary={true} onClick={this.props.permissionToGroup}>Add Permission</FlatButton>
                 <FlatButton primary={true}>Add user</FlatButton>
                 <FlatButton primary={true}>Clear Permissions</FlatButton>
                 <FlatButton primary={true}>Clear Users</FlatButton>
              </TableRowColumn>
            </TableRow>
          }) : null }
        </TableBody>
      </Table>
    )
  }
};

export default GroupTable;
