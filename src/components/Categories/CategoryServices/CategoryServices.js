import React from 'react';
import { Table } from "reactstrap";
import Service from '../../Services/Service/Service'


const CategoryServices = (props) => {
    return (
        <Table size={'sm'} responsive>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {[ ...props.oreredServices].map((service, index) => {
                return (
                    <tr key={service.id}>
                        <Service
                            id={service.id}
                            serviceName={service.name}
                            price={service.price}
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

export default CategoryServices;
