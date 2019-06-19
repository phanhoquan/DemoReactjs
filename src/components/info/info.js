import React, { Component } from 'react';
import '../../public/css/jquery.fancybox.min.css';

class Info extends Component {
	state = {
		user: "",
	}
	componentWillMount() {
		let nameAuth = localStorage.getItem('auth');
		this.setState({
			user: nameAuth,
			status: false
		});
	}

	logOut = () =>{
		let dataAuth = localStorage.removeItem('auth');
		this.setState({
			user: "",
			status: true,
		});
		this.props.isLogout()
		return dataAuth;
	}
	
	logIn = () =>{
		window.location.href = '/login';
		this.setState({
			status: false,
		});
	}

	renderHeaderLogin = () =>{
		let user = this.state.user;
		return (
			<div>	
				<div className="d-flex pt-4 pb-4">
					<h2 className="mt-3">
						{ user !== undefined && user !== null &&
							(<label><a href="/user" className="ml-2">{user}</a></label>)
						}
					</h2>
					<button className="btn btn-dark btn-sm" onClick={this.logOut}>Logout</button>
				</div>
			</div>
		);
	}

	renderHeaderLogOut = () =>{
		return(
			<div>	
				<div className="d-flex pt-4 pb-4">
					<button className="btn btn-dark btn-sm" onClick={this.logIn}>Login</button>
				</div>
			</div>
		)
	}

	renderBody = () => {

		let status = this.state.status;

		if (status) {
			return this.renderHeaderLogOut();
		}

		return this.renderHeaderLogin();
	}

	render() {
		return(
			<div>
				{this.renderBody()}
			</div>
		)
  	}
}

export default Info;
