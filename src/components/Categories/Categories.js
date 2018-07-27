import React, { PureComponent } from 'react'

// import { categories } from '../../db'
import Aux from "../../hoc/Auxiliary";
import Category from "./Category/Category";
import axios from "axios/index";



class Categories extends PureComponent {
    state = {
        categories: []
    };


    componentDidMount() {
        axios.get(`https://powerful-savannah-20859.herokuapp.com/api/categories`)
            .then(res => {
                const categories = res.data;
                this.setState({ categories: categories});
            })
    }
    deleteCategoryHandler = (e, id) => {
        e.preventDefault()

        axios.delete(`https://powerful-savannah-20859.herokuapp.com/api/categories/${id}`)
            .then(() => this.componentDidMount())
        // const categories = [ ...this.state.categories ];
        // categories.splice(categoryIndex, 1);
        // this.setState({ categories: categories });
    };
    render() {


        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Services</th>
                    <th colSpan={3}>Discount</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.categories ].map((category) => {
                    return (
                        <tr key={category._id}>
                            <Category
                                category={category}
                                id={category._id}
                                onDelete={(e) => this.deleteCategoryHandler(e, category._id)}
                                modal={this.props.showModal}
                                setModal={this.props.setModalContent}
                            />
                        </tr>
                    )
                })
                }
                </tbody>
            </Aux>
        )
    }
}

export default Categories;