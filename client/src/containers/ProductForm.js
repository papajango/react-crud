import React, { Component } from 'react';

class ProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {
				title: '',
				description: '',
				price: '',
				quantity: 0,
				image: ''
			}
		};
	}
	componentDidMount() {
		this.setState({
			product: {
				...this.props.product
			}
		});
	}
	valueChanged = e => {
		const { name, value } = e.target;
		this.setState(prevState => ({
			product: {
				...prevState.product,
				[name]: value
			}
		}));
	};
	isValidProduct = () => {
		const { product } = this.state;
		const hasTitle = product.title.trim() !== '';
		const hasDescription = product.description.trim() !== '';
		const hasImage = product.image.trim() !== '';
		const hasPrice = !isNaN(product.price) && Number(product.price) >= 0;
		const hasQunatity =
			!isNaN(product.quantity) && Number(product.quantity) >= 0;

		return (
			hasTitle && hasDescription && hasImage && hasQunatity && hasPrice
		);
	};
	formSubmitted = e => {
		e.preventDefault();
		if (this.isValidProduct()) {
			this.props.onFormSubmitted(this.state.product);
		}
	};
	render() {
		const { product } = this.state;
		return (
			<form onSubmit={this.formSubmitted}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						onChange={this.valueChanged}
						value={product.title}
						className="form-control"
						id="title"
						name="title"
						placeholder="Enter a title"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Example textarea</label>
					<textarea
						className="form-control"
						onChange={this.valueChanged}
						value={product.description}
						id="description"
						name="description"
						rows="3"
						placeholder="Enter a description"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Price</label>
					<input
						type="text"
						onChange={this.valueChanged}
						className="form-control"
						id="price"
						value={product.price}
						name="price"
						placeholder="Enter a price"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="quantity">Quantity</label>
					<input
						type="number"
						onChange={this.valueChanged}
						step="1"
						min="0"
						className="form-control"
						value={product.quantity}
						id="quantity"
						name="quantity"
						placeholder="Enter a quantity"
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="image">Image</label>
					<input
						type="url"
						onChange={this.valueChanged}
						className="form-control"
						id="image"
						name="image"
						value={product.image}
						placeholder="http://example.com/jpeg"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default ProductForm;
