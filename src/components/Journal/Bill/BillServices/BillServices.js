import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import classes from './billServices.css'
import Service from '../../../Services/Service/Service'


const BillServices = (props) => {

    return (
        <div style={{border: "2px solid #383c42"}}>

            {props.services? [ ...props.services].map((service) => {
                const { name, price, category} = service;
                return (
                <Card key={service._id}>
                                <CardHeader>Service: {name}</CardHeader>
                                <CardBody>
                                    <CardText>Price: {price}   {category.discount? ' - ' + category.discount.amount + '% discount' : null}</CardText>
                                </CardBody>
                            </Card>
                        )
                    })
                : 'There must have been a problem: no services.'

            }
        </div>
        // <Table size={'sm'} responsive>
        //     <thead>
        //     <tr>
        //         <th>#</th>
        //         <th>Name</th>
        //         <th>Price</th>
        //         <th style={{textAlign: 'center'}}>Category id</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {[ ...props.services].map((service, index) => {
        //         return (
        //             <tr key={service._id}>
        //                 <Service
        //                     id={service._id}
        //                     service={service}
        //                     isModal={true}
        //                 />
        //             </tr>
        //         )
        //     })
        //     }
        //     </tbody>
        // </Table>
    );
};

export default BillServices;
