import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import dat4 from "../../images/dat4.jpg";

const useStyles = ({
  root: {
    width: "15rem",
    height: "17rem",
    margin: "0.8rem",
  },
});

class CardComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent style={{ padding: 0 }}>

          <RouterLink
            exact="true"
            to={`/detail`}
          >
            <img
              alt="vhg"
              src={dat4}
              style={{ width: "15rem", height: '13rem' }}
            />
          </RouterLink>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(CardComponent);
