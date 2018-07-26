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
    deleteClientHandler = (e, id) => {
        e.preventDefault();

        axios.delete(`http://localhost:4000/clients/${id}`)
            .then(() => this.componentDidMount() )

        // const clients = [ ...this.state.clients ];
        // clients.splice(clientIndex, 1);
        // this.setState({ clients: clients });
    };
    render() {

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
                        {this.props.isBuilder ? <tr onClick={() => this.props.clientClick(client)}>
                                <Client
                                id={client._id}
                                client={client}
                                isBuilder={this.props.isBuilder}
                                />
                        </tr> :
                            <tr key={client._id}>
                                <Client client={client}
                                    id={client._id}
                                    onDelete={(e) => this.deleteClientHandler(e, client._id)}/>
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