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
        axios.get(`http://localhost:4000/categories`)
            .then(res => {
                const categories = res.data;
                this.setState({ categories: categories});
            })
    }

    render() {
        let deleteCategoryHandler = (e, id) => {
            e.preventDefault()

            axios.delete(`http://localhost:4000/categories/${id}`)
                .then(() => this.componentDidMount())
            // const categories = [ ...this.state.categories ];
            // categories.splice(categoryIndex, 1);
            // this.setState({ categories: categories });
        };

        return (
            <Aux>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Services</th>
                    <th colSpan={3}>Discounts</th>
                </tr>
                </thead>
                <tbody>
                {[ ...this.state.categories ].map((category, index) => {
                    return (
                        <tr key={category._id}>
                            <Category
                                id={category._id}
                                categoryName={category.categoryName}
                                services={category.categoryServices}
                                discounts={category.discounts}
                                deleteCategory={() => deleteCategoryHandler(index)}
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