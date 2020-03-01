import React from "react";
import { withStyles } from "@material-ui/core";
import Search from "../Search";

const useStyles = () => ({
  root: {
    width: "100%",
    backgroundColor: "orange",
    height: "8rem",
    alignItems: "center"
  },
  search: {
    width: "100%",
  }
})



class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <Search />
        </div>

      </div>
    );
  }
}
export default withStyles(useStyles)(Header);