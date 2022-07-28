import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" >
                        <img src="https://springrain.io/images/logo.svg" alt="logo" />
                    </a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="mb-2 navbar-nav ms-auto mb-lg-0 ">
                            <li className="nav-item" style={{ color: "#FF8A00" }}>
                                Home
                            </li>
                            <li className="nav-item">
                                About
                            </li>
                            <li className="nav-item">
                                Services
                            </li>
                            <li className="nav-item">
                                Blog
                            </li>
                            <li className="nav-item">
                                Contact
                            </li>
                            <li className="nav-item ">
                                <button className="btn button-custom">Get a Free Quote</button>

                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;