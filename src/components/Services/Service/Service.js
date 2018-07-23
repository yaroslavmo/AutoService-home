import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';


const Service = function(props) {
    return (
        <Aux>
            <th scope='row'> {props.id} </th>
            <td> {props.serviceName} </td>
            <td> {props.price} </td>
            <td> {props.category} </td>
            {props.isModal ? null : <td className="text-right">
                <button type="button" className="close text-right" aria-label="Close"
                        onClick={props.deleteService}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>}
        </Aux>
    )
};

Service.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    categoryName: PropTypes.string,
};

export default Service;