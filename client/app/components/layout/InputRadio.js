import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";

const InputRadio = ({ options, name, func, value }) => {
  return (
    <RadioGroup
      row
      aria-label={name}
      name={name}
      value={value}
      onChange={e => func(e)}
    >
      {options.map(e => (
        <FormControlLabel
          key={e.value}
          value={e.value}
          control={<Radio color={e.color || "primary"} />}
          label={e.label}
          labelPlacement="end"
        />
      ))}
    </RadioGroup>
  );
};

export default InputRadio;
