import React from "react";
import { withStyles } from "@material-ui/core";
import NavBar from "../../components/NavBar";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "100vh"
  },
  navBar: {
    display: "block",
  },
  container: {
    height: "auto",
    display: "flex",
  },
  header: {
    display: "block"
  },
  left: {
    width: "20%",
    display: "block",
  },
  right: {
    width: "80%",
    display:"block",
  },
  footer: {
    display: "block"
  }
})


class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.navBar}>
          <NavBar />
        </div>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.container}>
          <div className={classes.left}>
            <LeftPanel />
          </div>
          <div className={classes.right}>
            <RightPanel />
          </div>

        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Home);