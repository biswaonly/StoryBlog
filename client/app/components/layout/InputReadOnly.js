import React from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    overflow: "hidden"
  },
  iconButton: {
    padding: 8,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 0
  },
  input: { marginLeft: theme.spacing(1), flex: 1, outline: "none", border: 0 }
}));

const InputReadOnly = ({ name, value, icon }) => {
  const classes = useStyles();
  const PropIcon = icon;
  return (
    <Paper className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label="menu"
        tabIndex="-1"
      >
        {(icon && <PropIcon />) || <Menu />}
      </IconButton>
      <input
        className={classes.input}
        name={name}
        value={value}
        tabIndex="-1"
        readOnly
      />
    </Paper>
  );
};

export default InputReadOnly;
