import React, { useEffect, useState } from "react";
import { userStore } from "../stores/UserStore";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Box, IconButton, Menu, MenuItem } from "@mui/material";

class IUserStore {}

const ProfileIconComponent = () => {
    const [bIsAccountMenu, setBIsAccountMenu] = useState(false);
    const [loginMenuAnchor, setLoginMenuAnchor] = useState<null | HTMLElement>(
        null
    );
    const user = userStore.user;
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setLoginMenuAnchor(event.currentTarget);
        setBIsAccountMenu(true);
    };
    const handleMenuClose = () => {
        setLoginMenuAnchor(null);
        setBIsAccountMenu(false);
    };
    const handleLogout = () => {
        userStore.logout();
        // eslint-disable-next-line no-restricted-globals
        location.replace("/");
    };

    const handleAccountIconPressed = () => {
        navigate(`/user/${user.username}`);
    };

    const loginMenu = (
        <Menu
            anchorEl={loginMenuAnchor}
            open={bIsAccountMenu}
            onClose={handleMenuClose}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            {user.loggedIn ? (
                <>
                    <MenuItem>
                        <Link to={`/user/${user.username}`}>Profile</Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </>
            ) : (
                <>
                    <Link to={"/auth/login"}>
                        <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
                    </Link>
                    <Link to={"/auth/register"}>
                        <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
                    </Link>
                </>
            )}
        </Menu>
    );

    return (
        <Box sx={{ display: { xs: "flex" } }}>
            {user.loggedIn ? (
                <>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        <Avatar>
                            {user.username != null &&
                                user.username.slice(0, 1).toUpperCase()}
                        </Avatar>
                        )
                    </IconButton>
                </>
            ) : (
                <>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <Avatar></Avatar>
                    </IconButton>
                </>
            )}
            {loginMenu}
        </Box>
    );
};
export default ProfileIconComponent;
