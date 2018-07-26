import React from 'react';
import { Table } from "reactstrap";
import Discount from "../../Discounts/Discount/Discount";


const CategoryDiscount = ({discount}) => {
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
                    <tr key={discount._id}>
                        <Discount
                            discount={discount}
                            isModal={true}
                        />
                    </tr>

            </tbody>
        </Table>

    );
};

export default CategoryDiscount;
