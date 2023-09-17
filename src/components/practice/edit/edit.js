import React from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

export default function EditUser(props) {
  const { user, handleUpdate } = props;
  const [show, setShow] = useState(false);
  const [name, setName] = useState(`${user.first_name} ${user.last_name}`);
  const [email, setEmail] = useState(`${user.email}`);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    handleUpdate({ userId: user.id, name, email });
    toast("Update Successful !", {
      icon: ({ theme, type }) => (
        <img
          src="/images/200.gif"
          width={"50px"}
          style={{ borderRadius: "5px" }}
          alt="gif"
        />
      ),
      autoClose: true,
    });
    handleClose();
  };
  return (
    <div className="mb-2">
      <Button
        //   variant="success"
        className="btn-warning"
        onClick={handleShow}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="text-center w-100">
            <Modal.Title>Edit User</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => handleChangeName(event)}
              />
              <Form.Text className="text-muted">Enter your name ...</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => handleChangeEmail(event)}
              />
              <Form.Text className="text-muted">Enter your email ...</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
