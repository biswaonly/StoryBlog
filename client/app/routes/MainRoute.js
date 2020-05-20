import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import AppNav from "../components/layout/AppNav";
// import PrivateRoute from "./PrivateRoute";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={AppNav} />
    </Switch>
  );
};

export default MainRoute;
