import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
// import FormText from "react-bootstrap/FormText";
// import FormLabel from "react-bootstrap/FormLabel";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddTodoComponent extends React.Component {
  state = {
    job: "",
  };
  handleTypeJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };
  handleAddToDo = (event) => {
    event.preventDefault();
    if (this.state.job === "") {
      console.log("pass");
      toast("Can't add !", {
        icon: "😓",
        autoClose: true,
      });
      return;
    }
    const generateId = Math.floor(Math.random() * 100);
    this.props.handlePushList({
      id: generateId,
      name: this.state.job,
    });
    this.setState({
      job: "",
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
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="job-input">
            <Form.Label>Add your job</Form.Label>
            <Form.Control
              type="text"
              value={this.state.job}
              onChange={(event) => this.handleTypeJob(event)}
            />
          </Form.Group>
          <Button
            variant="success"
            className="mt-1"
            onClick={(event) => this.handleAddToDo(event)}
          >
            Success
          </Button>{" "}
          <ToastContainer autoClose={5000} />
        </Form>
      </>
    );
  }
}

export default AddTodoComponent;
