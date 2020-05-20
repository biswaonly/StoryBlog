import React from "react";
import { Grid, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import InputRadio from "./InputRadio";
import InputReadOnly from "./InputReadOnly";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import InputTextarea from "./InputTextarea";

const useStyles = makeStyles({
  gridSpace: { margin: "10px 0" },
  label: { fontWeight: 500, color: "black" }
});

const RenderSwitchCase = ({
  label,
  type,
  func,
  name,
  value,
  icon,
  placeholder,
  validators,
  errorMessages,
  options
}) => {
  switch (type) {
    case "radio":
      return (
        <InputRadio
          options={options}
          value={value}
          name={name}
          func={e => func(e)}
        />
      );

    case "readonly":
      return <InputReadOnly name={name} icon={icon} value={value} />;

    case "select":
      return (
        <InputSelect
          options={options}
          icon={icon}
          value={value}
          func={e => func(e)}
          name={name}
          placeholder={placeholder}
          label={label}
        />
      );

    case "textarea":
      return (
        <InputTextarea
          value={value}
          name={name}
          func={e => func(e)}
          label={label}
          placeholder={placeholder}
        />
      );

    default:
      return (
        <InputText
          label={label}
          type={type}
          placeholder={placeholder}
          func={e => func(e)}
          name={name}
          icon={icon}
          value={value}
          validators={validators}
          errorMessages={errorMessages}
        />
      );
  }
};

const AppInputs = ({
  label,
  type,
  func,
  name,
  value,
  icon,
  placeholder,
  validators,
  errorMessages,
  options
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.gridSpace}
    >
      <Grid item xs={4}>
        <InputLabel className={classes.label}>{label}</InputLabel>
      </Grid>
      <Grid item xs={8}>
        <RenderSwitchCase
          label={label}
          type={type}
          func={e => func(e)}
          name={name}
          value={value}
          icon={icon}
          placeholder={placeholder}
          validators={validators}
          errorMessages={errorMessages}
          options={options}
        />
      </Grid>
    </Grid>
  );
};

export default AppInputs;
