"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#2E2929", borderRadius: 2 }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box
            component="img"
            src="/Images/logo.jpg"
            alt="Logo"
            height="40px"
          />
        </Typography>
        {/* Menu icon for mobile */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        {/* Navbar buttons for larger screens */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            href="#About"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                color: "#2E2929",
                borderRadius: 1,
              },
            }}
          >
            About
          </Button>
          <Button
            href="#community"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                color: "#2E2929",
                borderRadius: 1,
              },
            }}
          >
            Community
          </Button>
          <Button
            href="#offering"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                color: "#2E2929",
                borderRadius: 1,
              },
            }}
          >
            Offering
          </Button>
          <Button
            href="#mentors"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                color: "#2E2929",
                borderRadius: 1,
              },
            }}
          >
            Mentors
          </Button>
          <Button
            href="#FAQ"
            color="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "white",
                color: "#2E2929",
                borderRadius: 1,
              },
            }}
          >
            FAQs
          </Button>
        </Box>
        {/* Mobile menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Button
              href="#About"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E2929",
                  borderRadius: 1,
                },
              }}
            >
              About
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              href="#community"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E2929",
                  borderRadius: 1,
                },
              }}
            >
              Community
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              href="#offering"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E2929",
                  borderRadius: 1,
                },
              }}
            >
              Offering
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              href="#mentors"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E2929",
                  borderRadius: 1,
                },
              }}
            >
              Mentors
            </Button>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Button
              href="#FAQ"
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E2929",
                  borderRadius: 1,
                },
              }}
            >
              FAQs
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
