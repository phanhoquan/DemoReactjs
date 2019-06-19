import React, { Component } from 'react';
import HeaderProduct from './header';
import FooterProduct from './footer';
import ProductsContainer from '../containers/productContainer';
import MessageContainer from '../containers/messageContainer';
import CartContainer from '../containers/cartContainer';
 
class ProductsIndex extends Component {

	render() {
		return (
			<div>
				<HeaderProduct/>
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer/>
						<MessageContainer/>
						<CartContainer/>
					</div>
				</main>
				<FooterProduct/>
			</div>
		);
	}
}

export default ProductsIndex;