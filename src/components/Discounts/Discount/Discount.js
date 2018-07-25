import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import tooltipClasses from '../../../UI/ToolTip.css'


const Discount = function (props) {
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
                <span className={tooltipClasses.tooltip}>...<span className={tooltipClasses.tooltiptext}>{props.id}</span></span>{props.id.slice(-2)} </th>
            <td> {props.name} </td>
            <td> {discountAmountCheck(props.amount)}%</td>
            {props.isModal ? null : <td className="text-right">
                <button type="button" className="close text-right" aria-label="Close"
                        onClick={props.onDelete}>
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