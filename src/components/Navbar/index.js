import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Footer from "../Footer"
import NavbarDummy from "../NavbarDummy"
import Profile from "../Profile"

// now you have to create pages and import them here

function Navbar() {

    return (

        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                <a className="navbar-brand" href="index.html">Aman</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarTogglerDemo02" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Footer />
                </Route>
                <Route path="/about">
                    <NavbarDummy />
                </Route>
                <Route path="/portfolio">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;