import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../product/products/message';

class MessageContainer extends Component {

	render() {
		const { message } = this.props;
		return (
			<Message message={message} />
		);
	}
}

MessageContainer.propTypes ={
	message: PropTypes.string.isRequired
}

const mapDispatchToProps = state => {
	return {
		message: state.message
	}
}
export default connect(mapDispatchToProps, null)(MessageContainer);