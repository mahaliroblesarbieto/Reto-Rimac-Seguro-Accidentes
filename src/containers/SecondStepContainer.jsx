import React from 'react';
import SecondStep from '../components/SecondStep';

class SecondStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          addUser: false,
          initialValues: '',
          indexUser: ''
        };
      }

      showStepThree= () => {
        this.props.updateStep();

      }

      handleUpdateUser = (index) => {
        const dataUser = this.props.insuredUsers[index];
        this.setState({
          addUser: true,
          initialValues: dataUser,
          indexUser: index
        });
      }

      handleSubmitUserDataForm = values => {
        console.log(values);
        const data= { name: values.name, dni: values.dni, lastName: values.lastName, secondLastName: values.secondLastName, birthday: values.birthday, gender: values.gender }
        if(this.state.initialValues === '') {    
        this.props.updateInsuredUsers(data)
        } else {
          this.props.updateUserData(data, this.state.indexUser)
        }
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

      showList = () => {
        this.setState({
          addUser: false,
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
        handleDeleteUser={this.props.handleDeleteUser}
        handleUpdateUser={this.handleUpdateUser}
        initialValues={this.state.initialValues}
        showList={this.showList}
        showStepThree={this.showStepThree}
        />
    }
}

export default SecondStepContainer;