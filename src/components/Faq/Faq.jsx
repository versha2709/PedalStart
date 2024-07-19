"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Box } from "@mui/material";

const FAQ = (id) => {
  return (
    <Container
      id="FAQ"
      sx={{
        mt: 4,
        maxWidth: "md",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#333",
        }}
      >
        Pedal Circle FAQ
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
        }}
      >
        {[
          {
            question: "How do I apply for Pedal Circle?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "Who can apply for Pedal Circle?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "How long is the Pedal Circle program?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "What is the innovation hub?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "How can PedalCircle help my startup grow?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "Is there a specific industry focus for Pedal Circle?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
          {
            question: "What happens after the program ends?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          },
        ].map((item, index) => (
          <Accordion
            key={index}
            sx={{
              bgcolor: "#f9f9f9",
              borderRadius: 2,
              mb: 2,
              boxShadow: 1,
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#333" }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 8px 8px",
              }}
            >
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
