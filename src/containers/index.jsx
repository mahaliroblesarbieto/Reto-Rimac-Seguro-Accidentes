import React from 'react';
import IntroductionContainer from './IntroductionContainer';
import { connect } from 'react-redux';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          numberDni: '',
        };
      }

    updateNameAndNumberDni = (newName, newNumberDni) => {
        this.setState({
            name: newName,
            numberDni: newNumberDni,
        }, () => console.log(this.state.name, this.state.numberDni))
    }
    
    render() {
        return (<IntroductionContainer updateNameAndNumberDni={this.updateNameAndNumberDni} />)
    }
}

const mapStateToProps = (state ) => {
    return {
      state
    }
  }
  
  const mapDispatchToProps = { 
    //   increment, decrement, reset 
    }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index);

