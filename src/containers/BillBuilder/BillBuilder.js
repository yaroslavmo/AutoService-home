import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliary";
import classes from './BillBuilder.css'
import {
    Form,
    FormGroup,
    Label,
    FormText,
    Button,
    Container,
    UncontrolledCollapse, Table,
} from 'reactstrap';
import Clients from "../../components/Clients/Clients";
import BillBuilderServices from "./BillBuilderServices/BillBuilderServices";


class BillBuilder extends Component {

    state = {
        client: {},
        orderedServices: [],
        fadeIn:true,
        currentButton: null,
        serviceButtons:null,
        clientCollapsed: null,
        newClientCollapsed: null,
        servicesBuild: true
    };

    toggleClients = () => {
        this.setState({ clientCollapsed: !this.state.clientCollapsed });
    };
    toggleNewClients = () => {
        this.setState({ newClientCollapsed: !this.state.newClientCollapsed });
        if (!this.state.newClientCollapsed === true) {
            this.setState({ client: {} })
        }

    };

    clientClick = (client) => {
        this.setState({ client: client });
    };
    deleteClient = () => {
        this.setState({ client: {} })
    };
    setClient = ({ target: { name, value } }) => {
        this.setState({
            client: {
                ...this.state.client,
                [ name ]: value
            }
        });
    };

    serviceClick = (service) => {
        let servicesCopy = [ ...this.state.orderedServices ];
        servicesCopy = new Set(servicesCopy);
        servicesCopy.add(service);
        servicesCopy = Array.from(servicesCopy);
        this.setState({ orderedServices: servicesCopy });
        console.log(this.state.orderedServices)
    };

    deleteServiceHandler = (service) => {
        let servicesCopy = [ ...this.state.orderedServices ];
        servicesCopy.splice(servicesCopy.indexOf(service), 1);
        this.setState({ orderedServices: servicesCopy });
    };

    render() {
        return (
            <Aux>
                <Form className={classes.BillBuilder}>
                    <FormGroup>
                        <Container className='text-center' id="collapseHelper">
                            <Button disabled={this.state.newClientCollapsed} className='row col' color="dark"
                                    id="clientsToggler" onClick={this.toggleClients}
                                    style={{ marginBottom: '1rem' }}>
                                Existing client
                            </Button>
                            <UncontrolledCollapse toggler="#clientsToggler">
                                <Container className="text-center">
                                    <Table hover id='billClient'
                                           className={[ "collapsed", classes.clientsTable ].join(' ')}>
                                        <Clients isBuilder={this.state.clientCollapsed}
                                                 clientClick={this.clientClick}/></Table>
                                </Container>
                            </UncontrolledCollapse>

                            <Button disabled={this.state.clientCollapsed} className='row col' color="dark"
                                    id="newClientToggler" onClick={this.toggleNewClients}
                                    style={{ marginBottom: '1rem' }}>New client</Button>
                            <UncontrolledCollapse toggler="#newClientToggler">
                                <Container>
                                    <Label>New Client:</Label>

                                    <input type="text" onChange={this.setClient} className={classes.newClientInput}
                                           required placeholder="First name" name="firstName"
                                           value={this.state.client.firstName ? this.state.client.firstName : ''}/>
                                    <input type="text" onChange={this.setClient} className={classes.newClientInput}
                                           required placeholder="Last name" name="lastName"
                                           value={this.state.client.lastName ? this.state.client.lastName : ''}/>
                                    <input type="text" onChange={this.setClient} className={classes.newClientInput}
                                           placeholder="Email" name="email"
                                           value={this.state.client.email ? this.state.client.email : ''}/>
                                    <input type="text" onChange={this.setClient} className={classes.newClientInput}
                                           required placeholder="CarPlate" name="carPlate"
                                           value={this.state.client.carPlate ? this.state.client.carPlate : ''}/>
                                    <FormText>This will create new client.</FormText>
                                </Container>
                            </UncontrolledCollapse>
                        </Container>
                        {Object.values(this.state.client).length !== 0 ?
                            <Container>
                                <strong>Client</strong>
                                <Table className="flex">
                                    <tbody>
                                    <tr>
                                        <td><strong>First name: </strong>{this.state.client.firstName}</td>
                                        <td><strong>Last name: </strong>{this.state.client.lastName}</td>
                                        <td><strong>Email: </strong>{this.state.client.email}</td>
                                        <td><strong>Car Plate: </strong>{this.state.client.carPlate ?
                                            this.state.client.carPlate.toUpperCase() : null}</td>
                                        <td className="text-right">
                                            <button type="button" className="close text-right" aria-label="Close"
                                                    onClick={this.deleteClient}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <hr/>
                            </Container>
                            : null}
                    </FormGroup>

                    <FormGroup>
                        {Object.values(this.state.client).length !== 0 ?
                        <Container>
                            <strong>Services</strong>
                            <BillBuilderServices addService={this.serviceClick}
                                                 deleteService={this.deleteServiceHandler}
                            />
                            <hr/>
                        </Container>
                        : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Total: </Label>
                        <Label> number</Label>
                    </FormGroup>
                    <FormGroup check row>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>

            </Aux>
        );
    }
}

export default BillBuilder;
