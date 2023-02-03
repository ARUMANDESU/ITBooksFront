import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
    return (
        <div>
            <Link to={`/`}>Homepage</Link> <Link to={`/auth/login`}>Login</Link>{" "}
            <Link to={`/auth/register`}>Register</Link>
            {"      "}
            <SearchBar />
        </div>
    );
};

export default NavBar;
