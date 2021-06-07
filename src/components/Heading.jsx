import React from 'react'

function heading() {
    return (
        <div className="container-sm">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <a href="https://www.google.com/" className="navbar-brand">Class concepts</a>
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
                            <a className="nav-link" href="https://www.google.com/">Login</a>
                        </li>
                        <li>
                            <a className="nav-link" href="https://www.google.com/">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default heading
