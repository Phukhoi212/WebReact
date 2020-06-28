import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListDashBoard from './listItems';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Admins from "../Manager/Admin";
import Products from "../Manager/Product";
import Employees from "../Manager/Employee";

const drawerWidth = 240;

const useStyles = ((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    width: '100%'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


class Dashboard extends React.Component {
  state = {
    open: false,
    index: 0,
  }

  handleDrawerOpen = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
    })
  };

  handleListItemClick = (event, indexOfList) => {
    this.setState({
      index: indexOfList
    })
  }

  renderContainer = () => {
    const { index } = this.state;
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    let content = (<Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Deposits />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>)
    switch (index) {
      case 1:
        content = (<Admins />);
        break;
      case 2:
        content = (<Products />);
        break;
      case 3:
        content = (<Employees />);
        break;
      default:
        return content;
    }
    return content
  }

  render() {
    const { open, index } = this.state;
    const { classes } = this.props;
    console.log("====>index", index)

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerOpen}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListDashBoard
              icon={<DashboardIcon />}
              text="Dashboard"
              handleListItemClick={(event) => this.handleListItemClick(event, 0)}
            />
            <ListDashBoard
              icon={<SupervisorAccountIcon />}
              text="Admins"
              handleListItemClick={(event) => this.handleListItemClick(event, 1)}
            />
            <ListDashBoard
              icon={<PermMediaIcon />}
              text="Products"
              handleListItemClick={(event) => this.handleListItemClick(event, 2)}
            />
            <ListDashBoard
              icon={<AssignmentIcon />}
              text="Employess"
              handleListItemClick={(event) => this.handleListItemClick(event, 3)}
            />
            <ListDashBoard
              icon={<DashboardIcon />}
              text="Dashboard"
              handleListItemClick={(event) => this.handleListItemClick(event, 4)}
            />
            <ListDashBoard
              icon={<DashboardIcon />}
              text="Dashboard"
              handleListItemClick={(event) => this.handleListItemClick(event, 5)}
            />
            <ListDashBoard
              icon={<DashboardIcon />}
              text="Dashboard"
              handleListItemClick={(event) => this.handleListItemClick(event, 6)}
            />
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {/* <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid> */}
            {this.renderContainer()}
          </Container>
        </main>
      </div>
    );
  }
}
export default withStyles(useStyles)(Dashboard);