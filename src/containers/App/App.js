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
            <div>
                <Layout>
                    <Container>
                        <Modal show={this.state.showModal}
                               modalClosed={this.closeModalHandler}
                               modalContent={this.state.modalContent}
                        />

                        <Table hover className={classes.tableScroll}>
                            <Clients />
                            {/*<Journal showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                            <Services />
                            {/*<Categories showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                            {/*<Discounts showModal={showModalHandler} setModalContent={this.setModal}/>*/}
                        </Table>
                        {/*<BillBuilder/>*/}
                    </Container>
                </Layout>
            </div>
        );
    }
}

export default App;
