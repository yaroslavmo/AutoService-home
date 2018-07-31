import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, UncontrolledCollapse } from "reactstrap";
import BillServices from "../BillServices/BillServices";
import classes from './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    // const { bill } = props.bill;
    return (
        <div className={classes.CheckoutSummary}>
            <Card>
                <CardHeader>Bill</CardHeader>
                <CardBody>
                    <CardTitle>Client</CardTitle>
                    <CardText></CardText>{/*bill.client*/}
                    <CardTitle>Services</CardTitle>
                    <CardText><Button color="dark"
                                      // disabled={bill.billServices.length <= 0}
                                      id="togglerServices"
                                      // onClick={this.toggleServices}
                                      style={{ radius: "0" }}>
                        services</Button>{' '}
                        </CardText>
                    <UncontrolledCollapse toggler="#togglerServices" style={{margin: '10px 10px'}}>
                        <BillServices style={{ position: 'absolute' }} />
                    </UncontrolledCollapse>
                    <CardTitle>Total</CardTitle>
                    <CardText>{/*bill.total*/} (- {/*bill.totalDiscount*/} discount)</CardText>
                </CardBody>
                <CardFooter>Bill</CardFooter>
            </Card>

        </div>
    );
};

export default CheckoutSummary;
