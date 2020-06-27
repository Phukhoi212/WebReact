import React from "react";
import compose from "recompose/compose";
import { withStyles } from '@material-ui/core/styles';
import logo from "../../images/logo.png";
import { Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import UserLogin from "../UserLogin";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Menu, MenuItem } from '@material-ui/core'

// // Actions
import { deleteSessionUser } from "../../actions/SessionActions";



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
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      openLogin: false,
    }
  }

  onClickUser = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }


  onOpenLogin = () => {
    this.setState({
      openLogin: true,
    })
  }

  handleCloseLogin = () => {
    this.setState({
      openLogin: false,
    })
  }


  handleClose = () => {
    this.setState({
      anchorEl: null,
    })
  };

  handleLogout = () => {
    this.props.deleteSessionUser();
    this.props.history.push("/home");
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, openLogin } = this.state;
    const userAcept = localStorage.getItem("user")
    return (
      <div className={classes.root}>
        <UserLogin
          open={openLogin}
          onBackdropClick={() => this.setState({ openLogin: false })}
          handleCloseLogin={this.handleCloseLogin}
        />
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
              {userAcept !== null ?
                (<div>
                  <Button onClick={this.onClickUser}>
                    <label style={{ color: "#fff", fontSize: 12 }}>{`Xin chào ${userAcept}`}</label>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                  </Menu>
                </div>)
                :
                <Button variant="text" className={classes.button} onClick={this.onOpenLogin}>Đăng nhập</Button>
              }
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.UserLoginReducer.isLogin,
    user: state.SessionUserReducer.user,
  };
};


export default withRouter(compose(withStyles(useStyles),
  connect(
    mapStateToProps, {
    deleteSessionUser
  }))(NavBar)
);