import React from 'react';
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
    return(
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Permissions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.groups.length > 0 ? this.props.groups.map((group) => {
            return <TableRow key={group.id}>
              <TableRowColumn>{group.name}</TableRowColumn>

              <TableRowColumn>{group.permissions.map((permission) => `${permission.name} ,`)}</TableRowColumn>
            </TableRow>
          }) : null }

          { this.props.users.length > 0 ? this.props.users.map((user) => {
            return <TableRow key={user.id}>
              <TableRowColumn>{user.username}</TableRowColumn>

              <TableRowColumn>{user.permissions.map((permission) => `${permission.name} ,`)}</TableRowColumn>
            </TableRow>
          }) : null }
        </TableBody>
      </Table>
    )
  }
};

export default GroupAndUsersTable;
