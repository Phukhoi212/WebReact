import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "../../components/Card";
import CoutDownComponent from "../../components/CountDown";

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
    display: "flex"
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
          <div style={{ width: "20%", height: "inherit" }}>
            <label className={classes.text}>FLASH SALE</label>
          </div>
          <div style={{ width: "30%", display: "flex", lineHeight: 2, paddingTop: 10 }}>
            <div style={{ width: "40%", height: "inherit", fontWeight: "bold", fontStyle: "italic" }}>
              Kết thúc trong:
            </div>
            <div style={{ width: "30%", fontWeight: "bold" }}>
              <CoutDownComponent timer={10000} />
            </div>
          </div>
          <div style={{ width: "50%", textAlign: "end", lineHeight: 3 }}>
            <a style={{  marginTop: 10 }} href="/">Xem tất cả ></a>
          </div>
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