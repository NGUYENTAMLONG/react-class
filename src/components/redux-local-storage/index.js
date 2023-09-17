import React from "react";
import "./styles/index.scss";
import { connect } from "react-redux";
class TodolistReduxLocalStorage extends React.Component {
  state = {
    jobInput: "",
    jobEdit: false,
    jobEditName: "",
    jobIdEdit: "",
  };
  handleOnChange = (event) => {
    this.setState({
      jobInput: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createJob(this.state.jobInput);
    this.setState({
      jobInput: "",
    });
  };
  handleOnEditChange = (event) => {
    this.setState({
      jobEditName: event.target.event,
    });
  };
  handleDelete = (event, jobId) => {
    event.preventDefault();
    this.props.removeJob(jobId);
  };
  render() {
    const { jobs, user } = this.props;

    console.log(this.props);
    return (
      <>
        <h2>TODOLIST WITH REDUX (data localStorage)</h2>
        <form>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
            value={this.state.jobInput}
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
                  {this.state.jobEdit === true &&
                  this.state.jobIdEdit === job.id ? (
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
                  {/* {this.state.jobEdit && this.state.jobIdEdit === job.id ? (
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
                  )} */}
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
    data: state,
    jobs: state.data.jobs,
    user: state.data.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createJob: (job) => dispatch({ type: "ADD_JOB", payload: job }),
    removeJob: (jobId) => dispatch({ type: "REMOVE_JOB", payload: jobId }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistReduxLocalStorage);
