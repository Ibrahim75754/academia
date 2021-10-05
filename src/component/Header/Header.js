import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-color navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/"><h1 className="text-warning">ACADEMIA</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 fs-5 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/about-us">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/courses">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;