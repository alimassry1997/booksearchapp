import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <div className="login-google-btn">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          localStorage.setItem("token", credentialResponse);
          var decodedToken = jwt_decode(credentialResponse.credential);
          navigate("/home");
          console.log(decodedToken);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};
// 3763479685-u6j4ijam23dkiagmbuiato31g9992n3g.apps.googleusercontent.com

export default LoginButton;
