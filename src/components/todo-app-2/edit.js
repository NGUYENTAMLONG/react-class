import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditTodoComponent extends React.Component {
  state = {
    job: this.props.jobName,
  };
  handleTypeJob = (event) => {
    this.setState({
      job: event.target.value,
    });
  };
  handleSubmitJob = (event) => {
    event.preventDefault();
    if (this.state.job === "") {
      toast("Edit failure !", {
        icon: ({ theme, type }) => (
          <img
            src="/images/400.gif"
            width={"50px"}
            style={{ borderRadius: "5px" }}
            alt="gif"
          />
        ),
        autoClose: true,
      });
      return;
    }
    this.props.handlePassEditPayload({
      id: this.props.jobId,
      name: this.state.job,
    });
    toast("Edit success !", {
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
          <Form.Group controlId="job-edit-input">
            <Form.Control
              type="text"
              value={this.state.job}
              onChange={(event) => this.handleTypeJob(event)}
            />
          </Form.Group>
          <Button
            variant="primary"
            onClick={(event) => this.handleSubmitJob(event)}
          >
            Submit
          </Button>{" "}
        </Form>
        <ToastContainer autoClose={5000} />
      </>
    );
  }
}

export default EditTodoComponent;
