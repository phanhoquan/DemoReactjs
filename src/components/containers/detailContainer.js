import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProductDetail from '../product/products/productDetail';
import ProductItemDetail from '../product/products/item/detail';
import PropTypes from 'prop-types';
import {actionAddToCart, actChangMessage} from '../actions/index';

class ProductsDtailContainer extends Component {
	componentWillMount() {
		if (this.props.match.params.id !== undefined) {
			this.setState({
				id: this.props.match.params.id
			});
		}
	}

	_renderProductDetail = (products, id) =>{
		let {onAddToCart, onChangMessage} = this.props;
		var data = products;
		data = data.filter(item => item.id === id);
		return <ProductItemDetail
			products ={data}
			onAddToCart = {onAddToCart}
			onChangMessage = {onChangMessage}
		/>
	}

	render() {
		var {products} = this.props;
		return (
			<ProductDetail>
				{this._renderProductDetail(products, parseInt(this.props.match.params.id))}
			</ProductDetail>
		);
	}
}

ProductsDtailContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps) (ProductsDtailContainer);