import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  }
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  };

  handleClose = () => {
    this.setState({ anchorEl: null })
  };
  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          Danh Mục
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.menuList.map(item => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </Menu>
      </div>
    );
  }

}

export default SimpleMenu;
