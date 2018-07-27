import React, { PureComponent } from 'react'

import Bill from './Bill/Bill'
import Aux from "../../hoc/Auxiliary";
import axios from "axios/index";



class Journal extends PureComponent {
    state = {
        bills: []
    };

    componentDidMount() {
        axios.get(`https://powerful-savannah-20859.herokuapp.com/api/journal`)
            .then(res => {
                const bills = res.data;
                this.setState({ bills: bills});
            })
    }

    deleteBillHandler = (e, id) => {
        e.preventDefault();
        axios.delete(`https://powerful-savannah-20859.herokuapp.com/api/journal/${id}`)
            .then(() => this.componentDidMount());
    };
    render() {
        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Client</th>
                    <th>Services</th>
                    <th>Total</th>
                    <th colSpan={3}>createdAt</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.bills ].map((bill) => {
                    return (
                            <tr key={bill._id} id={bill._id}>
                                <Bill
                                    id={bill._id}
                                    client={bill.billClient}
                                    billServices={bill.billServices}
                                    total={bill.total}
                                    createdAt={bill.createdAt}
                                    onDelete={(e) => this.deleteBillHandler(e, bill._id)}
                                    modal={this.props.showModal}
                                    setModal={this.props.setModalContent}

                                />
                            </tr>
                    )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Journal;