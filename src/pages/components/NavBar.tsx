import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import ProfileIconComponent from "../../components/ProfileIconComponent";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to={"/"}>
                        <Typography variant="h6">IT Books</Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Box
                            sx={{
                                flexGrow: 0.2,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            <SearchBar />
                        </Box>
                    </Box>
                    <ProfileIconComponent />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
