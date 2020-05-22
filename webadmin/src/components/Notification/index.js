import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = (theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

class Notification extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.props.open}
          autoHideDuration={3000}
          onClose={this.props.handleClose}
        >
          <Alert
            onClose={this.props.handleClose}
            severity={this.props.severity}
            style={{ alignItems: "center" }}
          >
            {/* {props.messages.map(msg => (
                    <div>{msg}</div>
                  ))} */}
            {this.props.message}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
export default withStyles(useStyles)(Notification);
