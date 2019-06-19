import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Message from '../../../constants/Message'

class CartItem extends Component {

	showPriceTotal = (quantity, price) =>{
		let total = quantity * price;
		return total;
	}

	onDeleteCart = (product) => {
		var {onDeleteCart, onChangMessage} = this.props;
		onDeleteCart(product);
		onChangMessage(Message.MSG_DETELE_CART_SUCCESS);
	}

	upDateQuantity = (product, quantity) =>{
		var {onChangMessage} = this.props;
		if(quantity > 0){
			this.props.onUpdateProductInCart(product, quantity);
			onChangMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
		}
	}
	
	render() {
		var { item } = this.props;
		var quantity = item.quantity;
		return (
			<tr>
				<th scope="row">
					<img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
				</th>
				<td>
					<h5><strong>{item.product.name}</strong></h5>
				</td>
				<td>{item.product.price}$</td>
				<td className="center-on-small-only">
					<span className="qty">{quantity} </span>
					<div className="btn-group radio-group" data-toggle="buttons">
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick = { () => this.upDateQuantity(item.product, item.quantity - 1)}
						>
							<Link to="#">—</Link>
						</label>
						<label 
							className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
							onClick = {() => this.upDateQuantity(item.product, item.quantity + 1)}
						>
							<Link to="#">+</Link>
						</label>
					</div>
				</td>
				<td>{this.showPriceTotal(item.quantity, item.product.price)}$</td>
				<td>
					<button
						type="button"
						className="btn btn-sm btn-primary waves-effect waves-light" 
						data-toggle="tooltip" 
						data-placement="top" 
						title="true" 
						data-original-title="Remove item"
						onClick = {() => this.onDeleteCart(item.product)}
					>
						X
					</button>
				</td>
			</tr>
		)
	}
}

export default CartItem;