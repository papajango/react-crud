import React, { Component } from 'react'
import ProductForm from './ProductForm';

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
    render() { 
        return ( 
            <div>
                <h1>create product</h1>
                <ProductForm product={this.state.product} />
            </div>
            
         );
    }
}
 
export default CreateProduct;