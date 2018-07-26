import React, { PureComponent } from 'react'

import Bill from './Bill/Bill'
import Aux from "../../hoc/Auxiliary";
import axios from "axios/index";



class Journal extends PureComponent {
    state = {
        bills: []
    };

    componentDidMount() {
        axios.get(`http://localhost:4000/journal`)
            .then(res => {
                const bills = res.data;
                this.setState({ bills: bills});
            })
    }

    render() {
        let deleteBillHandler = (e, id) => {
                e.preventDefault();
                axios.delete(`http://localhost:4000/journal/${id}`)
                    .then(() => this.componentDidMount());
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ClientId</th>
                    <th>Services</th>
                    <th>Total</th>
                    <th colSpan={3}>createdAt</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.bills ].map((bill) => {
                    return (
                            <tr key={bill._id}>
                                <Bill
                                    id={bill._id}
                                    client={bill.billClientId}
                                    billServices={bill.billServices}
                                    total={bill.total}
                                    createdAt={bill.createdAt}
                                    onDelete={(e) => deleteBillHandler(e, bill._id)}
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