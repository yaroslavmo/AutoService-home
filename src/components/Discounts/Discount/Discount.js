import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';


const Discount = function(props) {
    return (
        <Aux>
            <th scope='row'> {props.id} </th>
            <td> {props.name} </td>
            <td> {props.amount * 100}% </td>
            {props.isModal ? null : <td className="text-right">
                <button type="button" className="close text-right" aria-label="Close"
                        onClick={props.deleteDiscount}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>}
        </Aux>
    )
};

Discount.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
};

export default Discount;