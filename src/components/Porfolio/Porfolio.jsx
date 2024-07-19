import * as React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#f4f6f8", py: 8 }}>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: { xs: 2, sm: 4 }, 
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: "#000",
            mb: { xs: 4, md: 0 }, 
            mr: { md: 4 }, 
            fontSize: { xs: "1.5rem", md: "2rem" }, 
          }}
        >
          Our
          <br />
          <Box
            component="span"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" }, 
              bgcolor: "aqua",
              px: 1,
              borderRadius: "2px",
            }}
          >
            Portfolio
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", 
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          {[
            {
              src: "/Images/oopar.png",
              alt: "oopar",
              width: 179.63,
              height: 53.81,
            },
            {
              src: "/Images/GuuglyWuugly.png",
              alt: "GuuglyWuugly",
              width: 202.29,
              height: 53.81,
            },
            {
              src: "/Images/Surgycall.png",
              alt: "Surgycall",
              width: 144.57,
              height: 53.81,
            },
            {
              src: "/Images/divycard.png",
              alt: "divycard",
              width: 174.73,
              height: 53.81,
            },
          ].map((image, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                mx: 1,
                mb: 2,
                width: { xs: "100%", sm: "auto" }, 
                maxWidth: "25%", 
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ maxWidth: "100%", borderRadius: "10px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
