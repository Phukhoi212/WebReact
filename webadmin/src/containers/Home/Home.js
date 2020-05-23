import React from "react";
import { withStyles } from "@material-ui/core";
import NavBar from "../../components/NavBar";
import Sales from "../Sales";
import SlideShow from "../../components/Slide";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    backgroundColor: "#eff0f5",
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
  slide: {
    width: "100%",
    height: 300,
    marginBottom: "2rem"
  },
  sales: {
    width: "100%",
    height: 350,
    marginBottom: "1rem"
  },
  footer: {
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
        <div className={classes.slide}>
          <SlideShow />
        </div>
        <div className={classes.sales}>
          <Sales />
        </div>
        <div className={classes.sales}>
          <Sales />
        </div>
        <div className={classes.sales}>
          <Sales />
        </div>
        <div className={classes.sales}>
          <Sales />
        </div>
        <div className={classes.container}>
          {/* <div className={classes.left}>
            <LeftPanel />
          </div> */}
          {/* <div className={classes.right}>
            <RightPanel />
          </div> */}

        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Home);