import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarAdmin from "./NavBarAdmin";
import history from "../../history";
import LoginAdmin from "../Manager/Admin/Login/Login.js";
import Admin from "../Manager/Admin";
import Product from "../Manager/Product";
import Dashboard from "../DashBoard/DashBoard";
import Home from "../Home/Home.js";
import Detail from "../Details";
import BuyProduct from "../BuyProduct";
import ShopDetail from "../ShopDetail";
import SalePage from "../SalePage";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    const location = window.location.pathname;
    const adminRoute = '/manager';
    return (
      <Router history={history}>
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <section className="app">
                <Switch>
                  {
                    location.includes(adminRoute) ? <PrivateRoute component={NavBarAdmin} /> :
                      <PrivateRoute component={NavBar} />
                  }

                </Switch>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/manager/admins/login" component={LoginAdmin} />
                </Switch>
                <div className="warp-scroller">
                  <Switch>
                    <PrivateRoute exact path="/home" component={Home} />
                    <PrivateRoute exact path="/detail/:id" component={Detail} />
                    <PrivateRoute exact path="/shop/:id" component={ShopDetail} />
                    <PrivateRoute exact path="/product/buy" component={BuyProduct} />
                    <PrivateRoute exact path="/sale/detail" component={SalePage} />
                    <PrivateRoute exact path="/manager/admins/login" component={LoginAdmin} />
                    <PrivateRoute exact path="/manager/admins" component={Admin} />
                    <PrivateRoute exact path="/manager/products" component={Product} />
                    <PrivateRoute exact path="/manager/dashboard" component={Dashboard} />
                    {/*
                    <PrivateRoute exact path="/groups/details/:id" component={GroupDetail} />
                    <PrivateRoute exact path="/add" component={Add} />
                    <PrivateRoute exact path="/add/respondents" component={Respondents} /> */}
                  </Switch>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

