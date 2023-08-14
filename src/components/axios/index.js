import React from "react";
import "./styles/axios.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class AxiosComponent extends React.Component {
  state = {
    userList: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      const users = response.data.data;
      this.setState({
        userList: [...users],
      });
    } catch (error) {
      console.log(error);
    }
  }
  hanldeShowDetail = (userId) => {
    this.props.history.push("/axios/detail/" + userId);
  };
  // user = useSelector((state) => state.user.user);
  // loading = useSelector((state) => state.user.loading);
  render() {
    // const { user, loading } = this.props;
    console.log(this.props);
    return (
      <>
        <h2>Axios Coponent</h2>
        <div className="user-box">
          {this.state.userList.map((user, indes) => {
            return (
              <div className="user" key={user.id}>
                <div className="user-avatar">
                  <img src={user.avatar} alt="user-avatar" />
                </div>
                <hr></hr>
                <div className="user-infor">
                  <b onClick={() => this.hanldeShowDetail(user.id)}>
                    {user.first_name + user.last_name}
                  </b>{" "}
                  <br></br>
                  <i>{user.email}</i>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
const abc = (state) => {
  return {
    dataFromRedux: state,
  };
};
export default connect(abc)(withRouter(AxiosComponent));
