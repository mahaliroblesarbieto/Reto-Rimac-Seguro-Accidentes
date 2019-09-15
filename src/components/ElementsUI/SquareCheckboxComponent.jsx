import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SquareCheckboxComponent = ({ input, label, fields }) => {
  return(
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            // checked={typeof fields['checkbox'].checked == 'undefined'?false:this.props.fields['checkbox'].checked} 
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </React.Fragment>
  )}

  export default SquareCheckboxComponent;