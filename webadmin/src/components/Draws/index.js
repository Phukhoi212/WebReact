import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = ({
  root: {
    width: "500"
  },
  list: {
    width: "50rem",
  },
  fullList: {
    width: '50rem',
  },
});

class Draws extends React.Component {
  state = {
    left: false,
  }


  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({
      left: true,
      [side]: open,
    })
  };
  sideList = side => (
    <div
      style={{ width: "20rem" }}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Drawer className={classes.list} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          {this.sideList('left')}
        </Drawer>
      </div>
    );
  }

}

export default withStyles(useStyles)(Draws);