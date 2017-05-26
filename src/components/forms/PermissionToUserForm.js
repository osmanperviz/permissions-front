import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
try { injectTapEventPlugin(); } catch (e) { console.log(e) }

class PermissionToUserForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedUser: '',
      selectedPermission: '',
      selectedSubject: ''
    }
  }

  _handleChangeUser = (event, index, value) => {
    this.setState({
      selectedUser: value
    })
  }

  _handleChangePermission = (event, index, value) => {
    this.setState({
      selectedPermission: value
    })
  }

  _handleChangeSubject = (event, index, value) => {
    this.setState({
      selectedSubject: value
    })
  }

  _handleSubmit = () => {
    const { selectedUser, selectedPermission, selectedSubject } = this.state
    this.props.handleSubmit(selectedUser, selectedPermission, selectedSubject)
  }

  render() {
    const permissions = [ 'view', 'modify', 'remove', 'add_new' ]

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
            floatingLabelText="Permission"
            value={this.state.selectedPermission}
            onChange={this._handleChangePermission}
          >
            {
              permissions.map((permission, index) => ( <MenuItem key={index} value={permission} primaryText={permission} /> ))
            }
          </SelectField>

          <SelectField
            floatingLabelText="Subject"
            value={this.state.selectedSubject}
            onChange={this._handleChangeSubject}
          >
            {
              this.props.subjects.map((subject) => ( <MenuItem key={subject.id} value={subject.id} primaryText={subject.name} /> ))
            }
          </SelectField>
        </div>
        <FlatButton label="Cancel" primary={true} onClick={this.props.closeModal} />
        <FlatButton label="Save" primary={true}  onClick={this._handleSubmit} />
      </form>
    )
  }
}

export default PermissionToUserForm
