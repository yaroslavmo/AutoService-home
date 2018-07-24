import React, { PureComponent } from 'react'

import Client from './Client/Client'
// import { clients } from '../../db'
import Aux from "../../hoc/Auxiliary";
import axios from 'axios';


class Clients extends PureComponent {
    state = {
        clients: []
    };

    componentDidMount() {
        axios.get(`http://localhost:4000/clients`)
            .then(res => {
                const clients = res.data;
                this.setState({ clients: clients });
            })
    }

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
                        <Aux key={client._id}>
                        {this.props.isShown ?<tr onClick={() => this.props.clientClick(client)}>
                                <Client
                                id={client._id}
                                firstName={client.firstName}
                                lastName={client.lastName}
                                email={client.email}
                                carPlate={client.carPlate}
                                isShown={this.props.isShown}
                                deleteClient={() => deleteClientHandler(index)}/>
                        </tr> :
                            <tr key={client._id}>
                                <Client client={client}
                                    id={client._id}
                                    firstName={client.firstName}
                                    lastName={client.lastName}
                                    email={client.email}
                                    carPlate={client.carPlate}
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