import React from "react";
import { withStyles } from "@material-ui/core";
import logo from "../../images/logo.png";

const useStyles = () => ({
  root: {
    width: "100%",
    backgroundColor: "black",
    height: "5rem",
  },
})



class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img
          alt="vhg"
          src={logo}
          style={{ height: '4rem', width: '6rem', float: "left", marginLeft: "2rem", paddingTop: "0.5rem" }}
        />
      </div>
    );
  }
}
export default withStyles(useStyles)(Footer);