"use client";

import * as React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";

export default function Selection() {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h3" sx={{ marginBottom: 4, textAlign: "center" }}>
        who are we
        <Typography variant="h3" sx={{ color: "#00c8ff", display: "inline" }}>
          {" "}
          selecting?
        </Typography>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="center">
            {[
              { label: "Passionate", description: "executors" },
              { label: "Domain", description: "Agnostic" },
              { label: "Early", description: "Stage" },
              { label: "Lorem", description: "" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    height: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image src="/x.png" width={30} height={30} alt="X" />
                  <Typography
                    variant="body1"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    {item.label}
                    <br />
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#393939",
              width: "250px",
              height: "250px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <Image
              src="/selection.png"
              width={250}
              height={250}
              alt="Selection"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
