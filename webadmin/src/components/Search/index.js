import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


class Search extends React.Component {
  render () {
    return (
      <Paper className="paper-search shadow-card-2 ">
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

export default Search