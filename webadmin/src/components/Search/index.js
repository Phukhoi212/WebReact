import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = () => ({
    root: {
        width: "25%",
        marginLeft: "auto",
        marginRight: "auto",
    }
});      

class Search extends React.Component {
  render () {
      const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <InputBase
          className="search-input"
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton className="search-icon" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    )
  }
}

export default withStyles(useStyles)(Search);