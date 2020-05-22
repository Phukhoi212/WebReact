import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});


const useStyles = () => {

}

class DialogComponent extends React.Component {

  handleCancel = () => {
    this.props.onClose();
  };

  onConfirmButton = () => {
    this.props.Confirm();
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          onBackdropClick={this.props.onBackdropClick}
          type={this.props.type}
          TransitionComponent={Transition}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>{this.props.type === "edit" ? "Edit Form" : "Add Form"}</DialogTitle>
          <DialogContent>
            {this.props.content}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCancel} variant="contained" color="primary">
              Cancel
            </Button>
            <Button onClick={this.onConfirmButton} variant="contained" color="secondary" autoFocus>
              {this.props.type === "edit" ? "Lưu" : "Thêm"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

}
export default withStyles(useStyles)(DialogComponent);
