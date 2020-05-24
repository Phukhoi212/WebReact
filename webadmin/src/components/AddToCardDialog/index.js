import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';


const useStyles = () => ({
  root: {

  }
});

class AddToCardDialog extends React.Component {

  handleCancel = () => {
    this.props.onClose();
  };

  onConfirmButton = () => {
    this.props.Confirm();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Dialog
          open={this.props.open}
          onBackdropClick={this.props.onBackdropClick}
          onClose={this.props.onClose}
        >
          <DialogTitle>{this.props.title}</DialogTitle>
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
    )
  }
}

export default withStyles(useStyles)(AddToCardDialog)