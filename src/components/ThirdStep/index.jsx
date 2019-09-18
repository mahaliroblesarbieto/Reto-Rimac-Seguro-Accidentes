import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupPlanComponent from "../ElementsUI/RadioGroupPlanComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link, Input } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import InputAdornment from '@material-ui/core/InputAdornment';
import SquareCheckboxComponent from "../ElementsUI/SquareCheckboxComponent";
import ButtonComponent from "../ElementsUI/ButtonComponent";
import ButtonComponentDiscount from "../ElementsUI/ButtonComponentDiscount";
import {
  handleValidateEmail,
  handleValidateDueDate,
  handleValidateNameAndLastName,
  handleValidateCardNumber,
  handleValidateCvv
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
  totalAmount,
  handleChange,
  handleChangeDiscountCode,
  handleApplyDiscount,
  applyDiscount,
  discount,
  showList,
  hideListUser,
  showListUser,
  insuredUsers
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
                    Elige el <span className="span">pago ideal</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="subtitle">
                    Decide entre 12 pagos mensuales o sólo una cuota al año
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <FormComponent onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12}>
                        <Field
                          name="plan"
                          component={RadioGroupPlanComponent}
                          onChange={handleChange}
                        ></Field>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>
                          PAGO TOTAL
                  </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <p>
                          Por 2 asegurados
                          {showList ? <Link
                            type="button"
                            component="button"
                            variant="body2"
                            onClick={() => hideListUser()}
                          >
                            OCULTAR
                        </Link> : <Link
                              type="button"
                              component="button"
                              variant="body2"
                              onClick={() => showListUser()}
                            >
                              DETALLE
                        </Link>}
                        </p>
                      </Col>
                      <Col xs={2}>
                        {totalAmount}
                      </Col>
                    </Row>
                    {showList ?
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
                            </Row>
                          );
                        })}
                      </Row> : ''}
                    <Row>
                      <Col xs={12}>
                        {applyDiscount ? `¡Genial! tienes ${discount} % de dscto extra.` : (<Input
                          id="descuento"
                          type='text'
                          variant="outlined"
                          placeholder="Ingresar còdigo de dscto"
                          // value={discountcode}
                          onChange={handleChangeDiscountCode}
                          endAdornment={
                            <InputAdornment position="end">
                              <ButtonComponentDiscount
                            type={"button"}
                            onClick={handleApplyDiscount}
                            // disabled={submitting || invalid}
                            content={"APLICAR"}
                          />
                              {/* <Button
                                aria-label="toggle password visibility"
                                onClick={handleApplyDiscount}
                              >
                                APLICAR
                              </Button> */}
                            </InputAdornment>
                          }
                        />
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <p>
                          Ahora ingresa los datos de tu tarjeta
                        </p>
                      </Col>
                    </Row>
                    <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Nombre del Titular"}
                        name={"name"}
                        normalize={handleValidateNameAndLastName}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Número de Tarjeta"}
                        name={"numberCard"}
                        normalize={handleValidateCardNumber}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <Field
                        component={TextFieldComponent}
                        label={"Fecha de Vencimiento"}
                        name={"dueDate"}
                        normalize={handleValidateDueDate}
                      />
                    </Col>
                    <Col xs={6}>
                      <Field
                        component={TextFieldComponent}
                        label={"CVV"}
                        name={"cvv"}
                        normalize={handleValidateCvv}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={TextFieldComponent}
                        label={"Correo electrónico"}
                        name={"email"}
                        validate={handleValidateEmail}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente."}
                        name={"acceptcuota"}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Field
                        component={SquareCheckboxComponent}
                        label={"Acepto las políticas de envío de la póliza electrónica."}
                        name={"acceptpolitics"}
                      />
                    </Col>
                  </Row>

                    <Row>
                      <Col xs={12}>
                      <ButtonComponent
                            type={"submit"}
                            // disabled={submitting || invalid}
                            content={`PAGAR ${totalAmount}`}
                          />
                        {/* <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          type="submit"
                          // disabled={submitting || invalid
                        >
                          PAGAR {totalAmount}
                        </Button> */}
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
  form: "FormThirdStep",
  //   enableReinitialize: true,
  //   validate: handleValidateFirstStepForm,
})(ThirdStep);
