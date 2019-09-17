import React from 'react';
import ThirdStep from '../components/ThirdStep';

class ThirdStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          totalAmount: "",
          discount: "",
        };
      }

      handleChange = (event) => {
          const newAmount = parseInt(event.target.value) * this.props.insuredUsers.length;
          this.setState({totalAmount: newAmount}, () => console.log(this.state.totalAmount))
      }

      handleChangeDiscountCode = (event) => {
          const amountDiscount = event.target.value.substring(0,2);
          this.setState({discount: amountDiscount}, () => console.log(amountDiscount))
      }

      handleApplyDiscount = () => {
        const newAmountDiscount = this.state.totalAmount - (this.state.totalAmount * parseInt(this.state.discount) / 100);
        console.log(newAmountDiscount);
        console.log(typeof this.state.totalAmount);
        console.log(typeof this.state.discount);
        
        this.setState({totalAmount: newAmountDiscount})
      }

    render() {
        return <ThirdStep 
        totalAmount={this.state.totalAmount}
        handleChange={this.handleChange}
        handleChangeDiscountCode={this.handleChangeDiscountCode}
        handleApplyDiscount={this.handleApplyDiscount}
        />
    }
}

export default ThirdStepContainer;