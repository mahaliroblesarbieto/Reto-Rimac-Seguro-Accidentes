import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupComponent from "../ElementsUI/RadioGroupComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import {
  dniNumber,
  handleValidateDniNumber,
  handleValidateEmail,
} from "../../validations/field";
import {handleValidateFirstStepForm} from "../../validations/form";

const FourthStep = ({restart
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <Typography align="center" variant="h5" display="block">
                    ¡Felicidades!
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                    Tus seres queridos ahora se encuentran protegidos
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                  Descarga tu póliza llegará que en un máximo de 24 horas al correo eva.pinedo@rimac.com.pe
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                  Conoce más sobre tu seguro
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Button onClick={restart}> IR AL HOME </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </MobileWidth>
      </Row>
    </React.Fragment>
  );
};

export default FourthStep;