import React from "react";
import {
  Modal,
  Backdrop,
  AppBar,
  Fade,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import ButtonIconic from "./ButtonIconic";

const useStyles = makeStyles(theme => ({
  modal: {
    position: "absolute",
    width: "100%",
    height: "calc(100% - 60px)",
    zIndex: 1600,
    top: 60,
    left: 0
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  }
}));

const CloseBtn = () => <ButtonIconic icon={Close} label={"CLOSE"} />;

const AppModal = ({ component: Component, header, passValue, loader }) => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <div className={classes.container}>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default AppModal;
