import React, { PureComponent } from 'react';
import classes from './App.css'
import Layout from "../Layout/Layout";
import { Table, Container } from "reactstrap";
import Clients from "../../components/Clients/Clients";
import Journal from "../../components/Journal/Journal";
import Services from "../../components/Services/Services";
import Categories from "../../components/Categories/Categories";
import Modal from "../../UI/Modal/Modal";
import Discounts from "../../components/Discounts/Discounts";
import BillBuilder from "../BillBuilder/BillBuilder";
import { BrowserRouter, Route } from 'react-router-dom'

class App extends PureComponent {
    state = {
        showModal: false,
        modalContent: null
    };

    setModal = (modalContent) => {
        let copy = {...this.state};
        copy.modalContent = modalContent;
        this.setState(copy);
    };
    closeModalHandler = () => {
        this.setState({ showModal: false })
    };
    render() {
        const showModalHandler = () => {
            this.setState({ showModal: true })
        };


        return (
            <BrowserRouter>
            <div>
                <Layout>
                    <Container>
                        <Modal show={this.state.showModal}
                               modalClosed={this.closeModalHandler}
                               modalContent={this.state.modalContent}
                        />

                        <Table hover className={classes.tableScroll}>
                            <Route path="/clients" exact component={Clients}/>
                            <Route path="/journal" exact render={()=><Journal showModal={showModalHandler} setModalContent={this.setModal}/>}/>
                            <Route path="/services" exact render={()=><Categories showModal={showModalHandler} setModalContent={this.setModal}/>}/>
                            <Route path="/categories" exact component={Categories}/>
                            <Route path="/discounts" exact render={() => <Discounts showModal={showModalHandler} setModalContent={this.setModal}/>}/>
                            {/*<Clients />*/}
                            {/*<Journal showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                            {/*<Services />*/}
                            {/*<Categories showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                            {/*<Discounts showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                        </Table>
                        <Route path="/" exact component={BillBuilder}/>
                        {/*<BillBuilder/>*/}
                    </Container>
                </Layout>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;
