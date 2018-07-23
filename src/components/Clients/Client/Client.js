import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';


const Client = function(props) {
        return (
            <Aux>
                <th scope='row'> {props.id} </th>
                <td> {props.firstName} </td>
                <td> {props.lastName} </td>
                <td> {props.email} </td>
                <td> {props.carPlate.toUpperCase()} </td>
                {props.isShown ? null : <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={props.deleteClient}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>}

            </Aux>
        )
    };

Client.propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    deleteClient: PropTypes.func,
    changeName: PropTypes.func,
};

export default Client;