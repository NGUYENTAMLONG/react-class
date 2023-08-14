import React from "react";
import Table from "react-bootstrap/Table";
import { AiFillAppstore, AiFillDelete, AiFillHighlight } from "react-icons/ai";
import EditTodoComponent from "./edit";
import "./styles/list.scss";

class ListJobComponent extends React.Component {
  state = {
    edit: null,
  };
  handleDelete = (jobId) => {
    this.props.handleDelete(jobId);
  };
  handleSetupUpdate = (jobId) => {
    this.setState({
      edit: jobId,
    });
  };
  handlePassEditPayload = (job) => {
    this.props.handleUpdateJob(job);
    this.setState({
      edit: null,
    });
  };
  render() {
    return (
      <>
        <div style={{ width: "0 auto" }} className="mt-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID</th>
                <th>Name</th>
                <th>
                  <AiFillAppstore />
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.jobList.map((job, index) => {
                return (
                  <tr key={job.id}>
                    <td>{index + 1}</td>
                    <td>{job.id}</td>
                    <td>
                      {this.state.edit && this.state.edit === job.id ? (
                        <EditTodoComponent
                          jobId={this.state.edit}
                          jobName={job.name}
                          handlePassEditPayload={this.handlePassEditPayload}
                        />
                      ) : (
                        job.name
                      )}
                    </td>
                    <td>
                      {this.state.edit && this.state.edit === job.id ? (
                        ""
                      ) : (
                        <>
                          <AiFillHighlight
                            className="edit-btn"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              this.handleSetupUpdate(job.id);
                            }}
                          />{" "}
                          {" | "}
                        </>
                      )}
                      <AiFillDelete
                        className="delete-btn"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleDelete(job.id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}
export default ListJobComponent;
