import React from "react";
import MyChildComponent from "./child";
import MyToggleComponent from "./toggle";
import AddComponent from "./add";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    peoples: [
      { id: 1, name: "Tam Long Nguyễn", age: 23, gender: "male" },
      { id: 2, name: "Diễm Linh Nguyễn", age: 10, gender: "female" },
      { id: 3, name: "Quang Minh Nguyễn", age: 12, gender: "male" },
      { id: 4, name: "Anh Thi Nguyễn", age: 33, gender: "female" },
    ],
  };

  handleUpdateList = (user) => {
    this.setState({
      peoples: [...this.state.peoples, { ...user }],
    });
  };
  handleDelete = (userId) => {
    const foundUser = this.state.peoples.findIndex((elm) => elm.id === userId);
    this.state.peoples.splice(foundUser, 1);
    // console.log("DELETED:", foundUser);
    // console.log("New Arr:", this.state.peoples);
    this.setState({
      peoples: [...this.state.peoples],
    });
  };

  render() {
    return (
      <>
        <h2>HTML Forms</h2>
        <AddComponent myFunction={(user) => this.handleUpdateList(user)} />
        <MyToggleComponent />
        <MyChildComponent
          peoples={this.state.peoples}
          deleteFunction={this.handleDelete}
        />
      </>
    );
  }
}

export default MyComponent;

/* 
Bai 1
state = {
    name: "Tam Long Nguyễn",
    chanel: "DEV-BG",
  };
  handleChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnClick = () => {
    alert("HELLO");
  };
      <>
        <h1>THIS IS MY COMPONENT</h1>
        <input
          type="text"
          value={this.state.name}
          placeholder="Your Name"
          onChange={(event) => this.handleChangeInput(event)}
        />
        <h1>Your Name: {this.state.name}</h1>
        <h1>Your Chanel: {this.state.chanel}</h1>
        <button onClick={() => this.handleOnClick()}>Click me</button>
      </> */
