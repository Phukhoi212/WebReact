import React from "react";
import { withStyles } from "@material-ui/core";
import ExpansionPanelComponent from "../../../components/ExpansionPanel";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    paddingLeft: "1rem",
    paddingTop: "0.8rem"
  },
})


class LeftPanel extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanelComponent />
      </div>
    );
  }
}
export default withStyles(useStyles)(LeftPanel);