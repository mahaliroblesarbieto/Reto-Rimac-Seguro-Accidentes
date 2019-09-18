import React from "react";
import IntroductionContainer from "./IntroductionContainer";
import FirstStepContainer from "./FirstStepContainer";
import SecondStepContainer from "./SecondStepContainer";
import ThirdStepContainer from "./ThirdStepContainer";
import FourthStep from "../components/FourthStep";
import { connect } from "react-redux";
import { setName, getDataUser } from "../redux/actions";
import "./StylesContainer/index.scss";
import { Row, Col } from "react-styled-flexboxgrid";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// probando que hace commit con mi nombre

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      numberDni: "",
      step: 0,
      email: "",
      ensureYourself: "",
      insuredUsers: [],
    };
  }

  componentDidMount() {
    this.props.getDataUser();
  }

  updateStep = () => {
    const newStep = this.state.step + 1;
    this.setState({ step: newStep });
  };

  updateInsuredUsers = (newUser) => {
    this.setState({ insuredUsers: [...this.state.insuredUsers, newUser] }, () => console.log(this.state.insuredUsers)
    )
  }

  updateUserData = (newDataUser, index) => {
    let newInsuredUser = [...this.state.insuredUsers];
    newInsuredUser[index] = newDataUser;
    this.setState({ insuredUsers: newInsuredUser })
  }

  handleDeleteUser = (dniUser) => {
    const newArrayInjuredUsersDelete = this.state.insuredUsers.filter(item => item.dni !== dniUser);
    this.setState({ insuredUsers: newArrayInjuredUsersDelete });
  }

  updateNameAndNumberDni = (newName, newNumberDni) => {
    this.setState(
      {
        name: newName,
        numberDni: newNumberDni
      },
      () => console.log(this.state.name, this.state.numberDni)
    );
  };

  updateNumberDniEmailAndEnsureYourself = (newNumberDni, newEmail, newEnsureYourself) => {
    this.setState({
      numberDni: newNumberDni,
      email: newEmail,
      ensureYourself: newEnsureYourself,
    }, () => console.log(this.state.numberDni, this.state.email, this.state.ensureYourself));
    console.log('esta actualizando datos');
  }

  restart = () => {
    this.setState({ step: 0 })
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={4} lg={4}></Col>
          <Col xs={12} md={8} lg={8}>
            {this.state.step === 0 ? (
              <IntroductionContainer
                updateNameAndNumberDni={this.updateNameAndNumberDni}
                setName={this.props.setName}
                updateStep={this.updateStep}
              />
            ) : (
                <Row className="step">
                  <Col xs={1}>
                    <IconButton aria-label="delete">
                      <ArrowBackIosIcon />
                    </IconButton>
                  </Col>
                  <Col xs={11}>
                    <p>
                      {this.state.step} DE 4
              </p>
                  </Col>
                </Row>
              )}
            {this.state.step === 1 ?
              <FirstStepContainer
                name={this.state.name}
                initialValues={{ dni: this.state.numberDni }}
                updateNumberDniEmailAndEnsureYourself={this.updateNumberDniEmailAndEnsureYourself}
                updateInsuredUsers={this.updateInsuredUsers}
                updateStep={this.updateStep}
              /> : ""}
            {this.state.step === 2 ?
              <SecondStepContainer
                ensureYourself={this.state.ensureYourself}
                name={this.state.name}
                numberDni={this.state.numberDni}
                insuredUsers={this.state.insuredUsers}
                updateInsuredUsers={this.updateInsuredUsers}
                updateUserData={this.updateUserData}
                handleDeleteUser={this.handleDeleteUser}
                updateStep={this.updateStep}
              /> : ""}
            {this.state.step === 3 ?
              <ThirdStepContainer
                insuredUsers={this.state.insuredUsers}
                updateStep={this.updateStep}
              /> : ""}
            {this.state.step === 4 ?
              <FourthStep
                restart={this.restart}
              /> : ""}
          </Col>
        </Row>
      </>
    );
  }
}

// const mapStateToProps = (state ) => {
//     return {
//       state
//     }
//   }

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch(setName(name)),
    getDataUser: () => dispatch(getDataUser())
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Index);
