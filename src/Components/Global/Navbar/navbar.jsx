import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../../Assets/logo.png";
import { BiLogOut } from "react-icons/bi";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/home" className="navbar-brand flex">
            <img
              className="website-logo"
              src={LogoImg}
              size={40}
              alt="website-logo"
            />
            <span className="text-uppercase fw-7 fs-24 ls-1"> BookStore </span>
          </Link>
          <button onClick={Logout}>
            <BiLogOut className="nav-icon" size={45} />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
