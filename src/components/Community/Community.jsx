import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Community = (id) => {
  return (
    <Box sx={{ padding: "2rem" }} id="community">
      <Box
        sx={{
          backgroundColor: "aqua",
          padding: "1rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h4">Who are we</Typography>
      </Box>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Startup Founder’s Community Platform
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "2rem",
          fontSize: "1.25rem",
        }}
      >
        We are founder’s community and accelerators, for early-stage startups.
        We are enabling them with practical experience and execution, and funds
        from the people of the startup ecosystem, including entrepreneurs,
        successful and angel investors.
      </Typography>

      <Grid container spacing={4}>
        {[
          { count: "10K+", text: "Founders Joined Worktalk" },
          { count: "1k+", text: "Joined Community" },
          { count: "4k+", text: "Hrs of Founder Barnstorming" },
          { count: "1k+", text: "Hr of Mentor Discussion" },
          { count: "400+", text: "Hr of Mentor Brainstorming" },
          { count: "10", text: "Startup Raised Funds" },
          { count: "50+", text: "Successful Founders" },
          { count: "20+", text: "Micro VC Angel Network" },
          { count: "100+", text: "Active Angel Investor" },
          { count: "18+", text: "Ecosystem Partners" },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Box
              sx={{
                border: "2px solid black",
                padding: "1rem",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "8px",
                boxShadow: 2,
                backgroundColor: "#f9f9f9",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {item.count}
              </Typography>
              <Typography variant="body2">{item.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Community;
