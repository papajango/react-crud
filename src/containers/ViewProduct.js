import React, { Component } from 'react';
import { getProduct, deleteProduct } from '../API';
import Product from '../components/Product';
import { withRouter } from 'react-router-dom';

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
                }, 1000);
            });
    }

    deleteProduct = () => {
        deleteProduct(this.state.product._id)
            .then(() => {
                this.props.history.push('/products');
            });
    }
    
    render() { 
        return this.state.isLoading ?
                    <h2>Loading product...</h2> :
            <Product deleteProduct={this.deleteProduct} product={this.state.product} cols='col-12' showStock={true} editing={true} />
    }
}
 
export default withRouter(ViewProduct);