import React from "react";
import { reduxForm, Field } from "redux-form";
import TextFieldComponent from "../ElementsUI/TextFieldComponent";
import RadioGroupPlanComponent from "../ElementsUI/RadioGroupPlanComponent";
import { Row, Col } from "react-styled-flexboxgrid";
import { Button, Typography, Link } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import FormComponent from "../ElementsUI/FormComponent";
import MobileWidth from "../MobileWidth";
import InputAdornment from '@material-ui/core/InputAdornment';
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
                        <Typography align="center" variant="h5" display="block">
                          PAGO TOTAL
                  </Typography>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <Typography align="center" display="block">
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
                        </Typography>
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
                          // value={discountcode}
                          onChange={handleChangeDiscountCode}
                          endAdornment={
                            <InputAdornment position="end">
                              <Button
                                aria-label="toggle password visibility"
                                onClick={handleApplyDiscount}
                              >
                                APLICAR
                              </Button>
                            </InputAdornment>
                          }
                        />
                        )}
                      </Col>
                    </Row>
                    {/* <Row>
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
                    </Row> */}
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
