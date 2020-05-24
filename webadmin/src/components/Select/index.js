import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = ((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class SelectComponent extends React.Component {
  render() {
    const { classes, list } = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.value}
            onChange={this.props.handleChange}
            fullWidth
          >
            {list.map(value => (
              <MenuItem key={value} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}
export default withStyles(useStyles)(SelectComponent);
