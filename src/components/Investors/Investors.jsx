"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  borderRadius: "50%",
  width: 120,
  height: 120,
  objectFit: "cover",
  marginBottom: theme.spacing(2),
}));

const MentorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

const mentors = [
  {
    name: "Vikas Lakhani",
    company: "InstaOffice",
    image: "/Images/Vikas Lakhani.png",
  },
  {
    name: "Alok Kohli",
    company: "Pepsico",
    image: "/Images/Alok Kohli .png",
  },
  {
    name: "M Ramakrishnan",
    company: "Investor",
    image: "/Images/M Ramakrishnan.png",
  },
  {
    name: "Sandeep Nailwal",
    company: "Polygon",
    image: "/Images/Sandeep Nailwal.png",
  },
  {
    name: "Abhinav Kumar",
    company: "Paytm",
    image: "/Images/Abhinav Kumar.png",
  },
  {
    name: "Nikhil Thomas",
    company: "Udaan",
    image: "/Images/Nikhil Thomas.png",
  },
  {
    name: "Varun Miglani",
    company: "Angel Investor",
    image: "/Images/Varun Miglani.png",
  },
  {
    name: "Neerav Jain",
    company: "Angel Investor",
    image: "/Images/Neerav Jain.png",
  },
  {
    name: "Dhruv Kumar",
    company: "Angel Investor",
    image: "/Images/Dhruv Kumar.png",
  },
  {
    name: "Priyesh Jaiswal",
    company: "Flipkart",
    image: "/Images/Priyesh Jaiswal.png",
  },
  {
    name: "Rishav Agarwal",
    company: "Picxele",
    image: "/Images/Rishav Agarwal.png",
  },
  {
    name: "Mandeep Manocha",
    company: "Cashify",
    image: "/Images/Mandeep Manocha.png",
  },
];

export default function MentorsAndInvestors(id) {
  return (
    <Box sx={{ flexGrow: 1, mt: 10, px: 2 }} id="mentors">
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
        {mentors.map((mentor, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <MentorContainer>
              <StyledCardMedia
                component="img"
                image={mentor.image}
                alt={mentor.name}
              />
              <Typography variant="h6" fontWeight="bold" mb={1}>
                {mentor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {mentor.company}
              </Typography>
            </MentorContainer>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
