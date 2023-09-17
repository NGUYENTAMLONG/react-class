import React from "react";
import "../account/login.scss";
import { useState } from "react";
import { loginUser } from "../../../services/user-service";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const [view, setView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  const changeViewPassword = () => {
    setView(!view);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (value) => {
    setPassword(value);
  };
  const handleLogin = async () => {
    try {
      setLoadingLogin(true);
      const res = await loginUser({
        email,
        password,
      });
      setLoadingLogin(false);
      if (res.status === 400) {
        console.log("sadf");
        toast(res.data.error, {
          icon: ({ theme, type }) => (
            <img
              src="/images/400.gif"
              width={"50px"}
              style={{ borderRadius: "5px" }}
              alt="gif"
            />
          ),
          autoClose: true,
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form__header">
          <p>Log in</p>
        </div>
        <div className="login-form__label">
          <label>Email or Username</label>
          <span>Log in with phone</span>
        </div>
        <div className="login-form__inputs">
          <input
            className="login-form__inputs__item"
            type="text"
            onChange={(e) => handleChangeEmail(e)}
          />
          <div id="password-input">
            <input
              className="login-form__inputs__item"
              type={view ? "text" : "password"}
              onChange={(e) => handleChangePassword(e.target.value)}
            />
            <i
              className={view ? "fas fa-eye-slash" : "fas fa-eye"}
              onMouseDown={changeViewPassword}
              onMouseUp={changeViewPassword}
            ></i>
          </div>
          <p>Forgot password?</p>
          <i class="fa fa-spinner fa-spin"></i>
          <i class="fa fa-circle-o-notch fa-spin"></i>
          <button onClick={handleLogin}>
            {loadingLogin ? <span class="spinner rotate"></span> : `Login`}
          </button>
          <ToastContainer autoClose={5000} />
        </div>
      </div>
    </div>
  );
}
