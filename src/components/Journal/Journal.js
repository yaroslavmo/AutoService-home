import React, { PureComponent } from 'react'

import Bill from './Bill/Bill'
import { journal } from '../../db'
import Aux from "../../hoc/Auxiliary";


class Journal extends PureComponent {
    state = {
        journal: journal
    };

    render() {
        let deleteBillHandler = (billIndex) => {
            const journal = [ ...this.state.journal ];
            journal.splice(billIndex, 1);
            this.setState({ journal: journal });
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ClientId</th>
                    <th>Services</th>
                    <th colSpan={3}>Total</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.journal ].map((bill, index) => {
                    return (
                            <tr key={bill.id}>
                                <Bill
                                    id={bill.id}
                                    client={bill.billClientId}
                                    billServices={bill.billServices}
                                    total={bill.total}
                                    deleteBill={() => deleteBillHandler(index)}
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