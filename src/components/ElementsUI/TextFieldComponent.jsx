import React from "react";
import { TextField } from "@material-ui/core";
import './Styles/TextField.scss';
import { ThemeProvider } from '@material-ui/styles';
import {grey }from '@material-ui/core/colors';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary:grey,
  },
});


const TextFieldComponent = ({ input, meta, type, label, name, ...custom }) => {
  return (
    <React.Fragment>
      {/* <div className="div-textfield">
			  <input className="inputText"    name={name}
        {...input}
        type={type}
        {...custom} />
			 <span htmlFor="input" className="floating-label">{label}</span>
      </div> */}
       <ThemeProvider theme={theme}>
        <TextField
        fullWidth
        label={label}
        name={name}
        {...input}
        type={type}
        {...custom}
        variant="outlined"
      />
       </ThemeProvider>
      <p>{meta.error && meta.error}</p>
    </React.Fragment>
  );
};

export default TextFieldComponent;