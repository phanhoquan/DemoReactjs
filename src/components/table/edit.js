import React, { Component } from 'react';
import { editBook, update } from '../../services/listBook';

class EditBook extends Component{
	constructor(props){
		super(props);
		this.state={
			dataBook: {
				listBook: [],
			},
			data: {
				id: "",
				name: "",
				author: ""
			}
		}
	}
 	async componentWillMount() {
		this._renderdata();
		if (this.props.match.params.id !== undefined) {
			this.setState({
				data:{
					...this.state.data,
					id: this.props.match.params.id,
				}
			});
		}
	}

	_renderdata = async () => {
		let dataBook=  await editBook(parseInt(this.props.match.params.id));
		this.setState({
			dataBook: {
				...this.state,
				listBook: dataBook,
			}
		});
	}

	handleDataUpdate = (data) => {
		this.setState({
			...this.state,
			data:{
				...this.state.data,
				...data
			}
		});
	}

	submitFormUpdate = () =>{
		const data = this.state.data
		const nameBook = this.state.dataBook.listBook;
		
		let textName = data.name;
		let textAuthor = data.author;
		let id = this.props.match.params.id;
		if(!textAuthor && !textName){
			textAuthor =nameBook.author;
			textName = nameBook.name;
		}
		let valueUpdate = update(id, textName, textAuthor);

		this.setState({
			dataBook: {
				...this.state,
				listBook: valueUpdate,
			}
		});
		this.props.history.goBack();
	}

	render(){
		
		const nameBook = this.state.dataBook.listBook;

		return(
			<div className="container w400 pt-5">
				<div className="border-t d-flex">
					<label>Name Book</label>
					<input
						className="form-control w-100"
						type="text"
						defaultValue={nameBook.name}
						onChange={(e) => this.handleDataUpdate({name: e.target.value})}
					/>
				</div>
				<div className="d-flex border-t">
					<label>Name Author</label>
					<input
						className="form-control w-100"
						type="text"
						defaultValue={nameBook.author}
						onChange={(e) => this.handleDataUpdate({author: e.target.value})}
					/>
				</div>
				<div className="button-footer text-center mt-3">
					<button
						className="btn btn-primary mx-2"
						onClick = { this.submitFormUpdate}
					>Update</button>
					<button
						className="btn btn-secondary mx-2"
						onClick={() => this.props.history.goBack()}
					>Close</button>
				</div>
			</div>
		)
	}
}

export default EditBook;