import React from 'react';
import FirstStep from '../components/FirstStep';

class FirstStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          disabledTextfieldDni: true,
        };
      }

      modifyDni = () => {
          this.setState({disabledTextfieldDni: false})
      }

      handleSubmitFirstStepContainer = values => {
        const { dni, email, ensureYourself } = values;
        console.log('esta entrando a handleSubmit');
        console.log(dni, email, ensureYourself);
            this.props.updateNumberDniEmailAndEnsureYourself(dni, email, ensureYourself);
            return values;
        }

    render() {
        return <FirstStep 
        name={this.props.name} 
        initialValues={this.props.initialValues} 
        disabledTextfieldDni={this.state.disabledTextfieldDni} 
        modifyDni={this.modifyDni}
        onSubmit={this.handleSubmitFirstStepContainer}/>
    }
}

export default FirstStepContainer;