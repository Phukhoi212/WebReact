import React from "react";
import { withStyles } from "@material-ui/core";

const useStyles = () => ({
  root: {
    width: "100%",
    backgroundColor: "orange",
    height: "8rem",
  },
})



class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

      </div>
    );
  }
}
export default withStyles(useStyles)(Header);