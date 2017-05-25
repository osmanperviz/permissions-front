import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class GroupTable extends React.Component {

    state = {
     selectedGroup: '',
   };

  _handleRowSelection = (index) => {
    this.setState({
      selectedGroup: this.props.groups[index],
    });
  };

  _handleClearGroup = () => {
    const groupId = this.state.selectedGroup.id
    this.props.removeUsersFromGroup(groupId)
    this.setState({
      selectedGroup: '',
    });
  };

  render(){
    return(
      <Table onCellClick={this._handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Users</TableHeaderColumn>
            <TableHeaderColumn>Actions</TableHeaderColumn>
            <TableHeaderColumn><RaisedButton onClick={this._handleClearGroup} label="Clear Group" primary={true} /></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.groups.length > 0 ? this.props.groups.map((group) => {
            return <TableRow key={group.id} rowNumber={group.id}>
              <TableRowColumn>{group.name}</TableRowColumn>

              <TableRowColumn>{group.users.map((user) => `${user.username} ,`)}</TableRowColumn>
              <TableRowColumn>
                 <FlatButton primary={true} onClick={this.props.permissionToGroup}>Add Permission</FlatButton>
                 <FlatButton primary={true} onClick={this.props.userToGroup}>Add user</FlatButton>
                 {/* <FlatButton primary={true}>Clear Permissions</FlatButton>
                 <FlatButton primary={true}>Clear Users</FlatButton> */}
              </TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow>
          }) : null }
        </TableBody>
      </Table>
    )
  }
};

export default GroupTable;
