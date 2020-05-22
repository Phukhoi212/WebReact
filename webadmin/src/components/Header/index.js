import React from "react";
import { withStyles } from "@material-ui/core";
import Search from "../Search";
import logo from "../../images/logo.png";
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import SimpleMenu from "../Menu";

const useStyles = () => ({
  root: {
    width: "100%",
    //backgroundColor: "orange",
    height: "8rem",
    alignItems: "center",
    paddingTop: "2rem",
  },
  logo: {

  },
  search: {
    width: "100%",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
  },
  addtoCart: {
    borderRadius: 0,
    marginLeft: "1rem",
  },
  bar_container: {
    width: "100%",
    height: 40,
    marginTop: 20
  },
  bar: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#fff",
    display: "flex"
  }
})

const List = ["tetetet", "zxzxzxzx", "adasdsads", "Aweqweqwe"];



class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <img
            alt="vhg"
            src={logo}
            style={{ width: "7rem", height: "4rem" }}
          />
          <Search />
          <IconButton color="primary" size="medium" className={classes.addtoCart}>
            <AddShoppingCartOutlinedIcon />
          </IconButton>
        </div>
        <div className={classes.bar_container}>
          <div className={classes.bar}>
            <SimpleMenu menuList={List} />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Header);