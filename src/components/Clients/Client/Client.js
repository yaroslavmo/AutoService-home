import React from 'react';
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import { UncontrolledTooltip } from "reactstrap";
import ToolTip from "./IdToolTip";


const Client = function(props) {
        return (
            <Aux>
                <ToolTip id={props.id.slice(-4)} tooltipContent={props.id}>{props.id.slice(-4)} </ToolTip>
                {console.log(props.id)}


                {/*<UncontrolledTooltip autohide={false} placement="bottom" target={props.id.slice(-4)}>*/}
                    {/*{console.log(props.id)}*/}
                    {/*{props.id}*/}
                {/*</UncontrolledTooltip>*/}
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
    _id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    deleteClient: PropTypes.func,
    changeName: PropTypes.func,
};

export default Client;