import React from 'react';
import IntroductionContainer from './IntroductionContainer';
import { connect } from 'react-redux';

class Index extends React.Component {
    render() {
        return (<IntroductionContainer/>)
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    // return {
    //   counter: state.counter
    // }
  }
  
  const mapDispatchToProps = { 
    //   increment, decrement, reset 
    }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Index);

