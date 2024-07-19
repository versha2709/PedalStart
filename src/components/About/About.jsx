"use client";
import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const cardData = [
  {
    title: "24x7 Innovation hub",
    description:
      "Get access to dedicated Entrepreneur-in-Residence (EIR) for brainstorming and guidance.",
    image: "/Images/24-hours-support 1.png",
  },
  {
    title: "Up to $250k Investment Opportunity",
    description:
      "Get access to up to $250k investment opportunity to fuel your startup's growth.",
    image: "/Images/24-hours-support 2.png",
  },
  {
    title: "Free Access to Shared Resources",
    description:
      "Get free access to shared resources for tech and marketing to help your startup grow.",
    image: "/Images/24-hours-support 4.png",
  },
  {
    title: "Additional Support",
    description:
      "Receive comprehensive support from industry experts and mentors.",
    image: "/Images/24-hours-support 5.png",
  },
];

function About(id) {
  const theme = useTheme();

  return (
    <Grid container spacing={4} sx={{ padding: "2rem" }} id="About">
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          About
        </Typography>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: "aqua",
            display: "inline-block",
            padding: "0.5rem",
            marginTop: "1rem",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Pedal Circle
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          PedalCircle is an innovation hub by PedalStart for selected
          early-stage startups to accelerate the journey in 4 months and build
          them seed-stage investable.
        </Typography>
      </Grid>
      {cardData.map((card, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          key={index}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 800,
              height: 200,
              borderBottom: `2px solid ${theme.palette.grey[300]}`,
              padding: "1rem",
              paddingLeft: "250px", // Adjust based on image size
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "white",
                padding: "1rem",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "0.5rem" }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 180,
                height: 180,
                overflow: "hidden",
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                layout="responsive"
                width={180}
                height={180}
                objectFit="contain"
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default About;
