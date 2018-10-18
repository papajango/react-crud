import React, { Component } from 'react'
import ProductForm from './ProductForm';
import { createProduct } from '../API';
import { withRouter } from 'react-router-dom';

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: '',
                description: '',
                price: '',
                quantity: 0,
                image: ''
            },
            creating: false
        };
    }
    createProduct = (product) => { 
        this.setState({
            creating: true
        });
        product.quantity = Number(product.quantity);
        createProduct( product)
            .then(createdProduct => {
                this.props.history.push(`/products/${createdProduct._id}`);
            });
    }
    render() { 
        return ( 
            <div>
                <h1>create product</h1>
                <ProductForm product={this.state.product} onFormSubmitted={this.createProduct} />
            </div>
            
         );
    }
}
 
export default withRouter(CreateProduct);