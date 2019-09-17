import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioGroupPlanComponent = ({ input, onChange, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="40" control={<Radio onChange={onChange}/>} label="PAGO MENSUAL" />
      <FormControlLabel value="400" control={<Radio onChange={onChange}/>} label="PAGO ANUAL" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupPlanComponent;