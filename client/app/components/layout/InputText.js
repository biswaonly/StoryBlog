import React, { Fragment, useState } from "react";
import { Paper, IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import InputValidation from "./InputValidation";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    overflow: "hidden"
  },
  input: { marginLeft: theme.spacing(1), flex: 1, outline: "none", border: 0 },
  iconButton: {
    padding: 8,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 0
  }
}));

const InputText = ({
  label,
  type,
  func,
  name,
  value,
  icon,
  placeholder,
  validators,
  errorMessages
}) => {
  const classes = useStyles();

  const [errorText, setErrorText] = useState("");
  const PropIcon = icon;
  return (
    <Fragment>
      <Paper className={classes.root}>
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          tabIndex="-1"
        >
          {(icon && <PropIcon />) || <Menu />}
        </IconButton>
        <InputValidation
          type={type}
          className={classes.input}
          placeholder={placeholder || `Enter your ${label}`}
          onChange={e => func(e)}
          name={name}
          value={value}
          validators={validators}
          errorMessages={errorMessages}
          setErrorText={setErrorText}
        />
      </Paper>
      {errorText !== "" && <div style={{ color: "red" }}>{errorText}</div>}
    </Fragment>
  );
};

export default InputText;
