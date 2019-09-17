import React from "react";
import { TextField } from "@material-ui/core";
import './Styles/TextField.scss';


const TextFieldComponent = ({ input, meta, type, label, name, ...custom }) => {
  return (
    <React.Fragment>
      {/* <div className="formsign__inputfloat">
			  <input className="formsign__inputfloat--input"    name={name}
        {...input}
        type={type}
        {...custom} />
			 <label htmlFor="input" className="formsign__inputfloat--label">{label}</label>
		  </div> */}
        <TextField
        fullWidth
        label={label}
        name={name}
        {...input}
        type={type}
        {...custom}
        // InputLabelProps={{ shrink: false }}
        // margin="dense"
        variant="outlined"
      />
      <p>{meta.error && meta.error}</p>
    </React.Fragment>
  );
};

export default TextFieldComponent;