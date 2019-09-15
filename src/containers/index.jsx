import React from "react";
import IntroductionContainer from "./IntroductionContainer";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      numberDni: ""
    };
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
      <IntroductionContainer
        updateNameAndNumberDni={this.updateNameAndNumberDni}
        setName={this.props.setName}
      />
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
