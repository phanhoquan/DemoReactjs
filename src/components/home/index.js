import React, { Component } from 'react';
import '../../public/css/jquery.fancybox.min.css';
import TableBook from "../table/tableBook";
import HeaderProduct from '../product/header';

class HomeMain extends Component {
	constructor(props){
		super(props);

		this.state= {
			isLogin : false
		}
	}

	// componentWillMount() {
		
	// 	var data = localStorage.getItem('auth');
	// 	if (!data) {
	// 		window.location.href = '/login';
	// 	}
	// }

  	render() {
		
		return (

			<div>	
				<HeaderProduct/>
				<div className="container pt-5">
					<div className="d-flex">
						<div className="name-table w-100 pt-4 pb-4"><h2 className="mt-2">Table Book</h2></div>
					</div>
					<TableBook/>
				</div>
			</div>
		);
  	}
}

export default HomeMain;
