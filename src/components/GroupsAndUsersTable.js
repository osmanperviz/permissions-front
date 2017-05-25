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

class GroupAndUsersTable extends React.Component {
  render(){
    // console.log('grou', this.props)
    return(
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Permissions</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.groups.length > 0 ? this.props.groups.map((group) => {
            return <TableRow key={group.id}>
              <TableRowColumn>{group.name}</TableRowColumn>

              <TableRowColumn>{group.permissions.map((permission) => `${permission.name} ,`)}</TableRowColumn>
              <TableRowColumn>
                 <FlatButton primary={true} onClick={this.props.permissionToGroup}>Add Permission</FlatButton>
                 <FlatButton primary={true} onClick={this.props.usersToGroup}>Add user</FlatButton>
                 <FlatButton primary={true}>Clear Permissions</FlatButton>
                 <FlatButton primary={true}>Clear Users</FlatButton>
              </TableRowColumn>
            </TableRow>
          }) : null }

          { this.props.users.length > 0 ? this.props.users.map((user) => {
            return <TableRow key={user.id}>
              <TableRowColumn>{user.username}</TableRowColumn>

              <TableRowColumn>{user.permissions.map((permission) => `${permission.name} ,`)}</TableRowColumn>
              <TableRowColumn>
                 <FlatButton primary={true} onClick={this.props.permissionToUser}>Add Permission</FlatButton>
                 <FlatButton primary={true} onClick={this.props.usersToGroup}>Add to Group</FlatButton>
                 <FlatButton primary={true}>Clear Permissions</FlatButton>
                 <FlatButton primary={true}>Clear Groups</FlatButton>
              </TableRowColumn>
            </TableRow>
          }) : null }
        </TableBody>
      </Table>
    )
  }
};

export default GroupAndUsersTable;
