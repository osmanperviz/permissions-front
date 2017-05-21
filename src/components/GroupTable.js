import React from 'react';
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.groups.length > 0 ? this.props.groups.map((group) => {
            return <TableRow>
              <TableRowColumn>{group.name}</TableRowColumn>

              <TableRowColumn>{group.users.map((user) => `${user.username} ,`)}</TableRowColumn>
            </TableRow>
          }) : null

         }
        </TableBody>
      </Table>
    )
  }
};

export default GroupTable;
