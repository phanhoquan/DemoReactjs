import React, { Component } from 'react';

class Cart extends Component {
	render() {
		const { children } = this.props;
		return (
			<section className="section">
				<div className="table-responsive">
					<table className="table product-table">
						<thead>
							<tr>
								<th>Sản Phẩm</th>
								<th>Giá</th>
								<th>Số Lượng</th>
								<th>Tổng Cộng</th>
							</tr>
						</thead>
						<tbody>
							{ children }
						</tbody>
					</table>
				</div>
			</section>
		)
	}
}

export default Cart;