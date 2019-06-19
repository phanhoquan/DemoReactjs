import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Message from '../../../constants/Message'

class ProductItem extends Component {

	renderRating = (rating) => {
		
		var html = [];
			if(rating > 0){
				for (var i = 1; i <= rating; i++) {
					html.push(<i key ={i} className="fa fa-star"></i>);
				}
			}
			
			for (var j =1; j<=(5-rating); j ++) {
				html.push(<i key={i + j} className="fa fa-star-o"></i>);
			}
		return html;
	}

	onAddToCart = (product) =>{
		this.props.onAddToCart(product);
		this.props.onChangMessage(Message.MSG_ADD_TO_CART_SUCCESS);
	}
	render() {
		const {products} = this.props;
		return (
			<div className="col-lg-4 col-md-6 mb-r">
				<div className="card text-center card-cascade narrower">
					<div className="view overlay hm-white-slight z-depth-1">
						<img src={products.image}
							className="img-fluid"
							alt={products.name}
						/>
						<Link to="#">
							<div className="mask waves-light waves-effect waves-light"></div>
						</Link>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							<strong>
								<Link to="#">{products.name}</Link>
							</strong>
						</h4>
						<ul className="rating">
							<li>
								{this.renderRating(products.rating)}
							</li>
						</ul>
						<p className="card-text">{products.description}</p>
						<div className="card-footer">
							<span className="left">{products.price}$</span>
							<span className="right">
								<Link to="#"
									className="btn-floating blue-gradient"
									data-toggle="tooltip"
									data-placement="top"
									title="true"
									data-original-title="Add to Cart"
									onClick ={ () => this.onAddToCart(products)}
								>
									<i className="fa fa-shopping-cart" />
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductItem;