import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import classes from './Client.css'
import tooltipClasses from '../../../UI/ToolTip.css'


const Client = function (props) {
    const { firstName, lastName, email, carPlate } = props.client;
    const {id} = props;
    const {onDelete} = props;
    return (
        <Aux>
            <th scope='row'>
                <span className={tooltipClasses.tooltip}>...{id.slice(-2)}<span
                    className={tooltipClasses.tooltiptext}>{id}</span></span> </th>
            <td> {firstName} </td>
            <td> {lastName} </td>
            <td> {email} </td>
            <td> {carPlate.toUpperCase()} </td>
            {props.isBuilder ? null : <td className="text-right">
                <button type="button" className={["close", "text-right", classes.deletebtn].join(' ')} aria-label="Close"
                        onClick={onDelete}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>}

        </Aux>
    )
};

Client.propTypes = {
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    deleteClient: PropTypes.func,
    changeName: PropTypes.func,
};

export default Client;