import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid m-0">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HRMS
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Time-tracker</Link>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/time-tracker/time-log"
                        >
                          Time-Log
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/time-tracker/time-sheet"
                        >
                          Time-sheet
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item"
                          to="/time-tracker/manage-hour"
                        >
                          manage-extra-hour
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/componey-policy" className="dropdown-item">
                      Componey_policy
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item">Leave-management</Link>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/leave-management/leaves"
                        >
                          Leaves
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/leave-management/leaves-report"
                        >
                          Leave Report
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item">Payroll</Link>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/payroll/salary-slip"
                        >
                          Salery slip
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/holiday-manage">
                      Holiday-management
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Password-mgmt.
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/password-managment">
                      Password Management
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Toggle
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/toggle/toggle-report">
                      Toggle Report
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/toggle/toggle-deshboard"
                    >
                      Toggle DashBoard
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
