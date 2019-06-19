import React, { Component } from 'react';
import HeaderProduct from '../header'

class NotFound extends Component {
	render() { 
		return (
			<div>
				<HeaderProduct/>
				<h1 className="text-center mt-5 pt-5">404 Not Found</h1>
			</div>
		)
	}
}

export default NotFound;