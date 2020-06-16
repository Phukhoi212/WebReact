import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from "../../components/Input";
import { Button } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import "./login.css";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  left: {
    width: "50%",
    height: 200,
  },
  right: {
    width: "50%",
    height: 200,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  text: {
    fontSize: 12
  }
});

class UserLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog fullWidth open={this.props.open} onClose={this.props.handleClose} onBackdropClick={this.props.onBackdropClick}>
          <DialogTitle id="form-dialog-title">Chào mừng đến với Green Mall! Đăng Nhập Ngay</DialogTitle>
          <DialogContent>
            <div className={classes.root}>
              <div className={classes.left}>
                <label className={classes.text}>Tên đăng nhập</label>
                <Input />
                <label className={classes.text}>Mật khẩu</label>
                <Input type="password" />

              </div>
              <div className={classes.right}>
                <Button fullWidth style={{ backgroundColor: "#F57224", color: "#fff" }}>Đăng Nhập</Button>
                <label style={{ fontSize: 12 }}>Hoặc đăng nhập bằng</label>
                <Button fullWidth style={{ backgroundColor: "#3d6ad6", marginTop: 10 }}>
                  <FacebookIcon style={{ color: "#fff" }} />
                  <div style={{ color: "#fff", marginLeft: 5 }}>FACEBOOK</div>
                </Button>
                <Button fullWidth style={{ backgroundColor: "#d34836", marginTop: 10 }}>
                  <div style={{ color: "#fff", marginLeft: 5 }}>GOOGLE</div>
                </Button>
              </div>

            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(useStyles)(UserLogin)