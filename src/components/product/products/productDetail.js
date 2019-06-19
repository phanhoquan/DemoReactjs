import React, { Component } from 'react';
import HeaderProduct from '../header';
import CartContainer from '../../containers/cartContainer';
import MessageContainer from '../../containers/messageContainer';
import FooterProduct from '../footer'

class ProductDetail extends Component {

	render(){
		return(
			<div>
				<HeaderProduct />
				<main id="mainContainer">
					<div className="container">
						<h3 className="text-center">Chi Tiết Sản Phẩm</h3>
						{this.props.children}
						<MessageContainer/>
						<CartContainer/>
					</div>
				</main>
				<FooterProduct/>
			</div>
		)
	}
}

export default ProductDetail;