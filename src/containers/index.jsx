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
import Header from "../components/Utils/Header";
import AdIntro from "../components/Utils/AdIntro";
import SecondImg from "../assets/Illustration2.png"
import FirstImg from "../assets/Illustration.png"

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

  handleReturn = () => {
    const newStepReturn = this.state.step - 1;
    this.setState({
      step: newStepReturn,
      insuredUsers: []
    });
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
          <Col xs={12} md={6} lg={6} style={{ position: "relative" }}>
            <Header className="fixed" />
            <AdIntro className="fixed" xs={false} />
            {/* {this.state.step=== 0 ? <p style={{ position: "absolute", top: 100,  right: 300, color: "white", fontSize: 33 }} className="position"> Seguro de <br></br>accidentes para <br></br> niños y jòvenes</p>: ''} */}
            {this.state.step === 0 ? 
            <img src={FirstImg} style={{ position: "absolute", top: 20, width: "30%", right: 0 }}></img> :
              <img src={SecondImg} style={{ position: "absolute", top: 20, width: "40%", right: 0 }}></img>}

          </Col>
          <Col xs={12} md={6} lg={6}>
            {this.state.step === 0 ? (
              <IntroductionContainer
                updateNameAndNumberDni={this.updateNameAndNumberDni}
                setName={this.props.setName}
                updateStep={this.updateStep}
                userData={this.props.userData}
              />
            ) : (
                <Row className="step">
                  <Col xs={1}>
                    <IconButton aria-label="delete" onClick={this.handleReturn}>
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
                email={this.state.email}
              /> : ""}
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.users.userData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch(setName(name)),
    getDataUser: () => dispatch(getDataUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
