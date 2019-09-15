import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioGroupGenderComponent = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="male" control={<Radio />} label="Masculino" />
      <FormControlLabel value="female" control={<Radio />} label="Femenino" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupGenderComponent;