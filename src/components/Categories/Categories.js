import React, { PureComponent } from 'react'

import { categories } from '../../db'
import Aux from "../../hoc/Auxiliary";
import Category from "./Category/Category";


class Categories extends PureComponent {
    state = {
        categories: categories
    };



    render() {
        let deleteCategoryHandler = (categoryIndex) => {
            const categories = [ ...this.state.categories ];
            categories.splice(categoryIndex, 1);
            this.setState({ categories: categories });
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
                        <tr key={category.id}>
                            <Category
                                id={category.id}
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