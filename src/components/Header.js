import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            eslamicoo travel
          </span>
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
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <li className="nav-item me-5">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/journeys">Journeys</Link>
            </li>
            <li className="nav-item me-5">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
