import React from 'react';
import Introduction from '../components/Introduction';

import { SubmissionError } from "redux-form";
class IntroductionContainer extends React.Component {
    handleSubmitIntroduction = values => {
        const { dni, name } = values;
        if(dni === undefined && name === undefined){
            throw new SubmissionError({ dni: "Este campo es requerido", name: "Este campo es requerido"  });
        }else if(dni === undefined) {
            throw new SubmissionError({ dni: "Este campo es requerido" });
        } else if ( name === undefined) {
            throw new SubmissionError({ name: "Este campo es requerido" });
        } else {
            this.props.updateNameAndNumberDni(name, dni);
            return values;
        }
      };
      handleSuccessSubmitIntroduction = res => {
          this.props.setName(res.name);
          this.props.updateStep();
      }
    render() {
        return (
        <Introduction
        onSubmit={this.handleSubmitIntroduction}
        onSubmitSuccess={this.handleSuccessSubmitIntroduction}
        />)
    }
}

export default IntroductionContainer;