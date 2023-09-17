import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { createUser } from "../../../services/user-service";
import { ToastContainer, toast } from "react-toastify";

export default function AddUser(props) {
  const { handleUpdateUser } = props;
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    addUser({ name, job });
  };
  const addUser = async (payload) => {
    try {
      const res = await createUser(payload);
      if (res && res.id) {
        handleClose();
        setName("");
        setJob("");
        handleUpdateUser({
          first_name: res.name,
          email: "unknown",
          id: res.id,
          job: res.job,
        });
        toast("Add Successful !", {
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeJob = (event) => {
    setJob(event.target.value);
  };
  return (
    <div className="mb-2">
      <Button
        //   variant="success"
        className="btn-info"
        onClick={handleShow}
      >
        <i className="fa-solid fa-circle-plus"></i>
        Add User
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className="text-center w-100">
            <Modal.Title>Add User</Modal.Title>
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
            <Form.Group className="mb-3" controlId="formBasicJob">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job"
                value={job}
                onChange={(event) => handleChangeJob(event)}
              />
              <Form.Text className="text-muted">Enter your job ...</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
