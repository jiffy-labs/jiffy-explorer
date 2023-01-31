import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBar from "./SearchBar";
import { Route } from "react-router-dom";

function NavBar({ page }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const ExternalRedirect = ({ to, ...routeProps }) => {
        return <Route {...routeProps} render={() => (window.location = to)} />;
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            JiffyScan
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <MenuItem key="docs" onClick={handleCloseNavMenu}>
                                    <a
                                        target="_blank"
                                        style={{ textDecoration: "none", color: "white" }}
                                        href="https://documenter.getpostman.com/view/21318108/2s8YzZPJsr"
                                    >
                                        <Typography textAlign="center">Docs</Typography>
                                    </a>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Jiffyscan
                        </Typography>

                        <Box alignItems="right" sx={{ flexGrow: 1, display: { xs: "none", md: "flex", alignItems: "right" } }}>
                            <a
                                target="_blank"
                                style={{ textDecoration: "none", color: "white" }}
                                href="https://documenter.getpostman.com/view/21318108/2s8YzZPJsr"
                            >
                                <Button key="docs" sx={{ my: 2, color: "white", display: "block" }}>
                                    API docs
                                </Button>
                            </a>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {(page!="Home") ? (
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper elevation={2}>
                            <SearchBar />
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            ) : <></>}
        </>
    );
}
export default NavBar;
