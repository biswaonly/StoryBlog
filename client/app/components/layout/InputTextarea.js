import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    overflow: "hidden"
  },
  textarea: { height: "auto", minHeight: 60, width: "100%", outline: "none" }
});

const InputTextarea = ({ name, func, value, label, placeholder }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <textarea
        className={classes.textarea}
        placeholder={placeholder || `Enter your ${label}`}
        onChange={e => func(e)}
        name={name}
        value={value}
      />
    </Paper>
  );
};

export default InputTextarea;
