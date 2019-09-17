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
          const newAmount = parseInt(event.target.value) * this.props.insuredUsers.length;
          this.setState({totalAmount: newAmount}, () => console.log(this.state.totalAmount)
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