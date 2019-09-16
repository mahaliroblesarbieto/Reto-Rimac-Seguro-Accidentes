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

      handleSuccessSubmitFirstStep = res => {
          this.props.updateStep();
          const data= { name: this.props.name, dni: res.dni }
          if(res.ensureYourself === 'yes') {
            this.props.updateInsuredUsers(data);
          }
      }

    render() {
        return <FirstStep 
        name={this.props.name} 
        initialValues={this.props.initialValues} 
        disabledTextfieldDni={this.state.disabledTextfieldDni} 
        modifyDni={this.modifyDni}
        onSubmit={this.handleSubmitFirstStepContainer}
        onSubmitSuccess={this.handleSuccessSubmitFirstStep}
        />
    }
}

export default FirstStepContainer;