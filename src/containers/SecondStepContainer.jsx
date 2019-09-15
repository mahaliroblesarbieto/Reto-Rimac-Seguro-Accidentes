import React from 'react';
import SecondStep from '../components/SecondStep';

class SecondStepContainer extends React.Component {
    render() {
        return <SecondStep 
        ensureYourself={this.props.ensureYourself}
        name={this.props.name}
        numberDni={this.props.numberDni}
        insuredUsers={this.props.insuredUsers}
        />
    }
}

export default SecondStepContainer;