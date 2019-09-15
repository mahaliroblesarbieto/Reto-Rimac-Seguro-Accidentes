import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import SquareCheckboxComponent from "../ElementsUI/SquareCheckboxComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import { dniNumber, handleValidateDniNumber, handleValidateNameAndLastName} from "../../validations/field"

// const required = value => (value || typeof value === 'number' ? undefined : 'Required');
// const maxLength15 = maxLength(15)
// const dniNumber = value =>
//   value && !/^(0|[1-9][0-9]{8})$/i.test(value)
//     ? 'Número de dni incorrecto, debe tener 9 dígitos'
//     : undefined;


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
                        validate={dniNumber}
                        normalize={handleValidateDniNumber}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombre"}
                        name={"name"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Acepto la Política de Protección de Datos Personales y los Términos y Condiciones."}
                        name={"politics"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Acepto la Política de Envío de Comunicaciones Comerciales."}
                        name={"ads"}
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
  