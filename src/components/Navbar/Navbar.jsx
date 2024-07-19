import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
