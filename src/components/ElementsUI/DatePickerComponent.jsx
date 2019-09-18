

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
  },
}));

export default function DatePickerComponent({ input, meta, type, label, name, ...custom }) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
      name={name}
      {...input}
      {...custom}
        id="date"
        label="Birthday"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}