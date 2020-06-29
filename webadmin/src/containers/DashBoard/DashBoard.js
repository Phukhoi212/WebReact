import React from 'react';
import clsx from 'clsx';
import compose from "recompose/compose";
import { connect } from "react-redux";
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
import AssignmentIcon from '@material-ui/icons/Assignment';
import HouseIcon from '@material-ui/icons/House';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Admins from "../Manager/Admin";
import Products from "../Manager/Product";
import Employees from "../Manager/Employee";
import Farms from "../Manager/Farm";
import { getListBills } from "./actions";

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

  componentDidMount() {
    this.props.getListBills();
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
          <Orders data={this.props.listBills} />
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
      case 4:
        content = (<Farms />);
        break;
      default:
        return content;
    }
    return content
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    console.log("listBills", this.props.listBills)
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
              text="Sản Phẩm"
              handleListItemClick={(event) => this.handleListItemClick(event, 2)}
            />
            <ListDashBoard
              icon={<AssignmentIcon />}
              text="Nhân Viên"
              handleListItemClick={(event) => this.handleListItemClick(event, 3)}
            />
            <ListDashBoard
              icon={<HouseIcon />}
              text="Nông Trại"
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
            {this.renderContainer()}
          </Container>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listBills: state.DashboardReducer.listBills,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListBills,
    })
  )(Dashboard);