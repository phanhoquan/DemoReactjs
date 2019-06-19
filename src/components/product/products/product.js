import React, { Component } from 'react';
 
class Products extends Component {
	render() {
		return (
			<div>
				<section className="section">
					<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
					<div className="row">
						{this.props.children}
					</div>
				</section>
			</div>
		);
	}
}

export default Products;