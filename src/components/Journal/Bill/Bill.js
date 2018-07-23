import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import { Button } from "reactstrap";
import CategoryServices from "../../Categories/CategoryServices/CategoryServices";


class Bill extends Component {
    state = {
        billServicesShow: false
    };

    render() {
        const setModalContent= () => {

            this.props.setModal(<CategoryServices services={this.props.billServices}/>);
        };

        return (
            <Aux>
                <th scope='row'> {this.props.id} </th>
                <td> {this.props.client} </td>
                <td><Button color="dark" onClick={() => {
                    setModalContent();
                    this.props.modal();
                }}>services</Button>{' '}</td>
                <td> {this.props.total} </td>
                <td> {new Date(this.props.createdAt).toLocaleString()} </td>
                <td className="text-right">
                    <button type="button" className="close text-right" aria-label="Close"
                            onClick={this.props.deleteBill}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </td>
            </Aux>
        )
    }
}


export default Bill;