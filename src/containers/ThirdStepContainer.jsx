import React from 'react';
import ThirdStep from '../components/ThirdStep';

class ThirdStepContainer extends React.Component {
    constructor() {
        super();
        this.state = {
          totalAmount: "",
          discount: "",
          applyDiscount: false,
          showList: false,
        };
      }

      hideListUser = () => {
          this.setState({
            showList: false,
          })
      }

      showListUser = () => {
        this.setState({
            showList: true,
          })
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
        this.setState({
            totalAmount: newAmountDiscount,
            applyDiscount: true,
        })
      }

      handleSubmitThirdStep = () => {
          this.props.updateStep()
      }

    render() {
        return <ThirdStep 
        totalAmount={this.state.totalAmount}
        handleChange={this.handleChange}
        handleChangeDiscountCode={this.handleChangeDiscountCode}
        handleApplyDiscount={this.handleApplyDiscount}
        applyDiscount={this.state.applyDiscount}
        discount={this.state.discount}
        showList={this.state.showList}
        hideListUser={this.hideListUser}
        showListUser={this.showListUser}
        insuredUsers={this.props.insuredUsers}
        handleSubmit = {this.handleSubmitThirdStep}
        />
    }
}

export default ThirdStepContainer;