import React from "react";
import { withStyles } from "@material-ui/core";
import CardComponent from "../../../components/Card";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  list: {
    display: "flex",
    flexWrap: "wrap-reverse",
    paddingLeft: "5rem",
  }
})


class RightPanel extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.list}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(RightPanel);