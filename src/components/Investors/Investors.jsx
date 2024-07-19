"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// Styled component for circular card with image
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

// Styled component for circular image
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: "50%", // Circular image
  width: 120, // Adjust the size of the image
  height: 120,
  objectFit: "cover",
  marginBottom: theme.spacing(2),
}));

export default function MentorsAndInvestors() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10, px: 2 }}>
      <Typography variant="h3" align="center" fontWeight="bold" mb={3}>
        We’re backed by incredible
      </Typography>
      <Typography
        variant="h1"
        align="center"
        fontWeight="bold"
        mb={5}
        sx={{ color: "#00C896" }}
      >
        mentors & investors
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            name: "Vikas Lakhani",
            company: "InstaOffice",
            image: "Vikas Lakhani.png",
          },
          { name: "Alok Kohli", company: "Pepsico", image: "Alok Kohli.png" },
          {
            name: "M Ramakrishnan",
            company: "Investor",
            image: "M Ramakrishnan.png",
          },
          {
            name: "Sandeep Nailwal",
            company: "Polygon",
            image: "Sandeep Nailwal.png",
          },
          {
            name: "Abhinav Kumar",
            company: "Paytm",
            image: "Abhinav Kumar.png",
          },
          {
            name: "Nikhil Thomas",
            company: "Udaan",
            image: "Nikhil Thomas.png",
          },
          {
            name: "Varun Miglani",
            company: "Angel Investor",
            image: "Varun Miglani.png",
          },
          {
            name: "Neerav Jain",
            company: "Angel Investor",
            image: "Neerav Jain.png",
          },
          {
            name: "Dhruv Kumar",
            company: "Angel Investor",
            image: "Dhruv Kumar.png",
          },
          {
            name: "Priyesh Jaiswal",
            company: "Flipkart",
            image: "Priyesh Jaiswal.png",
          },
          {
            name: "Rishav Agarwal",
            company: "Picxele",
            image: "Rishav Agarwa.png",
          },
          {
            name: "Mandeep Manocha",
            company: "Cashify",
            image: "Mandeep Manocha.png",
          },
        ].map((mentor, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item>
              <StyledCardMedia
                component="img"
                image={mentor.image}
                alt={mentor.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {mentor.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {mentor.company}
                </Typography>
              </CardContent>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
