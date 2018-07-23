import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import Aux from '../../../hoc/Auxiliary';
import Modal from "../../../UI/Modal/Modal";
import BillServices from "../BillServices/BillServices";
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
                {/*<td><Modal show={this.state.billServicesShow} modalClosed={this.closeBillServicesHandler}>*/}
                    {/*<BillServices services={this.props.billServices}/>*/}
                {/*</Modal></td>*/}
                <td> {this.props.total} </td>
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

// Bill.propTypes = {
//     id: PropTypes.string,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     email: PropTypes.string,
//     deleteBill: PropTypes.func,
//     changeName: PropTypes.func,
// };

export default Bill;