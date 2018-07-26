import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
// import classes from './Sevice.css'
import tooltipClasses from '../../../UI/ToolTip.css'


const Service = function (props) {
    const { serviceName, price, category } = props.service;
    const { id } = props;
    return (
        <Aux>
            <th scope='row'>
                <span className={tooltipClasses.tooltip}>...{id.slice(-2)}<span
                    className={tooltipClasses.tooltiptext}>{id}</span></span></th>
            <td> {serviceName} </td>
            <td> {price} </td>
            {props.isModal ? <td style={{ textAlign: 'center' }}> {category ? category.categoryName : null} </td>
                : <td> {category ? category.categoryName : null} </td>
            }
            {props.isModal || props.isBuild ? null
                : <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={props.onDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>}

        </Aux>
    )
};

Service.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    categoryName: PropTypes.string,
};

export default Service;