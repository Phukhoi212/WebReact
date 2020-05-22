import React from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyles = () => ({

});

class Category extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

      </div>
    );
  }
}

export default withStyles(useStyles)(Category);