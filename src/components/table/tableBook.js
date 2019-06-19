import React ,{Component} from 'react';
import { getListbook,  sortBy, deleteBook, searchData } from '../../services/listBook';
import Action from '../home/action';
import { Link } from 'react-router-dom';
import Search from './search';
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

	_renderTableBook = () =>{
		const { listBook, page, limit } = this.state.dataBook;
		if(listBook.length === 0){
			let dataNo = this._renderNoData();
			return dataNo;
		}
		let html = [];
		listBook.map((item, index) =>{
			html.push(
				<tr key= {index}>
					<td>{limit * (page - 1) + index + 1}</td>
					<td>{item.name}</td>
					<td>{item.author}</td>
					{this.props.isLogin && <td>{this._renderButtonEdit(item.id, item.name)}{this._renderButtonDelete(item.id)} </td>}
				</tr>
			)
			return item;
		});

		return html;
	}

	removeList = async (index) =>{
		let dataResult = await deleteBook(index);
		const {page, limit} = {...this.state.dataBook}
		this.setState({
			...this.state,
			dataBook:{
				listBook: dataResult,
				totalPage: dataResult.length,
				limit: limit,
				page: page
			},
		}, () =>{
			this._renderdata(page, limit);
		});
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

	_renderButtonEdit = (id) =>{
		return (
			<Link to={"/edit/" + id}>
				<button
					className="btn btn-primary btn-sm mx-2"
				>EDIT</button>
			</Link>
		);
	}

	_renderBtnAddNew = () =>{
		return(
			<Link to={"/addnew/"}>
				<button
					className="btn btn-primary btn-sm my-3"
				>ADD NEW</button>
			</Link>
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

	sortName = async () => {
		const {page, limit} = {...this.state.dataBook}
		let value = await sortBy(page, limit);
		this.setState({
			...this.state,
			dataBook:{
				listBook: value.data,
				totalPage: value.totalPage,
				limit: limit,
				page: page
			},
		});
	}

	_renderIconSort = () =>{
		return(
			<i className="fa fa-caret-down ml-2"
				onClick ={this.sortName}>
			</i>
		)
	}
	handleSearchBook = async (text) =>{
		const {page, limit} = {...this.state.dataBook}
		let value = text.name
		let data = await searchData(value, page, limit);
		this.setState({
			dataBook:{
				listBook: data.data,
				totalPage: data.totalPage,
				limit: limit,
				page: page
			},
		});
	}
	

	render(){

		return(
			<div>
				{this._renderBtnAddNew()}
				<Search
					handleSearch = {this.handleSearchBook}
				/>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>No{this._renderIconSort()}</th>
							<th>Name{this._renderIconSort()}</th>
							<th>Author{this._renderIconSort()}</th>
							{this.props.isLogin? <th>Action</th>: ""}
						</tr>
					</thead>
					<tbody>
						{this._renderTableBook()}
					</tbody>
				</table>
				{this._renderPaging()}
			</div>
		)
	}
}
export default TableBook;
