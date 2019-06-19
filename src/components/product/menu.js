import React, { Component } from 'react';
import { Link , Route} from 'react-router-dom';

const menus = [
	{
		label: "Trang Chủ",
		to : "/",
		icon: "fa fa-dashboard",
		activeOnlyExact: true
	},
	{
		label: "Cart Pages",
		to : "/shop",
		icon: "fa fa-shopping-cart",
		activeOnlyExact: false
	},
	{
		label: "Post Pages",
		to : "/post-page",
		icon: "fa fa-desktop",
		activeOnlyExact: false
	},
	{
		label: "Category Pages",
		to : "/category",
		icon: "fa fa-diamond",
		activeOnlyExact: false
	},

]

const MenuLink = ({label, to , icon, activeOnlyExact}) =>{
	return(
		<Route path={to} exact = { activeOnlyExact } icon = {icon} children = {({ match }) =>{
			var active = match ? 'active' : '';
				return(
					<li className={active + " breadcrumb-item"}>
						<Link to={to} className={""}>
							<i className={icon} />
								{label}
							<i className="fa fa-angle-down rotate-icon" />
						</Link>
					</li>
				)
			}}
		/>
	)
}

class MenuItem extends Component {

	showMenus = (menus) =>{
		var result = [];
		if( menus.length > 0){
			console.log("sdd")
			result = menus.map((item, index) =>{
				return(
					<MenuLink label ="Trang Chủ"
						key={index}
						to={item.to}
						icon={item.icon} 
						label={item.label}
						activeOnlyExact={item.activeOnlyExact}
					/>
				)
			});
		}
		return result;
	}

	render(){
		return(
			<ol className="breadcrumb header-breadcrumb">
				{this.showMenus(menus)}
			</ol>
		)
	}
}

export default MenuItem;