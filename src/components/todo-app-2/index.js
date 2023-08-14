import React from "react";
import AddTodoComponent from "./add";
import ListJobComponent from "./list";

class MyToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [...JSON.parse(localStorage.getItem("list"))],
    };
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("list")).length === 0) {
      localStorage.setItem(
        "list",
        JSON.stringify([
          {
            id: 1,
            name: "Fixing Bugs",
          },
          {
            id: 2,
            name: "Coding features",
          },
        ])
      );
    }
  }

  handlePushList = (newJob) => {
    this.setState({
      list: [...this.state.list, newJob],
    });
    localStorage.setItem("list", JSON.stringify([...this.state.list, newJob]));
  };
  handleDelete = (jobId) => {
    this.setState({
      list: [...this.state.list.filter((job) => job.id !== jobId)],
    });
    localStorage.setItem(
      "list",
      JSON.stringify([...this.state.list.filter((job) => job.id !== jobId)])
    );
  };
  handleUpdateJob = (job) => {
    this.state.list.forEach((j, index) => {
      if (j.id === job.id) {
        j.name = job.name;
      }
    });
    localStorage.setItem("list", JSON.stringify([...this.state.list]));
  };
  render() {
    return (
      <>
        <h3>HELLO TO DO APP 2</h3>
        <AddTodoComponent handlePushList={this.handlePushList} />
        {this.state.list.length > 0 ? (
          <ListJobComponent
            jobList={this.state.list}
            handleDelete={this.handleDelete}
            handleUpdateJob={this.handleUpdateJob}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
export default MyToDoApp;
