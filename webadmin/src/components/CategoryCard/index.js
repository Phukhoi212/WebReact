import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./CategoryCard.css";

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
  info: {
    width: "100%",
    height: 110,
  }
});

class CategoryCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card raised className={classes.root}>
        <CardContent style={{ padding: 0 }}>
          <RouterLink
            exact="true"
            to={`/category/${this.props.id}`}
          >
            <img
              alt="vhg"
              src={this.props.src}
              style={{ padding: 0.2, width: "10rem", height: '8rem' }}
            />
          </RouterLink>
        </CardContent>
        <div className={classes.info}>
          <div className="text">
            {this.props.name}
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles(useStyles)(CategoryCard);
