import React from "react";
import { withStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "100vh"
  },
  container: {
    width: "100%",
    height: "auto",
  },
  image: {
    width: "30%",
    height: "20rem",
    backgroundColor: "green",
    marginTop: "2rem"
  }
})


class Detail extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <Header />
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <div className={classes.container}>
            <div className={classes.image}>

            </div>
          </div>

        </Container>

      </div>
    );
  }
}
export default withStyles(useStyles)(Detail);