import React, { PureComponent } from 'react'

// import { services } from '../../db'
import Aux from "../../hoc/Auxiliary";
import Service from "./Service/Service";
import axios from "axios/index";


class Services extends PureComponent {
    state = {
        services: []
    };

    componentDidMount() {
        axios.get(`http://localhost:4000/services`)
            .then(res => {
                const services = res.data;
                this.setState({ services: services });
            })
    }

    deleteServiceHandler = (e, id) => {
        e.preventDefault();

        axios.delete(`http://localhost:4000/services/${id}`)
            .then(() => this.componentDidMount() )
    };

    render() {


        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={2}>Category</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.services ].map((service, index) => {
                    return (
                        <Aux key={service._id}>
                            {this.props.isBuild ?<tr onClick={() => this.props.serviceClick(service)}>
                                        <Service
                                            id={service._id}
                                            service={service}
                                            isBuild={this.props.isBuild}
                                            deleteService={(e) => this.deleteServiceHandler(e,service._id)}
                                        />
                                    </tr> :
                                <tr key={service._id}>
                                    <Service
                                        id={service._id}
                                        service={service}
                                        onDelete={(e) => this.deleteServiceHandler(e,service._id)}
                                    />
                                </tr>
                            }
                        </Aux>
                    )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Services;