import React from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import { submitLogin } from "./actions";

const useStyles = theme => ({
  root: {
    width: "100%",
    height: "auto",
  },
  paper: {
    width: "30%",
    margin: "0 auto",
    marginTop: 150,
    padding: 20,
    border: "1px solid"
  },
  submit: {
    marginTop: 20
  }
});

class Login extends React.Component {
  state = {
    userName: "",
    password: "",
  }

  onChangeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitLogin = (e) => {
    e.preventDefault();
    this.props.submitLogin(this.state.userName, this.state.password);
    this.props.history.push('/manager/dashboard');
  }

  render() {
    const { classes } = this.props;
    const { userName, password } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.paper}>
          <div style={{ width: "100%", marginBottom: 50 }}>
            <LockOutlinedIcon fontSize="large" color="secondary" style={{ width: "inherit", margin: "0 auto" }} />
          </div>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="userName" 
              label="Enter user name"
              name="userName"
              autoComplete="userName"
              value={userName}
              onChange={this.onChangeValue}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={this.onChangeValue}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSubmitLogin}
              disabled={userName === "" || password === ""}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.LoginReducer.isLogin,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      submitLogin,
    })
  )(Login);
