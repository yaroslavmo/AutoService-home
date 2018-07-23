import React, { PureComponent } from 'react'

import Client from './Client/Client'
import { clients } from '../../db'
import Aux from "../../hoc/Auxiliary";


class Clients extends PureComponent {
    state = {
        clients: clients
    };

    render() {
        let deleteClientHandler = (clientIndex) => {
            const clients = [ ...this.state.clients ];
            clients.splice(clientIndex, 1);
            this.setState({ clients: clients });
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th colSpan={2}>Email</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.clients ].map((client, index) => {
                    return (
                        <tr key={client.id}>
                            <Client
                                id={client.id}
                                firstName={client.firstName}
                                lastName={client.lastName}
                                email={client.email}
                                deleteClient={() => deleteClientHandler(index)}/>
                        </tr> )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Clients;