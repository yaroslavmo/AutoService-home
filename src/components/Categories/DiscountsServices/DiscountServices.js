import React from 'react';
import { Table } from "reactstrap";
import Discount from "../../Discounts/Discount/Discount";


const DiscountServices = (props) => {
    return (
        <Table size={'sm'} responsive>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>amount</th>
            </tr>
            </thead>
            <tbody>
            {[ ...props.discounts].map((discount, index) => {
                return (
                    <tr key={discount.id}>
                        <Discount
                            id={discount.id}
                            name={discount.name}
                            amount={discount.amount}
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

export default DiscountServices;
