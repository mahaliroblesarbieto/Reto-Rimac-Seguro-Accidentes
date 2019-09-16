import React from 'react';
import SecondStep from '../components/SecondStep';

class SecondStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          addUser: false,
        };
      }

      handleSubmitUserDataForm = values => {
        console.log(values);
        const data= { name: values.name, dni: values.dni, lastName: values.lastName, secondLastName: values.secondLastName, birthday: values.birthday, gender: values.gender }
            this.props.updateInsuredUsers(data);
            return values;
        }

        handleSubmitSuccessUserDataForm = res => {
          // const data= { name: this.props.name, dni: res.dni }
          //   this.props.updateInsuredUsers(data);
          this.setState({
            addUser: false,
          })
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
        onSubmit={this.handleSubmitUserDataForm}
        onSubmitSuccess={this.handleSubmitSuccessUserDataForm}

        />
    }
}

export default SecondStepContainer;