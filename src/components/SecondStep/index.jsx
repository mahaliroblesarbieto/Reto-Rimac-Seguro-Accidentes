import React from "react";
import { reduxForm, Field } from "redux-form";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";

const SecondStep = ({
  error,
  handleSubmit,
  pristine,
  reset,
  submitting,
  initialValues,
  invalid,
  ensureYourself,
  name,
  numberDni
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
                    Tus asegurados
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                    Preséntanos a quién vamos a proteger
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Typography align="center" display="block">
                    ASEGURADOS 
                  </Typography>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <FormComponent onSubmit={handleSubmit}>
                    {ensureYourself === "yes" ? (
                      <Row>
                        <Col xs={12}>
                          <p>{name}</p>
                          <p>{numberDni}</p>
                        </Col>
                      </Row>
                    ) : (
                      ""
                    )}
                    <Link
                      type="button"
                      component="button"
                      variant="body2"
                      //   onClick={modifyDni}
                    >
                      Quiero asegurar a alguien más
                    </Link>
                    <Row>
                      <Col xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                        >
                          CONTINUAR
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
  form: "FormSecondStep"
  //   enableReinitialize: true,
  //   validate: handleValidateSecondStepForm,
})(SecondStep);
