import React from 'react';
import FirstStep from '../components/FirstStep';

class FirstStepContainer extends React.Component {
    render() {
        return <FirstStep name={this.props.name}/>
    }
}

export default FirstStepContainer;