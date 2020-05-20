import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import { AppConsumer } from "../provider/AppProvider";
import PrivateRoute from "./PrivateRoute";

import Login from "../components/auth/Login";
import ChangePassword from "../components/auth/ChangePassword";
import AppAlert from "../components/layout/AppAlert";

const HomeRoute = () => {
  return (
    <AppConsumer>
      {context => (
        <Fragment>
          <AppAlert alerts={context.alerts} removeAlert={context.removeAlert} />
          <Switch>
            <Route
              exact
              path="/login"
              component={() => <Login context={context} />}
            />
            <PrivateRoute
              exact
              path="/changePassword"
              component={() => <ChangePassword context={context} />}
            />
          </Switch>
        </Fragment>
      )}
    </AppConsumer>
  );
};

export default HomeRoute;
