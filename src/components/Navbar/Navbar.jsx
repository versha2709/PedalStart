import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#2E2929", borderRadius: 10 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Image src="/logo.jpg" alt="Logo" width={248} height={77} />
          </Typography>
          <Button color="inherit">Lorem</Button>
          <Button color="inherit">Lorem</Button>
          <Button color="inherit">Lorem</Button>
          <Button color="inherit">Lorem</Button>
          <Button color="inherit">Lorem</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
