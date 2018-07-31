import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import { Button, Collapse } from "reactstrap";
import BillServices from "./BillServices/BillServices";
import tooltipClasses from '../../../UI/ToolTip.css'


class Bill extends Component {
    state = {
        billServicesShow: false
    };

    toggleServices = () => {
        this.setState({ billServicesShow: !this.state.billServicesShow });
    };


    render() {
        const { billClient, billServices, total, totalDiscount, createdAt } = this.props.bill;
        const { id } = this.props;
        const { onDelete } = this.props;

        return (
            <Aux>
                <th scope='row'>
                <span className={tooltipClasses.tooltip}>...{id.slice(-2)}<span
                    className={tooltipClasses.tooltiptext}>{id}</span></span></th>
                <td> {billClient.firstName + " " + billClient.lastName} </td>
                <td><Button color="dark"
                            disabled={billServices.length <= 0}
                            onClick={this.toggleServices}
                            style={{radius:"0"}}
                >
                    services</Button>{' '}
                    <Collapse isOpen={this.state.billServicesShow}>
                        <BillServices style={{position: 'absolute'}} services={billServices}/>
                    </Collapse>
                </td>
                <td> {total} </td>
                <td> {new Date(createdAt).toLocaleString()} </td>
                <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={onDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </Aux>
        )
    }
}


export default Bill;