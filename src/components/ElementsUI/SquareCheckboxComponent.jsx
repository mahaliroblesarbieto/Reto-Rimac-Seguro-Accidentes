import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import { Row, Col } from "react-styled-flexboxgrid";
import "./Styles/SquareCheckbox.scss"

const GreenCheckbox = withStyles({
  root: {
    color: lightGreen[500],
    '&$checked': {
      color: lightGreen[500],
    },
  },
  checked: {},
})(props => <Checkbox    {...props} />);

const SquareCheckboxComponent = ({ input, label, fields }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={2}><GreenCheckbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        /></Col>
        <Col xs={10}><label className="label">
          {label}
        </label></Col>

      </Row>




    </React.Fragment>
  )
}

export default SquareCheckboxComponent;