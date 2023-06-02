import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const Navigate = useNavigate();

  const login = localStorage.getItem("login");
  const Logout = () => {
    localStorage.clear();
    Navigate("/" ,{replace :true});
  };
  return (
    <>
      <nav className="navbar">
        <div className="itams">
          <i className="fa fa-bars" aria-hidden="true"></i>Notes
        </div>
        <div className="navbar-btn">
          {/* <Link to="/jd" className="itam">About</Link>
            <Link to="/jd" className="itam">About</Link> */}
          <Link to="/news" className="itam">
            News
          </Link>
          <Link to="/location" className="itam">
            Location
          </Link>
          {!login ? (
            <Link to="/login" className="loginbtn">
              <button className="loginbtn">Login</button>
            </Link>
          ) : (
            <button className="loginbtn" onClick={Logout}>Logout</button>
          )}
        </div>
      </nav>
    </>
  );
}
