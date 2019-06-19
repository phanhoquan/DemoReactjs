import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav';

class HeaderProduct extends Component {
	render() {
		return (
			<header>
				<ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
					<li>
						<div className="logo-wrapper waves-light waves-effect waves-light">
							<Link to="#">
								<img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="TEXT" className="img-fluid flex-center" />
							</Link>
						</div>
					</li>
					<li>
						<ul className="social">
							<li>
								<Link to="#" className="icons-sm fb-ic">
									<i className="fa fa-facebook"> </i>
								</Link>
							</li>
							<li>
								<Link to="#" className="icons-sm pin-ic">
									<i className="fa fa-pinterest"> </i>
								</Link>
							</li>
							<li>
								<Link to="#" className="icons-sm gplus-ic">
									<i className="fa fa-google-plus"> </i>
								</Link>
							</li>
							<li>
								<Link to="#" className="icons-sm tw-ic">
									<i className="fa fa-twitter"> </i>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<form className="search-form" role="search">
							<div className="form-group waves-light waves-effect waves-light">
								<input type="text" className="form-control w-100" placeholder="Search" />
							</div>
						</form>
					</li>

					<li>
						<ul className="collapsible collapsible-accordion">
							<li>
								<Link to="#" className="collapsible-header waves-effect arrow-r">
									<i className="fa fa-shopping-bag" /> Product Page
					  				<i className="fa fa-angle-down rotate-icon" />
								</Link>
							</li>
							<li className="active">
								<Link to="#" className="collapsible-header waves-effect arrow-r active">
									<i className="fa fa-shopping-cart" /> Cart Pages
					  				<i className="fa fa-angle-down rotate-icon" />
								</Link>
							</li>
							<li>
								<Link to="#" className="collapsible-header waves-effect arrow-r">
									<i className="fa fa-dashboard" /> Homepages
					  				<i className="fa fa-angle-down rotate-icon" />
								</Link>
							</li>
							<li>
								<Link to="#" className="collapsible-header waves-effect arrow-r">
									<i className="fa fa-desktop" /> Post Pages
					  				<i className="fa fa-angle-down rotate-icon" />
								</Link>
							</li>
							<li>
								<Link to="#" className="collapsible-header waves-effect arrow-r">
									<i className="fa fa-diamond" /> Category Pages
					  				<i className="fa fa-angle-down rotate-icon" />
								</Link>
							</li>
						</ul>
					</li>
					
					<div className="sidenav-bg mask-strong" />
					<div className="ps__scrollbar-x-rail">
						<div className="ps__scrollbar-x" tabIndex={0} />
					</div>
					<div className="ps__scrollbar-y-rail">
						<div className="ps__scrollbar-y" tabIndex={0} />
					</div>
				</ul>
				<Navbar />
			</header>
		)
	}
}

export default HeaderProduct;