import React from 'react';
import Dialog from 'material-ui/Dialog';
import PermissionToUserForm from './forms/PermissionToUserForm'
import PermissionToGroupForm from './forms/PermissionToGroupForm'

class Modal extends React.Component {
  render() {
    const findComponent = () => {
      switch (this.props.layout) {
        case 'permissionToUser':
           return <PermissionToUserForm handleSubmit={this.props.permissionToUser} users={this.props.users} subjects={this.props.subjects}/>
        case 'permissionToGroup':
           return <PermissionToGroupForm handleSubmit={this.props.permissionToGroup} groups={this.props.groups} subjects={this.props.subjects}/>
      
        default:
          return null
      }
    }
    return (
        <div>
          <Dialog
            title={this.props.title}
            // actions={actions}
            modal={true}
            open={this.props.open}
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
