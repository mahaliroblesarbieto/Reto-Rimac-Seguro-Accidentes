import React from "react";
import { reduxForm, Field } from "redux-form";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Link } from "@material-ui/core";
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import UserData from "../UserData";
import ButtonComponent from "../ElementsUI/ButtonComponent";
import "../FormStyles/SecondStep.scss";

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
  handleUpdateUser,
  showList,
  showStepThree
}) => {
  return (
    <React.Fragment>
      <Row center="xs">
        <MobileWidth>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12}>
                  <p className="title">
                    Tus <span className="span">asegurados</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="subtitle">
                    Preséntanos a quién vamos a proteger
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="third-subtitle">
                    ASEGURADOS ({insuredUsers.length})
                  </p>
                </Col>
              </Row>
              {addUser ? (
                <UserData
                  onSubmit={onSubmit}
                  onSubmitSuccess={onSubmitSuccess}
                  initialValues={initialValues}
                  showList={showList}
                />
              ) : (
                  <Row>
                    <FormComponent>
                      <Row>
                        {insuredUsers.map((users, index) => {
                          return (
                            <Row key={index} className="margin">
                              <Col xs={5}>
                                <Row>
                                  <p>{users.name}</p>
                                </Row>
                                <Row>
                                  <p>{users.dni}</p>
                                </Row>
                              </Col>
                              <Col xs={7}>
                                <Row className="center-height">
                                  <Col xs={6}>
                                    <Button
                                      onClick={() => handleDeleteUser(users.dni)}
                                    >
                                      Eliminar
                              </Button>
                                  </Col>
                                  <Col xs={6}>
                                    <Button onClick={() => handleUpdateUser(index)}>
                                      Editar
                              </Button>
                                  </Col>
                                </Row>
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
                          <ButtonComponent
                            type={"button"}
                            disabled={submitting || invalid}
                            content={"CONTINUAR"}
                            onClick={() => showStepThree()}
                          />
                          {/* <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="button"
                          onClick={() => showStepThree()}
                        >
                          CONTINUAR
                        </Button> */}
                        </Col>
                      </Row>
                    </FormComponent>
                  </Row>
                )}
            </Col>
          </Row>
        </MobileWidth>
      </Row>
    </React.Fragment>
  );
};

export default SecondStep;
