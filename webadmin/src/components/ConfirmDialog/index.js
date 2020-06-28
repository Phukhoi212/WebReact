import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = () => {

}

class ConfirmDialog extends React.Component {
  handleCancel = () => {
    this.props.onClose();
  }

  handleOk = () => {
    this.props.onConfirm();
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          //onClose={this.props.onClose}
          onBackdropClick={this.props.onBackdropClick}
          name={this.props.name}
        >
          <DialogTitle>{this.props.title} <label style={{color: "red"}}>{this.props.name} ?</label></DialogTitle>
          <DialogContent>
            {this.props.content}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} variant="contained" color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleOk} variant="contained" color="secondary" autoFocus>
              OK
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}
export default withStyles(useStyles)(ConfirmDialog);
