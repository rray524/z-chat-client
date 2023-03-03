import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import logo from "../../logo/logo.png";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

const Join = () => {
  const [name, setname] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>Z CHAT</h1>
        <input
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          {" "}
          <button onClick={sendUser} className="joinbtn">
            Login In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
