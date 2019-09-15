import React from 'react';
import SecondStep from '../components/SecondStep';

class SecondStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          addUser: false,
        };
      }

      showComponentUserData = () => {
          console.log('esta entrando a la funcion');
          
        this.setState({
            addUser: true,
          })
      }
    render() {
        return <SecondStep 
        ensureYourself={this.props.ensureYourself}
        name={this.props.name}
        numberDni={this.props.numberDni}
        insuredUsers={this.props.insuredUsers}
        addUser={this.state.addUser}
        showComponentUserData={this.showComponentUserData}

        />
    }
}

export default SecondStepContainer;