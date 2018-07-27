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
        axios.get(`https://powerful-savannah-20859.herokuapp.com/api/services`)
            .then(res => {
                const services = res.data;
                this.setState({ services: services });
            })
    }

    deleteServiceHandler = (e, id) => {
        e.preventDefault();

        axios.delete(`https://powerful-savannah-20859.herokuapp.com/api/services/${id}`)
            .then(() => this.componentDidMount())
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
                        <tr key={service._id}>
                            <Service
                                id={service._id}
                                service={service}
                                onDelete={(e) => this.deleteServiceHandler(e, service._id)}
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