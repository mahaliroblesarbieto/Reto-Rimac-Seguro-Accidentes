import React from 'react';
import ThirdStep from '../components/ThirdStep';

class ThirdStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          totalAmount: "",
        };
      }

      handleChange = (event) => {
          this.setState({totalAmount: event.target.value}, () => console.log(this.state.totalAmount)
          )
        
      }
    render() {
        return <ThirdStep 
        totalAmount={this.state.totalAmount}
        handleChange={this.handleChange}
        />
    }
}

export default ThirdStepContainer;