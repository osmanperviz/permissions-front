import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
try { injectTapEventPlugin(); } catch (e) { console.log(e) }

class UserToUserForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedUser: '',
      selectedGroup: '',
    }
  }

  _handleChangeUser = (event, index, value) => {
    this.setState({
      selectedUser: value
    })
  }

  _handleChangeGroup = (event, index, value) => {
    this.setState({
      selectedGroup: value
    })
  }


  _handleSubmit = () => {
    const { selectedUser, selectedGroup } = this.state
    this.props.handleSubmit(selectedUser, selectedGroup)
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit} >
        <div style={{display: 'flex'}}>
          <SelectField
            floatingLabelText="User"
            value={this.state.selectedUser}
            onChange={this._handleChangeUser}
          >
            {
              this.props.users.map((user) => ( <MenuItem key={user.id} value={user.id} primaryText={user.username} /> ))
            }
          </SelectField>

          <SelectField
            floatingLabelText="Group"
            value={this.state.selectedGroup}
            onChange={this._handleChangeGroup}
          >
            {
              this.props.groups.map((group) => ( <MenuItem key={group.id} value={group.id} primaryText={group.name} /> ))
            }
          </SelectField>

        </div>
        <FlatButton label="Save" primary={true} onClick={this._handleSubmit} />
        <FlatButton label="Cancel" primary={true}  onClick={this.props.closeModal} />
      </form>
    )
  }
}

export default UserToUserForm
