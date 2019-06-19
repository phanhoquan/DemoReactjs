
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menu';

class Navbar extends Component {
	state = {
		user: "",
	}
	componentWillMount() {
		let nameAuth = localStorage.getItem('auth');
		this.setState({
			user: nameAuth,
		});
	}

	logOut = () =>{
		let dataAuth = localStorage.removeItem('auth');
		this.setState({
			user: "",
		});
		return dataAuth;
	}
	
	logIn = () =>{
		window.location.href = '/login';
	}

	renderHeaderLogin = () =>{
		return (
			<Link to="#" className="dropdown-item waves-effect waves-light" onClick={this.logOut}>Logout</Link>
		);
	}

	renderHeaderLogOut = () =>{
		return(
			<div>
				<Link to="#" className="dropdown-item waves-effect waves-light" onClick={this.logIn}>Login</Link>
				<Link to="/register" className="dropdown-item waves-effect waves-light">Register</Link>
			</div>
		)
	}

	renderBody = () => {
		var data = localStorage.getItem('auth');
		if (!data) {
			return this.renderHeaderLogOut();
		}
		return this.renderHeaderLogin();
	}

	render() {
		let user = this.state.user;
		return (
			<nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">
				<div className="float-left">
					<Link to="#" data-activates="slide-out" className="button-collapse">
						<i className="fa fa-bars" />
					</Link>
				</div>
				<div className="breadcrumb-dn mr-auto">
					<MenuItem />
				</div>
				<ul className="nav navbar-nav nav-flex-icons ml-auto">
					<li className="nav-item dropdown">
						<Link to="#" className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="fa fa-user" />
							{ user !== undefined && user !== null &&
							(<span className="ml-2">{user}</span>)}  Username </Link>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
							{this.renderBody()}
						</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;