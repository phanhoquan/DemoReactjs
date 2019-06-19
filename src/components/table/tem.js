import React ,{Component} from 'react';
import { getListbook, updateBook, sortBy } from '../../services/listBook';
import Action from '../home/action';
import Modal from 'react-bootstrap-modal';
import Pagination from '../common/pagination';

class TableBook extends Component{
	constructor(props) {
		super(props);

		this.state = {
			dataBook: {
				listBook: [],
				page: 1,
				limit: 5,
				totalPage: 0
			},
			openModalConfirm: false,
			update: {
				name: "",
				id: ""
			}
		}
	}

	async componentWillMount() {
		const { page, limit } = this.state.dataBook;
		this._renderdata(page, limit);
	}

	_renderdata = async (page, limit) => {
		let dataResult = await getListbook(page, limit);
		this.setState({
			dataBook: {
				...this.state.dataBook,
				listBook: dataResult.data,
				totalPage: dataResult.totalPage,
			}
		});
	}

	_renderNoData = () =>{
		return(
			<tr key={0}>
				<td colSpan="4" className="text-center">NO DATA</td>
			</tr>
		)
	}

	renderTableBook = () =>{
		const { listBook } = this.state.dataBook;
		if(listBook.length === 0){
			let dataNo = this._renderNoData();
			return dataNo;
		}
		let html = [];
		listBook.map((item, index) =>{
			html.push(
				<tr key= {index}>
					<td>{index}</td>
					<td>{item.name}</td>
					<td>{item.author}</td>
					{this.props.isLogin && <td>{this._renderButtonEdit(item.id, item.name)}{this._renderButtonDelete(index)} </td>}
				</tr>
			)
			return item;
		});

		return html;
	}

	removeList = (index) =>{
		this.state.dataBook.listBook.splice(index, 1);
		this.setState(this.state);
	}
	
	handleRemove = (index) =>{
		this.removeList(index);
	}

	_renderButtonDelete = (index) =>{
		return (
			<Action
				index = {index}
				handleRemove = {this.handleRemove}
			/> 
		);
	}

	_renderButtonEdit = (id, name) =>{
		
		return (
			<button
				className="btn btn-primary btn-sm mx-2"
				onClick={() => this.onShowModal(id, name)}
			>EDIT</button>
		);
	}

	handleChangePage = (page) => {
		this.setState({
			dataBook: {
				...this.state.dataBook,
				page: page
			},
		}, () =>{
			this._renderdata(page, this.state.dataBook.limit);
		});
	};

	_renderPaging = () => {
		const { page, limit, totalPage } = this.state.dataBook;
		if (totalPage > 0) {
			return (
				<Pagination
					totalPage={totalPage}
					handleChangePage={this.handleChangePage}
					page={page}
					limit={limit}
				/>
			);
		}
	}
	

	onShowModal = (id, name) => {
		const updateName = name;
		const idUpdate = id;
		this.setState({
			...this.state,
			openModalConfirm: true,
			update:{
				name: updateName,
				id: idUpdate
			}
		});
	}

	handleChangeClose = () => {
		this.setState({
			...this.state,
			openModalConfirm: false
		})
	}

	handleDataUpdate = (name) => {
		this.setState({
			...this.state,
			update:{
				name: name.name,
				id: name.id
			}
		});
	}

	submitFormUpdate = () =>{
		const {page, limit} = {...this.state.dataBook}
		const dataForm = {...this.state.update}
		let text = dataForm.name;
		let id = dataForm.id;
		let valueUpdate = updateBook(id, text, page, limit);
		this.setState({
			...this.state,
			dataBook:{
				listBook: valueUpdate.data,
				totalPage: valueUpdate.totalPage,
				limit: limit,
				page: page
			},
			openModalConfirm: false
		}, () =>{
			this._renderdata(page, limit);
		});
	}

	renderModal = () => {
		const {name, id} = this.state.update;

		return (
			<Modal className='modalPopup w-45'
				id="ModalConfirm"
				show={this.state.openModalConfirm}
				onHide={() => this.handleChangeClose()}
			>
				<Modal.Title className="mt-0">Name Book: <span>{ name }</span></Modal.Title>
				<div className="text-center border-t">
					<input
						className="form-control w-100"
						type="text"
						defaultValue={name}
						onChange={(e) => this.handleDataUpdate({name: e.target.value, id: id})}
					/>
				</div>
				<div className="button-footer text-center mt-3">
					<button
						className="btn btn-primary mx-2"
						onClick = { this.submitFormUpdate}
					>Update</button>
					<button
						className="btn btn-secondary mx-2"
						onClick={() => this.handleChangeClose()}
					>Close</button>
				</div>

			</Modal>
		)
	}

	sortName = () => {
		const {page, limit} = {...this.state.dataBook}
		let value = sortBy(page, limit);
		this.setState({
			...this.state,
			dataBook:{
				listBook: value.data,
				totalPage: value.totalPage,
				limit: limit,
				page: page
			},
		}, () =>{
			this._renderdata(page, limit);
		});
	}

	render(){

		return(
			<div>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>No 
								<i className="fa fa-caret-down ml-2"
									onClick ={this.sortName}>
								</i>
							</th>
							<th>Name 
								<i className="fa fa-caret-down ml-2"
									onClick ={this.sortName}>
								</i>
							</th>
							<th>Author 
								<i className="fa fa-caret-down"
									onClick ={this.sortName}>
								</i>
							</th>
							{this.props.isLogin? <th>Action</th>: ""}
						</tr>
					</thead>
					<tbody>
						{this.renderTableBook()}
					</tbody>
				</table>
				{this._renderPaging()}
				{this.renderModal()}
			</div>
			
		)
	}
}
export default TableBook;
