import React from "react";

class AddComponent extends React.Component {
  state = {
    name: "",
    gender: "",
    age: "",
  };
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleChangeGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  handleChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100);

    this.props.myFunction({
      id,
      ...this.state,
    });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="name">First name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={(event) => this.handleChangeName(event)}
          />
          <br />
          <label htmlFor="gender">gender:</label>
          <br />
          <input
            type="text"
            id="gender"
            value={this.state.gender}
            onChange={(event) => this.handleChangeGender(event)}
          />
          <br />
          <label htmlFor="age">age:</label>
          <br />
          <input
            type="text"
            id="age"
            value={this.state.age}
            onChange={(event) => this.handleChangeAge(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>
      </>
    );
  }
}

export default AddComponent;
