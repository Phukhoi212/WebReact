import React from "react";
import { withStyles } from "@material-ui/core";
import logo from "../../images/logo.png";
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = () => ({
  root: {
    width: "100%",
    backgroundColor: "black",
    height: "auto",
    display: "flex",
  },
  logo: {
    width: "10%"
  },

  contact: {
    width: "30%",
    height: "inherit",
    color: "#ffff",
    textAlign: "left",
    fontSize: "0.9rem"
  },
})



class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          <img
            alt="vhg"
            src={logo}
            style={{ height: '4rem', width: '6rem', float: "left", marginLeft: "2rem", paddingTop: "0.5rem" }}
          />
        </div>

        <div className={classes.contact}>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Liên Hệ: </p>
          <p><PhoneIcon fontSize="small" />0909654789</p>
          <p><MailOutlineIcon fontSize="small" />tdk@mail.com</p>
          <p><LocationOnIcon fontSize="small" /> 475A, Điện Biên Phủ, quận Bình Thạnh, TP. HCM</p>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Footer);