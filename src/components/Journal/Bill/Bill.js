import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import { Button } from "reactstrap";
import BillServices from "./BillServices/BillServices";
import tooltipClasses from '../../../UI/ToolTip.css'



class Bill extends Component {
    state = {
        billServicesShow: false
    };

    render() {
        const setModalContent= () => {
            this.props.setModal(<BillServices services={this.props.billServices}/>);
        };

        return (
            <Aux>
                <th scope='row'>
                <span className={tooltipClasses.tooltip}>...{this.props.id.slice(-2)}<span
                    className={tooltipClasses.tooltiptext}>{this.props.id}</span></span></th>
                <td> {this.props.client.firstName + " " + this.props.client.lastName} </td>
                <td><Button color="dark"
                            disabled={this.props.billServices.length <= 0}
                            onClick={() => {
                    setModalContent();
                    this.props.modal();
                }}>services</Button>{' '}</td>
                <td> {this.props.total} </td>
                <td> {new Date(this.props.createdAt).toLocaleString()} </td>
                <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={this.props.onDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </Aux>
        )
    }
}


export default Bill;