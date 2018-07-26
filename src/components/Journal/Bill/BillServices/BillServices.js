import React from 'react';
import { Table } from "reactstrap";
import classes from './billServices.css'
import Service from '../../../Services/Service/Service'


const BillServices = (props) => {

    return (
        <Table size={'sm'} responsive cssModule={classes}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th style={{textAlign: 'center'}}>Category id</th>
            </tr>
            </thead>
            <tbody>
            {[ ...props.services].map((service, index) => {
                return (
                    <tr key={service._id}>
                        <Service
                            id={service._id}
                            service={service}
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
