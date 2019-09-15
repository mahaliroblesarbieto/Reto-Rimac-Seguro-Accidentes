import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupComponent from "../ElementsUI/RadioGroupComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography} from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import { dniNumber, handleValidateDniNumber, handleValidateNameAndLastName } from "../../validations/field"

const FirstStep = ({ error, handleSubmit, pristine, reset, submitting }) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <Typography align="center" variant="h5" display="block">
                    Hola, cuéntanos sobre ti
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
  form: "FormFirstStep",
  // initialValues: { politics: true, ads: true },
  // validate: validateIntroduction,
})(FirstStep);