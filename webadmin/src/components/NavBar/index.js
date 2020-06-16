import React from "react";
import { withStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import UserLogin from "../../containers/UserLogin";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import { NavLink, withRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Actions
import { deleteSession } from "../../actions/SessionActions";



const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
  app: {
    with: "100%",
    height: "auto",
    backgroundColor: "green",
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
    width: "20%",
  },
  button: {
    color: "#fff",
    fontSize: 12
  }
});

class NavBar extends React.Component {
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
/////////////
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

  render() {
    const { classes } = this.props;
    const { openLogin } = this.state;
    return (
      <div className={classes.root}>
        <UserLogin open={openLogin} onBackdropClick={() => this.setState({ openLogin: false })} />
        <AppBar position="sticky" className={classes.app}>
          <div className={classes.logo}>
            <a href="/">
              <img
                alt="vhg"
                src={logo}
                style={{ height: 'auto', width: '40%', float: "left", marginLeft: "2rem" }}
              />
            </a>
          </div>
          <div className={classes.user}>
            <div className={classes.tab}>
              <div style={{ width: "25%" }}>
                Tiết kiệm hơn với App
              </div>
              <div style={{ width: "25%" }}>
                Đăng ký bán hàng cùng Green MAll
              </div>
              <div style={{ width: "25%" }}>
                Chăm sóc khách hàng
              </div>
              <div style={{ width: "25%" }}>
                Kiểm tra đơn hàng
              </div>

            </div>
            <div className={classes.bt_group}>
              <Button variant="text" className={classes.button} onClick={this.onOpenLogin}>Đăng nhập</Button>
            </div>
          </div>


        </AppBar>
      </div>
    );
  }
}
export default withStyles(useStyles)(NavBar);