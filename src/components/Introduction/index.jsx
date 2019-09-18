import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import SquareCheckboxComponent from "../ElementsUI/SquareCheckboxComponent";
import ButtonComponent from "../ElementsUI/ButtonComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import { dniNumber, handleValidateDniNumber, handleValidateNameAndLastName } from "../../validations/field";
import "../FormStyles/Introduction.scss";

const Introduction = ({ error, handleSubmit, pristine, reset, submitting }) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <FormComponent onSubmit={handleSubmit}>
                    <Row xsOffset={7} xs={5}>
                      <p className="title">
                        Protégelos <span className="span">ahora</span>
                      </p>
                    </Row>
                    <Row xsOffset={8} xs={4}>
                      <p className="subtitle">
                        Ingresa los datos del titular
                      </p>
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
                        <ButtonComponent
                          fullWidth
                          type={"submit"}
                          content={"COMENCEMOS"}
                        />
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
  initialValues: { politics: true, ads: true },
  // validate: validateIntroduction,
})(Introduction);
