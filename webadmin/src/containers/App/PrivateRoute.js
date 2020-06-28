import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { getLocalStorage, STORE_KEYS } from "../../utils/tool";

class PrivateRoute extends React.Component {
  static propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
    props: PropTypes.object,
    computedMatch: PropTypes.object,
  };

  static defaultProps = {
    props: {},
    computedMatch: {},
  };

  render() {
    const isLogged = getLocalStorage(STORE_KEYS.ACCESS_TOKEN);
    const Component = this.props.component;
    return (
      <Route
        {...this.props.props}
        render={props => {
          if (props.location.pathname !== "/manager/admins/login") {
            return isLogged ? (
              <Component {...props} match={this.props.computedMatch} />
            ) : (
              <Redirect to={{ pathname: "/manager/admins/login", state: { from: props.location } }} />
            );
          }
          return "";
        }}
      />
    );
  }
}

export default PrivateRoute;
