import React from "react";
import IntroductionContainer from "./IntroductionContainer";
import FirstStepContainer from "./FirstStepContainer";
import SecondStepContainer from "./SecondStepContainer";
import ThirdStepContainer from "./ThirdStepContainer";
import { Row, Col } from "react-styled-flexboxgrid";
import { connect } from "react-redux";
import { setName } from "../redux/actions";
import { Typography } from "@material-ui/core";

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

  // componentDidUpdate() {
  //   this.handleDeleteUser();
  // }

  updateStep = () => {
    const newStep = this.state.step + 1;
    this.setState({ step: newStep });
  };

  updateInsuredUsers = (newUser) => {
    this.setState({insuredUsers: [...this.state.insuredUsers, newUser]}, () => console.log(this.state.insuredUsers)
    )
  }

  updateUserData = (newDataUser, index) => {
    let newInsuredUser = [...this.state.insuredUsers];
    newInsuredUser[index] = newDataUser;
    this.setState({insuredUsers: newInsuredUser})
  }

  handleDeleteUser = (dniUser) => {
    const newArrayInjuredUsersDelete = this.state.insuredUsers.filter(item => item.dni !== dniUser);
    this.setState({ insuredUsers: newArrayInjuredUsersDelete});
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
    }, () => console.log(this.state.numberDni, this.state.email, this.state.ensureYourself ));
    console.log('esta actualizando datos');
  }

  render() {
    return (
      <>
        {this.state.step === 0 ? (
          <IntroductionContainer
            updateNameAndNumberDni={this.updateNameAndNumberDni}
            setName={this.props.setName}
            updateStep={this.updateStep}
          />
        ) : (
          <Row>
            <Col xs={12}>
              <Typography align="center" variant="h5" display="block">
                Paso {this.state.step} de 4
              </Typography>
            </Col>
          </Row>
        )}
        {this.state.step === 1 ? 
        <FirstStepContainer 
        name={this.state.name} 
        initialValues={{dni: this.state.numberDni}}
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
        /> : ""}
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
    setName: name => dispatch(setName(name))
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(Index);
