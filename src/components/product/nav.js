
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './menu';

class Navbar extends Component {
	render() {
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
							<i className="fa fa-user" /> Tài Khoản</Link>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
							<Link to="#" className="dropdown-item waves-effect waves-light">Đăng Ký</Link>
							<Link to="#" className="dropdown-item waves-effect waves-light">Đăng Nhập</Link>
							<Link to="#" className="dropdown-item waves-effect waves-light">Đăng Xuất</Link>
						</div>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navbar;