import React from "react";
import { TextField } from "@material-ui/core";


const TextFieldComponent = ({ input, meta, type, label, name, ...custom }) => {
  return (
      <React.Fragment>
        <TextField
        fullWidth
        label={label}
        name={name}
        {...input}
        type={type}
        {...custom}
        margin="dense"
      />
      <p>{meta.error && meta.error}</p>
      </React.Fragment>
  );
};

export default TextFieldComponent;