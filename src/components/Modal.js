import React from 'react';
import Dialog from 'material-ui/Dialog';
import PermissionToUserForm from './forms/PermissionToUserForm'
import PermissionToGroupForm from './forms/PermissionToGroupForm'
import UserToGroupForm from './forms/UserToGroupForm'
import injectTapEventPlugin from 'react-tap-event-plugin';
try { injectTapEventPlugin(); } catch (e) { console.log(e) }

class Modal extends React.Component {
  render() {
    const findComponent = () => {
      switch (this.props.layout) {
        case 'permissionToUser':
           return <PermissionToUserForm handleSubmit={this.props.permissionToUser} users={this.props.users} subjects={this.props.subjects} closeModal={this.props.closeModal}/>
        case 'permissionToGroup':
           return <PermissionToGroupForm handleSubmit={this.props.permissionToGroup} groups={this.props.groups} subjects={this.props.subjects} closeModal={this.props.closeModal}/>
        case 'userToGroup':
           return <UserToGroupForm handleSubmit={this.props.userToGroup} groups={this.props.groups} users={this.props.users} closeModal={this.props.closeModal}/>

        default:
          return null
      }
    }
    return (
        <div>
          <Dialog
            title={this.props.title}
            onRequestClose={this.props.closeModal}
            modal={true}
            open={this.props.open}
            onRequestClose={this.props.closeModal}
          >
            {
              findComponent()
            }
          </Dialog>
        </div>
      );
  }

}

export default Modal
