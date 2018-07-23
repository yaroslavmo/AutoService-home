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
            this.setState({ services: services });
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={3}>Category</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.services ].map((service, index) => {
                    return (
                        <tr key={service.id}>
                            <Service
                                id={service.id}
                                serviceName={service.name}
                                price={service.price}
                                category={service.categoryName}
                                deleteService={() => deleteServiceHandler(index)}
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

export default Services;