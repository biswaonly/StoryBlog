import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const AppAlert = ({ alerts, removeAlert }) => (
  <Snackbar
    open={alerts.open}
    // autoHideDuration={5000}
    onClose={removeAlert}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
  >
    <Alert elevation={6} variant="filled" severity={alerts.alertType}>
      {alerts.msg}
    </Alert>
  </Snackbar>
);

export default AppAlert;
