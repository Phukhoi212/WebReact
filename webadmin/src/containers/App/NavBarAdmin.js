import React from "react";
import compose from "recompose/compose";
import { withStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import UserLogin from "../UserLogin";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Menu, MenuItem } from '@material-ui/core'

// // Actions
import { deleteSessionAdmin } from "../../actions/SessionActions";



const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
  app: {
    with: "100%",
    height: "auto",
    backgroundColor: "ble",
    display: "block",
  },
  logo: {
    width: "10%",
  },
  user: {
    width: "90%",
    height: "auto",
    display: "flex",
  },
  tab: {
    width: "80%",
    display: "flex",
    textAlign: "center",
    lineHeight: 2,
  },
  bt_group: {
    textAlign: "end",
    width: "100%",
    float: "right"
  },
  button: {
    color: "#fff",
    fontSize: 12
  }
});

class NavBarAdmin extends React.Component {
  state = {
    anchorEl: null,
    openLogin: false,
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    deleteSession: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  static defaultProps = {
    user: {},
  };


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

  onOpenLogin = () => {
    this.setState({ openLogin: true })
  }

  handleLogout = () => {
    this.props.deleteSessionAdmin();
    this.props.history.push("/login");
  };

  render() {
    const Admin = localStorage.getItem("admin");
    const { classes, admin } = this.props;
    const { openLogin, anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <UserLogin open={openLogin} onBackdropClick={() => this.setState({ openLogin: false })} />
        <AppBar position="sticky" className={classes.app}>
          <div className={classes.logo}>
            <a href="/home">
              <img
                alt="vhg"
                src={logo}
                style={{ height: 'auto', width: '40%', float: "left", marginLeft: "2rem" }}
              />
            </a>
          </div>
          <div className={classes.user}>
            <div className={classes.bt_group}>
              <div>
                <Button style={{color: "#fff"}} onClick={this.onClickUser}>{`Chào Admin  ${Admin}`}</Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.SessionReducer.isLogged,
    admin: state.SessionReducer.admin,
  };
};


export default withRouter(compose(withStyles(useStyles),
  connect(
    mapStateToProps, {
      deleteSessionAdmin
  }))(NavBarAdmin)
);