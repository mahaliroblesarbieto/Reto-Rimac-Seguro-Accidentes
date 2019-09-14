import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SquareCheckboxComponent = ({ input, label }) => {
  return(
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </React.Fragment>
  )}

  export default SquareCheckboxComponent;