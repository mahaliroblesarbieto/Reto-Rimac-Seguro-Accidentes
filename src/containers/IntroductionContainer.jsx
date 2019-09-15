import React from 'react';
import Introduction from '../components/Introduction';

import { SubmissionError } from "redux-form";
class IntroductionContainer extends React.Component {
    handleSubmitIntroduction = values => {
        
        const { dni, name } = values;
        console.log(dni, name);
        if(dni === undefined && name === undefined){
            throw new SubmissionError({ dni: "Este campo es requerido", name: "Este campo es requerido"  });
        }else if(dni === undefined) {
            throw new SubmissionError({ dni: "Este campo es requerido" });
        } else if ( name === undefined) {
            throw new SubmissionError({ name: "Este campo es requerido" });
        } else {
            console.log('todo bien');
        }
      };
    render() {
        return (
        <Introduction
        onSubmit={this.handleSubmitIntroduction}
        />)
    }
}

export default IntroductionContainer;