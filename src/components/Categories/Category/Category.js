import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import { Button } from "reactstrap";
import CategoryServices from "../CategoryServices/CategoryServices";
import CategoryDiscounts from "../DiscountsServices/DiscountServices";

class Category extends Component {
    state = {
        categoryDiscountsShow: false
    };

    render() {
        const setModalContent = (content) => {

            this.props.setModal(content);
        };

        return (
            <Aux>
                <th scope='row'> {this.props.id} </th>
                <td> {this.props.categoryName} </td>
                <td><Button color="dark" disabled={!this.props.services.length > 0} onClick={() => {
                    setModalContent(<CategoryServices services={this.props.services}/>);
                    this.props.modal();
                }}>services</Button>{' '}</td>
                <td>
                    <Button color="dark" disabled={!this.props.discounts.length > 0} onClick={() => {
                    setModalContent(<CategoryDiscounts discounts={this.props.discounts}/>);
                    this.props.modal();
                }}>discounts
                    </Button>{' '}</td>
                <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={this.props.deleteCategory}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </Aux>
        )
    };
}


export default Category;