import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { isEnableMood, toggleMood } = props;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light px-5  ${
        isEnableMood ? "bg-dark text-white " : "bg-light"
      } `}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-2 mb-lg-0 w-100 align-items-center d-flex justify-content-between">
            <li className="nav-item">
              <Link
                className={`nav-link active ${
                  isEnableMood ? "text-white " : "text-dark"
                }  `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  onClick={toggleMood}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  Enable {isEnableMood ? "Dark" : "Light"} mood
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
