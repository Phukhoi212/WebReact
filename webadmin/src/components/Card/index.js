import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
import rau from "../../images/rau.jpg";
import "./Card.css";

const useStyles = ({
  root: {
    width: "inherit",
    height: "inherit",
    '&:hover': {
      boxShadow: "0px 0px 4px 4px #C0C0C0",
      borderRadius: 0,
    },
    boxShadow: "none",
    borderRadius: 0,
    margin: 5,
  },
});

class CardComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card raised className={classes.root}>
        <CardContent style={{ padding: 0 }}>
          <RouterLink
            exact="true"
            to={`/detail`}
          >
            <img
              alt="vhg"
              src={rau}
              style={{ padding: 0.2, width: "14rem", height: '12rem' }}
            />
          </RouterLink>
        </CardContent>
        <CardActions >
          <div style={{height: 20}}>
            <Rating style={{ height: "inherit"}} name="half-rating-read" value={3.5} precision={0.5} readOnly />
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(CardComponent);
