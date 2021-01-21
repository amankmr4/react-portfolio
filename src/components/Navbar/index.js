import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import ProjectCards from "../ProjectCards"
import Profile from "../Profile"


// now you have to create pages and import them here

function Navbar() {

    return (

        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                <a className="navbar-brand" href="index.html"><Link to="/">Aman</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarTogglerDemo02" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" style={{ marginRight: 5 }}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>

                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Profile />
                </Route>

                <Route path="/portfolio">
                    <ProjectCards />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;