import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, IconButton, MenuItem, Select } from "@material-ui/core";
import { Menu, ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "100%"
  },
  iconButton: {
    padding: 8,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 0
  },
  selectOption: {
    marginLeft: 8,
    width: "100%",
    "&::before": { border: 0 },
    "&::after": { border: 0 },
    outline: "none"
  },
  placeholder: {
    marginLeft: 4,
    width: "100%",
    "&::before": { border: 0 },
    "&::after": { border: 0 },
    color: "#747474",
    outline: "none"
  }
}));

const InputSelect = ({ options, icon, value, func, name, label }) => {
  const classes = useStyles();
  const PropIcon = icon;

  return (
    <Paper className={classes.root}>
      {icon && (
        <IconButton
          className={classes.iconButton}
          aria-label="menu"
          tabIndex="-1"
        >
          {(icon && <PropIcon />) || <Menu />}
        </IconButton>
      )}
      <Select
        value={value}
        onChange={e => func(e)}
        className={value === "" ? classes.placeholder : classes.selectOption}
        name={name}
      >
        {value === "" && (
          <MenuItem value={""} disabled>{`Select ${label}`}</MenuItem>
        )}
        {options.array.map((e, i) => (
          <MenuItem value={e[options.value]} key={i}>
            {e[options.label]}
          </MenuItem>
        ))}
      </Select>
    </Paper>
  );
};

export default InputSelect;
