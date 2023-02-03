import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to={`/`}>Homepage</Link> <Link to={`/auth/login`}>Login</Link>{" "}
            <Link to={`/auth/register`}>Register</Link>
        </div>
    );
};

export default NavBar;
