import React, { PureComponent } from 'react'

import Discount from './Discount/Discount'
import { discounts } from '../../db'
import Aux from "../../hoc/Auxiliary";


class Discounts extends PureComponent {
    state = {
        discounts: discounts
    };

    render() {
        let deleteDiscountHandler = (discountIndex) => {
            const discounts = [ ...this.state.discounts ];
            discounts.splice(discountIndex, 1);
            this.setState({ discounts: discounts });
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th colSpan={2}>Amount</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.discounts ].map((discount, index) => {
                    return (
                        <tr key={discount.id}>
                            <Discount
                                id={discount.id}
                                name={discount.name}
                                amount={discount.amount}
                                deleteDiscount={() => deleteDiscountHandler(index)}/>
                        </tr> )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Discounts;