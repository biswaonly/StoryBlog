class FormDataChange {
  changeToNumber(arr, data) {
    const changedValue = arr.reduce((pv, cv) => {
      pv[cv] = data[cv] === "" ? 0 : parseInt(data[cv]);
      return pv;
    }, {});

    let newData = this.removeEmpty(Object.assign({ ...data, ...changedValue }));
    return Object.assign({}, { ...newData });
  }

  removeEmpty(data) {
    return Object.keys(data).reduce((ac, cv) => {
      if (data[cv] !== "" || data[cv] !== null || data[cv] !== undefined) {
        ac[cv] = data[cv];
      }
      return ac;
    }, {});
  }
}

const FormDataEval = new FormDataChange();

export default FormDataEval;
