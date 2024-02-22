import React from "react";

import Signup from "../singup/Signup";
import Login from "../login/Login";

import "./LogOrSign.css";

const LogOrSign = () => {
  return (
    <div className="logorsign-wrapper">
      <Signup />
      <Login />
    </div>
  );
};

export default LogOrSign;
