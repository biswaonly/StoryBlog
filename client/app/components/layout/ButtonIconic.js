import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ icon: { fontSize: 30 } });

const ButtonIconic = ({ icon, label, color, size }) => {
  const classes = useStyles();
  const IconName = icon;
  return (
    <Tooltip
      title={label || "Button"}
      aria-label={label || "Button"}
      placement="top"
    >
      <IconButton
        aria-label={label || "Button"}
        color={color || "secondary"}
        size={size || "medium"}
      >
        <IconName className={classes.icon} />
      </IconButton>
    </Tooltip>
  );
};

export default ButtonIconic;
