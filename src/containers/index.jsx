import React from "react";
import IntroductionContainer from "./IntroductionContainer";
import FirstStepContainer from "./FirstStepContainer";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      numberDni: "",
      step: 0,
    };
  }

  updateStep = () => {
      const newStep = this.state.step + 1;
      this.setState({step: newStep});
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

  render() {
    return (
        <>
        {this.state.step === 0 ? <IntroductionContainer
        updateNameAndNumberDni={this.updateNameAndNumberDni}
        setName={this.props.setName}
        updateStep={this.updateStep}
      /> : ''}
      {this.state.step === 1 ? <FirstStepContainer/> :''}
      
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
