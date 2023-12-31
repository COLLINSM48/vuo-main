import React from "react";
import Authentication from "./Authentication";
import "./LoginSign.css";

function LoginSign() {
  return (
    <div className="background-image-login">
      <center>
        <h1
          style={{ color: "#ffffff", padding: "50px 30px", fontSize: "20px" }}
        >
          Welcome to the Village Upliftment Organization
        </h1>
        <p style={{ color: "#ffffff", fontSize: "16px" }}>
          Signup/Login to track your donations!
        </p>
      </center>
      <Authentication />
    </div>
  );
}
export default LoginSign;
