import React from "react";
import "./styles/axios.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
class AxiosDetailComponent extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    try {
      if (this.props.match && this.props.match.params) {
        const userId = this.props.match.params.id;
        const response = await axios.get(
          "https://reqres.in/api/users/" + userId
        );
        console.log(response);
        this.setState({
          user: response.data.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  hanldeBack = () => {
    this.props.history.push("/axios");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <h2>Axios Detail User</h2>
        <div>
          hello world from detail user with id: {this.props.match.params.id}
        </div>
        {isEmptyObj === false && (
          <div className="user">
            <div className="user-avatar">
              <img src={user.avatar} alt="user-avatar" />
            </div>
            <hr></hr>
            <div className="user-infor">
              <b>{user.first_name + user.last_name}</b> <br></br>
              <i>{user.email}</i>
              <br></br>
            </div>
          </div>
        )}
        <Button
          variant="success"
          className="mt-1"
          onClick={() => this.hanldeBack()}
        >
          Back
        </Button>
      </>
    );
  }
}
export default withRouter(AxiosDetailComponent);
