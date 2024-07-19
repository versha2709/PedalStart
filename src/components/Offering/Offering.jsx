import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

function Offerings() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography
        variant="h2"
        sx={{ marginBottom: "2rem", textAlign: "center" }}
      >
        Offerings
      </Typography>
      <Grid container spacing={3}>
        {[
          {
            title: "24/7 Access",
            description:
              "Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources.",
            imgSrc: "/Images/support1.png",
          },
          {
            title: "Expert Mentorship",
            description:
              "Connect with former mentors and founders and domain experts who offer valuable guidance and insights curated to your start-up journey.",
            imgSrc: "/Images/24-hours-support 2.png",
          },
          {
            title: "Team Building",
            description:
              "Find potential partners within the cohort, building a strong team for collaborations and partnerships.",
            imgSrc: "/Images/24-hours-support 3.png",
          },
          {
            title: "Founder Ecosystem",
            description:
              "Join the ecosystem of fellow founders, creating opportunities for collaboration, knowledge sharing, and collective growth.",
            imgSrc: "/Images/24-hours-support 4.png",
          },
          {
            title: "Investor Networking",
            description:
              "Engage with a diverse range of investors, gaining insights into their investment criteria and thought processes.",
            imgSrc: "/Images/24-hours-support 5.png",
          },
          {
            title: "Access to Funding",
            description:
              "Opportunity to secure pre-seed/seed investments of up to $250,000 from the Pedestal Stars network.",
            imgSrc: "/Images/24-hours-support 6.png",
          },
        ].map((offering, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem",
                position: "relative",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "300px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                {offering.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
                {offering.description}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 1,
                }}
              >
                <Image
                  src={offering.imgSrc}
                  alt={`${offering.title} Icon`}
                  width={60}
                  height={60}
                  style={{
                    filter: "invert(1)",
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}
      >
        <Image src="/Images/aws.png" alt="AWS Logo" width={100} height={50} />
        <Image
          src="/Images/StartupMovers.png"
          alt="Startup Movers Logo"
          width={100}
          height={50}
        />
        <Image
          src="/Images/Notion.png"
          alt="Notion Logo"
          width={100}
          height={50}
        />
        <Image
          src="/Images/Starbucks.png"
          alt="Starbucks Logo"
          width={50}
          height={50}
        />
        <Image
          src="/Images/ccd.png"
          alt="Cafe Dig Logo"
          width={100}
          height={50}
        />
      </Box>
    </Box>
  );
}

export default Offerings;
