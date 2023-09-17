// import axios from "axios";
import axios from "./axios";
const fetchAllUser = (page) => {
  //call api reqres.in ==>get users
  return axios.get("/api/users?page=" + page);
};
const createUser = (payload) => {
  //call api reqres.in ==>get users
  return axios.post("/api/users", payload);
};
const deleteUser = (userId) => {
  //call api reqres.in ==>get users
  return axios.delete("/api/users/" + userId);
};
const loginUser = (payload) => {
  console.log(payload);
  return axios.post("/api/login", payload);
};
export { fetchAllUser, createUser, deleteUser, loginUser };
