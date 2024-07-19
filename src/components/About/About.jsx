import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

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

function About() {
  return (
    <Grid container spacing={2} sx={{ padding: "2rem" }}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Typography variant="h4">About</Typography>
        <Typography
          variant="h2"
          sx={{
            backgroundColor: "aqua",
            display: "inline-block",
            padding: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Pedal Circle
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center", marginTop: "2rem" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 700, fontSize: "1.75rem" }}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              maxWidth: 400,
              height: 200,
              boxShadow: 3,
              borderRadius: 2,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 120, height: 120, objectFit: "contain" }}
              image={card.image}
              alt={card.title}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default About;
