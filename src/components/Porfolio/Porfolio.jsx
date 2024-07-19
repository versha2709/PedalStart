import * as React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

export default function Portfolio() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#f4f6f8", py: 8 }}>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "10px",
          p: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "#000", mr: 4 }}
        >
          Our
          <br />
          <Box
            component="span"
            style={{ fontWeight: "bold", fontSize: 50 }}
            sx={{ bgcolor: "aqua", px: 1, borderRadius: "2px" }}
          >
            Portfolio
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box sx={{ textAlign: "center", mx: 2 }}>
            <Image
              src="/Images/oopar.png"
              alt="oopar"
              width={179.63}
              height={53.81}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mx: 2 }}>
            <Image
              src="/Images/GuuglyWuugly.png"
              alt="GuuglyWuugly"
              width={202.29}
              height={53.81}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mx: 2 }}>
            <Image
              src="/Images/Surgycall.png"
              alt="Surgycall"
              width={144.57}
              height={53.81}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mx: 2 }}>
            <Image
              src="/Images/divycard.png"
              alt="divycard"
              width={174.73}
              height={53.81}
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
