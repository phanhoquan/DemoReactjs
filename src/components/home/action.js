import React ,{Component} from 'react';

class Action extends Component{
	
	removeRow = () =>{
		var { index, handleRemove } = this.props;
		handleRemove(index);
	}

	render(){

		return(
			<button
				className="btn btn-danger btn-sm mx-2"
				onClick={this.removeRow}
			>DELETE</button>
		)
	}
}
export default Action;
