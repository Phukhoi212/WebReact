import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = () => ({
  root: {
    width: "40%",
    borderRadius: 0,
    display: "flex",
  },
  search_input: {
    width: "90%",
    paddingLeft: "1rem",
  },
  search_icon: {
    backgroundColor: "#d9d9d9",
    borderRadius: 0,
    width: "10%",
  }
});

class Search extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <InputBase
          className={classes.search_input}
          placeholder="Search"
        />
        <IconButton className={classes.search_icon} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    )
  }
}

export default withStyles(useStyles)(Search);