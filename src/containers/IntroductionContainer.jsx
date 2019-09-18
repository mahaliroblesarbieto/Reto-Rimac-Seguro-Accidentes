import React from 'react';
import Introduction from '../components/Introduction';

import { SubmissionError } from "redux-form";

class IntroductionContainer extends React.Component {
    handleSubmitIntroduction = values => {
        const { dni, name } = values;
        console.log(typeof dni);
        console.log(typeof name);
        console.log(this.props.userData.numDocumento);
        console.log(this.props.userData.nombres);
        
        
        
        
        if(dni === undefined && name === undefined){
            throw new SubmissionError({ dni: "Este campo es requerido", name: "Este campo es requerido"  });
        }else if(dni === undefined) {
            throw new SubmissionError({ dni: "Este campo es requerido" });
        } else if ( name === undefined) {
            throw new SubmissionError({ name: "Este campo es requerido" });
        } else {
            if(dni === this.props.userData.numDocumento){
                if(name !== this.props.userData.nombres ) {
                    throw new SubmissionError({ name: "Por favor, verifique los datos ingresados" });
                }
            }
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