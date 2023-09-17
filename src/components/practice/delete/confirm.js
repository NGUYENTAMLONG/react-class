import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Confirm(props) {
  const { isShowConfirm, handleClose, handleDelete, userId } = props;
  const handleCloseModal = () => handleClose();
  const handleSubmit = () => {
    handleDelete(userId);
    handleClose();
    console.log(userId);
  };

  return (
    <Modal show={isShowConfirm} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <div className="text-center w-100">
          <Modal.Title>Add User</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure ???</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="danger" onClick={handleSubmit}>
          Yessss
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
