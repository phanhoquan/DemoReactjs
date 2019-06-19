import React from 'react';
import Modal from 'react-bootstrap-modal';

const ModalPopup = ({ titleModal, messageModal, isOpenModal, handleCloseModal }) => {
	return (
		<Modal className='modalPopup w-45'
			show={isOpenModal}
			onHide={handleCloseModal}
		>
			<Modal.Header closeButton>
			</Modal.Header>
			<Modal.Title>{titleModal}</Modal.Title>
			<Modal.Body>
				<div className="mt-3 text-center">
					{messageModal}
				</div>

			</Modal.Body>
			<Modal.Footer className="text-center d-block py-0 border-top-0">
				<button className="btn btn-secondary" onClick={handleCloseModal} >확인</button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalPopup;