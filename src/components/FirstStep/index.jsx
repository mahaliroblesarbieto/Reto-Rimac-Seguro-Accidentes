import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupComponent from "../ElementsUI/RadioGroupComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link} from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import { dniNumber, handleValidateDniNumber, handleValidateNameAndLastName } from "../../validations/field";


const FirstStep = ({ error, handleSubmit, pristine, reset, submitting, name, numberDni, initialValues, disabledTextfieldDni, modifyDni }) => {
  const substrName= name.substr(0, name.indexOf(' '));
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <Typography align="center" variant="h5" display="block">
                    Hola {substrName}, cuéntanos sobre ti
                </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                    Puedes protegerlos por solo S/20 al mes por asegurado
                </Typography>
                </Col>
              </Row>
              <Row>
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
                        <Field name="ensureYourself" component={RadioGroupComponent}>
                        </Field>
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
              </Row>
            </Col>
          </Row>
        </MobileWidth>
      </Row>
    </React.Fragment>
  );
};

// function mapStateToProps(state, ownProps) {
//   return {
//     initialValues: {
//       dni: ownProps.numberDni
//     }
// }
// };

export default reduxForm({
  form: "FormFirstStep",
  enableReinitialize: true,
 })(FirstStep);