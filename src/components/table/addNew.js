import React, { Component } from 'react';
import { AddNewData } from '../../services/listBook';

class AddNew extends Component{
	constructor(props){
		super(props);

		this.state = {
			data:{
				name: "",
				author: ""
			}
		};
	};

	handleChangeAddNew = (data) =>{
		this.setState({
			data:{
				...this.state.data,
				...data
			}
		});
	};

	submitFormAddNew = async () =>{
		const data = this.state.data;
		if ( !data.name || !data.author){
			alert("Required Field");
		}else{
			let valueAddNew = await AddNewData(data);
			this.setState({
					data: valueAddNew,
			});
			this.props.history.goBack();
		}
	}

	render(){

		return(
			<div className="container w400 pt-5">
				<div className="border-t d-flex">
					<label>Name Book</label>
					<input
						className="form-control w-100"
						type="text"
						onChange={(e) => this.handleChangeAddNew({name: e.target.value})}
					/>
				</div>
				<div className="d-flex border-t">
					<label>Name Author</label>
					<input
						className="form-control w-100"
						type="text"
						onChange={(e) => this.handleChangeAddNew({author: e.target.value})}
					/>
				</div>
				<div className="button-footer text-center mt-3">
					<button
						className="btn btn-primary mx-2"
						onClick = { this.submitFormAddNew}
					>Add New</button>
					<button
						className="btn btn-secondary mx-2"
						onClick={() => this.props.history.goBack()}
					>Close</button>
				</div>
			</div>
		)
	}
}

export default AddNew;