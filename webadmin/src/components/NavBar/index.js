import React from "react";
import { withStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = () => ({
  root: {
    with: "100%",
    height: "3rem",
    backgroundColor: "green",
    display: "flex",
  },
  user: {
    width: "90%",
    height: "auto",
  }
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
  }

  onClickUser = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  };

  render() {
    console.log("props", this.props);
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
        <div className={classes.user}>
          <IconButton onClick={this.onClickUser} style={{ backgroundColor: "#ffff", float: "right" }} size="medium" color="secondary">
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleClose}>My account</MenuItem>
            <MenuItem><a href="/login">Logout</a></MenuItem>
          </Menu>
        </div>


      </div>
    );
  }
}
export default withStyles(useStyles)(NavBar);