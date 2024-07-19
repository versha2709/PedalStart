import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";

const FAQ = () => {
  return (
    <Container sx={{ mt: 4, alignItems: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        Pedal Circle FAQ
      </Typography>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "black" }}>
            How do I apply for Pedal Circle?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ color: "black" }}>
            Who can apply for Pedal Circle?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ color: "black" }}>
            How long is the Pedal Circle program?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography sx={{ color: "black" }}>
            What is the innovation hub?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography sx={{ color: "black" }}>
            How can PedalCircle help my startup grow?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography sx={{ color: "black" }}>
            Is there a specific industry focus for Pedal Circle?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ bgcolor: "#D1D2D3", borderRadius: 2, mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography sx={{ color: "black" }}>
            What happens after the program ends?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQ;
