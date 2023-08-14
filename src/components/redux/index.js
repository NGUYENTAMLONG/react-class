import React from "react";
import { connect } from "react-redux";
import "./styles/index.scss";
class TodolistRedux extends React.Component {
  state = {
    jobInput: "",
    jobEdit: false,
    jobIdEdit: "",
    jobEditName: "",
  };
  handleOnChange = (event) => {
    this.setState({
      jobInput: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addJob({ job: { name: this.state.jobInput } });
  };
  handleDelete = (event, jobId) => {
    event.preventDefault();
    this.props.deleteJob(jobId);
  };
  handleToggleEdit = (event, job, cancel) => {
    event.preventDefault();
    this.setState({
      jobEdit: true,
      jobIdEdit: job.id,
      jobEditName: job.name,
    });
    if (cancel) {
      this.setState({
        jobEdit: false,
        jobIdEdit: "",
        jobEditName: "",
      });
    }
  };
  handleOnEditChange = (event) => {
    this.setState({
      jobEditName: event.target.value,
    });
  };
  handleOnSubmitEdit = (event) => {
    event.preventDefault();
    const payload = {
      id: this.state.jobIdEdit,
      name: this.state.jobEditName,
    };
    this.props.submitEditJob(payload);
    this.setState({
      jobInput: "",
      jobEdit: false,
      jobIdEdit: "",
      jobEditName: "",
    }); //// Chưa tự re-render **************
  };
  render() {
    const jobs = this.props.data.jobs;
    return (
      <>
        <h2>TODOLIST WITH REDUX</h2>
        <form>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button type="submit" onClick={(event) => this.handleOnSubmit(event)}>
            Submit
          </button>
          <hr />
          <h3>Job List</h3>
          <div className="jobs-box">
            {jobs.map((job) => {
              return (
                <div key={job.id} className="job">
                  ID : {job.id} ---{">"}
                  {(this.state.jobEdit =
                    true && this.state.jobIdEdit === job.id) ? (
                    <input
                      type="text"
                      onChange={(event) => {
                        this.handleOnEditChange(event);
                      }}
                      value={this.state.jobEditName}
                    />
                  ) : (
                    <b className="job__name">{job.name}</b>
                  )}
                  <button onClick={(event) => this.handleDelete(event, job.id)}>
                    X
                  </button>
                  {this.state.jobEdit && this.state.jobIdEdit === job.id ? (
                    <>
                      <button
                        onClick={(event) => this.handleOnSubmitEdit(event)}
                      >
                        Submit Edit
                      </button>
                      <button
                        onClick={(event) =>
                          this.handleToggleEdit(event, job, true)
                        }
                      >
                        CANCEL
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={(event) =>
                        this.handleToggleEdit(event, job, false)
                      }
                    >
                      EDIT
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.jobs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addJob: (job) => dispatch({ type: "ADD_JOB", payload: job }),
    deleteJob: (jobId) => dispatch({ type: "DELETE_JOB", payload: jobId }),
    submitEditJob: (job) => dispatch({ type: "UPDATE_JOB", payload: job }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodolistRedux);
