import React from "react";
// import { RadioButtonGroup } from 'material-ui/RadioButton';
// import { RadioButtonGroup } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioGroupComponent = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="no" control={<Radio />} label="No" />
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupComponent;