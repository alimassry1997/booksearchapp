import React from "react";
import "./login.css";
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
              <LoginButton />
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
