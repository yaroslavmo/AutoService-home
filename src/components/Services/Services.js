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

    render() {
        let deleteServiceHandler = (e, id) => {
                e.preventDefault();

                axios.delete(`http://localhost:4000/services/${id}`)
                    .then(() => this.componentDidMount() )
            // const services = [ ...this.state.services];
            // services.splice(serviceIndex, 1);
            // this.setState({ services: services });
        };

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
                                            serviceName={service.name}
                                            price={service.price}
                                            category={service.categoryName}
                                            isBuild={this.props.isBuild}
                                            currentButton={ this.props.currentButton}
                                            deleteService={(e) => deleteServiceHandler(e,service._id)}
                                        />
                                    </tr> :
                                <tr key={service._id}>
                                    <Service
                                        id={service._id}
                                        serviceName={service.name}
                                        price={service.price}
                                        category={service.categoryName}
                                        deleteService={(e) => deleteServiceHandler(e,service._id)}
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