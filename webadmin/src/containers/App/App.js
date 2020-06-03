import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar";
import history from "../../history";
import LoginAdmin from "../Manager/Admin/Login/Login.js";
import Admin from "../Manager/Admin";
import Product from "../Manager/Product";
//import Dashboard from "../DashBoard";
import Home from "../Home/Home.js";
import Detail from "../Details";
import BuyProduct from "../BuyProduct";
import PrivateRoute from "./PrivateRoute";
import "./App.css";

class App extends Component {
  render() {
    console.log("App", this.props);
    return (
      <Router history={history}>
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <section className="app">
                <Switch>
                  <PrivateRoute component={NavBar} />
                </Switch>
                <Switch>
                  {/* <Route exact path="/login" component={Login} /> */}
                </Switch>
                <div className="warp-scroller">
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/detail/:id" component={Detail} />
                    <PrivateRoute exact path="/detail/buy" component={BuyProduct} />
                    <PrivateRoute exact path="/manager/admins/login" component={LoginAdmin} />
                    <PrivateRoute exact path="/manager/admins" component={Admin} />
                    <PrivateRoute exact path="/manager/products" component={Product} />
                    {/* <PrivateRoute exact path="/groups" component={Groups} />
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

