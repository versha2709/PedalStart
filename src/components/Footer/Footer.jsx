import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#464646", color: "white", p: 4 }}>
      <Container width={1440} height={436}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Image src="/logo2.png" alt="Logo" width={305} height={106} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              PedalCircle is an innovation hub by PedalStart for selected
              early-stage startups to accelerate the journey in 4 months and
              build them seed-stage investable.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}></Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CallIcon sx={{ mr: 1 }} />
                <Typography variant="body2">+91 9650346002</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <MailOutlineIcon sx={{ mr: 1 }} />
                <Typography variant="body2">connect@pedalstart.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  SpringHouse Coworking, Grand Mall, Sikandarpur, Gurgaon,
                  Haryana 122004, IN
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
