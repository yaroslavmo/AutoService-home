import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import { Button } from "reactstrap";
import CategoryServices from "../CategoryServices/CategoryServices";
import CategoryDiscounts from "../DiscountsServices/DiscountServices";


const Category = (props) => {
        const setModalContent = (content) => {

            props.setModal(content);
        };

        return (
            <Aux>
                <th scope='row'> {props.id} </th>
                <td> {props.categoryName} </td>
                <td><Button color="dark" disabled={!props.services.length > 0} onClick={() => {
                    setModalContent(<CategoryServices services={props.services}/>);
                    props.modal();
                }}>services</Button>{' '}</td>
                <td>
                    <Button color="dark" disabled={!props.discounts.length > 0} onClick={() => {
                    setModalContent(<CategoryDiscounts discounts={props.discounts}/>);
                    props.modal();
                }}>discounts
                    </Button>{' '}</td>
                <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={props.deleteCategory}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </Aux>
        )
};


export default Category;