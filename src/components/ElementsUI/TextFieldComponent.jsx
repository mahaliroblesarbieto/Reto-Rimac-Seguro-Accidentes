import React from "react";
import { TextField } from "@material-ui/core";
import './Styles/TextField.scss';


const TextFieldComponent = ({ input, meta, type, label, name, ...custom }) => {
  return (
    <React.Fragment>
      <div className="div-textfield">
			  <input className="inputText"    name={name}
        {...input}
        type={type}
        {...custom} />
			 <span htmlFor="input" className="floating-label">{label}</span>
		  </div>
        {/* <TextField
        fullWidth
        label={label}
        name={name}
        {...input}
        type={type}
        {...custom}
        variant="outlined"
      /> */}
      <p>{meta.error && meta.error}</p>
    </React.Fragment>
  );
};

export default TextFieldComponent;