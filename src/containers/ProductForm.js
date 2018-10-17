import React, { Component } from 'react'

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: {},
         }
    }
    valueChanged = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            product: {
                ...prevState.product,
                [name]: value
            }
        }));
    }
    render() { 
        return ( 
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" onChange={this.valueChanged} className="form-control" id="title" name='title' placeholder="Enter a title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Example textarea</label>
                    <textarea className="form-control" onChange={this.valueChanged} id="description" name='description' rows="3" placeholder="Enter a description" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" onChange={this.valueChanged} className="form-control" id="price" name='price' placeholder="Enter a price" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" onChange={this.valueChanged} step='1' min='0' className="form-control" id="quantity" name='quantity' placeholder="Enter a quantity" required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="url" onChange={this.valueChanged} className="form-control" id="image" name='image' placeholder="http://example.com/jpeg" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
         );
    }
}
 
export default ProductForm;