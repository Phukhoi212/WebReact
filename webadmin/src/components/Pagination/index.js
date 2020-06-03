import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = ((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

class PaginationComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Pagination count={this.props.count} showFirstButton showLastButton />
      </div>
    );
  }

}
export default withStyles(useStyles)(PaginationComponent)