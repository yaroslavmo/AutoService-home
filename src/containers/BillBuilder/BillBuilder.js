import React, { Component } from 'react';
import Aux from "../../hoc/Auxiliary";
import classes from './BillBuilder.css'
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText,
    Button,
    Container,
    UncontrolledCollapse, Table, Card, CardTitle, CardBody
} from 'reactstrap';
import Clients from "../../components/Clients/Clients";


class BillBuilder extends Component {

    state = {
        client: null,
        clientCollapsed: null,
        newClientCollapsed: null,
        demo: {}
    };

    toggleClients = () => {
        this.setState({ clientCollapsed: !this.state.clientCollapsed });
    };
    toggleNewClients = () => {
        this.setState({ newClientCollapsed: !this.state.newClientCollapsed });
        this.setState({ client: null })
    };

    clientClick = (client) => {
        this.setState({ client: client });
    };
    deleteClient = () => {
        this.setState({ client: null })
    };
    setClient = (e) => {
        this.setState({ demo: { [ e.target.name ]: e.target.value } });
        console.log(this.state.demo);
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
                                        <Clients isShown={this.state.clientCollapsed}
                                                 clientClick={this.clientClick}/></Table>
                                </Container>
                            </UncontrolledCollapse>

                            <Button disabled={this.state.clientCollapsed} className='row col' color="dark"
                                    id="newClientToggler" onClick={this.toggleNewClients}
                                    style={{ marginBottom: '1rem' }}>New client</Button>
                            <UncontrolledCollapse toggler="#newClientToggler">
                                <Container className="text-center">
                                    <input type="text" onBlur={this.setClient} className={classes.newClientInput}
                                           required placeholder="id"
                                           name="id"/>{/*onBlur={(e) => {this.setClient({ id:e.target.value })}}*/}
                                    <input type="text" onBlur={this.setClient} className={classes.newClientInput}
                                           required placeholder="First name" name="firstName"/>
                                    <input type="text" onBlur={this.setClient} className={classes.newClientInput}
                                           required placeholder="Last name" name="lastName"/>
                                    <input type="text" onBlur={this.setClient} className={classes.newClientInput}
                                           placeholder="Email" name="email"/>
                                    <input type="text" onBlur={this.setClient} className={classes.newClientInput}
                                           required placeholder="CarPlate" name="carPlate"/>
                                </Container>
                                <a color="dark" onClick={console.log(this.state.client)}>Save</a>
                            </UncontrolledCollapse>
                        </Container>
                        {this.state.client ?
                            <div>
                                <strong>Client</strong>
                                <Table className="flex">
                                    <tbody>
                                    <tr>
                                        <td><strong>Id: </strong>{this.state.client.id}</td>
                                        <td><strong>First name: </strong>{this.state.client.firstName}</td>
                                        <td><strong>Last name: </strong>{this.state.client.lastName}</td>
                                        <td><strong>Email: </strong>{this.state.client.email}</td>
                                        <td><strong>Car: </strong>{this.state.client.carPlate ?
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
                            </div>
                            : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid/>
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid/>
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input/>
                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid/>
                        <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid/>
                        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                </Form>

            </Aux>
        );
    }
}

export default BillBuilder;
