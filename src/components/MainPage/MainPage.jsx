"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function MainPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: "2rem" }}>
      <Grid container spacing={2} sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Grid container item xs={12} spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              padding: 2,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Accelerating Growth
              <br />
              Driving Success
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
              PedalCircle is an offline acceleration cohort by PedalStart,
              giving handpicked startups access to a 24x7 offline innovation
              hub, mentorship from industry experts, and up to $250k investment
              opportunity.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: 250,
                color: "#2E2929",
                borderColor: "#2E2929",
                "&:hover": {
                  borderColor: "#2E2929",
                  backgroundColor: "#2E2929",
                  color: "#FFFFFF",
                },
              }}
            >
              Start your Journey
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                backgroundColor: "#2E2929",
                color: "#FFFFFF",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="100%"
                  height="auto"
                  image="/Images/Mainpage.png"
                  alt="Train on Your Own Time"
                  sx={{
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Train on Your Own Time
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2} sx={{ marginTop: 4 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 795,
                height: 200,
                borderRadius: 2,
                backgroundColor: "#2E2929",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "#FFFFFF",
                padding: 2,
              }}
            >
              <Box sx={{ flexShrink: 0, marginRight: 2 }}>
                <Image
                  src="/Images/growth.png"
                  alt="growth"
                  width={112}
                  height={112}
                />
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 700, textAlign: "left" }}
                >
                  Ready to Grow Your Venture?
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ textAlign: "center", fontSize: 24 }}
              >
                Join our outcome-driven offline program where startups receive
                expert support and access to PedalStart’s shared resources.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
