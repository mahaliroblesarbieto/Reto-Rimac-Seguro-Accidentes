import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupComponent from "../ElementsUI/RadioGroupComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import ButtonComponent from "../ElementsUI/ButtonComponent";
import MobileWidth from "../MobileWidth";
import {
  dniNumber,
  handleValidateDniNumber,
  handleValidateEmail,
} from "../../validations/field";
import {handleValidateFirstStepForm} from "../../validations/form";

const FourthStep = ({restart, email
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <p className="span">
                    ¡Felicidades!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="title">
                    Tus seres queridos ahora se encuentran protegidos
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p>
                  Descarga tu póliza llegará que en un máximo de 24 horas al correo {email}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p>
                  Conoce más sobre tu seguro
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  {/* <Button onClick={restart}> IR AL HOME </Button> */}
                  <ButtonComponent
                            type={"button"}
                            onClick={restart}
                            // disabled={submitting || invalid}
                            content={`IR AL HOME `}
                          />
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