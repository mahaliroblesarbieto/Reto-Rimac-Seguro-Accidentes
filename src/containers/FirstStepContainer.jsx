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
    render() {
        return <FirstStep name={this.props.name} initialValues={this.props.initialValues} disabledTextfieldDni={this.state.disabledTextfieldDni} modifyDni={this.modifyDni}/>
    }
}

export default FirstStepContainer;