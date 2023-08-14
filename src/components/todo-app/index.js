import React from "react";
import { withRouter } from "react-router-dom";
class TodoApplication extends React.Component {
  state = {
    job: "",
    list: [
      {
        id: 1,
        name: "cleaning desk",
        //estimate:'1h'
      },
      {
        id: 2,
        name: "Washing Dishes",
        //estimate:'1h'
      },
    ],
    updateJob: null,
    editJob: "",
  };
  handleOnChange = (event) => {
    this.setState({
      job: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100);
    this.setState({
      list: [...this.state.list, { id, name: this.state.job }],
    });
  };
  handleDelete = (event, jobId) => {
    event.preventDefault();
    this.setState({
      list: [...this.state.list.filter((job) => job.id !== jobId)],
    });
  };
  handleUpdate = (event, job) => {
    event.preventDefault();
    this.setState({
      updateJob: job.id,
      editJob: job.name,
    });
  };
  handleEdit = (event) => {
    this.setState({
      editJob: event.target.value,
    });
  };
  handleSubmitUpdate = (event, job) => {
    event.preventDefault();
    this.state.list.forEach((j, index) => {
      if (j.id === job.id) {
        j.name = this.state.editJob;
      }
    });
    this.setState({
      list: [...this.state.list],
      updateJob: null,
    });
  };
  handleRedirect = () => {
    console.log(this.props);
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <h2>TODO APP</h2>
        <form>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
            value={this.state.job}
          />
          <button type="submit" onClick={(event) => this.handleOnSubmit(event)}>
            Submit
          </button>
          <hr />
          <h3>Job List</h3>
          <ul>
            {this.state.list.map((job) => {
              return (
                <li key={job.id}>
                  ID : {job.id} ---{">"}
                  {this.state.updateJob && this.state.updateJob === job.id ? (
                    <input
                      value={this.state.editJob}
                      onChange={(event) => this.handleEdit(event)}
                    />
                  ) : (
                    job.name
                  )}{" "}
                  <button onClick={(event) => this.handleDelete(event, job.id)}>
                    X
                  </button>
                  {this.state.updateJob && this.state.updateJob === job.id ? (
                    <button
                      onClick={(event) => this.handleSubmitUpdate(event, job)}
                    >
                      Submit Edit
                    </button>
                  ) : (
                    <button onClick={(event) => this.handleUpdate(event, job)}>
                      Edit
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </form>
        <button onClick={() => this.handleRedirect()}>Click to redirect</button>
      </>
    );
  }
}

export default withRouter(TodoApplication);
