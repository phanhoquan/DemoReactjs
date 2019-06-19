import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../product/products/product';
import ProductItem from '../product/products/item/item';
import PropTypes from 'prop-types';
import {actionAddToCart, actChangMessage} from '../actions/index';

class ProductsContainer extends Component {

	_renderProduct = (products) =>{
		let html = [];
		let {onAddToCart, onChangMessage} = this.props;
		if(products.length >0){
			html = products.map((item, index) =>{
				return <ProductItem 
							key={index}
							products ={item}
							onAddToCart = {onAddToCart}
							onChangMessage = {onChangMessage}
						/>
			})
		}

		return html;
	}
	render() {
		const {products} = this.props;
		return (
			<Products>
				{this._renderProduct(products)}
			</Products>
		);
	}
}

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			inventory: PropTypes.number.isRequired,
			rating: PropTypes.number.isRequired,
		}),
	).isRequired,
	onChangMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddToCart: (product) => {
			dispatch(actionAddToCart(product, 1));
		},
		onChangMessage : (message) =>{
			dispatch(actChangMessage(message));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);