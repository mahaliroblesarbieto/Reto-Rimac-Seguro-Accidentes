import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const GreenRadio = withStyles({
  root: {
    color: lightGreen[500],
    '&$checked': {
      color: lightGreen[500],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const RadioGroupPlanComponent = ({ input, onChange, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="40" control={<GreenRadio onChange={onChange}/>} label="PAGO MENSUAL" />
      <FormControlLabel value="400" control={<GreenRadio onChange={onChange}/>} label="PAGO ANUAL" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupPlanComponent;