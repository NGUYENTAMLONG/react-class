import React from "react";

class MyToggleComponent extends React.Component {
  state = {
    flag: false,
  };
  handleChangeToggle = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    console.log(this.state.flag);
    return (
      <>
        <button onClick={() => this.handleChangeToggle()}>
          Click to Change
        </button>
        {this.state.flag ? <h1 style={{ color: "red" }}>HELLO ^^</h1> : ""}
      </>
    );
  }
}
export default MyToggleComponent;
