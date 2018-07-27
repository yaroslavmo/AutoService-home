import React, { PureComponent } from 'react'

import Discount from './Discount/Discount'
// import { discounts } from '../../db'
import Aux from "../../hoc/Auxiliary";
import axios from "axios/index";



class Discounts extends PureComponent {
    state = {
        discounts: []
    };

    componentDidMount() {
        axios.get(`https://powerful-savannah-20859.herokuapp.com/api/discounts`)
            .then(res => {
                const discounts = res.data;
                this.setState({ discounts: discounts});
            })
    }

    render() {
        let deleteDiscountHandler = (e, id) => {
            e.preventDefault();
            axios.delete(`https://powerful-savannah-20859.herokuapp.com/api/discounts/${id}`)
                .then(() => this.componentDidMount());

            // const discounts = [ ...this.state.discounts ];
            // discounts.splice(discountIndex, 1);
            // this.setState({ discounts: discounts });
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
                {[ ...this.state.discounts ].map((discount) => {
                    return (
                        <tr key={discount._id}>
                            <Discount discount={discount}
                                onDelete={(e) => deleteDiscountHandler(e, discount._id)}/>
                        </tr> )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Discounts;