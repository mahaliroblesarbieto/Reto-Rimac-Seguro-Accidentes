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

const RadioGroupComponent = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="no" control={<GreenRadio />} label="No" />
      <FormControlLabel value="yes" control={<GreenRadio />} label="Sì" />
    </RadioGroup>
  </FormControl>
)

export default RadioGroupComponent;