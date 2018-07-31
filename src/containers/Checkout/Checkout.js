import React, { Component } from 'react';
import CheckoutSummary from "../../components/Journal/Bill/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state = {};

    render() {
        return (
            <div>
                <CheckoutSummary bill={this.props.bill}/>
            </div>
        );
    }
}

export default Checkout;
