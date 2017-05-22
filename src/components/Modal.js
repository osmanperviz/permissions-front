import React from 'react';
import Dialog from 'material-ui/Dialog';

const Modal = ({ status, layout }) => {
  return (
      <div>
        <Dialog
          title="Dialog With Actions"
          // actions={actions}
          modal={true}
          open={true}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
}
