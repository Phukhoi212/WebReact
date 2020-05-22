import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "../../components/Card";

const useStyles = () => ({
  root: {
    width: "80%",
    height: "inherit",
    backgroundColor: "#ffffff",
    margin: "0 auto",
  },
  head_sale: {
    height: 50,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderBottom: "1px solid",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    float: "left",
    color: "#cc0b1b",
    fontStyle: "italic",
    marginTop: 10,
  },
  card_content: {
    display: "flex",
    height: 300,
    padding: 0,
    overflow: "auto",
  },
  card: {
    listStyle: "none",
    height: 275,
    width: "16.5%",
    display: "contents",
  }
})

class Sales extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.head_sale}>
          <label className={classes.text}>FLASH SALE</label>
          <a style={{ float: "right", marginTop: 10 }} href="/">Xem tất cả ></a>
        </div>
        <ul className={classes.card_content}>
          <li className={classes.card}>
            <Card />
          </li>
          <li className={classes.card}>
            <Card />
          </li>
          <li className={classes.card}>
            <Card />
          </li>
          <li className={classes.card}>
            <Card />
          </li>
          <li className={classes.card}>
            <Card />
          </li>
          <li className={classes.card}>
            <Card />
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(useStyles)(Sales);