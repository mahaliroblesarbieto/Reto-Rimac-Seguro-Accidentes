import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";

const Introduction = () => {  
    return (
      <React.Fragment>
        <Row center="xs">
        <MobileWidth>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Typography align="center" variant="h5" display="block">
                  Protégelos ahora
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Typography align="center" display="block">
                  Ingresa los datos del titular
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormComponent>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nro. de Documento"}
                        name={"dni"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombre"}
                        name={"name"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                      >
                        COMENCEMOS
                      </Button>
                    </Col>
                  </Row>
                </FormComponent>
              </Col>
            </Row>
          </Col>
        </Row>
        </MobileWidth>
        </Row>
      </React.Fragment>
    );
  };
  
export default reduxForm({
    form: "FormIntroduction",
    // validate: validateIntroduction,
  })(Introduction);
  