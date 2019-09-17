import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const GreenCheckbox = withStyles({
  root: {
    color: lightGreen[500],
    '&$checked': {
      color: lightGreen[500],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const SquareCheckboxComponent = ({ input, label, fields }) => {
  return(
    <React.Fragment>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </React.Fragment>
  )}

  export default SquareCheckboxComponent;