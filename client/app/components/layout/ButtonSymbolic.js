import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: { margin: theme.spacing(1) }
}));

const ButtonSymbolic = ({ color, icon, name, type }) => {
  const classes = useStyles();
  const ButtonIcon = icon || null;
  return (
    <Button
      variant="contained"
      color={color || "secondary"}
      className={classes.button}
      endIcon={icon && <ButtonIcon />}
      type={type && type}
    >
      {name}
    </Button>
  );
};

export default ButtonSymbolic;
