import React, { PureComponent } from 'react'

import { services } from '../../db'
import Aux from "../../hoc/Auxiliary";
import Service from "./Service/Service";


class Services extends PureComponent {
    state = {
        services: services
    };

    render() {
        let deleteServiceHandler = (serviceIndex) => {
            const services = [ ...this.state.services];
            services.splice(serviceIndex, 1);
            this.setState({ oreredServices: services });
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
                        <Aux key={service.id}>
                            {this.props.isBuild ?<tr onClick={() => this.props.serviceClick(service)}>
                                        <Service
                                            id={service.id}
                                            serviceName={service.name}
                                            price={service.price}
                                            category={service.categoryName}
                                            isBuild={this.props.isBuild}
                                            currentButton={ this.props.currentButton}
                                            deleteService={() => deleteServiceHandler(index)}
                                        />
                                    </tr> :
                                <tr key={service.id}>
                                    <Service
                                        id={service.id}
                                        serviceName={service.name}
                                        price={service.price}
                                        category={service.categoryName}
                                        deleteService={() => deleteServiceHandler(index)}
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