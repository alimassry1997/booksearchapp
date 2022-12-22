import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div className="btn-login">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          localStorage.setItem("token", credentialResponse);
          jwt_decode(credentialResponse.credential);
          navigate("/home");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default LoginButton;
