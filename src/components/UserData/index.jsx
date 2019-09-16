import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import DatePickerComponent from "../ElementsUI/DatePickerComponent";
import RadioGroupGenderComponent from "../ElementsUI/RadioGroupGenderComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
// import { dniNumber, handleValidateDniNumber } from "../../validations/field";
import {handleValidateUserDataForm} from "../../validations/form";

const UserData = ({
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
  invalid
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Typography align="center" variant="h5" display="block">
                  Datos del asegurado Nº
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <FormComponent onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nro. de Documento"}
                        name={"dni"}
                        // validate={dniNumber}
                        // normalize={handleValidateDniNumber}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombres"}
                        name={"name"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Apellido Paterno"}
                        name={"lastName"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Apellido Materno"}
                        name={"secondLastName"}
                      />
                    </Col>
                    <Row>
                      <Col xs={12}>
                      <Field
                        component={DatePickerComponent}
                        name={"birthday"}
                      />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Typography align="center" variant="h5" display="block">
                          GÈNERO
                        </Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <Field
                          name="gender"
                          component={RadioGroupGenderComponent}
                        ></Field>
                      </Col>
                    </Row>
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
                    Cancelar
                  </Link>
                </FormComponent>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default reduxForm({
  form: "FormUserData",
    enableReinitialize: true,
    validate: handleValidateUserDataForm,
})(UserData);
