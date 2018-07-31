import React, { PureComponent } from 'react';
// import classes from './App.css'
import Layout from "../Layout/Layout";
import { Table, Container } from "reactstrap";
import Clients from "../../components/Clients/Clients";
import Journal from "../../components/Journal/Journal";
import Services from "../../components/Services/Services";
import Categories from "../../components/Categories/Categories";
import Discounts from "../../components/Discounts/Discounts";
import BillBuilder from "../BillBuilder/BillBuilder";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import clientForm from "../../components/Clients/clientForm";
import CheckoutSummary from "../../components/Journal/Bill/CheckoutSummary/CheckoutSummary";

class App extends PureComponent {
    state = {
        showModal: false,
        modalContent: null
    };

    setModal = (modalContent) => {
        let copy = { ...this.state };
        copy.modalContent = modalContent;
        this.setState(copy);
    };
    closeModalHandler = () => {
        this.setState({ showModal: false })
    };

    showModalHandler = () => {
        this.setState({ showModal: true })
    };

    render() {



        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Container>
                            <Table hover >
                                <Switch>
                                <Route path="/clients" exact  component={Clients}/>
                                <Route path="/journal" exact render={() => <Journal showModal={this.showModalHandler}
                                                                                    setModalContent={this.setModal}/>}/>
                                    <Route path="/categories" exact render={() => <Categories showModal={this.showModalHandler}
                                                                                          setModalContent={this.setModal}/>}/>
                                    <Route path="/services" exact component={Services}/>
                                    <Route path="/discounts" exact render={() => <Discounts showModal={this.showModalHandler}                                                       setModalContent={this.setModal}/>}/>
                                </Switch>
                            </Table>
                            <Route path="/clients/new" component={clientForm}/>
                            <Route path="/billbuilder" exact component={BillBuilder}/>
                            <CheckoutSummary/>
                            {/*<Route render={() => <h1>404 Not found</h1>}/>*/}
                        </Container>
                    </Layout>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
