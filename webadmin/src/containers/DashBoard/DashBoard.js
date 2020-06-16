import React from "react";
import MaterialTable from 'material-table';
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { getListEmployees } from "./actions";
//import Table from "../../components/Table";


const drawerWidth = 240;

const columns = [
  { title: 'Tên Admin', field: 'Ten_AD' },
  { title: 'Email', field: 'Email' },
  { title: 'Ngày Sinh', field: 'NgaySinh' },
  { title: 'Số Điện Thoại', field: 'SDT' },
  { title: 'Địa Chỉ', field: 'DiaChi' },
  { title: 'Tên Đăng Nhập', field: 'TenDangNhap' },
  { title: 'Mật Khẩu', field: 'MatKhau' },
];

const useStyles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.props.getListEmployees();
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.employeeList })
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true
    })
  };

  handleDrawerClose = () => {
    this.setState({
      open: false
    })
  };

  render() {
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {/* <List>{mainListItems}</List> */}
          Menu
          <Divider />
          {/* <List>{secondaryListItems}</List> */}
          Menu Item
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  {/* <Chart /> */}
                  Chart
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {/* <Deposits /> */}
                  Data
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  {/* <Orders /> */}
                  {/* <Table title="Bảng Nhân Viên" dataTable={adminList} columns={columns} /> */}
                  <MaterialTable
                    title="Bảng Nhân Viên"
                    columns={columns}
                    data={this.state.data}
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            this.setState((prevState) => {
                              const data = [...prevState.data];
                              data.push(newData);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            if (oldData) {
                              this.setState((prevState) => {
                                const data = [...prevState.data];
                                console.log("==>dataEdit", data);
                                data[data.indexOf(oldData)] = newData;
                                console.log("==>prevData", data[data.indexOf(oldData)]);
                                return { ...prevState, data };
                              });
                            }
                          }, 600);
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                          setTimeout(() => {
                            resolve();
                            this.setState((prevState) => {
                              const data = [...prevState.data];
                              data.splice(data.indexOf(oldData), 1);
                              return { ...prevState, data };
                            });
                          }, 600);
                        }),
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.DashboardReducer.employeeList,
  };
};

export default
  compose(
    withStyles(useStyles),
    connect(mapStateToProps, {
      getListEmployees,
    })
  )(Dashboard);