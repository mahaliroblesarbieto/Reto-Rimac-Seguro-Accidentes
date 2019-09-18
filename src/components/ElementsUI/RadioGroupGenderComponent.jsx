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

const RadioGroupGenderComponent = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="male" control={<GreenRadio />} label="Masculino" />
      <FormControlLabel value="female" control={<GreenRadio />} label="Femenino" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupGenderComponent;