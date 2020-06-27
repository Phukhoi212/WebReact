import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import { format_curency } from "../../utils/tool";
import "./Card.css";

const useStyles = ({
  root: {
    width: "14rem",
    height: "auto",
    '&:hover': {
      boxShadow: "0px 0px 4px 4px #C0C0C0",
      borderRadius: 0,
    },
    boxShadow: "none",
    borderRadius: 0,
    margin: 5,
  },
  info: {
    width: "100%",
    height: 110,
  }
});

class CardComponent extends React.Component {
  format_curency = ((money) => {
    money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return money;
  });
  render() {
    const { classes } = this.props;
    return (
      <Card raised className={classes.root}>
        <CardContent style={{ padding: 0 }}>
          <div style={{ width: "100%" }}>
            <RouterLink
              exact="true"
              to={`/detail/${this.props.id}`}
            >
              <img
                alt="vhg"
                src={this.props.src}
                style={{ padding: 0.2, width: "100%", height: '12rem' }}
              />
            </RouterLink>
          </div>
        </CardContent>
        <div className={classes.info}>
          <div style={{ width: "95%", height: 20, float: "right" }}>
            <Rating style={{ height: "inherit" }} name="half-rating-read" value={3.5} precision={0.5} readOnly />
          </div>
          <div className="text">
            {this.props.name}
          </div>
          <div style={{ width: "95%", float: "right", marginTop: 20 }}>
            {this.props.km ?
              <label style={{ color: "red", fontWeight: "bold", fontSize: 12, width: "100%" }}>Sale: {this.props.km}</label>
              : ""}

            <label style={{ fontSize: 18, color: "orange" }}>{format_curency(this.props.price)}</label>
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles(useStyles)(CardComponent);
