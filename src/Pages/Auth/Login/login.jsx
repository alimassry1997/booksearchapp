import React from "react";
import "./login.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "../../../Assets/logo.png";
import LoginButton from "../../../Components/Local/Auth/auth_signin";

const Login = () => {
  document.title = "Login | ITXI";
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <section className="heading">
            <img src={Logo} alt="Logo" />
          </section>
          <section className="form">
            <form>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <div className="form-input-div">
                  <div>
                    <HiOutlineMail />
                  </div>
                  <input
                    className={"form-valid"}
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password:
                </label>
                <div className="form-input-div">
                  <div>
                    <RiLockPasswordFill />
                  </div>
                  <input
                    className={"form-valid"}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="form-group">
                <input type="submit" className="btn-login" value="Login" />
              </div>
              <LoginButton className="btn-login" />
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
