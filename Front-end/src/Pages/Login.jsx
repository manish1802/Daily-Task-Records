 import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState();
  const Navigate = useNavigate();
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    localStorage.setItem("login", true);
    const getName = localStorage.getItem("Name");
    const getPassword = localStorage.getItem("Password");
    if (getName === input.name) {
      if (getPassword === input.password) {
        return Navigate("/" ,{replace:true});
      } else {
        return setError("WRONG USERNAME AND PASSWORD");
      }
    }
    return setError("USER AND PASSWORD NOT FOUND");
  };
  return (
    <>
      <div className="login-main-container">
        <div className="loginbox">
          <p style={{ color: "white", fontSize: "25px", fontWeight: "600" }}>
            LOGIN
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            className="login-inputs"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            className="login-inputs"
            name="password"
            onChange={handleChange}
          />
          <button className="login-btn" onClick={handleSubmit}>
            Log In
          </button>
          <p style={{ color: "red" }}>{error}</p>
          {/* {err && <span style={{color: "orangered", textAlign: "center", fontSize: "18px", fontWeight: "600",}}> {err} </span>} */}
          <Link to="/signup">
            {" "}
            <button className="create-btn">Create a new account</button>
          </Link>
        </div>
      </div>
    </>
  );
}
