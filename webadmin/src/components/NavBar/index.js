import React from "react";
import { withStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";

const useStyles = () => ({
  root: {
    with: "100%",
    height: "3rem",
    backgroundColor: "green",
    display: "block",
  }
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <a href="/">
          <img
            alt="vhg"
            src={logo}
            style={{ height: '3.5rem', width: '5.3rem', float: "left", marginLeft: "2rem" }}
          />
        </a>


      </div>
    );
  }
}
export default withStyles(useStyles)(NavBar);