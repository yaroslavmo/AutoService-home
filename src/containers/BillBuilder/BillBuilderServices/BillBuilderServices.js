import React, { Component } from 'react';
import { Table } from "reactstrap";
import classes from './BillBuilderServices.css'
import axios from "axios";
import BillBuilderService from "./BillBuilderService/BillBuilderService";

class BillBuilderServices extends Component{
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

    addService = (service) => {
        this.props.addService(service);
    };
    deleteService = (service) => {
        this.props.onDelete(service);
    };

    render(){
    return (
        <Table hover size='sm' className={classes.servicesTable}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th style={{textAlign: 'center'}} colSpan={2}>Category</th>
            </tr>
            </thead>
            <tbody>
            {this.state.services.map((service) => {
                return (
                        <BillBuilderService
                            key={service._id}
                            service={service}
                            id={service._id}
                            addBillService={this.addService}
                            deleteBillService={this.deleteService}
                        />
                )
            })
            }
            </tbody>
        </Table>

    )}
}

export default BillBuilderServices;
