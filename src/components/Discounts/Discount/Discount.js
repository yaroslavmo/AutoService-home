import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import tooltipClasses from '../../../UI/ToolTip.css'


const Discount = function ({ discount: { _id, name, amount}, onDelete, isModal }) {

    const discountAmountCheck = (number) => {
        let amount = 0;
        if (number <= 1 && number > 0) {
            number = Number.parseFloat(number).toFixed(2);
            amount = number * 100
        }
        if(number > 1){
            amount = number;
        }

        return amount;
    };
    return (
        <Aux>
            <th scope='row' >
                <span className={tooltipClasses.tooltip}>...<span className={tooltipClasses.tooltiptext}>{_id}</span></span>{_id.slice(-2)} </th>
            <td> {name} </td>
            <td> {discountAmountCheck(amount)}%</td>
            {isModal ? null : <td className="text-right">
                <button type="button" className="close text-right" aria-label="Close"
                        onClick={onDelete}>
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