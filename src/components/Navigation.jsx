import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Navigation() {
    return (
        <div className="container-sm">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link className="navbar-brand" to="/">Class concepts</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul className="navbar-nav text-center ms-auto">
                        <li>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
