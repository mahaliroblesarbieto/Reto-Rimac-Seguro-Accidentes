import React from "react";
import { reduxForm, Field } from "redux-form";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import UserData from "../UserData";

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
  numberDni,
  insuredUsers,
  addUser,
  showComponentUserData,
  onSubmit,
  onSubmitSuccess,
  handleDeleteUser,
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
                    ASEGURADOS ({insuredUsers.length})
                  </Typography>
                </Col>
              </Row>
              {addUser? <UserData onSubmit={onSubmit} onSubmitSuccess={onSubmitSuccess}/> : 
              <Row>
                <FormComponent >
              <Row>
                {insuredUsers.map((users, index) => {
                  return (
                    <Row key={index}>
                      <Col xs={8}>
                        <Row>
                          <p>{users.name}</p>
                        </Row>
                        <Row>
                          <p>{users.dni}</p>
                        </Row>
                      </Col>
                      <Col xs={4}>
                        <Button onClick={() => handleDeleteUser(users.dni)}>Eliminar</Button>
                      </Col>
                    </Row>
                  );
                })}
              </Row>
              <Row>
                <Col>
              <Link
                type="button"
                component="button"
                variant="body2"
                onClick={() => showComponentUserData()}
              >
                Quiero asegurar a alguien más
              </Link>
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
                    CONTINUAR
                  </Button>
                </Col>
              </Row>
              </FormComponent>
            </Row>
            }
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
