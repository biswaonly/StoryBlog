import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppConsumer } from "../provider/AppProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AppConsumer>
      {context => {
        return (
          <Route
            {...rest}
            render={props =>
              !context.isAuthenticated ? (
                <Redirect to="/login" />
              ) : (
                <Component {...props} {...rest}/>
              )
            }
          />
        );
      }}
    </AppConsumer>
  );
};

export default PrivateRoute;
