import React, { Component } from 'react';
import { getProduct, updateProduct } from '../API';
import ProductForm from './ProductForm';
import { withRouter } from 'react-router-dom';

class EditProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			product: {},
			isEditing: false
		};
	}
	componentDidMount() {
		const { _id } = this.props.match.params;
		getProduct(_id).then(product => {
			setTimeout(() => {
				this.setState({
					product,
					isLoading: false
				});
			}, 1000);
		});
	}
	updateProduct = product => {
		this.setState({
			isEditing: true
		});
		updateProduct(product._id, product).then(() => {
			setTimeout(() => {
				this.props.history.push(`/products/${product._id}`);
			}, 1000);
		});
	};
	render() {
		return this.state.isLoading ? (
			<h2>Loading...</h2>
		) : this.state.isEditing ? (
			<h2>Editing...</h2>
		) : (
			<ProductForm
				product={this.state.product}
				onFormSubmitted={this.updateProduct}
			/>
		);
	}
}

export default withRouter(EditProduct);
