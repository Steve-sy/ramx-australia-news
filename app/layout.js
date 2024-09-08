"use client";
import * as React from "react";
import styles from "./page.module.css";
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
import Link from "next/link";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Create a custom Material UI theme with Roboto font
const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const pages = ["home", "search", "about"];
const settings = ["Login", "Register"];

export default function RootLayout({ children }) {
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

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>
          {/* Navbar starts here */}
          <AppBar
            position="static"
            sx={{ backgroundColor: "#F2F3F8", marginBottom: "20px" }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <img srcSet="/logo.png" alt="Logo" width={150} />

                {/* Mobile view */}
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="black"
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
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Link
                          key={page}
                          href={page === "home" ? "/" : `/${page}`}
                        >
                          <Button key={page} textAlign="center">
                            {page}
                          </Button>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                {/* Desktop view */}
                <Box
                  sx={{
                    marginLeft: "30px",
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {pages.map((page) => (
                    <Link key={page} href={page === "home" ? "/" : `/${page}`}>
                      <Button key={page} sx={{ my: 2, color: "black" }}>
                        {page}
                      </Button>
                    </Link>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0, display: "flex" }}>
                  <p style={{ color: "black", marginRight: "10px" }}>Guest</p>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Mustafa Ramazan"
                        src="https://i.pravatar.cc/300"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography sx={{ textAlign: "center" }}>
                          {setting}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          {/* Navbar ends here */}

          <Box sx={{ margin: "20px" }}>{children}</Box>

          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
