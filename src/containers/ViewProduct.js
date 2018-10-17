import React, { Component } from 'react';
import { getProduct } from '../API';
import Product from '../components/Product';

class ViewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            product: {}
        };
    }
    componentDidMount = () => {
        const { _id } = this.props.match.params;
        getProduct(_id)
            .then(product => {
                setTimeout(() => {
                    this.setState({
                        product,
                        isLoading: false
                    });
                }, 2000);
            });
    }
    
    render() { 
        return this.state.isLoading ?
                    <h2>Loading product...</h2> :
            <Product product={this.state.product} cols='col-12' showStock={true} showEdit={true} />
    }
}
 
export default ViewProduct;