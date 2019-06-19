import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../product/products/cart/cart';
import CartItem from '../product/products/cart/cartItem';
import CartTotal from '../product/products/cart/cartTotal';
import PropTypes from 'prop-types';
import * as Message from '../constants/Message';
import {actDeleteProductInCart, actChangMessage, actUpdateProductInCart} from '../actions/index';

class CartContainer extends Component {

	showCartItem = (cartItem) =>{
		var {onDeleteCart, onChangMessage, onUpdateProductInCart} = this.props;
		let result = <tr>
			<td colSpan="4">{ Message.MSG_CART_EMPTY }</td>
		</tr>
		if(cartItem.length > 0){
		  	result = cartItem.map((item, index) =>{
				return(
					<CartItem 
						key = { index }
						item = { item }
						onDeleteCart = {onDeleteCart}
						onChangMessage = {onChangMessage}
						onUpdateProductInCart = {onUpdateProductInCart}
					/>
				)
			});
		}
		return result;
	}

	showCartTotalAmount = (cart) =>{
		let result = null;
		if(cart.length > 0){
			result = <CartTotal cart={cart}/>
		}
		return result;
	}

	render() {
		const { cart } = this.props;
		return (
			<Cart>
				{this.showCartItem(cart)}
				{this.showCartTotalAmount(cart)}
			</Cart>
		);
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				image: PropTypes.string.isRequired,
				name: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}),
			quantity: PropTypes.number.isRequired
		})
	).isRequired
};

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteCart: (product) => {
			dispatch(actDeleteProductInCart(product));
		},
		onChangMessage : (message) =>{
			dispatch(actChangMessage(message));
		},
		onUpdateProductInCart : (product, quantity) =>{
			dispatch(actUpdateProductInCart(product, quantity));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);