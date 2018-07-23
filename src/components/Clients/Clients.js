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
                    <th>Email</th>
                    <th colSpan={2}>Car Plate</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.clients ].map((client, index) => {
                    return (
                        <Aux key={client.id}>
                        {this.props.isShown ?<tr onClick={() => this.props.clientClick(client)}>
                            <Client
                                id={client.id}
                                firstName={client.firstName}
                                lastName={client.lastName}
                                email={client.email}
                                carPlate={client.carPlate}
                                isShown={this.props.isShown}
                                clicked={this.props.clientClick}
                                deleteClient={() => deleteClientHandler(index)}/>
                        </tr> :
                            <tr key={client.id}>
                                <Client
                                    id={client.id}
                                    firstName={client.firstName}
                                    lastName={client.lastName}
                                    email={client.email}
                                    carPlate={client.carPlate}
                                    isShown={this.props.isShown}
                                    clicked={this.props.clientClick}
                                    deleteClient={() => deleteClientHandler(index)}/>
                            </tr>
                        }
                        </Aux>)
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Clients;