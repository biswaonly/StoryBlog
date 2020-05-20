import React, { Component } from "react";
import LocalStore from "../utils/localStore";
import Rest from "../utils/serverSetup";
import moment from "moment";

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: !!LocalStore.get("token"),
      user: {},
      alerts: { open: false, msg: "", alertType: "" },

      authenticate: () => {
        this.setState({ isAuthenticated: true });
      },
      setOpenModal: () => {
        this.setState({ modalOpen: true });
      },
      setCloseModal: () => {
        this.setState({ modalOpen: false });
      },
      signout: () => {
        this.setState({ isAuthenticated: false });
        LocalStore.remove("token");
      },
      setUser: user => {
        LocalStore.set("token", user.token);
        LocalStore.set("timer", moment().add(3, "hour"));
        this.setState({ user });
        this.state.authenticate();
        this.state.setAlert("authenticated done", "success");
      },
      setAlert: (msg, alertType) => {
        this.setState({ alerts: { open: true, msg, alertType } }, () => {
          setTimeout(() => {
            this.setState({ alerts: { open: false } });
          }, 4000);
        });
      },
      removeAlert: id => {
        this.setState({ alerts: { open: false, msg: "", alertType: "" } });
      }
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
