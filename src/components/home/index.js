import React, { Component } from 'react';
import '../../public/css/jquery.fancybox.min.css';
import TableBook from "../table/tableBook";
import HeaderProduct from '../product/header'

import InfoUser from '../info/info';

class HomeMain extends Component {
	constructor(props){
		super(props);

		this.state= {
			isLogin : false
		}
	}

	componentWillMount() {
		if (localStorage.length === 0) {
			window.location.href = '/login';
		} else {
			this.setState({
				isLogin : true
			})
		}
	}

	isLogout = () =>{
		this.setState({
			isLogin : false
		})
	}

  	render() {
		
		return (

			<div>	
				<HeaderProduct/>
				<div className="container pt-5">
					<div className="d-flex">
						<div className="name-table w-100 pt-4 pb-4"><h2 className="mt-2">Table Book</h2></div>
						<div className="user-name text-right w-40">
							<InfoUser isLogout={this.isLogout}/>
						</div>
					</div>
					<TableBook
						isLogin ={this.state.isLogin}
					/>
				</div>
			</div>
		);
  	}
}

export default HomeMain;
