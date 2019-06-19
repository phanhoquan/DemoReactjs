import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageActive: 1
		};
	}

	_renderPaging = () => {
		return (
			<div className="text-right">
				<ul className="pagination justify-content-center">
					{this._renderPreviousPaging()}
					{this._renderContentPaging()}
					{this._renderNextPaging()}
				</ul>
			</div>
		);
	}

	_renderPreviousPaging = () => {
		if (this.state.pageActive > 1) {
			return (
				<li className="page-item">
					<span href="#" onClick={() => this.onChangePage("Previous")} className="page-link">&#10094;</span>
				</li>
			);
		}

		return (
			<li className="page-item">
				<span className="page-link not-allowed">&#10094;</span>
			</li>
		);
	}

	_renderNextPaging = () => {
		let totalPage = Math.ceil(this.props.totalPage / this.props.limit);

		if (this.state.pageActive < totalPage) {
			return (
				<li className="page-item">
					<span onClick={() => this.onChangePage("Next")} className="page-link">&#10095;</span>
				</li>
			);
		}

		return (
			<li className="page-item">
				<span className="page-link not-allowed">&#10095;</span>
			</li>
		);
	}

	pagination = (currentPage, nrOfPages) => {
		if (!nrOfPages) {
			nrOfPages = 1;
		}

		var delta = 1,
			range = [],
			rangeWithDots = [],
			l;

		range.push(1);

		if (nrOfPages <= 1) {
			return range;
		}

		for (let i = currentPage - delta; i <= currentPage + delta; i++) {
			if (i < nrOfPages && i > 1) {
				range.push(i);
			}
		}
		range.push(nrOfPages);

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push("...");
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	}

	_renderContentPaging = () => {
		let totalPage = Math.ceil(this.props.totalPage / this.props.limit);
		let listPageNumber = this.pagination(this.state.pageActive, totalPage);

		let page = this.state.pageActive;

		if (this.props.page) {
			page = this.props.page;
		}

		return listPageNumber.map((pageNumber, index) => {
			if (!_.isNumber(pageNumber)) {
				return (
					<li key={index} className={page === pageNumber ? "page-item active" : "page-item"}>
						<span className="page-link">{pageNumber}</span>
					</li>
				);
			}
			if (listPageNumber.length === 1) {
				return (
					<li key={index} className="page-item active">
						<span onClick={() => this.onChangePage(pageNumber)} className="page-link">{pageNumber}</span>
					</li>
				);
			}

			return (
				<li key={index} className={page === pageNumber ? "page-item active" : "page-item"}>
					<span onClick={() => this.onChangePage(pageNumber)} className="page-link">{pageNumber}</span>
				</li>
			);
		});
	}

	onChangePage = (active) => {
		let totalPage = Math.ceil(this.props.totalPage / this.props.limit);

		if (active === "Previous") {
			if (this.state.pageActive > 1) {
				this.setState({
					pageActive: this.state.pageActive - 1
				});

				this.props.handleChangePage(this.state.pageActive - 1);
			}
			return;
		}

		if (active === "Next") {
			if (this.state.pageActive < totalPage) {
				this.setState({
					pageActive: this.state.pageActive + 1
				});

				this.props.handleChangePage(this.state.pageActive + 1);
			}
			return;
		}

		this.props.handleChangePage(active);

		this.setState({
			pageActive: active
		});

		return;
	}

	render() {
		return this._renderPaging();
	}
}

export default Pagination;
