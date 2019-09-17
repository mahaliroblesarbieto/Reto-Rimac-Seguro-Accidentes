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
// import {handleValidateFirstStepForm} from "../../validations/form";

const ThirdStep = ({
  error,
  handleSubmit,
  pristine,
  reset,
  submitting,
  name,
  numberDni,
  initialValues,
  disabledTextfieldDni,
  modifyDni,
  invalid,
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
                    Elige el pago ideal
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                    Decide entre 12 pagos mensuales o sólo una cuota al año
                  </Typography>
                </Col>
              </Row>
              {/* <Row>
                <Col xs={12}>
                  <FormComponent onSubmit={handleSubmit}>
                    <Row>
                      <Typography align="center" display="block">
                        Datos del titular
                      </Typography>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Field
                          component={TextFieldComponent}
                          label={"Nro. de Documento"}
                          name={"dni"}
                          validate={dniNumber}
                          normalize={handleValidateDniNumber}
                          disabled={disabledTextfieldDni ? true : false}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Field
                          component={TextFieldComponent}
                          label={"Correo"}
                          name={"email"}
                          // normalize={handleValidateNameAndLastName}
                          validate={handleValidateEmail}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Typography align="center" display="block">
                        ¿ VAS A ASEGURARTE A TI?
                      </Typography>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Field
                          name="ensureYourself"
                          component={RadioGroupComponent}
                        ></Field>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                          disabled={submitting || invalid}
                        >
                          COMENCEMOS
                        </Button>
                      </Col>
                    </Row>
                    <Link
                      type="button"
                      component="button"
                      variant="body2"
                      onClick={modifyDni}
                    >
                      Modificar DNI
                    </Link>
                  </FormComponent>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </MobileWidth>
      </Row>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "FormThirdStep",
//   enableReinitialize: true,
//   validate: handleValidateFirstStepForm,
})(ThirdStep);
