import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
try { injectTapEventPlugin(); } catch (e) { console.log(e) }

class PermissionToGroupForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedGroup: '',
      selectedPermission: '',
      selectedSubject: ''
    }
  }


  _handleChangeGroup = (event, index, value) => {
    this.setState({
      selectedGroup: value
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
    const { selectedGroup, selectedPermission, selectedSubject } = this.state
    this.props.handleSubmit(selectedGroup, selectedPermission, selectedSubject)
  }

  render() {
    const permissions = [ 'view', 'modify', 'remove', 'add_new' ]

    return(
      <form onSubmit={this._handleSubmit}>
        <div style={{display: 'flex'}}>
          <SelectField
            floatingLabelText="Group"
            value={this.state.selectedGroup}
            onChange={this._handleChangeGroup}
          >
            {
              this.props.groups.map((group) => ( <MenuItem key={group.id} value={group.id} primaryText={group.name} /> ))
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
            floatingLabelText="Subjects"
            value={this.state.selectedSubject}
            onChange={this._handleChangeSubject}
          >
            {
              this.props.subjects.map((subject) => ( <MenuItem key={subject.id} value={subject.id} primaryText={subject.name} /> ))
            }
          </SelectField>
        </div>
        <div>
          <FlatButton label="Cancel" primary={true}  onClick={this.props.closeModal} />
          <FlatButton label="Save" primary={true} onClick={this._handleSubmit} />
        </div>
      </form>
    )
  }
}

export default PermissionToGroupForm
