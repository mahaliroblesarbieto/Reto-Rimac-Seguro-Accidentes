import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import DatePickerComponent from "../ElementsUI/DatePickerComponent";
import RadioGroupGenderComponent from "../ElementsUI/RadioGroupGenderComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import { dniNumber, handleValidateDniNumber, handleValidateNameAndLastName } from "../../validations/field";
import {handleValidateUserDataForm} from "../../validations/form";
import ButtonComponent from "../ElementsUI/ButtonComponent";

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
  invalid,
  showList,
  insuredUsers
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <p>
                  Datos del asegurado Nº {insuredUsers.length + 1}
                </p>
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
                        validate={dniNumber}
                        normalize={handleValidateDniNumber}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombres"}
                        name={"name"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Apellido Paterno"}
                        name={"lastName"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Apellido Materno"}
                        name={"secondLastName"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                    <Row>
                      <Col xs={12}>
                      <Field
                        component={DatePickerComponent}
                        name={"birthday"}
                        variant="outlined"
                      />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>
                          GÈNERO
                        </p>
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
                    <ButtonComponent
                            type={"submit"}
                            disabled={submitting || invalid}
                            content={initialValues !== '' ? 'GUARDAR EDICIÓN' : 'GUARDAR' }
                          />
                      {/* <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        type="submit"
                        disabled={submitting || invalid}
                      >
                        {initialValues !== '' ? 'GUARDAR EDICIÓN' : 'GUARDAR' }
                      </Button> */}
                    </Col>
                  </Row>
                  <Row className="margin-link" center="xs">
                  <Link
                    type="button"
                    component="button"
                    variant="body2"
                    onClick={showList}
                  >
                    Cancelar
                  </Link>
                  </Row>
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
