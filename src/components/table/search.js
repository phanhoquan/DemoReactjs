import React, { Component } from 'react';

class Search extends Component{
	constructor(props){
		super(props);
		this.state ={
			data :{
				value: ""
			}
		}
	}

	handleChang = (name) =>{
		this.setState({
			data: {
				value: name,
			}
		})
	}

	dataSearch = () =>{
		const {value} = this.state.data;
		var { handleSearch } = this.props;
		handleSearch(value);
	}

	keyPressed = (event) =>{
		if (event.key === "Enter") {
			this.dataSearch();
		}
	}
	
	render(){

		return(
			<div className="d-flex mb-3">
				<input
					className="form-control w-90 my-0 mr-2"
					placeholder ="Search"
					type ="text"
					onChange={(e) => this.handleChang({name: e.target.value})}
					onKeyPress={this.keyPressed}
				/>
				<button
					type ="button"
					className="btn btn-primary m-0"
					onClick={this.dataSearch}
				>
					Submit
				</button>
			</div>
		)
	}
}

export default Search;