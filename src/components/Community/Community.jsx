import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function Community() {
  return (
    <Box sx={{ padding: "2rem" }}>
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
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              10K+
            </Typography>
            <Typography variant="body2">Startup Raised Funds</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              1K+
            </Typography>
            <Typography variant="body2">Joined Community</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              4K+
            </Typography>
            <Typography variant="body2">Hrs of Founder Barnstorming</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              1K+
            </Typography>
            <Typography variant="body2">Hr of Mentor Discussion</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              400+
            </Typography>
            <Typography variant="body2">Startup Raised Funds</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              10
            </Typography>
            <Typography variant="body2">Startup Raised Funds</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              50+
            </Typography>
            <Typography variant="body2">Successful Founders</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              20+
            </Typography>
            <Typography variant="body2">Micro VC Angel Network</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              100+
            </Typography>
            <Typography variant="body2">Active Angel Investor</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
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
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              18K+
            </Typography>
            <Typography variant="body2">Ecosystem Partners</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Community;
