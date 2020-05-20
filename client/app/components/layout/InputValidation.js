import React, { Fragment } from "react";
import { ValidatorComponent } from "react-form-validator-core";

class InputValidation extends ValidatorComponent {
  render() {
    const {
      errorMessages,
      validators,
      requiredError,
      validatorListener,
      setErrorText,
      ...rest
    } = this.props;
    this.errorText(setErrorText);

    return (
      <Fragment>
        <input {...rest} ref={r => (this.input = r)} />
      </Fragment>
    );
  }

  errorText(props) {
    const { isValid } = this.state;
    if (isValid) {
      return props("");
    }
    return props(this.getErrorMessage());
  }
}

export default InputValidation;
