import React from 'react';
import { Table } from "reactstrap";
import classes from './billServices.css'
import Service from '../../Services/Service/Service'


const BillServices = (props) => {

    return (
        <Table size={'sm'} responsive cssModule={classes}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>categoryName</th>
            </tr>
            </thead>
            <tbody>
            {[ ...props.services].map((service, index) => {
                return (
                    <tr key={service.serviceId}>
                        <Service
                            id={service.serviceId}
                            serviceName={service.name}
                            price={service.price}
                            category={service.categoryName}
                            isModal={true}
                        />
                    </tr>
                )
            })
            }
            </tbody>
        </Table>

    );
};

export default BillServices;
